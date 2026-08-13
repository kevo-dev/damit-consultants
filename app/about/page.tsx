import type { Metadata } from "next";

import { AboutPage } from "../site";

export const metadata: Metadata = {
  title: "About DAMIT Real Estate Consultants",
  description:
    "Learn how DAMIT Real Estate Consultants helps clients make clearer property decisions across Nairobi and Kenya.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
