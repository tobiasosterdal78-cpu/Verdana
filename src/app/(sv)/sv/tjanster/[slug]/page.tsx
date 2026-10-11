import { notFound } from "next/navigation";
import { ServicePage, serviceIdFromSlug, serviceMetadata, serviceParams } from "@/views/service-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceParams("sv");
}

export async function generateMetadata({ params }: PageProps<"/sv/tjanster/[slug]">) {
  const id = serviceIdFromSlug("sv", (await params).slug);
  return id ? serviceMetadata("sv", id) : {};
}

export default async function Page({ params }: PageProps<"/sv/tjanster/[slug]">) {
  const id = serviceIdFromSlug("sv", (await params).slug);
  if (!id) notFound();
  return <ServicePage locale="sv" id={id} />;
}
