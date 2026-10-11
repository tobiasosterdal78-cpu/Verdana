import Link from "next/link";
import { Icon } from "@/components/icons";
import { PinField } from "@/components/pin-field";
import type { Crumb } from "@/lib/seo";

/** Midnight opening band for inner pages: breadcrumbs, the H1 and a lead. */
export function PageHero({
  crumbs,
  breadcrumbsLabel,
  title,
  lead,
  meta,
  children,
}: {
  crumbs: Crumb[];
  breadcrumbsLabel: string;
  title: string;
  lead: string;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="tone-night relative overflow-hidden">
      <PinField />
      <div className="wrap relative pb-20 pt-10 md:pb-28 md:pt-14">
        <nav aria-label={breadcrumbsLabel}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.88rem] text-fg-subtle">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="text-fg-muted">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.path} className="link-quiet hover:text-fg">
                        {crumb.name}
                      </Link>
                      <Icon name="chevronDown" size={12} className="-rotate-90 opacity-60" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="type-title mt-10 max-w-[18ch] md:mt-14">{title}</h1>
        <p className="type-lead mt-7 max-w-2xl text-fg-muted">{lead}</p>
        {meta ? <div className="mt-6 text-[0.9rem] text-fg-subtle">{meta}</div> : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
