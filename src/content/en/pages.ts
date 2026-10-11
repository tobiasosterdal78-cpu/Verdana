import type { PagesCopy } from "@/content/types";

export const pages: PagesCopy = {
  services: {
    metaTitle: "Business Central Consulting Services | Verdana",
    metaDescription:
      "ERP advisory, implementation, NAV to Business Central migration, integrations, support, managed services and consultants for Business Central.",
    title: "Business Central consulting services",
    lead: "We support you through the whole Microsoft Dynamics 365 Business Central lifecycle, or with the part where you need us most.",
    groups: {
      implement: {
        title: "Choose and implement",
        text: "From the first question about a new ERP system to a safe go-live.",
      },
      operate: {
        title: "Run and improve",
        text: "A system that works day to day and grows with the business.",
      },
    },
  },
  service: {
    primaryCta: "Start a conversation",
    secondaryCta: "What's included",
    fit: "Sound familiar?",
    included: "What's included",
    outcomes: "What you gain",
    steps: "How it works",
    faq: "Frequently asked questions",
    related: "Related services",
  },
  about: {
    metaTitle: "About Verdana | Business Central Consultancy, Sweden",
    metaDescription:
      "Verdana is a Swedish consultancy for Microsoft Dynamics 365 Business Central. Straight answers, standard before custom code, knowledge that stays with you.",
    title: "About Verdana",
    lead: "Verdana is a Swedish consultancy focused on Microsoft Dynamics 365 Business Central. We help companies choose, implement and develop their ERP system, with the people who use it at the center.",
    why: {
      title: "Why we exist",
      paragraphs: [
        "An ERP system touches almost everything in a company: how orders come in, how goods are bought, how invoices go out and how management follows the business. Yet many projects end up more expensive and more complicated than they need to be.",
        "We want to make Business Central understandable and useful. That means straight answers about what is realistic, solutions close to standard and documentation that helps you understand your own system.",
      ],
    },
    focus: {
      title: "What we stand for",
      items: [
        {
          icon: "core",
          title: "Business Central specialists",
          text: "We work with one ERP system and learn it in depth: features, licensing, updates and limitations.",
        },
        {
          icon: "company",
          title: "The business comes first",
          text: "Technology should solve real problems in finance, sales and inventory. That is why we always start with the processes.",
        },
        {
          icon: "improve",
          title: "A system that keeps improving",
          text: "Go-live is the beginning. Business Central is updated continuously, and the solution should get better over time.",
        },
      ],
    },
    principlesTitle: "Our principles",
    process: {
      title: "How we run projects",
      lead: "The same four steps, whether it is a new implementation, a move from NAV or an integration.",
    },
    servicesCta: "See our services",
  },
  contact: {
    metaTitle: "Contact Verdana | Business Central Consultancy, Sweden",
    metaDescription:
      "Book a first conversation about Business Central, replacing your ERP or moving from Dynamics NAV. Tell us about your situation and we will get back to you.",
    title: "Contact Verdana",
    lead: "Tell us briefly about your business and what you are considering: a new ERP system, a move from Dynamics NAV or getting more out of Business Central.",
    expectations: {
      title: "What a first conversation looks like",
      items: [
        {
          icon: "understand",
          title: "We listen to where you are",
          text: "Which systems you have, what is getting in the way and what you want to achieve.",
        },
        {
          icon: "design",
          title: "You get a first assessment",
          text: "Possible options, a rough scope and what drives time and cost.",
        },
        {
          icon: "deliver",
          title: "You decide the next step",
          text: "A concrete proposal: an assessment, a review or an answer to your question.",
        },
      ],
    },
    form: {
      labels: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        interest: "What is it about?",
        message: "Tell us briefly about your situation",
      },
      optional: "optional",
      choose: "Choose an option",
      messagePlaceholder: "For example: we run NAV 2016 and want to understand what a move to Business Central involves.",
      consent: "I agree that Verdana stores my details to answer this enquiry.",
      interests: [
        "New ERP system or assessment",
        "Business Central implementation",
        "Migration from Dynamics NAV",
        "Integrations and development",
        "Support and optimization",
        "Application management",
        "Consultants",
        "Something else",
      ],
      errors: {
        name: "Enter your name.",
        company: "Enter your company name.",
        email: "Enter a valid email address, for example name@company.com.",
        phone: "Enter the phone number in digits, for example +46 70 123 45 67.",
        interest: "Choose one of the options.",
        message: "Describe briefly what you need help with (at least 10 characters).",
        consent: "Agree that we store your details so we can reply.",
      },
      status: {
        invalid: "Some details are missing or need correcting. See the marked fields.",
        unavailable: "The form is not connected yet, so nothing was sent. Your details are still in the fields.",
        failed: "The enquiry could not be sent right now. Please try again in a moment.",
      },
      submit: "Send enquiry",
      sending: "Sending …",
      sent: {
        title: "Thank you, we have received your enquiry.",
        text: "We will get back to you as soon as we can to book a first conversation.",
      },
      honeypot: "Website",
    },
  },
  insights: { read: "Read the article", latest: "Articles and guides" },
  businessCentral: { faqTitle: "Business Central questions", contents: "Contents", allTopics: "All topics" },
};
