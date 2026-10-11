# Technical SEO and AI-search visibility for Verdana (Next.js 16.4, Swedish B2B), research notes as of 2026-10-11

*Scope: technical SEO, structured data, AI-search visibility, local and entity signals, and the exact Next.js 16.4 APIs. Dates on Google pages are the "Last updated" stamps seen on 2026-10-11. **(search summary)** marks a fact taken from a search-tool summary rather than a full page fetch. **(blog/vendor)** marks a non-primary source. Local Next.js doc paths are relative to `node_modules/next/dist/docs/` in the Verdana repo. The installed version is `next@16.4.0` ([package.json](../../../node_modules/next/package.json)).*

---

## 1. Structured data in 2026: which schema.org types still matter, what they require, and what counts as misleading

### Takeaway
Four Google-supported features are relevant to Verdana:
- **Organization**: logo and knowledge-panel details. No properties are required.
- **WebSite**: drives the site name. `name` and `url` are required, and the markup goes on the home page only.
- **BreadcrumbList**: the rich result is now desktop-only.
- **Article/BlogPosting**: no properties are required.

Several types are no longer an option:
- FAQ rich results stopped appearing on **2026-05-07**, and Google removed the documentation on **2026-06-15**.
- HowTo documentation was removed on 2023-09-14.
- LocalBusiness requires a physical `address`.
- schema.org has deprecated ProfessionalService.
- Service has no Google rich result.
- Star ratings for reviews of your own business are ineligible because Google treats them as "self-serving".

