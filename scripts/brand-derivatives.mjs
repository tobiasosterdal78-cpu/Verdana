// Generates the site icons and the share image from the owner-supplied
// artwork in public/brand. The artwork is only cropped to its own frame (the
// transparent margin), centred and resized; the source files stay byte for
// byte unchanged. Run from the repository root:
//   node scripts/brand-derivatives.mjs
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

// Each source and the frame of its artwork, as in src/components/brand.tsx.
const MARK = "public/brand/verdana-mark.png";
const MARK_FRAME = { left: 80, top: 110, width: 1376, height: 836 };
const LOCKUP = "public/brand/verdana-lockup.png";
const LOCKUP_FRAME = { left: 76, top: 116, width: 2032, height: 498 };

const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

/** The V centred on a square field, with `padding` of the size on each side. */
async function square(size, padding, background) {
  const inner = Math.round(size * (1 - 2 * padding));
  const art = await sharp(MARK).extract(MARK_FRAME).resize({ width: inner, fit: "inside" }).png().toBuffer();
  const { width, height } = await sharp(art).metadata();
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: art, left: Math.round((size - width) / 2), top: Math.round((size - height) / 2) }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** ICO container of RGBA PNG images (ICO decoders reject palette PNGs). */
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, index) => {
    const entry = 6 + 16 * index;
    header.writeUInt8(size >= 256 ? 0 : size, entry);
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    header.writeUInt8(0, entry + 2);
    header.writeUInt8(0, entry + 3);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

/** The 1200 x 630 share image: the lockup on the midnight band, with the glows of .tone-night. */
async function shareImage() {
  const W = 1200;
  const H = 630;
  const width = 600;
  const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="blue" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(936 -63) scale(800 430)">
      <stop offset="0" stop-color="rgb(42,91,255)" stop-opacity="0.26"/>
      <stop offset="0.62" stop-color="rgb(42,91,255)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glacier" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(120 693) scale(533 347)">
      <stop offset="0" stop-color="rgb(99,210,247)" stop-opacity="0.09"/>
      <stop offset="0.6" stop-color="rgb(99,210,247)" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#070c1a"/>
  <rect width="${W}" height="${H}" fill="url(#blue)"/>
  <rect width="${W}" height="${H}" fill="url(#glacier)"/>
</svg>`);
  const logo = await sharp(LOCKUP).extract(LOCKUP_FRAME).resize({ width }).png().toBuffer();
  const { height } = await sharp(logo).metadata();
  return sharp(background)
    .composite([{ input: logo, left: Math.round((W - width) / 2), top: Math.round((H - height) / 2) }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const icon = await square(512, 0.06, CLEAR);
await writeFile("src/app/icon.png", icon);
// The same image is the Organization logo in the structured data.
await writeFile("public/brand/verdana-mark-512.png", icon);
// iOS fills transparency with black, so the touch icon gets a white field.
await writeFile("src/app/apple-icon.png", await square(180, 0.12, WHITE));
const favicons = [];
for (const size of [16, 32, 48]) favicons.push({ size, data: await square(size, 0.02, CLEAR) });
await writeFile("src/app/favicon.ico", ico(favicons));
await writeFile("public/brand/verdana-og.png", await shareImage());

console.log("Brand derivatives written.");
