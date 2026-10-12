import type { Metadata } from "next";
import type { Faq } from "@/content/types";
import { LOCALE_TAGS, OG_LOCALES, type Locale } from "@/lib/i18n";
import { alternates, type PageId, type Route } from "@/lib/routes";
import { absoluteUrl, company, site } from "@/lib/site";

type PageMeta = {
  locale: Locale;
  route: Route | PageId;
  /** Full title tag, brand included. Keep it under 60 characters. */
  title: string;
  /** Keep it between 110 and 155 characters. */
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** The share image: the owner's logo on the midnight band, 1200 x 630. */
const SHARE_IMAGE = { url: "/brand/vardena-og.png", width: 1200, height: 630 } as const;
const SHARE_ALT: Record<Locale, string> = {
  en: "Vardena, Business Central consultancy in Sweden",
  sv: "Vardena, Business Central-konsulter i Sverige",
};

/**
 * Metadata for one page in one language: a self-referencing canonical,
 * hreflang for both languages with English as x-default, and Open Graph.
 */
export function pageMetadata({
  locale,
  route,
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMeta): Metadata {
  const paths = alternates(route);
  const path = paths[locale];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: { [LOCALE_TAGS.en]: paths.en, [LOCALE_TAGS.sv]: paths.sv, "x-default": paths.en },
    },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: site.name,
      locale: OG_LOCALES[locale],
      alternateLocale: Object.entries(OG_LOCALES)
        .filter(([key]) => key !== locale)
        .map(([, value]) => value),
      images: [{ ...SHARE_IMAGE, alt: SHARE_ALT[locale] }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [SHARE_IMAGE.url] },
  };
}

/* ── Structured data (schema.org JSON-LD) ──────────────────────────── */

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");

const SWEDEN: Record<Locale, string> = { en: "Sweden", sv: "Sverige" };

export function organizationNode(description: string) {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    alternateName: "Vardena Business Central",
    // Says which Vardena, should the name be shared with other firms.
    disambiguatingDescription: "Microsoft Dynamics 365 Business Central consultancy based in Sweden",
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/vardena-mark-512.png"),
      width: 512,
      height: 512,
    },
    description,
    email: company.email,
    iso6523Code: `0007:${company.orgNumber.replace("-", "")}`,
    areaServed: { "@type": "Country", name: "Sweden" },
    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Dynamics NAV",
      "Enterprise resource planning",
      "ERP implementation",
      "Systems integration",
      "Power BI",
      "Microsoft Power Platform",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    alternateName: ["Vardena Business Central"],
    url: absoluteUrl("/"),
    inLanguage: [LOCALE_TAGS.en, LOCALE_TAGS.sv],
    publisher: { "@id": organizationId },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceNode(locale: Locale, service: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${service.path}#service`),
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: SWEDEN[locale] },
    inLanguage: LOCALE_TAGS[locale],
  };
}

export function webPageNode(
  locale: Locale,
  page: {
    name: string;
    description: string;
    path: string;
    type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  },
) {
  return {
    "@type": page.type ?? "WebPage",
    "@id": absoluteUrl(`${page.path}#webpage`),
    url: absoluteUrl(page.path),
    name: page.name,
    description: page.description,
    inLanguage: LOCALE_TAGS[locale],
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

export function articleNode(
  locale: Locale,
  article: { headline: string; description: string; path: string; datePublished: string; dateModified: string },
) {
  return {
    "@type": "Article",
    "@id": absoluteUrl(`${article.path}#article`),
    headline: article.headline,
    description: article.description,
    url: absoluteUrl(article.path),
    mainEntityOfPage: absoluteUrl(article.path),
    image: absoluteUrl(SHARE_IMAGE.url),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: LOCALE_TAGS[locale],
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
  };
}
