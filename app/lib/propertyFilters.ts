import type { Property } from "./propertyData";

export type PropertyFilters = {
  search: string;
  location: string;
  type: string;
  status: string;
  price: string;
};

export const emptyPropertyFilters: PropertyFilters = {
  search: "",
  location: "",
  type: "",
  status: "",
  price: "",
};

export function propertyFiltersFromSearch(search: string): PropertyFilters {
  const params = new URLSearchParams(search);

  return {
    search: params.get("search") || "",
    location: params.get("location") || "",
    type: params.get("type") || "",
    status: params.get("status") || "",
    price: params.get("price") || "",
  };
}

function matchesPriceRange(property: Property, price: string): boolean {
  if (!price) return true;
  if (price === "under-10") return property.priceValue < 10_000_000;
  if (price === "10-30") return property.priceValue >= 10_000_000 && property.priceValue <= 30_000_000;
  if (price === "above-30") return property.priceValue > 30_000_000;

  return true;
}

export function filterProperties(properties: Property[], filters: PropertyFilters): Property[] {
  const search = filters.search.trim().toLowerCase();

  return properties.filter((property) => {
    const matchesSearch = !search || `${property.title} ${property.location}`.toLowerCase().includes(search);
    const matchesLocation = !filters.location || property.area === filters.location;
    const matchesType = !filters.type || property.type === filters.type;
    const matchesStatus = !filters.status || property.status === filters.status;

    return matchesSearch && matchesLocation && matchesType && matchesStatus && matchesPriceRange(property, filters.price);
  });
}
