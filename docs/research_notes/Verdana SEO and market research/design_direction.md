# Design direction for Verdana: what makes a 2025–2026 B2B consultancy / business-software site look world-class (as of 11 October 2026)

## 1. What do exemplary live sites actually do? (20 homepages measured: product/fintech/devtool, premium consultancies, Dynamics/Business Central partners, one Swedish business-software reference)

### Takeaway
"Premium" on the best current B2B sites comes from a few disciplined choices, not from decoration. They use one or two typefaces (often custom) set large with tight negative tracking, one accent colour, real product UI or real people/work instead of stock or illustration filler, verb-led specific CTAs, small radii and almost no shadows. The Microsoft Dynamics partner category mostly falls back on stock or drone photography, generic gradients and claim-based trust bars, which leaves a clear opening for Verdana to look better than its own category.

### Cited Findings

#### Method (applies to every site bullet below)
- Each homepage was rendered headlessly in Microsoft Edge (Chromium; Playwright from the Verdana repo's devDependencies) at 1440×900 on 2026-10-11. Captured: computed styles (font-family, size, weight, line-height, letter-spacing, colour, `hyphens`, `overflow-wrap`, `text-wrap`), the web fonts actually loaded (`document.fonts`), CTA geometry and colours, nav items, section backgrounds, grid and radius frequencies, a hero screenshot and a full-page screenshot. Cookie banners were not touched, so several hero screenshots are partly covered. All values are desktop values, and px values are computed at that viewport. The built-in browser pane refused navigation, so headless Edge was used instead. The measured sites are listed with their URLs below.

#### Product / fintech / devtool brands
- **Stripe** (the request to stripe.com was served the Swedish site, `lang="sv-SE"`). Its only web font is Söhne variable (`sohne-var`). The H1 is a 31-word two-tone headline plus subhead ("Finansiell infrastruktur som ger ökade intäkter. Ta emot betalningar…") at 44px/300, line-height 1.15, letter-spacing −0.88px (−0.02em), with `text-wrap: pretty`, `overflow-wrap: break-word` and `hyphens: manual`. H2 is 32px/300 and H3 26px/300. Above the H1 sits a live metric eyebrow ("Global BNP körs på Stripe: 1,73041792 %"). CTAs use a 4px radius and the #533AFD fill with white text, 48px tall in the hero ("Börja") and 40px in the header ("Kontakta säljteamet"). The nav has five top-level items (Produkter, Lösningar, Utvecklare, Resurser, Priser). A customer-logo row sits directly under the hero (Klarna, Lovable, Amazon, Google, reMarkable, Kry, NVIDIA). Other details: a 12-column grid, content max-width 1266px, 6px card radius, the signature multicolour ribbon gradient at top right, a long page (≈14,800px) that is mostly white with one dark navy band (#0D1738), and ≈86 footer links. — [stripe.com/se](https://stripe.com/se)
- **Linear** uses Inter Variable plus Berkeley Mono on #08090A. The H1, "The product development system for teams and agents" (8 words), is 64px/510, line-height 1.0, −1.408px (−0.022em). H2 is 48px/510 in muted grey #8A8F98, giving two-tone statements, and paragraphs are 14px #8A8F98. Berkeley Mono appears as 12px uppercase figure captions ("FIG 0.1", "FIG 0.2"). The hero visual is the product UI itself, directly under the headline. The page runs as four ≈1,220px "chapters" (Intake and integrations / Planning and monitoring / AI and automations / Build, review, and ship), followed by a changelog. CTAs are 44px pills: a light "Get started" and a translucent "Contact sales". Cards use a 12px radius. The same-origin CSS contains 8 `prefers-reduced-motion` rules, and the footer has 42 links in 6 lists. — [linear.app](https://linear.app/)
- **Vercel** uses Geist (`GeistSans`) plus Geist Mono on light #FAFAFA with #171717 text. The H1, "Agentic Infrastructure" (2 words), is 64px/400 with extreme −3.84px (−0.06em) tracking and `text-wrap: balance`. H2 is 56px/450 at −0.06em. The hero visual is the brand's triangle mark rendered as a 3D object. CTAs are 40px pills ("Deploy now" in black, "Talk to sales" in white), and header CTAs are 32px with a 6px radius. It uses a 12-column grid and a short page (≈5,300px) with a logo strip (DoorDash, OpenAI, SpaceX…). — [vercel.com](https://vercel.com/)
- **Ramp** uses a single typeface, Lausanne, at essentially one weight (400) for everything. The H1, "Time is money. Save both." (5 words), is 64px/400, line-height 1.0, with no tracking adjustment. H2 is 28px and body text 16px. The hero CTA is lime-yellow (computed `lab(92 −20 85)`) with near-black text, 8px radius and 52px height, inline with an email field ("What's your work email?" / "Get started for free"). A live metrics ticker with 10px uppercase labels runs along the bottom of the hero ("US corporate payments processed", "Receipts processed"). Headline proof includes "70,000"/"70k+" companies. Cards use 12–16px radii and shadows are almost absent (1 element). The nav has six expandable groups and the footer ≈137 links. — [ramp.com](https://ramp.com/)
- **Mercury** uses custom Arcadia plus Arcadia Display on dark #171721. The H1, "Radically different banking" (3 words), is 49px/480, and H2 is 42px/480 with slightly positive tracking (+0.42px). The hero is a cinematic rendered scene (a desk on a misty mountain) with a centred headline and an email field. The CTA is periwinkle #5266EB, a 40px pill. A regulatory disclaimer sits directly under the hero ("Mercury is a fintech company, not an FDIC-insured bank…"). Proof is given as big numbers (300K, $20B+, 4.9), and the layout uses a 16-column grid. — [mercury.com](https://mercury.com/)
- **Attio** uses Inter, Inter Display, Tiempos Text (serif) and JetBrains Mono on a near-white canvas with dark bands. The H1, "Welcome to agentic revenue." (4 words), is 64px/600, line-height 0.95, −1.28px (−0.02em), and H2 is 40px/500. Buttons are small and crisp: 36px tall with a 10px radius ("Start for free" dark, "Talk to sales" outlined). A product UI window is the hero. Other details: a 24-column grid, 1440px max-width, the claim "Trusted by 30,000+ customers", and 13 `prefers-reduced-motion` rules. — [attio.com](https://attio.com/)
- **Rippling** uses custom Basel (400/500). An aubergine hero (#4A0039) alternates with warm beige (#F2EEEB) and white bands. The H1, "Manage your entire workforce on one system" (7 words), is 48px/500 at −0.72px (−0.015em), and paragraphs are 18px. The CTA is orange #FFA81D with black text, 4px radius and 54px height, inline with an email field. Review proof sits above the H1 ("4.8 stars 13k+ reviews"), and the visual is product UI on a tablet. Other details: content widths 1128/1320px, seven expandable nav groups and ≈108 footer links. — [rippling.com](https://www.rippling.com/)

#### Premium consultancies / agencies
- **Netlight** uses Proxima Nova (400–800) plus a serif ("Video") set in uppercase for small headings. The canvas is light grey #F7F7F7 with black type, signal-yellow #FFF400 and lavender #A29AFF accents. The H1, "Co-creating the future", is 48px/800. Buttons are 48px uppercase pills ("LET'S CREATE TOGETHER", "SERVICES", "CAREER"), either black fill or 1px black outline, and cards have no radius. A horizontal capability band runs ENGINEERING · CLOUD · INFRASTRUCTURE · DATA & AI · PRODUCT · DESIGN & UX. A "Netlight in numbers" block (2.2K, 360+, 1999, 11, 39%) sits on a yellow band, and the site shows real consultant portraits. Other details: a 4-item nav (SERVICES / CAREER / STORIES / CONTACT), a ≈6,200px page and an 18-link footer. — [netlight.com](https://www.netlight.com/)
- **Thoughtworks** uses Bitter (slab serif, 700) for display and Inter for text. The H1, "We don't just do AI / We do AI that works", is 48px/700 and two-tone (white plus coral #F2617A) over a full-bleed rendered illustration of butterflies and glass cubes. Body paragraphs are 18px/360. The UI is flat: no radii and no gradients. The nav has nine expandable mega-menu groups. Trust comes from research ("Global CIO Survey 2026") and platform pages, and there is a dark teal band (#163C4D). — [thoughtworks.com](https://www.thoughtworks.com/)
- **IDEO** uses custom Fhoscar (300–700) with acid-lime #D9FF00 type on dark slate #151F27. The H1, "Human-centered", is 80px/300. The page relies heavily on real project and workshop photography (≈33 large images). There are no visible nav links, only a menu button plus a lime "Say hello" CTA. The lead content is a report (IDEO IQ 2026), and 2-column grids dominate. The site also loads Manrope (400/700) as a secondary web font. — [ideo.com](https://www.ideo.com/)
- **McKinsey & Company** uses Bower (serif, 300) for display and McKinsey Sans (300/400/500) for text, with light weights throughout. The palette is deep navy #051C2C with electric blue #2251FF, cyan #00A9F4 and deep blue #042A76. The hero gradient is `radial-gradient(circle at 100% 0%, #2251FF 14%, #042A76 50%, #051C2C …)`. Display text runs at 64–76px/300. The site has 12 expandable mega-menu groups and nearly square corners (2.5px). — [mckinsey.com](https://www.mckinsey.com/)
- **Bain & Company** uses Graphik (400–600) with Tiempos (serif) as body text (16px, line-height 1.7). The palette is white and black with Bain red #CC0000, and feature headings are 60px/500. Results are presented as numbers (500+, 7, $300M, 2.5x, 150). An uppercase utility nav runs at 10.88px with +0.06em tracking, alongside 14 expandable menus. Corners use a 2px radius. — [bain.com](https://www.bain.com/)
- **Accenture Song** uses Graphik (400–600) plus GT Sectra Fine (serif, 300) on a black canvas with Accenture purple (#A100FF) accents. The H1, "We are Song", is 87.5px/500 at −2.62px (−0.03em). The page is video-led with a very large mega menu. The suggested path /about/accenture-song returned 404, so /about/accenture-song-index was measured. — [Accenture Song](https://www.accenture.com/us-en/about/accenture-song-index)

#### Swedish business-software reference
- **Fortnox** (`lang="sv"`) sets its display headline in lowercase Heavitas Neue 800 ("allt för att starta, driva och växa", 39.6px on deep green #003824) with Exo 2 (300) for body text. CTAs are 47–49px pills ("Skaffa Fortnox" in bright green #00DB33 with dark text). The site uses conversational Swedish CTA copy ("Boka startsnack") and shows packaging up front ("Se våra paket", "Hur mycket Fortnox behöver du?"). Cards use a 24px radius and the nav has 5 flat items. — [fortnox.se](https://www.fortnox.se/)

#### Microsoft Dynamics / Business Central partners
- **Fellowmind** (Swedish page) uses Montserrat 400 only. Its English H1, "Creating Connected Companies", is 72px on an orange→magenta gradient (#F05027→#C514B4) next to drone photography. The nav is Swedish (Lösningar, Tjänster, Kundcase, Branscher, Om oss, Karriär), and content leans on lead magnets (an "AI Index 2026" download and webinars). — [fellowmind.com/sv-se](https://www.fellowmind.com/sv-se/)
- **HSO** uses Mr Eaves Sans (light 300 display at 40px) plus Asap, with navy #00395F, cyan #079FC3 and coral #F3745B. The hero, "Start with results. AI-native delivery for faster time-to-value.", sits over abstract mosaic art. Its trust line reads "Microsoft Frontier Partner with all six Microsoft Solutions Partner Designations and more than 30 years…". Named client stories serve as hero CTAs ("Read Sonepar's story", "See Hellmann's transformation"). It has a very large mega menu, and buttons are 14px uppercase with 3–5px radii. — [hso.com](https://www.hso.com/)
- **Columbus** pairs FeatureDisplay (serif) with Roobert. The H1, "Digital Value. Human Intelligence", is 58px in deep ultramarine on warm blush #F2E9E5, with an ultramarine 10px-radius CTA. In the test, a cookie wall locked the page below the hero. — [columbusglobal.com](https://www.columbusglobal.com/)
- **Abakion** (Business Central apps and partner) uses the "new-frank" sans. Its H1 is "Use Apps to deploy solutions quicker with Business Central" (50px), shown with stock-style people photography and multicoloured tag buttons (apps / demos / partner / pricing). — [abakion.com](https://abakion.com/)
- **twoday** (Nordic IT services) uses Neue Haas Grotesk Text. Its H1, "Applied AI. Advanced engineering. Lasting impact.", is 120px/400 at −3.6px (−0.03em) over a dark photo (#1B1B1B). The CTA is amber #FFBF00 with an 8px radius and 50px height ("Talk to an expert"). Eyebrows are 12px uppercase at +0.1em ("WHAT WE DO"), and there is a named-expert feature ("Meet Frank, Enterprise Architect"). — [twoday.com](https://www.twoday.com/)
- **9altitudes** pairs Libre Baskerville (display) with Barlow on blue #2449B5. A top trust bar carries Microsoft program claims ("Official Microsoft Inner Circle Partner", "Trusted Microsoft Dynamics 365 Advisors"), and one headline reads "6th year in a row: Microsoft Inner circle partner". The hero is landscape photography with "Your digital journey, your better tomorrow". — [9altitudes.com](https://9altitudes.com/)
- **Excluded:** ev.dk turned out to be an unrelated Danish venue site, not the intended Dynamics partner. — [ev.dk](https://ev.dk/)

### Inferences
- **Display type norms.** Hero headlines at 1440px cluster at 48–64px; statement brands go to 72–120px (Fellowmind, IDEO, Accenture Song, twoday). Tracking at display sizes is consistently negative, from −0.015em to −0.03em (Rippling, Stripe, Linear, Attio, Accenture, twoday). Vercel's −0.06em is a Geist-specific outlier. Line-height for display is 0.95–1.15.
- **Headline length.** Product brands use 2–8 words. Consultancies use 3–10. Stripe's Swedish page shows that a long sentence works only when it is split into a dark lead clause and a muted continuation, which is the two-tone pattern also seen on Linear and Thoughtworks.
- **Type families.** Three recurring systems:
  - One neo-grotesk family across everything: Stripe, Ramp, Rippling, Mercury, twoday, Fellowmind.
  - A grotesk plus a monospace for technical labels: Linear, Vercel, Attio.
  - A sans plus a serif for editorial authority: McKinsey, Bain, Thoughtworks, Accenture Song, Columbus, 9altitudes, and Attio for quotes. This third system is the typical "consultancy" signature.
- **CTAs.** 40–54px tall, one filled primary in the single accent colour plus one quiet secondary. Copy is verb-led and specific ("Kontakta säljteamet", "Talk to an expert", "Boka startsnack"). Radii are either near-square (2–8px) or full pills, never both.
- **Navigation.** Large firms use mega menus (Stripe, Rippling, McKinsey, Bain, HSO, Accenture). Focused firms keep 4–5 flat items (Netlight 4, Fortnox 5, IDEO a single menu button). For a young firm with few pages, a mega menu would look like posturing.
- **Imagery.** Every premium site commits to one of three modes:
  - Real product UI: Linear, Attio, Ramp, Rippling.
  - Real people and real work: IDEO, Netlight, twoday.
  - One cinematic or abstract signature: Stripe's ribbon, Mercury's scene, Thoughtworks' render, McKinsey's radial light.

  None of the 20 uses its full logo lockup as the hero visual. Vercel uses only its mark, as a 3D object.
- **Trust beyond logos** shows up as:
  - Transparency: Mercury's disclaimer, Fortnox's packages.
  - Published research: Thoughtworks, IDEO, McKinsey.
  - Firm facts: Netlight's numbers.
  - Named experts: twoday.
  - Shipping evidence: Linear's changelog.
- **Page length.** Consultancy homepages run ≈5,000–9,000px, product homepages ≈10,000–18,000px. Verdana should aim at the consultancy range of about 8–11 sections.
- **The category gap.** The Dynamics partner sites rely on stock or drone photos, gradient panels and badge-style claims. A Business Central consultancy with Linear/Stripe-level typographic discipline would stand out in its own category even without references.

### Gaps
- Mobile layouts and breakpoints were not measured (desktop 1440px only), and hover/scroll motion was not recorded frame by frame.
- Design galleries (Awwwards, Godly, Land-book, SaaS Landing Page) were not consulted within the time budget. The sample is curated rather than gallery-ranked.
- Cookie overlays covered parts of several heroes, and Columbus content below the hero was blocked. Counts of "logo-like" or "quote-like" elements were heuristic, so only visible, verified items are reported.
- Some computed colours came back as `lab()`/`oklch()` and are described rather than converted to exact hex.
- No well-designed Swedish Business Central specialist site was identified. The Nordic partners measured (Fellowmind, twoday) are broad Microsoft or IT houses.

## 2. Which patterns signal "premium and trustworthy" to enterprise buyers, and which signal "generic AI template"?

### Takeaway
Trust comes from visible craft, upfront disclosure, comprehensive and current content, and real, informative imagery (NN/g). The AI-template look is a recognisable bundle of unchosen defaults: Inter or Geist type, Tailwind's indigo/purple gradients, a centred hero with three rounded icon cards and soft shadows, thin interchangeable line icons, and weightless headlines. Several of these describe Verdana's current site.

### Cited Findings
- NN/g names four credibility factors: (1) design quality, "The first step to garnering trust is to make your site appear legitimate and professional"; (2) upfront disclosure, "people appreciate when sites are upfront with all information that relates to the customer experience" (contact information, costs, policies); (3) comprehensive, correct and current content; (4) connection to the rest of the web (reviews, social media, news). Aurora Harley, 8 May 2016. — [NN/g: Trustworthiness in Web Design](https://www.nngroup.com/articles/trustworthy-design/)
- Users "ignore stock photos of generic people" and "purely decorative images", but "pay attention to information-carrying images". Real staff portraits got 10% more viewing time than the staff bios. Jakob Nielsen, 2010, last reviewed 13 Aug 2026. — [NN/g: Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)
- On the purple default: Tailwind UI shipped `bg-indigo-500` as the demo default, and Adam Wathan apologised for it publicly in August 2025. The article lists the tells as Inter/Roboto/Arial; purple or indigo accents, often as gradients on white; a centred hero with a CTA; three feature boxes with icons; rounded corners on everything; subtle shadows; and subtle fades. It adds the functional gaps (missing form validation, error states and ARIA). Published 26 Oct 2025. — [prg.sh: Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- A second list of tells adds gradient headline backgrounds and gradient "Get Started" buttons, three rounded feature cards in a row with soft shadows, "thin-line and interchangeable" icons that "could illustrate almost any product", a generic dark hero, and weightless headlines such as "Build faster. Ship smarter.". The page carries conflicting dates (Jun 14 and Oct 10, 2026). — [925studios: AI Slop Fonts and Gradients](https://www.925studios.co/blog/ai-slop-design-tells)
- Next.js's official `create-next-app` template imports `Geist` and `Geist_Mono` by default, so Geist is the out-of-the-box Next.js look. — [vercel/next.js create-next-app template layout.tsx](https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/app-tw/ts/app/layout.tsx)
- Google Fonts popularity ranks as of 2026-10-11, where a lower number means more common: Inter #5, Manrope #30, Instrument Serif #33, Plus Jakarta Sans #36, Source Serif 4 #41, Instrument Sans #42, Albert Sans #61, Inter Tight #77, Geist #94, Schibsted Grotesk #100, Newsreader #125, Hanken Grotesk #141, Mona Sans #161, Funnel Display #192, Host Grotesk #417, Familjen Grotesk #522. — [Google Fonts metadata](https://fonts.google.com/metadata/fonts)
- Microsoft's trademark guidelines:
  - Logos, app and product icons and designs "can never be used without an express license".
  - Partner badges are brand assets that require authorization.
  - Names may be used "without alteration in text" to "truthfully and accurately refer to Microsoft and its products".
  - "Don't imply an affiliation, endorsement, sponsorship, or approval".
  - Microsoft names should be less prominent than your own brand unless there is a strategic partnership agreement.

  — [Microsoft Trademark and Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)
- Premium sites in the sample use almost no shadows (one shadowed element each on Ramp, Rippling, Thoughtworks and Bain) and tiny or zero radii on content (McKinsey 2.5px, Bain 2px, Thoughtworks 0, Netlight 0, Stripe 4–6px). — [ramp.com](https://ramp.com/), [mckinsey.com](https://www.mckinsey.com/), [bain.com](https://www.bain.com/), [thoughtworks.com](https://www.thoughtworks.com/), [netlight.com](https://www.netlight.com/), [stripe.com/se](https://stripe.com/se)
- Generic patterns in the Dynamics partner category include stock-style people photography and multicoloured tag buttons (Abakion), drone photography beside an orange→magenta gradient panel (Fellowmind), abstract AI-art-style hero imagery (HSO) and landscape stock-style photography under a claims bar (9altitudes). — [abakion.com](https://abakion.com/), [fellowmind.com/sv-se](https://www.fellowmind.com/sv-se/), [hso.com](https://www.hso.com/), [9altitudes.com](https://9altitudes.com/)
- Verdana's current CSS:
  - `body { font-size: 15px }` with Manrope.
  - Nav links at `font-size: 12px; color: #b6bfce` and the nav CTA at 12px.
  - Brand tokens `--blue: #3d6eff`, `--cyan: #69c9ef`, `--muted: #68717e`.
  - `html { scroll-behavior: smooth }` applied unconditionally.

  — [Verdana repo: src/app/globals.css](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/app/globals.css)
- WCAG thresholds are 4.5:1 for normal text, 3:1 for large text (≥24px, or ≥18.66px bold) and 3:1 for UI component boundaries and states. White text on Verdana's current `#3D6EFF` measures **4.31:1**, which fails AA for normal-size text such as 12–16px button labels. Ratios were computed with the WCAG relative-luminance formula. — [W3C: Understanding SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [W3C: Understanding SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

### Inferences
**Signals of premium and trustworthy (adopt):**
1. **Type with intent:** one deliberately chosen family, large sizes, negative tracking on display and generous body size (17–18px). Typography should do most of the visual work.
2. **One accent colour** used sparingly for action and emphasis. Colour as light (radial glows, a single thin luminous line), never as multi-hue gradient fills.
3. **Specific, verifiable content:** named phases, deliverables, dates and sources. NN/g's "comprehensive, correct, current" and "upfront disclosure" principles translate into a visible method, first-meeting content, a pricing model and company facts.
4. **Real, informative imagery only:** diagrams of the actual work (process, migration path, system map) and later real photos of the actual team. No stock people, AI-generated "colleagues" or office photos.
5. **Editorial layout instead of card soup:** numbered rows, hairline dividers, asymmetric 7/5 or 8/4 splits, and big quiet whitespace. Cards only where content is genuinely parallel and short.
6. **Restraint in effects:** near-zero shadows, small consistent radii, and blur only for the sticky header.
7. **Craft details buyers sense:** tabular figures for dates, consistent 8-pt spacing, sharp focus states, fast loading and no layout shift.

**Signals of a generic AI template (avoid). Several of these are present on today's Verdana site:**
- Inter or Geist as the unexamined default. Geist is literally the `create-next-app` default.
- Any indigo, violet or purple, or purple→blue gradients, including gradient text and gradient buttons.
- A centred hero followed by three identical rounded cards, each with a small line icon in a circle, a two-word title and a grey sentence. This matches the owner's complaint about "thin cards with tiny line icons".
- Small light-grey body text (15px) and 12px nav or CTA labels. Contrast may technically pass, but size and weight read as timid.
- Glassmorphism on content cards, glowing borders everywhere, dot-grid or mesh backgrounds, and floating 3D blobs.
- Marquee logo strips, "Trusted by…" rows, animated counters and star ratings. These are all impossible to fill honestly here, and empty or fake versions destroy trust.
- Weightless slogans ("Framtidens affärssystem", "Smartare. Snabbare.") and superlatives ("ledande", "bäst"). Use specific claims instead.
- Emoji or glyph icons as feature bullets, and stock-illustration packs.
- Microsoft logos, the Business Central product icon or partner badges without authorization. This is a legal problem as well as a credibility one.
- The full logo lockup used as the hero image, as on the current site. Premium sites lead with a claim plus a proof visual.

### Gaps
- NN/g's paid B2B usability report, with its credibility chapter, was not accessed. Only free NN/g articles were used.
- The AI-tells sources are practitioner blogs, not controlled research. They describe a widely shared perception, which is what matters for brand impression, but they are not proof of buyer behaviour.
- No Swedish-specific research on B2B buyer trust signals (for example the expectation of an org.nr or Bolagsverket check) was found in this pass.

## 3. Typography: 2–3 self-hostable pairings for Swedish and long compounds, and whether to keep Manrope

### Takeaway
Replace Manrope. The recommended system is **Schibsted Grotesk Variable** for display, UI and body, with **JetBrains Mono Variable** for technical labels. Two verified alternatives are an editorial pair (**Newsreader Variable** display serif with **Hanken Grotesk Variable**) and a compact engineering option (**Mona Sans Variable** using its width axis). Swedish safety must be engineered into the layout (size caps, `&shy;`, `overflow-wrap`), because `hyphens: auto` cannot be relied on.

### Cited Findings
- **All candidate packages exist on npm, at 5.3.x on 2026-10-11, and all are OFL-1.1.** Axis and weight data are from the Fontsource API:
  - `@fontsource-variable/schibsted-grotesk` 5.3.0: wght 400–900, ital; subsets latin, latin-ext.
  - `@fontsource-variable/jetbrains-mono` 5.3.0: wght 100–800, ital.
  - `@fontsource-variable/newsreader` 5.3.0: opsz 6–72, wght 200–800, ital.
  - `@fontsource-variable/hanken-grotesk` 5.3.0: wght 100–900, ital.
  - `@fontsource-variable/mona-sans` 5.3.0: wdth 75–125, wght 200–900, ital.
  - `@fontsource-variable/inter` 5.3.0: opsz 14–32, wght 100–900.
  - `@fontsource-variable/inter-tight`, `@fontsource-variable/host-grotesk`, `@fontsource-variable/instrument-sans` (wdth 75–100), `@fontsource-variable/source-serif-4` 5.3.1 (opsz 8–60), `@fontsource-variable/manrope` 5.3.0 (wght 200–800, the current font).
  - `@fontsource/instrument-serif` and `@fontsource/ibm-plex-mono` exist only as static packages. There is no `@fontsource-variable` version, and no `selawik` package at all.

  — [npm registry](https://registry.npmjs.org/@fontsource-variable/schibsted-grotesk/latest); [Fontsource API](https://api.fontsource.org/v1/fonts/schibsted-grotesk) (same endpoints queried for each id)
- **Swedish coverage.** Fontsource's `latin` subset declares `unicode-range: U+0000-00FF,…`, which contains Å Ä Ö å ä ö (U+00C5, U+00C4, U+00D6, U+00E5, U+00E4, U+00F6). A Swedish page therefore needs only the latin file. latin-ext is downloaded only if such characters appear. — [jsDelivr: @fontsource-variable/schibsted-grotesk/index.css](https://cdn.jsdelivr.net/npm/@fontsource-variable/schibsted-grotesk/index.css)
- **Registered family names and axis files (verified):**
  - `@fontsource-variable/schibsted-grotesk` → `'Schibsted Grotesk Variable'` (400–900).
  - `@fontsource-variable/hanken-grotesk` → `'Hanken Grotesk Variable'` (100–900).
  - `@fontsource-variable/jetbrains-mono` → `'JetBrains Mono Variable'` (100–800).
  - `@fontsource-variable/newsreader/opsz.css` → `'Newsreader Variable'` with the optical-size axis.
  - `@fontsource-variable/inter/opsz.css` and `@fontsource-variable/source-serif-4/opsz.css` exist.
  - `@fontsource-variable/mona-sans/wdth.css` → `'Mona Sans Variable'` with `font-stretch: 75% 125%`.
  - `@fontsource-variable/instrument-sans/wdth.css` exists.

  — [jsDelivr package listing](https://data.jsdelivr.com/v1/packages/npm/@fontsource-variable/mona-sans@5.3.0?structure=flat); [jsDelivr: mona-sans/wdth.css](https://cdn.jsdelivr.net/npm/@fontsource-variable/mona-sans/wdth.css); [jsDelivr: newsreader/opsz.css](https://cdn.jsdelivr.net/npm/@fontsource-variable/newsreader/opsz.css)
- **Designers, per Google Fonts metadata:**
  - Schibsted Grotesk: Bakken & Bæck, Henrik Kongsvoll.
  - Familjen Grotesk: Familjen STHLM AB.
  - Mona Sans and Hubot Sans: Tobias Bjerrome Ahlin, GitHub, Degarism Studio, Sebastian Carewe.
  - Hanken Grotesk: Hanken Design Co.
  - Newsreader: Production Type.
  - Inter and Inter Tight: Rasmus Andersson.
  - Manrope: Mikhail Sharanda.
  - Geist: designers including Guillermo Rauch and Evil Rabbit.

  — [Google Fonts metadata](https://fonts.google.com/metadata/fonts)
- **Compound-word widths, measured.** Canvas `measureText` at 64px in headless Edge, with each font loaded from its Fontsource woff2 (latin, wght axis). Weight 600 unless noted. "Fit@358" is the largest font size at which the word fits a 358px mobile text column (390px phone minus 16px gutters) with normal tracking.

  | Font | "implementationsprojekt" | vs Manrope | "verksamhetsutveckling" | Fit@358 (impl.) | x-height/cap |
  |---|---|---|---|---|---|
  | Manrope (current) | 738px | 100% | 715px | 31px | 0.761 |
  | Inter | 732 | 99% | 725 | 31 | 0.745 |
  | Inter Tight | 684 | 93% | 673 | 33 | 0.745 |
  | Geist | 733 | 99% | 721 | 31 | 0.761 |
  | Schibsted Grotesk | 732 | 99% | 719 | 31 | 0.756 |
  | Hanken Grotesk | 688 | 93% | 666 | 33 | 0.711 |
  | Host Grotesk | 685 | 93% | 671 | 33 | 0.711 |
  | Familjen Grotesk | 672 | 91% | 657 | 34 | 0.762 |
  | Albert Sans | 705 | 96% | 684 | 32 | 0.711 |
  | Mona Sans (wdth 100) | 744 | 101% | 727 | 30 | 0.723 |
  | Instrument Sans (wdth 100) | 732 | 99% | 708 | 31 | 0.717 |
  | IBM Plex Sans | 716 | 97% | 691 | 32 | 0.733 |
  | Plus Jakarta Sans | 748 | 101% | 720 | 30 | 0.729 |
  | Newsreader (w500) | 672 | 91% | 640 | 34 | 0.659 |
  | Source Serif 4 | 754 | 102% | 725 | 30 | 0.744 |
  | Fraunces | 757 | 103% | 725 | 30 | 0.689 |
  | Instrument Serif (static 400) | 526 | 71% | 500 | 43 | 0.717 |

  — Font files: [jsDelivr @fontsource-variable/hanken-grotesk files](https://cdn.jsdelivr.net/npm/@fontsource-variable/hanken-grotesk@5/files/hanken-grotesk-latin-wght-normal.woff2) (the same path pattern was used for every family)
- **Visual specimen** (my own render: 52px headline "Business Central-implementationer utan överraskningar" in an 862px column on #060C18):
  - Source Serif 4 was the only face that broke the headline into three lines ("Business Central-" / "implementationer" / "utan överraskningar"). The others fit in two.
  - Mona Sans at `font-stretch: 87.5%` set visibly narrower and punchier than at 100%.
  - Host Grotesk and Albert Sans render the hyphen in "Central-implementationer" long enough to read like a dash. That matters for Swedish hyphenated compounds such as "Business Central-partner" or "NAV-uppgradering".
  - All faces rendered ÅÄÖ/åäö correctly from the latin file.

  — Own render in headless Edge using the Fontsource files, for example [jsDelivr: mona-sans wdth woff2](https://cdn.jsdelivr.net/npm/@fontsource-variable/mona-sans@5/files/mona-sans-latin-wdth-normal.woff2) and [jsDelivr: newsreader woff2](https://cdn.jsdelivr.net/npm/@fontsource-variable/newsreader@5/files/newsreader-latin-wght-normal.woff2)
- **MDN on hyphenation:**
  - "Browsers will only hyphenate if this attribute [lang] is present and the appropriate hyphenation dictionary is available."
  - `&shy;` (U+00AD) "marks a place where the browser should break the word if hyphenation is necessary".
  - `hyphens` is Baseline "widely available" since September 2023, with "varying levels of support" for parts of the feature.

  — [MDN: hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
- **Hyphenation test** in headless Edge (Chromium 141 UA, fresh profile, Windows). A 180px box with "implementationsprojekt affärsförståelse verksamhetsutveckling" at 30px produced **no hyphenation** for `lang="sv"`, `"en"` or `"de"` with `hyphens: auto`. Rendered height and overflow were identical to `hyphens: manual` (scrollWidth 338px > 180px). `CSS.supports` returned true for `hyphens: auto`, `text-wrap: pretty`, `text-wrap: balance` and `hyphenate-limit-chars`. Because even English did not hyphenate, the likely cause is unavailable dictionaries in this environment rather than missing Swedish support, but it shows that auto-hyphenation cannot be assumed on real users' Windows Chromium either. — Own test in headless Edge; behaviour reference: [MDN: hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
- **A premium global brand on Swedish:** Stripe's Swedish H1 uses `hyphens: manual`, `overflow-wrap: break-word` and `text-wrap: pretty`. It does not rely on auto-hyphenation. — [stripe.com/se](https://stripe.com/se)
- **Observed premium type systems:**
  - Single family: Stripe (Söhne), Ramp (Lausanne), Rippling (Basel), Mercury (Arcadia/Arcadia Display), twoday (Neue Haas Grotesk).
  - Grotesk plus mono: Linear (Inter + Berkeley Mono), Vercel (Geist + Geist Mono), Attio (Inter Display + JetBrains Mono, plus Tiempos for quotes).
  - Sans plus serif: McKinsey (Bower + McKinsey Sans), Bain (Graphik + Tiempos), Accenture Song (Graphik + GT Sectra Fine), Columbus (FeatureDisplay + Roobert), Thoughtworks (Bitter + Inter).

  — [linear.app](https://linear.app/), [attio.com](https://attio.com/), [mckinsey.com](https://www.mckinsey.com/), [bain.com](https://www.bain.com/), [Accenture Song](https://www.accenture.com/us-en/about/accenture-song-index)

### Inferences
**Verdict on Manrope: replace it.**
- Its measured width gives no advantage: Inter Tight, Hanken and Host are about 7% narrower, Familjen and Newsreader about 9%.
- It is very common (Google Fonts #30) and is the face of the site the owner calls bland.
- Its friendly geometric shapes echo the logo's geometric wordmark closely enough to look like a near-miss rather than a deliberate pairing.
- Contrast with the wordmark is better: the glossy geometric logo against a precise grotesk.
- Changing the typeface is the single cheapest way to signal a new level of quality.

**Pairing 1, recommended: "Nordisk precision". Schibsted Grotesk Variable + JetBrains Mono Variable.**
- Install: `npm i @fontsource-variable/schibsted-grotesk @fontsource-variable/jetbrains-mono`. Families: `'Schibsted Grotesk Variable'`, `'JetBrains Mono Variable'`.
- Why it fits:
  - A Scandinavian editorial grotesk by Bakken & Bæck. It is authoritative and journalistic, clearly not Inter, Geist or Manrope, and less common than all three.
  - Strong ÅÄÖ and good body readability at 17px.
  - The single-family system mirrors Stripe, Ramp and Rippling.
  - The mono gives Linear-style "engineering document" captions for dates, versions and sources ("NAV 2018 · utökad support t.o.m. jan 2028 · Källa"). That signals precision in an ERP context without a third display face.
- Settings:
  - H1 600, −0.03em, line-height 1.02.
  - H2 600, −0.025em, line-height 1.08.
  - H3 600, −0.015em.
  - Body 400, 17–18px, line-height 1.6.
  - Labels in JetBrains Mono 500, 12–13px, +0.02em, sentence case, or uppercase for ≤3-word tags.
- Weakness: no width gain over Manrope (99%), so the compound rules below matter, and there are no weights below 400.

**Pairing 2: "Redaktionell auktoritet". Newsreader Variable (opsz) + Hanken Grotesk Variable.**
- Install: `npm i @fontsource-variable/newsreader @fontsource-variable/hanken-grotesk`, importing `@fontsource-variable/newsreader/opsz.css` and `@fontsource-variable/hanken-grotesk`.
- Roles: Newsreader at 400–500 for H1/H2 and big statements only. Hanken Grotesk for everything else (nav, buttons, body, H3).
- Why it fits:
  - This is the most compound-friendly pair measured (91% and 93% of Manrope's width).
  - The optical-size axis gives Newsreader a refined display cut at large sizes.
  - It mirrors the consultancy signature of McKinsey, Bain, Accenture Song and Columbus.
- Risk: serif on navy can read "bank/law firm". Counter it with crisp grotesk UI, the electric-azure light and at most two serif lines per viewport.

**Pairing 3: "Kompakt ingenjörskonst". Mona Sans Variable (wdth) + JetBrains Mono Variable.**
- Install: `npm i @fontsource-variable/mona-sans`, importing `@fontsource-variable/mona-sans/wdth.css` to get `font-stretch` 75–125%.
- Settings: display at `font-stretch: 88–92%` and 600–700 weight; body at 100% and 400.
- Why it fits:
  - It was designed by GitHub with Degarism Studio, a quiet kinship with the Microsoft developer world (see Gaps).
  - Its width axis is the only verified variable way to compress long Swedish compounds at display size without switching families.
- Risk: condensed widths can feel loud or sporty, so keep body at 100%.

**Avoid as primary:**
- Inter and Geist: AI and Next.js defaults.
- Plus Jakarta Sans: very common in templates (#36).
- Instrument Serif: single weight; too condensed and trendy for body or UI.
- Fraunces and Source Serif 4: widest serifs measured, so the worst for compounds.
- Host Grotesk and Albert Sans: dash-like hyphen.

**Type scale (Pairing 1; desktop at 1440px → mobile at 390px):**
- Display/H1: `clamp(2.125rem, 1.1rem + 3.8vw, 4.5rem)`, which gives 34px → 72px.
- H2: `clamp(1.75rem, 1.2rem + 2.2vw, 3.25rem)`, 28px → 51px.
- H3: `clamp(1.25rem, 1.05rem + 0.6vw, 1.625rem)`, 20px → 25px at 1440px (capped at 26px).
- Lead: `clamp(1.125rem, 1rem + 0.45vw, 1.375rem)`, 18px → 22px.
- Body: 17px desktop, 16px mobile.
- Small/meta: 14px minimum. Never 12px for prose.
- Mono label: 12–13px.
- Use tabular figures (`font-variant-numeric: tabular-nums`) for dates and numbers.

**Swedish compound rules (all three pairings):**
1. **Size every heading for its longest word at that width.** At 600 weight a grotesk needs ≈10.7–11.5px of width per px of font size for "implementationsprojekt", Newsreader ≈10.5px. In a 4-column card grid at 1280px (≈254px inner width) a title must stay ≤22px. On a 358px phone column an H1 containing that word must stay ≤31–34px with normal tracking. −0.03em tracking buys ≈5–6% for this word. If such a word must appear in the H1, lower the mobile minimum to 2rem (32px) and add `&shy;`.
2. **Hand-place `&shy;`** in long words in headings and CTAs (`implementations&shy;projekt`, `verksamhets&shy;utveckling`, `affärs&shy;förståelse`). Keep a small dictionary in the CMS or i18n layer.
3. **Global safety net:** `html[lang="sv"]` plus `h1,h2,h3 { overflow-wrap: break-word; text-wrap: balance; hyphens: manual; }` and `p { text-wrap: pretty; }`. Optionally add `hyphens: auto; hyphenate-limit-chars: 10 4 4` on long-form paragraphs as progressive enhancement only.
4. **Prefer layouts that give headings width:** full-width headline rows, 7/12 text columns and list rows rather than 3–4 narrow cards. Never put a 28px+ title in a column under 320px.
5. **Edit copy for the H1.** Prefer short Swedish words ("Affärssystem som håller") and push long compounds into body text.

### Gaps
- The widths of Mona Sans and Instrument Sans at reduced `font-stretch` were not measured numerically, only seen visually.
- The GitHub–Microsoft ownership link behind Pairing 3's "kinship" rationale was not re-verified in this research.
- Swedish auto-hyphenation was not tested in Firefox, Safari or a normal (non-headless) Chrome profile with downloaded dictionaries.
- Licence review: OFL-1.1 was confirmed via the Fontsource API, but no legal review of embedding was done.
- Whether the logo wordmark uses a known typeface (it looks geometric) is unknown and was not identified.

## 4. Colour: a token palette built from the logo, with WCAG AA contrast

### Takeaway
Build the palette from the logo's actual pixels. Use a near-black midnight navy (`#060C18`), on which the unalterable logo square nearly disappears (≈1.08:1 to its edges); one azure accent (`#37A7FB`) for dark surfaces; one cobalt (`#1949A7`) for light surfaces; silver neutrals; and no purple. Every proposed text pair passes AA, and most pass AAA.

### Cited Findings
- **Logo pixel samples** (1254×1254, fully opaque, minimum alpha 255):
  - Background: a diagonal vignette from slate-navy **#0F1622** (top-left) through #040D23 (centre) to near-black **#000002 / #000101** (right and bottom edges). Most background pixels are ≈#010208.
  - Layout: the V spans y≈316–710 and the white wordmark band y≈765–930. A faint blue glow sits under the wordmark around y≈1060–1080.
  - Dominant foreground colours: deep blues #0A2448, #0B2956, #133768, #143975, #1949A7, #1A4598; bright blues #2678E7, #2988F8, #37A7FB; most vivid #0599F0; whites and silvers #F6F8FB, #ECF2F9, #E5ECF5, #D9E5F3, #C7D7EB, #A6BBD6.

  — [Verdana repo: public/brand/verdana-original.png](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/public/brand/verdana-original.png)
- **Logo hues**, computed from the sampled hex values: #0599F0 ≈202°, #37A7FB ≈206°, #2678E7 ≈215°, #1949A7 ≈220°. The current site token `--blue: #3d6eff` sits at ≈225°, drifting toward indigo. — [Verdana logo file](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/public/brand/verdana-original.png); [Verdana globals.css](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/src/app/globals.css)
- **Contrast ratios**, computed with the WCAG relative-luminance formula. Thresholds: 4.5:1 for normal text, 3:1 for large text and UI.
  - Dark surfaces:
    - #F4F7FB on #02050B 18.99, on #060C18 18.21, on #0B1526 17.00, on #12203A 15.11.
    - #C3CFDF on #060C18 12.40, on #0B1526 11.58.
    - #9AA9BF on #060C18 8.20, on #0B1526 7.66, on #12203A 6.80.
    - #8796AD on #060C18 6.52, on #0B1526 6.09, on #12203A 5.41.
    - #37A7FB on #060C18 7.53, on #0B1526 7.03.
    - #7CC4FF on #060C18 10.43, on #0B1526 9.74, on #0F2A5C 7.43.
    - #A6BBD6 on #060C18 9.97. #2678E7 on #060C18 only 4.59.
    - #02050B text on #37A7FB 7.85. #0A1220 text on #37A7FB 7.22.
    - #F4F7FB on #0F2A5C 12.98, #C3CFDF on #0F2A5C 8.84.
  - Buttons: white on #1949A7 8.23, on #143987 10.69, on #1D5FD8 5.71, but on #2678E7 only **4.27 (fails AA normal)**.
  - Light surfaces:
    - #0A1220 on #F4F6F9 17.31, on #FFFFFF 18.75, on #E8EEF6 16.06.
    - #3D4A60 on #F4F6F9 8.27, on #FFFFFF 8.95.
    - #56637A on #F4F6F9 5.60, on #FFFFFF 6.07, on #E8EEF6 5.20.
    - #5E6B80 on #F4F6F9 4.99.
    - #1949A7 on #F4F6F9 7.60. #1D5FD8 on #F4F6F9 5.27. #0B6FB8 on #FFFFFF 5.28.
    - **#37A7FB on white 2.60 (fails)**. #0A1220 on #C7D7EB 12.81.
  - UI borders: #6B7A90 on #F4F6F9 4.03, #7A889E on #F4F6F9 3.32, #5A6F93 on #060C18 3.85, #55698C on #0B1526 3.29, but #4A5D7E on #060C18 2.94 (fails) and #8A99AE on #F4F6F9 2.68 (fails).
  - Logo edges against candidate surfaces: #0F1622 vs #060C18 1.08, #000002 vs #060C18 1.07, #0F1622 vs #02050B 1.13.
  - Current site: white on #3D6EFF 4.31 (fails AA normal), #68717E on #F7F8FA 4.65, #B6BFCE on #080F20 10.31.

  — [W3C: Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html); [W3C: Understanding SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- **Precedent for this exact palette family:** McKinsey pairs deep navy #051C2C with electric blue #2251FF, cyan #00A9F4 and deep blue #042A76, using a corner radial light (`circle at 100% 0%`) rather than flat gradients. — [mckinsey.com](https://www.mckinsey.com/)

### Inferences
**Dark tokens ("Midnatt"), used for hero, NAV migration, contact and footer:**

| Token | Hex | Use | Verified contrast |
|---|---|---|---|
| `night-950` | #02050B | Footer; deepest bands | Logo edges 1.07–1.13:1, near-seamless |
| `night-900` | #060C18 | Default dark surface; header behind the logo | Logo edges ≈1.08:1, near-seamless |
| `night-800` | #0B1526 | Raised panels on dark | — |
| `night-700` | #12203A | Hover, selected rows, strong dividers | — |
| `cobalt-900` | #0F2A5C | Highlight panel or CTA band on dark | #F4F7FB 12.98:1 |
| `fg-hi` | #F4F7FB | Headings and body on dark (≈ logo white) | 18.21:1 on 900 |
| `fg-mid` | #C3CFDF | Lead and body on dark | 12.40:1 |
| `fg-low` | #9AA9BF | Secondary text | 8.20:1 (6.80 on 700) |
| `fg-faint` | #8796AD | Captions and meta (lightest allowed) | 6.52:1 (5.41 on 700) |
| `azure-400` | #37A7FB | Links, eyebrows, focus ring, primary button fill on dark | 7.53:1 as text; #02050B on it 7.85:1 |
| `ice-300` | #7CC4FF | Hover for azure, small labels | 10.43:1 |
| `silver-300` | #C7D7EB | Metallic hairlines, diagram strokes, chips (dark text on it 12.81:1) | — |
| `silver-400` | #A6BBD6 | Secondary metallic | 9.97:1 |
| `line-dark` | rgba(195,207,223,0.12) | Decorative hairlines (no requirement) | — |
| `control-dark` | #5A6F93 | Input and outline-button borders on 900 | 3.85:1 (UI) |
| `glow-blue` / `glow-vivid` | #2678E7 / #0599F0 | Light effects only, never small text | 4.59:1 on 900, so avoid for text |

**Light tokens ("Porslin"), used for services, explainer, integrations, process and FAQ:**

| Token | Hex | Use | Verified contrast |
|---|---|---|---|
| `paper` | #F4F6F9 | Page background | — |
| `surface` | #FFFFFF | Cards, form fields | — |
| `mist` | #E8EEF6 | Tinted panels (first-meeting box, FAQ) | — |
| `ink-900` | #0A1220 | Headings and body | 17.31:1 on paper |
| `ink-700` | #3D4A60 | Secondary body | 8.27:1 |
| `ink-500` | #56637A | Meta and captions (lightest allowed) | 5.60:1 (5.20 on mist) |
| `cobalt-700` | #1949A7 | Links; primary button fill (white text) | 7.60:1 as text; white on it 8.23:1 |
| `cobalt-800` | #143987 | Primary hover | White on it 10.69:1 |
| `signal-600` | #1D5FD8 | Focus ring on light; large accents | 5.27:1 |
| `line-light` | #DCE3EC | Decorative hairlines | — |
| `control-light` | #6B7A90 | Input borders | 4.03:1 (UI) |

**Usage rules:**
1. Keep every brand blue within hue 200–222°. No indigo, violet, magenta or multi-hue gradients.
2. Azure is never text on light (2.60:1). On light surfaces cobalt carries the accent role.
3. White text never sits on #2678E7 or the current #3D6EFF.
4. Gradients appear only as light: low-alpha radial glows and one thin luminous line. Never as fills on buttons, cards or headline text.
5. The ratio stays roughly 80/15/5: neutrals / navy-silver structure / azure-cobalt action.
6. Focus rings are azure #37A7FB on dark and #1D5FD8 on light, 2px with a 2–3px offset. The current #57B5FF ring is likely below 3:1 on the light #F7F8FA paper, since a similar azure, #37A7FB, measures 2.60:1 on white.

**Logo placement rules (the logo is an unalterable 1254px raster square):**
- Place it only on `night-900` or `night-950`, where its edges disappear. Add a faint top-left radial lift to the header or hero background (≈ rgba(30,46,72,0.35)) so the logo's lighter top-left corner (#0F1622) blends in.
- Do not crop, round, recolour, outline or extract the V. Do not build new lockups with live text.
- Header size: 52–56px on desktop, 44px on mobile. At those sizes the wordmark becomes texture, which is acceptable for an icon-style mark. Use `alt="Verdana"` and a home link label.
- Show the full logo legibly once, as a "brand plate" of 240–320px in the contact/footer area. Never as the hero visual.
- The maximum crisp display size is ≈627 CSS px at 2× DPR.
- Owner action: ask the logo's creator for vector (SVG), transparent and horizontal masters. This is the single biggest brand-presentation upgrade available, and it changes nothing about the logo itself.

### Gaps
- Status colours (success, warning, error) were not defined or contrast-checked.
- The logo square's appearance on light surfaces was not visually tested.
- Banding of large dark gradients on low-end displays was not tested. A 2–3% noise overlay is a common mitigation, but it is unverified here.
- No colour-vision-deficiency simulation was run. The palette is mostly a single hue family, which is low-risk, but this is unverified.

## 5. Layout and motion: grid, spacing, radii, borders, shadows, light effects and restrained motion with reduced-motion support

### Takeaway
Use a 12-column, 1280px editorial grid on an 8-pt spacing scale, with large section padding, small consistent radii, hairlines instead of shadows, and a single signature light effect borrowed from the logo (the "horizon" glow line). Motion is limited to short opacity and translate reveals plus one line-drawing moment, wired through Motion's `MotionConfig reducedMotion="user"` and a CSS `prefers-reduced-motion` fallback.

### Cited Findings
- **Observed container widths:** Stripe 1266px; Rippling 1128px and 1320px; HSO and Columbus 1280px; 9altitudes 1320px; Ramp and Attio 1440px; twoday 1400–1680px. — [stripe.com/se](https://stripe.com/se), [rippling.com](https://www.rippling.com/), [hso.com](https://www.hso.com/), [columbusglobal.com](https://www.columbusglobal.com/), [9altitudes.com](https://9altitudes.com/), [ramp.com](https://ramp.com/), [attio.com](https://attio.com/), [twoday.com](https://www.twoday.com/)
- **Observed grids:** 12-column on Stripe, Vercel, HSO and Columbus; 24-column on Attio; 16-column on Mercury. — [vercel.com](https://vercel.com/), [attio.com](https://attio.com/), [mercury.com](https://mercury.com/)
- **Observed radii:**
  - Near-square: Bain 2px, McKinsey 2.5px, HSO 3–5px, Stripe 4–6px.
  - Moderate: Linear 12px cards with pill buttons, Attio 10px buttons and 12px cards, Ramp 12–16px, twoday 8px.
  - Large: Fortnox 24px.
  - None on cards: Netlight and Thoughtworks.

  — [bain.com](https://www.bain.com/), [mckinsey.com](https://www.mckinsey.com/), [linear.app](https://linear.app/), [fortnox.se](https://www.fortnox.se/)
- **Backdrop blur** appears on only a handful of elements (Ramp 10, twoday 10, Attio 7 element counts). Shadows are near-absent on Ramp, Rippling, Thoughtworks and Bain (one element each). — [ramp.com](https://ramp.com/), [twoday.com](https://www.twoday.com/)
- **Reduced-motion rules found in readable same-origin CSS:** Linear 8, Vercel 8, Ramp 10, Attio 13, Accenture 19, 9altitudes 28. Zero detected on Stripe and McKinsey, possibly because their rules live in cross-origin stylesheets. — [linear.app](https://linear.app/), [vercel.com](https://vercel.com/), [attio.com](https://attio.com/)
- **Motion for React:** with `MotionConfig reducedMotion="user"`, motion components "automatically disable transform and layout animations" while opacity and colour still animate. `useReducedMotion` returns the user's setting for custom fallbacks, such as replacing a slide with a fade or removing parallax. — [Motion: React accessibility](https://motion.dev/docs/react-accessibility)
- **Verdana's installed `motion` 14.1.0** exports `./react` and provides `MotionConfig`, `useReducedMotion`, `useScroll` and `LazyMotion` from `motion/react`. Checked locally. — [Verdana repo: package.json](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/package.json)
- **The logo's own light language:** a horizontal glow line directly under the V (around y≈700 in the 1254px file) and a faint reflection glow under the wordmark (around y≈1060–1080). — [Verdana logo file](C:/Users/tobia/Documents/Codex/2026-10-11/https-github-com-rolle161616-verdana-https/work/Verdana/public/brand/verdana-original.png)

### Inferences
**Grid and spacing:**
- 12 columns. Content max-width 1280px with 32px side padding on desktop, 24px on tablet and 16px on phones. Gutters 24px on desktop, 16px on mobile.
- Default splits are 7/5 (text and visual) and 8/4 (text and margin notes). Use a full-bleed row for one signature visual.
- Spacing scale on 4px: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160.
- Section padding: 128–160px on desktop (hero 160–200px top), 72–96px on mobile.
- Heading to body 24px, body to CTA 32–40px.
- Text measure: 60–70ch for body, 18–24ch for H1.

**Radii:**
- `radius-xs` 4px: chips, kbd, tags.
- `radius-sm` 8px: buttons, inputs.
- `radius-md` 12px: menus, small cards.
- `radius-lg` 20px: media frames and the hero visual.
- `radius-full`: status pills only.
- Content lists use no boxes at all: hairline-separated rows.

**Borders and shadows:**
- 1px hairlines everywhere (`line-dark` / `line-light`). Interactive outlines use `control-*` tokens (≥3:1).
- On dark there are no drop shadows. Raised panels get `night-800` plus an inner top highlight, `box-shadow: inset 0 1px 0 rgba(255,255,255,.06)`.
- On light there are two shadow tokens only, for floating layers: `0 1px 2px rgba(10,18,32,.06)` and `0 12px 32px -12px rgba(10,18,32,.22)`.

**Light effects (the signature, used sparingly):**
1. **Horizon line:** a 1px line, `linear-gradient(90deg, transparent, #37A7FB 50%, transparent)`, plus a blurred duplicate (8–12px blur, 60% opacity). It sits under the hero headline block and above the final CTA, echoing the glow under the logo's V.
2. **Corner light:** one low-alpha radial per dark section, for example `radial-gradient(60% 50% at 12% 0%, rgba(38,120,231,.20), transparent 70%)`. The top-left placement helps the logo blend.
3. **Glass:** only the sticky header after scroll, `rgba(6,12,24,.72)` with `backdrop-filter: blur(12px) saturate(140%)`. Never content cards.

No mesh gradients, dot grids, blobs or glowing card borders.

**Motion spec:**
- Durations: micro 120–160ms (hover/press), reveal 240–320ms, signature 700–900ms (once).
- Easing: `[0.22, 1, 0.36, 1]` for enter, `[0.4, 0, 0.2, 1]` for UI.
- Reveal: opacity 0→1 with y 12→0, once per element at `viewport={{ once: true, amount: 0.2 }}`, 50ms stagger, at most 6 items.
- Signature moments:
  - The horizon line scales on the X axis from 0 to 1 after the H1 fades in.
  - The NAV→BC path line draws with `pathLength` tied to `useScroll`.
  - With reduced motion, both render fully drawn.
- Banned: parallax on text, scroll-jacking, marquees, count-up numbers, typewriter effects, autoplay video, cursor followers.
- Implementation:
  - Wrap the app in `<MotionConfig reducedMotion="user" transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}>` (from `motion/react`).
  - Use `useReducedMotion()` to swap the scroll-drawn path for a static one.
  - Add the CSS fallback: `@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`.
  - Move today's unconditional `html{scroll-behavior:smooth}` inside `@media (prefers-reduced-motion: no-preference)`.

**Tailwind v4 token sketch** (to verify against the installed Tailwind 4.3 docs):
- Inside `@theme`, set `--color-*: initial;` so the default palette, including indigo, is unavailable.
- Define `--color-night-900: #060c18;` and so on for every token above.
- Fonts:
  - `--font-sans: "Schibsted Grotesk Variable", ui-sans-serif, system-ui, "Segoe UI", sans-serif;`
  - `--font-mono: "JetBrains Mono Variable", ui-monospace, "Cascadia Mono", monospace;`
- Radii: `--radius-sm: 8px;` and so on.

**Font loading:** either import the Fontsource CSS in `app/layout.tsx`, or use `next/font/local` pointing at the package's woff2 files (latin and latin-ext) for preloading and automatic fallback metrics.

### Gaps
- Tailwind 4.3's exact `@theme` reset syntax and `next/font/local` behaviour with node_modules paths were not re-verified in official docs during this research.
- The performance cost of `backdrop-filter` and blur glows on low-end devices was not measured.
- Real interaction-to-next-paint (INP) and LCP impact of Motion was not tested.

## 6. Homepage blueprint for Swedish decision-makers, with credible non-fabricated trust elements

### Takeaway
Replace logo-centric marketing with evidence of competence. The hero should make a specific claim and show a system diagram. A sourced Microsoft "fact ledger" stands in for the missing logo strip. The page then walks through services as editorial rows, a plain-Swedish Business Central explainer, a signature NAV→BC migration path with official lifecycle dates, a typographic integration map, a method buyers can audit in advance, an explicit "what you get in the first meeting" promise, FAQ and a calm contact close. All proof is either verifiable at a linked Microsoft source or a commitment Verdana controls.

### Cited Findings
- **Dynamics NAV 2017** follows the Fixed Lifecycle Policy. Start 10/27/2016, mainstream end 1/12/2022 06:59:59 PT, **extended end 1/12/2027 06:59:59 PT** (roughly three months after this research date). — [Microsoft Learn: Dynamics NAV 2017 lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2017)
- **Dynamics NAV 2018:** start 12/1/2017, mainstream end 1/11/2023 06:59:59 PT, **extended end 1/12/2028 06:59:59 PT**. — [Microsoft Learn: Dynamics NAV 2018 lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2018). Third-party pages returned by search express these dates as 11 January 2027 and 11 January 2028 and state that NAV 2016 left extended support on 14 April 2026. Attribution to an individual page among the results was not confirmed. — e.g. [ERP Research: Microsoft Dynamics NAV](https://www.erpresearch.com/en-gb/microsoft-dynamics-nav); [Sanka: Dynamics NAV 2017 and 2018 support ending](https://sanka.com/docs/migrate/eol/dynamics-nav/); [Levelshift](https://levelshift.com/blogs/dynamics-nav-support-ends-plan-your-next-move)
- **Business Central online update cadence:** "two major update cycles per year, with major releases every April and October", and "Minor updates roll out every month". The update period lasts five calendar months, and exact dates differ by country and region. This was seen via a search excerpt of the Learn page. — [Microsoft Learn: Business Central update rollout timeline](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/update-rollout-timeline)
- **Microsoft trademark use:**
  - Product names may be used truthfully in text.
  - Logos and product icons need an express license, and badges require authorization.
  - No implied affiliation or endorsement.
  - Microsoft names should be less prominent than your own brand.

  — [Microsoft Trademark and Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)
- **NN/g:** upfront disclosure (contact, costs, policies) and comprehensive, current content build trust. Stock photos of generic people are ignored, while real staff photos draw attention. — [NN/g: Trustworthy design](https://www.nngroup.com/articles/trustworthy-design/); [NN/g: Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)
- **Observed proof patterns that need no customer logos:**
  - A live factual eyebrow metric (Stripe).
  - A metrics ticker (Ramp).
  - A disclaimer placed up front (Mercury).
  - Firm facts in numbers (Netlight).
  - Research reports (Thoughtworks, IDEO).
  - A named expert spotlight (twoday).
  - Packaging and price guides (Fortnox).
  - Numbered product chapters with "FIG" captions (Linear).

  — [stripe.com/se](https://stripe.com/se), [ramp.com](https://ramp.com/), [mercury.com](https://mercury.com/), [netlight.com](https://www.netlight.com/), [thoughtworks.com](https://www.thoughtworks.com/), [ideo.com](https://www.ideo.com/), [twoday.com](https://www.twoday.com/), [fortnox.se](https://www.fortnox.se/), [linear.app](https://linear.app/)
- **Dynamics partners build trust on Microsoft program status** (HSO: "Frontier Partner… all six Solutions Partner Designations"; 9altitudes: "Inner Circle"). These are claims Verdana cannot currently make. — [hso.com](https://www.hso.com/), [9altitudes.com](https://9altitudes.com/)

### Inferences
**Art direction in one line: "Midnatt & horisont".** Midnight-navy brand moments framed by the logo's own horizon light, alternating with calm porcelain reading sections. Precise Nordic typography carries the page. Diagrams show the work, mono captions cite sources, and there is one azure accent. The intended mood is calm, exact and senior, more "Linear meets McKinsey, in Swedish" than "SaaS template".

**Section rhythm:** dark → dark strip → light → light → **dark (signature)** → light → mist → light → light → dark → darkest. That is four dark brand moments, with long reading content on light. Target page height is ≈7,500–9,500px on desktop.

**S0 Header (sticky, `night-900`)**
- Purpose: orientation and one action.
- Layout: logo square at 52–56px on the left (header 80px tall on desktop, 64px on mobile). Five flat links: Tjänster · Business Central · NAV-migrering · Så arbetar vi · Om oss. The primary button is "Boka samtal" in azure fill with `night-950` text.
- No mega menu. Mobile uses a full-screen sheet with 20px+ link text.
- The header turns to glass only after scroll.

**S1 Hero (dark, about 85–100vh)**
- Purpose: say who it is for, what Verdana does and why to believe it within 5 seconds.
- Layout: 7/5 split.
- Left column:
  - Mono eyebrow in azure: "Microsoft Dynamics 365 Business Central · Sverige". The Microsoft name stays smaller than the brand.
  - H1 of 6–9 words with no long compounds, for example "Affärssystem som bär bolaget – inte bromsar det." or "Business Central, infört med precision."
  - A lead of ≤30 words in `fg-mid`, for example "Vi implementerar, migrerar och förvaltar Business Central för svenska bolag – med en plan ni kan granska innan vi börjar."
  - CTAs: "Boka ett första samtal" (primary) and "Se hur en NAV-migrering går till →" (secondary ghost).
  - Microcopy under the CTAs, only if true: "45 minuter · kostnadsfritt · skriftlig sammanfattning efteråt".
- Right column: a "systemkarta" SVG. Business Central areas (Ekonomi, Försäljning, Inköp, Lager, Projekt, Rapportering) appear as labelled nodes on a fine grid, joined by 1px silver lines, with the horizon glow beneath. It is clearly a diagram, not a fake product screenshot.
- Background: `night-900` with a top-left corner light.
- No big logo.

**S2 Fact ledger (dark strip, replaces the logo strip)**
- Purpose: verifiable relevance and urgency.
- Content: 3–4 ledger rows set in mono labels with tabular dates, each with a "Källa" link:
  - "Dynamics NAV 2017 — Microsofts utökade support upphör i januari 2027 — Källa: Microsoft Learn".
  - "Dynamics NAV 2018 — utökad support upphör i januari 2028 — Källa".
  - "Business Central — två större uppdateringar per år (april/oktober) + månatliga mindre — Källa".
  - A Verdana commitment such as "Svar inom en arbetsdag", only if true.
- Use month precision on the site to avoid time-zone ambiguity.
- Static, no marquee.

**S3 Tjänster (light)**
- H2, for example "Från första analys till stabil drift."
- Four numbered editorial rows (01–04), not cards:
  1. Implementering av Business Central.
  2. Migrering från Dynamics NAV.
  3. Integrationer och tillägg (API, AL-tillägg).
  4. Förvaltning, support och vidareutveckling.
- Each row carries an H3, a one-sentence outcome, three concrete deliverables, a typical scope or duration where honest, and a "Läs mer" link.
- Make the NAV row the featured one (taller, with a mini path diagram).
- Hover: azure left rule and an arrow nudge. No icons in circles.

**S4 Vad är Business Central? (light)**
- Purpose: a plain-Swedish explainer for CFOs and CEOs.
- Left: 120–160 words plus 3 sourced facts (cloud service, April/October cadence, and so on).
- Right: an expanded module map in the hero's visual language.
- Optional comparison table "Dynamics NAV (on-premises) vs Business Central (SaaS)" covering drift, uppdateringar, anpassningar and licens. Every cell must be verified against Microsoft Learn before publishing.

**S5 NAV-migrering (dark signature section)**
- H2, for example "Från NAV till Business Central – utan att tappa historiken."
- Visual: two lines ("Er NAV-miljö" and "Business Central") converging into one point, the geometry of the logo's V. The line draws on scroll, and reduced motion shows it static.
- Five steps with decision gates: Genomlysning → Plan & beslut → Migrering & test → Driftsättning → Förvaltning.
- Side module "Supportstatus per NAV-version": a table linking each version to its Microsoft Learn lifecycle page.
- CTA: "Boka en NAV-genomlysning".

**S6 Integrationer & ekosystem (light)**
- H2, for example "Business Central i ert ekosystem."
- A typographic map grouped by category (Microsoft 365 och Teams, Power BI och rapportering, Power Platform, bank och betalningar, e-handel och EDI, lön och HR). Names appear as text only, with no logos or product icons.
- Each category states how Verdana connects it (standardkoppling, API, eget AL-tillägg).
- List only integrations Verdana can actually deliver.

**S7 Så arbetar vi (mist/light)**
- H2, for example "En metod ni kan granska i förväg."
- Linear-style numbered chapters with mono "FIG"-style captions: Förstudie, Design, Bygg & migrera, Test & utbildning, Go-live & hypercare, Förvaltning.
- Each chapter lists "Ni får" (deliverables), "Vi behöver från er" (customer inputs) and "Beslutspunkt" (go/no-go).
- This is the strongest substitute for references, because it lets buyers judge seniority directly.

**S8 Första mötet (light, mist panel)**
- H2, for example "Det här får ni i första mötet."
- Exact promises (owner to confirm): agenda; duration; who from Verdana attends, by real name; what to prepare; a written summary within N days with a current-state view, top risks and a rough path; and what will not happen (no hard sell, nothing binding).
- CTA.

**S9 Människorna bakom (light, optional until real assets exist)**
- Real names, roles, years of BC/NAV experience, LinkedIn links and real certifications (verify exact Microsoft certification names) with real photos only.
- If photos are not ready, use a signed founder statement in large type instead. Never stock or AI-generated portraits.

**S10 FAQ (light)**
- 6–8 decision-maker questions:
  - Vad kostar en implementation?
  - Hur lång tid tar en NAV-migrering?
  - Kan vi behålla anpassningar?
  - Vad händer med historiken?
  - Hur fungerar licenser?
  - Hur ser supporten ut efter go-live?
  - När passar Business Central inte?
- Honest answers of ≤120 words each, including what the answer depends on.
- Accordion with large hit areas.
- The honest-fit question is itself a trust signal.

**S11 Kontakt (dark, horizon glow, brand plate)**
- H2, for example "Berätta var ni står i dag."
- A short form: Namn, Företag, E-post, Nuvarande system (a select with NAV versions, BC or Annat) and an optional Meddelande.
- Button: "Skicka". The response-time line appears only if true.
- Beside the form: a direct, named contact with phone and email, and the full logo as a 240–320px brand plate.

**S12 Footer (`night-950`)**
- Four short columns, roughly 20–40 links.
- Company facts: legal name, org.nr, address, VAT. Plus privacy, cookie settings and a trademark notice line (for example "Microsoft, Dynamics 365 och Business Central är varumärken som tillhör Microsoft-koncernen.").

**Credible, non-fabricated trust kit:**
1. Sourced Microsoft facts, each with a link.
2. An auditable method with deliverables and decision gates.
3. A first-meeting promise.
4. Pricing-model transparency, such as a fixed price for the förstudie or a published day-rate range, if the owner commits.
5. Real people, names and certifications.
6. Swedish company facts.
7. A response-time commitment.
8. A genuinely useful guide, for example a checklist for going from NAV to Business Central, which also feeds SEO.
9. An honest-fit statement.
10. The site's own craft: speed, accessibility and zero typos.

**Hard "never" list:**
- Logo strips, testimonials, counters, star ratings, "Trusted by" rows.
- Fake or "illustrative" case studies that are not clearly labelled as hypothetical examples.
- Microsoft partner badges or the Business Central product icon without authorization.
- Stock photos of people, AI-generated people or office photos.
- Superlatives ("ledande").

### Gaps
- Verdana's actual Microsoft partner status, team bios, certifications, pricing model, response-time capacity and first-meeting format are unknown. Every promise above needs owner confirmation before publishing.
- Microsoft's rules for using Business Central screenshots (as opposed to logos) were not researched. Until they are, the blueprint uses original diagrams instead of product screenshots.
- Swedish legal requirements for company information on websites (for example under the e-commerce act, e-handelslagen) were not verified.
- The Business Central update-cadence quotes come from a search excerpt of the Learn page, not a full fetch. The NAV 2016 date comes from third parties only.
- Facts for the explainer and comparison table (cloud/SaaS details, Microsoft 365 integration, licensing) still need sourcing from Microsoft Learn.
- No A/B or conversion data exists for these patterns with Swedish ERP buyers. The blueprint is evidence-informed, not tested.
