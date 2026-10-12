import { Icon } from "@/components/icons";
import type { HomeCopy } from "@/content/types";

/**
 * Illustrations for the areas on the home page, drawn in the site's own
 * language rather than copied from any product screen. Every figure is
 * example data: labels and display values come from the content files,
 * the geometry below only draws them. The mocks are hidden from screen
 * readers; the figure caption says what each one shows.
 */
type Areas = HomeCopy["areas"];

type Tone = "done" | "active" | "planned";

const DOT: Record<Tone, string> = {
  done: "bg-glacier",
  active: "bg-accent",
  planned: "border border-control-edge",
};

function StatusChip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline bg-surface px-2.5 py-1 text-[0.74rem] font-[560] text-fg-muted">
      <span className={`size-1.5 rounded-full ${DOT[tone]}`} />
      {children}
    </span>
  );
}

/**
 * The frame clips with overflow: clip, not hidden: a hidden box would be
 * the scroll container that the bars' view timeline (.grow-x) follows,
 * and the bars would never animate with the page.
 */
function MockFrame({
  title,
  aside,
  children,
  className = "",
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col overflow-clip rounded-panel border border-hairline bg-surface shadow-[var(--shadow-lg)] ${className}`}
    >
      <div className="flex min-h-[3.25rem] items-center justify-between gap-4 border-b border-hairline px-5 sm:px-6">
        <span className="text-[0.86rem] font-semibold tracking-tight text-fg">{title}</span>
        {aside}
      </div>
      {children}
    </div>
  );
}

/** The mock plus the caption that describes it. */
export function AreaFigure({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure>
      <div aria-hidden="true">{children}</div>
      <figcaption className="mt-4 text-[0.82rem] leading-snug text-fg-subtle">{caption}</figcaption>
    </figure>
  );
}

/* ── Time and projects ─────────────────────────────────────────────── */

/** Budget and actual per task, as shares of the widest bar. */
const TASK_BARS = [
  { budget: 0.42, actual: 0.4 },
  { budget: 1, actual: 0.81 },
  { budget: 0.56, actual: 0.19 },
];

export function ProjectMock({ t }: { t: Areas["projects"]["mock"] }) {
  return (
    <MockFrame title={t.window} aside={<StatusChip tone="active">{t.status}</StatusChip>}>
      <div className="p-5 sm:p-6">
        <p className="text-[1.05rem] font-semibold tracking-tight text-fg">{t.project}</p>
        <dl className="mt-4 grid grid-cols-3 gap-2.5">
          {t.totals.map((total) => (
            <div key={total.label} className="rounded-xl bg-canvas-raised px-3 py-2.5 sm:px-3.5">
              <dt className="text-[0.74rem] text-fg-subtle">{total.label}</dt>
              <dd className="mt-0.5 text-[0.95rem] font-semibold tabular-nums tracking-tight text-fg sm:text-[1.02rem]">
                {total.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center justify-between gap-4 text-[0.76rem] text-fg-subtle">
          <span className="font-semibold text-fg">{t.activities}</span>
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-fg/20" />
              {t.budget}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-accent" />
              {t.actual}
            </span>
          </span>
        </div>
        <ul className="mt-3.5 space-y-3.5">
          {t.rows.map((row, index) => (
            <li key={row.label} className="grid grid-cols-[5.25rem_minmax(0,1fr)_2.75rem] items-center gap-3 text-[0.84rem]">
              <span className="truncate text-fg-muted">{row.label}</span>
              <span className="grid gap-1">
                <span className="h-1.5 rounded-full bg-fg/20" style={{ width: `${TASK_BARS[index].budget * 100}%` }} />
                <span className="grow-x h-1.5 rounded-full bg-accent" style={{ width: `${TASK_BARS[index].actual * 100}%` }} />
              </span>
              <span className="text-right tabular-nums text-fg-subtle">{row.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-hairline bg-canvas-raised p-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.86rem] font-semibold tracking-tight text-fg">{t.week}</span>
          <StatusChip tone="done">{t.approved}</StatusChip>
        </div>
        <ol className="mt-3.5 grid grid-cols-6 gap-1.5 text-center">
          {t.days.map((day, index) => (
            <li key={day} className="rounded-lg border border-hairline bg-surface py-2">
              <span className="block text-[0.7rem] text-fg-subtle">{day}</span>
              <span className="block text-[0.95rem] font-semibold tabular-nums text-fg">{t.hours[index]}</span>
            </li>
          ))}
          <li className="rounded-lg bg-accent py-2 text-on-accent">
            <span className="block text-[0.7rem] opacity-85">{t.sum}</span>
            <span className="block text-[0.95rem] font-semibold tabular-nums">{t.total}</span>
          </li>
        </ol>
      </div>
    </MockFrame>
  );
}

/* ── Warehouse ─────────────────────────────────────────────────────── */

/** One string per zone: x occupied, . free, a digit is a stop on the pick route. */
const BINS = ["x.xx1xx.", "xx.x.2xx", ".x3xx.xx"];
const ZONES = ["A", "B", "C"];

export function WarehouseMock({ t }: { t: Areas["warehouse"]["mock"] }) {
  return (
    <MockFrame title={t.window} aside={<span className="text-[0.78rem] text-fg-subtle">{t.location}</span>}>
      <div className="p-5 sm:p-6">
        <div className="grid gap-1.5">
          {BINS.map((row, zone) => (
            <div key={ZONES[zone]} className="grid grid-cols-[1.25rem_repeat(8,minmax(0,1fr))] items-center gap-1.5">
              <span className="text-[0.74rem] font-semibold text-fg-subtle">{ZONES[zone]}</span>
              {[...row].map((cell, index) => (
                <span
                  key={index}
                  className={`flex aspect-[5/4] items-center justify-center rounded-md text-[0.74rem] font-semibold tabular-nums ${
                    cell === "x"
                      ? "bg-fg/[0.09]"
                      : cell === "."
                        ? "border border-dashed border-hairline-strong"
                        : "bg-accent text-on-accent shadow-[0_0_0_3px_var(--accent-soft)]"
                  }`}
                >
                  {cell === "x" || cell === "." ? null : cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1 pl-[1.625rem] text-[0.74rem] text-fg-subtle">
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-fg/[0.14]" />
            {t.legend.occupied}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] border border-dashed border-hairline-strong" />
            {t.legend.free}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px] bg-accent" />
            {t.legend.stop}
          </span>
        </p>
      </div>

      <div className="border-t border-hairline px-5 py-4 sm:px-6">
        <p className="text-[0.86rem] font-semibold tracking-tight text-fg">{t.pick}</p>
        <div className="mt-3 grid grid-cols-[1.25rem_minmax(0,1fr)_3.5rem_2rem] items-center gap-x-3 gap-y-3 text-[0.84rem] sm:grid-cols-[1.25rem_minmax(0,1fr)_4.25rem_2.5rem_auto]">
          <span />
          <span className="text-[0.72rem] text-fg-subtle">{t.columns[0]}</span>
          <span className="text-[0.72rem] text-fg-subtle">{t.columns[1]}</span>
          <span className="text-right text-[0.72rem] text-fg-subtle">{t.columns[2]}</span>
          <span className="max-sm:hidden" />
          {t.lines.map((line, index) => {
            const picked = index < 2;
            return (
              <div key={line.number} className="col-span-full grid grid-cols-subgrid items-center">
                <span
                  className={`flex size-5 items-center justify-center rounded-full ${
                    picked ? "bg-accent text-on-accent" : "border-[1.5px] border-accent"
                  }`}
                >
                  {picked ? <Icon name="check" size={11} weight="bold" /> : null}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-fg">{line.item}</span>
                  <span className="block text-[0.74rem] tabular-nums text-fg-subtle">{line.number}</span>
                </span>
                <span className="font-semibold tabular-nums text-fg">{line.bin}</span>
                <span className="text-right tabular-nums text-fg">{line.quantity}</span>
                <span className="max-sm:hidden">
                  <StatusChip tone={picked ? "done" : "active"}>{picked ? t.picked : t.next}</StatusChip>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-hairline bg-canvas-raised px-5 py-4 sm:px-6">
        <div className="flex items-baseline justify-between gap-4 text-[0.84rem]">
          <span className="text-fg-muted">{t.stock.label}</span>
          <span className="font-semibold tabular-nums text-fg">{t.stock.value}</span>
        </div>
        <div className="relative mt-2.5 h-2 rounded-full bg-fg/10">
          <span className="grow-x absolute inset-y-0 left-0 w-[62%] rounded-full bg-gradient-to-r from-accent to-glacier" />
          <span className="absolute -inset-y-1 left-[25%] w-0.5 rounded-full bg-fg/60" />
        </div>
        <p className="mt-2 pl-[25%] text-[0.74rem] text-fg-subtle">
          <span className="-ml-1.5">↑ {t.stock.reorder}</span>
        </p>
      </div>
    </MockFrame>
  );
}

/* ── Reporting ─────────────────────────────────────────────────────── */

/** Twelve months of example revenue, this year and last. */
const THIS_YEAR = [28, 31, 30, 36, 39, 35, 30, 38, 44, 47, 45, 52];
const LAST_YEAR = [25, 27, 29, 31, 33, 32, 27, 33, 38, 40, 41, 44];
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const CHART = { width: 480, height: 150, top: 56 };

function line(values: number[]) {
  const step = CHART.width / (values.length - 1);
  return values
    .map((value, index) => {
      const x = (index * step).toFixed(1);
      const y = (CHART.height - (value / CHART.top) * (CHART.height - 6)).toFixed(1);
      return `${index === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ");
}

/** A small trend line per KPI, as points on a 0–1 scale. */
const SPARKS = [
  [0.3, 0.42, 0.38, 0.55, 0.62, 0.7, 0.86],
  [0.5, 0.46, 0.58, 0.55, 0.66, 0.7, 0.74],
  [0.42, 0.6, 0.48, 0.66, 0.58, 0.72, 0.8],
  [0.8, 0.74, 0.78, 0.66, 0.6, 0.62, 0.52],
];

function Spark({ points }: { points: number[] }) {
  const step = 64 / (points.length - 1);
  const path = points.map((value, index) => `${index === 0 ? "M" : "L"}${(index * step).toFixed(1)} ${(22 - value * 20).toFixed(1)}`).join(" ");
  return (
    <svg viewBox="0 0 64 24" className="h-6 w-16 overflow-visible" fill="none">
      <path d={path} stroke="var(--glacier)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const GROUP_BARS = [1, 0.69, 0.49, 0.3];
const MARGIN_BARS = [0.85, 0.68, 0.3];
const AGING = [0.6, 0.23, 0.1, 0.07];
const AGING_TONE = ["bg-accent", "bg-glacier", "bg-fg/40", "bg-fg/20"];

export function DashboardMock({ t }: { t: Areas["reporting"]["mock"] }) {
  const current = line(THIS_YEAR);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <MockFrame
        className="lg:col-span-8"
        title={t.sales.title}
        aside={<span className="text-[0.78rem] text-fg-subtle">{t.sales.period}</span>}
      >
        <dl className="grid shrink-0 grid-cols-2 gap-px bg-hairline md:grid-cols-4">
          {t.sales.kpis.map((kpi, index) => (
            <div key={kpi.label} className="bg-surface p-4 sm:p-5">
              <dt className="text-[0.76rem] text-fg-subtle">{kpi.label}</dt>
              <dd className="mt-1 text-[1.3rem] font-semibold tabular-nums tracking-tight text-fg sm:text-[1.45rem]">
                {kpi.value}
              </dd>
              <dd className="mt-2 flex items-center justify-between gap-2">
                <span className="rounded-full bg-glacier/[0.12] px-2 py-0.5 text-[0.74rem] font-[560] tabular-nums text-glacier">
                  {kpi.change}
                </span>
                <Spark points={SPARKS[index]} />
              </dd>
            </div>
          ))}
        </dl>
        <div className="grid flex-1 grid-cols-1 gap-px border-t border-hairline bg-hairline md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div className="bg-surface p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <span className="text-[0.86rem] font-semibold tracking-tight text-fg">{t.sales.trend}</span>
              <span className="flex items-center gap-4 text-[0.74rem] text-fg-subtle">
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 rounded-full bg-accent" />
                  {t.sales.thisYear}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-0 w-4 border-t border-dashed border-fg-subtle" />
                  {t.sales.lastYear}
                </span>
              </span>
            </div>
            <svg
              viewBox={`0 0 ${CHART.width} ${CHART.height}`}
              preserveAspectRatio="none"
              className="mt-5 h-36 w-full overflow-visible sm:h-44"
              fill="none"
            >
              <defs>
                <linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--accent)" stopOpacity="0.32" />
                  <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75, 1].map((share) => (
                <path
                  key={share}
                  d={`M0 ${CHART.height * share} H${CHART.width}`}
                  stroke="var(--hairline)"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              <path d={`${current} V${CHART.height} H0 Z`} fill="url(#revenue-fill)" />
              <path
                d={line(LAST_YEAR)}
                stroke="var(--fg-subtle)"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                vectorEffect="non-scaling-stroke"
              />
              <path d={current} stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-2 flex justify-between text-[0.7rem] text-fg-subtle">
              {MONTHS.map((month, index) => (
                <span key={index} className="w-3 text-center first:text-left last:text-right">
                  {month}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-surface p-5 sm:p-6">
            <span className="text-[0.86rem] font-semibold tracking-tight text-fg">{t.sales.groupsTitle}</span>
            <ul className="mt-5 space-y-4">
              {t.sales.groups.map((group, index) => (
                <li key={group.label}>
                  <span className="flex items-baseline justify-between gap-3 text-[0.82rem]">
                    <span className="text-fg-muted">{group.label}</span>
                    <span className="tabular-nums text-fg-subtle">{group.value}</span>
                  </span>
                  <span className="mt-1.5 block h-2 rounded-full bg-fg/10">
                    <span
                      className="grow-x block h-full rounded-full bg-gradient-to-r from-accent to-glacier"
                      style={{ width: `${GROUP_BARS[index] * 100}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MockFrame>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
        <MockFrame title={t.projects.title} aside={<span className="text-[0.78rem] text-fg-subtle">{t.projects.subtitle}</span>}>
          <ul className="flex flex-1 flex-col justify-center gap-4 p-5 sm:p-6">
            {t.projects.rows.map((row, index) => (
              <li key={row.label} className="grid grid-cols-[3.75rem_minmax(0,1fr)_2.75rem] items-center gap-3 text-[0.84rem]">
                <span className="font-semibold tabular-nums text-fg">{row.label}</span>
                <span className="h-2 rounded-full bg-fg/10">
                  <span
                    className={`grow-x block h-full rounded-full ${index === 2 ? "bg-fg/40" : "bg-accent"}`}
                    style={{ width: `${MARGIN_BARS[index] * 100}%` }}
                  />
                </span>
                <span className="text-right tabular-nums text-fg-muted">{row.value}</span>
              </li>
            ))}
          </ul>
        </MockFrame>
        <MockFrame
          title={t.receivables.title}
          aside={<span className="text-[0.86rem] font-semibold tabular-nums text-fg">{t.receivables.total}</span>}
        >
          <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
            <div className="flex h-2.5 shrink-0 gap-0.5 overflow-hidden rounded-full">
              {AGING.map((share, index) => (
                <span key={index} className={AGING_TONE[index]} style={{ width: `${share * 100}%` }} />
              ))}
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-[0.8rem]">
              {t.receivables.buckets.map((bucket, index) => (
                <li key={bucket.label} className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2 text-fg-muted">
                    <span className={`size-2 shrink-0 rounded-full ${AGING_TONE[index]}`} />
                    <span className="truncate">{bucket.label}</span>
                  </span>
                  <span className="tabular-nums text-fg-subtle">{bucket.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </MockFrame>
      </div>
    </div>
  );
}

/* ── Application management and support ────────────────────────────── */

const TICKET_TONE: Tone[] = ["done", "active", "planned"];
/** April and October: Microsoft's two major update waves each year. */
const MAJOR_MONTHS = [3, 9];

export function CareMock({ t }: { t: Areas["care"]["mock"] }) {
  return (
    <MockFrame title={t.window}>
      <ul className="divide-y divide-hairline">
        {t.tickets.map((ticket, index) => (
          <li key={ticket.title} className="flex items-center gap-4 px-5 py-4 sm:px-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
              <Icon name={index === 0 ? "check" : index === 1 ? "support" : "calendar"} size={17} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[0.92rem] font-semibold leading-snug tracking-tight text-fg">{ticket.title}</span>
              <span className="block text-[0.78rem] text-fg-subtle">{ticket.area}</span>
            </span>
            <StatusChip tone={TICKET_TONE[index]}>{ticket.status}</StatusChip>
          </li>
        ))}
      </ul>

      <div className="border-t border-hairline bg-canvas-raised p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span className="text-[0.86rem] font-semibold tracking-tight text-fg">{t.updates}</span>
          <span className="flex items-center gap-1.5 text-[0.74rem] text-fg-subtle">
            <span className="size-2.5 rounded-full bg-accent" />
            {t.major}
          </span>
        </div>
        <ol className="relative mt-5 grid grid-cols-12">
          <span className="absolute inset-x-[4.1667%] top-[0.6875rem] h-px bg-hairline-strong" />
          {MONTHS.map((month, index) => {
            const major = MAJOR_MONTHS.includes(index);
            return (
              <li key={index} className="relative flex flex-col items-center gap-2">
                <span className="flex size-[1.375rem] items-center justify-center">
                  <span
                    className={
                      major
                        ? "size-[1.125rem] rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                        : "size-1.5 rounded-full bg-control-edge"
                    }
                  />
                </span>
                <span className={`text-[0.72rem] ${major ? "font-semibold text-fg" : "text-fg-subtle"}`}>{month}</span>
              </li>
            );
          })}
        </ol>
        <p className="mt-3 text-[0.76rem] text-fg-subtle">{t.minor}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {t.checks.map((check) => (
            <li
              key={check}
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 text-[0.78rem] font-[560] text-fg-muted"
            >
              <Icon name="check" size={13} weight="bold" className="text-accent-ink" />
              {check}
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  );
}
