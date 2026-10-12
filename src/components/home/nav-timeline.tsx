import type { HomeCopy } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/**
 * Last day of extended support for the last Dynamics NAV versions, from
 * Microsoft's lifecycle pages (which state the end as the following day,
 * 06:59:59 UTC). Status is computed when the page is built.
 */
export const NAV_VERSIONS = [
  { version: "NAV 2013 R2", end: "2023-01-10" },
  { version: "NAV 2015", end: "2025-01-14" },
  { version: "NAV 2016", end: "2026-04-14" },
  { version: "NAV 2017", end: "2027-01-11" },
  { version: "NAV 2018", end: "2028-01-11" },
];

const DATE_LOCALE: Record<Locale, string> = { en: "en-US", sv: "sv-SE" };

function monthsBetween(from: Date, to: Date) {
  return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
}

/** The last three versions and where their extended support stands today. */
export function NavNotice({ locale, t }: { locale: Locale; t: HomeCopy["nav"] }) {
  const today = new Date();
  const format = new Intl.DateTimeFormat(DATE_LOCALE[locale], { month: "long", year: "numeric" });
  const items = NAV_VERSIONS.slice(-3).map((item) => {
    const end = new Date(`${item.end}T23:59:59`);
    const ended = end <= today;
    const months = monthsBetween(today, end);
    const status = ended
      ? t.ended
      : months <= 0
        ? t.thisMonth
        : months === 1
          ? t.oneMonth
          : t.months.replace("{n}", String(months));
    return { ...item, label: format.format(end), ended, status };
  });

  return (
    <ul className="grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.version} className="flex items-baseline justify-between gap-4 bg-surface px-5 py-4 sm:block">
          <span className="block text-[0.95rem] font-semibold tracking-tight text-fg">{item.version}</span>
          <span className="block text-right sm:mt-2 sm:text-left">
            <span
              className={`block text-[0.95rem] font-semibold tabular-nums ${
                item.ended ? "text-fg-subtle line-through decoration-1" : "text-accent-ink"
              }`}
            >
              {item.label}
            </span>
            <span className="block text-[0.8rem] font-[560] text-fg-subtle">{item.status}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
