# Icon system for Verdana's website: library choice, icon mapping, Microsoft product-icon compliance

Checked on 2026-10-11. Sources: npm registry JSON (registry.npmjs.org), published package files on unpkg, the GitHub REST API, the Iconify API, Microsoft Learn pages, two Microsoft PDFs (text extracted locally) and Verdana's local repo files.

Project baseline: Next.js ^16.4.0 (16.4.0 installed), React ^19.3.0, Tailwind CSS ^4.3.3, TypeScript ^6.0.3 and lucide-react ^1.55.0 ([package.json](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/package.json)). All icons already go through one semantic registry, `src/components/icons.tsx`. It wraps Lucide with default size 20, strokeWidth 1.6 and aria-hidden, and has keys such as `implementation`, `migration`, `integration`, `support`, `management`, `consulting`, `advisory`, `mail`, `menu` and `close` ([icons.tsx](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/components/icons.tsx)). The client component `navigation.tsx` imports `ArrowUpRight`, `Menu` and `X` straight from lucide-react ([navigation.tsx](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/components/navigation.tsx)).

Note on quotations: these notes reproduce only one short verbatim excerpt of third-party text, the core sentence of Microsoft's icon terms. All other terms are closely paraphrased, with a link to the primary text.

## 1. How do the candidate libraries compare (aesthetics, weights, size, React package quality, RSC, license, maintenance, bundle)?

### Takeaway
Phosphor is the only candidate that meets all four conditions: an MIT license with no attribution, a first-party React package, real thin/light/regular/bold/fill/duotone weights, and a documented import path for Server Components. Its weakness is maintenance. There has been no npm release since 2025-05-22, and the icon set has not changed since 2024-03.

- **Tabler and Lucide** are very actively maintained and work in Server Components. Both are single-style line sets in the same look, so neither fixes the "generic" complaint.
- **Solar** looks premium in its duotone styles, but CC BY 4.0 requires attribution and there is no first-party React package.
- **Untitled UI free** is not actually MIT-licensed.
- **Remix Icon** now uses a custom license.
- **Fluent and Material** carry strong Microsoft and Google product-UI signatures and are harder to integrate.

### Cited Findings

#### Comparison table (all values checked 2026-10-11)

| Library | Package @ latest (publish date) | License / attribution | React peer range | Icons | Styles / weights | Stroke model | Fit for Next.js Server Components | Activity in the 12 months to 2026-10-11 |
|---|---|---|---|---|---|---|---|---|
| **Phosphor** | `@phosphor-icons/react` 2.1.10 (2025-05-22) | MIT, no attribution | react and react-dom >= 16.8 | 1,512 × 6 weights = 9,072 | thin, light, regular, bold, fill, duotone | Fixed weights: outlines drawn as filled shapes on a 256-unit grid; no stroke prop | Must import from `@phosphor-icons/react/ssr` in Server Components (documented) | 0 npm releases. Last push to the repo 2026-01-06. Icon set (`@phosphor-icons/core` 2.1.1) unchanged since 2024-03-29. |
| **Tabler** | `@tabler/icons-react` 3.49.0 (2026-10-05) | MIT, no attribution | react >= 16 | 6,238 | outline + filled | `stroke` prop, default 2 | Works directly (no React context). Already in Next.js's default import-optimization list. | 17 releases; push 2026-10-10; 22.2k stars |
| **Lucide** (current) | `lucide-react` 1.55.0 (2026-10-10) | ISC, no attribution | react ^16.5.1 to ^19 | 1,870 | one outline style | adjustable `strokeWidth`, plus `absoluteStrokeWidth` | Verdana already uses it from server modules. In Next.js's default list. | 92 releases; push 2026-10-10; 24.9k stars |
| **Heroicons** | `@heroicons/react` 2.2.0 (2024-11-18) | MIT | react >= 16 or ^19 rc | 1,288 across 4 styles (about 320 each) | 24 outline, 24 solid, 20 mini, 16 micro | fixed | Works. Its subpaths are in Next.js's default list. | No release since 2024-11 |
| **Hugeicons (free)** | `@hugeicons/react` 1.1.10 (2026-08-21) + `@hugeicons/core-free-icons` 4.3.5 (2026-09-21) | MIT for the free set; Pro is paid | react >= 16 | 6,000+ (Iconify counts 6,065) | Free: Stroke Rounded only. Pro: 10 styles, 60,000+ icons. | `strokeWidth` prop, `absoluteStrokeWidth` | `HugeiconsIcon` uses no context, so it is safe in Server Components | 9 + 22 releases; push 2026-09-23 |
| **Solar** | `@iconify-json/solar` 1.2.13 (2026-09-26), rendered via `@iconify/react` 6.0.2 | **CC BY 4.0: attribution required** | react >= 16 (renderer) | 8,706 variants | Broken, Line Duotone, Linear, Outline, Bold, Bold Duotone | stroke | Published on npm only as Iconify JSON data. Needs the Iconify renderer or a custom build step. | 9 data releases |
| **Untitled UI (free)** | `@untitledui/icons` 0.0.23 (2026-09-22) | npm metadata says MIT, but the bundled LICENSE is a **custom license**: commercial use allowed; no redistribution, no derivative icon libraries, no resale kits | react >= 16 | 1,181 | line (free tier) | `strokeWidth="2"` hard-coded in the paths | Plain components, safe in Server Components | 4 releases; 75 stars; still pre-1.0 |
| **Iconoir** | `iconoir-react` 7.12.1 (2026-08-12) | MIT | react 18 or 19 | 1,671 (regular + solid) | regular, solid | `strokeWidth`, default 1.5 | Every icon module starts with `"use client"` and uses a context, so icons ship as client components | 3 releases; push 2026-10-06 |
| **Remix Icon** | `@remixicon/react` 4.9.0 (2026-01-29) | **Remix Icon License v1.0** (Jan 2026): commercial use allowed, attribution optional; bans selling the icons, building competing libraries, and using an icon as a logo or brand mark | react >= 18.2.0 | 3,188 | line + fill | fixed | No context, but all icons sit in one 2.4 MB module | 3 releases; push 2026-04-28 |
| **Material Symbols** | `@material-symbols/svg-300` 0.48.0 (2026-10-09, raw SVG files) or the `material-symbols` font 0.48.0 | Apache-2.0, attribution optional | none (no React components) | 15,728 (+15,793 in the Light set) | one package per weight (e.g. svg-300); styles not re-verified | fixed per package | Needs an SVGR/asset pipeline or the icon font | 45 to 47 releases (community packaging) |
| **Fluent UI System Icons** | `@fluentui/react-icons` 2.0.344 (2026-10-09) | MIT | react >= 16.8 and < 20 | 19,876 (+890 color icons) | Regular, Filled, Color | fixed | Standard API injects CSS at runtime via Griffel (CSS-in-JS). A separate Headless API ships a CSS file instead. | 40 releases; push 2026-10-09; 174 MB unpacked |

