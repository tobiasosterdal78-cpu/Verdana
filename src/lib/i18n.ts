/**
 * Languages. English is the default and lives at the bare URLs; Swedish
 * lives under /sv with Swedish path segments. Each language has its own
 * root layout (app/(en) and app/(sv)), so every URL exists exactly once.
 */
export const LOCALES = ["en", "sv"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** html lang and hreflang values. */
export const LOCALE_TAGS: Record<Locale, string> = { en: "en", sv: "sv" };
/** Open Graph locale values. */
export const OG_LOCALES: Record<Locale, string> = { en: "en_US", sv: "sv_SE" };
/** Each language named in itself, as a language switcher should. */
export const LOCALE_NAMES: Record<Locale, string> = { en: "English", sv: "Svenska" };
export const LOCALE_SHORT: Record<Locale, string> = { en: "EN", sv: "SV" };

const PREFIX: Record<Locale, string> = { en: "", sv: "/sv" };

/** Public URL path of a locale-relative path ("/" is the language's home). */
export function localePath(locale: Locale, path: string) {
  const prefix = PREFIX[locale];
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

/** Splits a public pathname into its language and the locale-relative path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname === "/sv" || pathname.startsWith("/sv/")) {
    return { locale: "sv", path: pathname.slice(3) || "/" };
  }
  return { locale: "en", path: pathname || "/" };
}
