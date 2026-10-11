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

export function NavTimeline({ locale, t }: { locale: Locale; t: HomeCopy["nav"] }) {
  const today = new Date();
  const format = new Intl.DateTimeFormat(DATE_LOCALE[locale], { month: "long", year: "numeric" });
  const items = NAV_VERSIONS.map((item) => {
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
  const endedCount = items.filter((item) => item.ended).length;

  return (
    <div className="relative">
      <ol className="overflow-hidden rounded-panel border border-hairline bg-surface sm:grid sm:grid-cols-5 sm:divide-x sm:divide-hairline">
        {items.map((item) => (
          <li
            key={item.version}
            className="spotlight flex items-center justify-between gap-4 border-b border-hairline px-5 py-4 last:border-b-0 sm:block sm:border-b-0 sm:p-7"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-1 sm:inset-x-0 sm:bottom-auto sm:h-1 sm:w-auto ${
                item.ended ? "bg-fg/15" : "bg-gradient-to-r from-accent to-glacier"
              }`}
            />
            <span className="block text-[1.02rem] font-semibold tracking-tight text-fg">{item.version}</span>
            <span className="block text-right sm:mt-4 sm:text-left">
              <span className="hidden text-[0.88rem] text-fg-subtle sm:block">{t.until}</span>
              <span
                className={`block font-semibold tabular-nums sm:mt-0.5 ${
                  item.ended ? "text-fg-subtle line-through decoration-1" : "text-accent-ink"
                }`}
              >
                {item.label}
              </span>
              <span className="mt-0.5 block text-[0.84rem] font-[560] text-fg-subtle sm:mt-3">{item.status}</span>
            </span>
          </li>
        ))}
      </ol>
      {endedCount > 0 && endedCount < items.length ? (
        <span
          className="pointer-events-none absolute -top-3 hidden -translate-x-1/2 sm:block"
          style={{ left: `${(endedCount / items.length) * 100}%` }}
        >
          <span className="block rounded-full bg-fg px-2.5 py-1 text-[0.75rem] font-semibold text-canvas shadow-lg">{t.today}</span>
        </span>
      ) : null}
    </div>
  );
}
