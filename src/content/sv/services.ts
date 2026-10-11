import type { Service } from "@/content/types";
import type { ServiceId } from "@/lib/routes";

export const services: Record<ServiceId, Service> = {
  advisory: {
    id: "advisory",
    phase: "implement",
    icon: "advisory",
    name: "Rådgivning och förstudie",
    blurb: "Rätt vägval innan ni investerar i ett nytt affärssystem.",
    menu: "Förstudie och rätt systemval",
    metaTitle: "ERP-rådgivning inför val av affärssystem | Verdana",
    metaDescription:
      "Ska ni välja eller byta affärssystem? Vi kartlägger behov, kostnader och vägval och ger ett tydligt beslutsunderlag innan ni investerar i Business Central.",
    serviceType: "ERP-rådgivning och förstudie",
    title: "ERP-rådgivning inför val av affärssystem",
    lead: "Innan ni investerar i ett nytt affärssystem behöver ni veta vad det ska lösa, vad det kostar och hur ni tar er dit. Vi hjälper er att fatta beslutet på fakta i stället för känsla.",
    fit: [
      "Ni funderar på att byta affärssystem men vet inte var ni ska börja.",
      "Ni har vuxit ur Fortnox, Visma eller ett annat ekonomisystem.",
      "Ni kör Dynamics NAV och behöver en plan för vägen vidare.",
      "Ni vill veta om Business Central passar just er verksamhet.",
    ],
    included: [
      "Kartläggning av processer, system och manuella moment i dag",
      "Behovs- och kravbild med tydliga prioriteringar",
      "Bedömning av hur väl Business Central täcker era behov",
      "Översikt över integrationer och vilken data som ska flyttas",
      "Budgetram för licenser, införande och löpande drift",
      "Rekommenderad väg framåt med tidplan och nästa steg",
    ],
    outcomes: [
      {
        title: "Ett beslutsunderlag ni kan stå för",
        text: "Ledning och styrelse ser vad som ska lösas, vad det kostar och vilka risker som finns.",
      },
      {
        title: "Realistisk tidplan och budget",
        text: "Byggd på era processer och er data – inte på en generisk mall.",
      },
      {
        title: "Färre överraskningar senare",
        text: "Krav, integrationer och datamigrering är kända innan projektet startar.",
      },
    ],
    steps: [
      { title: "Uppstart", text: "Vi går igenom mål, tidsram och vilka personer som behöver vara med." },
      { title: "Workshops", text: "Process för process: från order och inköp till ekonomi och rapportering." },
      { title: "Analys", text: "Vi jämför behoven med Business Central och skissar lösning, integrationer och migrering." },
      { title: "Rekommendation", text: "Ni får en rapport och en genomgång med förslag på nästa steg." },
    ],
    faqs: [
      {
        question: "Vad kostar en förstudie?",
        answer:
          "Det beror på hur många processer, bolag och system som ingår. Efter ett första samtal får ni ett förslag med tydlig omfattning och pris innan något arbete startar.",
      },
      {
        question: "Hur lång tid tar en förstudie?",
        answer:
          "För ett mindre eller medelstort företag tar en förstudie ofta några veckor. Det som styr är främst antalet processer och hur snabbt workshops kan genomföras med rätt personer.",
      },
      {
        question: "Måste vi välja Business Central efter förstudien?",
        answer:
          "Nej. Förstudien ska ge ett ärligt underlag. Om Business Central inte är rätt för er får ni veta det, och varför.",
      },
      {
        question: "Vad behöver vi förbereda?",
        answer:
          "Tillgång till de personer som kan processerna, en lista över system ni använder i dag och gärna exempel på rapporter och underlag som är viktiga i vardagen.",
      },
    ],
    related: ["implementation", "migration", "integrations"],
  },

  implementation: {
    id: "implementation",
    phase: "implement",
    icon: "implementation",
    name: "Implementering",
    blurb: "Business Central infört med tydlig plan, budget och ansvar.",
    menu: "Från plan till driftstart",
    metaTitle: "Implementering av Business Central | Verdana",
    metaDescription:
      "Implementering av Microsoft Dynamics 365 Business Central med tydlig plan, datamigrering, integrationer, test och utbildning. För svenska företag.",
    serviceType: "Implementering av Microsoft Dynamics 365 Business Central",
    title: "Implementering av Business Central",
    lead: "Ett nytt affärssystem ska fungera från första dagen. Vi inför Microsoft Dynamics 365 Business Central med en tydlig plan, en beprövad metod och fokus på det som gör skillnad i er vardag.",
    fit: [
      "Ni har bestämt er för Business Central och behöver en partner för införandet.",
      "Ni byter från ett äldre affärssystem eller från flera separata system.",
      "Ni vill gå live med ekonomi först och bygga vidare med lager, projekt eller produktion.",
      "Ni vill hålla er nära standard för att enkelt kunna ta del av Microsofts uppdateringar.",
    ],
    included: [
      "Projektplan, roller och styrning från dag ett",
      "Processgenomgång och lösningsdesign",
      "Konfiguration av ekonomi, försäljning, inköp, lager och projekt",
      "Migrering av kunder, leverantörer, artiklar, saldon och öppna poster",
      "Integrationer mot bank, webbshop och andra system",
      "Test tillsammans med era användare",
      "Utbildning, lathundar och dokumentation",
      "Driftstart och nära stöd veckorna efter",
    ],
    outcomes: [
      {
        title: "Driftstart enligt plan",
        text: "Tydliga beslut, avstämningar och testplaner minskar risken för förseningar.",
      },
      {
        title: "Användare som kan systemet",
        text: "Utbildningen bygger på era egna processer och er egen data.",
      },
      {
        title: "En lösning som håller över tid",
        text: "Nära standard, med anpassningar som tillägg som klarar Microsofts uppdateringar.",
      },
    ],
    steps: [
      { title: "Analys och design", text: "Vi går igenom processerna och beslutar hur lösningen ska se ut." },
      { title: "Bygg och migrering", text: "Konfiguration, integrationer och testmigreringar av er data." },
      { title: "Test och utbildning", text: "Era användare testar verkliga flöden och lär sig systemet." },
      { title: "Driftstart och uppföljning", text: "Vi går live tillsammans och följer upp tätt efter start." },
    ],
    details: {
      title: "Vad som påverkar tid och kostnad",
      paragraphs: [
        "De största faktorerna är antal processer och bolag, hur många system som ska integreras, hur mycket historik som ska flyttas och hur mycket tid er egen organisation kan avsätta.",
        "Ett mindre företag med ekonomi, försäljning och inköp kan ofta gå live på några månader. Med lager, flera bolag, produktion eller många integrationer blir projektet större. En förstudie ger en tidplan och budget som bygger på er verklighet.",
      ],
    },
    faqs: [
      {
        question: "Hur lång tid tar en implementation av Business Central?",
        answer:
          "Ofta några månader för ett mindre eller medelstort företag. Tiden styrs av antalet processer, integrationer och hur mycket data som ska migreras, och av hur mycket tid ni själva kan avsätta.",
      },
      {
        question: "Vad kostar en implementation?",
        answer:
          "Kostnaden består av konsulttid för analys, konfiguration, migrering, integrationer, test och utbildning, plus licenser per användare. Vi tar fram en budget utifrån er omfattning innan projektet startar.",
      },
      {
        question: "Hur mycket tid behöver vi avsätta själva?",
        answer:
          "Mest i workshops, test och utbildning. Räkna med att nyckelpersoner behöver lägga regelbunden tid under projektet, särskilt inför driftstart.",
      },
      {
        question: "Kan vi börja med en del och bygga vidare?",
        answer:
          "Ja. Många börjar med ekonomi och försäljning och lägger till lager, projekt eller integrationer i nästa steg. Det sprider både arbete och kostnad.",
      },
      {
        question: "Vad händer efter driftstart?",
        answer:
          "Vi följer upp tätt de första veckorna och rättar det som behövs. Därefter kan ni gå över till ett support- eller förvaltningsavtal.",
      },
    ],
    related: ["advisory", "integrations", "support"],
  },

  migration: {
    id: "migration",
    phase: "implement",
    icon: "migration",
    name: "Migrering från Dynamics NAV",
    blurb: "Från Navision eller NAV till Business Central i molnet.",
    menu: "Uppgradering från NAV/Navision",
    metaTitle: "Från Navision till Business Central – migrering | Verdana",
    metaDescription:
      "Kör ni Dynamics NAV (Navision)? Vi hjälper er att uppgradera eller migrera till Business Central: data, anpassningar och en trygg övergång i molnet.",
    serviceType: "Migrering från Microsoft Dynamics NAV till Business Central",
    title: "Från Dynamics NAV (Navision) till Business Central",
    lead: "Business Central är efterföljaren till Dynamics NAV och Navision. Vi hjälper er att flytta data, ersätta gamla anpassningar och komma igång i molnet – utan att verksamheten stannar.",
    fit: [
      "Ni kör Dynamics NAV 2013–2018 eller en äldre Navision-version.",
      "Microsofts support för er version har upphört eller upphör snart.",
      "Ni har många anpassningar och vet inte vilka som fortfarande behövs.",
      "Ni vill till molnet men är osäkra på vägen och tidsåtgången.",
    ],
    included: [
      "Analys av nuvarande NAV-miljö, data och anpassningar",
      "Beslut om vad som ersätts av standard, appar eller nya tillägg",
      "Plan för data: vad som flyttas och hur mycket historik",
      "Ombyggnad av nödvändiga anpassningar som tillägg i AL",
      "Testmigreringar med avstämning av saldon och register",
      "Utbildning i det som är nytt i Business Central",
      "Driftstart och nära stöd efteråt",
    ],
    outcomes: [
      {
        title: "Ett system med support",
        text: "Säkerhetsuppdateringar, nya funktioner och en tydlig framtid hos Microsoft.",
      },
      {
        title: "Mindre teknisk skuld",
        text: "Gamla anpassningar ersätts av standard där det går och av tillägg där det behövs.",
      },
      {
        title: "Kontinuitet i verksamheten",
        text: "Testmigreringar och en genomtänkt plan gör att vardagen fortsätter under bytet.",
      },
    ],
    steps: [
      { title: "Nulägesanalys", text: "Vi går igenom version, data, anpassningar och integrationer." },
      { title: "Vägval", text: "Uppgradering eller ny start med valda data – ni får för- och nackdelar." },
      { title: "Migrering och test", text: "Testmigreringar, avstämning och test av verkliga flöden." },
      { title: "Driftstart", text: "Slutmigrering, driftstart och uppföljning de första veckorna." },
    ],
    details: {
      title: "Uppgradera eller börja om?",
      paragraphs: [
        "Det finns två huvudvägar. Vid en uppgradering flyttas data och historik med Microsofts verktyg, och anpassningar som behövs byggs om som tillägg. Vid en ny start konfigureras Business Central från grunden och ni flyttar register, saldon och öppna poster – historiken kan finnas kvar i det gamla systemet för uppslag.",
        "Vilken väg som passar beror på hur mycket ni har anpassat, hur er data mår och hur mycket av gamla arbetssätt ni vill ta med. I nulägesanalysen får ni en rekommendation med för- och nackdelar.",
      ],
    },
    faqs: [
      {
        question: "Vad händer när supporten för vår NAV-version upphör?",
        answer:
          "Systemet fortsätter att fungera, men Microsoft levererar inga säkerhetsuppdateringar eller rättningar. Risken ökar över tid, särskilt för integrationer, servrar och kompatibilitet med andra system.",
      },
      {
        question: "Kan vi behålla vår historik?",
        answer:
          "Ja, antingen genom att migrera historiken till Business Central eller genom att behålla det gamla systemet tillgängligt för uppslag. Valet påverkar tid och kostnad.",
      },
      {
        question: "Vad händer med våra anpassningar?",
        answer:
          "Vi går igenom dem en och en. Många ersätts av standardfunktioner i Business Central eller av färdiga appar. Det som fortfarande behövs byggs om som tillägg i AL.",
      },
      {
        question: "Hur lång tid tar en migrering från NAV?",
        answer:
          "Det beror främst på mängden anpassningar och data. En nulägesanalys ger en tidplan – och ju tidigare ni börjar, desto mer kan ni styra tidpunkten själva.",
      },
    ],
    related: ["advisory", "implementation", "integrations"],
  },

  integrations: {
    id: "integrations",
    phase: "operate",
    icon: "integration",
    name: "Integrationer och utveckling",
    blurb: "Koppla ihop webbshop, bank, logistik och Microsoft 365.",
    menu: "Webbshop, bank och logistik",
    metaTitle: "Integrationer och utveckling i Business Central | Verdana",
    metaDescription:
      "Integrera Business Central med webbshop, bank, logistik, Microsoft 365 och Power BI. Tillägg i AL som klarar uppdateringar. Konsulter i Sverige.",
    serviceType: "Integrationer och utveckling för Microsoft Dynamics 365 Business Central",
    title: "Integrationer och utveckling i Business Central",
    lead: "Business Central blir som mest värdefullt när det pratar med resten av verksamheten. Vi kopplar ihop systemen och bygger tillägg där standard inte räcker.",
    fit: [
      "Ni registrerar samma information på flera ställen.",
      "Webbshop, lager eller bank kräver manuella exporter och importer.",
      "Ni behöver en funktion som Business Central inte har i standard.",
      "Ni vill använda Power BI, Power Automate eller Power Apps ovanpå affärssystemet.",
    ],
    included: [
      "Integrationer mot webbshop, bank, logistik, lön och CRM",
      "Kopplingar till Microsoft 365, Power BI, Power Automate och Power Apps",
      "Integrationer via Business Centrals API:er",
      "Tillägg utvecklade i AL som klarar Microsofts uppdateringar",
      "Rapporter och dokumentlayouter för fakturor, order och följesedlar",
      "Dokumentation och övervakning av integrationer",
    ],
    outcomes: [
      {
        title: "Information som flödar",
        text: "Order, artiklar, betalningar och lagersaldon synkas utan dubbelregistrering.",
      },
      {
        title: "Lösningar som klarar uppdateringar",
        text: "Tillägg i stället för ändringar i standardkoden gör uppgraderingar enklare.",
      },
      {
        title: "Kontroll över helheten",
        text: "Dokumenterade och övervakade integrationer gör att fel upptäcks tidigt.",
      },
    ],
    steps: [
      { title: "Behov", text: "Vi beskriver flödet: vilken data, åt vilket håll och hur ofta." },
      { title: "Lösningsval", text: "Standardkoppling, app från AppSource eller egen utveckling." },
      { title: "Utveckling och test", text: "Vi bygger, testar med verklig data och dokumenterar." },
      { title: "Drift", text: "Övervakning, felhantering och vidareutveckling över tid." },
    ],
    faqs: [
      {
        question: "Vilka system kan Business Central integreras med?",
        answer:
          "I princip alla system med ett API eller filgränssnitt. Vanligast är webbshop, bank, logistik och frakt, lön, CRM och BI. För Microsoft 365, Power BI och Shopify finns färdiga kopplingar.",
      },
      {
        question: "Vad är ett tillägg (extension)?",
        answer:
          "Ett tillägg är en separat app som bygger ut Business Central utan att ändra standardkoden. Det gör att Microsofts uppdateringar kan installeras utan att anpassningarna går förlorade.",
      },
      {
        question: "Påverkas integrationer av Microsofts uppdateringar?",
        answer:
          "De kan göra det. Därför bygger vi på de API:er och tilläggsmodeller som Microsoft stödjer, och testar inför de större uppdateringarna.",
      },
      {
        question: "Ska vi bygga själva eller köpa en app?",
        answer:
          "Finns det en väl underhållen app på Microsoft AppSource är den ofta billigare och snabbare. Egen utveckling passar när behovet är unikt för er verksamhet.",
      },
    ],
    related: ["implementation", "support", "management"],
  },

  support: {
    id: "support",
    phase: "operate",
    icon: "support",
    name: "Support och optimering",
    blurb: "Snabb hjälp i vardagen och ett system som blir bättre.",
    menu: "Hjälp i vardagen och förbättringar",
    metaTitle: "Support och optimering av Business Central | Verdana",
    metaDescription:
      "Support för Business Central när något krånglar, och optimering när verksamheten förändras. Felsökning, rättningar, förbättringar och uppdateringar.",
    serviceType: "Support och optimering för Microsoft Dynamics 365 Business Central",
    title: "Support och optimering av Business Central",
    lead: "När något krånglar ska ni få hjälp snabbt – och när verksamheten förändras ska systemet följa med. Vi hjälper er med båda.",
    fit: [
      "Ni behöver någon att ringa när något inte fungerar.",
      "Systemet används inte fullt ut och vissa moment görs fortfarande manuellt.",
      "Ni har bytt eller vill byta partner för Business Central.",
      "Ni vill ha hjälp att planera och testa Microsofts uppdateringar.",
    ],
    included: [
      "Användarsupport och felsökning",
      "Rättningar och mindre förändringar",
      "Genomgång av processer som kan förenklas eller automatiseras",
      "Behörigheter, prestanda och jobbkö",
      "Stöd kring Microsofts uppdateringar",
      "Förbättringsförslag och prioritering tillsammans med er",
    ],
    outcomes: [
      {
        title: "Hjälp när det behövs",
        text: "En kontaktväg till konsulter som känner Business Central och er lösning.",
      },
      {
        title: "Mindre manuellt arbete",
        text: "Vi hittar moment som kan förenklas med standard, automation eller små tillägg.",
      },
      {
        title: "Ett system som blir bättre",
        text: "En prioriterad förbättringslista i stället för lösa idéer.",
      },
    ],
    steps: [
      { title: "Genomgång", text: "Vi lär känna er lösning, era integrationer och era användare." },
      { title: "Avtal", text: "Omfattning, kontaktvägar och svarstider anpassas efter era behov." },
      { title: "Löpande stöd", text: "Ärenden hanteras och dokumenteras – mönster följs upp." },
      { title: "Förbättring", text: "Regelbundna avstämningar med förslag på förbättringar." },
    ],
    faqs: [
      {
        question: "Kan ni ta över supporten från en annan partner?",
        answer:
          "Ja. Det går att byta partner för Business Central. Vi börjar med en genomgång av lösning, anpassningar och integrationer så att övergången blir trygg.",
      },
      {
        question: "Hur fungerar ett supportavtal?",
        answer:
          "Omfattning, kontaktvägar och svarstider anpassas efter era behov och hur verksamhetskritiskt systemet är. Ni får ett förslag efter en första genomgång.",
      },
      {
        question: "Hjälper ni till med Microsofts uppdateringar?",
        answer:
          "Ja. Business Central uppdateras löpande av Microsoft. Vi hjälper er att planera, testa anpassningar och integrationer och informera användarna om det som är nytt.",
      },
    ],
    related: ["management", "integrations", "consultants"],
  },

  management: {
    id: "management",
    phase: "operate",
    icon: "management",
    name: "Förvaltning",
    blurb: "Uppdateringar, ändringar och ansvar samlat på ett ställe.",
    menu: "Uppdateringar, ändringar och ansvar",
    metaTitle: "Förvaltning av Business Central | Verdana",
    metaDescription:
      "Förvaltning av Business Central: uppdateringar, ändringshantering, behörigheter, dokumentation och övervakning – ansvar samlat på ett ställe.",
    serviceType: "Förvaltning av Microsoft Dynamics 365 Business Central",
    title: "Förvaltning av Business Central",
    lead: "Ett affärssystem behöver någon som håller i helheten. Vi tar ansvar för uppdateringar, ändringar, behörigheter och dokumentation – så att systemet håller takt med verksamheten.",
    fit: [
      "Ingen hos er har tid eller kompetens att äga affärssystemet.",
      "Förändringsönskemål samlas på hög utan att prioriteras.",
      "Ni vill ha kontroll över uppdateringar, licenser och behörigheter.",
      "Ni har en IT-avdelning som behöver stöd inom Business Central.",
    ],
    included: [
      "Förvaltningsplan och regelbundna avstämningar",
      "Bevakning och test inför Microsofts större uppdateringar",
      "Ändringshantering och prioritering av önskemål",
      "Användare, behörigheter och licenser",
      "Dokumentation av lösning, tillägg och integrationer",
      "Övervakning av integrationer och jobbkö",
    ],
    outcomes: [
      {
        title: "Kontinuitet",
        text: "Kunskapen om er lösning finns dokumenterad och sitter inte i ett enskilt huvud.",
      },
      {
        title: "Framförhållning",
        text: "Uppdateringar och förändringar planeras i stället för att komma som överraskningar.",
      },
      {
        title: "Ett tydligt ansvar",
        text: "Ni vet vem som håller i systemet och vad som händer härnäst.",
      },
    ],
    steps: [
      { title: "Överlämning", text: "Vi dokumenterar lösningen och sätter upp rutiner." },
      { title: "Plan", text: "En förvaltningsplan med kalender för uppdateringar och avstämningar." },
      { title: "Löpande förvaltning", text: "Ändringar, behörigheter, övervakning och test." },
      { title: "Uppföljning", text: "Regelbunden genomgång av status, risker och förbättringar." },
    ],
    faqs: [
      {
        question: "Vad är skillnaden mellan support och förvaltning?",
        answer:
          "Support handlar om att lösa ärenden när något händer. Förvaltning är det löpande ansvaret för helheten: uppdateringar, ändringar, behörigheter och dokumentation.",
      },
      {
        question: "Hur ofta uppdateras Business Central?",
        answer:
          "Microsoft släpper två större uppdateringar per år, på våren och hösten, och mindre uppdateringar däremellan. Det är därför viktigt att anpassningar och integrationer testas löpande.",
      },
      {
        question: "Kan förvaltningen kombineras med vår egen IT-avdelning?",
        answer:
          "Ja. Ansvarsfördelningen anpassas – vi kan ta hela förvaltningen eller stötta er IT-avdelning inom Business Central.",
      },
    ],
    related: ["support", "integrations", "consultants"],
  },

  consultants: {
    id: "consultants",
    phase: "operate",
    icon: "consulting",
    name: "Konsulttjänster",
    blurb: "Business Central-kompetens som förstärker ert team.",
    menu: "Kompetens som förstärker ert team",
    metaTitle: "Hyr Business Central-konsulter till ert team | Verdana",
    metaDescription:
      "Hyr Business Central-konsulter som förstärker ert team: projektledning, lösningsdesign, ekonomi, logistik, utveckling och kravställning.",
    serviceType: "Konsulttjänster inom Microsoft Dynamics 365 Business Central",
    title: "Business Central-konsulter för ert team",
    lead: "Behöver ni förstärkning i ett projekt eller i vardagen? Vi arbetar tillsammans med er – med projektledning, lösningsdesign, applikationsstöd eller utveckling inom Business Central.",
    fit: [
      "Ni driver ett eget projekt och behöver specialistkompetens.",
      "Er ordinarie partner har inte kapacitet just nu.",
      "Ni ska upphandla ett affärssystem och behöver stöd i kravställningen.",
      "Ni behöver en tillfällig förstärkning under en intensiv period.",
    ],
    included: [
      "Projektledning och styrning av Business Central-projekt",
      "Lösningsdesign och arkitektur",
      "Applikationsstöd inom ekonomi, försäljning, inköp och lager",
      "Utveckling och integration i AL",
      "Behovsanalys, kravställning och upphandlingsstöd",
      "Utbildning och coachning av era nyckelanvändare",
    ],
    outcomes: [
      {
        title: "Rätt kompetens direkt",
        text: "Specialister som kan Business Central och snabbt sätter sig in i er situation.",
      },
      {
        title: "Kunskap som stannar",
        text: "Vi arbetar nära ert team så att kompetensen finns kvar efter uppdraget.",
      },
      {
        title: "Flexibel omfattning",
        text: "Från enstaka insatser till längre uppdrag, efter vad situationen kräver.",
      },
    ],
    steps: [
      { title: "Behov", text: "Vi går igenom uppdraget, målen och vilken kompetens som krävs." },
      { title: "Upplägg", text: "Omfattning, tid och ansvar bestäms tillsammans." },
      { title: "Genomförande", text: "Vi arbetar i ert team, med era verktyg och rutiner." },
      { title: "Överlämning", text: "Dokumentation och kunskapsöverföring när uppdraget avslutas." },
    ],
    faqs: [
      {
        question: "Kan vi anlita en konsult på deltid?",
        answer:
          "Ja. Omfattningen anpassas efter behovet, från enstaka dagar till längre uppdrag på hel- eller deltid.",
      },
      {
        question: "Kan ni hjälpa oss att upphandla ett affärssystem?",
        answer:
          "Ja. Vi hjälper till med behovsanalys, kravspecifikation och utvärdering, så att ni kan jämföra alternativ på ett rättvist sätt.",
      },
      {
        question: "Arbetar ni på plats eller på distans?",
        answer:
          "Båda delarna. Workshops och utbildning fungerar ofta bäst på plats, medan mycket av det löpande arbetet kan ske på distans.",
      },
    ],
    related: ["advisory", "implementation", "management"],
  },
};
