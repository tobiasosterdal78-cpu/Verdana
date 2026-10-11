import { BusinessCentralPage, businessCentralMetadata } from "@/views/doc-pages";

export const metadata = businessCentralMetadata("en");

export default function Page() {
  return <BusinessCentralPage locale="en" />;
}
