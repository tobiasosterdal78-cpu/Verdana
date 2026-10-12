import type { PagesCopy } from "@/content/types";

export const pages: PagesCopy = {
  services: {
    metaTitle: "Tjänster inom Business Central | Vardena",
    metaDescription:
      "Rådgivning, implementering, migrering från Navision, integrationer, support, förvaltning och konsultstöd för Microsoft Dynamics 365 Business Central.",
    title: "Tjänster inom Business Central",
    lead: "Vi hjälper er genom hela livscykeln för Microsoft Dynamics 365 Business Central, eller med den del där ni behöver oss mest.",
    groups: {
      implement: {
        title: "Välja och införa",
        text: "Från första frågan om nytt affärssystem till en trygg driftstart.",
      },
      operate: {
        title: "Driva och utveckla",
        text: "Ett system som fungerar i vardagen och växer med verksamheten.",
      },
    },
  },
  service: {
    primaryCta: "Boka ett samtal",
    secondaryCta: "Det här ingår",
    fit: "Känner ni igen er?",
    included: "Det här ingår",
    outcomes: "Det här vinner ni",
    steps: "Så går det till",
    faq: "Vanliga frågor",
    related: "Relaterade tjänster",
  },
  about: {
    metaTitle: "Om Vardena – Business Central-konsulter | Vardena",
    metaDescription:
      "Vardena är ett svenskt konsultbolag inom Microsoft Dynamics 365 Business Central. Raka besked, standard före specialkod och kunskap som stannar hos er.",
    title: "Om Vardena",
    lead: "Vardena är ett svenskt konsultbolag med fokus på Microsoft Dynamics 365 Business Central. Vi hjälper företag att välja, införa och utveckla sitt affärssystem, med människorna som använder det i centrum.",
    why: {
      title: "Varför vi finns",
      paragraphs: [
        "Ett affärssystem påverkar nästan allt i ett företag: hur order tas emot, hur varor köps in, hur fakturor skickas och hur ledningen följer upp verksamheten. Ändå blir många projekt dyrare och mer komplicerade än de behöver.",
        "Vi vill göra Business Central begripligt och användbart. Det betyder raka besked om vad som är rimligt, lösningar som ligger nära standard och dokumentation som gör att ni förstår ert eget system.",
      ],
    },
    focus: {
      title: "Det här står vi för",
      items: [
        {
          icon: "core",
          title: "Specialister på Business Central",
          text: "Vi arbetar med ett affärssystem och lär oss det på djupet: funktioner, licenser, uppdateringar och begränsningar.",
        },
        {
          icon: "company",
          title: "Verksamheten först",
          text: "Tekniken ska lösa riktiga problem i ekonomi, försäljning och lager. Därför börjar vi alltid i processerna.",
        },
        {
          icon: "improve",
          title: "Ett system som utvecklas",
          text: "Driftstart är början. Business Central uppdateras löpande, och lösningen ska bli bättre över tid.",
        },
      ],
    },
    principlesTitle: "Våra principer",
    process: {
      title: "Så arbetar vi i projekt",
      lead: "Samma fyra steg, oavsett om det gäller en ny implementation, en flytt från NAV eller en integration.",
    },
    servicesCta: "Se våra tjänster",
  },
  contact: {
    metaTitle: "Kontakta Vardena – boka ett samtal om Business Central",
    metaDescription:
      "Boka ett första samtal om Business Central, byte av affärssystem eller migrering från Navision. Berätta om er situation så återkommer vi.",
    title: "Kontakta Vardena",
    lead: "Berätta kort om er verksamhet och vad ni funderar på: nytt affärssystem, flytt från Dynamics NAV eller hur ni får ut mer av Business Central.",
    expectations: {
      title: "Så går ett första samtal till",
      items: [
        { icon: "understand", title: "Vi lyssnar in nuläget", text: "Vilka system ni har, vad som skaver och vad ni vill uppnå." },
        {
          icon: "design",
          title: "Ni får en första bedömning",
          text: "Möjliga vägval, ungefärlig omfattning och vad som påverkar tid och kostnad.",
        },
        {
          icon: "deliver",
          title: "Ni bestämmer nästa steg",
          text: "Ett konkret förslag: en förstudie, en genomgång eller ett svar på er fråga.",
        },
      ],
    },
    direct: {
      title: "Hellre e-post?",
      text: "Skriv direkt till oss. Formuläret och e-posten hamnar på samma ställe.",
    },
    form: {
      labels: {
        name: "Namn",
        company: "Företag",
        email: "E-post",
        phone: "Telefon",
        interest: "Vad gäller det?",
        message: "Berätta kort om er situation",
      },
      optional: "valfritt",
      choose: "Välj ett alternativ",
      messagePlaceholder: "Till exempel: vi kör NAV 2016 och vill förstå vad en flytt till Business Central innebär.",
      consent: "Jag godkänner att Vardena sparar mina uppgifter för att kunna besvara förfrågan.",
      interests: [
        "Nytt affärssystem eller förstudie",
        "Implementering av Business Central",
        "Migrering från Dynamics NAV",
        "Integrationer och utveckling",
        "Support och optimering",
        "Förvaltning",
        "Konsulttjänster",
        "Något annat",
      ],
      errors: {
        name: "Skriv ditt namn.",
        company: "Skriv företagets namn.",
        email: "Skriv en giltig e-postadress, till exempel namn@foretag.se.",
        phone: "Skriv telefonnumret med siffror, till exempel 070-123 45 67.",
        interest: "Välj ett av alternativen.",
        message: "Beskriv kort vad ni vill ha hjälp med (minst 10 tecken).",
        consent: "Godkänn att vi sparar uppgifterna för att kunna svara.",
      },
      status: {
        invalid: "Några uppgifter saknas eller behöver rättas. Se markerade fält.",
        unavailable: "Formuläret kunde inte skicka förfrågan. Uppgifterna finns kvar i fälten, och ni kan skicka samma meddelande med e-post i stället.",
        failed: "Förfrågan kunde inte skickas just nu. Försök igen om en stund, eller skicka samma meddelande med e-post.",
      },
      mailFallback: "Skicka med e-post i stället",
      emailSubject: "Förfrågan via vardena.se",
      submit: "Skicka förfrågan",
      sending: "Skickar …",
      sent: {
        title: "Tack, vi har tagit emot er förfrågan.",
        text: "Vi återkommer så snart vi kan för att boka ett första samtal.",
      },
      honeypot: "Webbplats",
    },
  },
  insights: { read: "Läs artikeln", latest: "Artiklar och guider" },
  businessCentral: { faqTitle: "Vanliga frågor om Business Central", contents: "Innehåll", allTopics: "Alla ämnen" },
};
