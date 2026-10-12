# Backlog

| State | Task | Acceptance |
| --- | --- | --- |
| DONE | Research and site structure | Report and notes in docs/reports and docs/research_notes |
| DONE | Bilingual site | 44 static pages with reciprocal hreflang and no broken internal links |
| DONE | Brand integration | Owner artwork unchanged; derivatives reproducible with scripts/brand-derivatives.mjs |
| DONE | Header, menus, closing band, language place-keeping | Verified in the browser at desktop, tablet and mobile widths |
| DONE | SEO pass | Production audit clean except the deliberate `noindex` |
| BLOCKED | Domain and hosting | Robin chooses the domain and host; `SITE_URL` set for the production build |
| BLOCKED | Contact delivery | Robin registers the Entra application (docs/DEPLOYMENT.md, Contact email); `MS_TENANT_ID`, `MS_CLIENT_ID` and `MS_CLIENT_SECRET` set on the host; a test enquiry arrives at hello@vardena.se |
| DONE | Contact address | hello@vardena.se on the contact page, in the footer and in the Organization data; every enquiry is addressed to it |
| OPTIONAL | Phone number | Robin supplies a number if one should be shown |
| BLOCKED | Logo for the new name | Robin supplies a lockup and wordmark that spell Vardena; `BrandLockup`, `BrandWordmark` and the share image go back to artwork |
| BLOCKED | Company facts | Legal name, VAT number and address supplied, then added to the footer, legal pages and Organization data |
| BLOCKED | Name and trademark check | First screening of "Vardena" done 2026-10-12 (docs/NAME-CHECK.md): no identical company name or mark in classes 35 and 42, but ARDENA (EUTM, classes 9 and 42) and GARDENA are close. Remaining: Robin files the change of name with Bolagsverket (the company is still Grundbulten 163259 AB), an attorney weighs the similar marks, e-commerce act details confirmed |
| BLOCKED | Production launch | Robin's explicit approval; `SITE_INDEXING=on`; Search Console and Bing Webmaster Tools verified; sitemap submitted |
| NOT STARTED | Prices and dates recheck | Microsoft list prices and NAV lifecycle dates rechecked on the day of publication |
| NOT STARTED | Phase 2 content | Licences, partner choice, Power BI and AI pages from the research report's plan |
| NOT STARTED | Production hardening | `npm audit`, an accessibility pass and Core Web Vitals on the deployed site; consider `next/font` for font preloading |
| OPTIONAL | Cleanup | Remove the unused `@fontsource-variable/manrope` dependency and the unused `servicesMenu.featuredText` copy |
