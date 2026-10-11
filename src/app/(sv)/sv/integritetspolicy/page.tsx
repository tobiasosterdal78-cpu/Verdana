import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("sv", "privacy");

export default function Page() {
  return <LegalPage locale="sv" id="privacy" />;
}
