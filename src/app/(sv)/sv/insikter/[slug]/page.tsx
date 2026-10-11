import { notFound } from "next/navigation";
import { ArticlePage, articleMetadata, insightIdFromSlug, insightParams } from "@/views/doc-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightParams("sv");
}

export async function generateMetadata({ params }: PageProps<"/sv/insikter/[slug]">) {
  const id = insightIdFromSlug("sv", (await params).slug);
  return id ? articleMetadata("sv", id) : {};
}

export default async function Page({ params }: PageProps<"/sv/insikter/[slug]">) {
  const id = insightIdFromSlug("sv", (await params).slug);
  if (!id) notFound();
  return <ArticlePage locale="sv" id={id} />;
}
