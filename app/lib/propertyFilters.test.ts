import { describe, expect, it } from "vitest";

import { properties } from "./propertyData";
import { emptyPropertyFilters, filterProperties, propertyFiltersFromSearch } from "./propertyFilters";

describe("propertyFiltersFromSearch", () => {
  it("reads supported property filters from the URL query string", () => {
    expect(propertyFiltersFromSearch("?location=Kilimani&type=Apartment&status=For%20Sale&price=10-30")).toEqual({
      search: "",
      location: "Kilimani",
      type: "Apartment",
      status: "For Sale",
      price: "10-30",
    });
  });

  it("returns empty filters when the query string has no supported values", () => {
    expect(propertyFiltersFromSearch("?campaign=homepage")).toEqual(emptyPropertyFilters);
  });
});

describe("filterProperties", () => {
  it("returns every property when no criteria are selected", () => {
    expect(filterProperties(properties, emptyPropertyFilters)).toEqual(properties);
  });

  it("applies location, property type, and listing status together", () => {
    const results = filterProperties(properties, {
      ...emptyPropertyFilters,
      location: "Kilimani",
      type: "Apartment",
      status: "For Sale",
    });

    expect(results.map((property) => property.id)).toEqual(["kilimani-skyline"]);
  });

  it("uses inclusive boundaries for the KES 10M–30M price range", () => {
    const results = filterProperties(properties, { ...emptyPropertyFilters, price: "10-30" });

    expect(results.map((property) => property.id)).toEqual(["kilimani-skyline", "lavington-garden"]);
    expect(results.every((property) => property.priceValue >= 10_000_000 && property.priceValue <= 30_000_000)).toBe(true);
  });

  it("separates listings above KES 30M from the lower price ranges", () => {
    const results = filterProperties(properties, { ...emptyPropertyFilters, price: "above-30" });

    expect(results.map((property) => property.id)).toEqual(["karen-ridge", "runda-acre"]);
  });

  it("matches a trimmed search query across titles and neighbourhoods without case sensitivity", () => {
    const results = filterProperties(properties, { ...emptyPropertyFilters, search: "  WESTLANDS  " });

    expect(results.map((property) => property.id)).toEqual(["westlands-arcade"]);
  });
});
