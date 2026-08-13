import type { Metadata } from "next";

import { DetailPage } from "../../site";
import { properties } from "../../lib/propertyData";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    return {
      title: "Property not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${property.title} — ${property.location}`,
    description: property.description,
    alternates: {
      canonical: `/properties/${property.id}`,
    },
    openGraph: {
      type: "article",
      title: `${property.title} — ${property.location}`,
      description: property.description,
      images: [
        {
          url: property.image,
          alt: `${property.title} in ${property.location}`,
        },
      ],
    },
  };
}

export default async function Page({ params }: PropertyPageProps) {
  const { id } = await params;

  return <DetailPage id={id} />;
}
