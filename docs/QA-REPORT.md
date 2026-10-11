# QA report

Date: 2026-10-11. Scope: the bilingual redesign. The M0 homepage checks are superseded and remain in Git history.

## Passed
- `npm run typecheck` and `npm run lint`: no errors.
- `npm run build` (Next.js 16.4): 52 static routes, including 44 pages, sitemap, robots, icons and security.txt.
- SEO audit of the production build, crawled without JavaScript (44 pages):
  - titles at most 59 characters, descriptions 136–155, one H1 per page, no skipped heading levels;
  - self-canonicals, reciprocal hreflang for every pair, valid JSON-LD;
  - Open Graph and Twitter images on every page;
  - no duplicate titles or descriptions, and 0 broken internal links across 45 targets.
  - The only flag is the deliberate `noindex` while `SITE_INDEXING` is unset.
- Header edge: pixel-row checks found no light or dark line under the header across 152 page tops, nine display scales (including 125 %, 150 %, 175 %, 225 % and 262.5 %) and both themes, on the dev server and the production build.
- Closing band: the heading's centre matches the screen centre at 1280, 1440 and 1920 px. The step trail sits near the right edge, each step on two lines without overflow; two columns at 1024 px and stacked on mobile. All three steps light up in view.
- Language switch: from the header switcher and the footer links, with real mouse clicks, the other language opens at the same section and depth before first paint, 8 of 8 cases, including the new Swedish lifecycle slug.
- Brand derivatives: scripts/brand-derivatives.mjs reproduces the favicon, icons, Organization logo and share image byte for byte.

## Limitations
- No full accessibility (WCAG) audit, cross-browser matrix, security audit or Core Web Vitals measurement on a deployed site. Checks ran in Microsoft Edge (Chromium) via Playwright.
- `npm audit` was not re-run in this pass. The M0 audit found high-severity advisories only in the development-only eslint-config-next chain.
- Contact delivery is untested end to end until a webhook exists.
