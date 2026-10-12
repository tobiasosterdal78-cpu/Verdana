import type { Metadata } from "next";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * Root-layout metadata: only what is true for every page of a language.
 * Canonicals, hreflang and Open Graph URLs come from each page's
 * pageMetadata(), which knows the page and its language.
 */
export function siteMetadata(locale: Locale): Metadata {
  const { home } = getContent(locale);
  return {
    metadataBase: new URL(site.origin),
    title: { default: home.metaTitle, template: "%s | Vardena" },
    description: home.metaDescription,
    applicationName: site.name,
    robots: site.indexable
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
      : { index: false, follow: false },
    formatDetection: { telephone: false, email: false, address: false },
  };
}
