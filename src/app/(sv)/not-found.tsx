import { NotFoundPage, notFoundMetadata } from "@/views/not-found-page";

export const metadata = notFoundMetadata("sv");

export default function NotFound() {
  return <NotFoundPage locale="sv" />;
}
