import type { SiteCopy } from "@/content/types";

export const site: SiteCopy = {
  skipToContent: "Skip to content",
  homeLabel: "Vardena, home",
  primaryNav: "Main menu",
  nav: { services: "Services", businessCentral: "Business Central", insights: "Insights", about: "About" },
  cta: "Start a conversation",
  menu: { open: "Open menu", close: "Close menu", label: "Menu" },
  servicesMenu: {
    all: "All services",
    help: "Not sure where to start? A first conversation gives you a clearer picture.",
    featuredLabel: "Guide",
    featuredTitle: "From Dynamics NAV to Business Central",
    featuredText: "What happens to your data, customizations and licenses, and how to plan the move.",
    featuredCta: "Read the guide",
  },
  businessCentralMenu: {
    title: "Business Central, explained",
    text: "What it covers, what it costs in Sweden and how NAV customers move to it.",
    cta: "Read the overview",
    guides: "Guides",
  },
  phases: {
    implement: {
      title: "Choose and implement",
      intro:
        "From the first analysis to go-live: the right decision, a clear plan and your history moved into the new system.",
    },
    operate: {
      title: "Run and improve",
      intro:
        "Once you are live: integrations, support and application management that keep Business Central fitting the business.",
    },
  },
  theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
  language: "Language",
  breadcrumbs: "Breadcrumbs",
  breadcrumbHome: "Home",
  readMore: "Read more",
  updated: "Updated",
  sources: "Sources",
  minutes: "min read",
  ctaBand: {
    title: "Tell us where you are today.",
    text: "One conversation is often enough to see the right next step, whether you are replacing your ERP, moving off Dynamics NAV or getting more out of Business Central.",
    primary: "Start a conversation",
    secondary: "See our services",
    steps: [
      "You tell us about your situation, goals and timeline.",
      "We give a first view of the options and the risks.",
      "You get a concrete proposal for the next step.",
    ],
  },
  contactPrompt: {
    faq: { text: "Can't find the answer?", link: "Ask us a question" },
    talk: { text: "Would you rather talk it through with a consultant?", link: "Start a conversation" },
    legal: { text: "Questions about this page?", link: "Contact us" },
  },
  footer: {
    tagline:
      "A Microsoft Dynamics 365 Business Central consultancy in Sweden. We help companies choose, implement and improve their ERP system.",
    region: "Sweden",
    languages: "Language",
    columns: {
      services: "Services",
      businessCentral: "Business Central",
      company: "Company",
      trust: "Trust",
      legal: "Legal",
    },
    links: {
      whatIsBc: "What is Business Central?",
      pricing: "Business Central pricing",
      navEndOfLife: "Dynamics NAV end of support",
      navToBc: "From NAV to Business Central",
      switchingErp: "Switching ERP systems",
      allInsights: "All insights",
      about: "About",
      howWeWork: "How we work",
      contact: "Contact",
      principles: "Our principles",
      accessibility: "Accessibility",
      security: "Responsible disclosure",
      securityTxt: "security.txt",
      privacy: "Privacy notice",
      cookies: "Cookies",
      terms: "Terms of use",
    },
    rights: "All rights reserved.",
    orgNumber: "Org.nr",
    trademarks:
      "Microsoft, Dynamics 365, Business Central, Dynamics NAV, Microsoft 365, Power BI and Power Platform are trademarks of the Microsoft group of companies.",
  },
  notFound: {
    metaTitle: "Page not found | Vardena",
    title: "This page doesn't exist.",
    text: "The address may be mistyped, or the page has moved. Start from the home page or go straight to our services.",
    home: "Go to the home page",
    services: "See our services",
    contact: "Contact us",
  },
};
