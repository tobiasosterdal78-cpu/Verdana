import type { Article, InsightsIndex } from "@/content/types";
import type { InsightId } from "@/lib/routes";

export const insightsIndex: InsightsIndex = {
  metaTitle: "Insikter om Business Central och affärssystem | Verdana",
  metaDescription:
    "Guider om Business Central och affärssystem: priser och licenser, migrering från Dynamics NAV (Navision), när NAV-supporten upphör och att byta system.",
  title: "Insikter om Business Central och affärssystem",
  lead: "Praktiska guider för beslutsfattare: vad Business Central kostar, när supporten för Dynamics NAV upphör, hur uppgraderingen går till och hur ni planerar ett byte av affärssystem. Fakta är kontrollerade mot Microsofts egna källor och daterade.",
};

const LIFECYCLE_NAV_2017 = {
  label: "Microsoft Lifecycle: Dynamics NAV 2017",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2017",
};
const LIFECYCLE_NAV_2018 = {
  label: "Microsoft Lifecycle: Dynamics NAV 2018",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2018",
};
const LEARN_MIGRATE_NAV = {
  label: "Microsoft Learn: Migrate Dynamics NAV to Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-nav",
};
const LEARN_MIGRATE_DATA = {
  label: "Microsoft Learn: Migrate on-premises data to Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-data",
};
const LEARN_LIFECYCLE_ONPREM = {
  label: "Microsoft Learn: Software lifecycle policy and on-premises updates",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises",
};
const LIFECYCLE_BC_MODERN = {
  label: "Microsoft Lifecycle: Business Central on-premises (Modern Policy)",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-365-business-central-onpremises-modern-policy",
};
const PRICING_SV = {
  label: "Microsoft: Business Central abonnemang och priser",
  url: "https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing",
};
const PRICING_US = {
  label: "Microsoft: Business Central pricing (USA)",
  url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing",
};
const PRICE_BLOG = {
  label: "Microsoft Dynamics 365 Blog: New Business Central pricing effective November 2025",
  url: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2025/05/06/new-microsoft-dynamics-365-business-central-pricing-effective-november-2025/",
};
const LICENSING_GUIDE = {
  label: "Microsoft: Dynamics 365 Licensing Guide (oktober 2026)",
  url: "https://go.microsoft.com/fwlink/?LinkId=866544",
};
const LEARN_LICENSING = {
  label: "Microsoft Learn: Licensing in Business Central",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/deployment/licensing",
};
const LEARN_TRIALS = {
  label: "Microsoft Learn: Trials and subscriptions",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/trials-subscriptions",
};
const LEARN_RESELLER = {
  label: "Microsoft Learn: Get started as a reseller of Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/get-started-online",
};
const LEARN_SWEDEN = {
  label: "Microsoft Learn: Sweden local functionality",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/localfunctionality/sweden/sweden-local-functionality",
};
const LEARN_UPDATE_29 = {
  label: "Microsoft Learn: What's new in update 29.0",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0",
};
const LEARN_UPDATE_CYCLES = {
  label: "Microsoft Learn: Update cycles",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/update-rollout-timeline",
};

