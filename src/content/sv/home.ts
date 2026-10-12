import type { HomeCopy } from "@/content/types";

export const home: HomeCopy = {
  metaTitle: "Business Central-konsulter i Sverige | Vardena",
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
    lead: "Microsofts förlängda support för de sista NAV-versionerna löper ut. En flytt till Business Central behöver planeras i god tid.",
    source:
      "Källa: Microsofts livscykelsidor för Dynamics NAV. Datumet är sista dagen med förlängd support, då Microsoft slutar leverera säkerhetsuppdateringar.",
    primary: "Planera flytten",
    secondary: "Läs guiden",
    until: "Förlängd support till",
    ended: "Har upphört",
    thisMonth: "Upphör denna månad",
    oneMonth: "Om 1 månad",
    months: "Om {n} månader",
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
  areas: {
    label: "Områden",
    title: "Där Business Central märks i vardagen.",
    lead: "Fem områden där vi oftast gör störst skillnad: från rapporterad tid och lagerplatser till rapporter och ett system som sköts efter driftstart.",
    projects: {
      name: "Tid och projekt",
      title: "Från rapporterad timme till faktura.",
      text: "Projekt, resurser och tidrapporter ligger i samma system som ekonomin. Ni ser budget mot utfall medan projektet pågår, inte efter bokslutet.",
      points: [
        "Tidrapporter med attest, per projekt och aktivitet",
        "Budget, utfall och pågående arbeten per projekt",
        "Fakturering löpande eller till fast pris, direkt från projektet",
      ],
      scope: "Ingår i standard, redan i licensen Essentials.",
      link: "Vad Business Central täcker",
      caption: "Illustration med exempeldata: ett projekt med budget mot utfall per aktivitet och en attesterad tidrapport.",
      mock: {
        window: "Projekt",
        status: "Pågår",
        project: "P-1042 · Nytt kundcenter",
        totals: [
          { label: "Timmar", value: "312 h" },
          { label: "Kostnad", value: "468 tkr" },
          { label: "Fakturerat", value: "420 tkr" },
        ],
        activities: "Aktiviteter",
        budget: "Budget",
        actual: "Utfall",
        rows: [
          { label: "Förstudie", value: "96 %" },
          { label: "Bygge", value: "81 %" },
          { label: "Utbildning", value: "34 %" },
        ],
        week: "Tidrapport vecka 42",
        approved: "Attesterad",
        days: ["Mån", "Tis", "Ons", "Tors", "Fre"],
        hours: ["8", "7,5", "8", "6", "4"],
        sum: "Summa",
        total: "33,5",
      },
    },
    warehouse: {
      name: "Lager",
      title: "Rätt artikel på rätt plats, och ett saldo som stämmer.",
      text: "Lagerställen, lagerplatser och plock styrs i samma system som order och inköp. Saldot ändras när varan rör sig, inte när någon hinner registrera.",
      points: [
        "Plock, inlagring och förflyttning per lagerplats",
        "Batch- och serienummer med spårbarhet hela vägen",
        "Inventering, beställningspunkter och inköpsförslag",
      ],
      scope: "Ingår i standard, redan i licensen Essentials. Handdatorer för streckkoder kräver oftast ett tillägg.",
      link: "Vad Business Central täcker",
      caption: "Illustration med exempeldata: lagerplatser med en plockrunda, plocklistan och saldot för en artikel.",
      mock: {
        window: "Lager",
        location: "Huvudlager",
        legend: { occupied: "Belagd", free: "Ledig", stop: "Plockstopp" },
        pick: "Plock PL-0318",
        columns: ["Artikel", "Lagerplats", "Antal"],
        lines: [
          { number: "10-204", item: "Hyllplan 90 cm", bin: "A-05", quantity: "4" },
          { number: "10-311", item: "Konsol stål", bin: "B-06", quantity: "12" },
          { number: "20-118", item: "Gavel 200 cm", bin: "C-03", quantity: "6" },
        ],
        picked: "Plockad",
        next: "Nästa",
        stock: { label: "Saldo 10-204", value: "148 st", reorder: "Beställningspunkt 60" },
      },
    },
    commerce: {
      name: "Logistik och e-handel",
      title: "Från klick i webbshopen till levererat paket.",
      text: "Order, lagersaldo, priser och frakt hänger ihop. Det som säljs i webbshopen finns i affärssystemet direkt, utan att någon skriver av en order.",
      points: [
        "Webborder blir säljorder automatiskt, med den inbyggda Shopify-kopplingen eller en integration mot er plattform",
        "Lagersaldo och priser går tillbaka till webbshopen",
        "Fraktsätt och spårningsnummer följer ordern hela vägen till kunden",
      ],
      scope: "Shopify-kopplingen ingår i Business Central online. Fraktbokning hos transportörer, tredjepartslager och andra e-handelsplattformar kopplas in med tillägg eller integration.",
      link: "Om integrationer och utveckling",
    },
    reporting: {
      name: "Rapportering med Power BI",
      title: "Siffror att styra efter, inte bara stämma av.",
      text: "Power BI läser samma data som affärssystemet. Vi utgår från Microsofts färdiga rapporter för Business Central och bygger vidare med de nyckeltal som är era.",
      points: [
        "Färdiga Power BI-rapporter för bland annat ekonomi, försäljning, inköp, lager och projekt",
        "Rapporter inbäddade i Business Central, där besluten tas",
        "Egna instrumentpaneler för ledning, sälj och lager på samma data",
      ],
      scope: "Microsofts rapporter kräver Business Central online och Power BI-licenser för dem som ska läsa dem.",
      link: "Om integrationer och utveckling",
      caption: "Illustration med exempeldata: instrumentpaneler för försäljning, projektlönsamhet och kundfordringar, så som de kan se ut i Power BI.",
      mock: {
        sales: {
          title: "Försäljning",
          period: "Senaste 12 månaderna",
          kpis: [
            { label: "Omsättning", value: "42,6 Mkr", change: "+8 %" },
            { label: "Bruttomarginal", value: "31,4 %", change: "+1,2" },
            { label: "Orderingång", value: "3,9 Mkr", change: "+5 %" },
            { label: "Lagervärde", value: "6,1 Mkr", change: "−3 %" },
          ],
          trend: "Omsättning per månad",
          thisYear: "I år",
          lastYear: "Föregående år",
          groupsTitle: "Per artikelgrupp",
          groups: [
            { label: "Inredning", value: "17,2" },
            { label: "Belysning", value: "11,8" },
            { label: "Tillbehör", value: "8,4" },
            { label: "Service", value: "5,2" },
          ],
        },
        projects: {
          title: "Projektlönsamhet",
          subtitle: "Täckningsgrad",
          rows: [
            { label: "P-1042", value: "34 %" },
            { label: "P-1038", value: "27 %" },
            { label: "P-1031", value: "12 %" },
          ],
        },
        receivables: {
          title: "Kundfordringar",
          total: "4,8 Mkr",
          buckets: [
            { label: "Ej förfallet", value: "2,9" },
            { label: "1–30 dagar", value: "1,1" },
            { label: "31–60 dagar", value: "0,5" },
            { label: "Över 60", value: "0,3" },
          ],
        },
      },
    },
    care: {
      name: "Förvaltning och support",
      title: "Någon som håller i systemet efter driftstart.",
      text: "Microsoft uppdaterar Business Central två gånger om året, och verksamheten ändras oftare än så. Vi tar hand om ärenden, uppdateringar och förbättringar så att systemet håller takt.",
      points: [
        "Support och felsökning hos konsulter som känner er lösning",
        "Bevakning och test inför Microsofts större uppdateringar",
        "Ändringshantering, behörigheter och dokumentation",
      ],
      link: "Support och optimering",
      secondLink: "Förvaltning",
      caption: "Illustration med exempeldata: en ärendelista och årets uppdateringar av Business Central, med större uppdateringar i april och oktober.",
      mock: {
        window: "Ärenden",
        tickets: [
          { title: "Momsrapporten visar fel period", area: "Ekonomi", status: "Löst" },
          { title: "Ny användare till lagret", area: "Behörigheter", status: "Pågår" },
          { title: "Rapport för orderstock", area: "Förbättring", status: "Planerad" },
        ],
        updates: "Microsofts uppdateringar",
        major: "Större uppdatering",
        minor: "Mindre uppdateringar varje månad",
        checks: ["Testad i sandbox", "Tillägg kontrollerade", "Godkänd för drift"],
      },
    },
  },
  integrations: {
    label: "Integrationer",
    title: "Business Central i ett större sammanhang.",
    lead: "Affärssystemet blir som mest värdefullt när informationen flödar vidare: till webbshop, bank, lager och de verktyg ni redan använder.",
    cta: "Om integrationer och utveckling",
    items: [
      { icon: "document", title: "Microsoft 365", text: "Arbeta med kunder, order och offerter direkt i Outlook, Excel och Teams." },
      { icon: "automation", title: "Power Automate och Power Apps", text: "Automatisera godkännanden och flöden, och bygg appar för fält och lager." },
      { icon: "copilot", title: "Copilot", text: "AI-stöd som är inbyggt i Business Central, för det som tar tid i vardagen." },
      { icon: "bank", title: "Bank och betalningar", text: "Betalfiler, kontoutdrag och avstämning utan manuella moment." },
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
    cta: "Om Vardena",
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
