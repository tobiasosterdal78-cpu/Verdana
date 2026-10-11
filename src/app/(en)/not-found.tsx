import { NotFoundPage, notFoundMetadata } from "@/views/not-found-page";

export const metadata = notFoundMetadata("en");

export default function NotFound() {
  return <NotFoundPage locale="en" />;
}
