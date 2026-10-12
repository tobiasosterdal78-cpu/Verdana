/**
 * Site-wide configuration. The production domain is not decided yet, so the
 * canonical origin comes from SITE_URL at build time. Search indexing stays
 * off until SITE_INDEXING=on is set for the approved production build.
 */
const origin = (process.env.SITE_URL ?? "http://127.0.0.1:3000").replace(/\/+$/, "");

export const site = {
  name: "Vardena",
  origin,
  indexable: process.env.SITE_INDEXING === "on",
} as const;

/**
 * Company details Robin has confirmed, shown in the footer and the
 * Organization data. Enquiries from the contact form go to the email address.
 */
export const company = { orgNumber: "559602-6616", email: "hello@vardena.se" } as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.origin}/`).toString();
}
