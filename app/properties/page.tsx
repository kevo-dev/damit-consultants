import type { Metadata } from "next";

import { PropertiesPage } from "../site";

export const metadata: Metadata = {
  title: "Properties in Nairobi",
  description:
    "Explore sample homes, apartments, land, and commercial property opportunities across Nairobi with DAMIT Real Estate Consultants.",
  alternates: {
    canonical: "/properties",
  },
};

export default function Page() {
  return <PropertiesPage />;
}
