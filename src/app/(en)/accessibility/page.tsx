import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("en", "accessibility");

export default function Page() {
  return <LegalPage locale="en" id="accessibility" />;
}
