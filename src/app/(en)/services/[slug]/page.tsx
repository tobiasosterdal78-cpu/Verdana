import { notFound } from "next/navigation";
import { ServicePage, serviceIdFromSlug, serviceMetadata, serviceParams } from "@/views/service-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceParams("en");
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const id = serviceIdFromSlug("en", (await params).slug);
  return id ? serviceMetadata("en", id) : {};
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const id = serviceIdFromSlug("en", (await params).slug);
  if (!id) notFound();
  return <ServicePage locale="en" id={id} />;
}
