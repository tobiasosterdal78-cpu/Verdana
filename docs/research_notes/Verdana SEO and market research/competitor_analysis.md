# Swedish Business Central partner websites: positioning and SEO (checked 2026-10-11)

## Which official sites were analysed, how, and which additional competitors were found?

### Takeaway
All eight named competitors have live Swedish-language sites, but three no longer live at the domain given in the brief:
- nabsolutions.se redirects to nabsolutions.com/se/.
- fellowmind.se redirects to fellowmind.com/sv-se/.
- NaviPro is now Evidi, at evidi.com/se/.

Two of the eight are now part of other businesses:
- BrightCom says it is part of Exsitec.
- Modia is the renamed Goodfellows Business.

Seven more Swedish competitors were added:
- Navet (Aderian), Enqore, Effekt and Yellow Solution are BC-focused peers.
- Basecloud is a small BC specialist.
- CGI and Azets are large firms with Swedish BC pages.

Columbus has no Swedish-language site, and goodfellows.se now only routes visitors on to Modia and Upheads.

### Cited Findings
_Checked 2026-10-11. Raw HTML was fetched with curl (desktop Chrome user agent, Accept-Language sv-SE) and the SEO fields were parsed from it. Home pages were also rendered in headless Microsoft Edge._

**Official URLs after redirects**

| Competitor | Brief URL → final URL | Platform signals | Source |
|---|---|---|---|
| NAB Solutions | nabsolutions.se → 301 → https://nabsolutions.com/se/ | WordPress 7.1.3, Yoast, nginx | [Source](https://nabsolutions.com/se/) |
| Fellowmind | fellowmind.se → www.fellowmind.se → https://www.fellowmind.com/sv-se/ | Optimizely (Episerver), Cloudflare; HEAD requests get 403, GET works | [Source](https://www.fellowmind.com/sv-se/) |
| Modia | https://modia.se/ (no redirect) | Vite single-page app; 2 KB HTML shell | [Source](https://modia.se/) |
| Exsitec | exsitec.se → 301 → https://www.exsitec.se/ | HubSpot CMS, Cloudflare | [Source](https://www.exsitec.se/) |
| BrightCom | brightcom.se → 301 → https://www.brightcom.se/ | HubSpot CMS | [Source](https://www.brightcom.se/) |
| InBiz | https://inbiz.se/ | WordPress + Yoast | [Source](https://inbiz.se/) |
| Evidi / NaviPro | https://www.evidi.com/ → https://www.evidi.com/se/ | Custom stack, nginx | [Source](https://www.evidi.com/se/) |
| Sherpas | https://sherpas.se/ | Umbraco | [Source](https://sherpas.se/) |

