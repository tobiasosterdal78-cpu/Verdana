import * as en from "@/content/en";
import * as sv from "@/content/sv";
import type { Locale } from "@/lib/i18n";

const content = { en, sv } satisfies Record<Locale, typeof en>;

/** All content for one language. Server-side only; pass client components just what they need. */
export function getContent(locale: Locale) {
  return content[locale];
}

export type Content = ReturnType<typeof getContent>;
