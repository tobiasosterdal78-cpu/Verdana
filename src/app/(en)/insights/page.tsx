import { InsightsPage, insightsMetadata } from "@/views/doc-pages";

export const metadata = insightsMetadata("en");

export default function Page() {
  return <InsightsPage locale="en" />;
}