#### Sources and details per library
- **Phosphor: version, license, peer range, `sideEffects: false`, 33.0 MB unpacked, no releases since 2025-10-11.** Sources: [npm registry](https://registry.npmjs.org/@phosphor-icons/react) and [GitHub API (last push 2026-01-06, last release v2.1.10 on 2025-05-22, 1,768 stars)](https://api.github.com/repos/phosphor-icons/react).
- **Phosphor: icon set frozen.** `@phosphor-icons/core` 2.1.1 was published 2024-03-29 ([npm registry](https://registry.npmjs.org/@phosphor-icons/core)). Its metadata lists 1,512 icons ([core metadata](https://unpkg.com/@phosphor-icons/core@2.1.1/dist/index.mjs)), and Iconify counts 9,072 variants, i.e. 1,512 × 6 weights ([Iconify collections API](https://api.iconify.design/collections)). Since 2025-01 the core repo has received only README and tag-typo commits ([commits API](https://api.github.com/repos/phosphor-icons/core/commits?since=2025-01-01)).
- **Phosphor: React repo is dormant.** Since 2025-06 the only commit is a README sync on 2026-01-06 ([commits API](https://api.github.com/repos/phosphor-icons/react/commits?since=2025-06-01)). The marketing site repo was last pushed 2026-08-26 ([GitHub API](https://api.github.com/repos/phosphor-icons/homepage)).
- **Phosphor: open, unmerged issues and PRs** ([issues API](https://api.github.com/repos/phosphor-icons/react/issues?state=open&sort=updated&per_page=12), [issue search](https://api.github.com/search/issues?q=repo:phosphor-icons/react+next&per_page=8)):
  - "'use client' in client icons and IconContext" (2026-01-04)
  - a community PR adding a use-client directive to the context (2026-03-30)
  - "React 19 Compatibility (forwardRef)" (opened 2025-06-25)
  - "Treeshake unused weights" (2025-09-03)
  - an ESM/CJS import-resolution report from Vitest users (2026-04-01)
  - a rolldown/Vite 8 bundling bug (2026-06-29)
- **Phosphor: why the default import fails in Server Components.** `IconBase` imports `IconContext` and calls `useContext`, and has no `"use client"` directive ([IconBase](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/IconBase.es.js)). The `/ssr` build renders through `SSRBase`, which uses no hooks ([SSRBase](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/SSRBase.es.js)).
- **Phosphor: the `/ssr` export.** The exports map points `./ssr` to `./dist/ssr/index.es.js` and also exposes `./dist/ssr/*` ([package.json](https://unpkg.com/@phosphor-icons/react@2.1.10/package.json)). The README tells users to import from `@phosphor-icons/react/ssr` for SSR, Server Components, or any environment without the Context API, and names Next.js Server Components as the example ([README](https://github.com/phosphor-icons/react#react-server-components-and-ssr)).
- **Phosphor: every icon carries all six weights.** Each icon's definition module holds all six weights; the Database definition is 4,909 bytes raw ([defs/Database](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/defs/Database.es.js)). This is why the "Treeshake unused weights" issue exists.
- **Phosphor: both naming styles are exported.** Version 2.1.10 exports unsuffixed and `*Icon`-suffixed names (e.g. `Acorn` and `AcornIcon`): 1,530 suffixed names in both the default and SSR builds ([index.es.js](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/index.es.js), [ssr/index.es.js](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/ssr/index.es.js)). The README example uses the suffixed form ([README](https://github.com/phosphor-icons/react#react-server-components-and-ssr)).
- **Next.js 16.4.0 default import optimization.** The built-in `optimizePackageImports` list includes `lucide-react`, `@tabler/icons-react`, the `@heroicons/react` subpaths and `react-icons/*` (including `react-icons/pi`, Phosphor via react-icons). It does **not** include `@phosphor-icons/react`. User entries in `experimental.optimizePackageImports` are merged into this list ([installed Next.js source: dist/server/config.js](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/node_modules/next/dist/server/config.js)).
- **Tabler.** 3.49.0, MIT, peer react >= 16, `sideEffects: false` ([npm registry](https://registry.npmjs.org/@tabler/icons-react)). `createReactComponent` defaults `stroke = 2` and maps it to `strokeWidth` ([source](https://unpkg.com/@tabler/icons-react@3.49.0/dist/esm/createReactComponent.mjs)). The entry module has no context and no `"use client"` ([entry](https://unpkg.com/@tabler/icons-react@3.49.0/dist/esm/tabler-icons-react.mjs)). Iconify counts 6,238 icons for v3.49.0 ([Iconify](https://api.iconify.design/collections)). GitHub: 22,210 stars, pushed 2026-10-10, release v3.49.0 on 2026-10-05 ([GitHub API](https://api.github.com/repos/tabler/tabler-icons)).
- **Lucide.** 1.55.0, ISC, 92 versions published since 2025-10-11 ([npm registry](https://registry.npmjs.org/lucide-react)). Iconify counts 1,870 icons ([Iconify](https://api.iconify.design/collections)). The entry module has no `"use client"` ([entry](https://unpkg.com/lucide-react@1.55.0/dist/esm/lucide-react.mjs)). GitHub: 24,939 stars ([GitHub API](https://api.github.com/repos/lucide-icons/lucide)).
- **Heroicons.** 2.2.0 (2024-11-18). Exports `24/outline`, `24/solid`, `20/solid` and `16/solid` ([npm registry](https://registry.npmjs.org/@heroicons/react)). Iconify counts 1,288 variants ([Iconify](https://api.iconify.design/collections)). Last release 2024-11-18 ([GitHub API](https://api.github.com/repos/tailwindlabs/heroicons)).
- **Hugeicons.** The free package has 6,000+ icons in Stroke Rounded only; Pro has 60,000+ icons in 10 styles. The free icons are MIT for personal and commercial use ([npm registry, core-free-icons](https://registry.npmjs.org/@hugeicons/core-free-icons)). The React wrapper is MIT and grants no rights to Pro assets ([npm registry, react](https://registry.npmjs.org/@hugeicons/react)). `HugeiconsIcon` uses only `forwardRef` and `createElement` and supports `strokeWidth` and `absoluteStrokeWidth` ([source](https://unpkg.com/@hugeicons/react@1.1.10/dist/esm/HugeiconsIcon.js)). The core package is 80.4 MB unpacked with 24,293 files ([npm registry](https://registry.npmjs.org/@hugeicons/core-free-icons)).
- **Solar.** Licensed CC BY 4.0, made by 480 Design, with 6 style suffixes and 8,706 variants ([Iconify collection API](https://api.iconify.design/collection?prefix=solar&info=true)). The npm data package is labelled `CC-BY-4.0` ([npm registry](https://registry.npmjs.org/@iconify-json/solar)). The renderer `@iconify/react` 6.0.2 is MIT ([npm registry](https://registry.npmjs.org/@iconify/react)).
- **Untitled UI.** The bundled LICENSE allows personal and commercial use but forbids selling, sublicensing or distributing the icons, building derivative icon libraries, and using them in UI kits or templates for resale ([LICENSE](https://unpkg.com/@untitledui/icons@0.0.23/LICENSE)). npm metadata still says MIT ([npm registry](https://registry.npmjs.org/@untitledui/icons)). The package exports 1,181 icons ([dist/index.mjs](https://unpkg.com/@untitledui/icons@0.0.23/dist/index.mjs)). Icons are plain components with no context ([Activity.mjs](https://unpkg.com/@untitledui/icons@0.0.23/dist/Activity.mjs)).
- **Iconoir.** 7.12.1, MIT, peer react 18 or 19 ([npm registry](https://registry.npmjs.org/iconoir-react)). Both the context module and the icon modules begin with `"use client"`; default `strokeWidth` is 1.5 ([context](https://unpkg.com/iconoir-react@7.12.1/dist/esm/IconoirContext.mjs), [icon module](https://unpkg.com/iconoir-react@7.12.1/dist/esm/regular/Database.mjs)).
- **Remix Icon.** Remix Icon License v1.0, January 2026 ([License](https://raw.githubusercontent.com/Remix-Design/RemixIcon/master/License)):
  - allows commercial use in websites and marketing; attribution optional
  - forbids selling the icons as a standalone pack and building competing icon libraries
  - forbids using an icon as a logo or brand identity

  Iconify still lists the set as v4.8.0 under Apache 2.0, which is inconsistent with upstream ([Iconify](https://api.iconify.design/collections)). The React package ships every icon in one `index.mjs` (2.4 MB) ([entry](https://unpkg.com/@remixicon/react@4.9.0/index.mjs)).
- **Material Symbols.** Apache 2.0. The README says attribution is welcome but not required ([npm registry, svg-300](https://registry.npmjs.org/@material-symbols/svg-300)).
- **Fluent UI.**
  - 2.0.344, MIT. Peer react >= 16.8.0 and < 20. Depends on `@griffel/react`. 174.1 MB unpacked, 47,238 files ([npm registry](https://registry.npmjs.org/@fluentui/react-icons)).
  - The standard API injects CSS rules at runtime through Griffel. The Headless API swaps this for `data-*` attributes plus a shipped `styles.css` that works in Next.js ([headless docs](https://raw.githubusercontent.com/microsoft/fluentui-system-icons/main/packages/react-icons/docs/headless.md)).
  - Fluent 2 states that system icons are MIT open source ([Fluent 2 iconography](https://fluent2.microsoft.design/iconography)).

### Inferences
- **Look.** Lucide, Tabler and Iconoir share the same rounded 24 px line style descended from Feather. Moving from Lucide to Tabler would barely change how generic the site looks. Phosphor's light and thin weights, plus duotone, give a visibly more refined and brandable system. (Design judgment, not a sourced claim.)
- **Phosphor's maintenance risk is acceptable**, because:
  - the license is MIT and the icons are static SVG paths;
  - the `/ssr` path avoids the context-related open issues;
  - the peer range has no upper bound;
  - Verdana uses about 45 icons through a single registry, so swapping libraries is a one-file change.

  Mitigations: pin 2.1.10, keep Tabler as the drop-in fallback, and if React ever removes `forwardRef`, vendor the MIT SVGs from `@phosphor-icons/core`.
- **Bundle impact.** Icons rendered in Server Components send no icon JavaScript to the browser, only SVG markup in the HTML. Per-icon client cost matters only in `"use client"` files. In Verdana that is just `navigation.tsx` with 3 icons, so Phosphor's larger per-icon cost (all six weights in each module) is negligible.
- **Why not the others:**
  - Solar is the most premium-looking duotone set, but CC BY 4.0 attribution conflicts with the brief's "no attribution problems" requirement, and it has no first-party React components.
  - Hugeicons free is modern and active, but it has only one style (Stroke Rounded) and no duotone or light weights.
  - Untitled UI's real license is restrictive despite its npm metadata.
  - Fluent reads as Microsoft product UI and could blur Verdana's brand with Microsoft's. Material reads as Google.

### Gaps
- No Next.js 16.4 build or benchmark was run with Phosphor `/ssr`. The project was kept read-only and nothing was installed. Verify with `next build` after migrating.
- Gzipped per-icon sizes were not measured.
- Untitled UI's free-tier style range was not confirmed from a primary page.
- Heroicons and Material Symbols style details were not re-verified.
- Lucide 1.x's internal provider/context was not analysed beyond its entry module.

## 2. Which single library and weight should Verdana use (with fallback, install command and Server Component import pattern)?

### Takeaway
Use **Phosphor Icons (`@phosphor-icons/react` 2.1.10, MIT)**:
- **Light** for every content icon, at 28–32 px.
- **Regular** for UI and contact icons, at 16–24 px.
- **Duotone** only as an accent on the six service tiles plus advisory, at 24 px, with the secondary layer tinted brand-cyan through CSS.

Always import from `@phosphor-icons/react/ssr`.

Fallback: **Tabler Icons (`@tabler/icons-react` 3.49.0, MIT)** with `stroke={1.5}` (1.25 at 28 px and above).

### Cited Findings
- The `/ssr` subpath is the documented import for Next.js Server Components. `SSRBase` has no hooks; `IconBase` uses context ([README](https://github.com/phosphor-icons/react#react-server-components-and-ssr), [SSRBase](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/SSRBase.es.js), [IconBase](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/IconBase.es.js)).
- `SSRBase` props: `size` (default `"1em"`), `weight` (default `"regular"`), `color` (default `currentColor`), `mirrored` and `alt` ([SSRBase](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/SSRBase.es.js)).
- The types `Icon`, `IconProps` and `IconWeight` are exported from the main entry. `IconWeight` is `"thin" | "light" | "regular" | "bold" | "fill" | "duotone"`. The `/ssr` type index exports only `SSRBase` and the icons ([index.d.ts](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/index.d.ts), [lib/types.d.ts](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/lib/types.d.ts), [ssr/index.d.ts](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/ssr/index.d.ts)).
- In duotone, the secondary shape is the same path colour with `opacity="0.2"` ([duotone SVG](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/duotone/database-duotone.svg), [defs](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/defs/Database.es.js)).
- Next.js 16.4 merges `experimental.optimizePackageImports` with its defaults, and Phosphor is not among the defaults ([installed config.js](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/node_modules/next/dist/server/config.js)).
- Tabler fallback facts: MIT 3.49.0; a `stroke` prop defaulting to 2; already in Next.js's default optimized list ([npm](https://registry.npmjs.org/@tabler/icons-react), [createReactComponent](https://unpkg.com/@tabler/icons-react@3.49.0/dist/esm/createReactComponent.mjs), [config.js](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/node_modules/next/dist/server/config.js)).

### Inferences

#### Primary: Phosphor 2.1.10
**Install** (then remove Lucide once migrated):
```bash
npm install @phosphor-icons/react@2.1.10
npm uninstall lucide-react
```

**Server-safe registry.** Keep the existing `src/components/icons.tsx` contract. The file has no `"use client"`, so it stays usable from Server Components.
```tsx
import {
  CompassIcon, StackPlusIcon, CloudArrowUpIcon, PlugsConnectedIcon, LifebuoyIcon,
  ShieldCheckIcon, UsersThreeIcon, /* ...rest of the mapping in section 4 */
  ArrowRightIcon, ArrowUpRightIcon, CaretDownIcon, ListIcon, XIcon, CheckIcon, PlusIcon, MinusIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react"; // type-only, erased at build

const icons = {
  advisory: CompassIcon,
  implementation: StackPlusIcon,
  migration: CloudArrowUpIcon,
  // ...
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

export function Icon({ name, size = 20, weight = "regular", className }: {
  name: IconName; size?: number; weight?: IconWeight; className?: string;
}) {
  const Component = icons[name];
  return <Component size={size} weight={weight} className={className} aria-hidden="true" focusable="false" />;
}
```
- **Client components.** In `navigation.tsx`, import from the same path: `import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react/ssr";`. The SSR components use no hooks, so they also work on the client, and a single path avoids bundling both the client and SSR builds. Only use the default entry if you want `IconContext` defaults.
- **Barrel optimization** in `next.config.ts`: add `experimental: { optimizePackageImports: ["@phosphor-icons/react", "@phosphor-icons/react/ssr"] }`. If dev compile is still slow, deep imports exposed by the exports map are an escape hatch, e.g. `@phosphor-icons/react/dist/ssr/CloudArrowUp`.
- **Duotone accent** in Tailwind v4 `globals.css`. CSS rules override SVG presentation attributes:
  ```css
  .icon-duotone [opacity="0.2"] { fill: var(--color-brand-cyan); opacity: 0.35; }
  ```
  Use it as `<Icon name="migration" weight="duotone" size={24} className="icon-duotone text-slate-100" />`.
- **Weights**, chosen so the rendered stroke is about 1.25–1.5 px everywhere (see section 3):
  - `light`: services in the non-duotone variant, benefits, process steps and ecosystem nodes, at 28–32 px.
  - `regular`: buttons, nav, chevrons, contact rows and checklists, at 16–24 px.
  - `duotone`: the six services plus advisory only, at 24 px.
  - `thin`: only for decorative glyphs of 40 px and up.
  - Avoid `bold` and `fill` except for tiny status dots.
- **Accessibility.** Keep decorative icons `aria-hidden`. Icon-only buttons (menu, close) need an `aria-label` on the button. Phosphor's `alt` prop renders a title when an icon carries meaning.

#### Fallback: Tabler 3.49.0
```bash
npm install @tabler/icons-react@3.49.0
```
```tsx
import { IconCloudUpload } from "@tabler/icons-react"; // works in Server Components as-is
<IconCloudUpload size={28} stroke={1.25} aria-hidden="true" />
```
Use Tabler if Phosphor breaks on a future React or Next.js release, or if an icon is missing. Every Tabler name in section 4 is verified.

### Gaps
- Whether Next.js's barrel optimizer handles the `@phosphor-icons/react/ssr` subpath was not tested.
- How Phosphor will be maintained in future is unknown, given no releases for 16 months.

## 3. Which style looks most "expensive" for this brand, and how should icons be presented?

### Takeaway
The expensive look comes from restraint:
- one optical stroke weight across the whole site (about 1.25–1.5 px rendered);
- monochrome silver or white icons on deep navy, with a single cyan accent;
- quiet containers;
- duotone used sparingly, as an echo of the dimensional "V" logo.

With Phosphor, Light at 28–32 px and Regular at 16–24 px render almost the same stroke width, so the whole site reads as one consistent family.

### Cited Findings
- **Phosphor stroke geometry.** Phosphor draws on a 256-unit grid. For the database icon, the outer contour starts at x=36 (thin), 34 (light) and 32 (regular), around the shape's centre line at x=40. That means half-strokes of 4, 6 and 8 units, i.e. strokes of 8, 12 and 16 units ([thin SVG](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/thin/database-thin.svg), [light SVG](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/light/database-light.svg), [regular SVG](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/regular/database.svg), [duotone SVG, centre line at x=40](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/duotone/database-duotone.svg)).
- **Duotone secondary layer** is the same colour at 0.2 opacity ([duotone SVG](https://unpkg.com/@phosphor-icons/core@2.1.1/assets/duotone/database-duotone.svg)).
- **Microsoft's presentation rules for its own product icons** ([Microsoft 365 trademark guidelines, June 2026](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/mscle/documents/presentations/FY27_Microsoft_365_trademark_guidelines.pdf)). These matter if official icons appear in the ecosystem diagram:
  - use equal sizes, either all the same asset size (e.g. all 48 px PNGs) or the same longest side;
  - keep clear space around the icon and its name;
  - labels only in black, light gray or white, never in the product colour;
  - minimum size 16 px.
- **Today's baseline.** Verdana's current icons are Lucide at 20 px with stroke 1.6 ([icons.tsx](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/components/icons.tsx)).

### Inferences
- **Rendered stroke widths in Phosphor** (stroke units ÷ 256 × size):

  | Weight | Size | Rendered stroke |
  |---|---|---|
  | regular | 16 px | 1.0 px |
  | regular | 20 px | 1.25 px |
  | regular | 24 px | 1.5 px |
  | light | 28 px | 1.31 px |
  | light | 32 px | 1.5 px |
  | thin | 40 px | 1.25 px |
  | duotone (regular strokes) | 24 px | 1.5 px |

  Choose sizes from this table so every context lands at 1.25–1.5 px. Avoid light below 24 px: about 1.1 px looks faint on navy on 1x screens.
- **Service and advisory tiles.**
  - Container: 56–64 px rounded square with 14–16 px radius.
  - Border: 1 px white at 8–10% opacity, over a faint navy-to-transparent gradient or a soft cyan radial glow at 10–15% opacity.
  - Icon: 24 px duotone, with silver/white strokes and a cyan secondary fill at about 35% opacity.
  - Hover: border to cyan at 30%, icon to cyan, a 150–200 ms transition, and no scale jumps.
- **Benefits.** 28–32 px light icons with no container, or a hairline circle, above the headline.
- **Process (4 steps).** Mono numerals (01–04) plus 28 px light icons along a 1 px cyan connector at 30–40% opacity.
- **Contact rows and UI.** 20 px regular icons in slate/silver, aligned to the text cap height.
- **Avoid:**
  - multicolour or illustrated icons, gradient-filled strokes at small sizes, and drop shadows;
  - mixing libraries or stroke weights inside one section;
  - recolouring official Microsoft icons;
  - oversized icons (icons should support the headings, not compete with them).
- **Contrast.** Meaningful icons should reach at least 3:1 non-text contrast against navy (the WCAG 2.x non-text contrast criterion; noted from general knowledge, not fetched in this pass).

### Gaps
- No authoritative, quantitative source says which icon style reads as "premium". These presentation rules are design judgment.
- Competitor and premium-site icon treatments were not audited in this pass.

## 4. Which exact icon component should each site item use? (verified mapping)

### Takeaway
Every Phosphor name below exists in `@phosphor-icons/react` 2.1.10 (`/ssr` build, 1,530 `*Icon` exports), and every Tabler name exists in `@tabler/icons-react` 3.49.0 (6,306 names). Two Tabler candidates do **not** exist: `IconPencilRuler` and `IconBlueprint`.

### Cited Findings
- **Name lists used for checking** (2026-10-11): Phosphor from [ssr/index.es.js](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/ssr/index.es.js); Tabler from [tabler-icons-react.d.ts](https://unpkg.com/@tabler/icons-react@3.49.0/dist/tabler-icons-react.d.ts).
- **Current Lucide registry keys and icons** come from [icons.tsx](file:///C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/components/icons.tsx).
- **Phosphor includes monochrome brand glyphs** `MicrosoftExcelLogoIcon`, `MicrosoftOutlookLogoIcon`, `MicrosoftTeamsLogoIcon` and `WindowsLogoIcon` (verified in the same name list) ([ssr/index.es.js](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/ssr/index.es.js)). Section 5 explains why not to use them.

### Inferences

#### Mapping table
Suffixed names are recommended. Weight and size follow section 2.

| Site item | Registry key (existing or new) | Phosphor component (recommended) | Phosphor alternatives (verified) | Tabler fallback (verified) | Current Lucide |
|---|---|---|---|---|---|
| **Services** | | | | | |
| Implementation | `implementation` | `StackPlusIcon` | `RocketLaunchIcon`, `CubeFocusIcon` | `IconStack2` (alt `IconRocket`) | Rocket |
| Migration & modernization from Dynamics NAV | `migration` | `CloudArrowUpIcon` (on-prem NAV to cloud BC) | `ArrowsClockwiseIcon`, `SwapIcon` | `IconCloudUpload` (alt `IconTransfer`, `IconDatabaseExport`) | RefreshCw |
| Integrations & development | `integration` | `PlugsConnectedIcon` | `BracketsCurlyIcon`, `CodeIcon`, `PuzzlePieceIcon` | `IconPlugConnected` (alt `IconCode`, `IconApi`) | Plug |
| Support & optimization | `support` | `LifebuoyIcon` | `GaugeIcon`, `HeadsetIcon` | `IconLifebuoy` (alt `IconGauge`, `IconHeadset`) | LifeBuoy |
| Application management (förvaltning) | `management` | `ShieldCheckIcon` | `GearSixIcon`, `ArrowsClockwiseIcon` | `IconShieldCheck` (alt `IconSettingsCheck`, `IconRefresh`) | ShieldCheck |
| Consulting (konsulttjänster) | `consulting` | `UsersThreeIcon` | `HandshakeIcon`, `UserFocusIcon` | `IconUsersGroup` (alt `IconHeartHandshake`) | Users |
| Advisory / ERP strategy | `advisory` | `CompassIcon` | `StrategyIcon`, `MapTrifoldIcon` | `IconCompass` (alt `IconChess`, `IconRoute`) | Compass |
| **Business benefits** | | | | | |
| Unified data | new `unifiedData` | `DatabaseIcon` | `IntersectThreeIcon`, `StackIcon` | `IconDatabase` (alt `IconStack3`) | – |
| Automation / time savings | `automation` | `LightningIcon` | `ClockCountdownIcon`, `TimerIcon`, `FlowArrowIcon` | `IconBolt` (alt `IconClockBolt`, `IconHourglass`) | Workflow |
| Better decisions / reporting | `report` | `ChartLineUpIcon` | `PresentationChartIcon`, `ChartBarIcon` | `IconChartLine` (alt `IconReportAnalytics`, `IconPresentationAnalytics`) | BarChart3 |
| **Process** | | | | | |
| 1. Understand | new `understand` | `MagnifyingGlassIcon` | `BinocularsIcon`, `ChatsCircleIcon` | `IconSearch` (alt `IconZoomScan`) | – |
| 2. Design | new `design` | `PencilRulerIcon` | `BlueprintIcon`, `CompassToolIcon` | `IconRuler2` (alt `IconPencil`, `IconTools`) | – |
| 3. Deliver | new `deliver` | `RocketLaunchIcon` | `FlagCheckeredIcon`, `PackageIcon` | `IconRocket` (alt `IconFlag3`, `IconPackage`) | – |
| 4. Improve | new `improve` | `TrendUpIcon` | `ArrowsClockwiseIcon` | `IconTrendingUp` (alt `IconRefresh`) | – |
| **Ecosystem diagram** | | | | | |
| Business Central (hub) | – | **No generic icon.** Use a text label "Microsoft Dynamics 365 Business Central", or the official icon under the section 5 rules. | – | – | – |
| Microsoft 365, Power BI, Power Apps, Power Automate, Teams, Excel, Outlook, Copilot | – | **Text labels.** Official Power Platform icons are optional and only allowed inside a labelled architecture diagram (section 5). Do **not** use `MicrosoftExcelLogoIcon`, `MicrosoftOutlookLogoIcon`, `MicrosoftTeamsLogoIcon` or `WindowsLogoIcon`, and do not use `SparkleIcon` as a Copilot logo. | – | – | Sparkles (`copilot`) |
| E-commerce | `order` / new `ecommerce` | `StorefrontIcon` | `ShoppingCartSimpleIcon` | `IconBuildingStore` (alt `IconShoppingCart`) | Store / ShoppingCart |
| Banks | `bank` | `BankIcon` | – | `IconBuildingBank` | Landmark |
| Logistics | `logistics` | `TruckIcon` | `PackageIcon` | `IconTruckDelivery` (alt `IconTruck`) | Truck |
| "Your systems" | new `yourSystems` | `PuzzlePieceIcon` | `CirclesThreePlusIcon`, `PlugsIcon` | `IconPuzzle` (alt `IconApps`, `IconCirclePlus`) | – |
| **Contact** | | | | | |
| Email | `mail` | `EnvelopeSimpleIcon` | – | `IconMail` | Mail |
| Phone | `phone` | `PhoneIcon` | – | `IconPhone` | Phone |
| Location | `location` | `MapPinIcon` | `MapPinLineIcon` | `IconMapPin` | MapPin |
| Calendar / book a meeting | `calendar` | `CalendarDotsIcon` for the contact row; `CalendarPlusIcon` for the "Boka möte" CTA | `CalendarCheckIcon` | `IconCalendarEvent` (alt `IconCalendarPlus`, `IconCalendarCheck`) | CalendarCheck |
| **UI** | | | | | |
| Arrow right | `arrowRight` | `ArrowRightIcon` | – | `IconArrowRight` | ArrowRight |
| Arrow up-right (card / CTA link) | `arrowUpRight` | `ArrowUpRightIcon` | – | `IconArrowUpRight` | ArrowUpRight |
| Arrow left (if needed) | new | `ArrowLeftIcon` | – | not checked | – |
| Menu | `menu` | `ListIcon` | – | `IconMenu2` | Menu |
| Close | `close` | `XIcon` | – | `IconX` | X |
| Check | `check` | `CheckIcon` (feature lists: `CheckCircleIcon`) | – | `IconCheck` | Check |
| Chevrons | `chevronDown` (+ new up/left/right) | `CaretDownIcon`, `CaretUpIcon`, `CaretLeftIcon`, `CaretRightIcon` | – | `IconChevronDown`, `IconChevronUp`, `IconChevronLeft`, `IconChevronRight` | ChevronDown |
| External link | new `external` | `ArrowSquareOutIcon` | `ArrowUpRightIcon` | `IconExternalLink` | – |
| Accordion plus / minus | `plus` / `minus` | `PlusIcon` / `MinusIcon` | – | `IconPlus` / `IconMinus` | Plus / Minus |

#### Other keys already in `icons.tsx`
These are the order-to-report flow and Business Central capability areas, all verified.

| Key | Phosphor | Tabler |
|---|---|---|
| `order` | `ShoppingCartSimpleIcon` | `IconShoppingCart` |
| `core` | `StackIcon` | `IconStack2` |
| `warehouse` | `WarehouseIcon` | `IconBuildingWarehouse` |
| `invoice` | `InvoiceIcon` (alt `ReceiptIcon`) | `IconFileInvoice` (alt `IconReceipt`) |
| `bank` | `BankIcon` | `IconBuildingBank` |
| `report` | `ChartBarIcon` | `IconChartBar` |
| `finance` | `CoinsIcon` (alt `WalletIcon`, `CalculatorIcon`) | `IconCoins` |
| `sales` | `HandshakeIcon` (alt `TagIcon`) | `IconHeartHandshake` |
| `purchasing` | `BasketIcon` (alt `ClipboardTextIcon`, `ShoppingBagIcon`) | `IconShoppingCart` |
| `inventory` | `PackageIcon` (alt `CubeIcon`, `ArchiveIcon`) | `IconPackages` (alt `IconBox`) |
| `projects` | `KanbanIcon` (alt `BriefcaseIcon`) | `IconBriefcase` |
| `manufacturing` | `FactoryIcon` | `IconBuildingFactory2` |
| `service` | `WrenchIcon` | `IconTool` |
| `logistics` | `TruckIcon` | `IconTruck` |
| `automation` | `LightningIcon` | `IconBolt` |
| `copilot` | `SparkleIcon`, only as a generic "AI features" glyph next to text, never as the Copilot mark | `IconSparkles` |
| `cloud` | `CloudIcon` (alt `CloudCheckIcon`) | `IconCloud` |
| `company` | `BuildingOfficeIcon` (alt `BuildingsIcon`) | `IconBuilding` |
| `settings` | `GearSixIcon` | `IconSettings` |
| `document` | `FileTextIcon` | `IconFileText` |

Metaphors: implementation is "add a platform layer", migration is "on-prem to cloud", and förvaltning is "managed and protected". `RocketLaunchIcon` is kept for the "Deliver" step, so it doesn't duplicate the implementation service icon.

### Gaps
- Names were verified by text matching against the shipped export and type lists. The glyphs themselves were not viewed visually. Do a quick visual pass on the Phosphor site before finalising.

## 5. Official Microsoft product icons: where they are, exact terms, whether partner marketing and ecosystem diagrams are allowed, rules, attribution, and the compliant approach

### Takeaway
Microsoft Learn publishes official SVG sets for:
- **Dynamics 365**, including Business Central;
- **Power Platform**: Power BI, Power Apps, Power Automate, Copilot Studio and more;
- **Microsoft 365**: architecture/content icons.

All three share one narrow license: architectural diagrams, training materials or documentation; no cropping, flipping, rotating or distorting; and the icons must not represent your own product or service.

On top of that, the June 2026 Microsoft 365 trademark guidelines require a **trademark license** to use Microsoft 365 app icons (Excel, Outlook, Teams, Copilot and others), and they say app icons should not be decoration in marketing. Microsoft's general guidelines say logos and app/product icons generally need a license.

The compliant approach:
- **Default:** an ecosystem diagram built from plain text labels.
- **Optional:** official Dynamics 365 / Power Platform icons, unmodified, only inside a clearly labelled integration-architecture diagram.
- Never use Microsoft 365 app icons without a license.
- Add a trademark footnote.
- Use a partner badge only through official partner channels.

### Cited Findings
- **Terms on the Power Platform, Dynamics 365 and Microsoft 365 icon pages.** The pages carry identical wording. The only verbatim quote in these notes:

  > "Microsoft permits the use of these icons in architectural diagrams, training materials, or documentation."

  The terms continue that you may copy, distribute and display the icons **only** for that permitted use unless Microsoft grants explicit permission, and that Microsoft reserves all other rights. Sources: [Power Platform icons](https://learn.microsoft.com/en-us/power-platform/guidance/icons); [Dynamics 365 icons](https://learn.microsoft.com/en-us/dynamics365/get-started/icons); [Microsoft 365 architecture templates and icons](https://learn.microsoft.com/en-us/microsoft-365/solutions/architecture-icons-templates); also [Azure icons](https://learn.microsoft.com/en-us/azure/architecture/icons/).
- **Do's** on the Power Platform and Dynamics 365 pages ([Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/icons), [Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/get-started/icons)):
  - use the icons to show how products work together;
  - in diagrams, put the product name close to the icon;
  - show the icons as they appear in the products.
- **Don'ts** on the same pages:
  - don't crop, flip or rotate;
  - don't distort or change the shape;
  - don't use Microsoft product icons to represent your own product or service.
- **Power Platform page contents.** It covers Power Platform, Power Apps, Power Automate, Power BI, Power Pages, Microsoft Copilot Studio, Dataverse, AI Builder and Power Fx. December 2025 added Microsoft Agent 365 and updated all Power Platform and Copilot Studio icons; October 2025 updated Copilot Studio. Page last updated 2025-12-19 ([Power Platform icons](https://learn.microsoft.com/en-us/power-platform/guidance/icons)).
- **Dynamics 365 page contents.** It names Business Central among the products. Updates: new SVGs for the whole family in December 2025, deprecated app icons removed in January 2026, and a Contact Center icon plus FAQ update in February 2026. Last updated 2026-02-06 ([Dynamics 365 icons](https://learn.microsoft.com/en-us/dynamics365/get-started/icons)).
- **Microsoft 365 trademark guidelines (June 2026).** Source: [FY27 Microsoft 365 trademark guidelines PDF](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/mscle/documents/presentations/FY27_Microsoft_365_trademark_guidelines.pdf). Paraphrased:
  - **When a license is needed.** A trademark use license is required to use Microsoft 365 trademarks and Microsoft 365 app icons, and to imply sponsorship or endorsement. Check existing agreements and the general Microsoft guidelines first; otherwise get a stand-alone license through your Microsoft business owner.
  - **App icons are not logos.** They exist to launch apps and should not be used as decoration in marketing creative. Avoid using them decoratively or as logos. Don't alter, distort or crop them.
  - **Which icons are covered.** The listed product app icons include Copilot, Excel, Microsoft Teams, Outlook, Power Apps, Power Automate and Power BI.
  - **Naming in third-party marketing.** "Microsoft" should come before the app name at first mention, even when redundant. Don't shorten "Microsoft 365" to "M365".
  - **Layout when icons are shown together:**
    - equal sizes (e.g. all 48 px PNGs, or the same longest side);
    - labels only in black, light gray or white, never in the product colour;
    - minimum size 16 px;
    - a defined clear space (X or ½X) around icons and names.
- **General Microsoft Trademark and Brand Guidelines**, read via WebFetch extraction ([Microsoft Trademark and Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)). Paraphrased:
  - **License first.** Many uses, explicitly including logos and app and product icons, need a license first.
  - **Don'ts list.** Without a written license or express permission, it forbids using Microsoft's logos, icons or designs.
  - **Names.** Don't put Microsoft brand assets in business, product or domain names.
  - **Endorsement.** Don't imply affiliation, endorsement, sponsorship or approval.
  - **Text references.** Refer to products in plain text, truthfully and without alteration. Stating interoperability or compatibility is a listed "Do".
  - **Prominence.** Use Microsoft marks less prominently than your own brand, unless you have a strategic partnership agreement.
  - **Badges.** Badges showing designations or relationships with Microsoft are listed among assets that need authorization.
  - **Trademark footnote.** Use a footnote of the form "Microsoft, [additional marks in alphabetical order] are trademarks of the Microsoft group of companies."
  - **Further links:** the [Microsoft partner branding page](https://partner.microsoft.com/en-my/community/my-partner-hub/branding), a [partner-led marketing attestation form](https://aka.ms/partnerled-marketing-attestation), and the [trademark list (FY26Q1)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/mscle/documents/presentations/Trademark_List_FY26Q1.pdf).
- **Fluent 2 on product launch icons.** They represent Microsoft apps, must never replace the Microsoft logo, and must never be recoloured. System icons are MIT ([Fluent 2 iconography](https://fluent2.microsoft.design/iconography)).

### Inferences
- **Is a partner's marketing-site ecosystem diagram allowed?**
  - **Not explicitly.** The Learn license lists only architectural diagrams, training materials and documentation; marketing websites are not mentioned.
  - **Most defensible case:** a section that is genuinely an integration or architecture diagram, e.g. "How Business Central connects to your systems", with each official Dynamics 365 / Power Platform icon labelled. This matches the Do's ("illustrate how products work together", "name near the icon").
  - **Not allowed:**
    - using the Business Central icon or any Microsoft icon as a Verdana service icon;
    - a decorative logo wall;
    - recoloured or "navy-themed" versions;
    - Microsoft icons more prominent than Verdana's brand.
  - **Microsoft 365 app icons (Excel, Outlook, Teams, Microsoft 365, Copilot)** fall under the stricter trademark guidelines. Without a license, don't use them on the marketing site.
- **Recommended compliant approach, in order of preference:**
  1. **Default (safest, and the most premium-looking):** build the ecosystem diagram from text-label pills in Verdana's own typeface, in white or light gray, joined by hairline connectors.
     - Hub: "Microsoft Dynamics 365 Business Central".
     - Nodes: "Microsoft 365", "Microsoft Teams", "Microsoft Excel", "Microsoft Outlook", "Microsoft Power BI", "Microsoft Power Apps", "Microsoft Power Automate", "Copilot".
     - Use Phosphor icons only for the non-Microsoft nodes: e-commerce, banks, logistics and "your systems".
  2. **Optional:** add the official Business Central, Power BI, Power Apps and Power Automate icons from the Learn ZIPs to that diagram only. Rules:
     - unmodified, rendered as `<img>` so they can't be recoloured via `currentColor`;
     - all the same size, 32–48 px and never below 16 px;
     - product name label nearby in white or light gray;
     - title the section as an integration architecture;
     - keep Verdana's brand dominant;
     - Microsoft 365 apps stay as text.
  3. If Verdana wants Microsoft 365 app icons or stronger Microsoft branding, ask its Microsoft partner contact or business owner for permission, or a license via the partner-led marketing channel, first.
- **Do not use:**
  - Phosphor's or other libraries' redrawn Microsoft brand glyphs (altered marks used without a license);
  - third-party "Copilot logo" downloads;
  - the Microsoft logo;
  - the Fluent CDN brand icons (license restricted, see section 6).
- **Trademark footnote** for the site footer or legal page, following Microsoft's format. Check the exact marks against the trademark list before publishing:
  - English: *Microsoft, Copilot, Dynamics 365, Excel, Microsoft 365, Microsoft Teams, Outlook, Power Apps, Power Automate and Power BI are trademarks of the Microsoft group of companies.*
  - Swedish: *Microsoft, Copilot, Dynamics 365, Excel, Microsoft 365, Microsoft Teams, Outlook, Power Apps, Power Automate och Power BI är varumärken som tillhör Microsoft-koncernen.*
- **Partner signalling.** If Verdana holds a Microsoft partner designation, show only the official badge from partner channels, following the partner branding guidelines. Badges need authorization.

### Gaps
- The ZIP contents were not downloaded or inspected; downloading requires accepting the terms and was out of scope. So it is unknown whether the Microsoft 365 content-icon set includes a Microsoft 365 Copilot icon or the latest app-icon designs. That set is the "2024" package, last modified 2025-02-06.
- No Microsoft statement says directly whether a partner website's ecosystem diagram counts as an "architectural diagram". Confirm with Microsoft through the partner channel if official icons will be used.
- The Microsoft partner brand guidelines (badges) and the FY26Q1 trademark list were not reviewed in detail, for example whether "Business Central" or "Teams" is listed as its own mark.
- The general trademark-guidelines text came through a WebFetch summarizer rather than raw HTML. The site blocked direct fetching with a 403.

## 6. Is there an npm package or CDN that legitimately provides official Microsoft product icons, or must they be downloaded from Microsoft? (exact URLs)

### Takeaway
No npm package distributes Microsoft's official Dynamics 365, Power Platform or Microsoft 365 product icons for general use. The legitimate source is the Microsoft Learn ZIP downloads, which you self-host after accepting the terms.

The only Microsoft-hosted CDN for product icons is the Fluent UI brand icons on `res-1.cdn.office.net`. It is governed by the Microsoft Fabric Assets License Agreement, which limits use to applications that use or integrate with Microsoft APIs and services, and bans marketing-branding uses. It does not fit Verdana's marketing site.

### Cited Findings
- **Official download URLs.** HEAD requests only; nothing was downloaded. Checked 2026-10-11.

  | Set | Download URL | Size | Last-Modified | Page |
  |---|---|---|---|---|
  | Dynamics 365 icons, incl. Business Central | https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Dynamics-365-icons-scalable.zip | 180,095 bytes | 2026-02-05 | [Dynamics 365 icons](https://learn.microsoft.com/en-us/dynamics365/get-started/icons) |
  | Power Platform icons (Power BI, Power Apps, Power Automate, Copilot Studio…) | https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Power-Platform-icons-scalable.zip | 166,103 bytes | 2026-02-05 | [Power Platform icons](https://learn.microsoft.com/en-us/power-platform/guidance/icons) |
  | Microsoft 365 SVG icons | https://go.microsoft.com/fwlink/?linkid=869455, redirects to https://download.microsoft.com/download/2/F/3/2F346655-1F7E-4F5E-BE78-82DA3D507F3A/2024-microsoft-365-content-icons.zip | 712,812 bytes | 2025-02-06 | [Microsoft 365 architecture templates and icons](https://learn.microsoft.com/en-us/microsoft-365/solutions/architecture-icons-templates) |
  | Microsoft 365 Visio templates | https://go.microsoft.com/fwlink/?linkid=2056186, redirects to …/2024-microsoft-365-content-VisioTemplates.zip | 5,454,095 bytes | 2025-02-06 | same page |
  | Azure icons, for reference | https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V24.zip | not checked | not checked | [Azure icons](https://learn.microsoft.com/en-us/azure/architecture/icons/) |

- **Fluent UI docsite on Microsoft 365 product icons.** Fluent UI provides product icons for connecting an experience to other Microsoft 365 endpoints, in SVG and PNG at 16–96 px, and their use is subject to the assets license agreement. The CDN pattern given is `https://res-1.cdn.office.net/files/fabric-cdn-prod_20251008.001/assets/brand-icons/product/svg/word_48x1.svg` ([Fluent UI docs source, M365ProductIconsPage](https://api.github.com/repos/microsoft/fluentui/contents/apps/public-docsite/src/pages/Styles/M365ProductIconsPage/docs/web)).
- **The CDN is live.** For example, `.../fabric-cdn-prod_20230815.002/assets/brand-icons/product/svg/excel_48x1.svg` and `teams_48x1.svg` both return HTTP 200 as image/svg+xml (HEAD check, [example](https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/brand-icons/product/svg/excel_48x1.svg)).
- **Microsoft Fabric Assets License Agreement (Nov 2019).** https://aka.ms/fluentui-assets-license resolves to the [PDF](https://res-1.cdn.office.net/files/fabric/assets/microsoft_fabric_assets_license_agreement_nov_2019.pdf). Paraphrased:
  - **Scope.** A revocable license, accepted by downloading from the CDN. It is granted exclusively for (a) use with a Microsoft API inside an application, website or service built to access or interact with a Microsoft service, and (b) showing that such an application integrates with Microsoft products.
  - **What is covered.** "Fabric Assets" means the Segoe font, Microsoft Office icons and Microsoft Fabric icons.
  - **How app icons may be used.** Primarily to link to or launch an app. A non-clickable product lineup may show icons with the full product name. For a logo lineup, it says to write the full product name instead.
  - **Banned uses:**
    - branded elements in marketing communications;
    - representing your own offerings, even integrated ones;
    - outdated icons;
    - more prominence than your own product name;
    - merchandise;
    - implying affiliation or endorsement;
    - altering, animating, distorting or combining with other designs;
    - use as logos or in a sentence;
    - any use not covered by the agreement.
- **`@fluentui/react-file-type-icons` 8.18.2** (2026-10-01, MIT code) provides **file-type** icons (e.g. Word or Excel documents) served from Microsoft's CDN. These are not product icons ([npm registry](https://registry.npmjs.org/@fluentui/react-file-type-icons)).
- **`@fluentui/react-icons`** contains MIT **system** icons, not product icons ([npm registry](https://registry.npmjs.org/@fluentui/react-icons), [Fluent 2 iconography](https://fluent2.microsoft.design/iconography)).
- **Third-party sources are not Microsoft-issued.** Lobe Icons and Dashboard Icons offer Copilot logos ([Lobe Icons](https://lobehub.com/icons/copilot), [Dashboard Icons](https://dashboardicons.com/icons/external/microsoft-copilot)). Phosphor ships redrawn Microsoft brand glyphs ([Phosphor ssr index](https://unpkg.com/@phosphor-icons/react@2.1.10/dist/ssr/index.es.js)).

### Inferences
- If Verdana uses any official icons, download the relevant Learn ZIP once and accept the terms. Then:
  - commit only the needed SVGs, unmodified, to e.g. `public/brand/microsoft/`;
  - add a short README recording the source URL, download date and terms;
  - never hotlink;
  - render with `<img width height alt="Microsoft Power BI">`;
  - re-check the Learn pages before each redesign, since the sets were updated in Dec 2025 to Feb 2026.
- **Do not** hotlink or reuse the Fluent CDN brand icons on the marketing site. Verdana's website is not an "Application" under the Fabric license, and marketing-branding uses are expressly banned.
- Interesting side note: the Fabric license's own advice for logo lineups (write the product name) and the Microsoft 365 guidelines' neutral-label rule both support the text-label ecosystem diagram recommended in section 5.

### Gaps
- I found no Microsoft-issued download for a stand-alone Microsoft 365 Copilot app icon for partners. A third-party claim about Microsoft "Brand Central" was not verified.
- The Azure ZIP size and date were not checked (not needed).
