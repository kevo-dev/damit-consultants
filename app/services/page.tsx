import type { Metadata } from "next";

import { ServicesPage } from "../site";

export const metadata: Metadata = {
  title: "Real Estate Services in Nairobi",
  description:
    "Explore DAMIT Real Estate Consultants services for property sales, rentals, management, valuation, investment, and consultancy.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
