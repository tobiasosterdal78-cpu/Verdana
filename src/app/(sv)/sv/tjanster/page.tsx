import { ServicesPage, servicesMetadata } from "@/views/services-page";

export const metadata = servicesMetadata("sv");

export default function Page() {
  return <ServicesPage locale="sv" />;
}
