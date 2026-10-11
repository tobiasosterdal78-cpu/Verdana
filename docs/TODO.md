# Backlog

| State | Task | Acceptance |
| --- | --- | --- |
| DONE | Research and site structure | Report and notes in docs/reports and docs/research_notes |
| DONE | Bilingual site | 44 static pages with reciprocal hreflang and no broken internal links |
| DONE | Brand integration | Owner artwork unchanged; derivatives reproducible with scripts/brand-derivatives.mjs |
| DONE | Header, menus, closing band, language place-keeping | Verified in the browser at desktop, tablet and mobile widths |
| DONE | SEO pass | Production audit clean except the deliberate `noindex` |
| BLOCKED | Domain and hosting | Robin chooses the domain and host; `SITE_URL` set for the production build |
| BLOCKED | Contact delivery | A webhook receives test enquiries; `CONTACT_WEBHOOK_URL` (and token) set on the host |
| BLOCKED | Company facts | Legal name, VAT number and address supplied, then added to the footer, legal pages and Organization data |
| BLOCKED | Name and trademark check | Bolagsverket, PRV and EUIPO (classes 35 and 42) checked for "Verdana"; e-commerce act details confirmed |
| BLOCKED | Production launch | Robin's explicit approval; `SITE_INDEXING=on`; Search Console and Bing Webmaster Tools verified; sitemap submitted |
| NOT STARTED | Prices and dates recheck | Microsoft list prices and NAV lifecycle dates rechecked on the day of publication |
| NOT STARTED | Phase 2 content | Licences, partner choice, Power BI and AI pages from the research report's plan |
| NOT STARTED | Production hardening | `npm audit`, an accessibility pass and Core Web Vitals on the deployed site; consider `next/font` for font preloading |
| OPTIONAL | Cleanup | Remove the unused `@fontsource-variable/manrope` dependency and the unused `servicesMenu.featuredText` copy |
