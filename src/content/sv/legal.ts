import type { Doc } from "@/content/types";
import type { LegalId } from "@/lib/routes";

const updated = "2026-10-11";

export const legal: Record<LegalId, Doc> = {
  privacy: {
    metaTitle: "Integritetspolicy | Vardena",
    metaDescription:
      "Så behandlar Vardena personuppgifter från kontaktformuläret och serverloggar: varför vi gör det, hur länge vi sparar dem och vilka rättigheter du har.",
    title: "Integritetspolicy",
    lead: "Här beskriver vi vilka personuppgifter Vardena behandlar när du besöker webbplatsen eller kontaktar oss, varför vi gör det och vilka rättigheter du har.",
    updated,
    body: [
      { type: "h2", text: "Personuppgiftsansvarig", id: "ansvarig" },
      {
        type: "p",
        text: "Vardena är personuppgiftsansvarig för den behandling som beskrivs här. Har du frågor om hur vi hanterar dina uppgifter, eller vill du använda någon av dina rättigheter, når du oss via [kontaktsidan](/sv/kontakt).",
      },
      { type: "h2", text: "Vilka uppgifter vi behandlar och var de kommer ifrån", id: "uppgifter" },
      { type: "h3", text: "När du använder kontaktformuläret" },
      { type: "p", text: "Uppgifterna lämnar du själv när du skickar en förfrågan:" },
      {
        type: "ul",
        items: [
          "Namn, företag och e-postadress",
          "Telefonnummer, om du väljer att fylla i det",
          "Vad förfrågan gäller, om du väljer ett alternativ",
          "Ditt meddelande och det du skriver i det",
          "Att du har kryssat i rutan för samtycke och när formuläret skickades",
        ],
      },
      {
        type: "p",
        text: "Formuläret innehåller också två dolda spärrar mot skräppost: ett fält som ska lämnas tomt och en tidsstämpel för när formuläret öppnades. De används bara för att sortera bort automatiska utskick.",
      },
      { type: "h3", text: "När du besöker webbplatsen" },
      {
        type: "p",
        text: "Som alla webbplatser levereras vår av ett webbhotell. Webbhotellet behandlar tekniska loggdata, till exempel din IP-adress, tidpunkten och vilken sida som efterfrågades, för att kunna leverera webbplatsen och skydda den mot missbruk.",
      },
      {
        type: "p",
        text: "Webbplatsen sätter inga cookies och använder inga verktyg för analys, annonsering eller spårning. Läs mer på sidan om [cookies](/sv/cookies).",
      },
      { type: "h2", text: "Varför vi behandlar uppgifterna och med vilket stöd", id: "andamal" },
      {
        type: "table",
        caption: "Ändamål och rättslig grund enligt dataskyddsförordningen (GDPR)",
        head: ["Ändamål", "Uppgifter", "Rättslig grund"],
        rows: [
          [
            "Svara på din förfrågan och följa upp ett möjligt uppdrag",
            "Uppgifter från kontaktformuläret",
            "Vårt berättigade intresse av att svara den som kontaktar oss, och åtgärder som du begär innan ett eventuellt avtal ingås (art. 6.1 f och 6.1 b)",
          ],
          [
            "Leverera webbplatsen och skydda den mot missbruk",
            "Tekniska loggdata",
            "Vårt berättigade intresse av en säker och fungerande webbplats (art. 6.1 f)",
          ],
          [
            "Bokföring om ett affärsförhållande uppstår",
            "Uppgifter i avtal och fakturor",
            "Rättslig förpliktelse enligt bokföringslagen (art. 6.1 c)",
          ],
        ],
      },
      {
        type: "p",
        text: "Rutan för samtycke i kontaktformuläret dokumenterar att du godkänner att vi sparar dina uppgifter för att kunna svara på din förfrågan. Du kan när som helst återkalla samtycket via [kontaktsidan](/sv/kontakt). Det påverkar inte behandling som redan har skett.",
      },
      {
        type: "p",
        text: "Vi använder inte dina uppgifter för automatiserade beslut eller profilering.",
      },
      { type: "h2", text: "Vilka vi delar uppgifter med", id: "mottagare" },
      {
        type: "p",
        text: "Vi säljer aldrig dina personuppgifter. Vi delar dem bara med leverantörer som hjälper oss att driva webbplatsen och hantera förfrågningar. De är personuppgiftsbiträden och behandlar uppgifterna enligt ett personuppgiftsbiträdesavtal med oss:",
      },
      {
        type: "ul",
        items: [
          "Webbhotellet, som levererar webbplatsen och behandlar tekniska loggdata",
          "Leverantören av vår e-post och inkorg för förfrågningar, där meddelanden från kontaktformuläret lagras",
        ],
      },
      {
        type: "p",
        text: "Vi kan också lämna ut uppgifter till myndigheter när lagen kräver det.",
      },
      {
        type: "p",
        text: "Vår ambition är att alla personuppgifter ska stanna inom EU/EES. Om en leverantör behandlar uppgifter utanför EU/EES ser vi till att det finns lämpliga skyddsåtgärder, till exempel EU-kommissionens standardavtalsklausuler.",
      },
      { type: "h2", text: "Hur länge vi sparar uppgifterna", id: "lagring" },
      {
        type: "ul",
        items: [
          "**Förfrågningar** sparar vi så länge vi behöver dem för att hantera förfrågan och ett eventuellt affärsförhållande som följer. Därefter raderar vi dem.",
          "**Bokföringsmaterial** sparar vi så länge bokföringslagen kräver, om ett affärsförhållande uppstår.",
          "**Tekniska loggdata** sparas av webbhotellet under en begränsad tid för att leverera och skydda webbplatsen.",
        ],
      },
      { type: "h2", text: "Dina rättigheter", id: "rattigheter" },
      { type: "p", text: "Enligt dataskyddsförordningen har du rätt att:" },
      {
        type: "ul",
        items: [
          "**Få tillgång** till de personuppgifter vi har om dig och få en kopia av dem",
          "**Få felaktiga eller ofullständiga uppgifter rättade**",
          "**Få uppgifter raderade** i vissa fall",
          "**Begära att behandlingen begränsas** i vissa fall",
          "**Invända** mot behandling som grundar sig på vårt berättigade intresse",
          "**Få ut uppgifter du har lämnat** i ett maskinläsbart format (dataportabilitet)",
          "**Återkalla ditt samtycke** när som helst",
        ],
      },
      {
        type: "p",
        text: "Vill du använda dina rättigheter når du oss via [kontaktsidan](/sv/kontakt). Vi svarar inom en månad, som dataskyddsförordningen kräver.",
      },
      { type: "h2", text: "Klagomål", id: "klagomal" },
      {
        type: "p",
        text: "Om du anser att vi behandlar dina personuppgifter felaktigt vill vi gärna att du hör av dig till oss först, så att vi kan rätta till det. Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) på [imy.se](https://www.imy.se).",
      },
      { type: "h2", text: "Ändringar", id: "andringar" },
      {
        type: "p",
        text: "Vi uppdaterar integritetspolicyn när vi ändrar hur vi behandlar personuppgifter. Datumet högst upp visar när den senast uppdaterades.",
      },
    ],
    sources: [
      {
        label: "Dataskyddsförordningen (EU) 2016/679",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se" },
    ],
  },

  cookies: {
    metaTitle: "Cookiepolicy | Vardena",
    metaDescription:
      "Vardenas webbplats sätter inga cookies och använder ingen analys eller spårning. Det enda som sparas i webbläsaren är ditt val av ljust eller mörkt tema.",
    title: "Cookies",
    lead: "Den här webbplatsen sätter inga cookies. Därför möts du inte av någon cookieruta här.",
    updated,
    body: [
      { type: "h2", text: "Det här använder vi inte", id: "anvands-inte" },
      { type: "p", text: "Webbplatsen har inget av följande:" },
      {
        type: "ul",
        items: [
          "Cookies",
          "Analysverktyg eller besöksstatistik",
          "Annonsering eller spårningspixlar",
          "Inbäddat innehåll från sociala medier",
          "Typsnitt som hämtas från tredje part (våra typsnitt levereras från vår egen webbplats)",
          "Skript som hämtas från andra webbplatser",
        ],
      },
      { type: "h2", text: "Det enda som sparas i din webbläsare", id: "tema" },
      {
        type: "p",
        text: "Om du trycker på knappen för ljust eller mörkt tema sparas ditt val i webbläsarens sessionslagring (sessionStorage) under nyckeln ”theme”, så att webbplatsen behåller samma utseende när du går mellan sidorna.",
      },
      {
        type: "ul",
        items: [
          "Valet skickas aldrig till oss eller till någon annan.",
          "Det raderas automatiskt när du stänger fliken eller sessionen avslutas.",
          "Trycker du aldrig på knappen sparas ingenting och webbplatsen visas i ljust läge.",
        ],
      },
      {
        type: "p",
        text: "Enligt 9 kap. 28 § lagen (2022:482) om elektronisk kommunikation krävs inget samtycke för lagring som är nödvändig för att leverera en tjänst som användaren uttryckligen har begärt. Att komma ihåg ett tema som du själv har valt hör dit.",
      },
      { type: "h2", text: "Så tar du bort valet", id: "ta-bort" },
      {
        type: "p",
        text: "Stäng fliken eller rensa webbplatsdata i webbläsarens inställningar. Webbplatsen visas då i ljust läge igen.",
      },
      { type: "h2", text: "Serverloggar", id: "loggar" },
      {
        type: "p",
        text: "Vårt webbhotell behandlar tekniska loggdata, till exempel IP-adress, tidpunkt och efterfrågad sida, för att leverera och skydda webbplatsen. Det sker utan cookies. I vår [integritetspolicy](/sv/integritetspolicy) beskriver vi hur de uppgifterna hanteras.",
      },
      { type: "h2", text: "Om något ändras", id: "andringar" },
      {
        type: "p",
        text: "Skulle vi någon gång börja använda cookies eller liknande teknik som kräver samtycke uppdaterar vi den här sidan och ber om ditt samtycke innan något sparas.",
      },
    ],
    sources: [
      {
        label: "Lag (2022:482) om elektronisk kommunikation (Sveriges riksdag)",
        url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022482-om-elektronisk-kommunikation_sfs-2022-482/",
      },
    ],
  },

  terms: {
    metaTitle: "Användarvillkor | Vardena",
    metaDescription:
      "Villkoren för att använda Vardenas webbplats: allmän information, Microsofts listpriser med datum, länkar till andra webbplatser, upphovsrätt och ansvar.",
    title: "Användarvillkor",
    lead: "De här villkoren gäller när du använder webbplatsen. Genom att använda den godkänner du villkoren.",
    updated,
    body: [
      { type: "h2", text: "Om webbplatsen", id: "om" },
      {
        type: "p",
        text: "Webbplatsen drivs av Vardena. Här beskriver vi våra tjänster kring Microsoft Dynamics 365 Business Central, och här kan du kontakta oss. Det finns inga användarkonton och inget går att köpa på webbplatsen.",
      },
      { type: "h2", text: "Allmän information, inte rådgivning", id: "information" },
      {
        type: "p",
        text: "Innehållet på webbplatsen är allmän information. Det är inte rådgivning för just er situation och ersätter inte en bedömning av er verksamhet. Vi arbetar för att innehållet ska vara korrekt och aktuellt, men kan inte garantera att allt alltid är fullständigt eller rätt.",
      },
      { type: "h2", text: "Priser", id: "priser" },
      {
        type: "p",
        text: "Priser på webbplatsen är Microsofts listpriser enligt det datum som anges vid dem. Microsoft kan ändra sina priser, och vad ni betalar beror på ert avtal. Faktiska priser för licenser och tjänster avtalas alltid skriftligt.",
      },
      { type: "h2", text: "Kontaktformuläret", id: "kontaktformular" },
      {
        type: "p",
        text: "En förfrågan via kontaktformuläret innebär inget avtal. Ett uppdrag avtalas alltid separat och skriftligt. I vår [integritetspolicy](/sv/integritetspolicy) beskriver vi hur vi hanterar de uppgifter du skickar.",
      },
      { type: "h2", text: "Upphovsrätt och varumärken", id: "upphovsratt" },
      {
        type: "p",
        text: "Texter, bilder och formgivning på webbplatsen tillhör Vardena om inget annat anges. Du får gärna länka till webbplatsen och citera kortare avsnitt med angivande av källa. Annan användning kräver vårt skriftliga tillstånd.",
      },
      {
        type: "p",
        text: "Microsoft, Dynamics 365, Dynamics NAV och Business Central är varumärken som tillhör Microsoft-koncernen. Att de nämns här innebär inte att Microsoft står bakom webbplatsen.",
      },
      { type: "h2", text: "Länkar till andra webbplatser", id: "lankar" },
      {
        type: "p",
        text: "Webbplatsen länkar till andra webbplatser, till exempel Microsofts. Vi ansvarar inte för deras innehåll eller för hur de hanterar personuppgifter.",
      },
      { type: "h2", text: "Ansvar", id: "ansvar" },
      {
        type: "p",
        text: "I den utsträckning lagen tillåter ansvarar Vardena inte för skada som uppstår till följd av att informationen på webbplatsen används, eller av att webbplatsen tillfälligt inte är tillgänglig.",
      },
      { type: "h2", text: "Ändringar och tillämplig lag", id: "andringar" },
      {
        type: "p",
        text: "Vi kan komma att uppdatera villkoren. Datumet högst upp visar när de senast uppdaterades. Svensk lag gäller för villkoren.",
      },
      {
        type: "p",
        text: "Frågor om villkoren? Hör av dig via [kontaktsidan](/sv/kontakt).",
      },
    ],
  },

  accessibility: {
    metaTitle: "Tillgänglighetsredogörelse | Vardena",
    metaDescription:
      "Så tillgänglig är Vardenas webbplats: vårt mål om WCAG 2.2 nivå AA, vad webbplatsen stöder, hur vi testat, kända brister och hur du rapporterar problem.",
    title: "Tillgänglighetsredogörelse",
    lead: "Vi vill att alla ska kunna använda webbplatsen, oavsett funktionsförmåga eller vilken enhet de använder. Här beskriver vi hur långt vi har kommit.",
    updated,
    body: [
      { type: "h2", text: "Vårt mål", id: "mal" },
      {
        type: "p",
        text: "Vårt mål är att webbplatsen ska uppfylla riktlinjerna för tillgängligt webbinnehåll, WCAG 2.2, på nivå AA.",
      },
      { type: "h2", text: "Det här stöder webbplatsen", id: "stod" },
      {
        type: "ul",
        items: [
          "Navigering med enbart tangentbord",
          "Tydligt synlig fokusmarkering",
          "Mindre rörelse när din enhet ber om det",
          "Ljust tema som standard och ett mörkt tema som du kan byta till",
          "Förstorad text utan att innehåll eller funktioner går förlorade",
        ],
      },
      { type: "h2", text: "Så har vi testat", id: "test" },
      {
        type: "p",
        text: "Vi har granskat webbplatsen med automatiska tillgänglighetstester och genom att navigera den med tangentbord. Någon fullständig extern granskning har inte gjorts ännu, och därför påstår vi inte att webbplatsen helt uppfyller WCAG 2.2 nivå AA.",
      },
      { type: "h2", text: "Kända brister", id: "brister" },
      {
        type: "p",
        text: "Dekorativa animationer stängs av när din enhet ber om mindre rörelse, så webbplatsen kan se något annorlunda ut med den inställningen. Inget innehåll och ingen funktion är beroende av animationerna.",
      },
      {
        type: "p",
        text: "Eftersom vi inte har gjort en fullständig granskning kan det finnas problem som vi ännu inte har upptäckt. Dem vill vi gärna få veta om.",
      },
      { type: "h2", text: "Rapportera ett problem", id: "rapportera" },
      {
        type: "p",
        text: "Är något på webbplatsen svårt att använda, eller behöver du innehåll i ett annat format? Berätta det via [kontaktsidan](/sv/kontakt). Beskriv vilken sida det gäller och vad som hände, så försöker vi åtgärda det eller ge dig informationen på annat sätt.",
      },
      { type: "h2", text: "Om redogörelsen", id: "om" },
      {
        type: "p",
        text: "Lagen om tillgänglighet till digital offentlig service (DOS-lagen) gäller offentlig sektor och omfattar inte den här webbplatsen. Vi publicerar redogörelsen frivilligt, med vägledningen från Myndigheten för digital förvaltning (DIGG) som förebild.",
      },
    ],
    sources: [
      {
        label: "Web Content Accessibility Guidelines (WCAG) 2.2 (W3C)",
        url: "https://www.w3.org/TR/WCAG22/",
      },
      { label: "Myndigheten för digital förvaltning (DIGG)", url: "https://www.digg.se" },
    ],
  },

  security: {
    metaTitle: "Rapportera en säkerhetsbrist | Vardena",
    metaDescription:
      "Har du hittat en säkerhetsbrist på Vardenas webbplats? Så rapporterar du den till oss, vad vi ber dig om och vad du kan förvänta dig av oss i gengäld.",
    title: "Rapportera en säkerhetsbrist",
    lead: "Har du hittat en säkerhetsbrist på webbplatsen vill vi gärna veta det. Tack för att du hjälper oss att hålla webbplatsen säker.",
    updated,
    body: [
      { type: "h2", text: "Så rapporterar du", id: "rapportera" },
      {
        type: "p",
        text: "Skicka din rapport via [kontaktsidan](/sv/kontakt) och inled meddelandet med ”Säkerhet”. Vår fil [security.txt](/.well-known/security.txt) hänvisar till samma ställe.",
      },
      { type: "p", text: "En bra rapport innehåller:" },
      {
        type: "ul",
        items: [
          "Vilken sida eller del av webbplatsen som berörs",
          "En beskrivning av bristen och vad den kan leda till",
          "De steg som krävs för att återskapa den",
          "Hur vi når dig om vi har följdfrågor",
        ],
      },
      {
        type: "p",
        text: "Skicka inte med personuppgifter eller annan känslig information som du kan ha kommit åt. Beskriv den i stället.",
      },
      { type: "h2", text: "Det här ber vi dig om", id: "riktlinjer" },
      {
        type: "ul",
        items: [
          "Agera i god tro och undvik att skada webbplatsen, dess besökare eller oss.",
          "Läs, ändra eller radera inte data utöver vad som behövs för att visa problemet.",
          "Genomför inte överbelastningsattacker eller annat som påverkar webbplatsens tillgänglighet.",
          "Använd inte social manipulation, nätfiske eller fysiska angrepp mot oss eller någon annan.",
          "Ge oss rimlig tid att åtgärda bristen innan du berättar om den för andra.",
        ],
      },
      { type: "h2", text: "Det här kan du förvänta dig av oss", id: "forvantningar" },
      {
        type: "ul",
        items: [
          "Vi strävar efter att snabbt bekräfta att vi har tagit emot din rapport.",
          "Vi utreder rapporten och håller dig informerad om vad vi gör.",
        ],
      },
      {
        type: "p",
        text: "Vi uppskattar rapporter som lämnas i god tro och enligt de här riktlinjerna, och ser dem som ett bidrag till webbplatsens säkerhet. Vi betalar inte ut ersättning för rapporter.",
      },
      { type: "h2", text: "Omfattning", id: "omfattning" },
      {
        type: "p",
        text: "Sidan gäller den här webbplatsen. Brister i tjänster som drivs av andra, till exempel vårt webbhotell eller Microsofts produkter, rapporterar du till respektive leverantör.",
      },
    ],
    sources: [
      {
        label: "RFC 9116: A file format to aid in security vulnerability disclosure",
        url: "https://www.rfc-editor.org/rfc/rfc9116",
      },
    ],
  },
};
