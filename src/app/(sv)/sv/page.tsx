import { HomePage, homeMetadata } from "@/views/home-page";

export const metadata = homeMetadata("sv");

export default function Page() {
  return <HomePage locale="sv" />;
}
