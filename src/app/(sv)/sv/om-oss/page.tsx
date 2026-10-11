import { AboutPage, aboutMetadata } from "@/views/about-page";

export const metadata = aboutMetadata("sv");

export default function Page() {
  return <AboutPage locale="sv" />;
}
