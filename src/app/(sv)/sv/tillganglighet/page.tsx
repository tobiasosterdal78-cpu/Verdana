import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("sv", "accessibility");

export default function Page() {
  return <LegalPage locale="sv" id="accessibility" />;
}