export const articles: Record<InsightId, Article> = {
  navToBusinessCentral: {
    id: "navToBusinessCentral",
    category: "Guide",
    metaTitle: "Business Central vs Navision – skillnader och vägval",
    metaDescription:
      "Vad skiljer Business Central från Dynamics NAV (Navision)? Molnet, AL-tillägg och licenser – och vägarna dit: uppgradering eller nyimplementering.",
    title: "Business Central vs Navision: skillnader och vägval",
    lead: "Att gå från Dynamics NAV (Navision) till Business Central följer ett antal fasta tekniska steg och kräver ett stort vägval: ska ni ta med er nuvarande system eller börja om med ren data? Här går vi igenom vägarna Microsoft beskriver, vad som händer med anpassningar, data och licenser, och hur ni planerar projektet.",
    summary:
      "Vägarna från Dynamics NAV till Business Central, vad som händer med anpassningar och data, och hur ni planerar flytten utan överraskningar.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "vad-andras", text: "NAV och Business Central – vad som förändras" },
      {
        type: "p",
        text: "Microsofts uppgraderingsväg för Dynamics NAV leder till Business Central. Microsoft behandlar en NAV-databas som något man uppgraderar, inte byter ut, men tre saker fungerar annorlunda när ni väl är framme:",
      },
      {
        type: "ul",
        items: [
          "**Anpassningar** byggs som AL-tillägg ovanpå standardapplikationen i stället för som ändringar i själva koden.",
          "**Uppdateringar** kommer enligt ett fast schema i onlineversionen: två större release waves per år, i april och oktober, och mindre uppdateringar övriga månader.",
          "**Molnfunktioner** som Copilot, AI-agenterna, Teams-åtkomst för Microsoft 365-användare och de färdiga Power BI-apparna kräver Business Central online.",
        ],
      },

      { type: "h2", id: "tre-vagar", text: "Tre vägar framåt" },
      {
        type: "p",
        text: "Microsoft beskriver två sätt att nå Business Central online från NAV: full migrering och nyimplementering. Ett tredje alternativ använder samma tekniska uppgradering men stannar on-premises.",
      },
      { type: "h3", text: "1. Full migrering" },
      {
        type: "p",
        text: "Ni tar med all data och alla anpassningar. Det kräver att C/AL-anpassningarna görs om till AL-tillägg och att systemet uppgraderas hela vägen till senaste versionen. Fördelen är att all historik finns kvar i det nya systemet. Kostnaden ligger i det tekniska arbetet: varje anpassning måste byggas om eller ersättas, och uppgraderingen går via flera versioner.",
      },
      { type: "h3", text: "2. Nyimplementering" },
      {
        type: "p",
        text: "Ni börjar med ett nytt Business Central och flyttar bara över det viktigaste: grunddata, saldon, inställningar och eventuellt en del av den bokförda historiken. Microsofts egen dokumentation är inte entydig om hur mycket historik den här vägen omfattar, så kom uttryckligen överens om det med den som gör jobbet – och bestäm var den äldre historiken ska finnas tillgänglig.",
      },
      {
        type: "p",
        text: "Nyimplementering passar företag vars NAV-system har glidit långt ifrån hur de arbetar i dag, eller där anpassningarna inte längre gör nytta.",
      },
      { type: "h3", text: "3. Uppgradera och stanna on-premises" },
      {
        type: "p",
        text: "Samma uppgradering kan sluta i Business Central on-premises i stället för online. Ni behåller er egen driftmiljö men avstår från funktionerna som bara finns online. On-premises-versioner har bara support så länge ni håller dem aktuella: varje ny version har ungefär 18 månaders support, och version 29, som släpptes i oktober 2026, har support till 6 april 2028.",
      },

      { type: "h2", id: "uppgraderingsvag", text: "Vilken väg gäller för er NAV-version?" },
      {
        type: "p",
        text: "Båda vägarna till molnet börjar med att NAV uppgraderas till Business Central version 14. Så här ser Microsofts beskrivna vägar ut:",
      },
      {
        type: "table",
        caption: "Uppgraderingsvägar enligt Microsoft Learn. Kontrollerat 2026-10-11.",
        head: ["Er NAV-version", "Väg till Business Central online"],
        rows: [
          [
            "NAV 2015, 2016, 2017 eller 2018",
            "Business Central 14 on-premises → Business Central on-premises 25 eller senare → online",
          ],
          ["NAV 2013 eller 2013 R2", "NAV 2018 → Business Central 14 → 25 eller senare → online"],
          [
            "NAV 2009 SP1 eller 2009 R2",
            "NAV 2013 eller 2015 → NAV 2018 → Business Central 14 → 25 eller senare → online",
          ],
        ],
      },
      {
        type: "p",
        text: "Det finns ingen direkt väg från NAV till Business Central online. Sista steget görs med Microsofts verktyg för molnmigrering, som kopierar data via Azure Data Factory – först allt, sedan förändringarna. Källdatabasen måste köras på SQL Server 2016 eller senare med kompatibilitetsnivå 130 eller högre.",
      },

      { type: "h2", id: "anpassningar", text: "Vad händer med anpassningarna?" },
      {
        type: "p",
        text: "Innan ni kan gå över till Business Central online måste alla C/AL-anpassningar göras om till AL-tillägg. Data i tabeller som ni har anpassat följer inte med om inte anpassningen hanteras av ett tillägg. Varje anpassning hamnar i någon av fyra grupper:",
      },
      {
        type: "ul",
        items: [
          "**Finns i standard:** Business Central täcker behovet, så anpassningen kan tas bort.",
          "**Finns som app:** en app på Microsoft Marketplace gör jobbet.",
          "**Behövs fortfarande:** den byggs om som AL-tillägg.",
          "**Används inte längre:** den avvecklas.",
        ],
      },
      {
        type: "p",
        text: "Den genomgången är projektets viktigaste analys, eftersom den styr både kostnad och risk. Även den svenska lokaliseringen har förändrats: sedan 2023 release wave 1 är den byggd som appar ovanpå Microsofts globala grundapplikation, så äldre svenska specialanpassningar i NAV kan behöva en extra granskning.",
      },
      {
        type: "p",
        text: "Stannar ni on-premises tillkommer en extra licensavgift per användare för kunder som flyttar från NAV, om anpassningarna inte är förenliga med Microsofts modell för så kallad universal code.",
      },

      { type: "h2", id: "data", text: "Data" },
      {
        type: "p",
        text: "Vid full migrering följer all data med, historik inräknad. Vid nyimplementering väljer ni själva vad som flyttas. Oavsett väg bör ni:",
      },
      {
        type: "ul",
        items: [
          "städa kunder, leverantörer, artiklar och kontoplan före migreringen, inte efter",
          "bestämma hur mycket historik som behövs i det nya systemet och hur ni kommer åt resten",
          "göra minst en testmigrering i en sandlåda, som Microsoft rekommenderar",
          "stämma av saldon mellan gammalt och nytt system före driftstarten",
        ],
      },

      { type: "h2", id: "licenser", text: "Licenser" },
      {
        type: "p",
        text: "Att gå över till molnet innebär att ni tecknar licenser för Business Central online för alla användare, via en CSP-återförsäljare. Den 11 oktober 2026 var Microsofts svenska listpriser 764,70 kr för Essentials, 1 051,40 kr för Premium och 76,50 kr för Team Members per användare och månad, exkl. moms och betalt årsvis. Läs mer i [Vad kostar Business Central?](/sv/insikter/vad-kostar-business-central).",
      },
      {
        type: "p",
        text: "För on-premises-kunder med ett aktivt serviceavtal har Microsoft uppgett att reglerna för licensövergångar, till exempel från en evig NAV-licens till en evig licens för Business Central on-premises, är oförändrade. Kontrollera vad som gäller för ert avtal innan ni väljer väg.",
      },

      { type: "h2", id: "planering", text: "Så planerar ni projektet" },
      {
        type: "ol",
        items: [
          "**Inventera.** Notera NAV-version, databasstorlek, anpassningar, integrationer, rapporter och användare.",
          "**Kontrollera er deadline.** Den utökade supporten för NAV 2017 upphör 11 januari 2027 och för NAV 2018 den 11 januari 2028. Läs mer om [när supporten för Dynamics NAV upphör](/sv/insikter/navision-end-of-life).",
          "**Välj väg.** Full migrering, nyimplementering eller on-premises, utifrån genomgången av anpassningarna och hur mycket historik ni behöver.",
          "**Välj mål.** Online eller on-premises, Essentials eller Premium.",
          "**Planera integrationerna.** Lista alla kopplingar mot bank, e-handel, EDI och andra system och bestäm hur var och en ska fungera i Business Central.",
          "**Repetera.** Gör testmigreringar i en sandlåda, låt användarna testa verkliga scenarier och skriv en plan för övergången med en reservplan.",
          "**Utbilda och gå live.** Utbilda användarna i det nya gränssnittet och de nya rutinerna, och planera för extra stöd de första veckorna.",
        ],
      },

      { type: "h2", id: "risker", text: "Vanliga risker" },
      {
        type: "ul",
        items: [
          "**Underskattade anpassningar.** Äldre NAV-system innehåller ofta mer egen kod än någon minns.",
          "**Integrationer som slutar fungera.** I version 29 gjorde Microsoft det obligatoriskt att stänga av SOAP-webbtjänster på sidor i användargränssnittet, så integrationer som bygger på dem måste ses över.",
          "**Dålig datakvalitet.** Flyttar ni dålig grunddata flyttar ni också problemen.",
          "**För lite test.** Utan testmigreringar dyker problemen upp på driftstartsdagen.",
          "**Tidspress.** Börjar ni sent i förhållande till supportens slutdatum finns inget utrymme att hantera något av ovanstående.",
        ],
      },
      {
        type: "p",
        text: "Läs om hur vi arbetar med [migrering från NAV till Business Central](/sv/tjanster/migrering-fran-nav), eller [kontakta oss](/sv/kontakt) för att prata om ert system.",
      },
    ],
    faqs: [
      {
        question: "Hur migrerar man från Navision till Business Central?",
        answer:
          "NAV uppgraderas först till Business Central version 14 on-premises, sedan till version 25 eller senare, och därefter flyttas systemet till molnet med Microsofts migreringsverktyg. Äldre versioner kräver extra steg via NAV 2018. Anpassningar görs om till AL-tillägg – eller så väljer ni en nyimplementering med bara den viktigaste datan.",
      },
      {
        question: "Kan vi uppgradera NAV till Business Central on-premises?",
        answer:
          "Ja. Den tekniska uppgraderingen kan sluta i Business Central on-premises. För att behålla supporten måste ni då hålla installationen aktuell, och funktioner som Copilot, AI-agenterna och Teams-åtkomst för Microsoft 365-användare finns inte.",
      },
      {
        question: "Är Navision och Business Central samma sak?",
        answer:
          "Nej. Microsofts uppgraderingsväg för Dynamics NAV (Navision) leder till Business Central, men anpassningar fungerar annorlunda (AL-tillägg), onlineversionen uppdateras två gånger per år och de nyaste funktionerna kräver Business Central online.",
      },
      {
        question: "Måste vi bygga om alla våra anpassningar?",
        answer:
          "Inte alla. En del täcks av standard i Business Central, en del av appar på Marketplace och en del används inte längre. Bara det som fortfarande behövs och inte finns på annat sätt måste byggas om som AL-tillägg.",
      },
      {
        question: "Hur lång tid tar en uppgradering från NAV?",
        answer:
          "Det beror på NAV-version, mängden egen kod, datamängd och datakvalitet och antalet integrationer. En förstudie som går igenom detta ger en realistisk tidplan, vilket en generell uppskattning inte kan.",
      },
    ],
    sources: [
      LEARN_MIGRATE_NAV,
      LEARN_MIGRATE_DATA,
      LEARN_LIFECYCLE_ONPREM,
      LIFECYCLE_BC_MODERN,
      LEARN_UPDATE_29,
      LEARN_UPDATE_CYCLES,
      LEARN_SWEDEN,
      PRICING_SV,
      LEARN_LICENSING,
      {
        label: "Microsoft: Business Central on-premises Licensing Guide (november 2025, publicerad av tredje part)",
        url: "https://www.axians-infoma.de/wp-content/uploads/2023/04/Microsoft-Dynamics-365-Business-Central-on-premises-Licensing-Guide_November-2025.pdf",
      },
      {
        label: "Microsoft Tech Community: Business Central on-premises för befintliga kunder",
        url: "https://techcommunity.microsoft.com/discussions/businessapplicationsforpartners/dynamics-365-business-central-on-premises-availability-for-customers-with-enhanc/4378832",
      },
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
    ],
  },

  navEndOfLife: {
    id: "navEndOfLife",
    category: "Livscykel",
    metaTitle: "Navision end of life: när upphör NAV-supporten? | Verdana",
    metaDescription:
      "NAV 2016:s utökade support upphörde i april 2026. NAV 2017 når slutdatum 11 januari 2027 och NAV 2018 11 januari 2028. Så planerar ni nästa steg.",
    title: "Navision end of life: vad gäller för NAV 2016, 2017 och 2018?",
    lead: "Microsofts support för Dynamics NAV (Navision) upphör version för version. NAV 2016 lämnade den utökade supporten i april 2026, NAV 2017 följer i januari 2027 och NAV 2018 i januari 2028. Här är de exakta datumen, vad slutet på supporten betyder i praktiken och vilka alternativ ni har.",
    summary:
      "Slutdatum för supporten för alla versioner av Dynamics NAV, vad det innebär i praktiken och vilka vägar ni har framåt.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 6,
    body: [
      { type: "h2", id: "datum", text: "Slutdatum per NAV-version" },
      {
        type: "p",
        text: "Dynamics NAV följer Microsofts Fixed Lifecycle Policy, som normalt innebär fem års standardsupport (mainstream support) följt av fem års utökad support (extended support). När den utökade supporten tar slut saknar versionen support helt. Datumen nedan kommer från Microsofts livscykelsidor.",
      },
      {
        type: "table",
        caption: "Sista dag med support enligt Microsofts livscykelsidor. Kontrollerat 2026-10-11.",
        head: ["Version", "Standardsupport upphörde", "Utökad support upphör"],
        rows: [
          ["NAV 2009 och 2009 R2", "13 januari 2015", "14 januari 2020 (har upphört)"],
          ["NAV 2013 och 2013 R2", "9 januari 2018", "10 januari 2023 (har upphört)"],
          ["NAV 2015", "14 januari 2020", "14 januari 2025 (har upphört)"],
          ["NAV 2016", "13 april 2021", "14 april 2026 (har upphört)"],
          ["NAV 2017", "11 januari 2022", "11 januari 2027"],
          ["NAV 2018", "10 januari 2023", "11 januari 2028"],
        ],
      },
      {
        type: "note",
        title: "Så läser ni datumen",
        text: "Microsoft anger varje slut som klockan 06:59:59 dagen efter, till exempel 1/12/2027 06:59:59 för NAV 2017. Den tidpunkten motsvarar slutet av det datum som står här, räknat i amerikansk västkusttid (Pacific Time), och det är så datumen brukar anges. Kontrollera livscykelsidan för er version innan ni planerar efter en exakt dag.",
      },
      {
        type: "p",
        text: "I oktober 2026 saknar alltså alla versioner till och med NAV 2016 support. NAV 2017 har ungefär tre månader kvar av den utökade supporten och NAV 2018 ungefär femton.",
      },

      { type: "h2", id: "vad-det-betyder", text: "Vad betyder det att supporten upphör?" },
      {
        type: "p",
        text: "När en produkt når slutet av sin support slutar Microsoft att leverera säkerhetsuppdateringar, andra uppdateringar och supportärenden för den. Programmet slutar inte fungera den dagen – ert NAV startar, bokför och skriver ut som vanligt nästa morgon. Det som förändras är att ni står på egna ben:",
      },
      {
        type: "ul",
        items: [
          "**Inga säkerhetsrättningar.** Sårbarheter som upptäcks efter slutdatumet förblir öppna.",
          "**Inga andra rättningar.** Fel och kompatibilitetsproblem åtgärdas inte av Microsoft.",
          "**Inga supportärenden hos Microsoft.** Hjälpen hänger helt på er partner eller er egen organisation.",
          "**En krympande plattform.** Operativsystem, SQL Server-versioner och programvaran runt NAV fortsätter att utvecklas, och det blir allt svårare att få allt att fungera ihop.",
        ],
      },

      { type: "h2", id: "risker", text: "Riskerna med att stanna kvar" },
      {
        type: "ul",
        items: [
          "**Säkerhet.** Affärssystemet innehåller kund-, leverantörs- och bankuppgifter. Att köra det utan säkerhetsuppdateringar är en risk som revisorer och försäkringsbolag kan fråga om.",
          "**Beroende av nyckelpersoner.** Kunskapen om C/AL och era egna anpassningar sitter ofta hos ett fåtal personer.",
          "**Integrationer som glider isär.** Banker, e-handelsplattformar, e-fakturatjänster och andra system ändrar format och gränssnitt, och gamla NAV-kopplingar blir allt svårare att underhålla.",
          "**Ett längre hopp senare.** Ju äldre version, desto fler steg i uppgraderingen. Från NAV 2009 går Microsofts väg via NAV 2013 eller 2015, NAV 2018 och Business Central 14 innan ni når en aktuell version.",
          "**Trängsel mot slutet.** Väntar ni till de sista månaderna konkurrerar ni om konsulttid med alla andra företag i samma situation.",
        ],
      },

      { type: "h2", id: "alternativ", text: "Era alternativ" },
      { type: "h3", text: "Uppgradera till Business Central online" },
      {
        type: "p",
        text: "Vägen går via Business Central 14 och version 25 eller senare on-premises, och därefter flyttas systemet till molnet med Microsofts migreringsverktyg. Anpassningarna görs om till AL-tillägg. Sedan får ni uppdateringar två gånger per år och tillgång till Copilot och AI-agenterna. Stegen beskrivs i vår [guide från Dynamics NAV till Business Central](/sv/insikter/fran-dynamics-nav-till-business-central).",
      },
      {
        type: "p",
        text: "Online slutar versionsnummer att vara något ni behöver hålla koll på. Microsoft släpper en större uppdatering varje april och oktober, och ni väljer själva när den ska installeras inom ett fönster på fem månader. Supporten tar inte slut ett visst datum – uppgiften blir i stället att testa era tillägg och integrationer mot varje release.",
      },
      { type: "h3", text: "Uppgradera till Business Central on-premises" },
      {
        type: "p",
        text: "Ni behåller er egen driftmiljö. Business Central on-premises följer Microsofts Modern Lifecycle Policy, så ni har bara support så länge ni håller systemet aktuellt. Varje ny huvudversion har ungefär 18 månaders support: supporten för version 26 upphör 13 oktober 2026 och version 29 gäller till 6 april 2028. Det är en helt annan rytm än de tio år som NAV-versionerna normalt hade.",
      },
      { type: "h3", text: "Nyimplementera Business Central" },
      {
        type: "p",
        text: "Börja om i ett nytt Business Central med grunddata, saldon och inställningar, och lämna gamla anpassningar bakom er. Det passar hårt anpassade system eller företag vars processer har förändrats mycket.",
      },
      { type: "h3", text: "Byta till ett annat affärssystem" },
      {
        type: "p",
        text: "Slutet på supporten är ett naturligt tillfälle att se över marknaden. I vår artikel om att [byta affärssystem](/sv/insikter/byta-affarssystem) går vi igenom hur ni gör.",
      },
      { type: "h3", text: "Stanna på NAV ett tag till" },
      {
        type: "p",
        text: "Det kan fungera en kort period om ni har en plan: ett bestämt datum för att lämna NAV, en säkerhetsgenomgång av miljön runt systemet och någon som kan ge support under tiden. Se det som lånad tid, inte som en strategi.",
      },

      { type: "h2", id: "nasta-steg", text: "Det här kan ni göra nu" },
      {
        type: "ol",
        items: [
          "Ta reda på vilken NAV-version ni kör och hitta slutdatumet i tabellen ovan.",
          "Lista anpassningar, integrationer, rapporter och datamängder.",
          "Bestäm väg och mål: online eller on-premises, uppgradering eller nyimplementering.",
          "Planera baklänges från ert slutdatum och lämna tid för testmigreringar, test och utbildning.",
          "Boka de personer ni behöver i god tid, internt och externt.",
        ],
      },
      {
        type: "p",
        text: "Tidpunkten spelar större roll än man kan tro. Supporten för både NAV 2017 och NAV 2018 upphör i mitten av januari, direkt efter årsskiftet för företag med kalenderår som räkenskapsår. Vill ni gå live vid ett nytt räkenskapsår måste det ske innan supporten upphör, och då finns mycket lite utrymme för förseningar.",
      },
      {
        type: "p",
        text: "Vi hjälper företag att planera och genomföra flytten. Läs om [migrering från NAV till Business Central](/sv/tjanster/migrering-fran-nav) eller [kontakta oss](/sv/kontakt).",
      },
    ],
    faqs: [
      {
        question: "När upphör supporten för NAV 2018?",
        answer:
          "Standardsupporten för NAV 2018 upphörde 10 januari 2023. Den utökade supporten upphör 11 januari 2028, enligt Microsofts livscykelsida.",
      },
      {
        question: "Vad är skillnaden mellan mainstream och extended support?",
        answer:
          "Under Microsofts Fixed Lifecycle Policy följer utökad support (extended support) normalt fem år efter standardsupporten (mainstream support). När den utökade supporten upphör levererar Microsoft inga säkerhetsuppdateringar, andra uppdateringar eller supportärenden för versionen.",
      },
      {
        question: "Kan vi fortsätta köra NAV när supporten har upphört?",
        answer:
          "Tekniskt sett ja, eftersom programmet fortsätter att fungera. Men Microsoft levererar inga säkerhetsuppdateringar, andra uppdateringar eller supportärenden, så risken växer med tiden. Det är i bästa fall en kortsiktig lösning.",
      },
      {
        question: "Vad gäller för NAV 2009 och 2013?",
        answer:
          "Båda saknar support: NAV 2009 och 2009 R2 sedan 14 januari 2020 och NAV 2013 och 2013 R2 sedan 10 januari 2023. En uppgradering därifrån till Business Central kräver extra steg via NAV 2018.",
      },
      {
        question: "Har Business Central on-premises lika lång support som NAV hade?",
        answer:
          "Nej. Business Central on-premises följer Modern Lifecycle Policy. Varje ny version har ungefär 18 månaders support, och ni behåller supporten bara genom att hålla installationen aktuell.",
      },
    ],
    sources: [
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2009",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2009",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2009 R2",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2009-r2",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2013",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2013",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2013 R2",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2013-r2",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2015",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2015",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2016",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2016",
      },
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
      {
        label: "Microsoft Lifecycle: Product end of support overview",
        url: "https://learn.microsoft.com/en-us/lifecycle/overview/product-end-of-support-overview",
      },
      LIFECYCLE_BC_MODERN,
      LEARN_LIFECYCLE_ONPREM,
      LEARN_MIGRATE_NAV,
      LEARN_UPDATE_CYCLES,
    ],
  },

  pricing: {
    id: "pricing",
    category: "Priser",
    metaTitle: "Vad kostar Business Central? Pris och licenser | Verdana",
    metaDescription:
      "Vad kostar Business Central per användare och månad – och vad tillkommer för implementering, anpassningar och support? Så räknar ni på totalkostnaden.",
    title: "Vad kostar Business Central? Så räknar ni på licenser och totalkostnad",
    lead: "Licenspriserna för Business Central är offentliga. Totalkostnaden är det inte, eftersom den beror på vad ni ska göra. Här är Microsofts aktuella svenska listpriser, vad som tillkommer och hur ni bygger en realistisk budget.",
    summary:
      "Microsofts svenska listpriser för Essentials, Premium och Team Members, vad som ingår i licensen och vad som styr kostnaden för införande och drift.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "listpriser", text: "Listpriser i Sverige" },
      {
        type: "p",
        text: "Så här såg listpriserna ut på Microsofts svenska prissida den 11 oktober 2026:",
      },
      {
        type: "table",
        caption:
          "Kronor enligt microsoft.com/sv-se, exkl. moms, betalas årsvis. Dollar enligt microsoft.com/en-us. Kontrollerat 2026-10-11.",
        head: ["Licens", "Kr per användare/månad", "USD per användare/månad", "Vad den täcker"],
        rows: [
          [
            "Essentials",
            "764,70",
            "80",
            "Ekonomi, försäljning, inköp, lager, logistik och projekt; Copilot ingår",
          ],
          ["Premium", "1 051,40", "110", "Allt i Essentials plus tillverkning och servicehantering"],
          [
            "Team Members",
            "76,50",
            "8",
            "Läsa data, attestera, uppdatera befintliga poster och skapa offerter",
          ],
        ],
      },
      { type: "p", text: "Tre saker att känna till om siffrorna:" },
      {
        type: "ul",
        items: [
          "**Det är listpriser.** Microsoft anger att de är vägledande. Det faktiska priset visas i kassan eller sätts av den CSP-återförsäljare ni köper av – licenser för Business Central säljs bara via Microsofts program Cloud Solution Provider.",
          "**De är exkl. moms och betalas årsvis.** Microsofts sidor för Business Central visar bara årsbetalning. Om det finns månadsvillkor, och vad de i så fall kostar, får ni fråga er återförsäljare.",
          "**De har nyligen höjts.** Den 1 november 2025 höjde Microsoft priset på Business Central för första gången på mer än fem år: Essentials gick från 70 till 80 dollar, Premium från 100 till 110 dollar och enhetslicensen (Device) från 40 till 45 dollar per månad. Befintliga abonnemang fick de nya priserna vid första förnyelsen efter det datumet.",
        ],
      },

      { type: "h2", id: "licensmix", text: "Välj rätt mix av licenser" },
      {
        type: "p",
        text: "Business Central licensieras per namngiven användare, och sällan behöver alla samma licens:",
      },
      {
        type: "ul",
        items: [
          "**Essentials** för dem som bokför, beställer, fakturerar, hanterar lager eller driver projekt.",
          "**Premium** bara om ni använder tillverkning eller servicehantering. Användare med Essentials kan inte logga in i ett bolag som använder Premium-läget. I onlineversionen kan Essentials och Premium köras i separata miljöer i samma tenant.",
          "**Team Members** för dem som främst söker information, attesterar inköp eller rapporterar tid. Skrivrättigheterna är snävt begränsade, så licensen är ingen billig ersättning för en fullständig användare.",
          "**Device (enhetslicens)** för delade enheter som handdatorer i lagret: 45 dollar per enhet och månad i USA. Microsofts svenska sida visar inget pris i kronor.",
          "**External Accountant**, upp till tre per tenant, för revisor eller redovisningsbyrå. Microsofts prissidor visar inget pris.",
          "**Microsoft 365-användare** kan läsa data från Business Central i Teams utan egen Business Central-licens, så länge minst en person i organisationen har en.",
        ],
      },
      {
        type: "note",
        title: "Räkneexempel med listpris",
        text: "Ett företag med 8 Essentials-användare och 10 Team Members: 8 × 764,70 kr + 10 × 76,50 kr = 6 882,60 kr per månad, eller 82 591,20 kr per år, exkl. moms. Er återförsäljares pris kan skilja sig.",
      },

      { type: "h2", id: "vad-ingar", text: "Det här ingår i licensen" },
      {
        type: "ul",
        items: [
          "Copilot i Business Central, plus 30 minuter Azure AI per tenant för andra AI-funktioner",
          "80 GB databaslagring per tenant, plus 3 GB per Essentials-användare och 5 GB per Premium-användare",
          "En produktionsmiljö och tre testmiljöer (sandlådor)",
          "En Power Automate-licens för flöden som använder Business Central",
          "Flera bolag, med ett tak per miljö",
        ],
      },

      { type: "h2", id: "andra-microsoftkostnader", text: "Andra kostnader hos Microsoft" },
      {
        type: "ul",
        items: [
          "**AI-agenter.** Sales Order Agent och Payables Agent förbrukar Copilot Credits som köps separat och kräver en Azure-prenumeration. Microsoft debiterar per åtgärd, till exempel 50 krediter för att behandla en leverantörsfaktura plus 5 per fakturarad. I Microsofts eget exempel går 100 fakturor med tre rader vardera på 6 500 krediter i månaden. Prissidorna visar inget pris per kredit.",
          "**Extra lagring och miljöer.** Tillägg för databaskapacitet finns i steg om 1 GB och 100 GB. Tillägget Additional Environment ger en produktionsmiljö och tre testmiljöer med 4 GB kapacitet. Microsofts prissidor visar inga priser för dessa. Överskrider ni lagringskvoten stoppas inga transaktioner, men ni kan inte skapa eller kopiera miljöer.",
          "**Andra licenser** för anslutna produkter, till exempel Dynamics 365 Sales om ni använder den integrationen.",
        ],
      },

      { type: "h2", id: "implementeringskostnad", text: "Vad styr kostnaden för implementeringen?" },
      {
        type: "p",
        text: "Implementeringen är oftast den största enskilda kostnaden, och den varierar betydligt mer än licenserna. Generella prisintervall döljer de faktorer som faktiskt avgör:",
      },
      {
        type: "ul",
        items: [
          "**Omfattning:** antal processer, bolag, länder och valutor.",
          "**Licensnivå:** tillverkning och servicehantering kräver mer uppsättning än ekonomi och handel.",
          "**Datamigrering:** hur många källsystem, hur mycket historik och hur ren datan är.",
          "**Integrationer:** e-handel, bank, EDI, e-faktura, CRM, lön med mera – och om det finns färdiga kopplingar.",
          "**Anpassningar:** varje AL-tillägg ska utformas, byggas, testas och hållas fungerande genom varje release wave.",
          "**Utgångsläge:** en [uppgradering från NAV](/sv/insikter/fran-dynamics-nav-till-business-central) prissätts annorlunda än ett nytt införande, till stor del beroende på mängden egen kod.",
          "**Er egen tid:** nyckelanvändare i workshops, test och utbildning. Kostnaden är verklig även om den aldrig syns på en faktura.",
          "**Utbildning och förändringsarbete** för alla som ska använda systemet.",
        ],
      },

      { type: "h2", id: "lopande-kostnader", text: "Löpande kostnader efter driftstarten" },
      {
        type: "ul",
        items: [
          "**Licenser**, som förnyas årsvis.",
          "**Support.** Microsofts Professional Direct-support omfattar inte Business Central, och Microsoft hänvisar kunderna till sin återförsäljare för teknisk hjälp. Bestäm vem som tar hand om användarfrågor, rättningar och incidenter. Läs om [support för Business Central](/sv/tjanster/support).",
          "**Release waves.** Två större uppdateringar per år innebär återkommande test av tillägg och integrationer. Läs om [förvaltning](/sv/tjanster/forvaltning).",
          "**Appar från Marketplace**, som prissätts av respektive leverantör.",
          "**Copilot Credits**, om ni använder AI-agenterna.",
          "**Vidareutveckling:** nya rapporter, automatiseringar och processförändringar i takt med att verksamheten utvecklas.",
        ],
      },

      { type: "h2", id: "budget", text: "Så budgeterar ni" },
      {
        type: "ol",
        items: [
          "**Räkna användare per roll** och koppla varje roll till en licens.",
          "**Räkna fram licenskostnaden** med listpris och be sedan återförsäljaren om faktiskt pris och betalningsvillkor.",
          "**Lista integrationer, datakällor och anpassningar.** De formar uppskattningen av implementeringen.",
          "**Be om en avgränsad offert** byggd på en förstudie, inte en tumregel från första mötet. Läs om [rådgivning och förstudie](/sv/tjanster/radgivning).",
          "**Lägg till löpande kostnader** för support, test inför release waves, appar och AI-användning under minst tre år.",
          "**Ha en buffert** för det som dyker upp under projektets gång.",
        ],
      },
      {
        type: "p",
        text: "En översikt över själva systemet finns på sidan om [affärssystemet Business Central](/sv/business-central). Vill ni diskutera omfattning och vad en [implementation](/sv/tjanster/implementation) skulle innebära? [Kontakta oss](/sv/kontakt).",
      },
    ],
    faqs: [
      {
        question: "Vad kostar Business Central per användare?",
        answer:
          "Microsofts svenska listpriser den 11 oktober 2026 var 764,70 kr per användare och månad för Essentials, 1 051,40 kr för Premium och 76,50 kr för Team Members, exkl. moms och betalt årsvis. Implementering, appar, support och eventuell användning av AI-agenter tillkommer.",
      },
      {
        question: "Vad skiljer i pris mellan Essentials och Premium?",
        answer:
          "Premium kostar 286,70 kr mer per användare och månad enligt listpriserna och innehåller allt i Essentials plus tillverkning och servicehantering. Tillverkar ni inte själva och saknar serviceverksamhet täcker Essentials ekonomi, försäljning, inköp, lager, logistik och projekt.",
      },
      {
        question: "Vad kostar ett affärssystem totalt?",
        answer:
          "Totalkostnaden är licenser plus implementering plus löpande drift: support, uppdateringar, appar och vidareutveckling. Implementeringen styrs av omfattning, integrationer, datamigrering och anpassningar, och därför går den inte att ange utan en förstudie.",
      },
      {
        question: "Har Microsoft höjt priset på Business Central?",
        answer:
          "Ja. Den 1 november 2025 höjde Microsoft priset för första gången på mer än fem år, till exempel från 70 till 80 dollar för Essentials. Samtidigt ökade lagringen per licens, från 2 till 3 GB för Essentials och från 3 till 5 GB för Premium.",
      },
      {
        question: "Finns det en gratis provperiod?",
        answer:
          "Ja. Microsoft erbjuder en kostnadsfri provperiod på 30 dagar som kan förlängas till sammanlagt 90 dagar.",
      },
    ],
    sources: [
      PRICING_SV,
      PRICING_US,
      PRICE_BLOG,
      LICENSING_GUIDE,
      LEARN_LICENSING,
      {
        label: "Microsoft Learn: Business Central access with Microsoft 365 licenses",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-access-with-m365-license",
      },
      {
        label: "Microsoft Learn: Enable Premium features",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-experiences",
      },
      {
        label: "Microsoft Learn: Managing capacity",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-capacity",
      },
      {
        label: "Microsoft Learn: Manage consumption-based billing",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing",
      },
      {
        label: "Microsoft Learn: Use Power Automate flows in Business Central",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-financials-data-source-flow",
      },
      LEARN_TRIALS,
      LEARN_UPDATE_CYCLES,
    ],
  },

  switchingErp: {
    id: "switchingErp",
    category: "Guide",
    metaTitle: "Byta affärssystem – det här ska ni tänka på | Verdana",
    metaDescription:
      "Funderar ni på att byta affärssystem? Här är tecknen på att det är dags, vad ni ska tänka på i valet och hur ni undviker de vanligaste fallgroparna.",
    title: "Byta affärssystem – det här ska ni tänka på",
    lead: "Ett byte av affärssystem (ERP) gör de flesta företag sällan, så det är få i organisationen som har gjort det förut. Här går vi igenom tecknen på att det är dags, hur ni tar fram krav och utvärderar alternativ, vad en förstudie ska ge, hur ni väljer partner och vad som styr tidplanen.",
    summary:
      "Hur ni märker att ni har vuxit ur ert system, och hur ni utvärderar, väljer och planerar ett byte av affärssystem utan de vanliga fallgroparna.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "dags-att-byta", text: "När är det dags att byta affärssystem?" },
      {
        type: "p",
        text: "Ekonomisystem som Fortnox eller Visma fungerar bra för många företag. Men när verksamheten växer förändras kraven, och tecknen syns oftast i vardagen långt innan någon kallar det ett ERP-problem:",
      },
      {
        type: "ul",
        items: [
          "**Excel fyller luckorna.** Lager, order, projektmarginaler eller prognoser ligger i kalkylark eftersom systemet inte klarar dem.",
          "**Lagret finns någon annanstans.** Lagersaldon, inköp och logistik sköts i ett separat verktyg, med manuella överföringar till ekonomin.",
          "**Månadsbokslutet drar ut på tiden.** Avstämningar och rapporter bygger på exporter och manuella justeringar.",
          "**Fler bolag, valutor eller länder.** Koncerninterna flöden och konsolidering görs för hand.",
          "**Integrationerna blir fler.** Varje ny webbutik, bank eller logistikpartner lägger till ännu en skör koppling.",
          "**Rapporterna dröjer.** Ledningen väntar i dagar på siffror som borde finnas på skärmen.",
          "**Ert nuvarande system går mot sitt slut.** Versioner av Dynamics NAV (Navision) lämnar till exempel Microsofts support. Läs mer om [när supporten för Dynamics NAV upphör](/sv/insikter/navision-end-of-life).",
        ],
      },
      {
        type: "p",
        text: "Ett enskilt tecken räcker sällan för att motivera ett byte. Flera samtidigt brukar göra det.",
      },

      { type: "h2", id: "ratt-tidpunkt", text: "Rätt och fel tidpunkt" },
      {
        type: "p",
        text: "Ett bra läge för ett byte är när verksamheten driver förändringen: tillväxt, nya affärsmodeller, nya bolag eller ett slutdatum som går att planera mot. Ett dåligt läge är mitt i högsäsong, en omorganisation eller ett årsbokslut.",
      },
      {
        type: "p",
        text: "Var också ärliga om orsaken. Om det största problemet är ett system som aldrig har satts upp ordentligt kan det bli billigare att rätta till uppsättningen än att byta.",
      },

      { type: "h2", id: "krav", text: "Börja med kraven, inte med leverantörerna" },
      { type: "p", text: "Beskriv hur ni arbetar innan ni tittar på system:" },
      {
        type: "ul",
        items: [
          "**Processer:** från order till betalning, från inköp till leverantörsbetalning, lager och logistik, tillverkning eller projekt, och bokföring till bokslut.",
          "**Volymer:** användare, bolag, transaktioner, artiklar och lagerställen.",
          "**Integrationer:** alla system som ska utbyta data med affärssystemet, och hur.",
          "**Svenska krav:** SIE-filer till redovisningsbyrå eller revisor, momsrapportering, betalfilsformat mot banken och e-faktura (Peppol), där det är aktuellt.",
          "**Rapportering:** vad ledning och styrelse behöver, och hur ofta.",
          "**Ramar:** budget, tidplan, molnet eller on-premises och er egen IT-kapacitet.",
        ],
      },
      {
        type: "p",
        text: "Prioritera sedan: måste, bör och kan. En lång lista med lika viktiga krav får alla system att se likadana ut.",
      },

      { type: "h2", id: "forstudie", text: "Gör en förstudie" },
      { type: "p", text: "En förstudie gör om kraven till ett beslut. Den ska ge er:" },
      {
        type: "ul",
        items: [
          "en beskrivning av dagens processer och vilka problem som ska lösas",
          "en gap-analys mot de system ni överväger",
          "en skiss över integrationer och datamigrering",
          "en budgetram för licenser, införande och löpande kostnader",
          "en rekommenderad väg med tidplan och de största riskerna",
        ],
      },
      {
        type: "p",
        text: "Vi gör det arbetet som [rådgivning och förstudie](/sv/tjanster/radgivning). Det är också ett bra test av om ett konsultbolag lyssnar innan det säljer.",
      },

      { type: "h2", id: "utvardera", text: "Så utvärderar ni system" },
      {
        type: "ul",
        items: [
          "**Styrda demonstrationer.** Ge leverantörerna era egna scenarier och exempeldata i stället för att nöja er med en fri demo.",
          "**Testa själva.** Låt nyckelanvändare prova systemet. Business Central har till exempel en kostnadsfri provperiod på 30 dagar som kan förlängas till 90 dagar.",
          "**Totalkostnad över flera år**, inte bara licenspriset. I [Vad kostar Business Central?](/sv/insikter/vad-kostar-business-central) visar vi hur kostnaderna läggs ihop.",
          "**Ekosystem:** appar, integrationer och tillgång till konsulter som kan systemet.",
          "**Riktning:** vart leverantören är på väg med produkten, till exempel molnet, AI och uppdateringstakt.",
          "**Referenser** från företag av liknande storlek och i liknande bransch.",
        ],
      },
      {
        type: "p",
        text: "Står Business Central på er lista förklarar sidan om [affärssystemet Business Central](/sv/business-central) licensnivåer, priser och svensk lokalisering.",
      },

      { type: "h2", id: "valja-partner", text: "Välj partner eller konsultbolag" },
      {
        type: "p",
        text: "Människorna som inför systemet betyder lika mycket som systemet. Ställ samma frågor till alla kandidater:",
      },
      {
        type: "ul",
        items: [
          "Vilka personer kommer faktiskt att arbeta i vårt projekt, och vad har de levererat tidigare?",
          "Hur ser er metod ut från förstudie till driftstart, och vad behöver ni från oss?",
          "Hur hanterar ni datamigrering och test?",
          "Vem ger oss support efter driftstarten, och på vilka villkor?",
          "Hur håller ni anpassningarna få och säkra inför framtida uppdateringar?",
        ],
      },
      {
        type: "p",
        text: "För Business Central säljs licenserna bara via Microsofts program Cloud Solution Provider (CSP), och återförsäljaren är er första kontakt mot Microsofts support. Den Business Central-partner som säljer licenserna är inte nödvändigtvis samma bolag som inför systemet, så fråga hur licenser, införande och support fördelas innan ni skriver på.",
      },

      { type: "h2", id: "datamigrering", text: "Datamigrering" },
      { type: "p", text: "Bestäm tidigt vad som ska flyttas till det nya systemet:" },
      {
        type: "ul",
        items: [
          "**Grunddata:** kunder, leverantörer, artiklar och kontoplan. Städa före migreringen.",
          "**Ingående balanser och öppna poster:** obetalda fakturor, öppna order och lagersaldon.",
          "**Historik:** hur många års transaktioner som behövs i det nya systemet, och var resten ska finnas. Stäm av vad er revisor behöver kunna komma åt.",
        ],
      },
      {
        type: "p",
        text: "För Business Central har Microsoft migreringsverktyg för flera källor, bland annat Dynamics NAV, Dynamics GP, Dynamics SL och andra SQL-databaser via anpassade migreringar. Data från andra system förs normalt in med konfigurationspaket eller importrutiner. Oavsett källa bör ni planera minst en fullständig testmigrering före driftstarten.",
      },

      { type: "h2", id: "tidplan", text: "Hur lång tid tar det att byta affärssystem?" },
      { type: "p", text: "Det finns ingen standardtid. Tidplanen beror på:" },
      {
        type: "ul",
        items: [
          "hur många processer, bolag och länder som ingår",
          "hur många integrationer som behövs och hur komplexa de är",
          "hur mycket data som ska flyttas och hur bra den är",
          "hur mycket ni anpassar jämfört med att använda standardfunktioner",
          "hur mycket tid nyckelanvändarna har för workshops, test och utbildning",
          "hur snabbt beslut fattas hos er",
          "fasta datum som räkenskapsårets slut eller supportens slut för det gamla systemet",
        ],
      },
      {
        type: "p",
        text: "En driftstart vid ett nytt räkenskapsår eller en ny period förenklar ingående balanser och rapportering, och därför planerar många projekt baklänges från ett sådant datum.",
      },
      {
        type: "p",
        text: "Funderar ni på ett byte? [Kontakta oss](/sv/kontakt) för ett första samtal om var ni står och vad en förstudie skulle omfatta.",
      },
    ],
    faqs: [
      {
        question: "Vad ska man tänka på när man byter affärssystem?",
        answer:
          "Börja med processer och krav, inte med leverantörer. Gör en förstudie, utvärdera system med era egna scenarier, räkna på totalkostnaden över flera år, planera datamigreringen tidigt och se till att nyckelanvändarna har tid för projektet.",
      },
      {
        question: "När är det dags att byta affärssystem?",
        answer:
          "När flera tecken dyker upp samtidigt: kalkylark som fyller luckor, lager i ett separat verktyg, utdragna månadsbokslut, manuellt koncernarbete eller ett system som lämnar supporten. Bäst är när verksamheten driver bytet, utanför högsäsong och bokslut.",
      },
      {
        question: "Hur lång tid tar det att byta affärssystem?",
        answer:
          "Det beror på omfattning, integrationer, datamängd och datakvalitet, anpassningar och hur mycket tid er organisation kan lägga. En förstudie ger en tidplan utifrån er situation i stället för en generell uppskattning.",
      },
      {
        question: "Vilket affärssystem är bäst?",
        answer:
          "Det finns inget system som är bäst för alla, bara det som passar bäst för era processer, er storlek, er budget och era planer. Därför kommer krav och förstudie före valet av leverantör.",
      },
      {
        question: "Kan vi gå från Fortnox eller Visma till Business Central?",
        answer:
          "Ja. Business Central är ett av de system företag brukar överväga när de växer ur ett ekonomisystem. Grunddata, ingående balanser och öppna poster flyttas normalt över, medan historiken finns kvar i det gamla systemet eller i ett arkiv.",
      },
    ],
    sources: [
      LEARN_TRIALS,
      LEARN_MIGRATE_DATA,
      LEARN_LICENSING,
      LEARN_RESELLER,
      LEARN_SWEDEN,
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
    ],
  },
};
