import { LOCALES, localePath, splitLocale, type Locale } from "@/lib/i18n";

/**
 * Every public page, keyed by a language-neutral id, with its path in each
 * language. Navigation, metadata alternates, the sitemap and the language
 * switcher all read from here, so a page's two URLs can never disagree.
 */
export const PAGES = {
  home: { en: "/", sv: "/" },
  services: { en: "/services", sv: "/tjanster" },
  businessCentral: { en: "/business-central", sv: "/business-central" },
  insights: { en: "/insights", sv: "/insikter" },
  about: { en: "/about", sv: "/om-oss" },
  contact: { en: "/contact", sv: "/kontakt" },
  privacy: { en: "/privacy", sv: "/integritetspolicy" },
  cookies: { en: "/cookies", sv: "/cookies" },
  terms: { en: "/terms", sv: "/anvandarvillkor" },
  accessibility: { en: "/accessibility", sv: "/tillganglighet" },
  security: { en: "/security", sv: "/sakerhet" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageId = keyof typeof PAGES;

export const SERVICE_SLUGS = {
  advisory: { en: "erp-advisory", sv: "radgivning" },
  implementation: { en: "implementation", sv: "implementation" },
  migration: { en: "nav-to-business-central", sv: "migrering-fran-nav" },
  integrations: { en: "integrations", sv: "integrationer" },
  support: { en: "support", sv: "support" },
  management: { en: "application-management", sv: "forvaltning" },
  consultants: { en: "consultants", sv: "konsulttjanster" },
} as const satisfies Record<string, Record<Locale, string>>;

export type ServiceId = keyof typeof SERVICE_SLUGS;
export const SERVICE_IDS = Object.keys(SERVICE_SLUGS) as ServiceId[];

export const INSIGHT_SLUGS = {
  navToBusinessCentral: {
    en: "nav-to-business-central-upgrade",
    sv: "fran-dynamics-nav-till-business-central",
  },
  navEndOfLife: { en: "dynamics-nav-end-of-life", sv: "navision-end-of-life" },
  pricing: { en: "business-central-pricing-sweden", sv: "vad-kostar-business-central" },
  switchingErp: { en: "switching-erp-systems", sv: "byta-affarssystem" },
} as const satisfies Record<string, Record<Locale, string>>;

export type InsightId = keyof typeof INSIGHT_SLUGS;
export const INSIGHT_IDS = Object.keys(INSIGHT_SLUGS) as InsightId[];

/** Legal and trust pages share one renderer. */
export const LEGAL_IDS = ["privacy", "cookies", "terms", "accessibility", "security"] as const;
export type LegalId = (typeof LEGAL_IDS)[number];

export type Route =
  | { kind: "page"; id: PageId }
  | { kind: "service"; id: ServiceId }
  | { kind: "insight"; id: InsightId };

/** Locale-relative path of a route. */
function relativePath(route: Route, locale: Locale) {
  switch (route.kind) {
    case "page":
      return PAGES[route.id][locale];
    case "service":
      return `${PAGES.services[locale]}/${SERVICE_SLUGS[route.id][locale]}`;
    case "insight":
      return `${PAGES.insights[locale]}/${INSIGHT_SLUGS[route.id][locale]}`;
  }
}

/** Public URL of a route in a language. */
export function href(locale: Locale, route: Route | PageId, hash?: string) {
  const resolved: Route = typeof route === "string" ? { kind: "page", id: route } : route;
  return localePath(locale, relativePath(resolved, locale)) + (hash ? `#${hash}` : "");
}

export const serviceHref = (locale: Locale, id: ServiceId) => href(locale, { kind: "service", id });
export const insightHref = (locale: Locale, id: InsightId) => href(locale, { kind: "insight", id });

/** The route in every language, for hreflang and the language switcher. */
export function alternates(route: Route | PageId): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, href(locale, route)])) as Record<
    Locale,
    string
  >;
}

export const ALL_ROUTES: Route[] = [
  ...(Object.keys(PAGES) as PageId[]).map((id) => ({ kind: "page", id }) as const),
  ...SERVICE_IDS.map((id) => ({ kind: "service", id }) as const),
  ...INSIGHT_IDS.map((id) => ({ kind: "insight", id }) as const),
];

/** Finds the route behind a public pathname, or undefined for an unknown path. */
export function routeFromPathname(pathname: string): Route | undefined {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const { locale } = splitLocale(clean);
  return ALL_ROUTES.find((route) => href(locale, route) === clean);
}
