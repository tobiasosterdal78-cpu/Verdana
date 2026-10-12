import type { Doc } from "@/content/types";
import type { LegalId } from "@/lib/routes";

const updated = "2026-10-11";

export const legal: Record<LegalId, Doc> = {
  privacy: {
    metaTitle: "Privacy notice | Vardena",
    metaDescription:
      "How Vardena handles personal data from the contact form and server logs, why we process it, how long we keep it and how to use your rights under the GDPR.",
    title: "Privacy notice",
    lead: "This notice explains what personal data Vardena handles when you visit this website or contact us, why we do it and what rights you have.",
    updated,
    body: [
      { type: "h2", text: "Who is responsible", id: "controller" },
      {
        type: "p",
        text: "Vardena is the controller for the personal data described in this notice. If you have questions about how we handle your data, or want to use any of your rights, reach us through the [contact page](/contact).",
      },
      { type: "h2", text: "What data we collect and where it comes from", id: "data" },
      { type: "h3", text: "When you use the contact form" },
      { type: "p", text: "You give us the data yourself when you send an enquiry:" },
      {
        type: "ul",
        items: [
          "Name, company and email address",
          "Phone number, if you choose to add it",
          "What your enquiry is about, if you choose an option",
          "Your message and anything you write in it",
          "That you ticked the consent box, and when the form was sent",
        ],
      },
      {
        type: "p",
        text: "The form also contains two hidden spam traps: a field that should stay empty and a timestamp for when the form was opened. They are used only to filter out automated spam.",
      },
      { type: "h3", text: "When you visit the website" },
      {
        type: "p",
        text: "Like every website, ours is delivered by a web host. The host processes technical log data, such as your IP address, the time of the request and which page was requested, to deliver the site and protect it against misuse.",
      },
      {
        type: "p",
        text: "The site sets no cookies and uses no analytics, advertising or tracking tools. Read more on our [cookies page](/cookies).",
      },
      { type: "h2", text: "Why we process your data and on what legal basis", id: "purposes" },
      {
        type: "table",
        caption: "Purposes and legal bases under the GDPR",
        head: ["Purpose", "Data", "Legal basis"],
        rows: [
          [
            "Answering your enquiry and following up on a possible assignment",
            "Contact form data",
            "Our legitimate interest in answering people who contact us, and steps taken at your request before a possible agreement (Art. 6(1)(f) and 6(1)(b))",
          ],
          [
            "Delivering the website and protecting it against misuse",
            "Technical log data",
            "Our legitimate interest in running a secure and working website (Art. 6(1)(f))",
          ],
          [
            "Keeping accounting records if a business relationship follows",
            "Data in contracts and invoices",
            "Legal obligation under Swedish accounting rules (Art. 6(1)(c))",
          ],
        ],
      },
      {
        type: "p",
        text: "The consent box in the contact form documents that you agree to us storing your details to answer your enquiry. You can withdraw your consent at any time through the [contact page](/contact). Withdrawing does not affect processing that has already taken place.",
      },
      {
        type: "p",
        text: "We do not use your data for automated decision-making or profiling.",
      },
      { type: "h2", text: "Who we share data with", id: "recipients" },
      {
        type: "p",
        text: "We never sell your personal data. We share it only with service providers that help us run the website and handle enquiries, and they act as our processors under a data processing agreement:",
      },
      {
        type: "ul",
        items: [
          "The web host, which delivers the site and processes technical log data",
          "The provider of our email and enquiry inbox, which stores the messages sent through the contact form",
        ],
      },
      {
        type: "p",
        text: "We may also disclose data to authorities when the law requires it.",
      },
      {
        type: "p",
        text: "We aim to keep all personal data within the EU/EEA. If a provider processes data outside the EU/EEA, we make sure appropriate safeguards are in place, such as the European Commission's standard contractual clauses.",
      },
      { type: "h2", text: "How long we keep your data", id: "retention" },
      {
        type: "ul",
        items: [
          "**Enquiries** are kept as long as we need them to handle your enquiry and any business relationship that follows. After that, we delete them.",
          "**Accounting records** are kept for as long as Swedish accounting law requires, if a business relationship follows.",
          "**Technical log data** is kept by the web host for a limited period to deliver and protect the site.",
        ],
      },
      { type: "h2", text: "Your rights", id: "rights" },
      { type: "p", text: "Under the GDPR you have the right to:" },
      {
        type: "ul",
        items: [
          "**Access** the personal data we hold about you and get a copy",
          "**Rectification** of data that is wrong or incomplete",
          "**Erasure** of your data in certain cases",
          "**Restriction** of processing in certain cases",
          "**Object** to processing based on our legitimate interest",
          "**Data portability**, meaning you get data you gave us in a machine-readable format",
          "**Withdraw your consent** at any time",
        ],
      },
      {
        type: "p",
        text: "To use your rights, contact us through the [contact page](/contact). We answer within one month, as the GDPR requires.",
      },
      { type: "h2", text: "Complaints", id: "complaints" },
      {
        type: "p",
        text: "If you think we handle your personal data incorrectly, please tell us first so we can put it right. You also have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY) at [imy.se](https://www.imy.se).",
      },
      { type: "h2", text: "Changes to this notice", id: "changes" },
      {
        type: "p",
        text: "We update this notice when we change how we handle personal data. The date at the top shows when it was last updated.",
      },
    ],
    sources: [
      {
        label: "General Data Protection Regulation (EU) 2016/679",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      { label: "Integritetsskyddsmyndigheten (IMY)", url: "https://www.imy.se" },
    ],
  },

  cookies: {
    metaTitle: "Cookie Policy | Vardena",
    metaDescription:
      "The Vardena website sets no cookies and uses no analytics or tracking. The only thing stored in your browser is your light or dark theme choice.",
    title: "Cookies",
    lead: "This website sets no cookies. That is why you never see a cookie banner here.",
    updated,
    body: [
      { type: "h2", text: "What we do not use", id: "not-used" },
      { type: "p", text: "The site has none of the following:" },
      {
        type: "ul",
        items: [
          "Cookies",
          "Analytics or visitor statistics",
          "Advertising or tracking pixels",
          "Embedded content from social media",
          "Fonts loaded from third parties (our fonts are served from our own site)",
          "Scripts loaded from other websites",
        ],
      },
      { type: "h2", text: "The one thing stored in your browser", id: "theme" },
      {
        type: "p",
        text: "If you press the light/dark theme switch, your choice is saved in your browser's session storage (sessionStorage) under the key “theme”, so the site keeps the same look as you move between pages.",
      },
      {
        type: "ul",
        items: [
          "It is never sent to us or to anyone else.",
          "It is deleted automatically when you close the browser tab or end the session.",
          "If you never press the switch, nothing is stored and the site uses its light theme.",
        ],
      },
      {
        type: "p",
        text: "Under Swedish law, storage that is strictly necessary to provide a service the user has explicitly asked for does not require consent (Lag (2022:482) om elektronisk kommunikation, chapter 9, section 28). Remembering a theme you chose yourself falls into that category.",
      },
      { type: "h2", text: "Clearing the stored choice", id: "clear" },
      {
        type: "p",
        text: "Close the tab, or clear site data in your browser settings. The site then goes back to its light theme.",
      },
      { type: "h2", text: "Server logs", id: "logs" },
      {
        type: "p",
        text: "Our web host processes technical log data, such as IP address, time and requested page, to deliver and protect the site. This does not involve cookies. Our [privacy notice](/privacy) explains how that data is handled.",
      },
      { type: "h2", text: "If this changes", id: "changes" },
      {
        type: "p",
        text: "If we ever add cookies or similar technology that needs your consent, we will update this page and ask for your consent before anything is stored.",
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
    metaTitle: "Terms of use | Vardena",
    metaDescription:
      "The terms for using the Vardena website: general information only, Microsoft list prices with dates, links to other sites, copyright and liability.",
    title: "Terms of use",
    lead: "These terms apply when you use this website. By using the site, you accept them.",
    updated,
    body: [
      { type: "h2", text: "About the website", id: "about" },
      {
        type: "p",
        text: "This website is run by Vardena. It presents our services around Microsoft Dynamics 365 Business Central and lets you contact us. There are no user accounts and nothing can be bought on the site.",
      },
      { type: "h2", text: "General information, not advice", id: "information" },
      {
        type: "p",
        text: "The content on the site is general information. It is not advice for your specific situation and does not replace an assessment of your business. We work to keep the content accurate and up to date, but we cannot guarantee that everything is complete or correct at all times.",
      },
      { type: "h2", text: "Prices", id: "prices" },
      {
        type: "p",
        text: "Prices shown on the site are Microsoft's list prices as stated on the date given next to them. Microsoft can change its prices, and the price you pay depends on your agreement. The actual prices for licenses and services are always agreed in writing.",
      },
      { type: "h2", text: "Contact form", id: "contact-form" },
      {
        type: "p",
        text: "Sending an enquiry through the contact form does not create an agreement. Any assignment is agreed separately in writing. Our [privacy notice](/privacy) describes how we handle the details you send.",
      },
      { type: "h2", text: "Intellectual property", id: "intellectual-property" },
      {
        type: "p",
        text: "Texts, images and design on this site belong to Vardena unless stated otherwise. You are welcome to share links to the site and quote short passages with a reference to the source. Other use requires our written permission.",
      },
      {
        type: "p",
        text: "Microsoft, Dynamics 365, Dynamics NAV and Business Central are trademarks of the Microsoft group of companies. Mentioning them does not mean that Microsoft endorses this website.",
      },
      { type: "h2", text: "Links to other websites", id: "links" },
      {
        type: "p",
        text: "The site links to other websites, such as Microsoft's. We are not responsible for their content or how they handle personal data.",
      },
      { type: "h2", text: "Liability", id: "liability" },
      {
        type: "p",
        text: "To the extent permitted by law, Vardena is not liable for any loss arising from the use of the information on this site, or from the site being temporarily unavailable.",
      },
      { type: "h2", text: "Changes and governing law", id: "changes" },
      {
        type: "p",
        text: "We may update these terms. The date at the top shows when they were last updated. Swedish law applies to these terms.",
      },
      {
        type: "p",
        text: "Questions about the terms? Get in touch through the [contact page](/contact).",
      },
    ],
  },

  accessibility: {
    metaTitle: "Accessibility statement | Vardena",
    metaDescription:
      "How accessible the Vardena website is: our WCAG 2.2 AA aim, what the site supports, how we have tested it, known limitations and how to report a problem.",
    title: "Accessibility statement",
    lead: "We want everyone to be able to use this website, regardless of ability or the device they use. This statement describes where we stand.",
    updated,
    body: [
      { type: "h2", text: "Our aim", id: "aim" },
      {
        type: "p",
        text: "We aim for the site to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.",
      },
      { type: "h2", text: "What the site supports", id: "support" },
      {
        type: "ul",
        items: [
          "Navigation with the keyboard alone",
          "A clearly visible focus indicator",
          "Reduced motion when your device asks for it",
          "A light theme by default and a dark theme you can switch to",
          "Text zoom without loss of content or function",
        ],
      },
      { type: "h2", text: "How we have tested", id: "testing" },
      {
        type: "p",
        text: "We have checked the site with automated accessibility tests and by navigating it with the keyboard. No full external audit has been done yet, so we do not claim that the site fully conforms to WCAG 2.2 AA.",
      },
      { type: "h2", text: "Known limitations", id: "limitations" },
      {
        type: "p",
        text: "Decorative animations are turned off when your device asks for reduced motion, so the site may look slightly different with that setting on. No content or function depends on the animations.",
      },
      {
        type: "p",
        text: "Because we have not done a full audit, there may be problems we have not found yet. We would like to hear about them.",
      },
      { type: "h2", text: "Report a problem", id: "report" },
      {
        type: "p",
        text: "If something on the site is hard to use or you need content in another format, tell us through the [contact page](/contact). Describe which page it concerns and what happened, and we will try to fix it or give you the information another way.",
      },
      { type: "h2", text: "About this statement", id: "about" },
      {
        type: "p",
        text: "The Swedish law on accessibility to digital public services (DOS-lagen) applies to the public sector and does not cover this website. We publish this statement voluntarily, inspired by the guidance from the Agency for Digital Government (Myndigheten för digital förvaltning, DIGG).",
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
    metaTitle: "Responsible disclosure | Vardena",
    metaDescription:
      "Found a security vulnerability in the Vardena website? Here is how to report it to us, what we ask of you in return and what you can expect from us.",
    title: "Responsible disclosure",
    lead: "If you have found a security vulnerability in this website, we want to hear about it. Thank you for helping us keep the site safe.",
    updated,
    body: [
      { type: "h2", text: "How to report", id: "report" },
      {
        type: "p",
        text: "Send your report through the [contact page](/contact) and start your message with “Security”. Our [security.txt](/.well-known/security.txt) file points to the same place.",
      },
      { type: "p", text: "A good report includes:" },
      {
        type: "ul",
        items: [
          "Which page or part of the site is affected",
          "A description of the vulnerability and its possible impact",
          "The steps needed to reproduce it",
          "How we can reach you with follow-up questions",
        ],
      },
      {
        type: "p",
        text: "Do not include personal data or other sensitive information you may have come across. Describe it instead.",
      },
      { type: "h2", text: "What we ask of you", id: "guidelines" },
      {
        type: "ul",
        items: [
          "Act in good faith and avoid harming the site, its visitors or us.",
          "Do not access, change or delete data beyond what is needed to demonstrate the issue.",
          "Do not carry out denial-of-service attacks or anything else that affects the site's availability.",
          "Do not use social engineering, phishing or physical attacks against us or anyone else.",
          "Give us reasonable time to fix the issue before you share information about it with others.",
        ],
      },
      { type: "h2", text: "What you can expect from us", id: "expect" },
      {
        type: "ul",
        items: [
          "We aim to acknowledge reports promptly.",
          "We investigate the report and keep you informed about what we do.",
        ],
      },
      {
        type: "p",
        text: "We appreciate reports made in good faith in line with these guidelines and treat them as a contribution to the site's security. We do not offer financial rewards for reports.",
      },
      { type: "h2", text: "Scope", id: "scope" },
      {
        type: "p",
        text: "This page covers this website. Vulnerabilities in services run by others, such as our web host or Microsoft's products, should be reported to the provider concerned.",
      },
    ],
    sources: [
      { label: "RFC 9116: A file format to aid in security vulnerability disclosure", url: "https://www.rfc-editor.org/rfc/rfc9116" },
    ],
  },
};
