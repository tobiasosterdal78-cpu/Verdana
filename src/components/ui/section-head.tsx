/** Section opening: the heading on the left, the lead on the right when there is room. */
export function SectionHead({
  title,
  lead,
  id,
  children,
}: {
  title: string;
  lead?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
      <h2 id={id} className="type-h2 max-w-[15ch]">
        {title}
      </h2>
      {lead || children ? (
        <div>
          {lead ? <p className="type-lead max-w-xl text-fg-muted">{lead}</p> : null}
          {children}
        </div>
      ) : null}
    </div>
  );
}
