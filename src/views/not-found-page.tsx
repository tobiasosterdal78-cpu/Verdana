import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PinField } from "@/components/pin-field";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function notFoundMetadata(locale: Locale): Metadata {
  return { title: { absolute: getContent(locale).site.notFound.metaTitle }, robots: { index: false } };
}

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getContent(locale).site.notFound;
  return (
    <section className="relative overflow-hidden">
      <PinField />
      <div className="wrap relative py-28 md:py-40">
        <p className="text-[0.95rem] font-semibold tabular-nums text-accent-ink">404</p>
        <h1 className="type-title mt-6 max-w-[16ch]">{t.title}</h1>
        <p className="type-lead mt-6 max-w-xl text-fg-muted">{t.text}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={href(locale, "home")} className="btn btn-primary">
            {t.home} <Icon name="arrowRight" size={18} />
          </Link>
          <Link href={href(locale, "services")} className="btn btn-ghost">
            {t.services}
          </Link>
        </div>
      </div>
    </section>
  );
}
