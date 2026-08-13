import type { Metadata } from "next";

import { ContactPage } from "../site";

export const metadata: Metadata = {
  title: "Contact DAMIT Real Estate Consultants",
  description:
    "Start a conversation with DAMIT Real Estate Consultants in Kilimani, Nairobi, about your next property decision.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
