import type { IconName } from "@/components/icons";
import type { InsightId, ServiceId } from "@/lib/routes";

/**
 * Content shapes shared by both languages. Each language implements every
 * shape in src/content/<locale>/, so a missing translation fails the
 * typecheck instead of shipping an empty string.
 */

export type Faq = { question: string; answer: string };

/** Before go-live (choosing and implementing) or after (running and improving). */
export type Phase = "implement" | "operate";

export type Service = {
  id: ServiceId;
  phase: Phase;
  icon: IconName;
  /** Short name for menus, cards and breadcrumbs. */
  name: string;
  /** One short line for cards. */
  blurb: string;
  /** A few words for the header menu, at most 36 characters. */
  menu: string;
  /** Full title tag, brand included, at most 60 characters. */
  metaTitle: string;
  /** 110 to 155 characters. */
  metaDescription: string;
  /** schema.org Service.serviceType. */
  serviceType: string;
  /** The page's H1. */
  title: string;
  lead: string;
  /** Situations where the service fits. */
  fit: string[];
  included: string[];
  outcomes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  /** Optional deeper explanation rendered as paragraphs. */
  details?: { title: string; paragraphs: string[] };
  faqs: Faq[];
  related: ServiceId[];
};

/**
 * Long-form content as blocks. Text may contain two inline marks:
 * **bold** and [link text](/public/path or https://url). Internal links use
 * the public path in the same language, e.g. /sv/tjanster/support.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  /** A highlighted aside, e.g. a key date or a caveat. */
  | { type: "note"; title?: string; text: string };

export type Source = { label: string; url: string };

export type Doc = {
  /** Full title tag, brand included, at most 60 characters. */
  metaTitle: string;
  /** 110 to 155 characters. */
  metaDescription: string;
  /** The page's H1. */
  title: string;
  lead: string;
  /** ISO date (YYYY-MM-DD) the content was last reviewed. */
  updated: string;
  body: Block[];
  /** Primary sources for facts stated in the body. */
  sources?: Source[];
};

export type Article = Doc & {
  id: InsightId;
  /** Short label such as "Guide" or "Pricing". */
  category: string;
  /** One or two sentences for the insights index and cards. */
  summary: string;
  /** ISO date first published. */
  published: string;
  readingMinutes: number;
  faqs?: Faq[];
};

export type InsightsIndex = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
};

/** One entry in the topic guide; id is an H2 id in the body, or "faq". */
export type BusinessCentralTopic = { id: string; icon: IconName; label: string; summary: string };

export type BusinessCentralPage = Doc & {
  faqs: Faq[];
  /** The topic guide under the hero, also listed in the header menu. */
  guide: { title: string; lead: string; groups: { title: string; topics: BusinessCentralTopic[] }[] };
};

export type IconItem = { icon: IconName; title: string; text: string };

export type SectionHead = { label: string; title: string; lead: string };

/** One capability area on the home page: a short name, a claim, and what it rests on. */
export type AreaCopy = {
  name: string;
  title: string;
  text: string;
  points: string[];
  /** What is standard and what takes an add-on, a licence or an integration. */
  scope?: string;
  link: string;
  /** Describes the illustration beside the text; the illustration itself is hidden from screen readers. */
  caption: string;
};

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    /** The H1 is two sentences; the second is set in a quieter tone. */
    title: [string, string];
    lead: [string, string];
    primaryCta: string;
    secondaryCta: string;
  };
  services: SectionHead & { all: string };
  nav: SectionHead & {
    source: string;
    primary: string;
    secondary: string;
    until: string;
    ended: string;
    thisMonth: string;
    oneMonth: string;
    /** "{n}" is replaced with the number of months. */
    months: string;
  };
  /**
   * The five areas the home page goes into. Every figure in a mock is
   * example data; only labels and display values live here, the geometry
   * is in components/home/area-mocks.tsx.
   */
  areas: SectionHead & {
    projects: AreaCopy & {
      mock: {
        window: string;
        status: string;
        project: string;
        totals: { label: string; value: string }[];
        activities: string;
        budget: string;
        actual: string;
        rows: { label: string; value: string }[];
        week: string;
        approved: string;
        days: string[];
        hours: string[];
        sum: string;
        total: string;
      };
    };
    warehouse: AreaCopy & {
      mock: {
        window: string;
        location: string;
        legend: { occupied: string; free: string; stop: string };
        pick: string;
        columns: [string, string, string];
        lines: { number: string; item: string; bin: string; quantity: string }[];
        picked: string;
        next: string;
        stock: { label: string; value: string; reorder: string };
      };
    };
    commerce: Omit<AreaCopy, "caption">;
    reporting: AreaCopy & {
      mock: {
        sales: {
          title: string;
          period: string;
          kpis: { label: string; value: string; change: string }[];
          trend: string;
          thisYear: string;
          lastYear: string;
          groupsTitle: string;
          groups: { label: string; value: string }[];
        };
        projects: { title: string; subtitle: string; rows: { label: string; value: string }[] };
        receivables: { title: string; total: string; buckets: { label: string; value: string }[] };
      };
    };
    care: AreaCopy & {
      secondLink: string;
      mock: {
        window: string;
        tickets: { title: string; area: string; status: string }[];
        updates: string;
        major: string;
        minor: string;
        checks: string[];
      };
    };
  };
  businessCentral: Omit<SectionHead, "lead"> & {
    paragraphs: string[];
    more: string;
    premium: string;
    capabilities: (IconItem & { premium?: boolean })[];
    flow: { caption: string; stations: { icon: IconName; title: string; detail: string; status: string }[] };
  };
  integrations: SectionHead & { cta: string; items: IconItem[] };
  process: SectionHead & {
    outcome: string;
    steps: { title: string; text: string; outcome: string }[];
  };
  principles: SectionHead & { cta: string; items: { title: string; text: string }[] };
  faq: SectionHead & { items: Faq[] };
};

