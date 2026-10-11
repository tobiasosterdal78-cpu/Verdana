import { SiteShell } from "@/components/layout/site-shell";
import { NotFoundPage, notFoundMetadata } from "@/views/not-found-page";

/* Unmatched URLs render outside both root layouts. English is the default
   language, except under /sv, which is handled by the Swedish group's own
   not-found page. */
export const metadata = notFoundMetadata("en");

export default function GlobalNotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundPage locale="en" />
    </SiteShell>
  );
}