### Cited Findings
**What Google still supports (and what it dropped)**
- The Search Gallery lists 25 features: Article, Breadcrumb, Carousel, Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization, Product, Profile page, Q&A, Recipe, Review snippet, Software app, Speakable, Subscription and paywalled content, Vacation rental, and Video. FAQ, HowTo, Sitelinks search box, Claim Review, Estimated salary, Learning video, Special announcement, Vehicle listing and Practice problems are absent. Page last updated 2026-06-15. — [Google Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- Deprecation timeline from Google's documentation changelog:
  - **2025-06-12**: retirement banners added for book actions, course info, estimated salary, ClaimReview, learning video, special announcement and vehicle listing.
  - **2025-09-09**: documentation removed for course info, estimated salary, learning video, special announcement and vehicle listing.
  - **2025-11-05**: practice problem markup deprecated, Dataset limited to Dataset Search, and the Book actions banner removed.
  - **2026-01-06**: practice problem documentation removed.
  - **2026-05-08**: FAQ rich result deprecation notice added, effective 2026-05-07.
  - **2026-06-15**: FAQ documentation removed because the feature no longer appears in Search.
  - — [Google Search Central documentation updates](https://developers.google.com/search/updates)
- FAQ history: on 2023-09-14 the FAQ docs were changed to say the rich result appears only for well-known, authoritative government and health sites. The feature was deprecated in May 2026. — [Google changelog, which is what the old FAQ URL now serves](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- HowTo: the 2023-09-14 changelog entry removed the How-to structured data documentation because the rich result is no longer shown. — [Google changelog, served at the old HowTo URL](https://developers.google.com/search/docs/appearance/structured-data/how-to)
- Breadcrumbs:
  - The 2025-01-22 changelog entry documents breadcrumbs as desktop-only. — [Google updates](https://developers.google.com/search/updates)
  - The doc says the feature is available on desktop in all regions and languages. — [Breadcrumb doc, updated 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

**Organization** ([Organization doc, updated 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/organization))
- Purpose: the markup helps Google understand administrative details and tell the organization apart from others. Some properties affect which logo appears in Search and in the knowledge panel.
- **No required properties.** Add as many relevant ones as apply.
- Recommended properties: `name`, `alternateName`, `legalName`, `url`, `logo`, `description`, `sameAs` (multiple URLs), `email`, `telephone`, `contactPoint`, `address` (PostalAddress; multiple allowed; sub-properties addressCountry, addressLocality, addressRegion, postalCode, streetAddress), `foundingDate`, `numberOfEmployees`, `vatID`, `taxID`, `iso6523Code`, `naics`, `duns`, `leiCode` and `globalLocationNumber`.
- Property notes from Google:
  - `vatID` is a trust signal that users can check in public VAT registries.
  - `taxID` must match the country in the address.
  - For DUNS, GLN and LEI, Google prefers `iso6523Code` with the `0060:`, `0088:` or `0199:` prefix.
- `name` should match the `name`/`alternateName` used for the site name.
- Logo requirements: at least 112×112 px, a crawlable and indexable URL, a format Google Images supports, and it should look right on a white background.
- Placement: the home page or one page that describes the organization, such as an about page. It doesn't need to be on every page.
- Use the most specific subtype. Local businesses should use the most specific LocalBusiness subtype and meet the LocalBusiness requirements.

**WebSite (site name)** ([Site names doc, updated 2025-12-10](https://developers.google.com/search/docs/appearance/site-names))
- Required: `name` and `url` (the canonical home page URL). Recommended: `alternateName`, which can list several names in order of preference.
- The markup must be on the home page at the domain or subdomain root. Subdirectory home pages aren't supported. Only one site name is supported per site. If a `WebSite` node already exists, nest the site-name properties in it.
- Validate with the Schema Markup Validator. The Rich Results Test doesn't support site names.

**BreadcrumbList**
- Requires at least two `ListItem`s. `item` is required except on the last crumb, which falls back to the page URL. Each item has `name` and `position`.
- Google recommends breadcrumbs that follow a typical user path rather than mirroring the URL structure.
- — [Breadcrumb doc](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

**Article / BlogPosting** ([Article doc, updated 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/article))
- Supported types are Article, NewsArticle and BlogPosting. No properties are required.
- Recommended: `author`, `author.name`, `author.url`, `datePublished`, `dateModified`, `headline` and `image`.
- Author rules:
  - Use `Person` for people and `Organization` for organizations.
  - Give each author a separate `author` entry.
  - Add `url` or `sameAs` to help Google identify the author.
  - Put only the name in `author.name`.
- Images should be at least 50K pixels (width × height), in 16×9, 4×3 and 1×1 ratios.

**LocalBusiness / ProfessionalService / Service**
- LocalBusiness requires two properties: `address` (PostalAddress, the physical location of the business) and `name`. — [Local business doc, updated 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/local-business)
  - Recommended: `geo` (at least 5 decimal places), `telephone`, `url`, `openingHoursSpecification`, `priceRange` (under 100 characters) and `department`.
  - `aggregateRating` and `review` are recommended only for sites that capture reviews about *other* local businesses.
  - The page doesn't mention service-area businesses. `additionalType` isn't supported.
- schema.org says the general ProfessionalService type for local businesses was deprecated because it was confused with Service. It sits under LocalBusiness. — [schema.org/ProfessionalService](https://schema.org/ProfessionalService)
- schema.org `Service` (Thing > Intangible > Service) supports `provider`, `serviceType`, `areaServed`, `audience`, `offers`, `hasOfferCatalog`, `category`, `brand`, `termsOfService`, `availableChannel` and `providerMobility`. — [schema.org/Service](https://schema.org/Service)
- The Search Gallery has no Service feature. — [Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

**Reviews and ratings** ([Review snippet doc, updated 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/review-snippet))
- Self-serving reviews: if the reviewed entity controls the reviews about itself, its pages with LocalBusiness or Organization markup are ineligible for star snippets. This includes reviews embedded through third-party widgets such as Google or Facebook reviews.
- Organization and LocalBusiness reviews qualify only on sites that review *other* organizations.
- Fake or undisclosed incentivized reviews are not allowed. This guideline was added on 2026-07-24 ([updates](https://developers.google.com/search/updates)).
- Required properties:
  - Review: `author`, `itemReviewed`, `reviewRating.ratingValue`.
  - AggregateRating: `ratingValue` plus `ratingCount` or `reviewCount`.

**What counts as misleading / policy limits**
- From the [General structured data guidelines, updated 2026-07-10](https://developers.google.com/search/docs/appearance/structured-data/sd-policies):
  - JSON-LD is the recommended format.
  - Don't block marked-up pages with robots.txt or `noindex`.
  - Don't mark up content that readers can't see.
  - Don't mark up irrelevant or misleading content.
  - Don't impersonate anyone or misrepresent ownership or purpose.
  - Markup must accurately represent the page.
  - Use the most specific types.
  - Images must be crawlable and indexable.
  - Use `@id` to link items.
  - A structured-data manual action removes rich-result eligibility but doesn't change web ranking.
  - Valid markup never guarantees a rich result.
- Google says structured data must match the visible page text. — [AI features and your website, updated 2025-12-10](https://developers.google.com/search/docs/appearance/ai-features)
- Google says structured data isn't required for generative AI search and there is no special AI schema, though it still matters for rich results. — [Google AI optimization guide, updated 2026-07-10](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Microsoft Advertising (Oct 2025) describes schema/JSON-LD as helping search engines and AI systems understand content. It advises pairing schema with clear headings and modular layouts rather than relying on markup alone. **(search summary)** — [Microsoft Advertising blog](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)

**Swedish identifiers usable in Organization markup**
- schema.org Organization has `legalName`, `alternateName`, `disambiguatingDescription`, `knowsAbout`, `areaServed`, `iso6523Code`, `vatID`, `taxID`, `founder`, `foundingDate`, `makesOffer`, `hasOfferCatalog`, `memberOf` and `award`. — [schema.org/Organization](https://schema.org/Organization)
- ISO 6523 ICD **0007** is the Swedish organisationsnummer (SE:ORGNR, 10 digits with a Luhn check digit), so the format is `0007:5560000000`. The Swedish VAT number is "SE" + the 10-digit organisationsnummer + "01". **(search summary)** — [Peppol ICD code list](https://docs.peppol.eu/pracc/codelist/ICD); [Tickstar (vendor)](https://www.tickstar.com/article/peppol-bis-iso6523-codes)

### Inferences
- **Recommended JSON-LD set for Verdana:**
  - On the **home page**: one `@graph` with `WebSite` and `Organization`, linked by `@id`.
  - On **articles**: `BlogPosting` with a real `Person` author linked to an author page.
  - On **deep pages**: `BreadcrumbList`.
  - On **service pages**: `Service` with `provider: {"@id": ".../#organization"}`, `serviceType`, `areaServed: Sverige` and `audience: BusinessAudience`. This only helps machines understand the page. There is no Google rich result, so keep it strictly consistent with the visible copy.
- **Organization fields to fill:**
  - `name: "Verdana"`, plus `legalName` (the registered AB name, once confirmed).
  - `alternateName` (see section 7).
  - `url`, a square `logo` PNG of at least 112 px, and `description`.
  - A short `disambiguatingDescription` that states the category, e.g. "Svensk konsultfirma inom Microsoft Dynamics 365 Business Central".
  - `knowsAbout` (Business Central, ERP, integrations), `areaServed` (Sweden), and `email`/`telephone` only if they are real and published on the site.
  - `sameAs` pointing only to profiles that exist and that Verdana controls or that list it: LinkedIn company page, allabolag.se company page, hitta.se profile, later the Microsoft partner-directory profile.
  - `vatID` (`SE…01`) and `iso6523Code` (`0007:<orgnr>`) once the company is registered and those numbers appear on the site.
- **Omit:**
  - `address` until there is a real, publishable address. Google lists Organization `address` sub-properties without marking any as required, so a locality-and-country-only PostalAddress looks permissible for Organization. It wouldn't satisfy LocalBusiness, which needs a physical location.
  - LocalBusiness and ProfessionalService entirely, since there is no address and ProfessionalService is deprecated.
  - `aggregateRating` and `review`, since these would be self-serving and ineligible, and Verdana has no reviews.
- **FAQ:** keep visible Q&A content where it helps users, Bing/Copilot and other AI engines. Don't expect a Google rich result from `FAQPage` markup. It is optional and only worth adding if it exactly mirrors visible text.
- **Misleading in Verdana's situation** (based on the policies above and Google's "fabricating creator profiles" warning in section 3):
  - Marking up or claiming "Microsoft Partner", "Solutions Partner", certifications, awards, customer logos, testimonials or ratings that can't be verified.
  - Using a virtual-office address.
  - Inventing staff or author personas.
  - Marking up content that is hidden in the UI.

### Gaps
- The FAQ docs were removed, and no source found says whether leftover `FAQPage` markup is harmful or should be deleted.
- Google doesn't document whether it uses `Service`, `knowsAbout`, `areaServed` or `disambiguatingDescription` to understand entities.
- Google doesn't say whether Organization markup with only locality and country helps or is ignored.

---

## 2. Google technical fundamentals: titles, meta descriptions, site names, favicons, canonicals, sitemaps, robots, hreflang, mobile-first, JS rendering, images, internal links, URLs (å/ä/ö)

### Takeaway
Google sets no character limits for titles or meta descriptions. It truncates both to the device width and often rewrites them, so write a distinct, descriptive, briefly branded title per page.

- **Site name and favicon:** come from the home page. They need WebSite markup, a consistent name, and a square favicon larger than 48×48 in a supported raster format. SVG is not on Google's favicon format list.
- **Canonicals:** absolute `rel=canonical` in `<head>`, self-referencing.
- **Sitemaps:** Google uses `lastmod` only if it is verifiably accurate, and ignores `priority`/`changefreq`.
- **hreflang:** needs reciprocal links and becomes necessary once English launches.
- **URLs:** Google recommends percent-encoded UTF-8 for non-ASCII characters and allows transliteration but doesn't require it. ASCII slugs (å/ä→a, ö→o) are the low-risk choice.

### Cited Findings
**Title links** ([Title link doc, updated 2025-12-10](https://developers.google.com/search/docs/appearance/title-link))
- Every page needs a `<title>`. Keep it descriptive and concise, avoid vague titles like "Home", and avoid keyword stuffing and boilerplate.
- Brand titles concisely by adding the site name at the start or end with a delimiter such as a hyphen, colon or pipe.
- Make the main title clear and prominent, e.g. the first visible `<h1>`.
- Use the same language and script as the page content.
- There is **no length limit**. Title links are truncated to fit the device width.
- Google builds title links from several sources: the `<title>`, the main visual title, headings, `og:title`, other prominent text, anchor text, text in links pointing to the page, and `WebSite` structured data.
- Common reasons Google rewrites titles:
  - half-empty titles
  - obsolete dates
  - inaccurate titles
  - micro-boilerplate
  - no clear main title
  - a language or script mismatch

  Google may also drop a site name that repeats the one already shown in the result.

**Meta descriptions / snippets** ([Snippet doc, updated 2026-04-20](https://developers.google.com/search/docs/appearance/snippet))
- Google builds snippets mainly from page content. It uses the meta description when that describes the page better.
- There is no length limit. Snippets are truncated to the device width.
- Write a unique, descriptive description per page with relevant details. Keyword lists rarely get shown.
- Controls: `nosnippet`, `max-snippet`, `data-nosnippet`. The "read more" deep links section was added on 2026-04-20.

**Site names** ([Site names doc](https://developers.google.com/search/docs/appearance/site-names))
- Google generates site names from the home page and from references across the web.
- Sources it considers: `WebSite` structured data, `og:site_name`, `<title>`, headings, and other home-page text. All of these should use the same name.
- Choose a unique, concise, non-generic name.
- If your preferred name is already used by a global site, add `alternateName`s.
- Escalation if the name still isn't picked up:
  1. Add `alternateName`.
  2. Add the lowercase domain as an alternate.
  3. As a last resort, use the domain as `name`.
- Recrawling can take days to weeks.

**Favicons** ([Favicon doc, updated 2026-08-28](https://developers.google.com/search/docs/appearance/favicon-in-search))
- Add a `<link rel="icon">` (or `apple-touch-icon` etc.) on the home page.
- Size and shape: square, at least 8×8, with **larger than 48×48 recommended**.
- Formats: BMP, GIF, ICO, PNG, JPEG, PPM, TIFF. SVG isn't listed.
- Googlebot-Image must be able to crawl the favicon and Googlebot the home page.
- One favicon per hostname. Keep the URL stable. Changes take days to weeks to show.

**Canonicalization** ([Canonical doc, updated 2026-07-10](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls))
- Signals by strength:
  - Redirects and `rel=canonical` (a link element or HTTP header) are strong.
  - Sitemap inclusion is weak.
- Use absolute URLs in `rel=canonical` and put a self-referencing canonical on the canonical page.
- The canonical link element is accepted **only in `<head>`**.
- Don't use robots.txt or `noindex` to pick a canonical. Use only one canonical per page.
- Internal links should point to the canonical URL. Prefer HTTPS.
- With hreflang, the canonical should be a same-language page.

**Sitemaps** ([Build a sitemap, updated 2026-07-08](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap))
- Limit: 50 MB uncompressed or 50,000 URLs per sitemap.
- Google uses `<lastmod>` only if it is consistently and verifiably accurate. It should reflect the last *significant* update. A copyright-year change doesn't count.
- Google **ignores** `<priority>` and `<changefreq>`.
- Use absolute, canonical URLs, UTF-8 encoding and entity escaping.
- Submit via Search Console, the API, or a `Sitemap:` line in robots.txt.

**robots.txt and robots meta** ([Robots meta tag doc, updated 2026-03-24](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag))
- Google honors robots meta tags in `<body>` as well as `<head>`. The 2026-03-24 changelog notes how robots meta tags outside the head are processed ([updates](https://developers.google.com/search/updates)).
- `nosnippet` and `max-snippet` also apply to AI Overviews and AI Mode.
- `data-nosnippet` is valid only on `span`, `div` and `section`. Set it at render time, not by JavaScript afterward.
- `X-Robots-Tag` HTTP headers work for non-HTML files.
- If robots.txt blocks a URL, Google never sees its `noindex`.
- A disallowed URL can still be indexed without its content. — [Canonical doc](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

**hreflang** ([Localized versions doc, updated 2026-09-21](https://developers.google.com/search/docs/specialty/international/localized-versions))
- Three equivalent methods: HTML `<link>`, HTTP headers, or a sitemap. Using more than one adds nothing.
- Each version must list itself and all the others. Return links are required, and tags without them are ignored.
- URLs must be fully qualified.
- Codes are an ISO 639-1 language with an optional ISO 3166-1 alpha-2 region. A region alone is invalid.
- `x-default` is the fallback.
- Google doesn't use hreflang or the HTML `lang` attribute to *detect* a page's language.

**Mobile-first** ([Mobile-first indexing, updated 2025-12-10](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing))
- Google indexes and ranks the smartphone-crawled version of a page.
- Mobile and desktop should match on primary content, structured data, titles and descriptions, robots meta, and image alt text.
- Primary content shouldn't require a swipe, click or typing to load.

**JavaScript rendering and fetch limits**
- From [JavaScript SEO basics, updated 2026-03-04](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics):
  - Google crawls, renders and indexes in phases, and queues pages that return 200 for rendering.
  - Google recommends SSR or pre-rendering and notes that not all bots can run JavaScript.
  - Links must be `<a href>`.
  - A canonical set by JavaScript should match the one in the HTML, which is the preferred place for it.
  - Don't rely on JavaScript to remove `noindex`.
  - Use the History API, not URL fragments.
- Changelog notes:
  - 2025-12-18: non-200 pages may not be sent to rendering.
  - 2025-12-17: JavaScript canonicalization best practices added.
  - 2025-12-15: `noindex` behavior on JavaScript pages clarified.
  - — [updates](https://developers.google.com/search/updates)
- Googlebot processes the first **2 MB** of a supported file. The limit is measured on uncompressed data, and each CSS and JS resource is fetched separately under the same limit. PDFs get 64 MB. — [Googlebot doc, updated 2026-02-03](https://developers.google.com/search/docs/crawling-indexing/googlebot)

**Images** ([Image SEO, updated 2026-03-02](https://developers.google.com/search/docs/appearance/google-images))
- Use `<img>`. CSS background images aren't indexed.
- With `srcset` or `<picture>`, keep an `img` fallback with `src`.
- Supported formats: BMP, GIF, JPEG, PNG, WebP, SVG, AVIF.
- Use descriptive filenames, translated for localized images.
- Write contextual alt text without keyword stuffing.
- Place images near relevant text and use one consistent URL per image.
- Name a preferred image with schema.org `primaryImageOfPage`/`image` or with `og:image`. Avoid logos, text-heavy images and extreme aspect ratios as preferred images.

**Internal links** ([Link best practices, updated 2025-12-10](https://developers.google.com/search/docs/crawling-indexing/links-crawlable))
- Google crawls only `<a>` elements with a real `href`.
- Anchor text should be descriptive, concise and relevant. Avoid "Click here", "Read more" and keyword stuffing.
- Every page you care about should be linked from at least one other page.
- Use `rel` `nofollow`/`sponsored`/`ugc` where appropriate.

**URL structure, including non-ASCII characters** ([URL structure doc, updated 2025-12-10](https://developers.google.com/search/docs/crawling-indexing/url-structure); exact wording from the [Markdown version](https://developers.google.com/search/docs/crawling-indexing/url-structure.md.txt))
- Use readable words in the audience's language, plus transliterated words where applicable.
- Google supports URLs as defined by IETF STD 66. Reserved characters must be percent-encoded, and non-ASCII characters in `href`s should be percent-encoded.
- Google's own example: `https://example.com/gem%C3%BCse` is recommended and `https://example.com/gemüse` is not. There is no Swedish example.
- Use hyphens, not underscores. URLs are case-sensitive.
- Drop parameters that don't change content. Don't use fragments to change content.
- For multi-regional sites, use a ccTLD or a gTLD with a subdirectory (e.g. `example.com/de/`).

### Inferences
- **Titles:**
  - Pattern: `<specific topic> | Verdana`, e.g. "Business Central-implementering | Verdana".
  - The home title should contain the brand plus the category: "Verdana – Business Central-konsulter för svenska företag". The current home title "Verdana — Affärssystem med riktning" ([layout.tsx](../../../src/app/layout.tsx)) has no category term and no Business Central term.
  - Avoid "Microsoft-partner" wording until partner status is verified.
  - Keep the `<title>` and visible `<h1>` closely aligned to reduce rewrites.
- **Descriptions:** write one human description per page, roughly 120–160 characters as a practical display heuristic (Google sets no limit). Don't reuse the layout description on every page.
- **URLs:**
  - Use lowercase ASCII slugs with hyphens: `/tjanster/business-central-implementering`, `/om-oss`, `/kontakt`, `/insikter/<slug>`.
  - Transliterating å/ä/ö to a/a/o is allowed ("transliterated words") and avoids percent-encoded URLs when links are shared, pasted or logged.
  - The alternative of native Swedish characters, percent-encoded in `href`s, is also valid per Google. Choose one approach and never mix forms of the same word.
- **Structure:** keep the URL structure flat and stable. Pick one host (`https://` + apex or `www`) and 301 the other. Keep Next's default no-trailing-slash behavior consistent with canonicals and the sitemap.
- **Sitemap:** list only canonical, indexable 200 URLs, with `lastModified` taken from real content-change dates (not build time). Omit `changeFrequency` and `priority`.
- **Staging protection:** robots.txt `Disallow` doesn't stop indexing of linked URLs and hides `noindex` from Google. Protect staging or preview deployments with authentication or a `noindex` header and leave them crawlable. Production must ship with `index, follow`. The current layout sets `robots: { index: false, follow: false }`, which is a launch blocker ([layout.tsx](../../../src/app/layout.tsx)).
- **Favicon:** ship a square PNG/ICO larger than 48 px, e.g. a 48×48 multi-size `favicon.ico`, a 192×192 or 512×512 `icon.png` and a 180×180 `apple-icon.png`. Don't rely on SVG alone. The current icon is a 1254×1254 PNG of 2.2 MB, which is valid for Google but needlessly heavy for every visitor.
- **hreflang (English launch):**
  - Keep Swedish URLs unchanged at the root and add English under `/en/`, so no Swedish redirects are needed.
  - Annotate each pair with `sv-SE` (or `sv`) and `en`, both self-referencing, plus `x-default` pointing to the Swedish root or a language chooser. Each language page carries a canonical to itself.
  - `sv` alone is sufficient unless separate Finnish-Swedish content is planned. `sv-SE` is equally valid.

### Gaps
- Google publishes no Swedish-specific transliteration guidance.
- Google doesn't confirm that it treats percent-encoded and transliterated slugs identically for ranking. No evidence found either way.
- Bing's official Webmaster Guidelines page couldn't be fetched because it is rendered client-side, so Bing's equivalent technical rules aren't quoted here. See section 4 for the Bing blog sources.

---

## 3. Helpful content, E-E-A-T and "who/how/why" for a new company without references

### Takeaway
Google's people-first guidance (updated 2026-10-05) asks three things of every page:
- Make clear **who** made the content, with bylines and author information.
- Explain **how** it was made, including disclosure of AI use where readers would wonder.
- Show **why** it exists: to help people, not to attract search visits.

Trust is the most important part of E-E-A-T, and fabricated creator profiles are a named low-quality signal. Without references, the strongest signals are:
- verifiable company identity (legal name, organisationsnummer, VAT)
- real, named people with checkable credentials such as Microsoft Learn certifications and LinkedIn profiles
- first-hand, non-commodity Business Central content
- transparent process and pricing pages
- clear contact details

### Cited Findings
- From [Creating helpful content, updated 2026-10-05](https://developers.google.com/search/docs/fundamentals/creating-helpful-content):
  - The self-assessment covers original analysis, depth, not rewriting others, accurate headings, no easily verified errors, and trust built through clear sourcing, evidence of expertise, and information about the author and publisher.
  - **Who:** show bylines where readers expect them, linked to author information. Google names fabricating creator profiles (AI headshots, invented names, false credentials) as deception.
  - **How:** explain how content was produced, and disclose automation or AI use where readers would reasonably wonder.
  - **Why:** the most important question. Content made mainly to attract search visits isn't what Google rewards.
  - E-E-A-T isn't a specific ranking factor, and trust matters most. YMYL topics such as financial stability get extra weight.
  - Warning signs:
    - mass automation
    - summarizing without added value
    - chasing word counts
    - entering niches without expertise
    - changing dates or content just to look fresh
- From the [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide):
  - Write **non-commodity** content: expert or first-hand takes that go beyond common knowledge. Generic tip lists add little.
  - Mass-producing pages for query variations violates the scaled content abuse policy.
  - Apply a satisfaction test.
- Changelog notes ([updates](https://developers.google.com/search/updates)):
  - 2026-05-15: spam policies also apply to generative AI responses.
  - 2026-10-01: the generative AI content guidance was updated to match the Search Quality Rater Guidelines.
- `vatID` is a trust signal users can check in public VAT registries. — [Organization doc](https://developers.google.com/search/docs/appearance/structured-data/organization)
- Swedish law (lag 2002:562 om elektronisk handel, 8 §) requires a provider of information-society services to give its **name, address in the country of establishment, and email address**. It must also give organisationsnummer and VAT number where applicable. The latest amendment is SFS 2025:989. **(search summary)** — [Riksdagen: SFS 2002:562](https://data.riksdagen.se/dokument/sfs-2002-562.html)
- Google crawls only real `<a href>` links, and every important page should be linked from another page, which applies to author and about pages too. — [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

### Inferences
Concrete on-page signals, all to be true and verifiable:

- **Om oss (about):**
  - Founders' real names, photos and roles.
  - Years and type of experience with NAV and Business Central, and industries served.
  - Links to each person's LinkedIn and to their Microsoft Learn transcript or certification pages, e.g. a Business Central functional consultant certification if held.
  - The company story and why it exists.
  - What Verdana does *not* do.
  - State plainly what it doesn't yet have, rather than implying partner status or references.
- **Company facts block** (footer and a "Företagsuppgifter" section):
  - Registered legal name, organisationsnummer, VAT number, registered seat (kommun), and F-skatt status if applicable.
  - Email, phone and a contact form.
  - These match the Organization JSON-LD and directory listings.
- **Kontakt:** response time, service area ("hela Sverige; på plats och på distans"), and who answers.
- **Author pages** for each consultant who writes. Articles get bylines, `datePublished`/`dateModified` (changed only on real edits), and BlogPosting markup with `author.url` pointing to the author page.
- **Editorial and AI policy page** ("Så skriver vi"): who writes and reviews, how sources are cited, and whether and how AI tools are used, as the "How" guidance suggests.
- **Proof without references:**
  - Detailed process pages (implementation phases, typical timelines, roles, deliverables).
  - Anonymized or illustrative worked examples, clearly labeled as such.
  - Screenshots or how-tos from real Business Central work.
  - Transparent pricing models or price ranges.
  - Publicly verifiable credentials only.
- **Avoid:** stock "team" photos, invented testimonials, undisclosed AI-written articles at scale, and claims like "ledande" or "certifierad partner" that can't be verified.
- **Legal compliance flag:** the e-handelslagen address requirement may conflict with not publishing a street address. This is a legal question outside SEO scope, but publishing the registered business address (or the address used in the official registration) would also align the site with the trust signals above.

### Gaps
- Whether a B2B marketing site counts as an "information-society service" under 2002:562, and so must publish a geographic address, hasn't been verified. It needs a legal check.
- No Google source quantifies how much author markup or about pages influence rankings. Google explicitly says E-E-A-T isn't a single ranking factor.

---

## 4. AI search: Google AI Overviews/AI Mode, Bing/Copilot, ChatGPT search, Perplexity, Claude; crawlers, llms.txt and content that gets cited

### Takeaway
**Google:** AI Overviews and AI Mode have no extra requirements. A page must be indexed and eligible for a snippet, and the property must remain included under **Search Console → Settings → "Search generative AI"**. That control rolled out worldwide on **2026-08-31**. Google-Extended affects Gemini training and grounding only, not Search, and Google Search ignores llms.txt.

**Other engines:** each separates search crawling from training:
- OpenAI: OAI-SearchBot (search) vs GPTBot (training).
- Perplexity: PerplexityBot (search).
- Anthropic: Claude-SearchBot (search) vs ClaudeBot (training).
- Microsoft: Copilot grounds on Bing's index, controlled by NOCACHE/NOARCHIVE and `data-nosnippet`, with IndexNow for freshness.

**Content patterns:** Google and Microsoft favor non-commodity, clearly structured, verifiable content (descriptive headings, self-contained answers, lists and tables, sourced facts, current dates) over AEO/GEO tricks.

### Cited Findings
**Google**
- From [AI features and your website, updated 2025-12-10](https://developers.google.com/search/docs/appearance/ai-features):
  - AI Overviews and AI Mode have no extra requirements or special optimizations.
  - The page must be indexed and snippet-eligible.
  - Best practices: allow crawling (robots.txt and CDN), use internal links, keep important content in text, add supporting images and video, make structured data match the visible text, and keep Business Profile current.
  - Limit content with `nosnippet`, `data-nosnippet`, `max-snippet` or `noindex`. Google-Extended limits use in other Google AI systems.
  - AI Overviews and AI Mode traffic is counted in the Performance report under "Web".
- From the [AI optimization guide, updated 2026-07-10](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) ([Markdown version](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide.md.txt)):
  - Beyond the technical requirements, a site must be *included* in generative AI features in Search Console to be eligible.
  - Myths it rejects:
    - You don't need machine-readable files, AI text files, markup or Markdown. Google Search doesn't use llms.txt, and having one neither helps nor hurts.
    - You don't need to chunk content.
    - You don't need to rewrite content for AI or chase every query variant.
    - Inauthentic "mentions" don't work.
    - Structured data isn't required for AI features.
    - AEO and GEO are just SEO from Google's perspective.
    - No third-party tool has access to Google's internal metrics.
  - It describes query fan-out (concurrent related queries) and grounding.
  - It recommends Merchant Center and Business Profile for local visibility in AI responses.
  - A Google blog post dated May 2026 announced the guide. — [Google Search Central blog, May 2026](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing)
- Changelog dates ([updates](https://developers.google.com/search/updates)):
  - 2026-05-15: the guide was added.
  - 2026-06-15: Google clarified its stance on llms.txt.
  - 2025-06-16: AI Mode was counted in Search Console totals.
  - 2025-03-05: AI Mode was added to the robots meta docs.
  - 2026-05-27: preferred sources began rolling out to AI Overviews and AI Mode.
- New Search Console control and reporting ([Google blog, published 2026-06-03, updated 2026-08-31](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/)):
  - A toggle lets owners decide whether their site appears in, and helps ground, generative AI Search features: AI Overviews, AI Mode, and AI Overviews in Discover.
  - Opted-out sites get no traffic or impressions from those features.
  - The toggle isn't a ranking signal for regular results.
  - Rollout began with a UK subset and reached all websites worldwide as of 2026-08-31.
  - New reports show impressions, which pages appear, and the countries they appear in.
- Secondary reports say the setting sits under Settings → "Search generative AI", that **Include is the default**, that it applies per property, and that the Gemini app is excluded. Google's post doesn't state the default. **(search summary, blog)** — [ppc.land](https://ppc.land/google-gives-site-owners-a-toggle-to-exit-ai-overviews-and-ai-mode/); [9to5Google, 2026-06-02](https://9to5google.com/2026/06/02/google-ai-mode-overviews-opt-out/)
- From [Google common crawlers, updated 2026-07-14](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers):
  - **Google-Extended** is a robots.txt product token with no separate user-agent string.
  - It controls whether crawled content may be used to train future Gemini models and to ground responses in Gemini Apps and Vertex AI Grounding with Google Search.
  - It doesn't affect inclusion in Google Search and isn't a ranking signal.
  - Google-CloudVertexBot fetches content for Vertex AI Agents at owners' request.
- `nosnippet` and `max-snippet` also restrict use as direct input to AI Overviews and AI Mode. — [Robots meta tag doc](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

**OpenAI / ChatGPT** ([OpenAI crawlers doc, no date shown](https://developers.openai.com/api/docs/bots); the old `platform.openai.com/docs/bots` URL 301-redirects here)
- **OAI-SearchBot** surfaces sites in ChatGPT search. If it is blocked, the site won't appear in ChatGPT search answers, though it may still appear as a navigational link.
- **GPTBot** crawls for training foundation models. Disallowing it is independent of search visibility. If both bots are allowed, OpenAI may use one crawl for both purposes.
- **ChatGPT-User** handles user-initiated visits, and robots.txt may not apply to it.
- **OAI-AdsBot** checks submitted ad landing pages.
- IP ranges are published at `openai.com/searchbot.json`, `gptbot.json`, `chatgpt-user.json` and `adsbot.json`. Robots.txt changes take about 24 hours to reflect in search.

**Perplexity** ([Perplexity crawlers doc, no date shown](https://docs.perplexity.ai/guides/bots))
- **PerplexityBot** surfaces and links sites in Perplexity search results and isn't used to train foundation models. Perplexity recommends allowing it and its IP ranges (`perplexity.com/perplexitybot.json`).
- **Perplexity-User** handles user-requested fetches and generally ignores robots.txt.
- Robots.txt changes take up to 24 hours.

**Anthropic / Claude** ([Anthropic help article, dated 2026-04-07](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler))
- **ClaudeBot** collects content that may be used for training. Blocking it excludes future material from training.
- **Claude-User** handles user-initiated fetches. Blocking it may reduce visibility in user-directed search.
- **Claude-SearchBot** indexes for search quality. Blocking it may reduce visibility and accuracy in search results.
- All of them honor robots.txt, including the non-standard `Crawl-delay`. The IP list is at `claude.com/crawling/bots.json`.

**Microsoft Bing / Copilot**
- Bing's 2023 controls:
  - **NOCACHE**: content may still appear in Bing Chat (now Copilot) answers, but only the URL, title and snippet may be used for training.
  - **NOARCHIVE**: content is kept out of Bing Chat answers and out of training.
  - Both tags together are treated as NOCACHE.
  - Pages with either tag still appear in search results.
  - **(search summary)** — [Bing Webmaster blog, Sept 2023](https://blogs.bing.com/webmaster/september-2023/Announcing-new-options-for-webmasters-to-control-usage-of-their-content-in-Bing-Chat)
- Bing added `data-nosnippet` support for hiding sections from Bing Search and Copilot answers in October 2025. **(search summary)** — [Bing Webmaster blog, Oct 2025](https://blogs.bing.com/webmaster/2025/10/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute/)
- Bing Webmaster Tools reporting:
  - The **AI Performance** report (public preview, February 2026) shows citations across Microsoft Copilot, AI summaries in Bing, and partner integrations.
  - In June 2026 Bing added Intents, Topics, Citation Share and Compare.
  - **(search summary)** — [Bing Webmaster blog, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview); [Bing Search blog, June 2026](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare)
- From Bing's 2026-05-06 post:
  - Grounding emphasizes source identification and attribution.
  - Stale facts cost more in grounding than in ranking.
  - Meaning should survive chunking.
  - High-value facts need to be retrievable.
  - — [Bing Search blog, 2026-05-06](https://blogs.bing.com/search/May-2026/Evolving-role-of-the-index-From-ranking-pages-to-supporting-answers)
- Bing says AI agents act as retrievers drawn to structured, verifiable, applicable content, and calls AI Performance the first part of a broader GEO toolset. — [Bing Search blog, 2026-02-12](https://blogs.bing.com/search/February-2026/Elevating-the-Role-of-Grounding-on-the-AI-Web)
- Microsoft Advertising (Oct 2025) says assistants parse pages into sections. Its advice: **(search summary)**
  - Align the title and H1.
  - Use descriptive H2s and H3s; avoid labels like "Learn more".
  - Add Q&A blocks, lists and tables, and write concise self-contained answers.
  - Don't hide key answers in tabs or accordions, rely on PDFs, or put critical details only in images.
  - Avoid vague claims like "next-gen".
  - — [Microsoft Advertising blog](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)

**llms.txt status**
- **Google:** Search doesn't use llms.txt or similar files, and having one neither helps nor harms. This is official as of 2026-06-15. — [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [updates](https://developers.google.com/search/updates)
- None of the OpenAI, Perplexity or Anthropic crawler documents fetched for these notes mentions llms.txt. All three use robots.txt for control. — [OpenAI](https://developers.openai.com/api/docs/bots); [Perplexity](https://docs.perplexity.ai/guides/bots); [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- Vendor log studies report that AI crawlers rarely fetch llms.txt. One 12-week, 83-site test found OpenAI read it 7 times, Anthropic 9 times and Perplexity 0 times, while fetching robots.txt thousands of times. Another source claims Microsoft and OpenAI crawlers do fetch it. The evidence conflicts and is vendor-reported. **(blog/vendor, search summary)** — [ezy.ai](https://www.ezy.ai/research/do-ai-bots-read-llms-txt); [llmtxt.info](https://llmtxt.info/does-chatgpt-use-llms-txt/)
- Next.js itself publishes `/docs/llms.txt` for AI coding agents, which shows the format is used for developer documentation consumed by agents. — [local: 01-app/02-guides/ai-agents.md](../../../node_modules/next/dist/docs/01-app/02-guides/ai-agents.md)

**Next.js interaction**
- The installed default `htmlLimitedBots` regex lists Google `-Google`/`Google-` crawlers, Bingbot, BingPreview, applebot, facebookexternalhit, Twitterbot, LinkedInBot, Slackbot, Discordbot, WhatsApp and others. It does **not** include GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot or Claude-SearchBot. — [local: node_modules/next/dist/shared/lib/router/utils/html-bots.js](../../../node_modules/next/dist/shared/lib/router/utils/html-bots.js)
- Prerendered pages don't stream metadata because it is resolved at build time. — [local: 01-app/01-getting-started/14-metadata-and-og-images.md](../../../node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md)

### Inferences
- **Search Console:** once the domain is verified, check **Settings → Search generative AI = Include**, and monitor the Generative AI performance report. In Bing Webmaster Tools, verify the site, submit the sitemap and watch AI Performance.
- **robots.txt policy** for a new brand that wants maximum AI visibility:
  - Allow everything: `User-agent: *` / `Allow: /`.
  - Explicitly list and allow the search and user agents: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot and Claude-User.
  - Training bots (GPTBot, ClaudeBot, Google-Extended) are a business choice. Allowing them may help future models know the brand, but that is unverified. Blocking them doesn't reduce search or citation visibility according to each vendor's docs.
  - Don't use NOCACHE, NOARCHIVE or `nosnippet` on pages you want cited.
- **llms.txt:** skip it. It has no documented effect for Google, and no major answer engine documents using it. If it's added anyway, treat it as harmless and keep it in sync, but never as a substitute for crawlable HTML.
- **Content that gets cited** (Swedish B2B examples):
  - Definition-first sections: "Vad är Dynamics 365 Business Central?" answered in 2–3 sentences, then detail.
  - Comparison tables: Business Central vs Fortnox/Visma, BC Essentials vs Premium, cloud vs on-prem.
  - Process steps with durations, and price ranges with stated assumptions.
  - Swedish-specific facts (SIE files, momsrapportering, Peppol e-invoicing in BC) with links to primary sources such as Microsoft Learn, Skatteverket and Bolagsverket.
  - Visible "Senast uppdaterad" dates.
  - Self-contained Q&A blocks visible by default.
- **Tabs and accordions:** Google's mobile-first doc accepts them, but Microsoft advises against hiding key answers in them, so keep primary answers visible by default.
- **Avoid scale:** don't mass-produce near-duplicate "Business Central i <stad>" pages for fan-out queries. Google classes that as scaled content abuse.
- **Freshness:** consider IndexNow on deploy, which Bing ties to keeping AI and Copilot references current. Low effort for a static site, optional.
- **Static rendering matters for AI bots:** keep all public pages statically prerendered so `<title>`, meta and canonical are in the initial `<head>` for non-JavaScript AI crawlers. If any page becomes dynamic, extend `htmlLimitedBots` (see section 8).

### Gaps
- No primary OpenAI, Perplexity or Anthropic statement found on what content features drive citation.
- Bing's official Webmaster Guidelines text couldn't be retrieved, and its NOCACHE/NOARCHIVE semantics come from a 2023 post. Current handling hasn't been re-verified.
- Google's post doesn't state the default value of the Search Console "Search generative AI" setting. "Include by default" comes from secondary reporting.
- No reliable evidence that allowing training crawlers improves later brand mentions in model answers.

---

## 5. Core Web Vitals thresholds and the Next.js techniques that matter

### Takeaway
"Good" means LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1, measured at the 75th percentile of page loads, separately for mobile and desktop. "Poor" starts above 4 s, 500 ms and 0.25. Google's ranking systems use Core Web Vitals, but relevance comes first.

For a static Next.js 16 marketing site, the high-impact techniques are:
- static prerendering
- Server Components by default, with `'use client'` only on small interactive leaves
- `next/image` with explicit dimensions and **`preload`** (v16 replaced `priority`) or `fetchPriority="high"`/`loading="eager"` on the single LCP image
- `next/font` (self-hosted, preloaded, size-adjusted fallback)

### Cited Findings
- Thresholds — [web.dev: Defining Core Web Vitals thresholds, updated 2025-05-07](https://web.dev/articles/defining-core-web-vitals-thresholds):

  | Metric | Good | Needs improvement | Poor |
  |---|---|---|---|
  | LCP | ≤ 2500 ms | 2500–4000 ms | > 4000 ms |
  | INP | ≤ 200 ms | 200–500 ms | > 500 ms |
  | CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |

  All three are assessed at the 75th percentile.
- Measure at the 75th percentile, segmented by mobile and desktop. LCP, INP and CLS are the stable metrics. Measurement tools: CrUX, PageSpeed Insights, the Search Console CWV report, DevTools and the `web-vitals` library. — [web.dev: Web Vitals, updated 2024-10-31](https://web.dev/articles/vitals)
- INP replaced FID in March 2024. A banner announcing this was added on 2023-05-10. — [Google updates](https://developers.google.com/search/updates)
- Google's ranking systems use Core Web Vitals. There is no single page-experience signal, and Google still shows the most relevant content even when page experience is sub-par. — [Page experience, updated 2026-09-22](https://developers.google.com/search/docs/appearance/page-experience)
- Next.js `next/image` in v16 — [local: 01-app/03-api-reference/02-components/image.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md):
  - `preload` was added and **`priority` deprecated** in 16.0.0.
  - Use `preload` for the LCP or hero image. Don't combine it with `loading` or `fetchPriority`, or use it when several images could be the LCP.
  - In most cases the docs recommend `loading="eager"` or `fetchPriority="high"` over `preload`.
  - Default loading is lazy.
  - The `qualities` default changed to `[75]` in v16.
- Other v16 image breaking changes: local images with query strings, the `minimumCacheTTL` default, `imageSizes`, `qualities`, local-IP restriction, maximum redirects. `images.domains` and `next/legacy/image` are deprecated. — [local: 01-app/02-guides/upgrading/version-16.md](../../../node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md)
- `next/font` self-hosts fonts to avoid layout shift. Defaults: `display: 'swap'`, `preload: true` for the chosen `subsets`, and `adjustFontFallback` (default `true` for Google fonts, `'Arial'` for local fonts) to reduce CLS. — [local: 01-app/03-api-reference/02-components/font.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md)
- Server Components reduce the JavaScript sent to the browser. To shrink client bundles, put `'use client'` at the top of interactive components rather than marking large parts of the UI as client. — [local: 01-app/01-getting-started/05-server-and-client-components.md](../../../node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md)
- Smaller bundles improve Core Web Vitals. A bundle analyzer is documented. — [local: 01-app/02-guides/package-bundling.md](../../../node_modules/next/dist/docs/01-app/02-guides/package-bundling.md)
- Lazy loading reduces the JavaScript needed to render a route. — [local: 01-app/02-guides/lazy-loading.md](../../../node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md)
- The build output marks `○ (Static)` routes as fully prerendered HTML. — [local: 01-app/02-guides/building.md](../../../node_modules/next/dist/docs/01-app/02-guides/building.md)
- Without Cache Components, `export const dynamic = 'error'` forces prerendering and errors if a route uses request-time APIs or uncached data. — [local: 01-app/02-guides/caching-without-cache-components.md](../../../node_modules/next/dist/docs/01-app/02-guides/caching-without-cache-components.md)
- The production checklist recommends Lighthouse plus field data, and `useReportWebVitals` to send CWV to analytics. — [local: 01-app/02-guides/production-checklist.md](../../../node_modules/next/dist/docs/01-app/02-guides/production-checklist.md)
- Current repo:
  - Manrope is loaded through a global CSS import of `@fontsource-variable/manrope`, not `next/font`.
  - The favicon/icon PNG is 2.2 MB.
  - [layout.tsx](../../../src/app/layout.tsx); file inspected on 2026-10-11.

### Inferences
- **Fonts:** switch Manrope to `next/font/google` (`Manrope({ subsets: ['latin'], display: 'swap' })`) or `next/font/local`, so the font is preloaded and gets a metric-matched fallback. Google's `latin` subset covers å, ä and ö (Latin-1 Supplement), but verify the glyphs render after the switch.
- **LCP:**
  - Give exactly one hero `<Image>` `fetchPriority="high"` (or `preload`) with explicit `width`/`height` or `sizes`.
  - Avoid a text-over-video or carousel LCP.
  - If the hero is text, which is common for B2B, LCP is driven by font and CSS delivery.
- **INP:** keep client components to the menu toggle, contact form and cookie banner. Defer analytics, chat widgets and third-party tags with `next/script` strategies or load them after consent.
- **CLS:** reserve space for images and embeds, avoid late-injected banners at the top, and use `next/font` fallback adjustment.
- **Static guarantee:** add `export const dynamic = 'error'` to public pages, or the root layout, and confirm every route shows `○` in `next build`. Without `cacheComponents` enabled, `ensureStatic` isn't available.
- **Favicon weight:** replace the 2.2 MB PNG with small `icon.png`/`favicon.ico` assets. It is fetched on every first visit.

### Gaps
- No field (CrUX) data exists yet for an unlaunched site. Thresholds must be validated after launch, and a site with little traffic may not have CrUX data at all, so it will depend on lab tests.
- No primary source quantifies how much Core Web Vitals weigh in ranking.

---

## 6. Local SEO without a public office address: Google Business Profile service-area setup, NAP consistency, Swedish directories, Microsoft listings

### Takeaway
A consultancy that travels to customers can use a **service-area Google Business Profile**: hide the address and set areas within about 2 hours' drive of the base. A real, verifiable base address is still needed for verification. Virtual offices, PO boxes, and unstaffed coworking addresses are ineligible. Online-only businesses with no in-person contact appear ineligible.

Directories:
- **allabolag.se** lists every active Swedish company automatically from public registers.
- **hitta.se** offers "Verifiera ditt företag" and a free company account.
- **eniro.se** exists, but its current claim flow couldn't be verified.

Microsoft:
- A **Microsoft Marketplace consulting offer** for Business Central requires either the Business Applications Solutions Partner designation or **at least two Business Central customer deployments in the past 12 months**.
- The **partner directory business profile** can be created in Partner Center.

### Cited Findings
**Google Business Profile** ([Guidelines for representing your business on Google](https://support.google.com/business/answer/3038177); no date shown)
- Eligibility: a business qualifies with a location customers can visit or by travelling to customers at their locations. Online-only businesses aren't explicitly addressed but appear excluded by these criteria.
- Service-area businesses should **hide** their address. The service area shouldn't extend farther than about **2 hours' driving** from the base. One profile is allowed per service-area business.
- Address rules:
  - Use a precise real-world address.
  - PO boxes and remote mailboxes aren't acceptable, and virtual offices aren't eligible.
  - A coworking office qualifies only with signage, customers received during business hours, and the business's own staff present.
- Name rules: use the real-world name used consistently on the storefront, website and stationery. Don't add taglines, service descriptions, location details, or legal terms like AB unless you can prove the real-world use. Violations can lead to suspension.
- Phone and website rules: they must represent the business, the phone must be under its direct control, no redirects to social pages, and no premium-rate numbers.
- Generative AI responses can include local business information. Business Profiles and Merchant Center make products and services visible in AI responses. — [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

**Bing Places**
- A valid address is required for verification, but service providers can hide it.
- Service areas can be listed.
- An "Import from Google" option exists.
- Verification is by phone, email or postcard, and publishing takes about 7–14 days.
- **(blog/vendor, search summary)** — [BrightLocal guide](https://www.brightlocal.com/learn/how-to-add-or-claim-a-bing-places-for-business-listing/); [Whitespark guide](https://whitespark.ca/guides/the-ultimate-guide-to-your-bing-places-listing/)

**Swedish directories (verified to exist)**
- **allabolag.se:** **(search summary)** — [Allabolag help](https://allabolag.se/info/hjalp-kundservice/)
  - Distributes public information and annual-report data for all active Swedish companies from public registers.
  - Listings can't be removed because the data is public.
  - The SNI code comes from SCB and is changed via verksamt.se or Skatteverket.
  - Changes can take up to two weeks to appear.
- **hitta.se:** — [hitta.se](https://www.hitta.se/) (fetched 2026-10-11)
  - The home page has "Verifiera ditt företag" ("Snygga till din företagssida") and "Skapa företagskonto".
  - Paid marketing is offered at annonsera.hitta.se, and a website builder at `/webbsida`.
- **eniro.se:** a long-standing Swedish directory. — [Wikipedia: Eniro](https://en.wikipedia.org/wiki/Eniro)
  - A press release from around 2016 says companies could update their details online or via customer service. **(search summary)**
  - eniro.se returned HTTP 403 to the fetch, so the current flow is unverified.
  - Third-party reviews describe aggressive upsell calls linked to Eniro's agency. **(search summary, reviews)** — [reco.se](https://www.reco.se/eniro-sverige-ab-solna-gardsvagen-6-qnnjs)
- A legal guide notes that allabolag.se and hitta.se republish some company-register data for free. **(search summary)** — [FAR Online](https://www.faronline.se/dokument/rattserien/ratt-bolagsratt/n/rb_naringslivsregistret/)

**Microsoft listings**
- Marketplace consulting (Professional Services) offers, policy section 810 — [Microsoft Marketplace certification policies](https://learn.microsoft.com/en-us/legal/marketplace/certification-policies) (page metadata `updated_at` 2026-09-18):
  - Business Central eligibility: a Solutions Partner designation for Business Applications, **or** at least two associated Business Central customer deployments in the trailing 12 months via DPOR, CPOR or OSU.
  - Offers must have a fixed scope and a defined outcome.
  - The title must not include the company name unless it is also a product name.
  - The summary must be 200 characters or fewer.
  - The description must not contain contact information, must describe deliverables, and needs an agenda for workshops longer than one day.
- Partner directory business profile (Partner Center → Referrals → Business profile): **(search summary)** — [Create a business profile (new experience)](https://learn.microsoft.com/en-us/partner-center/referrals/referrals-create-business-profile-new); [Create a Business Profile in Microsoft Marketplace](https://learn.microsoft.com/en-us/partner-center/customers/create-a-marketing-profile)
  - It appears in the Marketplace "Connect with partners" directory.
  - Logo: GIF, JPG or PNG, 216×216 px minimum recommended, 300 px maximum width, 2 MB maximum.
  - Expertise tags drive search, and the company name comes from the legal profile.
  - Updates take up to 72 hours.
- The Business Central **specialization** requires a published BC-focused consulting offer, a Business Applications designation, and at least 5 people certified as Business Central Functional Consultant Associate. **(search summary)** — [Microsoft Partner Center: Specializations](https://learn.microsoft.com/en-us/partner-center/membership/specializations)

### Inferences
- **Google Business Profile:** if Verdana really serves customers on site, create a service-area profile.
  - Name: the exact real-world name, "Verdana" or the registered trading name.
  - Hide the address, verify with the real base address, and set service areas to regions within about 2 hours' drive (e.g. län or cities around the base).
  - Primary category: choose the closest consulting or software category Google offers; it couldn't be verified here.
  - Website: the canonical home URL.
  - Don't use a virtual office.
  - If all work is remote, a profile may not be eligible. Rely on Organization markup and directories instead.
- **NAP consistency:** use one canonical spelling of the name, one phone number, one email domain and one website URL across the site footer, Organization JSON-LD, Google Business Profile, Bing Places, LinkedIn, hitta.se, Partner Center and allabolag. allabolag mirrors Bolagsverket, so the registered name controls its listing.
- **Directory priority** (cost-free first):
  1. Google Business Profile
  2. Bing Places
  3. LinkedIn company page
  4. hitta.se verification
  5. allabolag.se (automatic once registered; check it's correct)
  6. eniro.se (claim if free; decline paid packages)
  7. Microsoft partner-directory profile (needs a Partner Center account and Partner ID)

  Add the Marketplace consulting offer only once the designation or 2-deployment criterion is met. Until then, don't imply Marketplace or partner status on the site.

### Gaps
- Google's separate "Business eligibility" help page wasn't fetched, so the exact statement on online-only businesses rests on inference from the representation guidelines.
- The current eniro.se claim process is unverified (403).
- Whether a hidden Google Business Profile address carries over in a Bing Places import is undocumented.
- Which Google Business Profile categories exist for "ERP consultant" or "Business Central consultant" in Swedish wasn't verified.
- No authoritative source ranks Swedish citation sites by SEO value.

---

## 7. Brand-name collision ("Verdana" vs the Microsoft font): establishing a distinct brand entity

### Takeaway
Google's site-name system handles exactly this case: if the preferred name is already used by a global entity, add `alternateName` values, then the lowercase domain, as fallbacks. Keep the brand string identical everywhere (WebSite markup, `og:site_name`, title suffix, H1/logo text, Organization `name`).

Disambiguate with a consistent brand + category phrase ("Verdana – Business Central-konsulter"), Organization `legalName`/`disambiguatingDescription`/`knowsAbout`/`sameAs`, and consistent off-site profiles. Expect bare "Verdana" queries to keep showing font results. Target brand+category queries instead.

### Cited Findings
- From the [Site names doc](https://developers.google.com/search/docs/appearance/site-names):
  - The name should be unique and not misleading.
  - If the preferred name is unavailable, for example because a global site already uses it, provide alternatives via `alternateName`.
  - Fallback order: `alternateName`, then the lowercase domain as an alternate, then the domain as `name`.
  - Keep the name consistent across structured data, `og:site_name`, `<title>` and headings.
- Organization `name` should match the site name's `name`/`alternateName`. `url` helps Google identify the organization. `sameAs` lists pages with information about it. `legalName` is the registered name. — [Organization doc](https://developers.google.com/search/docs/appearance/structured-data/organization)
- schema.org `disambiguatingDescription` is a short description that distinguishes an item from similar ones. `knowsAbout` lists topics the organization is known for. `brand` and `slogan` exist. — [schema.org/Organization](https://schema.org/Organization)
- Google may omit the site name from a title link when it repeats the site name already shown. — [Title link doc](https://developers.google.com/search/docs/appearance/title-link)
- The Business Profile name must be the real-world name without added descriptors, so "Verdana Business Central" can't be the profile name unless that's the real-world name. — [GBP guidelines](https://support.google.com/business/answer/3038177)
- The Microsoft partner profile name comes from the legal profile and must match registration records. **(search summary)** — [Partner Center business profile](https://learn.microsoft.com/en-us/partner-center/referrals/referrals-create-business-profile-new)
- Google launched **Search profiles** in 2026. Website owners and creators can claim a profile, reached via the Knowledge Panel, Discover or a direct URL, and add a "Search profile badge" to their site. The badge guide was added on 2026-09-16. It is a link, not a ranking factor. **(blog, search summary)** — [Search Engine Roundtable](https://www.seroundtable.com/google-search-profile-badge-42106.html); [9to5Google, 2026-06-04](https://9to5google.com/2026/06/04/google-search-profiles/); [updates](https://developers.google.com/search/updates)

### Inferences
- **Choose the canonical brand string now and freeze it.**
  - The site name is "Verdana".
  - Pick a distinguishing descriptor and use it identically in `alternateName`, the tagline, the title suffix on the home page, the LinkedIn headline and directory descriptions, e.g. "Verdana Business Central" / "Verdana – Business Central-konsulter".
  - If the registered company name contains a distinguishing word (e.g. "Verdana Konsult AB"), use it as `legalName`. That is a business or legal decision.
- **Domain:** a domain with a distinguishing token makes Google's "lowercase domain" fallback a distinct name rather than another "verdana". Decide this before launch, since site names and favicons take weeks to settle.
- **Home page:** visible text should state the entity and category in the first screen, e.g. H1 or subhead: "Verdana är ett svenskt konsultbolag för Microsoft Dynamics 365 Business Central".
  - Repeat the same pairing in the Organization `description`/`disambiguatingDescription`.
  - Don't mention the font in structured data. Disambiguation should come from positive category signals, not negation.
- **Off-site entity signals:** create and cross-link only real profiles, and list each in `sameAs` with identical name, logo, URL and category text:
  - LinkedIn company page and founders' profiles
  - Google Business Profile
  - Bing Places
  - hitta.se
  - Microsoft partner-directory profile (when eligible)
  - Microsoft Learn profiles for consultants
- **Logo:** use a distinctive, consistently cropped square logo (at least 112 px) for Organization `logo`, the favicon, LinkedIn and the Google Business Profile, so image signals match.
- **Keyword strategy:** treat brand+category ("verdana business central", "verdana konsult", "verdana erp") as the brand queries to monitor in Search Console. Bare "verdana" will stay font-dominated.
- **Search profile:** once the site has a knowledge-panel or profile presence, claim the Google Search profile and consider the badge. This is optional, with unverified impact.

### Gaps
- No Google documentation explains how it disambiguates two entities with the same name in the Knowledge Graph, or how long a new organization takes to get a knowledge panel.
- Primary Google documentation on Search profiles wasn't fetched; only secondary reports.
- Whether "Verdana" is trademark-registered for software or consulting classes, and whether that creates legal risk, is out of scope and unverified.

---

## 8. Next.js 16.4 implementation: exact APIs, file conventions and gotchas (from the local docs), plus a consolidated checklist

### Takeaway
Implement everything with server-side metadata exports and metadata file conventions in `src/app/`, keep every public route statically prerendered, and handle these gotchas:
1. Set `metadataBase` from an environment variable, since the domain is undecided. Relative URLs without it fail the build.
2. `title.template` applies only to *child* segments.
3. Nested metadata objects (`openGraph`, `robots`, `alternates`) are **shallow-merged and replaced, not deep-merged**, and fields a page doesn't set are inherited. Never set `alternates.canonical` in the root layout.
4. File-based metadata (icon, opengraph-image) overrides the `metadata` object.
5. `next/og` `ImageResponse` accepts only TTF/OTF/WOFF fonts and has a 500 KB bundle limit.
6. In JSON-LD, escape `<` as `<`.
7. Streaming metadata is irrelevant for prerendered pages, but `htmlLimitedBots` has no AI crawlers.
8. v16 made image-route `params` and sitemap `id` Promises, deprecated `<Image priority>`, renamed `middleware` to `proxy`, removed AMP, and added a robots `other` field in 16.3.0.

### Cited Findings
**Current repo state** (observed 2026-10-11)
- `src/app/layout.tsx` exports:
  - `metadata` with `title: "Verdana — Affärssystem med riktning"`
  - a Swedish `description`
  - `robots: { index: false, follow: false }`
  - `icons: { icon: { url: "/brand/verdana-original.png", type: "image/png" } }`
  - and renders `<html lang="sv">`.
  - `src/app` contains only `layout.tsx`, `page.tsx` and `globals.css`.
  - `next.config.ts` sets only `devIndicators: false`.
  - There are no robots, sitemap, OG or icon files.
  - — [layout.tsx](../../../src/app/layout.tsx); [next.config.ts](../../../next.config.ts)

**Metadata API** ([local: 01-app/03-api-reference/04-functions/generate-metadata.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md))
- **Exports:**
  - `export const metadata: Metadata` (static) or `export async function generateMetadata({ params, searchParams }, parent: ResolvingMetadata)`, both from `layout`/`page`.
  - Server Components only.
  - You can't export both from one segment.
  - Use the static object when metadata doesn't depend on request data.
  - `params` and `searchParams` are Promises, and `searchParams` is available only in `page`.
  - `fetch` calls are memoized across `generateMetadata` and the page. Use React `cache` otherwise.
- **Title:**
  - A plain string, or `{ default, template, absolute }`.
  - `template` (e.g. `'%s | Acme'`) applies to **child** segments, not the segment that defines it, so a template in `app/layout.tsx` doesn't affect `app/page.tsx`'s own title.
  - `default` is required when a template is set.
  - `absolute` ignores parent templates.
- **`metadataBase`:**
  - A URL prefix for URL-based fields in the current segment and below.
  - A relative URL without `metadataBase` causes a **build error**.
  - An absolute field URL ignores it.
  - Duplicate slashes are normalized.
  - With `'use cache'` in `generateMetadata`, return it as a string because `URL` isn't serializable.
- **`alternates`:** `canonical`, `languages` (hreflang map), `media`, `types` (RSS). Output is `<link rel="canonical">` and `<link rel="alternate" hreflang>`.
- **`openGraph`:** `title`, `description`, `url`, `siteName`, `images` (absolute or resolved via `metadataBase`; with `width`/`height`/`alt`), `locale`, `type` (`website`/`article` plus `publishedTime`/`authors`).
- **`twitter`:** `card: 'summary_large_image'`, `title`, `description`, `images`, `site`/`creator`.
- **`robots`:** `{ index, follow, nocache, googleBot: { index, follow, noimageindex, 'max-video-preview', 'max-image-preview', 'max-snippet' } }` produces `<meta name="robots">` and `<meta name="googlebot">`.
- **Other fields:**
  - `icons` (the docs recommend the file conventions instead)
  - `verification: { google, yandex, yahoo, other }`
  - `manifest`, `applicationName`, `authors`, `creator`, `publisher`, `formatDetection`, `category`, `other` (custom meta tags)
- **Deprecated:** `themeColor`, `colorScheme` and `viewport` inside `metadata` (since v14). Use `viewport`/`generateViewport`.
- **Defaults:** `<meta charset>` and `<meta name="viewport" content="width=device-width, initial-scale=1">` are always added.
- **Merging:** segments are evaluated from root to page and **shallowly merged**. A nested object such as `openGraph` set in a page replaces the parent's entire `openGraph`. Fields the page doesn't set are inherited. To share nested values, spread a shared constant.
- **Priority:** file-based metadata has higher priority than and overrides `metadata`/`generateMetadata`.
- **Streaming metadata** (since 15.2):
  - On dynamic routes, resolved metadata may be appended to `<body>`. This is verified for JavaScript-executing bots such as Googlebot.
  - HTML-limited bots get blocking metadata in `<head>`.
  - Override with `htmlLimitedBots`. `/.*/` disables streaming entirely.
- **With `cacheComponents`:** metadata that reads runtime data on an otherwise prerenderable page raises an error. Fix it with `'use cache'` in `generateMetadata` or a Suspense-wrapped dynamic marker.
- Prerendered pages don't use streaming because metadata is resolved at build time. — [local: 01-app/01-getting-started/14-metadata-and-og-images.md](../../../node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md)
- `htmlLimitedBots` (since 15.2): setting it **overrides** the default list. The default list includes Google crawlers, Bingbot, Twitterbot and Slackbot. — [local: 01-app/03-api-reference/05-config/01-next-config-js/htmlLimitedBots.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/htmlLimitedBots.md)
- The actual default regex in 16.4.0 is `HTML_LIMITED_BOT_UA_RE`. It covers `-Google`/`Google-` crawlers, Chrome-Lighthouse, Slurp, DuckDuckBot, baiduspider, yandex, Bingbot, BingPreview, applebot, facebookexternalhit, Twitterbot, LinkedInBot, Slackbot, Discordbot, WhatsApp and others. It doesn't include AI crawlers or `Googlebot` itself. — [local: dist/shared/lib/router/utils/html-bots.js](../../../node_modules/next/dist/shared/lib/router/utils/html-bots.js)

**Viewport** ([local: 01-app/03-api-reference/04-functions/generate-viewport.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-viewport.md))
- `export const viewport: Viewport = { themeColor: ... }` or `generateViewport({ params })`.
- Server Components only. You can't export both from one segment. A codemod exists to move `themeColor` out of `metadata`.

**Sitemap** ([local: 01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md))
- Use `app/sitemap.xml` (static) or `app/sitemap.ts`, which default-exports a function returning `MetadataRoute.Sitemap`.
- Each entry has `url`, `lastModified?`, `changeFrequency?`, `priority?`, `alternates?: { languages }`, `images?` and `videos?`.
- `sitemap.ts` is a special Route Handler, cached by default unless it uses request-time APIs.
- Split large sitemaps with nested `sitemap.ts` files or `generateSitemaps`. In v16 the `id` is `Promise<string>`.
- The docs' examples use `lastModified: new Date()` and include `changeFrequency`/`priority`.

**Robots** ([local: 01-app/03-api-reference/03-file-conventions/01-metadata/robots.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md))
- Use `app/robots.txt` (static) or `app/robots.ts`, which returns `MetadataRoute.Robots`:
  - `rules`: one object, or an array where `userAgent` is required.
  - Rule fields: `allow`, `disallow`, `crawlDelay`, and `other` for non-standard directives (added in **16.3.0**).
  - Also `sitemap` (string or array) and `host`.
- Cached by default.

**OG/Twitter images** ([local: 01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md))
- Static files:
  - `opengraph-image.(jpg|jpeg|png|gif)` and `twitter-image.*`, plus `opengraph-image.alt.txt` and `twitter-image.alt.txt` in any segment.
  - The build fails if a twitter image exceeds 5 MB or an OG image exceeds 8 MB.
- Code-generated: `opengraph-image.(js|ts|tsx)` default-exports a function returning `ImageResponse`, with optional `alt`, `size` and `contentType` exports.
  - It is statically generated at build time and cached unless it uses request-time APIs.
  - `params` is a Promise in v16. `generateImageMetadata` supports multiple images.
  - Read local assets once at module scope with `node:fs/promises` and `process.cwd()`. This is the Node.js runtime pattern.

**ImageResponse** ([local: 01-app/03-api-reference/04-functions/image-response.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/04-functions/image-response.md))
- `import { ImageResponse } from 'next/og'`. It moved from `next/server` in v14.
- Options: `width` (1200) and `height` (630) defaults, `emoji`, `fonts: [{ name, data: ArrayBuffer, weight, style }]`, `debug`, `status`, `headers`.
- Only flexbox and a subset of CSS are supported (no grid).
- Bundle limit is **500 KB** including fonts and images.
- **Fonts must be ttf, otf or woff.** ttf and otf parse faster.
- It uses Satori and Resvg.

**Icons** ([local: 01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md))
- `favicon.ico` goes in `app/` root only and produces `<link rel="icon" href="/favicon.ico" sizes="any">`.
- `icon.(ico|jpg|jpeg|png|svg)` and `apple-icon.(jpg|jpeg|png)` can go in any segment. Numbered variants such as `icon1.png` are supported.
- Next infers `type`/`sizes`. `sizes="any"` is used for SVG.
- `icon.tsx`/`apple-icon.tsx` can generate icons with `ImageResponse`, but a favicon can't be generated.
- `params` is a Promise in v16.
- Metadata files are served with hashes and cached by default. If a `proxy.ts` is used, exclude metadata files in its matcher. — [local: 01-app/03-api-reference/03-file-conventions/01-metadata/index.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/index.md)

**JSON-LD** ([local: 01-app/02-guides/json-ld.md](../../../node_modules/next/dist/docs/01-app/02-guides/json-ld.md))
- Current recommendation: render a native `<script type="application/ld+json">` in `layout.js` or `page.js`.
- `JSON.stringify` doesn't sanitize. Replace `<` with `<` (`.replace(/</g, '\\u003c')`) or use a vetted serializer such as `serialize-javascript`.
- Validate with the Rich Results Test or Schema Markup Validator. You can type the data with `schema-dts`.
- Don't use `next/script` for JSON-LD, because it isn't executable code.

**v16 changes that touch SEO** ([local: 01-app/02-guides/upgrading/version-16.md](../../../node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md))
- Image-generating functions (`opengraph-image`, `twitter-image`, `icon`, `apple-icon`) receive `params` and `id` as Promises. `generateImageMetadata` still gets synchronous `params`.
- The sitemap `id` is `Promise<string>`.
- `middleware` is renamed to `proxy`, which runs on Node.js only.
- AMP has been removed.
- PPR moved under `cacheComponents`.
- `next/image` changes are listed in section 5.

**Static generation and URLs**
- Without Cache Components, `dynamic = 'error'` or `'force-static'` forces prerendering. — [local: 01-app/02-guides/caching-without-cache-components.md](../../../node_modules/next/dist/docs/01-app/02-guides/caching-without-cache-components.md)
- `ensureStatic` (`'shell'`, `'prefetch'`, `'navigation'`) works only when `cacheComponents` is enabled. Otherwise the build fails. — [local: 01-app/03-api-reference/03-file-conventions/02-route-segment-config/ensureStatic.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/02-route-segment-config/ensureStatic.md)
- By default `/about/` redirects to `/about`. `trailingSlash: true` inverts this. — [local: 01-app/03-api-reference/05-config/01-next-config-js/trailingSlash.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/trailingSlash.md)

**i18n (for English later)**
- Pattern: `app/[lang]/...`, with the root layout optionally moved to `app/[lang]/layout.js`, plus `hasLocale` and `notFound()`. — [local: 01-app/02-guides/internationalization.md](../../../node_modules/next/dist/docs/01-app/02-guides/internationalization.md)
- Multiple root layouts via route groups:
  - Navigating between them causes a full page load.
  - Paths must not conflict.
  - `/` must live in one group if there is no top-level layout.
  - — [local: 01-app/03-api-reference/03-file-conventions/route-groups.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md)

### Inferences
**A. Implementation sketch** (adapt names; all files under `src/app/`)

```ts
// src/lib/site.ts — single source of truth (domain undecided → env var)
import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export const IS_PROD = process.env.SITE_ENV === 'production' // set only on the production deployment
export const SITE_NAME = 'Verdana'
export const OG_DEFAULTS = { siteName: SITE_NAME, locale: 'sv_SE', type: 'website' as const }

// Per-page helper: canonical + og:url must be set per page (never in the root layout,
// otherwise every page inherits the home canonical because unset fields are inherited).
export function pageMetadata(o: { title: string; description: string; path: string }): Metadata {
  return {
    title: o.title,
    description: o.description,
    alternates: { canonical: o.path },
    openGraph: { ...OG_DEFAULTS, title: o.title, description: o.description, url: o.path },
  }
}
```

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { SITE_URL, SITE_NAME, OG_DEFAULTS, IS_PROD } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Verdana – Business Central-konsulter', template: `%s | ${SITE_NAME}` },
  description: '…',
  applicationName: SITE_NAME,
  openGraph: OG_DEFAULTS,
  twitter: { card: 'summary_large_image' },
  robots: IS_PROD ? { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 } }
                  : { index: false, follow: false },
  // verification: { google: '<token>' }, // or verify via DNS
}
export const viewport: Viewport = { themeColor: '#…' }
// <html lang="sv"> stays; remove the `icons` field once app/icon.png etc. exist
```

```ts
// src/app/sitemap.ts — real content dates, no changeFrequency/priority (Google ignores them)
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { routes } from '@/content/routes' // [{ path: '/', updatedAt: '2026-10-20' }, …]
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${SITE_URL}${r.path}`, lastModified: r.updatedAt }))
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next'
import { SITE_URL, IS_PROD } from '@/lib/site'
export default function robots(): MetadataRoute.Robots {
  // Non-production: rely on auth / noindex rather than Disallow (Disallow hides noindex from Google)
  if (!IS_PROD) return { rules: { userAgent: '*', allow: '/' } }
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Documented search/answer agents, explicitly allowed (edit training bots per business decision)
      { userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User',
                    'Claude-SearchBot', 'Claude-User', 'GPTBot', 'ClaudeBot', 'Google-Extended'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
```

```tsx
// src/components/json-ld.tsx — XSS-safe serialization per the Next.js guide
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
// Home page: <JsonLd data={{ '@context': 'https://schema.org', '@graph': [organization, website] }} />
```

```tsx
// src/app/opengraph-image.tsx — static at build time; font must be TTF/OTF/WOFF (not the fontsource WOFF2)
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
export const alt = 'Verdana – Business Central-konsulter'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
const manrope = await readFile(join(process.cwd(), 'assets/Manrope-SemiBold.ttf'))
export default async function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center',
                  justifyContent: 'center', fontSize: 96, background: '#fff' }}>Verdana</div>,
    { ...size, fonts: [{ name: 'Manrope', data: manrope, weight: 600, style: 'normal' }] })
}
```

- Icons: `src/app/favicon.ico` (multi-size up to 48 px), `src/app/icon.png` (square, e.g. 512×512 and optimized), `src/app/apple-icon.png` (180×180). Remove the `icons` field in `metadata`, since file conventions override it anyway.
- Every public `page.tsx`: `export const metadata = pageMetadata({ title, description, path })`. Optionally add `export const dynamic = 'error'` so a route that accidentally becomes dynamic fails the build. Confirm `○` for every route in `next build`.
- If any route must become dynamic, decide on `htmlLimitedBots` in `next.config.ts`. Because setting it **replaces** the default list, either copy the default regex and append `|GPTBot|OAI-SearchBot|ChatGPT-User|PerplexityBot|Perplexity-User|ClaudeBot|Claude-SearchBot|Claude-User`, or use `/.*/` to disable streaming metadata.
- English later: keep Swedish routes at the root. Add `/en/...` using route groups with separate root layouts (`<html lang="sv">` and `<html lang="en">`), which accepts full reloads between languages. Add `alternates.languages` per page and `alternates.languages` per sitemap entry, plus `x-default`.
- After `next build && next start`, check with `curl` that the raw HTML `<head>` contains `<title>`, the description, canonical, `og:*`, the JSON-LD script and icon links. Check that HTML stays well under Googlebot's 2 MB uncompressed limit. App Router pages also inline the RSC payload; the HTML-size impact is an inference to measure, not a documented figure.

**B. Consolidated launch checklist (priority order)**

*Launch blockers*
1. Switch `robots` to `index, follow` on production only. Protect staging with authentication or `noindex`, not a robots.txt `Disallow`.
2. Choose and configure the final domain and host (https; apex or www with a 301 from the other). Set `NEXT_PUBLIC_SITE_URL` and `metadataBase`.
3. Add `sitemap.ts` (canonical 200 URLs only, real `lastModified`) and `robots.ts` (allow all, with a `Sitemap:` line).
4. Give every page a unique title (brand suffix via template), a unique description, a self-referencing absolute canonical and `og:url`.
5. Add a home-page JSON-LD `@graph` with WebSite (`name`, `alternateName`, `url`) and Organization (`name`, `legalName`, `url`, `logo` ≥112 px, `description`, `sameAs`, contact details). Only include true, visible facts.
6. Add favicon, icon and apple-icon file conventions (square, >48 px, PNG/ICO) and a 1200×630 OG image with alt text.
7. Verify in Google Search Console (Domain property via DNS). Submit the sitemap, check **Settings → Search generative AI = Include**, and inspect the home URL. Do the same in Bing Webmaster Tools.

*High*

8. Make site-name consistency exact: "Verdana" in WebSite `name`, `og:site_name`, the title suffix, the logo alt text and the H1/hero, plus a chosen `alternateName`.
9. Publish an about page with real people, verifiable credentials, company facts (legal name, organisationsnummer, VAT), a contact page and a footer company block. Run a legal check on publishing an address (e-handelslagen 8 §).
10. Use ASCII, lowercase, hyphenated, stable Swedish slugs. Link every page from at least one other page with descriptive anchors. Use real `<a href>` links only.
11. Performance: use `next/font` for Manrope, keep client components to leaves, give one LCP image `fetchPriority="high"`/`preload` (not the deprecated `priority`), set explicit image dimensions, and defer third-party scripts.
12. Create a service-area Google Business Profile if eligible, plus Bing Places, LinkedIn and hitta.se verification. Check allabolag. Keep the name, phone and URL identical everywhere.

*Medium*

13. Insights/articles: BlogPosting markup with Person authors, author pages, true `datePublished`/`dateModified`, and visible update dates.
14. AI-citable content: definition-first sections, comparison tables, process and pricing explanations, Swedish-specific facts with primary-source links, and Q&A visible by default. No FAQ rich-result expectations and no city-page spam.
15. Add BreadcrumbList on nested pages (desktop rich result).
16. Optionally add Service JSON-LD on service pages, mirroring visible text.
17. Monitor Search Console (Performance incl. Generative AI report, CWV, indexing) and Bing AI Performance. Consider IndexNow on deploy.

*Later*

18. English launch: `/en/` with hreflang (`sv-SE`/`sv`, `en`, `x-default`) in metadata and the sitemap, a separate root layout with `lang="en"`, and same-language canonicals.
19. Once eligible (Business Applications designation or 2 BC deployments in 12 months): publish a Microsoft Marketplace consulting offer and the partner-directory profile, then add them to `sameAs`.
20. Don't: llms.txt as a ranking tactic, self-serving review markup, LocalBusiness/ProfessionalService without an address, claims of partner status or references before they exist, NOCACHE/NOARCHIVE/`nosnippet` on pages meant to be cited.

### Gaps
- It wasn't tested how Next.js 16.4 merges a root-level `opengraph-image` file with a child page that sets its own `openGraph` object without `images`. Verify the rendered `og:image` on child pages after the first build.
- Whether `export const dynamic = 'error'` in the root layout applies to all child pages wasn't confirmed in the docs read. Placing it per page, or checking build output, is the safe route.
- The exact HTML size overhead of inlined RSC payloads wasn't measured. Measure it after build.
