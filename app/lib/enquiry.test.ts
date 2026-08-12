import { describe, expect, it, vi } from "vitest";

import { createEnquiryMessage, createWhatsAppEnquiryUrl, openWhatsAppEnquiry } from "./enquiry";

const completeEnquiry = {
  name: "Amina Njeri",
  phone: "0725941414",
  email: "amina@example.com",
  interest: "Apartment",
  mode: "Buy",
  message: "I would like to view the Kilimani listing.",
};

describe("createEnquiryMessage", () => {
  it("formats all supplied enquiry details as a readable WhatsApp message", () => {
    expect(createEnquiryMessage(completeEnquiry)).toBe(
      [
        "Hello DAMIT Real Estate Consultants,",
        "Name: Amina Njeri",
        "Phone: 0725941414",
        "Email: amina@example.com",
        "Property interest: Apartment",
        "Buy or rent: Buy",
        "Message: I would like to view the Kilimani listing.",
      ].join("\n"),
    );
  });

  it("uses a clear fallback for optional blank fields", () => {
    const message = createEnquiryMessage({
      name: "Amina Njeri",
      phone: "0725941414",
      email: " ",
      interest: "",
      mode: undefined,
      message: "",
    });

    expect(message).toContain("Email: Not provided");
    expect(message).toContain("Property interest: Not provided");
    expect(message).toContain("Buy or rent: Not provided");
    expect(message).toContain("Message: Not provided");
  });
});

describe("createWhatsAppEnquiryUrl", () => {
  it("creates a WhatsApp URL with a safely encoded, complete enquiry message", () => {
    const url = new URL(createWhatsAppEnquiryUrl(completeEnquiry));

    expect(url.origin + url.pathname).toBe("https://wa.me/2547259414140");
    expect(url.searchParams.get("text")).toBe(createEnquiryMessage(completeEnquiry));
  });
});

describe("openWhatsAppEnquiry", () => {
  it("opens the generated URL in a protected new tab and returns that URL", () => {
    const openWindow = vi.fn();

    const url = openWhatsAppEnquiry(completeEnquiry, openWindow);

    expect(openWindow).toHaveBeenCalledWith(url, "_blank", "noopener,noreferrer");
    expect(url).toBe(createWhatsAppEnquiryUrl(completeEnquiry));
  });
});
