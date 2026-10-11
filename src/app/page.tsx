import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  CircleDot,
  Cloud,
  Component,
  Layers3,
  Network,
  Plus,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";

const services = [
  {
    number: "01",
    icon: Route,
    title: "Implementation",
    text: "Ett genomtänkt affärssystem börjar med din verksamhet. Vi tar dig från första analys till en trygg start.",
    tag: "Från idé till verklighet",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Migrering & modernisering",
    text: "Ta nästa steg från Dynamics NAV eller ett äldre ERP. Med en tydlig plan för data, processer och människor.",
    tag: "Redo för nästa kapitel",
  },
  {
    number: "03",
    icon: Network,
    title: "Integrationer & utveckling",
    text: "Knyt ihop dina system och bygg vidare där det behövs. För ett arbetsflöde där informationen följer med.",
    tag: "En mer sammanhängande vardag",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Support & optimering",
    text: "Affären står inte still. Vi hjälper dig att utveckla, förenkla och få mer värde ur ditt affärssystem över tid.",
    tag: "En långsiktig relation",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Förvaltning",
    text: "Håll affärssystemet i takt med verksamheten. Vi hjälper dig att planera uppgraderingar, prioritera förändringar och samordna den löpande förvaltningen.",
    tag: "Kontinuitet och framförhållning",
  },
  {
    number: "06",
    icon: UsersRound,
    title: "Konsulttjänster",
    text: "Förstärk ditt team med kompetens inom Business Central. Vi hjälper till med behovsanalys, kravställning och specialiststöd i projekt och löpande arbete.",
    tag: "Kompetens där den behövs",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till innehåll
      </a>
      <div className="header-shell">
        <Navigation />
      </div>
      <main id="main">
        <div className="dark-opening">
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> AFFÄRSSYSTEM MED RIKTNING
              </p>
              <h1 id="hero-title">
                Business Central.
                <br />
                Utan <span>kompromisser.</span>
              </h1>
              <p className="hero-description">
                Mindre friktion. Mer framåt.
                <br />
                Vi förenar affärsförståelse och teknik för att göra
                <br className="desktop-break" /> din nästa utveckling möjlig.
              </p>
              <div className="hero-actions">
                <a className="button button-blue" href="#kontakt">
                  Boka rådgivning <ArrowUpRight size={19} />
                </a>
                <a className="text-link" href="#tjanster">
                  Upptäck våra tjänster <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-footnote">
                <span>RÅDGIVNING</span>
                <span>IMPLEMENTATION</span>
                <span>UTVECKLING</span>
                <span>FÖRVALTNING</span>
                <span>KONSULTTJÄNSTER</span>
              </div>
            </div>
            <div className="hero-brand">
              <Image
                src="/brand/verdana-original.png"
                alt="Verdanas originallogotyp med ett blått och silverfärgat V"
                width={1254}
                height={1254}
                sizes="(max-width: 600px) 100vw, 50vw"
                preload
              />
            </div>
          </section>
          <div className="hero-baseline container">
            <span>Teknik som förenklar. En relation som håller.</span>
            <a href="#business-central">
              UTFORSKA VERDANA <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <section id="business-central" className="intro-section section-light">
          <div className="container">
            <div className="ecosystem-strip">
              <span>EN DEL AV EN STÖRRE HELHET</span>
              <div className="microsoft-name">
                <span className="microsoft-mark">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                Microsoft Dynamics 365
              </div>
              <span>Business Central</span>
              <span>Microsoft 365</span>
              <span>Power Platform</span>
            </div>
            <Reveal className="intro-heading">
              <p className="eyebrow dark-eyebrow">01 — MÖJLIGHETERNA</p>
              <div>
                <h2>
                  När systemen samspelar,
                  <br />
                  <span>kan verksamheten växa.</span>
                </h2>
                <p>
                  Färre omvägar mellan människor, information och beslut. <br />
                  Vi hjälper dig att skapa en helhet som fungerar i praktiken.
                </p>
              </div>
            </Reveal>
            <div className="benefit-grid">
              <Reveal>
                <div className="line-icon">
                  <Layers3 />
                </div>
                <h3>En samlad bild</h3>
                <p>
                  Samla verksamhetens flöden kring en gemensam grund. Från
                  ekonomi till försäljning och lager.
                </p>
              </Reveal>
              <Reveal>
                <div className="line-icon">
                  <Workflow />
                </div>
                <h3>Mer tid för rätt saker</h3>
                <p>
                  Förenkla det som upprepas. Låt smartare arbetssätt ge
                  människor utrymme att göra skillnad.
                </p>
              </Reveal>
              <Reveal>
                <div className="line-icon">
                  <ChartNoAxesCombined />
                </div>
                <h3>Beslut med riktning</h3>
                <p>
                  Gör information användbar. Skapa bättre förutsättningar för
                  insikt, uppföljning och nästa steg.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="tjanster" className="services-section section-light">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <p className="eyebrow dark-eyebrow">02 — VÅRA TJÄNSTER</p>
                <h2>
                  Rätt kompetens.
                  <br />
                  <span>Hela vägen.</span>
                </h2>
              </div>
              <p>
                Från det första vägvalet till nästa förbättring. <br />
                Vi möter dig där du är och tar er vidare tillsammans.
              </p>
            </Reveal>
            <div className="services-grid">
              {services.map((service) => (
                <Reveal className="service-card" key={service.number}>
                  <div className="service-top">
                    <service.icon size={29} strokeWidth={1.3} />
                    <span>{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-bottom">
                    <span>{service.tag}</span>
                    <a
                      href="#kontakt"
                      aria-label={`Prata med oss om ${service.title.toLowerCase()}`}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ekosystem" className="ecosystem-section">
          <div className="container ecosystem-layout">
            <Reveal className="ecosystem-copy">
              <p className="eyebrow">03 — EN SAMMANHÄNGANDE VÄRLD</p>
              <h2>
                Starkt var för sig.
                <br />
                <span>Smartare tillsammans.</span>
              </h2>
              <p>
                Affärssystemet är början. Vi hjälper dig att utforska hur
                Microsofts ekosystem och dina övriga system kan samverka utifrån
                verksamhetens behov.
              </p>
              <a className="text-link" href="#kontakt">
                Prata integrationer med oss <ArrowUpRight size={19} />
              </a>
              <div className="ecosystem-note">
                <Sparkles size={17} />
                <span>Med utrymme för automation och AI.</span>
              </div>
            </Reveal>
            <Reveal className="ecosystem-diagram">
              <div className="diagram-ring" />
              <div className="diagram-ring inner-ring" />
              <div className="diagram-line horizontal" />
              <div className="diagram-line vertical" />
              <div className="diagram-core">
                <Component size={32} />
                <span>
                  Business
                  <br />
                  Central
                </span>
              </div>
              <div className="diagram-node node-top">
                <Layers3 size={21} />
                <span>Microsoft 365</span>
              </div>
              <div className="diagram-node node-right">
                <ChartNoAxesCombined size={21} />
                <span>Power BI</span>
              </div>
              <div className="diagram-node node-bottom">
                <Workflow size={21} />
                <span>Power Platform</span>
              </div>
              <div className="diagram-node node-left">
                <Network size={21} />
                <span>Dina system</span>
              </div>
              <span className="diagram-caption">
                ILLUSTRATION AV MÖJLIGA KOPPLINGAR
              </span>
            </Reveal>
          </div>
        </section>

        <section id="process" className="process-section section-light">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <p className="eyebrow dark-eyebrow">04 — SÅ ARBETAR VI</p>
                <h2>
                  Stora förändringar.
                  <br />
                  <span>Tydliga steg.</span>
                </h2>
              </div>
              <p>
                Teknik är bara en del av resan. Gemensam förståelse, <br />
                tydliga prioriteringar och delaktighet tar oss framåt.
              </p>
            </Reveal>
            <div className="process-grid">
              {[
                [
                  "01",
                  "Förstå",
                  "Vi börjar med att lyssna. På verksamheten, människorna och det ni vill uppnå.",
                ],
                [
                  "02",
                  "Forma",
                  "Tillsammans sätter vi riktningen och en konkret plan för lösning och genomförande.",
                ],
                [
                  "03",
                  "Förverkliga",
                  "Vi bygger, testar och förbereder organisationen. Steg för steg, med dialog hela vägen.",
                ],
                [
                  "04",
                  "Förbättra",
                  "Efter start fortsätter utvecklingen. Vi följer upp, optimerar och tar vara på nya möjligheter.",
                ],
              ].map(([number, title, text]) => (
                <Reveal key={number} className="process-step">
                  <div className="step-track">
                    <span>{number}</span>
                    <ArrowRight size={17} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="about-row">
              <div id="om-oss">
                <p className="eyebrow dark-eyebrow">DET HÄR ÄR VERDANA</p>
                <h3>
                  Affärsförståelse möter
                  <br />
                  teknisk nyfikenhet.
                </h3>
              </div>
              <p>
                Vi vill göra komplex teknik begriplig och användbar. Med fokus
                på Business Central hjälper vi företag att skapa bättre
                förutsättningar för sin verksamhet — och för människorna som
                driver den.
              </p>
              <span className="about-symbol" aria-hidden="true">
                <Plus size={64} strokeWidth={1} />
              </span>
            </Reveal>
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">NÄSTA STEG BÖRJAR MED ETT SAMTAL</p>
              <h2>
                Vad vill du
                <br />
                ta vidare?
              </h2>
              <p>
                Berätta var ni står. Vi utforskar möjligheterna tillsammans.
              </p>
            </div>
            <div className="contact-action">
              <details id="kontaktinformation">
                <summary className="button button-white">
                  Låt oss prata <ArrowUpRight size={21} />
                </summary>
                <p>
                  Bokning och kontaktuppgifter läggs till när företagets
                  kontaktväg är bekräftad. Ingen förfrågan skickas från denna
                  förhandsvisning.
                </p>
              </details>
              <span>Ett första samtal. En tydligare riktning.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href="#">
                <BrandLogo />
              </a>
              <p>Affärssystem med riktning.</p>
            </div>
            <nav aria-label="Sidfotsnavigation">
              <a href="#business-central">Business Central</a>
              <a href="#tjanster">Våra tjänster</a>
              <a href="#process">Så arbetar vi</a>
              <a href="#kontakt">
                Kontakt <ArrowUpRight size={14} />
              </a>
            </nav>
            <a className="back-top" href="#">
              Till toppen <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Verdana</span>
            <span>Designförslag 02 · För granskning</span>
            <span>
              SVERIGE <CircleDot size={11} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
