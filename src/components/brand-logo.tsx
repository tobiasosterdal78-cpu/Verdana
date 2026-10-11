import Image from "next/image";

/** Original artwork, with its empty outer margins framed by CSS. */
export function BrandLogo() {
  return (
    <span className="brand-image">
      <Image
        src="/brand/verdana-original.png"
        alt="Verdana"
        width={1254}
        height={1254}
        sizes="154px"
      />
    </span>
  );
}
