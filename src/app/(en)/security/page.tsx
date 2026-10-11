import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("en", "security");

export default function Page() {
  return <LegalPage locale="en" id="security" />;
}
