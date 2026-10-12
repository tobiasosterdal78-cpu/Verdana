import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * The owner-supplied V, used unchanged (see public/brand/README.md). The PNG
 * has a wide transparent margin; .brand-frame clips only that empty margin,
 * measured as the box around every pixel with alpha above 2/255.
 *
 * The lockup and wordmark that came with it spell the former name, Verdana.
 * They are archived in docs/brand-archive, and until artwork for Vardena
 * exists the name beside the V is set in the site's own type.
 */
type Frame = { src: string; sw: number; sh: number; fx: number; fy: number; fw: number; fh: number };

const MARK: Frame = { src: "/brand/vardena-mark.png", sw: 1536, sh: 1024, fx: 80, fy: 110, fw: 1376, fh: 836 };

function Framed({
  frame,
  alt,
  sizes,
  className = "",
  priority = false,
}: {
  frame: Frame;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const style = {
    "--sw": frame.sw,
    "--fx": frame.fx,
    "--fy": frame.fy,
    "--fw": frame.fw,
    "--fh": frame.fh,
  } as CSSProperties;
  return (
    <span className={`brand-frame ${className}`} style={style}>
      <Image src={frame.src} alt={alt} width={frame.sw} height={frame.sh} sizes={sizes} priority={priority} />
    </span>
  );
}

/** The header logo: the V and the name. The height comes from the caller. */
export function BrandLockup({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={`flex items-center gap-1.5 sm:gap-2 ${className}`}>
      <Framed frame={MARK} alt="" sizes="64px" className="h-full" priority={priority} />
      <span className="text-[1.2rem] font-semibold leading-none tracking-[-0.035em] text-fg [font-stretch:94%] sm:text-[1.5rem]">
        Vardena
      </span>
    </span>
  );
}

/** The V on its own, for places that pair it with the name in text. */
export function BrandMark({ className = "" }: { className?: string }) {
  return <Framed frame={MARK} alt="" sizes="64px" className={className} />;
}

/** The name drawn very large and faint at the foot of the page, fitted to the full width. */
export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1000 146" className={`brand-wordmark ${className}`}>
      <defs>
        {/* Ink that runs out toward the bottom, so the word sinks into the canvas. */}
        <linearGradient id="wordmark-ink" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0.2" stopColor="var(--fg)" stopOpacity="0.1" />
          <stop offset="0.9" stopColor="var(--fg)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <text x="0" y="146" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="url(#wordmark-ink)">
        VARDENA
      </text>
    </svg>
  );
}
