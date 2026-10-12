import type { SiteCopy } from "@/content/types";

export const site: SiteCopy = {
  skipToContent: "Hoppa till innehållet",
  homeLabel: "Vardena, till startsidan",
  primaryNav: "Huvudmeny",
  nav: { services: "Tjänster", businessCentral: "Business Central", insights: "Insikter", about: "Om oss" },
  cta: "Boka ett samtal",
  menu: { open: "Öppna menyn", close: "Stäng menyn", label: "Meny" },
  servicesMenu: {
    all: "Alla tjänster",
    help: "Osäker på var ni ska börja? Ett första samtal ger en tydligare bild.",
    featuredLabel: "Guide",
    featuredTitle: "Från Dynamics NAV till Business Central",
    featuredText: "Vad som händer med data, anpassningar och licenser, och hur ni planerar flytten.",
    featuredCta: "Läs guiden",
  },
  businessCentralMenu: {
    title: "Business Central förklarat",
    text: "Vad systemet täcker, vad det kostar i Sverige och hur NAV-kunder flyttar dit.",
    cta: "Läs översikten",
    guides: "Guider",
  },
  phases: {
    implement: {
      title: "Välja och införa",
      intro:
        "Från första analys till driftstart: rätt beslut, en tydlig plan och er historik med in i det nya systemet.",
    },
    operate: {
      title: "Driva och utveckla",
      intro:
        "När systemet är i drift: kopplingar, support och förvaltning som gör att Business Central fortsätter att passa verksamheten.",
    },
  },
  theme: { toDark: "Byt till mörkt läge", toLight: "Byt till ljust läge" },
  language: "Språk",
  breadcrumbs: "Brödsmulor",
  breadcrumbHome: "Hem",
  readMore: "Läs mer",
  updated: "Uppdaterad",
  sources: "Källor",
  minutes: "min läsning",
  ctaBand: {
    title: "Berätta var ni står i dag.",
    text: "Ett första samtal räcker ofta för att se vad som är rätt nästa steg, oavsett om ni ska byta affärssystem, flytta från Dynamics NAV eller få ut mer av Business Central.",
    primary: "Boka ett samtal",
    secondary: "Se våra tjänster",
    steps: [
      "Ni berättar om nuläge, mål och tidsram.",
      "Vi ger en första bedömning av vägval och risker.",
      "Ni får ett konkret förslag på hur ni kan gå vidare.",
    ],
  },
  contactPrompt: {
    faq: { text: "Hittar ni inte svaret?", link: "Ställ en fråga" },
    talk: { text: "Vill ni hellre gå igenom det med en konsult?", link: "Boka ett samtal" },
    legal: { text: "Har du frågor om den här sidan?", link: "Kontakta oss" },
  },
  footer: {
    tagline:
      "Konsulter inom Microsoft Dynamics 365 Business Central. Vi hjälper svenska företag att välja, införa och utveckla sitt affärssystem.",
    region: "Sverige",
    languages: "Språk",
    columns: {
      services: "Tjänster",
      businessCentral: "Business Central",
      company: "Företaget",
      trust: "Förtroende",
      legal: "Juridik",
    },
    links: {
      whatIsBc: "Vad är Business Central?",
      pricing: "Vad kostar Business Central?",
      navEndOfLife: "När upphör supporten för NAV?",
      navToBc: "Från NAV till Business Central",
      switchingErp: "Byta affärssystem",
      allInsights: "Alla insikter",
      about: "Om oss",
      howWeWork: "Så arbetar vi",
      contact: "Kontakt",
      principles: "Våra principer",
      accessibility: "Tillgänglighet",
      security: "Rapportera en säkerhetsbrist",
      securityTxt: "security.txt",
      privacy: "Integritetspolicy",
      cookies: "Cookies",
      terms: "Användarvillkor",
    },
    rights: "Alla rättigheter förbehålls.",
    orgNumber: "Org.nr",
    trademarks:
      "Microsoft, Dynamics 365, Business Central, Dynamics NAV, Microsoft 365, Power BI och Power Platform är varumärken som tillhör Microsoft-koncernen.",
  },
  notFound: {
    metaTitle: "Sidan finns inte | Vardena",
    title: "Sidan finns inte.",
    text: "Adressen kan vara felstavad, eller så har sidan flyttats. Börja från startsidan eller gå direkt till våra tjänster.",
    home: "Till startsidan",
    services: "Se våra tjänster",
    contact: "Kontakta oss",
  },
};
