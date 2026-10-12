import Link from "next/link";
import { Icon } from "@/components/icons";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/** A quiet line inside a page that leads to the contact page. */
export function ContactPrompt({
  locale,
  kind,
  linkOnly = false,
  className = "",
}: {
  locale: Locale;
  kind: "faq" | "talk" | "legal";
  /** For places where the surrounding text already asks the question. */
  linkOnly?: boolean;
  className?: string;
}) {
  const t = getContent(locale).site.contactPrompt[kind];
  return (
    <p className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[1rem] leading-relaxed text-fg-muted ${className}`}>
      {linkOnly ? null : <span>{t.text}</span>}
      <Link href={href(locale, "contact")} className="group inline-flex items-center gap-2 font-[560] text-accent-ink">
        {t.link}
        <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </p>
  );
}

/** A sentence and the primary button, for the middle of a long page. */
export function ContactRow({ locale, className = "" }: { locale: Locale; className?: string }) {
  const { site } = getContent(locale);
  return (
    <div className={`flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${className}`}>
      <p className="max-w-xl text-[1.05rem] leading-relaxed text-fg-muted">{site.servicesMenu.help}</p>
      <Link href={href(locale, "contact")} className="btn btn-primary shrink-0 self-start sm:self-auto">
        {site.cta} <Icon name="arrowRight" size={18} />
      </Link>
    </div>
  );
}
