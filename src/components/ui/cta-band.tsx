import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { Icon } from "@/components/icons";
import { PinField } from "@/components/pin-field";
import { StepTrail } from "@/components/ui/step-trail";
import { getContent } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/** Closing call to action shared by all pages. */
export function CtaBand({ locale }: { locale: Locale }) {
  const t = getContent(locale).site.ctaBand;
  return (
    <section aria-labelledby="cta-title" className="tone-night relative overflow-hidden">
      <PinField />
      {/* Wider than the page grid: on large screens the sign-off holds the
          exact centre of the screen and the steps sit out by the right edge. */}
      <div className="relative mx-auto grid w-full max-w-[92rem] items-center gap-16 px-[clamp(1rem,0.4rem+2.6vw,3rem)] py-[clamp(6.5rem,3rem+10vw,13rem)] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)_minmax(0,1fr)] xl:gap-12">
        <div className="flex flex-col items-center text-center xl:col-start-2 xl:row-start-1">
          <BrandMark className="h-7" />
          <h2 id="cta-title" className="type-title mt-9 text-balance">
            {t.title}
          </h2>
          <p className="type-lead mt-7 max-w-[34rem] text-balance text-fg-muted">{t.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href={href(locale, "contact")} className="btn btn-primary">
              {t.primary} <Icon name="arrowRight" size={18} />
            </Link>
            <Link href={href(locale, "services")} className="btn btn-ghost">
              {t.secondary}
            </Link>
          </div>
        </div>
        <StepTrail
          steps={t.steps}
          className="w-full max-w-[21rem] justify-self-center lg:justify-self-end xl:col-start-3 xl:row-start-1"
        />
      </div>
    </section>
  );
}
