import { Icon } from "@/components/icons";
import type { HomeCopy } from "@/content/types";

/**
 * One order moving through a connected Business Central setup. Animated
 * with CSS only; static when reduced motion is preferred.
 */
export function OrderFlow({ t }: { t: HomeCopy["businessCentral"]["flow"] }) {
  return (
    <figure className="flow relative">
      <ol className="relative grid auto-rows-fr lg:grid-flow-col lg:grid-cols-6 lg:auto-rows-auto">
        <span
          aria-hidden="true"
          className="flow-rail left-[22px] top-[calc(100%/12)] bottom-[calc(100%/12)] w-px lg:inset-x-[calc(100%/12)] lg:bottom-auto lg:top-[22px] lg:h-px lg:w-auto"
        >
          <span className="flow-pulse left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2" />
        </span>
        {t.stations.map((station, index) => (
          <li
            key={station.title}
            style={{ "--i": index } as React.CSSProperties}
            className="flow-station relative grid grid-cols-[44px_1fr] items-center gap-4 py-2.5 lg:grid-cols-1 lg:items-start lg:gap-0 lg:px-2 lg:py-0 lg:text-center"
          >
            <span
              className={`flow-card relative z-10 flex size-11 items-center justify-center rounded-full border lg:mx-auto ${
                index === 1
                  ? "border-transparent bg-accent text-on-accent"
                  : "border-hairline-strong bg-surface text-accent-ink"
              }`}
            >
              <Icon name={station.icon} size={20} />
            </span>
            <span className="block lg:mt-5">
              <span className="block font-semibold tracking-tight text-fg">{station.title}</span>
              <span className="mt-1 block text-[0.88rem] leading-snug text-fg-subtle">{station.detail}</span>
              <span className="flow-check mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-glacier/30 bg-glacier/[0.08] px-2.5 py-1 text-[0.78rem] font-[560] text-glacier">
                <Icon name="check" size={13} weight="bold" />
                {station.status}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 text-[0.82rem] text-fg-subtle lg:text-center">{t.caption}</figcaption>
    </figure>
  );
}
