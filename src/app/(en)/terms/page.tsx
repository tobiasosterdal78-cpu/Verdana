import { LegalPage, legalMetadata } from "@/views/doc-pages";

export const metadata = legalMetadata("en", "terms");

export default function Page() {
  return <LegalPage locale="en" id="terms" />;
}
