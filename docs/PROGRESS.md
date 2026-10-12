# Progress

## Current phase
Redesign, the Vardena rename, the five home areas, the contact paths and the contact email are complete and verified locally, and pushed to https://github.com/tobiasosterdal78-cpu/Verdana (private) on 2026-10-12. Not deployed. Search indexing is closed until launch.

## Completed
- Research: SEO keywords, Swedish ERP market, competitors, Business Central facts, technical SEO, design direction and icons (docs/reports/Verdana SEO and market research.md, notes in docs/research_notes/).
- Bilingual site: 22 pages per language (44 in the sitemap), English at `/`, Swedish at `/sv`, all statically generated.
- Brand: the owner's V used unchanged; icons and share image derived from it by scripts/brand-derivatives.mjs.
- Header: Vardena's own Services and Business Central menus, current-page markers, theme switch, language switcher, scroll progress bar. The light or dark line under the header at fractional display scales is fixed.
- Closing band rebuilt: centred sign-off with the V and two buttons, and a compact three-step trail near the right edge.
- Language switch keeps the reader's place on the other language's page.
- SEO pass: titles, descriptions and H1s tuned to the research, Swedish lifecycle slug `navision-end-of-life`, distinct cookie titles, Open Graph image on every page, `disambiguatingDescription` and `alternateName` in the structured data.
- Contact form with validation, spam traps and webhook delivery; the preview disclaimer was removed at Robin's request.
- Footer carries the organisation number 559602-6616.
- Enquiries go to hello@vardena.se (2026-10-12): email delivery through Microsoft Graph, a `mailto:` fallback when it cannot send, and the address on the contact page and in the footer.
- Renamed to Vardena (2026-10-12) across copy, metadata, structured data and docs. The header shows the V beside the name in type, the footer word is set in type, and the share image shows the V alone, because the supplied lockup and wordmark spell Verdana.
- Home page refocused (2026-10-12): five areas with their own illustrations (time and projects, warehouse, logistics and e-commerce, reporting with Power BI, application management and support); the Dynamics NAV section is now a compact notice further down; the integrations grid lost the three tiles the areas replaced.
- Contact paths (2026-10-11): the contact button stays in the header at every width from 350px (short label on phones), and prompts lead to the contact page from the middle of long pages, the FAQ sections, the services hub hero, the legal pages and the 404 page.

## Next
Launch preparation, all requiring Robin's decisions (see TODO.md and DEPLOYMENT.md): domain and host, `SITE_URL` and `SITE_INDEXING=on`, the Entra application for the contact email, legal company details, the trademark check and Search Console and Bing verification.

## Validation
See QA-REPORT.md. Type check, lint and production build passed on 2026-10-11; the SEO audit of the production build found no issues apart from the deliberate `noindex`.
