import type { BusinessCentralPage } from "@/content/types";

export const businessCentral: BusinessCentralPage = {
  metaTitle: "Business Central – affärssystemet från Microsoft | Vardena",
  metaDescription:
    "Vad är Microsoft Dynamics 365 Business Central? Så fungerar affärssystemet för ekonomi, försäljning, inköp, lager och projekt – licenser, priser och NAV.",
  title: "Microsoft Dynamics 365 Business Central – affärssystemet för växande företag",
  lead: "Business Central är Microsofts affärssystem (ERP) för små och medelstora företag. Ekonomi, försäljning, inköp, lager, projekt och rapportering finns i ett och samma system. Här går vi igenom vad det täcker, hur licenserna fungerar och vad de kostar i Sverige, hur det hänger ihop med Dynamics NAV (Navision) och hur ni avgör om det passar er.",
  updated: "2026-10-11",
  guide: {
    title: "Vad vill ni veta?",
    lead: "Välj ett ämne eller läs från början. Varje avsnitt är kort och bygger på Microsofts egen dokumentation, som listas längst ned på sidan.",
    groups: [
      {
        title: "Produkten",
        topics: [
          { id: "vad-ar-business-central", icon: "core", label: "Vad det är", summary: "ERP för små och medelstora företag" },
          { id: "vad-det-tacker", icon: "modules", label: "Vad det täcker", summary: "Ekonomi, lager, inköp och projekt" },
          { id: "copilot", icon: "copilot", label: "Copilot och AI", summary: "Vad som ingår och vad som kostar" },
          { id: "integrationer", icon: "integration", label: "Integrationer", summary: "Microsoft 365, Power BI och API:er" },
        ],
      },
      {
        title: "Drift i Sverige",
        topics: [
          { id: "molnet-eller-on-premises", icon: "cloud", label: "Moln eller on-premises", summary: "I molnet eller på egna servrar" },
          { id: "licenser-och-priser", icon: "invoice", label: "Licenser och priser", summary: "Essentials, Premium, Team Members" },
          { id: "svensk-anpassning", icon: "translate", label: "Svensk lokalisering", summary: "SIE, moms och svenskt språk" },
          { id: "uppdateringar", icon: "updates", label: "Uppdateringar", summary: "Två större versioner per år" },
        ],
      },
      {
        title: "Inför beslutet",
        topics: [
          { id: "passar-det-er", icon: "company", label: "Vem det passar", summary: "När det passar – och när inte" },
          { id: "dynamics-nav", icon: "migration", label: "Dynamics NAV", summary: "Uppgradering och supportdatum" },
          { id: "kom-igang", icon: "deliver", label: "Kom igång", summary: "Fem steg från test till drift" },
          { id: "faq", icon: "question", label: "Vanliga frågor", summary: "Språk, drift, priser och Navision" },
        ],
      },
    ],
  },
  body: [
    { type: "h2", id: "vad-ar-business-central", text: "Vad är Business Central?" },
    {
      type: "p",
      text: "Microsoft beskriver Business Central som ett AI-baserat affärssystem för små och medelstora företag och uppger att det används av 55 000 företag i världen (Microsofts siffra, kontrollerad i oktober 2026). I praktiken är det systemet där huvudbok, kunder, leverantörer, artiklar, order och projekt hänger ihop. En försäljningsorder, lagret den drar från och fakturan och verifikationerna den skapar är samma data – ingen behöver föra över siffror mellan olika system.",
    },
    {
      type: "p",
      text: "Business Central ingår i Dynamics 365-familjen men har egna licenser och säljs separat. Ni behöver alltså inga andra Dynamics 365-produkter för att använda det.",
    },

    { type: "h2", id: "vad-det-tacker", text: "Vad systemet täcker" },
    {
      type: "p",
      text: "Microsofts licensguide räknar upp funktionsområdena. De flesta företag hittar det de behöver i **Essentials**:",
    },
    {
      type: "ul",
      items: [
        "**Ekonomi:** huvudbok, budgetar, bankavstämning, anläggningstillgångar, flera valutor, obegränsat antal dimensioner, kassaflödesprognos, periodiseringar, koncernkonsolidering, kostnadsredovisning och koncerninterna transaktioner.",
        "**Försäljning och CRM:** offerter, order, kontakter, kampanjer, affärsmöjligheter och integration med Outlook.",
        "**Inköp och leverantörsreskontra:** inköpsförslag, inköpsorder, leverantörsfakturor och betalningar.",
        "**Lager och logistik:** spårning av artiklar, lagerställen och överföringar, montering, efterfrågeprognoser, cykelinventering, lagerplatser, plock, inlagring, inleveranser och utleveranser.",
        "**Projekt:** projekt, projektofferter, resurser, kapacitet och tidrapporter.",
        "**Rapportering:** kontoscheman, analysrapporter, inbäddad Power BI, dokumentlayouter i Word och arbetsflöden.",
      ],
    },
    {
      type: "p",
      text: "**Premium** innehåller allt i Essentials plus två områden: **tillverkning** (produktionsorder, produktionsstrukturer, kapacitets- och försörjningsplanering, maskingrupper) och **servicehantering** (serviceorder, serviceavtal, serviceartiklar, planering och utskick av tekniker). Tillverkar ni inte själva och har ingen serviceverksamhet är det normalt Essentials som är aktuellt.",
    },

    { type: "h2", id: "molnet-eller-on-premises", text: "Molnet eller on-premises?" },
    { type: "p", text: "Business Central kan köras på två sätt:" },
    {
      type: "ul",
      items: [
        "**Online (SaaS):** Microsoft driftar systemet i Azure. Svenska miljöer ligger i Azure-regionen Sverige, och Microsoft rullar ut uppdateringar enligt ett fast schema.",
        "**On-premises:** ni, en partner eller en driftleverantör kör systemet på servrar ni själva kontrollerar, med en separat licensmodell.",
      ],
    },
    {
      type: "p",
      text: "Microsoft satsar tydligt på molnet. Produktsidan nämner bara molnet, och flera funktioner kräver Business Central online: Copilot och AI-agenterna, läsbehörighet i Teams för Microsoft 365-användare och de färdiga Power BI-apparna.",
    },
    {
      type: "p",
      text: "On-premises finns ändå kvar. Microsoft släppte version 29 för on-premises i oktober 2026, med ett svenskt paket. On-premises-versionerna omfattas av Microsofts Modern Lifecycle Policy, vilket innebär att supporten bara gäller så länge ni håller installationen uppdaterad. Licenserna säljs via Microsofts Dynamics Price List, antingen som evig licens eller som prenumeration, och Microsoft har uppgett att stoppet för köp av eviga licenser gäller nya kunder. Är on-premises ett krav för er bör ni kontrollera de aktuella licensvillkoren tidigt.",
    },

    { type: "h2", id: "licenser-och-priser", text: "Licenser och listpriser i Sverige" },
    {
      type: "p",
      text: "Business Central online licensieras per användare och månad och säljs bara via Microsofts program för molnåterförsäljare, Cloud Solution Provider (CSP). Så här såg listpriserna ut på Microsofts svenska prissida när vi kontrollerade den 11 oktober 2026:",
    },
    {
      type: "table",
      caption:
        "Microsofts listpriser på microsoft.com/sv-se, exkl. moms, betalas årsvis. Kontrollerat 2026-10-11.",
      head: ["Licens", "För vem", "Kr per användare/månad"],
      rows: [
        [
          "Essentials",
          "Fullständiga användare inom ekonomi, försäljning, inköp, lager och projekt",
          "764,70",
        ],
        ["Premium", "Fullständiga användare som även behöver tillverkning eller service", "1 051,40"],
        [
          "Team Members",
          "Användare som främst läser data, attesterar och gör begränsade ändringar",
          "76,50",
        ],
      ],
    },
    {
      type: "p",
      text: "Microsoft anger att priserna är vägledande: det faktiska priset visas i kassan eller sätts av er CSP-återförsäljare. De amerikanska listpriserna (80 dollar för Essentials, 110 dollar för Premium och 8 dollar för Team Members) gäller sedan 1 november 2025, då Microsoft höjde priset på Business Central för första gången på mer än fem år.",
    },
    { type: "p", text: "Några licensregler som är bra att känna till:" },
    {
      type: "ul",
      items: [
        "Användare med Essentials eller Premium har även Team Members-behörighet och får använda Copilot i Business Central.",
        "Ni kan lägga till upp till tre licenser för extern redovisningskonsult (External Accountant) per tenant, till exempel för revisor eller redovisningsbyrå.",
        "En enhetslicens (Device) låter flera personer dela en enhet, till exempel en handdator i lagret eller en terminal i produktionen.",
        "Användare med vissa Microsoft 365-licenser kan läsa data från Business Central i Teams utan egen Business Central-licens, så länge minst en person i organisationen har en.",
        "Varje tenant har 80 GB databaslagring plus 3 GB per Essentials-användare och 5 GB per Premium-användare, en produktionsmiljö och tre testmiljöer (sandlådor).",
      ],
    },
    {
      type: "p",
      text: "Hela bilden, med införande och löpande kostnader, finns i [Vad kostar Business Central?](/sv/insikter/vad-kostar-business-central).",
    },

    { type: "h2", id: "svensk-anpassning", text: "Svensk lokalisering och språk" },
    {
      type: "p",
      text: "Sverige är ett av länderna där Microsoft själv står för lokaliseringen, och Microsoft levererar även den svenska översättningen av systemet. Microsoft listar bland annat följande svenska funktioner:",
    },
    {
      type: "ul",
      items: [
        "SIE-export och SIE-import via appen Audit File Export (den äldre inbyggda SIE-funktionen är markerad för utfasning)",
        "Automatiska kontokoder och bokföringsmallar för automatkontering",
        "Inställningar för EU-trepartshandel vid inköp (moms)",
        "Balans- och resultaträkning",
        "Rapportering av betalningstider för stora företag",
      ],
    },
    {
      type: "p",
      text: "Sedan 2023 release wave 1 är den svenska lokaliseringen byggd som appar ovanpå Microsofts globala grundapplikation. Microsofts svenska dokumentation täcker inte alla lokala behov, till exempel svenska betalfilsformat mot banken eller digital inlämning av momsdeklarationen. Skriv in de kraven tidigt och bekräfta hur vart och ett ska lösas – med en app, en integration eller en manuell rutin.",
    },

    { type: "h2", id: "uppdateringar", text: "Uppdateringar: två release waves per år" },
    {
      type: "p",
      text: "Business Central online följer en sexmånaderscykel som Microsoft kallar release wave. Större uppdateringar kommer varje april och oktober, och mindre uppdateringar kommer under årets övriga tio månader. Efter en större release har administratörerna fem månader på sig att schemalägga uppdateringen innan Microsoft genomför den. Aktuell huvudversion är 29.0, 2026 release wave 2, som släpptes i oktober 2026.",
    },
    {
      type: "p",
      text: "De stora uppgraderingsprojekten med några års mellanrum försvinner, men i stället tillkommer en löpande uppgift: att testa era tillägg och integrationer mot varje release. Det arbetet kan ligga internt eller hos en leverantör av [support](/sv/tjanster/support) eller [förvaltning](/sv/tjanster/forvaltning).",
    },

    { type: "h2", id: "copilot", text: "Copilot och AI-agenter" },
    {
      type: "p",
      text: "Copilot är inbyggt i Business Central och ingår i Essentials och Premium. I oktober 2026 märker Microsoft fortfarande många Copilot-funktioner som förhandsversioner, bland annat den nya Microsoft Copilot-chatten i version 29, sammanfattningar av poster, analyshjälp och hjälp med bankavstämning. Flera funktioner stöds på svenska, medan andra, som automatisk ifyllnad av fält och förslag på försäljningsrader, bara finns på engelska.",
    },
    {
      type: "p",
      text: "Två AI-agenter är allmänt tillgängliga sedan november 2025. **Sales Order Agent** gör offerter och order av kundmejl, och en person granskar allt innan något skickas. **Payables Agent** skapar utkast till leverantörsfakturor från PDF-filer för granskning, men bokför dem inte. Agenterna ingår inte i användarlicensen: de förbrukar Copilot Credits som köps separat och kräver en Azure-prenumeration. För miljöer i Sverige behandlar Microsoft Copilot-data inom EU:s datagräns (EU Data Boundary).",
    },

    { type: "h2", id: "integrationer", text: "Integrationer" },
    {
      type: "ul",
      items: [
        "**Microsoft 365:** Outlook, Excel, Word, Teams och OneDrive.",
        "**Power BI:** rapporter inbäddade i Business Central och färdiga Power BI-appar (endast online).",
        "**Power Platform:** Power Automate (en Power Automate-licens ingår med Business Central), Power Apps, Power Pages och Dataverse.",
        "**Microsoft Marketplace:** appbutiken som tidigare hette AppSource, med appar från Microsoft och andra leverantörer.",
        "**API:er:** ett standardiserat REST-API (v2.0) som är aktiverat från start i onlineversionen.",
        "**E-handel och e-faktura:** en förinstallerad Shopify-koppling och ett ramverk för e-dokument med stöd för PEPPOL BIS 3 via anslutna tjänsteleverantörer.",
      ],
    },
    {
      type: "p",
      text: "Vissa integrationer kräver en egen prenumeration eller licens. Läs mer om [integrationer för Business Central](/sv/tjanster/integrationer).",
    },

    { type: "h2", id: "passar-det-er", text: "Vem passar det för – och när passar det inte?" },
    { type: "p", text: "Business Central brukar passa företag som:" },
    {
      type: "ul",
      items: [
        "har vuxit ur sitt ekonomisystem och behöver order, lager, logistik eller projekt i samma system som ekonomin",
        "har flera bolag eller valutor och vill hantera koncerninterna flöden och konsolidering i systemet",
        "redan arbetar i Microsoft 365 och vill ha affärsdata nära Outlook, Excel och Teams",
        "kör Dynamics NAV i dag och behöver en väg framåt med support",
      ],
    },
    { type: "p", text: "Det är kanske inte rätt val om:" },
    {
      type: "ul",
      items: [
        "ni bara behöver bokföring och fakturering – då kostar ett enklare ekonomisystem mindre",
        "kärnverksamheten är specialiserad tillverkning som skulle kräva omfattande anpassningar även i Premium",
        "ni vill köra helt on-premises och samtidigt räknar med de nyaste AI-funktionerna, som bara finns online",
        "ingen, internt eller externt, kommer att äga systemet efter driftstarten",
      ],
    },
    {
      type: "p",
      text: "En [förstudie med ERP-rådgivning](/sv/tjanster/radgivning) är det enklaste sättet att ta reda på det innan ni bestämmer er.",
    },

    { type: "h2", id: "dynamics-nav", text: "Business Central och Dynamics NAV (Navision)" },
    {
      type: "p",
      text: "Microsofts uppgraderingsväg för Dynamics NAV, som många fortfarande kallar Navision, leder till Business Central. Microsoft beskriver uppgraderingar från NAV 2009 SP1 och framåt: först uppgraderas NAV till Business Central version 14 on-premises, sedan till en aktuell version, och därifrån kan systemet flyttas till molnet. Den största praktiska skillnaden gäller anpassningar. NAV-kod (C/AL) måste göras om till AL-tillägg innan ni kan gå över till Business Central online.",
    },
    {
      type: "p",
      text: "Microsofts utökade support för NAV 2016 upphörde i april 2026. NAV 2017 följer den 11 januari 2027 och NAV 2018 den 11 januari 2028. Läs mer i [när supporten för Dynamics NAV upphör](/sv/insikter/navision-end-of-life) och i vår [guide från Dynamics NAV till Business Central](/sv/insikter/fran-dynamics-nav-till-business-central), eller se tjänsten [migrering från NAV till Business Central](/sv/tjanster/migrering-fran-nav).",
    },

    { type: "h2", id: "kom-igang", text: "Så kommer ni igång" },
    {
      type: "ol",
      items: [
        "**Testa systemet.** Microsoft erbjuder en kostnadsfri provperiod på 30 dagar som kan förlängas till sammanlagt 90 dagar.",
        "**Beskriv era processer.** Skriv ner hur order, inköp, lager, projekt och månadsbokslut fungerar i dag och var det skaver.",
        "**Gör en förstudie.** Bedöm hur väl Business Central passar, välj mellan Essentials och Premium och lista integrationer och data som ska flyttas.",
        "**Planera införandet.** Kom överens om omfattning, tidplan, datamigrering och test innan konfigurationen börjar. Läs om [implementation av Business Central](/sv/tjanster/implementation).",
        "**Ordna licenser och support.** Licenserna köps via en CSP-återförsäljare, som också är er första kontakt mot Microsofts support. Bestäm tidigt vem som stöttar er efter driftstarten.",
      ],
    },
    {
      type: "p",
      text: "Vill ni prata igenom era förutsättningar? [Kontakta oss](/sv/kontakt) och berätta var ni står i dag.",
    },
  ],
  faqs: [
    {
      question: "Vad är Business Central för system?",
      answer:
        "Business Central är Microsofts affärssystem för små och medelstora företag. Det samlar ekonomi, försäljning, inköp, lager, logistik och projekt i ett system, med rapportering ovanpå. Premium lägger till tillverkning och servicehantering.",
    },
    {
      question: "Är Business Central ett ERP-system?",
      answer:
        "Ja. Microsoft kallar själva Business Central för ett affärssystem (ERP) för små och medelstora företag. Det täcker hela flödet från order och inköp till lager och bokslut, inte bara bokföringen.",
    },
    {
      question: "Finns Business Central på svenska?",
      answer:
        "Ja. Sverige lokaliseras av Microsoft, som även levererar den svenska översättningen. Den svenska versionen har bland annat SIE-export och SIE-import, automatiska kontokoder och svenska rapporter för balans- och resultaträkning.",
    },
    {
      question: "Kan Business Central köras on-premises eller bara i molnet?",
      answer:
        "Båda alternativen finns. Onlineversionen ger automatiska uppdateringar, Copilot, AI-agenter, Teams-åtkomst för Microsoft 365-användare och färdiga Power BI-appar, vilket inte finns on-premises. On-premises omfattas av support bara så länge ni håller versionen aktuell, och licensieras på ett annat sätt.",
    },
    {
      question: "Vad är skillnaden mellan Business Central och Navision?",
      answer:
        "Microsofts uppgraderingsväg för Dynamics NAV (Navision) leder till Business Central. Skillnaderna är främst att anpassningar byggs som AL-tillägg, att onlineversionen uppdateras två gånger per år och att nya funktioner som Copilot kräver Business Central online. Läs vår [guide från NAV till Business Central](/sv/insikter/fran-dynamics-nav-till-business-central).",
    },
    {
      question: "Vad kostar Business Central?",
      answer:
        "Enligt Microsofts svenska listpriser kostar Essentials 764,70 kr, Premium 1 051,40 kr och Team Members 76,50 kr per användare och månad, exkl. moms och betalt årsvis (kontrollerat 2026-10-11). Implementation, appar och support tillkommer. Läs mer i [Vad kostar Business Central?](/sv/insikter/vad-kostar-business-central).",
    },
  ],
  sources: [
    {
      label: "Microsoft: Dynamics 365 Business Central (svensk produktsida)",
      url: "https://www.microsoft.com/sv-se/dynamics-365/products/business-central",
    },
    {
      label: "Microsoft: Business Central abonnemang och priser",
      url: "https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing",
    },
    {
      label: "Microsoft: Business Central pricing (USA)",
      url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing",
    },
    {
      label: "Microsoft Dynamics 365 Blog: New Business Central pricing effective November 2025",
      url: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2025/05/06/new-microsoft-dynamics-365-business-central-pricing-effective-november-2025/",
    },
    {
      label: "Microsoft: Dynamics 365 Licensing Guide (oktober 2026)",
      url: "https://go.microsoft.com/fwlink/?LinkId=866544",
    },
    {
      label: "Microsoft: Business Central on-premises Licensing Guide (november 2025, publicerad av tredje part)",
      url: "https://www.axians-infoma.de/wp-content/uploads/2023/04/Microsoft-Dynamics-365-Business-Central-on-premises-Licensing-Guide_November-2025.pdf",
    },
    {
      label: "Microsoft Tech Community: Business Central on-premises för befintliga kunder",
      url: "https://techcommunity.microsoft.com/discussions/businessapplicationsforpartners/dynamics-365-business-central-on-premises-availability-for-customers-with-enhanc/4378832",
    },
    {
      label: "Microsoft Learn: Licensing in Business Central",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/deployment/licensing",
    },
    {
      label: "Microsoft Learn: Business Central access with Microsoft 365 licenses",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-access-with-m365-license",
    },
    {
      label: "Microsoft Learn: Enable Premium features",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-experiences",
    },
    {
      label: "Microsoft Learn: Trials and subscriptions",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/trials-subscriptions",
    },
    {
      label: "Microsoft Learn: Country/regional availability and supported languages",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/compliance/apptest-countries-and-translations",
    },
    {
      label: "Microsoft Learn: Sweden local functionality",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/localfunctionality/sweden/sweden-local-functionality",
    },
    {
      label: "Microsoft Learn: Update cycles",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/update-rollout-timeline",
    },
    {
      label: "Microsoft Learn: What's new in update 29.0",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0",
    },
    {
      label: "Microsoft Learn: Software lifecycle policy and on-premises updates",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises",
    },
    {
      label: "Microsoft Learn: Configure Copilot and agent capabilities",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/enable-ai",
    },
    {
      label: "Microsoft Learn: Copilot and agents availability and supported languages",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/copilot-agents-region-language-availability",
    },
    {
      label: "Microsoft Learn: Data movement across geographies for Copilot",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ai-copilot-data-movement",
    },
    {
      label: "Microsoft Learn: Sales Order Agent overview",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent",
    },
    {
      label: "Microsoft Learn: Payables Agent overview",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/payables-agent",
    },
    {
      label: "Microsoft Learn: Integration overview for Business Central",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/integration-overview",
    },
    {
      label: "Microsoft Learn: Introduction to Business Central and Power BI",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-powerbi",
    },
    {
      label: "Microsoft Learn: Set up e-documents",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-setup-edocuments",
    },
    {
      label: "Microsoft Learn: Migrate Dynamics NAV to Business Central online",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-nav",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2016",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2016",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2017",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2017",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2018",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2018",
    },
  ],
};
