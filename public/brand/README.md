# Brand assets

Robin supplied this artwork on 2026-10-11. Each file is stored byte for byte unchanged. Do not redraw, recolour or replace it with generated artwork.

The company was renamed from Verdana to Vardena on 2026-10-12. The lockup, the wordmark and the first square logo spell the former name, so they are archived in docs/brand-archive and no longer served by the site. Only the V remains in use, and its file was renamed without touching its bytes.

| File | Pixels | Use |
| --- | --- | --- |
| vardena-mark.png | 1536 x 1024 | The V: in the header beside the name (`BrandLockup`), in the footer and the closing call-to-action band (`BrandMark`); source of the icons and the share image |

Archived in docs/brand-archive: verdana-lockup.png (2172 x 724), verdana-wordmark.png (2175 x 723), verdana-original.png (1254 x 1254).

SHA-256:

- vardena-mark.png (was verdana-mark.png): 6cfa4d485ad44f6ec90a46a5eefb1b6b9edf540835908acd728b1b2bb5ced588
- verdana-lockup.png: 370af10fb54f66fe67f1a3f80edaa443d29767e30ac6dfe9aa5793d33931ac6c
- verdana-wordmark.png: ea228cbd28372ba632cd8c923e0a4b9d782d6ae792743f43cf14d3332d51e45f
- verdana-original.png: 7689e98c4c9e6f6f0662b06176e5d6efb7c0a2cbadb664d83950d7f607b4e899

The PNG has a wide transparent margin. `.brand-frame` (src/components/brand.tsx) clips only that empty margin, measured as the box around every pixel with alpha above 2/255.

Until artwork for the new name exists, the name is set in the site's own type: beside the V in the header, and as SVG text fitted to the width at the foot of every page (`BrandWordmark`).

## Derivatives

`node scripts/brand-derivatives.mjs`, run from the repository root, regenerates every derivative. It crops the V to its artwork frame (the transparent margin only), centres and resizes it. Nothing is redrawn.

| File | How |
| --- | --- |
| src/app/favicon.ico | 16, 32 and 48 px RGBA PNGs in one ICO, 2 % padding, transparent |
| src/app/icon.png | 512 px, 6 % padding, transparent |
| public/brand/vardena-mark-512.png | The same image as icon.png; the Organization logo in the structured data |
| src/app/apple-icon.png | 180 px, 12 % padding on white, since iOS fills transparency with black |
| public/brand/vardena-og.png | 1200 x 630 share image: the V 380 px wide, centred on the midnight band with the glows of `.tone-night` |