**Ownership and brand changes**
- **BrightCom:** the footer reads "BrightCom Solutions part of Exsitec", with a Linköping address [Source](https://www.brightcom.se/). Exsitec's BC page links "Priser" to BrightCom's price page [Source](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central).
- **Modia:**
  - Its page is titled "Goodfellows Business är nu Modia | Frågor & svar om namnbytet | Modia" [Source](https://modia.se/ett-nytt-kapitel).
  - goodfellows.se/tjanster/affarssystem/ 301-redirects to modia.se [Source](https://goodfellows.se/tjanster/affarssystem/).
  - Goodfellows Infra AB merged into Upheads (press release dated 2025-11-10) [Source](https://upheads.se/nyheter/pressmeddelande-sammanslagning-med-goodfellows-infra-ab/).
  - goodfellows.se is now a page that routes visitors to the two companies [Source](https://goodfellows.se/).
- **Evidi:** /se/navipro is titled "Evidi | NaviPro har blivit Evidi!" [Source](https://www.evidi.com/se/navipro).
- **Navet:** the home page shows an Aderian brand bar and an H2 beginning "Aderian stärker sitt varumärke" [Source](https://navet.se/).
- **Sherpas:** it says it is part of Serpentin, which has about 160 employees. The contact page gives a head office in Skellefteå and a Stockholm office [Source](https://sherpas.se/om-oss/) [Source](https://sherpas.se/kontakt/).

**How additional competitors were found**
- Microsoft's partner directory API was queried with product code `Dynamics365Business` and country SE.
  - Five pages gave 90 unique entries. Many were non-Swedish firms, so the country filter is unreliable.
  - Entries with a Swedish location included:
    - NAB Solutions AB (Umeå), BrightCom Solutions AB (Jönköping) and Fellowmind Sweden AB (Malmö).
    - Aderian Group AB (Malmö) and Information & Business Solutions Svenska AB (Uppsala), whose description begins "InBiz levererar…".
    - Enqore AB (Karlstad), Yellow Solution AB (Jönköping), Effekt SPU AB (Kista), Cielo365 AB (Malmö), Tegra (Malmö) and Dizparc AB (Sundsvall).
    - ECIT Services AB, Softronic AB, Columbus Global (Göteborg), twoday A/S (Göteborg) and EG A/S (Linköping).
  - [Source](https://main.prod.marketplacepartnerdirectory.azure.com/api/partners?filter=sort%3D0%3BpageSize%3D18%3BpageOffset%3D0%3Bcountry%3DSE%3BonlyThisCountry%3Dtrue%3Bradius%3D100%3BlocationNotRequired%3Dtrue%3Bproducts%3DDynamics365Business)
- Other discovery sources:
  - Dynamicweb's partner profile for Navet (Helsingborg, plus Malmö, Göteborg and Stockholm) [Source](https://dynamicweb.com/partners/navet).
  - Dynamicweb's profile for Goodfellows [Source](https://dynamicweb.com/partners/goodfellows).
  - ERP Research's BrightCom profile [Source](https://www.erpresearch.com/dynamics-partners/brightcom-solutions-ab).
- Added and analysed: Navet [Source](https://navet.se/), Enqore [Source](https://enqore.se/), Effekt [Source](https://effekt.se/), Yellow Solution [Source](https://yellowsolution.se/), Basecloud [Source](https://www.basecloud.se/), the CGI BC page [Source](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central) and the Azets BC page [Source](https://www.azets.com/sv-se/tjanster/it-losningar/business-central).
- **Columbus:** www.columbusglobal.com is in English (en-GB, no hreflang). /sv-se returns 404, and columbus.se does not resolve [Source](https://www.columbusglobal.com/). The company does advertise Swedish BC jobs [Source](https://career.columbusglobal.com/jobs/5702251-affarskonsult-inom-business-central-till-columbus-dynamics-malmo).
- **Excluded:**
  - FollowU: the site is a careers site [Source](https://www.followu.se/).
  - Cielo365: cielo365.se does not resolve.
  - Tegra: tegra.se returns no title or H1 in raw HTML.

**Method**
- **Pages checked:**
  - 98 URLs across the eight named competitors.
  - 23 URLs for Navet, Goodfellows, Basecloud, CGI, Azets and Columbus.
  - 9 URLs for Enqore, Yellow Solution and Effekt.
- **Fields extracted from each page:**
  - Status and redirects.
  - `<title>`, meta description, robots, canonical and hreflang.
  - H1/H2/H3 headings.
  - JSON-LD `@type` values, with `@graph` walked.
  - Word counts, links, tel/mailto links, forms, CTAs and image alt attributes.
- **Sitemaps:** found via robots.txt or the default paths and expanded recursively.
- **Rendering:** 13 home or BC pages were rendered once each at 390×844 (mobile) and 1440×900 (desktop), with no throttling.

### Inferences
- The field is consolidating into groups: Exsitec/BrightCom, Aderian/Navet, Serpentin/Sherpas, Modia/Upheads, and the rename of NaviPro to Evidi. Recent renames leave behind legacy pages, redirect chains and mixed messaging, which show up below as technical weaknesses.
- The closest benchmarks for Verdana's positioning are the sites that focus on BC rather than wide Microsoft or IT portfolios:
  - Modia, BrightCom, InBiz, Yellow Solution and Basecloud.
  - Partly Enqore and Effekt.

  The big groups mostly set expectations for how much content a site carries.

### Gaps
- **No ranking data.** Google rankings for "business central partner", "business central konsult", "business central implementation" and "navision" were not checked: there was no rank-tracking tool, and Google results were not scraped. In these notes, "competing for" a term means a site targets it in titles, H1s, slugs or copy, not that it ranks.
- **Partner directory limits.**
  - The `solutionsPartnerDesignations` values (for example "BAGCompetency") were not mapped to Microsoft's official designation names.
  - A firm missing from the first 90 results is not evidence of anything.
- **Not analysed:** Cielo365, Tegra, Dizparc, ECIT, Softronic, twoday, EG, Crayon and ALSO. GNS and Nexer were considered earlier and left out because no BC-focused Swedish pages were found; that check is not documented in detail.

---

## How does each competitor position itself (target customers, industries, main BC services)?

### Takeaway
Competitors fall into three positioning patterns.

1. **Broad Microsoft or IT providers with BC as one product line:** Fellowmind, Exsitec, Evidi, Sherpas, Navet, CGI, Azets and partly Enqore.
2. **BC-centred firms with a sharp hook:**
   - BrightCom: e-commerce and retail.
   - Modia: a target price with a refund promise, and a challenger tone.
   - InBiz: Navision/NAV heritage.
   - NAB: "AI och affärssystem" plus a fixed-price entry offer.
   - Yellow Solution and Basecloud: plain BC-specialist messaging.
3. **Packaged entry offers for SMEs:**
   - NAB's "Business Central Start", for 1–20-user companies leaving Fortnox or Spiris.
   - Fellowmind's "Ready, Set, BC!".
   - BrightCom's "Launch".
   - Enqore's "Business Central 2 Go".

Almost everyone calls themselves a "partner". Only Enqore has a dedicated page that positions it as a "Business Central-konsult".

### Cited Findings
_Checked 2026-10-11._

| Competitor | Positioning wording (H1 / title) | Target customers stated | Industries | Main BC services observed | Sources |
|---|---|---|---|---|---|
| NAB | H1 "AI och affärssystem som skapar resultat — varje dag" | Companies with 1–20 users that have outgrown Fortnox or Spiris (BC Start); wider ERP and CRM clients | 9 main industry pages + 12 sub-industry pages | Fixed-price BC Start, ERP/CRM, Copilot/AI, Power BI, licences, förvaltning tiers | [home](https://nabsolutions.com/se/), [BC Start](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/), [branscher](https://nabsolutions.com/se/branscher/), [priser](https://nabsolutions.com/se/om-nab-solutions/priser/) |
| Fellowmind | Swedish home title in English: "Fellowmind uses technology to create meaningful connections". BC H1 "Effektivisera verksamheten med Microsoft Dynamics 365 Business Central" | SMEs ("små och medelstora företag", BC meta description); groups rolling out in 30+ countries | 13 industry pages | Ready, Set, BC! packages; free 2-hour needs analysis; BC for groups; support | [home](https://www.fellowmind.com/sv-se/), [BC](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/), [scalable rollout](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/scalable-rollout/), [branscher](https://www.fellowmind.com/sv-se/branscher/) |
| Modia | Rendered H1 "Sluta chansa. Fatta modiga beslut med trygghet." Title "Business Central-partner för växande företag \| Modia" | "växande företag" | No separate industry pages seen | Implementering; AI, Copilot & automatisering; Långsiktig förvaltning & support; Anpassad utveckling & integration; target price ("målpris") with refund | [home](https://modia.se/), [tjänster](https://modia.se/tjanster), [partnerskap](https://modia.se/partnerskap) |
| Exsitec | H1 "Vi skapar IT-lösningar som funkar tillsammans"; "600 experter" | SMEs (BC meta description); CEO and CFO role pages | 13 industry pages | BC is one of several ERPs (Visma Net, Business NXT, Control Edge, Visma Business, BC); integrations; BI (Qlik, Power BI, Fabric) | [home](https://www.exsitec.se/), [BC](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central) |
| BrightCom | Title "Dynamics 365 Business Central-partner i Sverige \| BrightCom". H1 "ERP och integrationer för e-handel i Microsoft Dynamics 365 Business Central" | E-commerce and retail ("Över 150 e-handels- och retailföretag i Norden") | E-commerce, retail, fashion (Fashion ERP, K3 Pebblestone) | BC implementation, BrightCom Launch, 12 own apps and integrations, NAV upgrades, licences | [home](https://www.brightcom.se/), [demo](https://www.brightcom.se/dynamics-business-central/demo/), [Launch](https://www.brightcom.se/business-central-fast-pris-e-handel) |
| InBiz | Title "Din ERP-partner för Microsoft Dynamics NAV \| InBiz". H2 "Från Navision Financials till Business Central" | Existing NAV customers; distribution, service and manufacturing companies | Distribution and production pages | NAV support, including old versions; BC; training. "13 kollegor", "ett 40-tal kunder" | [home](https://inbiz.se/), [om InBiz](https://inbiz.se/microsoft-partner/) |
| Evidi | Home H1 "Tillsammans bygger vi framtidens IT-lösningar". The ERP page calls Evidi "den ledande Microsoft-partnern i Norden" | Not specified for BC | 7 industry URLs in the sitemap | ERP lifecycle (advisory → implementation → management); BC product page; BC vs F&O guide | [home](https://www.evidi.com/se/), [ERP](https://www.evidi.com/se/leveranser/erp-affarssystem), [BC](https://www.evidi.com/se/produkter/microsoft-dynamics-365-business-central) |
| Sherpas | Home H1 "Vi hjälper företag och organisationer med data, system och digitalisering." | Not specified | Not specified | BC is one of 7 platforms. They implement, integrate, support and upgrade BC "(tidigare känt som NAV eller Navision)"; own InExchange for BC app; fixed-price current-state analysis | [home](https://sherpas.se/), [BC](https://sherpas.se/plattformar/business-central/), [InExchange](https://sherpas.se/inexchange-for-bc/), [nulägesanalys](https://sherpas.se/tjanster/nulagesanalyser/) |
| Navet | Title "Navet – Microsoft Dynamics 365 & Business Central Partner"; meta description "komplett Microsoft-partner" | Not specified | Rental (EQM 365 Rental), process manufacturing | BC, D365, Power BI, Power Platform, NavetEdge integration product, webshop | [home](https://navet.se/), [EQM](https://navet.se/tjanster/eqm-365-rental) |
| Enqore | H1 "Experter på Microsofts affärsapplikationer och avancerad dataanalys". Meta description lists Göteborg, Karlstad, Malmö, Stockholm, Uppsala and Linköping | Not specified | Industry pages under BI | BC-konsult, BC implementation ("Business Central 2 Go"), agents and Copilot in BC, BC + Power BI | [home](https://enqore.se/), [BC-konsult](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/), [BC 2 Go](https://enqore.se/erp-hos-enqore/business-central/business-central-2-go/) |
| Effekt | Rotating H1 beginning "Digital styrka för en smartare affär" | Not specified | Not specified | BC, Power BI, Copilot articles, BC training catalogue | [home](https://effekt.se/) |
| Yellow Solution | Title "Yellow Solution - Business central"; meta description "Yellow Solution är experter på Dynamics 365 Business Central…" | Not specified | Not specified | ERP solutions, integrations and advice (meta description) | [home](https://yellowsolution.se/) |
| Basecloud | H1 "Basecloud är specialister på affärssystemet Business Central" | Companies that want to grow and automate (meta description) | Not specified | BC services and own apps | [home](https://www.basecloud.se/) |
| CGI | H1 "Microsoft Dynamics 365 Business Central" | Not specified | Not specified | Project delivery and förvaltning; ISV solutions (LS Retail, Continia, ExFlow, Tasklet Factory); NAV förvaltning | [BC](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central) |
| Azets | H1 "Business Central – allt-i-ett-lösningen för företags resursplanering" | Not specified | Not specified | BC modules, Copilot, NAV upgrade | [BC](https://www.azets.com/sv-se/tjanster/it-losningar/business-central) |

### Inferences
- "Partner" is the default word. Framing yourself as a consultancy ("konsult", independent advice, senior specialists) is much less crowded; only Enqore claims it on a dedicated page.
- Several competitors chase the SME segment that is moving off Fortnox, Visma or Spiris with packages and fixed prices: NAB, Fellowmind, BrightCom and Enqore. That segment is likely price-sensitive and comparison-driven.
- Few brands differentiate on tone. Modia's challenger copy is the clear exception: its About-page H1 is "Vi utmanar en trött bransch." [Source](https://modia.se/om-oss). Most other copy is generic benefit language.

### Gaps
- Target-customer and industry statements are taken from site copy. The actual customer mix was not verified.
- Industry focus for Modia, Sherpas, Yellow Solution and Effekt was not checked beyond their home and service pages.

---

## What are the exact SEO elements of the homepage and the main BC, price and NAV-migration pages?

### Takeaway
Basic metadata is mostly sound: unique titles of 45–67 characters, self-referencing canonicals and one H1 on most pages. Several sites have concrete errors:
- **Modia:** the raw HTML is identical on every URL, with the same title and description, no canonical, no H1 and no text, until JavaScript runs.
- **Sherpas:** the home page title is "Home - Sherpas" and the description is "Home".
- **Fellowmind:** the Swedish home page has an English title and H1.
- **Evidi:** titles are cut off with "...", and no page carries JSON-LD.
- **Missing JSON-LD on service pages:** Exsitec, BrightCom, Evidi and Sherpas.
- **NAB:** no meta description on the "byta affärssystem" page.
- **Navet:** inner pages have no meta descriptions, and titles run to 99–135 characters.
- **Effekt:** the Swedish home page canonicalises to the English one.

Structured data beyond Yoast defaults is rare. FAQPage appears on Fellowmind, Navet, Enqore and Azets; Service on Fellowmind, CGI and Azets.

### Cited Findings
_Checked 2026-10-11. Values come from raw HTML unless marked "rendered". Lengths are in characters._

#### NAB Solutions
- **Common to all 15 NAB pages checked:**
  - Robots "index, follow, max-image-preview:large…", a self-canonical, no hreflang.
  - A Yoast JSON-LD graph: WebPage, BreadcrumbList, WebSite + SearchAction, and Organization with a logo but no telephone or sameAs.
  - Articles add Article + Person. The home and BC Start pages add FAQ microdata (Question/Answer).

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/se/](https://nabsolutions.com/se/) | "AI och affärssystem, ERP & CRM som skapar resultat — varje dag" (62) | "AI och affärssystem, ERP & CRM som skapar resultat. Vi framtidssäkrar ditt ERP & CRM med Microsoft AI och nästa generations teknik." (131) | "AI och affärssystem som skapar resultat — varje dag" | 14 H2s, including "ERP till fastpris – från 50 000 kr", "Varför ska du välja Copilot och NAB?", "Officiella Copilot siffror från Microsoft", "Vanliga frågor och svar"; 2,149 words; modified 2026-08-04 |
| ERP hub | [/se/erp/](https://nabsolutions.com/se/erp/) | "Upptäck ett affärssystem som växer med ditt företag – Microsoft ERP" (67) | 140 chars | "Upptäck framtidens affärssystem (ERP)" | |
| BC | [/se/erp/vad-ar-microsoft-dynamics-365-business-central/](https://nabsolutions.com/se/erp/vad-ar-microsoft-dynamics-365-business-central/) | "Vad är Microsoft Dynamics 365 Business Central? - NAB" (53) | 130 chars; ends mid-sentence ("…ekonomi, produktion,") | "Vad är Microsoft Dynamics 365 Business Central?" | 11 H2s, including "Därför ska du välja Business Central" and "Vad kostar det?"; 2,067 words; no og:image |
| BC fixed price | [/se/erp/erp-till-fastpris-business-central-start/](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/) | "Business Central till fast pris - Modernt ERP Från 50 000 kr" (60) | "Byt från Fortnox eller Visma till Microsoft Business Central. Fast pris från 50 000 kr och en snabb väg till ett modernt ERP." (125) | "Business Central fast pris – ERP Från 50 000 kr" | H2s "För vilka företag passar Business Central Start?", "Utöka med tilläggspaket", "Redo att ta första steget?"; published 2026-07-07 |
| Prices | [/se/om-nab-solutions/priser/](https://nabsolutions.com/se/om-nab-solutions/priser/) | "Priser Dynamics 365, Power Platform och Copilot AI" (50) | 110 chars | "Våra priser" | H2s include "Förvaltningsavtal" and "Licenspriser"; modified 2026-09-18 |
| NAV migration | [/se/erp/navision-microsoft-dynamics-nav-och-vagen-vidare-till-business-central/](https://nabsolutions.com/se/erp/navision-microsoft-dynamics-nav-och-vagen-vidare-till-business-central/) | "Navision till Dynamics 365 Business Central: guide för företag" (62) | "Så går du från Navision/Dynamics NAV till Dynamics 365 Business Central: skillnader, moln, support och en trygg migreringsplan med NAB Solutions." (145) | "Navision (Microsoft Dynamics NAV) och vägen vidare till Business Central" | 10 H2s (history, differences, when moving makes strategic sense, how NAB helps); 3,626 words; Article with author; published 2026-05-04 |
| Switching ERP | [/se/ar-det-dags-att-byta-affarssystem/](https://nabsolutions.com/se/ar-det-dags-att-byta-affarssystem/) | "Är det dags att byta affärssystem? - NAB SVERIGE" (48) | **none** | "Är det dags att byta affärssystem?" | No H2; gated guide form; modified 2026-09-09 |
| Choosing a partner | [/se/erp/microsoft-partner-for-business-central-sa-valjer-du-ratt-erp-partner/](https://nabsolutions.com/se/erp/microsoft-partner-for-business-central-sa-valjer-du-ratt-erp-partner/) | "Vad är en Microsoft partner och hur kan det gynna ditt företag?" (63) | 135 chars | "Microsoft partner för Business Central – så väljer du rätt ERP-partner" | Title and H1 don't match; 4,251 words; published 2026-02-04, modified 2026-04-15 |

#### Fellowmind
- **Common to the pages checked:**
  - lang "sv", no robots meta, a self-canonical.
  - hreflang to 2–7 locale versions.
  - JSON-LD Organization (Malmö address) + Article on most pages; no BreadcrumbList.

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/sv-se/](https://www.fellowmind.com/sv-se/) | "Fellowmind uses technology to create meaningful connections" (59, English) | "Vi är en ledande Microsoftpartner i Europa som erbjuder djup branschkunskap och personlig vägledning med Microsofts molntjänster för hela affärsplattformen" (155) | "Creating Connected Companies" (English) | hreflang x-default, en, nl-NL, pl-PL, da-DK, sv-SE, fi-FI; 1 H2 ("Inspiration"); 657 words |
| BC | [BC page](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/) | "Effektivisera verksamheten med Dynamics 365 Business Central" (60) | "Komplett ERP-lösning för små och medelstora företag. Lita på en heltäckande affärsapplikation med effektiv automatisering. Vi hjälper dig gärna framåt." (151) | "Effektivisera verksamheten med Microsoft Dynamics 365 Business Central" | H2s "Ett ERP-system i molnet gör att du blir mer flexibel" and "Våra kunder"; JSON-LD FAQPage (5 questions), Service, Quotation, Person, Article, Organization; 2,204 words |
| ERP hub | [ERP hub](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/) | "Business Applications \| ERP-system anpassat efter dina behov" (60) | 145 chars | Starts "Optimera dina affärsapplikationer och processer med ett modernt ERP-sy[stem]…" (truncated in notes) | CollectionPage + Service; Inner Circle claim |
| BC landing page | [landing](https://www.fellowmind.com/sv-se/business-central-molnbaserad-affarsplattform/) | "BC cloud migration" (18) | 154 chars | Starts "En affärsplattform i molnet – säkert, skalbart och redo för din tillv[äxt]…" (truncated in notes) | No H2 |
| Package / price | [Ready, Set, BC!](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/ready-set-bc/) | "Ready, Set, BC! – paketering av D365 Business Central" (53) | "Är ditt företag i tillväxt och kräver ett system som kan hålla jämna steg? Ready, Set, BC! för växande företag som vill ha en kraftfull affärsplattform." (152) | "Affärssystemet som växer med dig" | No H2; package prices in body text (see the content section) |
| Free needs analysis | [behovsanalys](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/gratis-behovsanalys-business-central/) | "Gratis behovsanalys av Business Central med Fellowmind" (54) | 132 chars | "2 timmar gratis behovsanalys av Business Central" | |
| NAV migration | [NAV article](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/varfor-byta-till-dynamics-365-business-central-och-vad-ar-skillnaden-mot-dynamics-nav/) | "Varför byta till Dynamics 365 Business Central?" (47) | "Sitter du kvar i Dynamics NAV? Microsofts Dynamics 365 Business Central är affärssystemet för mindre och medelstora företag som vill ta steget ut i molnet." (155) | "Varför byta till Dynamics 365 Business Central och vad är skillnaden mot Dynamics NAV?" | H2s include "Ditt sista stora uppgraderingsprojekt"; Article datePublished 2021-09-14, dateModified 2026-05-18 |
| Index pages | [tjänster](https://www.fellowmind.com/sv-se/tjanster/), [cases](https://www.fellowmind.com/sv-se/cases/), [branscher](https://www.fellowmind.com/sv-se/branscher/) | "Tjänster \| Fellowmind" (21); "Kundcase \| Fellowmind Sverige" (29); "Vårt jobb är att förstå din verksamhet" (38) | 151 / 120 / 155 chars | "Till din tjänst, varje steg på vägen" / "Kundcase" / "Branschfokus" | Main content in raw HTML: 422 / 22 / 59 words |

#### Modia
- **Raw HTML** (what a crawler that does not render JavaScript receives):
  - Every URL returns the same ~2 KB shell.
  - Title "Business Central-partner för växande företag | Modia" (52).
  - Description "Skapa struktur, förutsägbarhet och bättre beslutsunderlag med Microsoft Dynamics 365 Business Central. Implementering, AI och långsiktigt partnerskap i ett." (156).
  - No canonical, no H1, no body text.
  - JSON-LD ProfessionalService + LocalBusiness (Göteborg, +46313635900) + WebSite.
  - A request with a Googlebot user agent to /kunskapsbank/vad-kostar-ett-affarssystem got the same shell: 2,110 bytes, 0 H1.
  - [Source](https://modia.se/) [Source](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem)
- **Rendered (headless Edge):**
  - Each route sets its own title, description, canonical and H1.
  - Every rendered page also has a decorative ticker marked up as an H2: "Tryggheten bakom modiga affärsbeslut" with the words run together.

| Page (rendered) | URL | Title (len) | Meta description (len) | H1 |
|---|---|---|---|---|
| Home | [/](https://modia.se/) | Same as the shell (52) | Same as the shell (156) | "Sluta chansa. Fatta modiga beslut med trygghet." |
| Services | [/tjanster](https://modia.se/tjanster) | "Business Central-tjänster \| Implementation, support & rådgivning \| Modia" (72) | "Implementering, AI, Copilot, integrationer och långsiktig förvaltning av Microsoft Dynamics 365 Business Central för växande företag." (133) | "Bättre beslut med Business Central" |
| Price article | [/kunskapsbank/vad-kostar-ett-affarssystem](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem) | "Vad kostar ett affärssystem egentligen? \| Kunskapsbank \| Modia" (62) | "En transparent genomgång av alla kostnader — licenser, implementering, anpassning och löpande drift. Inga dolda avgifter." (121) | "Vad kostar ett affärssystem egentligen?" (H2s: Kort svar / De fyra kostnadsdelarna / Varför varierar priset så mycket? / Så undviker du oväntade kostnader / Vanliga frågor…; 342 words) |
| Upgrade article | [/kunskapsbank/dags-att-uppgradera-affarssystem](https://modia.se/kunskapsbank/dags-att-uppgradera-affarssystem) | "När är det dags att uppgradera ditt affärssystem? \| Kunskapsbank \| Modia" (72) | 119 chars | "När är det dags att uppgradera ditt affärssystem?" |
| Choosing a partner | [/kunskapsbank/hur-valjer-du-ratt-business-central-partner](https://modia.se/kunskapsbank/hur-valjer-du-ratt-business-central-partner) | "Hur väljer du rätt Business Central-partner i Sverige? \| Kunskapsbank \| Modia" (77) | 125 chars | "Hur väljer du rätt Business Central-partner i Sverige?" |
| Partnership | [/partnerskap](https://modia.se/partnerskap) | "Partnerskap för Business Central \| Långsiktig support & utveckling \| Modia" (74) | "Målpris, samma team och tydligt ansvar. Vi bygger partnerskap som skapar affärsvärde långt efter att implementationen är klar." (126) | "Ett partnerskap som håller. Så att dina siffror gör det." |

#### Exsitec
- **Common to the pages checked:**
  - Self-canonicals.
  - hreflang on some pages (home: da/en/fi/no/sv), none on the BC page.
  - No JSON-LD on the home, BC or industry pages. Articles carry BlogPosting; the ERP hub carries VideoObject.

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/](https://www.exsitec.se/) | "Exsitec - Digitala lösningar som gör skillnad" (45) | "Vi är experter på att digitalisera - låt oss hitta er digitala konkurrensfördel." (80) | "Vi skapar IT-lösningar som funkar tillsammans" | 8 H2s; mega menu with 267 links |
| BC | [BC page](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central) | "Microsoft Dynamics 365 Business Central - Exsitec" (49) | "Upplev ett integrerat och automatiserat affärssystem från Microsoft – utformat för att samla dina processer och driva tillväxt i små och medelstora företag" (155) | "Ett integrerat och automatiserat affärssystem från Microsoft" | H2s include "Bästa ERP enligt Forbes", "Vad är Business Central?", "Är Business Central rätt för er?", "Licenstyper i Business Central", "Vill du integrera Business Central med ett annat system?" |
| ERP hub | [/affarssystem](https://www.exsitec.se/affarssystem) | "Marknadens bästa Affärssystem (ERP) \| Exsitec" (45) | 155 chars | "Affärssystem som gerkontroll i verksamheten" (typo) | Interactive "Test: Vilket affärssystem passar er?" widget |
| BC integration | [integration](https://www.exsitec.se/systemintegration/integrationer/business-central) | "Integration med Business Central" (32) | "Business Central" (16) | Two H1s: "Integrationer" and "Business Central integration" | |
| Cost article | [integration cost](https://www.exsitec.se/artiklar/vad-kostar-en-integration) | "Vad kostar en integration? 4 faktorer som påverkar priset" (57) | 144 chars | Same as the title | BlogPosting; links to Exsitec's "priskalkylator" |
| Contact | [/kontakt → /kontakt-support](https://www.exsitec.se/kontakt-support) | "Kontakt \| Exsitec" (17) | 128 chars | "Hör av dig till oss meddina frågor kring er IT!" (typo) | |

#### BrightCom
- **Common to the pages checked:**
  - Self-canonicals; hreflang da/no/sv on most pages.
  - No JSON-LD on service pages. Articles carry BlogPosting, with Exsitec as the Organization.

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/](https://www.brightcom.se/) | "Dynamics 365 Business Central-partner i Sverige \| BrightCom" (59) | "ERP och integrationer för e-handel och retail i Dynamics 365 Business Central. Se BrightComs standardintegrationer och kundcase." (128) | "ERP och integrationer för e-handel i Microsoft Dynamics 365 Business Central" | 11 H2s; the first three are CTAs: "Be om offert", "Boka demo", "Priser" |
| BC | [BC page](https://www.brightcom.se/microsoft-dynamics-365-business-central) | "Business Central affärssystem för handel och e-handel \| BrightCom" (65) | "Microsoft Dynamics 365 Business Central är affärssystem och ERP från Microsoft för handel och e-handel. Automatisera processer och skapa skalbar tillväxt." (154) | "Microsoft Dynamics 365 Business Central affärssystem i molnet för handel och e-handel" | 16 H2s |
| Prices | [priser](https://www.brightcom.se/dynamics-business-central/priser/) | "Priser for Microsoft Dynamics 365 Business Central \| BrightCom" (62; "for" is a typo) | "Se priser för Microsoft Dynamics 365 Business Central. Fast månadslicens, transparenta implementeringskostnader och standardintegrationer från BrightCom." (153) | "Pris på Microsoft Dynamics 365 Business Central i Sverige" | H2s "Priset på Business Central består vanligtvis av tre delar" and "Vad kostar Business Central?" |
| Package | [Launch](https://www.brightcom.se/business-central-fast-pris-e-handel) | "Business Central för e-handel med fast pris \| BrightCom" (55) | "Business Central för e-handel med fast månadsavgift. Go-live på 1–2 månader med färdiga integrationer till Shopify, PSP och WMS — utan uppstartskostnader." (154) | "BrightCom Launch - Business Central för e-handel och retail" | 29 H2s |
| NAV upgrade | [article](https://www.brightcom.se/artiklar/uppgradera-dynamics-nav) | "Uppgradera Dynamics NAV" (23) | 133 chars | Same as the title | About 515 words; BlogPosting |
| NAV partner | [article](https://www.brightcom.se/artiklar/microsoft-dynamics-nav-partner) | "Microsoft Dynamics NAV partner" (30) | 147 chars | Same as the title | |
| Requirements spec | [kravspec](https://www.brightcom.se/business-central-kravspecifikation) | "Kravspecifikation Business Central \| BrightCom" (46) | 87 chars | **none** | Gated download |

#### InBiz
- **Common to the pages checked:** `lang="en-US"` on Swedish content; self-canonicals; no hreflang; a Yoast graph without Organization.

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/](https://inbiz.se/) | "Din ERP-partner för Microsoft Dynamics NAV \| InBiz" (50) | "InBiz kan hjälpa dig att hitta rätt affärssystem för din verksamhet. Vi är certifierad Microsoft partner & experter på Microsoft Dynamics NAV." (142) | "Välkommen till InBiz!" | Last modified 2023-11-10 |
| Solutions | [/vara-losningar/](https://inbiz.se/vara-losningar/) | "Microsoft Dynamics NAV (Navision) \| Affärssystemlösningar från InBiz" (68) | 114 chars | "Upptäck fördelarna med Dynamics 365 Business Central" | Title says NAV, H1 says BC |
| D365 | [/vara-losningar/microsoft-dynamics-365/](https://inbiz.se/vara-losningar/microsoft-dynamics-365/) | "Microsoft Dynamics 365 - Affärssystem i molnet \| InBiz" (54) | 154 chars | "Microsoft Power BI" | Title and H1 don't match; same title as the next page |
| BC standard | [/vara-losningar/microsoft-dynamics-365-2/](https://inbiz.se/vara-losningar/microsoft-dynamics-365-2/) | Same title as above (duplicate) | 154 chars | "Microsoft Dynamics 365 Business Central - Standard" | |
| BC for production | [/vara-losningar/businesscentralforproduktion/](https://inbiz.se/vara-losningar/businesscentralforproduktion/) | "Microsoft Dynamics NAV - affärssystemet eCom IT för IT-företag \| InBiz" (70) | 155 chars | "Dynamics 365 Business Central för Produktion" | Title and H1 don't match |
| About | [/microsoft-partner/](https://inbiz.se/microsoft-partner/) | "Om InBiz - InBiz" (16) | **none** | "Om InBiz" | |
| Default post | [/hello-world/](https://inbiz.se/hello-world/) | "Hello world! - InBiz" (20) | 142 chars | none | WordPress default post from 2018-02-20, still indexable |
| News | [/nyheter/](https://inbiz.se/nyheter/) | "News Archive - InBiz" (20) | none | "Nyheter" | Newest items from 2019 |

#### Evidi
- **Common to the pages checked:**
  - Titles are prefixed "Evidi | " and cut with "..." at 68 characters.
  - Self-canonicals; hreflang x-default/nb-no/da/sv.
  - No JSON-LD on any page checked, and no tel: or mailto: links.

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/se/](https://www.evidi.com/se/) | "Evidi \| Styrkan ligger i helheten" (33) | "Ledande kompetens inom snabb digital utveckling. Vi är kundorienterade och datadrivna i allt vi gör, eftersom det skapar störst värde för våra kunder." (150) | Two H1s: "Startsida" and "Tillsammans bygger vi framtidens IT-lösningar" | |
| BC | [BC product](https://www.evidi.com/se/produkter/microsoft-dynamics-365-business-central) | "Evidi \| Microsoft Dynamics 365 Business Central – Affärssystemet ..." (68) | "Microsoft Dynamics 365 Business Central är ett affärssystem / ERP som effektiviserar ekonomi, försäljning, inköp och projekt i en molnbaserad plattform. En komplett ERP-lösning som växer med ditt företag." (204) | "Microsoft Dynamics 365 Business Central" | 16 H2s, including Essentials/Premium and "FAQ - Vanliga frågor om Microsoft Dynamics 365 Business Central" (no FAQPage schema); 1,805 words |
| ERP | [ERP](https://www.evidi.com/se/leveranser/erp-affarssystem) | "Evidi \| ERP / Affärssystem" (26) | 155 chars | "ERP & affärssystem" | 26 H2s; about 3,700 words |
| BC guide | [guide](https://www.evidi.com/se/allt-du-behover-veta-om-affarssystemet-dynamics-365-business-central) | "Evidi \| Microsoft Dynamics 365 Business Central - Allt du behöver..." (68) | 165 chars | "Allt du behöver veta om affärssystemet Dynamics 365 Business Central" | Overlaps the product page |
| Switching ERP | [byta](https://www.evidi.com/se/leveranser/erp-affarssystem/nar-behover-man-byta-affarssystem) | "Evidi \| När behöver man affärssystem? \| Guide för företag" (57) | 107 chars | "När behöver man byta affärssystem?" | The title leaves out "byta" |
| NaviPro | [/se/navipro](https://www.evidi.com/se/navipro) | "Evidi \| NaviPro har blivit Evidi!" (33) | 120 chars | none | |

#### Sherpas
- **Common to the pages checked:**
  - Self-canonicals; hreflang sv-se, en-us (English copy under /en/) and x-default.
  - No JSON-LD, and no image on the checked pages has an alt attribute.
  - https://sherpas.se/robots.txt and https://sherpas.se/sitemap.xml return HTTP 200 with the HTML 404 page [Source](https://sherpas.se/robots.txt) [Source](https://sherpas.se/sitemap.xml).

| Page | URL | Title (len) | Meta description (len) | H1 | Notes |
|---|---|---|---|---|---|
| Home | [/](https://sherpas.se/) | "Home - Sherpas" (14) | "Home" (4) | Four H1s; the first is "Vi hjälper företag och organisationer med data, system och digitalisering." | |
| BC | [BC](https://sherpas.se/plattformar/business-central/) | "Business Central" (16) | "Business Central" (16) | "Business Central" (two H1 elements) | 1,148 words |
| BC app | [InExchange](https://sherpas.se/inexchange-for-bc/) | "Inexchange för Dynamics 365 Business Central" (44) | 17 chars | Same as the title | |
| Fixed-price analysis | [nulägesanalys](https://sherpas.se/tjanster/nulagesanalyser/) | "Nulägesanalyser - Sherpas" (25) | 15 chars | Two H1s | |

#### Additional competitors

| Site / page | URL | Title (len) | Meta description (len) | H1 | Canonical / hreflang / JSON-LD |
|---|---|---|---|---|---|
| Navet home | [navet.se](https://navet.se/) | "Navet – Microsoft Dynamics 365 & Business Central Partner" (57) | "Navet är en komplett Microsoft-partner inom Dynamics 365, Business Central, Power BI och Power Platform." (104) | "Vi skapar bättre affärer tillsammans" | Self / none / Yoast graph without Organization. Menu labels make up 15 of the 19 H2s |
| Navet BC | [/produkter/business-central](https://navet.se/produkter/business-central) | "Microsoft Dynamics 365 Business Central - Navet – Microsoft Dynamics 365 & Business Central Partner" (99) | **none** | "Microsoft Dynamics 365 Business Central" | Self / none / Yoast |
| Navet licence FAQ | [/business-central/hur-mycket-kostar-en-business-central-licens-i-sverige](https://navet.se/business-central/hur-mycket-kostar-en-business-central-licens-i-sverige) | "Hur mycket kostar en Business Central-licens i Sverige? - Navet – Microsoft Dynamics 365 & Business Central Partner" (115) | **none** | "Hur mycket kostar en Business Central-licens i Sverige?" | Self / none / Article + FAQPage; published 2025-11-11; also published under /faq/… |
| Enqore BC | [BC](https://enqore.se/erp-hos-enqore/business-central/) | "Business Central – Modernt affärssystem i molnet \| Enqore" (57) | "Samla ekonomi, inköp, lager och försäljning i Business Central. Vi hjälper er från förstudie till implementation och vidareutveckling." (134) | "Business Central" | Self / none / Yoast-style graph + FAQPage |
| Enqore BC-konsult | [BC-konsult](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/) | "Business Central-konsult \| Certifierad Microsoft-partner \| Enqore" (65) | "Behöver ni en erfaren Business Central-konsult? Vi hjälper företag med implementation, integration och utveckling av Business Central." (134) | "Certifierad Business Central-konsult för moderna affärssystem" | Self / none / graph + FAQPage. The FAQ includes "Vad kostar det att anlita en Business Central-konsult?" |
| Enqore implementation | [BC 2 Go](https://enqore.se/erp-hos-enqore/business-central/business-central-2-go/) | "Business Central implementation \| Enqore" (40) | 109 chars | "Business Central implementation" | Self / none / graph |
| Enqore Copilot | [agents & Copilot](https://enqore.se/erp-hos-enqore/business-central/agenter-och-copilot-i-business-central/) | "Agenter och Copilot i Business Central \| Automatisera affärsprocesser" (69) | 131 chars | "Agenter och Copilot i Business Central" | Self / none / graph |
| Effekt home | [effekt.se](https://effekt.se/) | "Home \| Effekt" (13) | **none** | Two H1s: a rotating headline and "Vill du veta mer?" | **Canonical points to https://effekt.se/en** from the Swedish page; no JSON-LD; Drupal 11 |
| Effekt Copilot cost | [article](https://effekt.se/blog/vad-kostar-copilot-i-business-central-och-nar-borjar-det-bli-riktigt-intressant) | "Vad kostar Copilot i Business Central, och när börjar det bli riktigt intressant? \| Effekt" (90) | "Vad kostar Copilot i Business Central? Vi reder ut vad som ingår, hur Copilot Credits fungerar och när Sales Order Agent kan bli lönsam." (136) | Same as the title question | Self / 1 / none; 2,202 words |
| Yellow Solution home | [yellowsolution.se](https://yellowsolution.se/) | "Yellow Solution - Business central" (34) | 214 chars | "Vi är Yellow / Specialister på affärssystem" | Self / none / Yoast-style graph |
| Yellow Solution BC | [BC](https://yellowsolution.se/dynamics-365-business-central/) | "Dynamics 365 Business Central - Yellow Solution" (47) | 109 chars | "Business Central" | Duplicated H2s; 341 words |
| Basecloud home | [basecloud.se](https://www.basecloud.se/) | "Experter på affärsystemet Microsoft Business Central - Basecloud" (64; typo "affärsystemet") | 157 chars | "Basecloud är specialister på affärssystemet Business Central" | Self / none / WebSite, Organization, LocalBusiness |
| CGI BC | [CGI](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central) | "Microsoft Dynamics 365 Business Central \| CGI" (45) | "CGI hjälper företag att effektivisera affärsprocesser med Microsoft Dynamics 365 Business Central, ett molnbaserat ERP för ekonomi, lager, försäljning och mer." (159) | "Microsoft Dynamics 365 Business Central" | Self / none / WebPage, BreadcrumbList, Organization, Service |
| Azets BC | [Azets](https://www.azets.com/sv-se/tjanster/it-losningar/business-central) | "Business Central \| Sverige \| Azets" (34) | "Microsoft Dynamics 365 Business Central är den optimala digitala molnbaserade ERP-lösningen för din verksamhet" (110) | "Business Central – allt-i-ett-lösningen för företags resursplanering" | Self / 2 / Organization, WebPage, Service, FAQPage (11 questions); 1,878 words |

### Inferences
- **Title patterns.** BC page titles mostly use either "Microsoft Dynamics 365 Business Central | Brand" or a benefit statement. Few combine BC with a Swedish place modifier and a service intent; the exceptions are BrightCom ("…partner i Sverige"), Azets ("| Sverige |") and Modia's partner article. No checked page uses a pattern like "Business Central-konsult i Sverige | Implementation, NAV-uppgradering & support".
- **Structured data is an easy win.** Complete markup would put Verdana ahead of more than half the set:
  - Organization/ProfessionalService with address, phone and sameAs.
  - Service on each service page.
  - FAQPage only where a FAQ is visible.
  - Article with dates, and BreadcrumbList.
- **Modia shows the risk of JS-only content.** Every unique SEO signal depends on JavaScript rendering. Google can render JavaScript, but other crawlers, link previews and AI crawlers may only see the identical shell. This is inferred; only the Googlebot user agent was tested.

### Gaps
- What Google has actually indexed, for example Modia's rendered titles, was not checked: there was no Search Console access and no `site:` queries were run.
- Only a sample of pages per site was examined.
- H2 lists are shortened. Word counts come from raw HTML, except Modia's, which come from rendered pages.

---

## How are URLs and slugs structured (å/ä/ö or transliterated, Swedish or English)?

### Takeaway
The norm is Swedish words in transliterated ASCII slugs (å/ä → a, ö → o):
- NAB, Fellowmind, Modia, BrightCom, Navet, Enqore and Yellow Solution have no å/ä/ö in any sitemap URL.
- Exsitec mixes 162 percent-encoded å/ä/ö slugs with transliterated ones.
- Evidi has 8 å/ä/ö slugs.

English segments appear on multilingual or product-led sites, for example Fellowmind's "business-applications-erp", "scalable-rollout" and industry slugs such as "trade-och-logistics".

Hierarchy depth varies:
- BrightCom uses flat keyword slugs at the root, such as /business-central-integrationer.
- NAB uses two levels (/se/erp/…), as does Enqore (/erp-hos-enqore/business-central/…).
- Fellowmind goes four levels deep (/sv-se/losningar/business-applications-erp/dynamics-365-business-central/…).

### Cited Findings
_Checked 2026-10-11. lastmod values are as published in the sitemaps._

| Site | Sitemap | URLs | Largest segments | å/ä/ö in slugs | lastmod range | Source |
|---|---|---|---|---|---|---|
| NAB | Yoast index (posts 247 / pages 125 / authors 4) | 376 | /se/erp 134, /se/crm 62, /se/branscher 38, /se/produktivitet 33, /se/copilot 23, /se/nyheter 22, /se/power-bi 15 | 0 | 2025-10-31 → 2026-09-18 | [Source](https://nabsolutions.com/se/sitemap_index.xml) |
| Fellowmind (sv-se) | Locale content.xml (index of 7 locales) | 638 | inspiration-och-nyheter 378, events-webinars 86, cases 74, losningar 66, branscher 13, tjanster 10 | 0 | 2021-10-26 → 2026-10-09 | [Source](https://www.fellowmind.com/sv-se/sitemaps/fellowmind/sv-se/content.xml) |
| Modia | sitemap.xml | 33 | kunskapsbank 17, case 4, nyheter 3 | 0 | No lastmod | [Source](https://modia.se/sitemap.xml) |
| Exsitec (Swedish only) | sitemap.xml | 1,224 of 1,234 | artiklar 293, on-demand-webinar 191, systemintegration 189, case 82, karriar 58, ai/ordlista 21, affarssystem 20, ai/agenter 15, bransch 13, guide 9 | 162 (percent-encoded) | 2020-04-15 → 2026-10-09 | [Source](https://www.exsitec.se/sitemap.xml) |
| BrightCom | sitemap.xml | Exactly 100 (+ 896 image entries) | artiklar 48, nyheter 18, case 5, /dynamics-business-central/{demo,offert,priser}; flat slugs such as /shopify-integration-business-central | 0 | 2026-04-17 → 2026-10-09 | [Source](https://www.brightcom.se/sitemap.xml) |
| InBiz | Yoast index | 46 | /vara-losningar, posts | 0 | 2018-02-20 → 2025-11-17 | [Source](https://inbiz.se/sitemap_index.xml) |
| Evidi (/se) | /se/sitemap.xml (plus EN/no/dk) | 5,029 across all locales; 382 Swedish excluding the glossary | teknologiordbok 864, aktuellt 194, produkter 41, pressmeddelande 37, leveranser 30, managed-services 12, branscher 7 | 8 | Up to 2026-10-09 | [Source](https://www.evidi.com/se/sitemap.xml) |
| Sherpas | None (soft 404) | Unknown | From links: /tjanster/ (6), /plattformar/ (7), /losningar/ (8), /inexchange-for-bc/, /nyheter/; English copy under /en/technologies/… | 0 observed | – | [Source](https://sherpas.se/sitemap.xml) |
| Navet | Yoast index | 491 | /uncategorized 274, /okategoriserad-sv 93, /business-central 17, /faq 16, /produkter 11, /tjanster 5, /kundcase 4 | 0 | 2010 → 2026-09-02 | [Source](https://navet.se/sitemap_index.xml) |
| Enqore | Yoast-style index | 203 | /nyheter-blogg 104, /kundcase 38, /business-intelligence 22, /erp-hos-enqore 12, /ai-integrationer 8 | 0 | 2025-11-18 → 2026-10-06 | [Source](https://enqore.se/sitemap_index.xml) |
| Yellow Solution | Yoast-style index | 29 | /blogg 15, /dynamics-365-business-central 7, /referenser 5 | 0 | 2025-11-12 → 2026-01-31 | [Source](https://yellowsolution.se/sitemap_index.xml) |
| Effekt | sitemap.xml | 1 | – (/sv returns 404) | – | – | [Source](https://effekt.se/sitemap.xml) [Source](https://effekt.se/sv) |

- **Navet** publishes the same FAQ content under three URL patterns. For example, /business-central/hur-mycket-kostar-integrationer-i-business-central also appears under /faq/… and at the root as https://navet.se/hur-mycket-kostar-integrationer-i-business-central [Source](https://navet.se/sitemap_index.xml).
- **Fellowmind's** main BC page is four levels deep [Source](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/).

### Inferences
- Transliterating Swedish words to ASCII is the dominant and safe choice. It avoids percent-encoded URLs in shares, analytics and logs, and it matches every BC specialist checked.
- Short two-level paths that match search intent are rare in this set and easy to keep consistent, for example /business-central/implementation/, /business-central/pris/ and /navision-till-business-central/.

### Gaps
- BrightCom's sitemap holds exactly 100 URLs, which may mean it is capped, so the real page count is unknown. Sherpas' page count is unknown because it has no sitemap.
- Segment counts come from sitemap paths and include non-BC content.

---

## How are navigation and page hierarchy organised (mega menus, number of service and industry pages)?

### Takeaway
The large sites use mega menus: Exsitec's has 267 links, and NAB, Navet and Evidi also have them. The BC specialists keep a short top menu. BrightCom puts Business Central, prices and demo/quote first; Modia uses six menu items.

Only Exsitec organises its menu around the buyer's situation: Byta system, Uppgradera system, Integrera system, Byta partner, Support.

Dedicated BC sub-service pages are thin everywhere. Only NAB, BrightCom and Enqore have several BC-specific child pages, such as fixed price, integrations, Copilot, Power BI and konsult.

### Cited Findings
_Checked 2026-10-11, from the raw HTML of home pages (Modia from the rendered page)._
- **NAB:**
  - Top level: ERP | CRM | AI / Copilot | Produktivitet | Branscher | Kontakt.
  - The mega menu adds popular industries, resources, "Varför NAB och Microsoft" and Investor relations.
  - Icon ligature names such as "arrow_right_alt" leak into link text [Source](https://nabsolutions.com/se/).
  - There are 9 main and 12 sub-industry pages [Source](https://nabsolutions.com/se/branscher/).
- **Fellowmind:**
  - BC sits at Lösningar > Business Applications (ERP) > Dynamics 365 Business Central.
  - Child pages: Ready, Set, BC!, the needs analysis, "nära partner" and scalable rollout.
  - The site has 13 industry pages and 10 service URLs [Source](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/) [Source](https://www.fellowmind.com/sv-se/sitemaps/fellowmind/sv-se/content.xml).
- **Modia:** the rendered menu is "Tjänster | Partnerskap | Referenser | Kunskapsbank | Om oss | Kontakt" [Source](https://modia.se/).
- **Exsitec:** a mega menu of 267 links containing [Source](https://www.exsitec.se/):
  - Intent entries: Byta system / Uppgradera system / Integrera system / Byta partner / Support.
  - A list of systems: Visma Net, Business NXT, Control Edge, Visma Business, Business Central, Qlik, Power BI, Fabric…
  - "Bransch & roll": CEO, CFO and 13 industries.
  - "Inspiration": Artiklar, Ekonomhubben, Event & webinar, Guider, Kravspecifikationer, On-demand webinar, Utbildningar.
- **BrightCom:** Business Central [Microsoft Dynamics 365 Business Central; BrightCom Launch; Överblick; Standard Integrationer; K3 Pebblestone; Kravspecifikation] | Fashion ERP | Apps & Integrationer [12 apps] | Priser | Om oss | Nyheter & Artiklar [Source](https://www.brightcom.se/).
- **InBiz:** 13 navigation links in total [Source](https://inbiz.se/).
- **Evidi:** a mega menu "Vad vi gör | Vad vi kan | Vilka vi är | Kontakt" with 138 links. The sitemap has 7 industry URLs and 30 "leveranser" URLs [Source](https://www.evidi.com/se/) [Source](https://www.evidi.com/se/sitemap.xml).
- **Sherpas:** a left-hand menu [Source](https://sherpas.se/):
  - Tjänster [6].
  - Plattformar [Pyramid, Business Central, Dynamics 365 F&SCM, SharePoint, Teams, Microsoft 365, Power BI].
  - Lösningar [9, including Inexchange för BC].
  - Nyheter | Om oss | Karriär | Kontakt.
- **Navet:** Tjänster [Uthyrning; Processtillverkning] | Produkter [Business Central; Dynamics 365; Power BI; Power Platform; NavetEdge] | Kunder | Om Oss | Webbutik | Karriär | Kontakt [Source](https://navet.se/).
- **Enqore:** CRM | ERP | Business Intelligence | Integrationer. BC child pages cover konsult, BC 2 Go, agents and Copilot, and BC + Power BI [Source](https://enqore.se/) [Source](https://enqore.se/sitemap_index.xml).
- **City pages:** none of the sitemaps or link sets checked has city landing pages (for example "Business Central konsult Stockholm"). Office locations appear only on contact pages, in staff posts or in meta descriptions [Source](https://enqore.se/) [Source](https://sherpas.se/kontakt/).

### Inferences
- A menu built around the buyer's situation matches how BC buyers describe their problem, for example:
  - "Vi har NAV idag"
  - "Vi har vuxit ur Fortnox/Visma"
  - "Vi har redan Business Central"
  - "Integrationer"
  - "Rapportering & AI"

  In this set only Exsitec does this, and its menu isn't BC-specific.
- Many competitors put all BC services on a single page. Separate BC service pages matched to search intent would be a structural advantage: implementation, NAV migration, integrations, support/förvaltning, Power BI, Copilot and konsulttjänster.

### Gaps
- Mobile menus were not tested interactively.
- Navigation was taken from home-page HTML only.

---

## What conversion strategy does each site use (CTAs, forms, booking, phone, chat, downloads, calculators, demos)?

### Takeaway
Conversion relies on forms and requests for meetings, demos or quotes:
- **Free scoped sessions:**
  - Fellowmind's "2 timmar gratis behovsanalys".
  - NAB's "Boka kostnadsfritt möte".
  - Enqore's "Boka ett kostnadsfritt strategimöte".
- **Demo and quote pages:** BrightCom, Navet and Basecloud.
- **Gated guides or requirements templates:** NAB, Fellowmind, Exsitec and BrightCom.
- **Price pages:** NAB, BrightCom and Fellowmind's package page.
- **Chat:** HubSpot chat on Exsitec and BrightCom; NAB runs a "NAB Copilot" chatbot built on Microsoft Bot Framework Web Chat.
- **Webinars:** Modia, NAB and Fellowmind.

Exsitec is the only site with interactive tools: an integration price calculator and an "which ERP suits you" test. No BC licence or implementation cost calculator, and no online booking calendar, was found on any site.

### Cited Findings
_Checked 2026-10-11._
- **NAB:**
  - A 7-field form block on most pages. The phone number appears only on the contact page.
  - CTAs include "Prata med en AI Expert", "Boka rådgivning", "Vad kostar det?", "Boka kostnadsfritt möte" and "Se vad som ingår".
  - The home HTML loads Bot Framework Web Chat for "NAB Copilot".
  - [home](https://nabsolutions.com/se/), [BC](https://nabsolutions.com/se/erp/vad-ar-microsoft-dynamics-365-business-central/), [BC Start](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/), [kontakt](https://nabsolutions.com/se/kontakt/)
- **Fellowmind:**
  - Dynamics 365 Marketing forms.
  - CTAs "Ladda ner guiden", "Boka en gratis behovsanalys" and "Läs mer om Ready, Set, BC!".
  - Articles end with a CTA to email a named consultant.
  - Clickable phone links appear only on the contact page (5 of them).
  - [BC](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/), [NAV article](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/varfor-byta-till-dynamics-365-business-central-och-vad-ar-skillnaden-mot-dynamics-nav/), [kontakt](https://www.fellowmind.com/sv-se/kontakt/)
- **Modia (rendered):**
  - The home page promotes a free webinar on 14 October 2026: "Automatisera dina ekonomiprocesser i Business Central med Aritma Finance Manager".
  - Links styled as FAQ questions, such as "Vad kostar Business Central?" and "Vad ingår i en implementation hos Modia?".
  - The contact page has a form, a map and a staff list with direct numbers (9 tel links).
  - [home](https://modia.se/), [tjänster](https://modia.se/tjanster), [kontakt](https://modia.se/kontakt)
- **Exsitec:**
  - CTAs "Prisförfrågan", "Hämta kravspecifikation" and "Priser" (the last links to BrightCom).
  - HubSpot chat; phone 010-333 33 00 linked on every page.
  - An integration price calculator: "Använd priskalkylatorn nedan för att få en grov prisindikation".
  - An interactive "Test: Vilket affärssystem passar er?" on the ERP hub.
  - [BC](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central), [home](https://www.exsitec.se/), [systemintegration](https://www.exsitec.se/systemintegration), [affärssystem](https://www.exsitec.se/affarssystem)
- **BrightCom:**
  - The first three home H2s are CTAs: "Be om offert", "Boka demo", "Priser".
  - Further CTAs: "Boka din demo", "Kom igång - be om en offert", "Få en kostnadsfri prisbedömning" and "Få en offert på Launch".
  - A gated requirements specification, HubSpot chat, and a phone number on every page.
  - [home](https://www.brightcom.se/), [priser](https://www.brightcom.se/dynamics-business-central/priser/), [Launch](https://www.brightcom.se/business-central-fast-pris-e-handel), [kravspec](https://www.brightcom.se/business-central-kravspecifikation)
- **InBiz:** "Kontakta oss", a form on the contact page only, and a phone link on every page [Source](https://inbiz.se/) [Source](https://inbiz.se/kontakt/).
- **Evidi:** a "rådgivning" contact form (Dynamics 365 Marketing). No tel: or mailto: links in raw HTML [Source](https://www.evidi.com/se/kontakt/radgivning).
- **Sherpas:** a form on inner pages ("Vill du komma i kontakt med oss? Fyll i formuläret…") and phone links on every page [Source](https://sherpas.se/plattformar/business-central/).
- **Navet:** "Boka kostnadsfritt möte" on the home page, "Boka Demo" on the BC page, and a webshop link [Source](https://navet.se/) [Source](https://navet.se/produkter/business-central).
- **Enqore:** "Boka ett kostnadsfritt strategimöte" on the konsult page, plus CTAs to email a named consultant [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/).
- **Basecloud:** "Boka demo" and "Boka demo idag", both linking to /kontakt [Source](https://www.basecloud.se/).
- **Booking tools:** a search of all ~130 raw pages and the rendered home pages found no links or embeds for Calendly, HubSpot Meetings or Microsoft Bookings.
- **Tracking and engagement tools** (pattern detection on rendered home pages):
  - Leadfeeder/Dealfront visitor identification: NAB, Fellowmind, Modia.
  - Hotjar: NAB, Fellowmind, Goodfellows.
  - Microsoft Clarity: Exsitec.
  - HubSpot chat: Exsitec, BrightCom.
  - Sources: the home pages in the performance table below.

### Inferences
- **Booking:** bookable time slots would be unique in this set and easier than a contact form. An example is a 30-minute "BC-rådgivning" or "NAV-uppgraderingskoll" call with a named consultant.
- **Cost estimator:** an estimator for BC licences, implementation and support would also be unique; Exsitec's calculator covers integrations only. It should state its assumptions and be clearly labelled as an estimate, not a quote.
- **Gating:** four competitors gate their guides or requirements templates. An ungated, genuinely useful template would build trust, while gating would capture leads. The trade-off is Verdana's to make.

### Gaps
- No forms were submitted, so response times and follow-up are unknown.
- Pop-ups and chat prompts were seen in one session per site.

---

## Which trust signals are used?

### Takeaway
Competitors build trust through:
- **Customer logos and named cases:** all eight.
- **Scale and tenure claims:**
  - NAB: "över 460 bolag".
  - Exsitec: "600 experter".
  - BrightCom: "Över 150 e-handels- och retailföretag".
  - InBiz: since 2005.
  - Navet: "grundat 1989".
- **Microsoft status:** Fellowmind's Inner Circle claim and award imagery; BrightCom's Solutions Partner logo.
- **ISO certifications:** NAB.
- **Named people:** Modia, Fellowmind and Enqore.

Two sites still use partner tiers that Microsoft retired in 2022: InBiz ("Silver") and Sherpas ("Gold Partner").

Verdana cannot yet show references or partner status. What remains is:
- People-centred proof.
- Openness about prices, process and terms.
- Content that shows real expertise.

### Cited Findings
_Checked 2026-10-11. Claims are recorded as stated and were not verified._
- **NAB:**
  - Claims "över 20 år", "25 år" (an anniversary conference), "drygt 200 bolag" and "över 460 bolag".
  - A badge reading "265 % Avkastning på investering med Business Central över 3 år" next to "Officiella Copilot siffror från Microsoft" [Source](https://nabsolutions.com/se/).
  - ISO 9001, 27001 and 14001 [Source](https://nabsolutions.com/se/varfor-nab-och-microsoft/).
  - Customer logos [Source](https://nabsolutions.com/se/alla-kundcase/).
- **Fellowmind:**
  - An Inner Circle claim, a top-10-worldwide claim, "alla sju solution partner designations" and Partner of the Year imagery [Source](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/).
  - Award news "Fellowmind & Lekolar vinner Årets affärssystemprojekt 2026" (lastmod 2026-05-07) [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/fellowmind-lekolar-vinner-arets-affarssystemprojekt-2026/).
  - Named customers: Hässelby Blommor, Bemz, IsaDora, MU and Sundlings [Source](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/nara-pa-riktigt-som-din-business-central-partner/).
- **Modia:**
  - Named customers (MM Sports, Humphree, Ebeco, Lagerhaus) with CFO quotes [Source](https://modia.se/case).
  - The target-price promise "Blir projektet billigare får du pengarna tillbaka." [Source](https://modia.se/partnerskap).
  - A staff list on the contact page [Source](https://modia.se/kontakt).
- **Exsitec:** "600 experter", partner logos and investor-relations content [Source](https://www.exsitec.se/).
- **BrightCom:**
  - A Microsoft Business Central Solutions Partner logo and a "Partners" image [Source](https://www.brightcom.se/).
  - "Över 150 e-handels- och retailföretag i Norden" [Source](https://www.brightcom.se/dynamics-business-central/demo/).
  - A Desenio case [Source](https://www.brightcom.se/case/desenio-business-central).
- **InBiz:**
  - "Certifierad Microsoftpartner - Silver Enterprise Resource Planning", "13 kollegor", "ett 40-tal kunder" and the Companial network [Source](https://inbiz.se/microsoft-partner/).
  - The case page was last modified 2019-09-07 [Source](https://inbiz.se/case/).
- **Evidi:** "den ledande Microsoft-partnern i Norden" [Source](https://www.evidi.com/se/leveranser/erp-affarssystem) and a customer-stories page [Source](https://www.evidi.com/se/vara-kunder).
- **Sherpas:** "Microsoft Gold Partner" in its news [Source](https://sherpas.se/nyheter/), and part of Serpentin with about 160 employees [Source](https://sherpas.se/om-oss/).
- **Navet:**
  - "Teknikbolag, grundat 1989" [Source](https://navet.se/).
  - The Fingerprints case "Från Dynamics NAV till Business Central Cloud" [Source](https://navet.se/kundcase/fingerprint-cards).
  - An "Expertkälla" block on FAQ pages shows another company's email domain [Source](https://navet.se/business-central/hur-mycket-kostar-en-business-central-licens-i-sverige).
- **Basecloud:** "15 års erfarenhet" on the home page but "+20 års erfarenhet" on the About page [Source](https://www.basecloud.se/) [Source](https://www.basecloud.se/om-oss).
- **Enqore:** the konsult page title claims "Certifierad Microsoft-partner", and the home page names customer stories with World of Volvo and Skånetrafiken [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/) [Source](https://enqore.se/).
- **Microsoft's partner-programme change:**
  - RCP Magazine (2022-10-07): "As of Oct. 3, the old Microsoft Partner Network (MPN) is gone", replaced by the Microsoft Cloud Partner Program [Source](https://rcpmag.com/articles/2022/10/07/qa-microsoft-cloud-partner-program-launch.aspx).
  - Microsoft Learn (ms.date 2025-01-27): a Solutions Partner designation requires a partner capability score of at least 70 in a solution area, and Business Applications is one of six areas [Source](https://learn.microsoft.com/en-us/partner-center/membership/partner-capability-score).
- **Microsoft partner directory:**
  - The `solutionsPartnerDesignations` field contains "BAGCompetency" for NAB, BrightCom, Fellowmind, InBiz (Information & Business Solutions Svenska AB), Enqore, Aderian, Effekt, Cielo365 and others; the entry for Yellow Solution AB has none.
  - These are raw values and were not mapped to official names [Source](https://main.prod.marketplacepartnerdirectory.azure.com/api/partners?filter=sort%3D0%3BpageSize%3D18%3BpageOffset%3D0%3Bcountry%3DSE%3BonlyThisCountry%3Dtrue%3Bradius%3D100%3BlocationNotRequired%3Dtrue%3Bproducts%3DDynamics365Business).

### Inferences
- Gold/Silver wording is a visible credibility weakness. Partner status can be checked publicly in Microsoft's directory, so Verdana should publish no partner wording or badge it cannot back up.
- Trust signals a new consultancy can show without references or partner claims:
  - A named team with photos, roles and LinkedIn profiles.
  - Individual Microsoft certifications with verification links, only if held.
  - Company facts: organisation number, registered address, F-skatt.
  - Plain-language terms and SLA definitions; GDPR and security practices.
  - A published method and price model.
  - Guarantees, but only if Verdana commits to them.

### Gaps
- No claim was independently verified: customer counts, ISO certificates, awards and designations are as stated.
- Google Business Profile reviews and other review platforms were not checked. No rating markup was found on the pages examined.

---

## What content marketing do competitors publish (price, NAV to BC, switching ERP, Copilot, Power BI), and how deep and fresh is it?

### Takeaway
Content volume sits with the large players. All four published something in the month before 2026-10-11:
- Exsitec: 293 articles and 191 on-demand webinars.
- Fellowmind: 378 "inspiration och nyheter" URLs.
- Evidi: 194 news items and 864 glossary entries.
- NAB: 247 posts.

Topics cluster around "vad är Business Central", price and cost, switching ERP, NAV upgrades, release waves and AI/Copilot.

Depth varies widely:
- NAB's guides run to 3,600–4,250 words, and Effekt's Copilot cost analysis to 2,200 words.
- Modia's "Kort svar" articles are about 350 words, and BrightCom's NAV upgrade article about 515.

At least seven sites publish price content. Their licence figures do not match each other or Microsoft's Swedish list prices.

### Cited Findings
_Checked 2026-10-11._

**Theme counts in sitemap URLs** (matched on slugs; indicative only)

| Site (URLs) | BC | pris/kostnad | NAV/Navision | byta | implement | Copilot | AI/agent | Power BI | integration | support/förvaltning | partner | Newest lastmod | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NAB (376) | 73 | 5 | 2 | 2 | 3 | 29 | 21 | 19 | 2 | 0 | 7 | 2026-09-18 | [sitemap](https://nabsolutions.com/se/sitemap_index.xml) |
| Fellowmind (638) | 31 | 3 | 1 | 6 | 4 | 17 | 46 | 17 | 14 | 3 | 12 | 2026-10-09 | [sitemap](https://www.fellowmind.com/sv-se/sitemaps/fellowmind/sv-se/content.xml) |
| Modia (33) | 4 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 3 | n/a | [sitemap](https://modia.se/sitemap.xml) |
| Exsitec (1,224) | 14 | 12 | 0 | 9 | 2 | 2 | 73 | 10 | 224 | 15 | 5 | 2026-10-09 | [sitemap](https://www.exsitec.se/sitemap.xml) |
| BrightCom (100) | 57 | 4 | 8 | 0 | 0 | 0 | 2 | 0 | 13 | 0 | 1 | 2026-10-09 | [sitemap](https://www.brightcom.se/sitemap.xml) |
| InBiz (46) | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 2 | 2025-11-17 | [sitemap](https://inbiz.se/sitemap_index.xml) |
| Evidi /se excl. glossary (382) | 18 | 6 | 1 | 3 | 2 | 15 | 27 | 1 | 14 | 2 | 4 | 2026-10-09 | [sitemap](https://www.evidi.com/se/sitemap.xml) |
| Navet (491) | 53 | 17 | 10 | 1 | 5 | 0 | 11 | 6 | 7 | 3 | 20 | 2026-09-02 | [sitemap](https://navet.se/sitemap_index.xml) |
| Enqore (203) | 38 | 2 | 2 | 1 | 3 | 4 | 22 | 32 | 12 | 1 | 8 | 2026-10-06 | [sitemap](https://enqore.se/sitemap_index.xml) |
| Yellow Solution (29) | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2026-01-31 | [sitemap](https://yellowsolution.se/sitemap_index.xml) |

**Published price figures** (per user per month unless stated)

| Source | Licences | Implementation / packages | Support / förvaltning | URL |
|---|---|---|---|---|
| Microsoft, official Swedish list price | Essentials 764,70 kr; Premium 1 051,40 kr; Team Members 76,50 kr (paid annually, excl. VAT) | – | – | [Source](https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing) |
| NAB | Essential 918 kr on a 1-month term / 765 kr on a 12–36-month term; Premium 1 262 / 1 052 kr; Team member 92 / 77 kr | Business Central Start from 50 000 kr fixed: 1–3 weeks, 1–20 users. Add-ons: Projekt tid 15 000; Avtalsfakturering 35 000; Fakturera med lagerartiklar 35 000; supplier-invoice interpretation 27 000; exchange rates 3 000; bank currency reconciliation 25 000 kr | Brons 195 / Silver 275 / Guld 425 kr per essential or premium user per month. Minimum charge of 10 users noted; 1-year term; Guld has a 2-hour SLA | [priser](https://nabsolutions.com/se/om-nab-solutions/priser/), [BC Start](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/) |
| Fellowmind | From 764,70 kr | Standardpaket ekonomi 79 000 kr; plus a tilläggspaket for sales and warehouse at 99 000 kr | 295 kr per user per month (unlimited tickets) | [Ready, Set, BC!](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/ready-set-bc/) |
| BrightCom | Essentials 950, Premium 1 004, Team Members 105, upgrade licence 1 495 SEK/month ("från 950 SEK per användare och månad") | Launch: fixed monthly fee, no start-up cost, 1–2 months; amount not shown | Apps, e.g. BRC Connect from 3 995 SEK/month | [priser](https://www.brightcom.se/dynamics-business-central/priser/), [Launch](https://www.brightcom.se/business-central-fast-pris-e-handel) |
| Navet | From 884 kr (Essentials), from 1 216 kr (Premium), 89 kr (Team Member); excl. VAT, 12-month term | FAQ: implementation from about two weeks up to a year; packaged deliveries 2–4 weeks | – | [licence FAQ](https://navet.se/business-central/hur-mycket-kostar-en-business-central-licens-i-sverige), [timeline FAQ](https://navet.se/business-central/hur-lang-tid-tar-en-typisk-business-central-implementering) |
| Modia | 600–900 kr | Implementation 300 000–1 500 000 kr; customisation 0–500 000+ kr | 10 000–30 000 kr per month | [Source](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem) |
| Effekt | – | Worked cost scenarios for Copilot agents (Sales Order Agent) compared with time saved | – | [Source](https://effekt.se/blog/vad-kostar-copilot-i-business-central-och-nar-borjar-det-bli-riktigt-intressant) |

**NAV/Navision to BC**
- **NAB:** a 3,626-word guide published 2026-05-04 [Source](https://nabsolutions.com/se/erp/navision-microsoft-dynamics-nav-och-vagen-vidare-till-business-central/).
- **Fellowmind:** an article published 2021-09-14 and modified 2026-05-18 [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/varfor-byta-till-dynamics-365-business-central-och-vad-ar-skillnaden-mot-dynamics-nav/).
- **BrightCom:**
  - An upgrade article of about 515 words: development environment → database copy → test → go-live, "från 40 timmar" and "Garanterad uppgradering" [Source](https://www.brightcom.se/artiklar/uppgradera-dynamics-nav).
  - A separate "Microsoft Dynamics NAV partner" article [Source](https://www.brightcom.se/artiklar/microsoft-dynamics-nav-partner).
- **Navet:** the FAQ "Kan jag uppgradera från NAV till Business Central utan extra licenskostnad?" [Source](https://navet.se/business-central/kan-jag-uppgradera-fran-nav-till-business-central-utan-extra-licenskostnad) and the Fingerprints case [Source](https://navet.se/kundcase/fingerprint-cards).
- **Azets:** an H2 "Uppdatering från Microsoft Dynamics NAV till MS 365 Business Central" [Source](https://www.azets.com/sv-se/tjanster/it-losningar/business-central).
- **InBiz:** positions the whole site around NAV [Source](https://inbiz.se/).
- **CGI:** mentions NAV förvaltning [Source](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central).
- **Overall:** no page checked breaks NAV migration down by NAV version or gives a NAV upgrade cost range, apart from BrightCom's "från 40 timmar".

**Switching ERP**
- Guides and articles:
  - NAB's guide is gated [Source](https://nabsolutions.com/se/ar-det-dags-att-byta-affarssystem/).
  - Fellowmind's buyer's guide is gated [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/kopguide-business-central/).
  - Evidi has an open guide [Source](https://www.evidi.com/se/leveranser/erp-affarssystem/nar-behover-man-byta-affarssystem).
  - Modia has "7 tecken på att det är dags att byta" [Source](https://modia.se/kunskapsbank/dags-att-uppgradera-affarssystem).
  - Exsitec has intent entries in its menu [Source](https://www.exsitec.se/).
- From smaller systems:
  - NAB's BC Start meta description targets Fortnox and Visma users [Source](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/).
  - BrightCom compares Specter and BC costs [Source](https://www.brightcom.se/artiklar/jamforelse-av-priser-och-kostnader-mellan-affarssystemen-specter-och-microsoft-dynamics-365-business-central).
  - Modia's knowledge-bank index lists comparisons including Monitor ERP and Vitec Pyramid [Source](https://modia.se/kunskapsbank).

**Copilot / AI in BC**
- NAB: hub "AI & Copilot – från hype till affärsvärde" [Source](https://nabsolutions.com/se/copilot/).
- Fellowmind: "Copilot i Business Central tar ditt affärssystem till nästa nivå" [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/copilot-i-business-central-tar-ditt-affarssystem-till-nasta-niva/).
- Enqore: "Agenter och Copilot i Business Central" (lastmod 2026-09-17) [Source](https://enqore.se/erp-hos-enqore/business-central/agenter-och-copilot-i-business-central/).
- Effekt: Copilot cost article [Source](https://effekt.se/blog/vad-kostar-copilot-i-business-central-och-nar-borjar-det-bli-riktigt-intressant).
- Navet: "Hur mycket kostar Business Central med AI-funktioner aktiverade" [Source](https://navet.se/business-central/hur-mycket-kostar-business-central-med-ai-funktioner-aktiverade).
- Azets: H2 "Microsoft AI, Copilot, som en del av Business Central" [Source](https://www.azets.com/sv-se/tjanster/it-losningar/business-central).
- Exsitec: an AI glossary (21 URLs) and AI agents section (15 URLs) [Source](https://www.exsitec.se/sitemap.xml).

**Power BI with BC**
- Enqore: a "Business Central 2 Power BI" page and several 2026 posts [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-2-power-bi/).
- NAB: "Badger Power BI – snabbaste vägen från Business Central till insikt" [Source](https://nabsolutions.com/se/power-bi/badger-power-bi-snabbaste-vagen-fran-business-central-till-insikt/).
- Fellowmind: a Power BI + BC workshop page [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/workshop-power-bi-business-central-2025/).
- Navet: "Vad kostar Business Central med Power BI-integration" [Source](https://navet.se/business-central/vad-kostar-business-central-med-power-bi-integration).
- Effekt: the home page lists "Vad kan Power BI visa från Business Central?" [Source](https://effekt.se/).

**Freshness signals**
- NAB: "Nyheter i Business Central höstrelease 2026" (2026-09-11) [Source](https://nabsolutions.com/se/erp/nyheter-i-business-central-hostrelease-2026/), and the price-change notice "prisjusteringar från 1 januari 2027" (2026-09-18) [Source](https://nabsolutions.com/se/nyheter/prisjusteringar-fran-1-januari-2027/).
- Enqore: "Business Central release wave 1 2026 – detta är nytt i BC28" (2026-04-28) [Source](https://enqore.se/nyheter-blogg/nyheter/business-central-release-wave-1-2026-detta-ar-nytt-i-bc28/).
- Effekt: the home page lists "Business Central 28.4…" [Source](https://effekt.se/).

**Short-answer format:** Modia's knowledge-bank articles open with "Kort svar", end with a FAQ block and run about 340–360 words. The price article was updated 2026-08-25 [Source](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem).

**Glossaries:**
- Evidi's technology dictionary has 864 entries, including /se/teknologiordbok/business-central with 842 words and a boilerplate description [Source](https://www.evidi.com/se/teknologiordbok/business-central).
- Exsitec's AI glossary has 21 URLs [Source](https://www.exsitec.se/sitemap.xml).

**Stale content**
- InBiz: a news archive whose newest items are from 2019, and an indexable 2018 "Hello world!" post [Source](https://inbiz.se/nyheter/) [Source](https://inbiz.se/hello-world/).
- Navet: 274 "uncategorized" and 93 "okategoriserad-sv" URLs dating back to 2010, some on unrelated topics [Source](https://navet.se/sitemap_index.xml).
- Yellow Solution: newest lastmod 2026-01-31 [Source](https://yellowsolution.se/sitemap_index.xml).

### Inferences
- **Price information is inconsistent.** Published licence prices differ between partners and from Microsoft's own Swedish list. NAB's table suggests one reason: it shows 1-month and 12–36-month prices separately. The other pages don't say what their figures are based on. A dated, sourced, plain-language price explainer would be more trustworthy than anything in this set.
- **Mid-length answers are rare.** Pages are either short (Modia, BrightCom's NAV article, Yellow Solution) or long but promotional (NAB, Evidi). A format with a short answer, then depth, sources and a dated update note would sit between the two.
- **Release-wave posts are an expected freshness signal.** They are cheap to produce, and NAB, Fellowmind, Enqore and Effekt all publish them.

### Gaps
- There is no search-volume, ranking or traffic data. How common a topic is was inferred from slugs and on-page headings.
- Gated guides were not downloaded, because that requires submitting a form.
- Release-post dates come from sitemap lastmod.

---

## How do competitors describe their implementation methodology?

### Takeaway
Methodologies are described at a high level, in four to six phases: analysis or workshops → configuration and data migration → integrations → testing and training → go-live → support.

Packaged offers sell on speed:
- NAB: 1–3 weeks.
- BrightCom: 1–2 months, against 4–6 months "traditionally".
- Navet: 2–4 weeks for packaged deliveries.
- Enqore: "kortast möjliga tid".

Commercial models differ:
- Fixed price: NAB's BC Start, Fellowmind's packages, Sherpas' analysis.
- Fixed monthly fee: BrightCom's Launch.
- Target price with a refund: Modia.

No competitor publishes, phase by phase, the deliverables, the customer's responsibilities and the acceptance criteria. Fellowmind's article on customer readiness comes closest.

### Cited Findings
_Checked 2026-10-11._
- **NAB BC Start:** Boka leveransvecka → Implementation → Go live. Installation, setup and training are included, and delivery takes 1–3 weeks [Source](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/).
- **BrightCom Launch:**
  - Steps: Workshop och processmöten → Masterdata och setup → Integrationer (e-handel, PSP, WMS) → Logistik- och lagerprocesser → Test, utbildning och go-live.
  - An H2 "Hälften av tiden - från beslut till go-live", with a table comparing it to a traditional 4–6-month project [Source](https://www.brightcom.se/business-central-fast-pris-e-handel).
  - The home page has an H2 "En implementeringsmetodik anpassad för handel och e-handel" [Source](https://www.brightcom.se/).
- **Modia:** process förstudie/kravanalys → datamigrering → konfiguration → utbildning/förändringsledning → go-live-stöd [Source](https://modia.se/tjanster). Target price, the same team, clear responsibility [Source](https://modia.se/partnerskap).
- **Evidi's lifecycle:** Förstudie och behovsanalys → Val av ERP-lösning → Implementering och integration → Förändringsledning och utbildning → Förvaltning, support och vidareutveckling [Source](https://www.evidi.com/se/leveranser/erp-affarssystem).
- **Fellowmind:**
  - The article "Hur går det till att implementera ett nytt affärssystem?" has H2s "Vad behöver jag som kund ha klart?" and "Vad kan jag förvänta mig efter driftstart?" [Source](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/hur-gar-det-till-att-implementera-ett-nytt-affarssystem/).
  - A free 2-hour needs analysis is the entry step [Source](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/gratis-behovsanalys-business-central/).
- **CGI:** describes an "iterativ process" for implementation [Source](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central).
- **Sherpas nulägesanalys:** Analys → Åtgärdslista at a "Fast pris" (no amount shown) [Source](https://sherpas.se/tjanster/nulagesanalyser/).
- **Navet:** implementation takes from weeks to over a year; packaged deliveries 2–4 weeks [Source](https://navet.se/business-central/hur-lang-tid-tar-en-typisk-business-central-implementering).
- **Enqore BC 2 Go:** H2s "Från uppstart till implementation på kortast möjliga tid" and "Färdigt och förberett" [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-2-go/).
- **BrightCom NAV upgrade:** development environment → database copy → test → go-live; "från 40 timmar" [Source](https://www.brightcom.se/artiklar/uppgradera-dynamics-nav).

### Inferences
- A documented, named method would be more concrete than anything published in this set. It would cover:
  - Phases, deliverables and roles.
  - Typical duration ranges and the tasks the customer must do.
  - Testing and acceptance, hypercare, and handover to support.
  - Ideally, downloadable templates.
- Packaged offers lead with speed. Quality and risk controls such as test scripts, data validation and rollback plans are rarely described, and could be Verdana's angle.

### Gaps
- Actual delivery practice cannot be seen from websites. These descriptions are marketing copy.

---

## What do visual design, mobile UX and technical performance look like, and what obvious weaknesses exist?

### Takeaway
No page scrolls horizontally at 390 px, but consent banners cover most of the first mobile screen on five sites.

Lab load figures vary widely:
- NAB, Fellowmind and Sherpas transfer more than 7 MB on mobile.
- Exsitec makes 137 requests, 68 of them third-party, and has a 2.4 s mobile LCP.
- Evidi's mobile LCP is 3.5 s, and Navet's TTFB is 2.2 s.

Recurring weaknesses:
- Missing, multiple or mismatched H1s and titles.
- Poor image alt coverage.
- Typos in H1s and titles.
- English or Danish fragments on Swedish pages.
- Default or stale pages left indexable.
- Missing or broken sitemaps.
- A Swedish page canonicalised to its English version (Effekt).

### Cited Findings
_Lab measurements on 2026-10-11: headless Microsoft Edge, one unthrottled run per viewport from a single location. LCP and CLS were taken from PerformanceObserver and transfer sizes from the browser. This is not field data._

| Site (page) | TTFB (mobile run) | LCP mobile / desktop | CLS max | Transfer mobile | JS | Requests / third-party | Notes | Source |
|---|---|---|---|---|---|---|---|---|
| NAB (home) | 27 ms | 540 / 776 ms | 0.024 | 7,605 KB (images 5,786 KB) | 1,192 KB | 64 / 31 | 28% of visible paragraphs and list items under 14 px on mobile | [home](https://nabsolutions.com/se/) |
| Fellowmind (home) | 228 ms | 440 / 404 ms (video) | 0.002 | 7,259 KB (images 3,588 KB) | 594 KB | 49 / 7 | | [home](https://www.fellowmind.com/sv-se/) |
| Modia (home) | 708 ms | 1,004 / 716 ms | 0.001 | 1,060 KB | 389 KB | 28 / 6 | | [home](https://modia.se/) |
| Exsitec (home) | 731 ms | 2,372 / 1,916 ms | 0.006 | 5,676 KB | 1,818 KB | 137 / 68 | Load event at 4.9 s on mobile | [home](https://www.exsitec.se/) |
| BrightCom (home) | 121 ms | 1,464 / 1,232 ms | 0.032 | 1,918 KB | 1,211 KB | 85 / 45 | | [home](https://www.brightcom.se/) |
| InBiz (home) | 566 ms | 640 / 1,128 ms | 0 | 874 KB | 551 KB | 22 / 11 | 16% small text | [home](https://inbiz.se/) |
| Evidi (home) | 944 ms | 3,460 / 1,228 ms | 0 | 838 KB | 543 KB | 18 / 11 | | [home](https://www.evidi.com/se/) |
| Sherpas (home) | 142 ms | 980 / 224 ms | 0 | 7,304 KB (desktop 1,474 KB) | 370 KB | 58 / 13 | | [home](https://sherpas.se/) |
| Navet (home) | 2,244 ms | 2,432 / 1,424 ms | 0 | 1,648 KB (fonts 921 KB) | 140 KB | 78 / 1 | | [home](https://navet.se/) |
| Goodfellows (home) | 159 ms | 212 / 432 ms | 0.131 (desktop) | 3,428 KB | 161 KB | 53 / 1 | | [home](https://goodfellows.se/) |
| Basecloud (home) | 273 ms | 552 / 248 ms | 0.032 | 1,614 KB | 1,219 KB | 55 / 49 | | [home](https://www.basecloud.se/) |
| CGI (BC page) | 334 ms | 692 / 556 ms | 0.04 | 1,015 KB | 467 KB | 37 / 13 | 11% small text | [BC](https://www.cgi.com/se/sv/microsoft-dynamics-365-business-central) |
| Azets (BC page) | 578 ms | 760 / 552 ms | 0 | 2,343 KB | 1,875 KB | 90 / 27 | Load event at 3.5 s | [BC](https://www.azets.com/sv-se/tjanster/it-losningar/business-central) |

**Mobile layout and consent**
- None of the 13 pages overflows horizontally at 390 px.
- Consent banners:
  - Cover most of the first mobile screen on Fellowmind (Cookiebot), Exsitec, BrightCom, Evidi (full-screen Cookiebot) and Sherpas (Cookiebot).
  - The reject option carries less visual weight than accept on Modia and Goodfellows.
  - Accept and reject carry equal weight on NAB (CookieYes), InBiz (CookieYes), Navet, CGI and Azets (OneTrust).
  - Basecloud shows an English cookie bar with only "Accept".
- Sources: screenshots of the home pages in the table above.

**Visual notes (mobile and desktop screenshots)**
- NAB: a clean white layout with large photography; a chatbot bubble opens on its own on desktop.
- Fellowmind: a full-width magenta video hero.
- Modia: a bold orange-red palette, large type and a strong voice.
- Exsitec: a purple gradient hero.
- BrightCom: a dark theme with demo, quote and price CTAs above the fold.
- InBiz: a dated stock-photo look.
- Evidi: serif typography.
- Sherpas: a left-hand menu, a video hero and a Serpentin wordmark.
- Navet: a blue duotone with an Aderian top bar.
- Basecloud: a plain template.

**Technical weaknesses (raw HTML)**
- **NAB:**
  - 202 of 205 images on the articles index have empty alt text [Source](https://nabsolutions.com/se/resurser/artiklar/).
  - The BC page description stops mid-sentence [Source](https://nabsolutions.com/se/erp/vad-ar-microsoft-dynamics-365-business-central/).
  - No meta description on the switching page [Source](https://nabsolutions.com/se/ar-det-dags-att-byta-affarssystem/).
  - Title and H1 don't match on the partner page [Source](https://nabsolutions.com/se/erp/microsoft-partner-for-business-central-sa-valjer-du-ratt-erp-partner/).
  - Icon ligature text appears in link labels [Source](https://nabsolutions.com/se/).
- **Fellowmind:**
  - The Swedish home page has an English title and H1, and 23 of its 37 images have no alt text [Source](https://www.fellowmind.com/sv-se/).
  - A landing page is titled "BC cloud migration" [Source](https://www.fellowmind.com/sv-se/business-central-molnbaserad-affarsplattform/).
  - Index pages have 22–59 words of main content [Source](https://www.fellowmind.com/sv-se/cases/).
- **Modia:**
  - The raw HTML is identical for every URL, including for the Googlebot user agent.
  - A decorative H2 repeats on every page.
  - The sitemap has no lastmod.
  - [Source](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem) [Source](https://modia.se/sitemap.xml)
- **Exsitec:**
  - H1 typos "gerkontroll" and "meddina" [Source](https://www.exsitec.se/affarssystem) [Source](https://www.exsitec.se/kontakt-support).
  - Two H1s and the description "Business Central" on the integration page [Source](https://www.exsitec.se/systemintegration/integrationer/business-central).
  - 83 of 86 images have no alt text on the case page [Source](https://www.exsitec.se/case).
  - The manufacturing page has an H2 "Lösningar som passar bygg och anläggning" [Source](https://www.exsitec.se/bransch/tillverkning).
- **BrightCom:**
  - A malformed phone link: `tel:%20040%20–%2060%2060%20200` [Source](https://www.brightcom.se/).
  - Danish fragments ("Logistik og frakt", "Se vores integrationer") and a Danish phone number on the Swedish contact page [Source](https://www.brightcom.se/kontakta).
  - The "Priser for" typo [Source](https://www.brightcom.se/dynamics-business-central/priser/).
  - No H1 on the requirements page [Source](https://www.brightcom.se/business-central-kravspecifikation).
- **InBiz:** `lang="en-US"`, the indexable "Hello world!" post, a "News Archive" title, and duplicated or mismatched titles [Source](https://inbiz.se/) [Source](https://inbiz.se/hello-world/) [Source](https://inbiz.se/nyheter/) [Source](https://inbiz.se/vara-losningar/microsoft-dynamics-365/).
- **Evidi:**
  - "Startsida" as a second H1 [Source](https://www.evidi.com/se/).
  - Truncated titles, no JSON-LD, and a FAQ without FAQPage markup [Source](https://www.evidi.com/se/produkter/microsoft-dynamics-365-business-central).
  - The H2 typo "Busines Central" in the BC guide [Source](https://www.evidi.com/se/allt-du-behover-veta-om-affarssystemet-dynamics-365-business-central).
- **Sherpas:** the "Home - Sherpas" / "Home" metadata, four H1s, no alt text, and robots.txt and sitemap URLs that return a soft 404 [Source](https://sherpas.se/) [Source](https://sherpas.se/robots.txt).
- **Navet:**
  - A slow TTFB (0.9–2.2 s across curl and browser).
  - FAQ content duplicated across three URL patterns.
  - Inner pages without descriptions, and titles of 99–135 characters.
  - Menu labels marked up as H2s, and unrelated legacy posts.
  - [Source](https://navet.se/sitemap_index.xml) [Source](https://navet.se/produkter/business-central)
- **Effekt:** the Swedish home page canonicalises to /en, /sv returns 404, the sitemap lists one URL, and there is no meta description [Source](https://effekt.se/) [Source](https://effekt.se/sv) [Source](https://effekt.se/sitemap.xml).
- **Enqore:** English template H2s on the Swedish home page, such as "Check out the latest and greatest" and "Make your data the hero of the story" [Source](https://enqore.se/).
- **Yellow Solution:** the footer line "Yellow Solution AB 2020 © All Rights Reserved" is marked up as an H2, and the BC page repeats H2s [Source](https://yellowsolution.se/dynamics-365-business-central/).
- **Basecloud:**
  - The title typo "affärsystemet".
  - Case H1s that look like template placeholders: "Crosby Website", "Iduma Website", "Degraw Website", "Tresoire Website".
  - The same title and description on /vara-tjanster and /vara-appar.
  - [Source](https://www.basecloud.se/case) [Source](https://www.basecloud.se/vara-tjanster)
- **Goodfellows:** an empty meta description, repeated H1s and a desktop CLS of 0.131 [Source](https://goodfellows.se/).

### Inferences
- **Technical quality is a measurable edge.** A lightweight, server-rendered Swedish site could beat most of this set on page weight, LCP, basic accessibility and metadata, for example:
  - Under about 1.5 MB per page.
  - One H1 per page and complete alt text.
  - Equal-weight consent buttons.
- **Consent design is visible on mobile.** A compact banner with equal accept and reject keeps the hero visible. It follows the privacy-friendly pattern NAB, InBiz, Navet, CGI and Azets already use.

### Gaps
- **No field data (CrUX):** every PageSpeed Insights API call returned HTTP 429 (quota exceeded). Lab runs were single, unthrottled and from one location, and no Lighthouse or axe accessibility audit was run.
- **Tool detection is pattern-based.** A match for "Intercom" on BrightCom was a false positive from the word "Intercompany" and is not reported. "LinkedIn" and "YouTube" matches were not treated as trackers.

---

## Comparison matrix

### Takeaway
Among the eight named competitors, the strongest showings are:
- **Price transparency combined with a packaged offer:** NAB, Fellowmind and BrightCom.
- **BC-specific technical SEO:** BrightCom's titles, NAB's Yoast schema, and Fellowmind's FAQPage/Service markup.
- **Freshness:** NAB, Fellowmind, Exsitec, BrightCom and Evidi.

No competitor combines all of the following, which leaves room for Verdana:
- A BC-only focus and a consultancy framing.
- Transparent prices and a documented method.
- Strong technical SEO with rich structured data.
- A fast, accessible mobile experience.

### Cited Findings
_Checked 2026-10-11. Details and sources are in the sections above._

**Named competitors**

| Attribute | NAB | Fellowmind | Modia | Exsitec | BrightCom | InBiz | Evidi | Sherpas |
|---|---|---|---|---|---|---|---|---|
| Swedish site | nabsolutions.com/se/ | fellowmind.com/sv-se/ | modia.se | exsitec.se | brightcom.se | inbiz.se | evidi.com/se/ | sherpas.se |
| Platform | WordPress + Yoast | Optimizely | Vite SPA | HubSpot CMS | HubSpot CMS | WordPress + Yoast | Custom | Umbraco |
| Group / brand | Own brand; investor-relations page | 7 locale sites | Formerly Goodfellows Business | Group with investor-relations content; owns BrightCom | Part of Exsitec | Independent; Companial network | NaviPro → Evidi | Part of Serpentin |
| BC focus | ERP + CRM + AI (Microsoft) | One of many Microsoft areas | BC only | One of several ERPs | BC only (e-commerce/retail) | NAV/BC only | One of many | One of 7 platforms |
| Sitemap URLs (Swedish) | 376 | 638 | 33 | 1,224 | 100 (possibly capped) | 46 | 382 + 864 glossary | No sitemap |
| Newest lastmod | 2026-09-18 | 2026-10-09 | None | 2026-10-09 | 2026-10-09 | 2025-11-17 | 2026-10-09 | n/a |
| Home title / H1 | Good / 1 H1 | English title and H1 | No H1 in raw HTML; fine when rendered | Generic / 1 H1 | Keyword-rich / 1 H1 | NAV-focused / generic H1 | Brand slogan / 2 H1s | "Home" / 4 H1s |
| JSON-LD on service pages | Yoast graph (+ Article, FAQ microdata) | Organization, FAQPage, Service, Article | ProfessionalService/LocalBusiness in the shell only | None | None | Yoast, no Organization | None | None |
| hreflang | None | 7 locales | None | 5 (home) | da/no/sv | None (lang en-US) | 4 | sv/en |
| Published prices | Yes: licences, BC Start from 50 000 kr, förvaltning tiers | Yes: packages 79 000 / 99 000 kr, support 295 kr | Cost ranges | Links to BrightCom; integration calculator | Licences and apps; Launch fee not shown | No | No | No (fixed-price analysis, no amount) |
| Packaged offer | BC Start (1–3 weeks) | Ready, Set, BC! | Target-price model | – | Launch (1–2 months) | – | – | Nulägesanalys |
| NAV content | 3,626-word guide | 2021 article (updated 2026) | None in sitemap | None in sitemap | Upgrade and NAV-partner articles | Core positioning | Rename page only | Mention on BC page |
| Copilot / AI | Hub + 29 slugs + chatbot | 17 slugs + BC Copilot article | Service area | AI glossary and agents | None | None | 15 slugs | None seen |
| Power BI | Page + BC post | 17 slugs | – | 10 slugs | – | Mislabelled page | 1 | Platform page |
| Gated download | Switching guide | Buyer's guide | – | Requirements spec | Requirements spec | – | – | – |
| Chat | NAB Copilot bot | – | – | HubSpot | HubSpot | – | – | – |
| Phone on every page | No (contact page only) | No (contact page only) | Contact page | Yes | Yes (malformed link) | Yes | No tel links | Yes |
| Mobile LCP (lab) | 540 ms | 440 ms | 1,004 ms | 2,372 ms | 1,464 ms | 640 ms | 3,460 ms | 980 ms |
| Mobile transfer (lab) | 7.6 MB | 7.3 MB | 1.1 MB | 5.7 MB | 1.9 MB | 0.9 MB | 0.8 MB | 7.3 MB |
| Most visible weakness | Image weight, empty alt text | English home metadata | Unique content only after JavaScript | Typos, no schema, heavy third-party load | Danish fragments, malformed phone link | Stale and default pages | Truncated titles, slow LCP | "Home" metadata, no sitemap |

**Additional competitors**

| Attribute | Navet | Enqore | Effekt | Yellow Solution | Basecloud | CGI | Azets |
|---|---|---|---|---|---|---|---|
| Platform | WordPress + Yoast + Elementor | WordPress (Yoast-style graph) | Drupal 11 | WordPress + Elementor | Squarespace | Drupal | Next.js + Sanity |
| Focus | BC + D365 + rental/process manufacturing (Aderian) | BC + CRM + BI; 6 offices | BC + Power BI + training | BC specialist | BC + own apps | BC one of many | BC within IT services |
| Sitemap URLs | 491 | 203 | 1 | 29 | 18 | n/a | n/a |
| Distinctive content | Cost FAQ cluster (licence, AI, Power BI, training, partner vs konsult) | BC-konsult, BC implementation, Copilot/agents and BC + Power BI pages | Copilot cost analysis; BC release notes | – | – | Förvaltning + FAQ | NAV upgrade H2; FAQ (11 questions) |
| Prices | Licence FAQ | – | Copilot cost scenarios | – | – | – | – |
| Schema | Article + FAQPage | FAQPage | None | Yoast-style | Organization, LocalBusiness | Service, BreadcrumbList | Service, FAQPage |
| Most visible weakness | 2.2 s TTFB, duplicate FAQ URLs, no descriptions | English template H2s | Swedish page canonicalised to English; near-empty sitemap | Thin pages; "2020 ©" | Typos; placeholder case titles | – | 1.9 MB of JavaScript |

### Inferences
- The matrix shows three positions that no one clearly holds:
  1. An independent, BC-only consultancy voice.
  2. Full transparency on prices and method, including support.
  3. Technical excellence (server rendering, schema, speed, accessibility) combined with deep BC content.

### Gaps
- The matrix reflects only the pages checked on 2026-10-11. The gaps listed in earlier sections apply here too.

---

## What must a credible Swedish Business Central consultancy site have?

### Takeaway
Most competitors have the following, and sites without them visibly lose credibility:
- A clear Swedish H1 that names BC and the audience.
- Dedicated BC service pages: implementation, NAV/Navision migration, integrations, support/förvaltning, Power BI and Copilot.
- A price page with at least licence prices and price ranges.
- Visible contact routes: phone, email, form and a meeting or demo request.
- A real team and company facts, plus cases or logos once Verdana has them.
- FAQ blocks.
- Dated, current articles, including release-wave updates.
- Basic technical SEO:
  - Unique titles and descriptions, one H1 per page and self-canonicals.
  - A sitemap with lastmod and structured data.
  - A Swedish lang attribute, alt text and fast mobile pages.

### Cited Findings
_Checked 2026-10-11. Counts are out of the eight named competitors._

| Element | Present on | Count | Sources |
|---|---|---|---|
| Dedicated BC page | All eight | 8/8 | [NAB](https://nabsolutions.com/se/erp/vad-ar-microsoft-dynamics-365-business-central/), [Fellowmind](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/), [Modia](https://modia.se/tjanster), [Exsitec](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central), [BrightCom](https://www.brightcom.se/microsoft-dynamics-365-business-central), [InBiz](https://inbiz.se/vara-losningar/microsoft-dynamics-365-2/), [Evidi](https://www.evidi.com/se/produkter/microsoft-dynamics-365-business-central), [Sherpas](https://sherpas.se/plattformar/business-central/) |
| Customer cases or logos | All eight | 8/8 | e.g. [NAB](https://nabsolutions.com/se/alla-kundcase/), [Modia](https://modia.se/case), [Evidi](https://www.evidi.com/se/vara-kunder) |
| Contact form or form pop-up | All eight | 8/8 | See the conversion section |
| Published price figures | NAB, Fellowmind, Modia, BrightCom | 4/8 | See the content section |
| Packaged or fixed-price entry offer | NAB, Fellowmind, BrightCom, Modia (target price), Sherpas (analysis) | 5/8 | See the methodology section |
| NAV/Navision-specific page or article | NAB, Fellowmind, BrightCom, InBiz | 4/8 | See the content section |
| Copilot/AI content | NAB, Fellowmind, Modia, Exsitec, Evidi | 5/8 | See the content section |
| Content updated within 30 days (sitemap) | NAB, Fellowmind, Exsitec, BrightCom, Evidi | 5/8 | See the URL-structure section |
| Industry pages | NAB, Fellowmind, Exsitec, Evidi, InBiz | 5/8 | See the navigation section |
| Gated guide or template | NAB, Fellowmind, Exsitec, BrightCom | 4/8 | See the conversion section |
| Phone linked on every page | Exsitec, BrightCom, InBiz, Sherpas | 4/8 | See the conversion section |
| FAQ section on BC or key pages | NAB, Fellowmind, Modia, Evidi | 4/8 | See the SEO-elements section |
| Organization-type JSON-LD | NAB, Fellowmind, Modia | 3/8 | See the SEO-elements section |
| Chat | NAB, Exsitec, BrightCom | 3/8 | See the conversion section |

### Inferences
**Must-haves for Verdana's launch**, ordered by what has to be built first, not by importance:
1. A Swedish, server-rendered site with:
   - `lang="sv-SE"`.
   - Unique titles and descriptions, one H1 per page and self-canonicals.
   - An XML sitemap with lastmod, and a robots.txt that points to it.
2. Structured data:
   - Organization or ProfessionalService JSON-LD with a real address, phone and sameAs.
   - Service markup on service pages.
   - FAQPage only where a FAQ is visible.
   - Article and BreadcrumbList.
3. A service page for each offering in the brief: rådgivning/ERP-strategi, implementation, migrering & modernisering (NAV/Navision), integrationer & utveckling, support & optimering, förvaltning, konsulttjänster, Power BI/rapportering and AI/Copilot.
4. A price page with at least sourced, dated licence prices. Add Verdana's own pricing model or ranges if Verdana decides to publish them.
5. Contact routes on every page: phone, email, form, and ideally a bookable meeting slot.
6. A team page with real people, and an About page with company facts. Add cases and logos only when they are real and approved.
7. A knowledge section with dated articles on price, NAV to BC, switching from Fortnox or Visma, Copilot and Power BI.
8. A privacy-friendly consent banner with equal accept and reject options.

### Gaps
- The counts show whether an element is present, not how good it is or how it affects conversion or rankings.

---

## Which keywords and topics are heavily targeted, and which are underserved (content gaps)?

### Takeaway
**Heavily targeted** (in titles, H1s or slugs on several sites):
- "Business Central partner".
- "Vad är (Microsoft Dynamics 365) Business Central".
- Business Central price, cost or licence ("pris", "kostnad", "kostar", "licens").
- "Byta affärssystem".
- NAV/Navision upgrades.
- Copilot/AI.
- "Kravspecifikation".
- "Demo" and "offert".

**Lightly covered on the sites checked:**
- **"Business Central konsult":** only Enqore has a dedicated page; Navet has FAQ pages.
- **City modifiers:** none.
- **Support/förvaltning pricing:** only NAB and Fellowmind publish figures.
- **NAV migration by version, and NAV upgrade cost or timeline:** only BrightCom's "från 40 timmar".
- **"Fortnox/Visma/Spiris till Business Central":** only NAB's offer page.
- **BC compared with Swedish ERPs:** BrightCom's Specter comparison and Modia's list.
- **BC-specific Copilot cost:** Effekt, plus a Navet FAQ.
- **Power BI for BC as a scoped, priced service:** none priced.

### Cited Findings
_Checked 2026-10-11._

| Keyword / topic | Where it appears in titles, H1s or slugs | Sources |
|---|---|---|
| "Business Central partner" | BrightCom home title; Navet title; Modia title and partner article; NAB partner-article H1; Fellowmind "Nära på riktigt som din Business Central-partner" | [BrightCom](https://www.brightcom.se/), [Navet](https://navet.se/), [Modia](https://modia.se/kunskapsbank/hur-valjer-du-ratt-business-central-partner), [NAB](https://nabsolutions.com/se/erp/microsoft-partner-for-business-central-sa-valjer-du-ratt-erp-partner/), [Fellowmind](https://www.fellowmind.com/sv-se/losningar/business-applications-erp/dynamics-365-business-central/nara-pa-riktigt-som-din-business-central-partner/) |
| "Vad är Business Central" | NAB BC title and H1; BrightCom article; Exsitec and Evidi H2s; Enqore FAQ | [NAB](https://nabsolutions.com/se/erp/vad-ar-microsoft-dynamics-365-business-central/), [BrightCom](https://www.brightcom.se/artiklar/vad-ar-business-central), [Exsitec](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central), [Evidi](https://www.evidi.com/se/produkter/microsoft-dynamics-365-business-central), [Enqore](https://enqore.se/erp-hos-enqore/business-central/) |
| Price, cost, licence | NAB priser and BC Start; BrightCom priser; Modia cost article; Navet FAQs on licences, per-user cost, implementation, AI, Power BI, integrations and training; Exsitec integration cost and calculator; Effekt Copilot cost | [NAB](https://nabsolutions.com/se/om-nab-solutions/priser/), [BrightCom](https://www.brightcom.se/dynamics-business-central/priser/), [Modia](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem), [Navet](https://navet.se/business-central/vad-kostar-microsoft-dynamics-365-business-central-per-anvandare), [Exsitec](https://www.exsitec.se/artiklar/vad-kostar-en-integration), [Effekt](https://effekt.se/blog/vad-kostar-copilot-i-business-central-och-nar-borjar-det-bli-riktigt-intressant) |
| "Byta affärssystem" | NAB, Evidi, Fellowmind buyer's guide, Modia, Exsitec menu | See the content section |
| NAV / Navision | NAB guide title; Fellowmind article; BrightCom (2 articles, 8 slugs); InBiz title; Navet FAQ; Azets H2 | See the content section |
| "Implementation" | Enqore title "Business Central implementation"; Modia services title; Fellowmind article | [Enqore](https://enqore.se/erp-hos-enqore/business-central/business-central-2-go/), [Modia](https://modia.se/tjanster), [Fellowmind](https://www.fellowmind.com/sv-se/inspiration-och-nyheter/hur-gar-det-till-att-implementera-ett-nytt-affarssystem/) |
| "Konsult" | Enqore BC-konsult page; Navet FAQs "hur hittar jag en certifierad Business Central-konsult i Sverige" and "skillnaden mellan en partner och konsult" | [Enqore](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/), [Navet](https://navet.se/business-central/hur-hittar-jag-en-certifierad-business-central-konsult-i-sverige), [Navet](https://navet.se/business-central/vad-ar-skillnaden-mellan-en-partner-och-konsult-for-business-central) |
| Copilot / agents | NAB hub; Enqore; Effekt; Fellowmind article; Azets H2 | See the content section |
| Kravspecifikation | BrightCom (gated, no H1); Exsitec | [BrightCom](https://www.brightcom.se/business-central-kravspecifikation), [Exsitec](https://www.exsitec.se/affarssystem/microsoft-dynamics-365-business-central) |
| Demo / offert | BrightCom demo and quote pages; Navet and Basecloud CTAs | [demo](https://www.brightcom.se/dynamics-business-central/demo/), [offert](https://www.brightcom.se/dynamics-business-central/offert/) |
| City + BC | None found | See the navigation section |
| Support/förvaltning price | NAB tiers; Fellowmind 295 kr; Modia ranges | See the content section |

### Inferences
**Candidate keyword clusters for Verdana** (Swedish), to validate against search-volume data:
1. **Consultancy intent:** "Business Central konsult", "BC-konsult", "Business Central utvecklare", "Business Central rådgivning", "anlita Business Central-konsult". Add city variants only where Verdana actually works.
2. **Implementation:** "Business Central implementation", "implementera Business Central", "Business Central projekt tid", "Business Central införande".
3. **Migration:**
   - "uppgradera Navision till Business Central" and "Dynamics NAV till Business Central".
   - Version-specific variants such as "NAV 2018 till Business Central".
   - "Navision support" and "NAV end of support".
4. **Price:** "Business Central pris", "Business Central licens pris", "vad kostar Business Central", "Business Central implementering kostnad", "förvaltningsavtal Business Central pris".
5. **Switching from small-business systems:**
   - "byta från Fortnox till Business Central" and "Visma till Business Central".
   - "Business Central vs Fortnox", "Business Central vs Visma Net" and "Business Central vs Monitor/Pyramid".
6. **AI and reporting:** "Copilot i Business Central", "Business Central agenter kostnad", "Power BI Business Central", "Business Central rapporter".
7. **Integrations:** "Business Central integration" plus specific systems (e-commerce, bank, EDI, WMS), prioritising the ones Verdana actually supports.

**Content gaps Verdana could fill:**
- A dated licence-price explainer that cites Microsoft's Swedish list prices and explains commitment terms.
- A NAV migration hub organised by starting version.
- Honest "when BC is not right for you" comparisons against Swedish ERPs.
- Support/förvaltning SLA and pricing.
- A BC-specific Copilot cost guide.
- An ungated requirements template.

### Gaps
- No keyword tool data (volume, difficulty, CPC) and no SERP checks.
- "Underserved" means few or none of the 15 sites checked target the term on the page, not that people search for it. Validate before building pages.

---

## Where can Verdana stand out without relying on references or partner claims?

### Takeaway
These opportunities don't depend on references, partner status, prices or company history. Each comes from a gap seen in this set:
1. A consultancy positioning: "konsult", not "partner".
2. Full transparency on prices, method, SLA and assumptions.
3. The deepest NAV/Navision migration content.
4. Honest switching and comparison guidance for Swedish SMEs.
5. BC-specific Copilot and Power BI expertise, shown through content.
6. Better technical quality and UX than any competitor checked.
7. People-first trust: named experts and verifiable individual credentials, only if real.

### Cited Findings
_Checked 2026-10-11. Each item links an opportunity to the gap observed._
1. **Konsult framing:** competitors overwhelmingly call themselves "partner". Only Enqore has a dedicated BC-konsult page [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-konsult/), and Navet covers "partner vs konsult" in a FAQ [Source](https://navet.se/business-central/vad-ar-skillnaden-mellan-en-partner-och-konsult-for-business-central).
2. **Price transparency:**
   - Licence figures conflict across [NAB](https://nabsolutions.com/se/om-nab-solutions/priser/), [BrightCom](https://www.brightcom.se/dynamics-business-central/priser/), [Navet](https://navet.se/business-central/hur-mycket-kostar-en-business-central-licens-i-sverige) and [Modia](https://modia.se/kunskapsbank/vad-kostar-ett-affarssystem), and against Microsoft's own list (764,70 / 1 051,40 / 76,50 kr) [Source](https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing).
   - No site has a BC cost calculator. Exsitec's calculator covers integrations only [Source](https://www.exsitec.se/systemintegration).
   - Only NAB and Fellowmind publish support prices.
3. **NAV migration depth:** the longest NAV page is NAB's 3,626-word guide; the others are short articles or FAQs, and none is organised by NAV version [Source](https://nabsolutions.com/se/erp/navision-microsoft-dynamics-nav-och-vagen-vidare-till-business-central/) [Source](https://www.brightcom.se/artiklar/uppgradera-dynamics-nav).
4. **Switching and comparisons:**
   - NAB's fixed-price page targets Fortnox and Visma users [Source](https://nabsolutions.com/se/erp/erp-till-fastpris-business-central-start/).
   - BrightCom compares BC with Specter [Source](https://www.brightcom.se/artiklar/jamforelse-av-priser-och-kostnader-mellan-affarssystemen-specter-och-microsoft-dynamics-365-business-central).
   - Modia lists comparisons with Monitor and Pyramid [Source](https://modia.se/kunskapsbank).
5. **Copilot and Power BI depth:**
   - BC-specific Copilot cost content exists only at Effekt and in a Navet FAQ [Source](https://effekt.se/blog/vad-kostar-copilot-i-business-central-och-nar-borjar-det-bli-riktigt-intressant) [Source](https://navet.se/business-central/hur-mycket-kostar-business-central-med-ai-funktioner-aktiverade).
   - Power BI for BC is offered as content or workshops, not as a scoped, priced service [Source](https://enqore.se/erp-hos-enqore/business-central/business-central-2-power-bi/).
6. **Technical and UX quality:** see the lab metrics and weaknesses above. Examples: Modia's JavaScript-only content, Exsitec's 137 requests, Evidi's 3.5 s mobile LCP, Sherpas' metadata, and no online booking on any site [Source](https://modia.se/) [Source](https://www.exsitec.se/) [Source](https://www.evidi.com/se/) [Source](https://sherpas.se/).
7. **Methodology transparency:** methods appear only as lists of 3–6 phase names (NAB, BrightCom, Modia, Evidi) [Source](https://www.brightcom.se/business-central-fast-pris-e-handel) [Source](https://modia.se/tjanster) [Source](https://www.evidi.com/se/leveranser/erp-affarssystem).
8. **Legacy trust claims:** "Silver" on InBiz and "Gold Partner" on Sherpas use retired terminology [Source](https://inbiz.se/microsoft-partner/) [Source](https://sherpas.se/nyheter/) [Source](https://rcpmag.com/articles/2022/10/07/qa-microsoft-cloud-partner-program-launch.aspx).
9. **Language consistency:** Fellowmind's Swedish home page has English metadata, BrightCom has Danish fragments, Enqore has English template headings, and InBiz sets `lang="en-US"` [Source](https://www.fellowmind.com/sv-se/) [Source](https://www.brightcom.se/kontakta) [Source](https://enqore.se/) [Source](https://inbiz.se/).

### Inferences
Concrete moves for Verdana, each avoiding unverified claims:
- **Own "Business Central-konsult".**
  - Position Verdana as a specialist BC consultancy: senior, hands-on and vendor-neutral within the Microsoft ecosystem.
  - Build a konsult hub with a page per service and consultant profiles (skills, BC areas, languages).
  - Add city pages only where Verdana genuinely works, to avoid thin, near-duplicate location pages.
- **Build a "Vad kostar Business Central?" hub.**
  - A sourced, dated licence table linked to Microsoft's Swedish price page, explaining billing and commitment terms.
  - Verdana's own pricing model (hourly rate, packages or ranges), if Verdana decides to publish it.
  - A transparent estimator: users × licence price, plus an implementation range and support. It should state its assumptions, say clearly that it is not a quote, and lead to a consultation CTA.
  - Nothing like this exists in the set.
- **Create a NAV/Navision migration centre.**
  - Paths for each starting version, from older NAV/Navision versions through NAV 2018 and BC on-premises.
  - What happens to customisations (for example, C/AL code re-implemented as AL extensions), data-migration options and typical effort drivers.
  - A readiness checklist, risks and a sample project plan.
  - A free "NAV-uppgraderingskoll" booking.
  - Date every fact and source it to Microsoft documentation.
- **Publish honest comparison and switching pages.**
  - "Från Fortnox/Visma/Spiris till Business Central".
  - "Business Central vs Monitor/Pyramid/Visma Net", each with a "när BC inte passar" section.
  - Keep comparisons factual, dated and sourced.
- **Publish the delivery method.**
  - Phases with deliverables, customer tasks, typical durations, testing and acceptance, hypercare and handover.
  - Offer ungated templates: kravspecifikation, a data-migration checklist and a UAT test-case template.
  - This turns "we are new" into "you can see exactly how we work".
- **Offer support/förvaltning with an explicit SLA.**
  - Response times, what is included and how hours are billed.
  - Update and release management for BC's twice-yearly release waves.
  - Publish prices if Verdana chooses; today only NAB and Fellowmind do.
- **Show BC-specific AI and reporting expertise.**
  - A Copilot-in-BC page covering features by role, agents, costs, and data and governance prerequisites.
  - A Power BI-for-BC offer with a defined starter report pack.
  - Keep both up to date with each BC release.
- **Set the technical and UX benchmark.**
  - A server-rendered (static or SSR), Swedish-only site under about 1.5 MB per page, with lab mobile LCP well under 1 s.
  - Complete JSON-LD, full alt text and equal-weight consent buttons.
  - Sticky call and booking buttons on mobile, plus an online booking calendar.
  - On these points Verdana would be measurably ahead of every competitor checked.
- **Build people-first trust.**
  - Named consultants with photos, short backgrounds and LinkedIn profiles.
  - Individual Microsoft certification badges with verification links, only if held.
  - Company registration facts, clear terms, and a security and GDPR page.
  - Add the Microsoft directory link and customer cases only once they exist.
- **Keep a freshness routine.** Publish a short Swedish "Nytt i Business Central" note for major updates and each release wave, as NAB, Enqore and Effekt do. It signals active expertise without needing references.

### Gaps
- Verdana's actual capabilities, certifications, prices and capacity are unverified, so each move must be checked against what Verdana can deliver and back up.
- None of the moves has been checked against search demand (no volume data).
- Current Microsoft certification names and exam codes for BC were not verified in this session.
- Comparison content has not been legally reviewed.
