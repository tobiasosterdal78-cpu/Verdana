import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("sv", "terms");

export default function Page() {
  return <LegalPage locale="sv" id="terms" />;
}
