import { BusinessCentralPage, businessCentralMetadata } from "@/views/doc-pages";

export const metadata = businessCentralMetadata("sv");

export default function Page() {
  return <BusinessCentralPage locale="sv" />;
}
