// Style reminder: Nairobi Quiet Luxury — editorial property data, concise metadata, and locally grounded Nairobi context.

export type Property = {
  id: string;
  title: string;
  location: string;
  area: string;
  status: "For Sale" | "For Rent";
  price: string;
  priceValue: number;
  type: "Apartment" | "House" | "Villa" | "Land" | "Commercial";
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  sample: boolean;
};

export const properties: Property[] = [
  { id: "kilimani-skyline", title: "The Skyline Residence", location: "Kilimani, Nairobi", area: "Kilimani", status: "For Sale", price: "KES 18,500,000", priceValue: 18500000, type: "Apartment", bedrooms: 3, bathrooms: 3, parking: 2, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"], description: "A considered three-bedroom apartment with generous light, clean architectural lines, and a well-connected Kilimani address.", features: ["Open-plan kitchen", "Full-height windows", "Resident gym", "Backup generator"], sample: true },
  { id: "kileleshwa-courtyard", title: "Courtyard Apartments", location: "Kileleshwa, Nairobi", area: "Kileleshwa", status: "For Rent", price: "KES 145,000 / month", priceValue: 145000, type: "Apartment", bedrooms: 2, bathrooms: 2, parking: 1, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"], description: "An airy two-bedroom home shaped around a quiet courtyard, with a practical layout for modern Nairobi living.", features: ["Private balcony", "CCTV security", "Lift access", "Borehole water"], sample: true },
  { id: "lavington-garden", title: "Lavington Garden Suites", location: "Lavington, Nairobi", area: "Lavington", status: "For Sale", price: "KES 24,000,000", priceValue: 24000000, type: "Apartment", bedrooms: 3, bathrooms: 3, parking: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"], description: "A spacious three-bedroom residence in a leafy setting, pairing calm interiors with easy access to the city.", features: ["DSQ included", "Private garden", "Clubhouse", "2 parking bays"], sample: true },
  { id: "westlands-arcade", title: "Westlands Business Arcade", location: "Westlands, Nairobi", area: "Westlands", status: "For Rent", price: "KES 280,000 / month", priceValue: 280000, type: "Commercial", bedrooms: 0, bathrooms: 2, parking: 4, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"], description: "A well-positioned commercial opportunity for a team that values visibility, access, and a polished client experience.", features: ["Reception area", "Boardroom", "Fibre ready", "Visitor parking"], sample: true },
  { id: "karen-ridge", title: "Karen Ridge Villa", location: "Karen, Nairobi", area: "Karen", status: "For Sale", price: "KES 78,000,000", priceValue: 78000000, type: "Villa", bedrooms: 5, bathrooms: 5, parking: 4, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"], description: "A private five-bedroom villa in a green Karen setting, with room to gather, work, and settle in.", features: ["Mature garden", "Staff quarters", "Fireplace", "Gated compound"], sample: true },
  { id: "runda-acre", title: "Runda Residential Acre", location: "Runda, Nairobi", area: "Runda", status: "For Sale", price: "KES 55,000,000", priceValue: 55000000, type: "Land", bedrooms: 0, bathrooms: 0, parking: 0, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85", "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=85"], description: "A spacious residential parcel in Runda for a considered future home or long-term property investment.", features: ["Quiet residential road", "Red soil parcel", "Established neighbourhood", "Good road access"], sample: true },
];

export const whatsappUrl = "https://wa.me/2547259414140?text=Hello%20DAMIT%20Real%20Estate%20Consultants%2C%20I%20would%20like%20to%20enquire%20about%20a%20property.";
export const phoneUrl = "tel:+2547259414140";
