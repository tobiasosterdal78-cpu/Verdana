"use client";

import Link from "next/link";
import { useLanguageChoices } from "@/components/layout/language-switcher";
import { LOCALE_NAMES, LOCALE_SHORT, LOCALE_TAGS } from "@/lib/i18n";

/** EN · SV row linking to the current page in each language. */
export function FooterLanguages({ label }: { label: string }) {
  const { current, choices } = useLanguageChoices();
  return (
    <nav aria-label={label} className="flex items-center gap-2 text-[0.8rem] font-[560] tracking-wide">
      {choices.map(({ locale, href, keep }, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-fg-subtle/60">
              ·
            </span>
          ) : null}
          <Link
            href={href}
            hrefLang={LOCALE_TAGS[locale]}
            lang={LOCALE_TAGS[locale]}
            onClick={keep}
            aria-current={locale === current ? "true" : undefined}
            className="text-fg-subtle transition-colors hover:text-fg aria-[current=true]:text-fg"
          >
            {LOCALE_SHORT[locale]}
            <span className="sr-only"> {LOCALE_NAMES[locale]}</span>
          </Link>
        </span>
      ))}
    </nav>
  );
}
