import { DetailPage } from "../../site";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PropertyPageProps) {
  const { id } = await params;

  return <DetailPage id={id} />;
}
