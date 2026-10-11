# Progress

## Current phase
Redesign complete and verified locally; committed and pushed to https://github.com/Rolle161616/Verdana (private) on 2026-10-11. Not deployed. Search indexing is closed until launch.

## Completed
- Research: SEO keywords, Swedish ERP market, competitors, Business Central facts, technical SEO, design direction and icons (docs/reports/Verdana SEO and market research.md, notes in docs/research_notes/).
- Bilingual site: 22 pages per language (44 in the sitemap), English at `/`, Swedish at `/sv`, all statically generated.
- Brand: the owner's lockup, mark and wordmark used unchanged; icons and share image derived by scripts/brand-derivatives.mjs.
- Header: Verdana's own Services and Business Central menus, current-page markers, theme switch, language switcher, scroll progress bar. The light or dark line under the header at fractional display scales is fixed.
- Closing band rebuilt: centred sign-off with the V and two buttons, and a compact three-step trail near the right edge.
- Language switch keeps the reader's place on the other language's page.
- SEO pass: titles, descriptions and H1s tuned to the research, Swedish lifecycle slug `navision-end-of-life`, distinct cookie titles, Open Graph image on every page, `disambiguatingDescription` and `alternateName` in the structured data.
- Contact form with validation, spam traps and webhook delivery; the preview disclaimer was removed at Robin's request.
- Footer carries the organisation number 559602-6616.

## Next
Launch preparation, all requiring Robin's decisions (see TODO.md and DEPLOYMENT.md): domain and host, `SITE_URL` and `SITE_INDEXING=on`, the contact webhook, legal company details, the trademark check and Search Console and Bing verification.

## Validation
See QA-REPORT.md. Type check, lint and production build passed on 2026-10-11; the SEO audit of the production build found no issues apart from the deliberate `noindex`.
