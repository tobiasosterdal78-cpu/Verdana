import { Icon } from "@/components/icons";
import type { AreaCopy } from "@/content/types";

type Area = Omit<AreaCopy, "caption">;

/** Number, name, claim and the paragraph under it. */
export function AreaIntro({
  index,
  area,
  id,
  as: Heading = "h3",
}: {
  index: number;
  area: Area;
  id: string;
  /** h2 when the area has a section of its own. */
  as?: "h2" | "h3";
}) {
  return (
    <div>
      <p className="flex items-center gap-3 text-[0.9rem] font-semibold text-accent-ink">
        <span className="tabular-nums">{String(index).padStart(2, "0")}</span>
        <span aria-hidden="true" className="h-px w-7 bg-accent-ink/40" />
        {area.name}
      </p>
      <Heading
        id={id}
        className="mt-5 max-w-[17ch] text-[clamp(1.75rem,1.25rem+1.7vw,2.7rem)] font-semibold leading-[1.06] tracking-[-0.032em] [font-stretch:94%]"
      >
        {area.title}
      </Heading>
      <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-fg-muted">{area.text}</p>
    </div>
  );
}

/** What the claim rests on, what is standard and what is not, and where to read more. */
export function AreaPoints({ area, children }: { area: Area; children?: React.ReactNode }) {
  return (
    <div>
      <ul className="max-w-lg space-y-3.5">
        {area.points.map((point) => (
          <li key={point} className="flex gap-3.5 text-[1.02rem] leading-snug text-fg">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
              <Icon name="check" size={13} weight="bold" />
            </span>
            {point}
          </li>
        ))}
      </ul>
      {area.scope ? (
        <p className="mt-6 max-w-lg border-l-2 border-hairline-strong pl-4 text-[0.9rem] leading-relaxed text-fg-subtle">
          {area.scope}
        </p>
      ) : null}
      {children ? <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">{children}</div> : null}
    </div>
  );
}

export function AreaText(props: { index: number; area: Area; id: string; as?: "h2" | "h3"; children?: React.ReactNode }) {
  return (
    <div>
      <AreaIntro index={props.index} area={props.area} id={props.id} as={props.as} />
      <div className="mt-7">
        <AreaPoints area={props.area}>{props.children}</AreaPoints>
      </div>
    </div>
  );
}
