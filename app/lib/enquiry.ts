export type EnquiryDetails = {
  name: string;
  phone: string;
  email?: string;
  interest?: string;
  mode?: string;
  message?: string;
};

export type WindowOpener = (url: string, target: string, features: string) => unknown;

const whatsappBaseUrl = "https://wa.me/2547259414140";

function valueOrFallback(value: string | undefined, fallback = "Not provided"): string {
  return value?.trim() || fallback;
}

export function createEnquiryMessage(details: EnquiryDetails): string {
  return [
    "Hello DAMIT Real Estate Consultants,",
    `Name: ${valueOrFallback(details.name)}`,
    `Phone: ${valueOrFallback(details.phone)}`,
    `Email: ${valueOrFallback(details.email)}`,
    `Property interest: ${valueOrFallback(details.interest)}`,
    `Buy or rent: ${valueOrFallback(details.mode)}`,
    `Message: ${valueOrFallback(details.message)}`,
  ].join("\n");
}

export function createWhatsAppEnquiryUrl(details: EnquiryDetails): string {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(createEnquiryMessage(details))}`;
}

export function openWhatsAppEnquiry(details: EnquiryDetails, openWindow: WindowOpener): string {
  const url = createWhatsAppEnquiryUrl(details);
  openWindow(url, "_blank", "noopener,noreferrer");
  return url;
}
