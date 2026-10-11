# Brand assets

Robin supplied this artwork on 2026-10-11. Each file is stored byte for byte unchanged. Do not redraw, recolour or replace it with generated artwork.

| File | Pixels | Use |
| --- | --- | --- |
| verdana-lockup.png | 2172 x 724 | Horizontal logo in the header (`BrandLockup`); source of the share image |
| verdana-mark.png | 1536 x 1024 | The V on its own in the footer and the closing call-to-action band (`BrandMark`); source of the icons |
| verdana-wordmark.png | 2175 x 723 | The large, faint VERDANA at the foot of every page, used as a CSS mask (`.brand-wordmark`) |
| verdana-original.png | 1254 x 1254 | The first square logo on navy; kept as supplied, not used by the site |

SHA-256:

- verdana-lockup.png: 370af10fb54f66fe67f1a3f80edaa443d29767e30ac6dfe9aa5793d33931ac6c
- verdana-mark.png: 6cfa4d485ad44f6ec90a46a5eefb1b6b9edf540835908acd728b1b2bb5ced588
- verdana-wordmark.png: ea228cbd28372ba632cd8c923e0a4b9d782d6ae792743f43cf14d3332d51e45f
- verdana-original.png: 7689e98c4c9e6f6f0662b06176e5d6efb7c0a2cbadb664d83950d7f607b4e899

Each PNG has a wide transparent margin. In compact placements `.brand-frame` (src/components/brand.tsx) clips only that empty margin, measured as the box around every pixel with alpha above 2/255.

## Derivatives

`node scripts/brand-derivatives.mjs`, run from the repository root, regenerates every derivative. It crops a source to its artwork frame (the transparent margin only), centres and resizes it. Nothing is redrawn.

| File | Source | How |
| --- | --- | --- |
| src/app/favicon.ico | mark | 16, 32 and 48 px RGBA PNGs in one ICO, 2 % padding, transparent |
| src/app/icon.png | mark | 512 px, 6 % padding, transparent |
| public/brand/verdana-mark-512.png | mark | The same image as icon.png; the Organization logo in the structured data |
| src/app/apple-icon.png | mark | 180 px, 12 % padding on white, since iOS fills transparency with black |
| public/brand/verdana-og.png | lockup | 1200 x 630 share image: the lockup 600 px wide, centred on the midnight band with the glows of `.tone-night` |
