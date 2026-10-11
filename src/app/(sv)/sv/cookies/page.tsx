import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("sv", "cookies");

export default function Page() {
  return <LegalPage locale="sv" id="cookies" />;
}
