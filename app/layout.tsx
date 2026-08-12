import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DAMIT Real Estate Consultants | Real Estate in Nairobi, Kenya",
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
