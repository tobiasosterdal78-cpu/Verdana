import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * The owner-supplied brand artwork, used unchanged (see public/brand/README.md).
 * Each PNG has a wide transparent margin; .brand-frame clips only that empty
 * margin, measured as the box around every pixel with alpha above 2/255.
 */
type Frame = { src: string; sw: number; sh: number; fx: number; fy: number; fw: number; fh: number };

const LOCKUP: Frame = { src: "/brand/verdana-lockup.png", sw: 2172, sh: 724, fx: 76, fy: 116, fw: 2032, fh: 498 };
const MARK: Frame = { src: "/brand/verdana-mark.png", sw: 1536, sh: 1024, fx: 80, fy: 110, fw: 1376, fh: 836 };

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

/** The horizontal logo, where the V is the first letter of the name. */
export function BrandLockup({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return <Framed frame={LOCKUP} alt="Verdana" sizes="160px" className={className} priority={priority} />;
}

/** The V on its own, for places that pair it with the name in text. */
export function BrandMark({ className = "" }: { className?: string }) {
  return <Framed frame={MARK} alt="" sizes="64px" className={className} />;
}

/** The owner's VERDANA wordmark, drawn very large and faint at the foot of the page. */
export function BrandWordmark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`brand-wordmark ${className}`} />;
}
