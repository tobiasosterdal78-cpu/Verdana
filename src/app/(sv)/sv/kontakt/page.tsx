import { ContactPage, contactMetadata } from "@/views/contact-page";

export const metadata = contactMetadata("sv");

export default function Page() {
  return <ContactPage locale="sv" />;
}
