import { notFound } from "next/navigation";
import { ArticlePage, articleMetadata, insightIdFromSlug, insightParams } from "@/views/doc-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightParams("en");
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  const id = insightIdFromSlug("en", (await params).slug);
  return id ? articleMetadata("en", id) : {};
}

export default async function Page({ params }: PageProps<"/insights/[slug]">) {
  const id = insightIdFromSlug("en", (await params).slug);
  if (!id) notFound();
  return <ArticlePage locale="en" id={id} />;
}
