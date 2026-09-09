import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DAMIT Real Estate Consultants | Real Estate in Nairobi, Kenya",
    template: "%s | DAMIT Real Estate Consultants",
  },
  description:
    "DAMIT Real Estate Consultants helps you discover quality homes, apartments, land and commercial properties in Nairobi and across Kenya.",
  keywords: [
    "real estate Kenya",
    "real estate Nairobi",
    "property for sale Nairobi",
    "property for rent Nairobi",
    "apartments for sale Nairobi",
    "property management Nairobi",
    "realtors Nairobi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "DAMIT Real Estate Consultants",
    title: "DAMIT Real Estate Consultants | Real Estate in Nairobi, Kenya",
    description:
      "Thoughtful guidance for homes, land, and commercial opportunities in Nairobi and across Kenya.",
    url: "/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
        width: 1600,
        height: 900,
        alt: "DAMIT Real Estate Consultants property view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAMIT Real Estate Consultants | Real Estate in Nairobi, Kenya",
    description:
      "Thoughtful guidance for homes, land, and commercial opportunities in Nairobi and across Kenya.",
    images: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/manus-storage/intrepid-monogram_240235ad.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
