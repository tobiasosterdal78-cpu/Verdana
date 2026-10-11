import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/** Crawling is closed until SITE_INDEXING=on is set for the approved production build. */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") };
}