export type ContactField = "name" | "company" | "email" | "phone" | "interest" | "message" | "consent";

export type ContactFormCopy = {
  labels: Record<Exclude<ContactField, "consent">, string>;
  optional: string;
  choose: string;
  messagePlaceholder: string;
  consent: string;
  /** Options for "What is it about?"; the server validates against the same list. */
  interests: string[];
  errors: Record<ContactField, string>;
  status: { invalid: string; unavailable: string; failed: string };
  /** Offered when the form could not send: opens the visitor's own mail program with the message. */
  mailFallback: string;
  /** Subject of the email an enquiry becomes. */
  emailSubject: string;
  submit: string;
  sending: string;
  sent: { title: string; text: string };
  honeypot: string;
};

export type PagesCopy = {
  services: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    groups: Record<Phase, { title: string; text: string }>;
  };
  service: {
    primaryCta: string;
    secondaryCta: string;
    fit: string;
    included: string;
    outcomes: string;
    steps: string;
    faq: string;
    related: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    why: { title: string; paragraphs: string[] };
    focus: { title: string; items: IconItem[] };
    principlesTitle: string;
    process: { title: string; lead: string };
    servicesCta: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    expectations: { title: string; items: IconItem[] };
    /** The email address as a second way in, beside the form. */
    direct: { title: string; text: string };
    form: ContactFormCopy;
  };
  insights: { read: string; latest: string };
  businessCentral: { faqTitle: string; contents: string; allTopics: string };
};

/** Interface text shared by every page: header, menus, footer, closing band. */
export type SiteCopy = {
  skipToContent: string;
  homeLabel: string;
  primaryNav: string;
  nav: { services: string; businessCentral: string; insights: string; about: string };
  cta: string;
  menu: { open: string; close: string; label: string };
  servicesMenu: {
    all: string;
    help: string;
    featuredLabel: string;
    featuredTitle: string;
    featuredText: string;
    featuredCta: string;
  };
  businessCentralMenu: { title: string; text: string; cta: string; guides: string };
  phases: Record<Phase, { title: string; intro: string }>;
  theme: { toDark: string; toLight: string };
  language: string;
  breadcrumbs: string;
  breadcrumbHome: string;
  readMore: string;
  updated: string;
  sources: string;
  minutes: string;
  ctaBand: { title: string; text: string; primary: string; secondary: string; steps: string[] };
  /** Short prompts inside a page that lead to the contact page. */
  contactPrompt: Record<"faq" | "talk" | "legal", { text: string; link: string }>;
  footer: {
    tagline: string;
    region: string;
    languages: string;
    columns: { services: string; businessCentral: string; company: string; trust: string; legal: string };
    links: {
      whatIsBc: string;
      pricing: string;
      navEndOfLife: string;
      navToBc: string;
      switchingErp: string;
      allInsights: string;
      about: string;
      howWeWork: string;
      contact: string;
      principles: string;
      accessibility: string;
      security: string;
      securityTxt: string;
      privacy: string;
      cookies: string;
      terms: string;
    };
    rights: string;
    orgNumber: string;
    trademarks: string;
  };
  notFound: { metaTitle: string; title: string; text: string; home: string; services: string; contact: string };
};
