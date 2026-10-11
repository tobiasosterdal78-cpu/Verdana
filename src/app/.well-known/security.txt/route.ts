import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** RFC 9116. Reports go through the contact page; the policy is on /security. */
export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  const body = [
    `Contact: ${absoluteUrl("/contact")}`,
    `Expires: ${expires.toISOString().replace(/\.\d{3}Z$/, ".000Z")}`,
    `Policy: ${absoluteUrl("/security")}`,
    "Preferred-Languages: en, sv",
    `Canonical: ${absoluteUrl("/.well-known/security.txt")}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
