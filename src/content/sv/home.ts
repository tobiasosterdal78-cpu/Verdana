import type { HomeCopy } from "@/content/types";

export const home: HomeCopy = {
  metaTitle: "Business Central-konsulter i Sverige | Verdana",
  metaDescription:
    "Business Central-konsulter för svenska företag: rådgivning, implementering, migrering från Navision, integrationer, support och förvaltning.",
  hero: {
    title: ["Business Central-konsulter i Sverige.", "Från förstudie till support."],
    lead: [
      "Vi hjälper svenska företag att välja, införa och driva Microsoft Dynamics 365 Business Central.",
      "Rådgivning, implementation, migrering från Dynamics NAV (Navision), integrationer och förvaltning. Samma team från första samtalet till vardagen i systemet, med standard före specialkod.",
    ],
    primaryCta: "Boka ett samtal",
    secondaryCta: "Se hur vi arbetar",
  },
  services: {
    label: "Tjänster",
    title: "Från första vägval till ett system som utvecklas.",
    lead: "Vi tar ansvar för hela resan med Business Central, eller för den del där ni behöver oss mest.",
    all: "Alla tjänster",
  },
  nav: {
    label: "Dynamics NAV",
    title: "Kör ni fortfarande Dynamics NAV?",
    lead: "Microsofts förlängda support för de sista NAV-versionerna löper ut. Utan säkerhetsuppdateringar växer risken för varje månad, och en flytt till Business Central behöver planeras i god tid.",
    source:
      "Källa: Microsofts livscykelsidor för Dynamics NAV. Datumet är sista dagen med förlängd support, då Microsoft slutar leverera säkerhetsuppdateringar.",
    primary: "Planera flytten",
    secondary: "Läs guiden",
    until: "Förlängd support till",
    ended: "Har upphört",
    thisMonth: "Upphör denna månad",
    oneMonth: "Om 1 månad",
    months: "Om {n} månader",
    today: "I dag",
  },
  businessCentral: {
    label: "Business Central",
    title: "Ett system för hela verksamheten.",
    paragraphs: [
      "Microsoft Dynamics 365 Business Central är ett affärssystem (ERP) för små och medelstora företag. Ekonomi, försäljning, inköp, lager och projekt delar samma data, och systemet körs i Microsofts moln.",
      "Det betyder färre dubbelregistreringar, siffror ni kan lita på och ett system som Microsoft uppdaterar två gånger om året.",
    ],
    more: "Mer om Business Central",
    premium: "Premium",
    capabilities: [
      { icon: "finance", title: "Ekonomi", text: "Huvudbok, reskontror, moms, budget och bokslut." },
      { icon: "sales", title: "Försäljning", text: "Offert, order, leverans och fakturering i ett flöde." },
      { icon: "purchasing", title: "Inköp", text: "Inköpsorder, leverantörer, attest och mottagning." },
      { icon: "inventory", title: "Lager", text: "Artiklar, lagerställen, plock och inventering." },
      { icon: "projects", title: "Projekt", text: "Budget, tid, resurser och fakturering per projekt." },
      { icon: "report", title: "Rapportering", text: "Analyser i realtid och färdiga Power BI-rapporter." },
      { icon: "manufacturing", title: "Produktion", text: "Strukturer, produktionsorder och planering.", premium: true },
      { icon: "service", title: "Service", text: "Serviceorder, avtal och serviceartiklar.", premium: true },
    ],
    flow: {
      caption: "Illustration: en order som går genom ett sammankopplat Business Central.",
      stations: [
        { icon: "order", title: "Order", detail: "Kunden beställer i webbshopen", status: "Mottagen" },
        { icon: "core", title: "Business Central", detail: "Säljorder skapas, varan reserveras", status: "Registrerad" },
        { icon: "warehouse", title: "Lager", detail: "Plockas, packas och skickas", status: "Levererad" },
        { icon: "invoice", title: "Faktura", detail: "Bokförs och skickas till kunden", status: "Bokförd" },
        { icon: "bank", title: "Bank", detail: "Betalningen matchas mot fakturan", status: "Avstämd" },
        { icon: "report", title: "Rapport", detail: "Försäljning och marginal i Power BI", status: "Uppdaterad" },
      ],
    },
  },
  integrations: {
    label: "Integrationer",
    title: "Business Central i ett större sammanhang.",
    lead: "Affärssystemet blir som mest värdefullt när informationen flödar vidare: till webbshop, bank, lager och de verktyg ni redan använder.",
    cta: "Om integrationer och utveckling",
    items: [
      { icon: "document", title: "Microsoft 365", text: "Arbeta med kunder, order och offerter direkt i Outlook, Excel och Teams." },
      { icon: "report", title: "Power BI", text: "Rapporter och instrumentpaneler ovanpå samma data som affärssystemet." },
      { icon: "automation", title: "Power Automate och Power Apps", text: "Automatisera godkännanden och flöden, och bygg appar för fält och lager." },
      { icon: "copilot", title: "Copilot", text: "AI-stöd som är inbyggt i Business Central, för det som tar tid i vardagen." },
      { icon: "ecommerce", title: "E-handel", text: "Order, artiklar, priser och lagersaldo synkade med webbshopen." },
      { icon: "bank", title: "Bank och betalningar", text: "Betalfiler, kontoutdrag och avstämning utan manuella moment." },
      { icon: "logistics", title: "Logistik och frakt", text: "Fraktbokning, spårning och tredjepartslager i samma kedja." },
      { icon: "yourSystems", title: "Era övriga system", text: "Lön, CRM, BI eller branschsystem via standardiserade API:er." },
    ],
  },
  process: {
    label: "Så arbetar vi",
    title: "Så går ett projekt till.",
    lead: "Fyra steg med tydliga leveranser. Ni vet alltid var projektet står och vad som händer härnäst.",
    outcome: "Ni får",
    steps: [
      {
        title: "Förstå",
        text: "Vi kartlägger processer, system och mål tillsammans med de som gör jobbet varje dag.",
        outcome: "Behovsbild, prioriteringar och en första budgetram.",
      },
      {
        title: "Forma",
        text: "Vi beskriver lösningen, datamigreringen och integrationerna innan något byggs.",
        outcome: "Lösningsbeskrivning, tidplan och tydlig ansvarsfördelning.",
      },
      {
        title: "Förverkliga",
        text: "Vi konfigurerar, migrerar, testar och utbildar, med avstämningar i varje steg.",
        outcome: "Ett testat system och användare som är redo för driftstart.",
      },
      {
        title: "Förbättra",
        text: "Efter start följer vi upp, rättar och utvecklar vidare i takt med verksamheten.",
        outcome: "Support, förbättringslista och koll på Microsofts uppdateringar.",
      },
    ],
  },
  principles: {
    label: "Principer",
    title: "Tre principer styr hur vi arbetar.",
    lead: "De gäller oavsett om vi föreslår, bygger eller förvaltar en lösning.",
    cta: "Om Verdana",
    items: [
      {
        title: "Standard före specialkod",
        text: "Business Central täcker mycket från start. Vi anpassar bara där det ger tydlig nytta, och då som tillägg som klarar Microsofts uppdateringar.",
      },
      {
        title: "Raka besked om tid och kostnad",
        text: "Ni får en tydlig omfattning, en realistisk plan och besked i tid om något förändras. Inga överraskningar i slutet av projektet.",
      },
      {
        title: "Ni ska förstå ert eget system",
        text: "Dokumentation och kunskapsöverföring ingår, så att ni inte blir beroende av en enskild konsult för att kunna utvecklas.",
      },
    ],
  },
  faq: {
    label: "Frågor",
    title: "Vanliga frågor",
    lead: "Korta svar på det vi oftast får frågor om. Hittar ni inte svaret? Hör av er.",
    items: [
      {
        question: "Vad är Microsoft Dynamics 365 Business Central?",
        answer:
          "Business Central är Microsofts affärssystem (ERP) för små och medelstora företag. Det samlar ekonomi, försäljning, inköp, lager, projekt och rapportering i ett system och körs som molntjänst. Det fungerar tätt ihop med Microsoft 365, Power BI och Power Platform.",
      },
      {
        question: "Vad kostar Business Central?",
        answer:
          "Kostnaden består av licenser per användare och månad, själva implementationen och eventuell löpande support. Microsofts svenska listpris (oktober 2026) är 764,70 kr för Essentials, 1 051,40 kr för Premium och 76,50 kr för Team Members per användare och månad, exklusive moms och betalt årsvis. Det slutliga priset sätts av återförsäljaren. Projektkostnaden beror på omfattning, integrationer och datamigrering, därför börjar vi med en genomgång av era behov.",
      },
      {
        question: "Hur lång tid tar en implementation av Business Central?",
        answer:
          "För ett mindre eller medelstort företag tar ett införande ofta några månader. Tiden styrs främst av antal processer, integrationer, hur mycket data som ska flyttas och hur mycket tid ni själva kan avsätta. En förstudie ger en tidplan som bygger på er verklighet.",
      },
      {
        question: "Vi kör Dynamics NAV. Måste vi byta?",
        answer:
          "Microsofts förlängda support för NAV 2016 upphörde i april 2026. För NAV 2017 upphör den i januari 2027 och för NAV 2018 i januari 2028. Systemet fungerar efter det, men utan säkerhetsuppdateringar och rättningar. Business Central är den naturliga efterträdaren och flytten bör planeras i god tid.",
      },
      {
        question: "Kan Business Central kopplas ihop med våra andra system?",
        answer:
          "Ja. Business Central har öppna API:er och färdiga kopplingar till bland annat Microsoft 365, Power BI och Shopify. Andra system, som bank, logistik, lön eller CRM, kopplas via standardiserade integrationer eller färdiga appar från Microsofts appbutik.",
      },
      {
        question: "Vad är skillnaden mellan Essentials och Premium?",
        answer:
          "Essentials täcker ekonomi, försäljning, inköp, lager, projekt och rapportering. Premium innehåller allt i Essentials och lägger till produktion och servicehantering. Många handels- och tjänsteföretag klarar sig med Essentials.",
      },
    ],
  },
};
