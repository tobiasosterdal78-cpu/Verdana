import type { BusinessCentralPage } from "@/content/types";

export const businessCentral: BusinessCentralPage = {
  metaTitle: "What Is Microsoft Dynamics 365 Business Central? | Vardena",
  metaDescription:
    "What Business Central covers, what it costs in Sweden, Essentials vs Premium, cloud vs on-premises, Swedish localization and the path from Dynamics NAV.",
  title: "Microsoft Dynamics 365 Business Central, explained",
  lead: "Business Central is Microsoft's ERP system for small and midsize businesses. It brings finance, sales, purchasing, inventory, projects and reporting into one system. This page explains what it covers, how it is licensed and priced in Sweden, how it relates to Dynamics NAV, and how to tell whether it fits your company.",
  updated: "2026-10-11",
  guide: {
    title: "What do you want to know?",
    lead: "Pick a topic or read from the top. Each section is short and based on Microsoft's own documentation, listed at the end of the page.",
    groups: [
      {
        title: "The product",
        topics: [
          { id: "what-it-is", icon: "core", label: "What it is", summary: "ERP for small and midsize firms" },
          { id: "what-it-covers", icon: "modules", label: "What it covers", summary: "Finance, sales, stock and projects" },
          { id: "copilot", icon: "copilot", label: "Copilot and AI", summary: "What is included, what costs extra" },
          { id: "integrations", icon: "integration", label: "Integrations", summary: "Microsoft 365, Power BI and APIs" },
        ],
      },
      {
        title: "Running it in Sweden",
        topics: [
          { id: "cloud-or-on-premises", icon: "cloud", label: "Cloud or on-premises", summary: "Online or on your own servers" },
          { id: "licenses-and-prices", icon: "invoice", label: "Licenses and prices", summary: "Essentials, Premium, Team Members" },
          { id: "swedish-localization", icon: "translate", label: "Swedish localization", summary: "SIE, VAT and the Swedish language" },
          { id: "updates", icon: "updates", label: "Updates", summary: "Two major releases every year" },
        ],
      },
      {
        title: "Making the decision",
        topics: [
          { id: "who-it-suits", icon: "company", label: "Who it suits", summary: "When it fits, and when it does not" },
          { id: "dynamics-nav", icon: "migration", label: "Dynamics NAV", summary: "Upgrade paths and support dates" },
          { id: "get-started", icon: "deliver", label: "Getting started", summary: "Five steps from trial to go-live" },
          { id: "faq", icon: "question", label: "Common questions", summary: "Editions, prices and Navision" },
        ],
      },
    ],
  },
  body: [
    { type: "h2", id: "what-it-is", text: "What Business Central is" },
    {
      type: "p",
      text: "Microsoft describes Business Central as AI-powered ERP for small and midsize businesses and says it is used by more than 55,000 companies worldwide (Microsoft's figure, checked in October 2026). In practice it is the system where your general ledger, customers, vendors, items, orders and projects live together. A sales order, the stock it uses and the invoice and ledger entries it creates are all the same data, so nobody has to copy figures between systems.",
    },
    {
      type: "p",
      text: "Business Central belongs to the Dynamics 365 family, but it has its own licenses and is sold on its own. You do not need any other Dynamics 365 product to use it.",
    },

    { type: "h2", id: "what-it-covers", text: "What it covers" },
    {
      type: "p",
      text: "Microsoft's licensing guide lists the functional areas. Most companies find what they need in the **Essentials** edition:",
    },
    {
      type: "ul",
      items: [
        "**Finance:** general ledger, budgets, bank reconciliation, fixed assets, multiple currencies, unlimited dimensions, cash flow forecast, deferrals, consolidation, cost accounting and intercompany postings.",
        "**Sales and CRM:** quotes, orders, contacts, campaigns, opportunities and Outlook integration.",
        "**Purchasing and payables:** requisitions, purchase orders, vendor invoices and payments.",
        "**Inventory and warehouse:** item tracking, locations and transfers, assembly, demand forecasting, cycle counting, bins, picks, put-aways, receipts and shipments.",
        "**Projects:** jobs, job quotes, resources, capacity and time sheets.",
        "**Reporting:** account schedules, analysis reports, embedded Power BI, Word document layouts and workflows.",
      ],
    },
    {
      type: "p",
      text: "**Premium** includes everything in Essentials plus two areas: **manufacturing** (production orders, production bills of materials, capacity and supply planning, machine centers) and **service management** (service orders, contracts, service items, planning and dispatching). If you do not produce goods or run a service operation, Essentials is normally the edition to look at.",
    },

    { type: "h2", id: "cloud-or-on-premises", text: "Cloud or on-premises" },
    { type: "p", text: "Business Central can run in two ways:" },
    {
      type: "ul",
      items: [
        "**Online (SaaS):** Microsoft hosts it on Azure. Swedish environments are hosted in the Azure geography Sweden, and Microsoft rolls out updates on a fixed schedule.",
        "**On-premises:** you, a partner or a hosting provider runs it on servers you control, with separate licensing.",
      ],
    },
    {
      type: "p",
      text: "Microsoft's direction is cloud-first. Its product page talks only about the cloud, and several features require Business Central online: Copilot and the AI agents, read-only access in Teams for Microsoft 365 users, and the built-in Power BI apps.",
    },
    {
      type: "p",
      text: "On-premises has not gone away. Microsoft shipped version 29 for on-premises in October 2026, including a Swedish package. On-premises versions are covered by Microsoft's Modern Lifecycle Policy, which means support only continues if you keep your installation current. On-premises licenses are sold through Microsoft's Dynamics Price List under perpetual or subscription models, and Microsoft has said that the end of perpetual purchases applies to new customers. If on-premises is a requirement for you, check the current licensing terms early.",
    },

    { type: "h2", id: "licenses-and-prices", text: "Licenses and list prices in Sweden" },
    {
      type: "p",
      text: "Business Central online is licensed per user and month and is sold only through Microsoft's Cloud Solution Provider (CSP) program. Microsoft's Swedish pricing page showed these list prices when we checked on October 11, 2026:",
    },
    {
      type: "table",
      caption:
        "Microsoft list prices on microsoft.com/sv-se, excluding VAT, paid yearly. Checked 2026-10-11.",
      head: ["License", "Who it is for", "SEK per user/month"],
      rows: [
        [
          "Essentials",
          "Full users in finance, sales, purchasing, inventory, warehouse and projects",
          "764.70",
        ],
        ["Premium", "Full users who also need manufacturing or service management", "1,051.40"],
        ["Team Members", "Users who mainly read data, approve and make limited updates", "76.50"],
      ],
    },
    {
      type: "p",
      text: "Microsoft labels these prices informational: your actual price is shown at checkout or set by your CSP reseller. The US list prices behind them ($80 for Essentials, $110 for Premium and $8 for Team Members) took effect on November 1, 2025, when Microsoft raised Business Central prices for the first time in more than five years.",
    },
    { type: "p", text: "A few licensing rules worth knowing:" },
    {
      type: "ul",
      items: [
        "Essentials and Premium users include Team Members access and the use of Copilot in Business Central.",
        "You can add up to three External Accountant licenses per tenant, for example for your auditor or accounting firm.",
        "A Device license lets several people share one device, such as a warehouse scanner or a shop-floor terminal.",
        "Users with eligible Microsoft 365 plans can read Business Central data in Teams without a Business Central license, as long as at least one person in the organization has one.",
        "Each tenant includes 80 GB of database storage plus 3 GB per Essentials user and 5 GB per Premium user, one production environment and three sandbox environments.",
      ],
    },
    {
      type: "p",
      text: "For the full picture, including implementation and running costs, read [Business Central pricing in Sweden](/insights/business-central-pricing-sweden).",
    },

    { type: "h2", id: "swedish-localization", text: "Swedish localization and language" },
    {
      type: "p",
      text: "Sweden is one of the countries Microsoft localizes itself, and Microsoft provides the Swedish translation of the application. Microsoft lists these Swedish local features:",
    },
    {
      type: "ul",
      items: [
        "SIE export and import through the Audit File Export app (the older built-in SIE feature is marked for deprecation)",
        "Automatic account codes and automatic account posting groups",
        "Setup for EU third-party purchase transactions (VAT)",
        "Balance sheet and income statement reports",
        "Payment-times reporting for large companies",
      ],
    },
    {
      type: "p",
      text: "Since 2023 release wave 1, the Swedish localization runs as apps on top of Microsoft's worldwide base application. Microsoft's Swedish documentation does not cover every local need, for example Swedish bank payment formats or e-filing of the VAT return. List those requirements early and confirm how each one will be handled, whether through an app, an integration or a manual routine.",
    },

    { type: "h2", id: "updates", text: "Updates: two release waves a year" },
    {
      type: "p",
      text: "Business Central online follows a six-month cycle that Microsoft calls a release wave. Major updates arrive every April and October, and minor updates arrive in each of the other ten months. After a major release, administrators have a five-month window to schedule the update before Microsoft enforces it. The current major version is 29.0, the 2026 release wave 2, released in October 2026.",
    },
    {
      type: "p",
      text: "This removes the large upgrade project every few years, but it adds a steady task: testing your extensions and integrations against each release. That work can sit in-house or with a [support](/services/support) or [application management](/services/application-management) provider.",
    },

    { type: "h2", id: "copilot", text: "Copilot and AI agents" },
    {
      type: "p",
      text: "Copilot is built into Business Central and included in Essentials and Premium. In October 2026 Microsoft still labels many Copilot features as preview, including the new Microsoft Copilot chat in version 29, record summaries, analysis assist and bank reconciliation assist. Several features support Swedish, while others, such as autofill and sales line suggestions, are English only.",
    },
    {
      type: "p",
      text: "Two AI agents have been generally available since November 2025. The **Sales Order Agent** turns customer emails into quotes and orders that a person reviews before anything is sent. The **Payables Agent** drafts purchase invoices from vendor PDFs for review; it does not post them. The agents are not covered by the user license: they consume Copilot Credits, which are sold separately, and require an Azure subscription. For environments hosted in Sweden, Microsoft processes Copilot data within the EU Data Boundary.",
    },

    { type: "h2", id: "integrations", text: "Integrations" },
    {
      type: "ul",
      items: [
        "**Microsoft 365:** Outlook, Excel, Word, Teams and OneDrive.",
        "**Power BI:** reports embedded in Business Central pages and built-in Power BI apps (online only).",
        "**Power Platform:** Power Automate (Business Central includes a Power Automate license), Power Apps, Power Pages and Dataverse.",
        "**Microsoft Marketplace:** the app store formerly called AppSource, with apps from Microsoft and other publishers.",
        "**APIs:** a standard REST API (v2.0), enabled by default online.",
        "**Commerce and e-invoicing:** a preinstalled Shopify Connector, and an e-documents framework that supports PEPPOL BIS 3 through connected service providers.",
      ],
    },
    {
      type: "p",
      text: "Some integrations need a separate subscription or license. See [Business Central integrations](/services/integrations) for how we connect it to the rest of your systems.",
    },

    { type: "h2", id: "who-it-suits", text: "Who it suits, and when it may not" },
    { type: "p", text: "Business Central tends to fit companies that:" },
    {
      type: "ul",
      items: [
        "have outgrown an accounting tool and need orders, inventory, warehouse or projects in the same system as finance",
        "run several companies or currencies and want intercompany postings and consolidation",
        "already work in Microsoft 365 and want ERP data close to Outlook, Excel and Teams",
        "run Dynamics NAV today and need a supported way forward",
      ],
    },
    { type: "p", text: "It may not be the right choice when:" },
    {
      type: "ul",
      items: [
        "you only need bookkeeping and invoicing, where a simpler accounting system costs less",
        "your core process is specialized manufacturing that would need heavy customization even on Premium",
        "you want to stay fully on-premises and also expect the newest AI features, which are online only",
        "nobody, internally or externally, will own the system after go-live",
      ],
    },
    {
      type: "p",
      text: "An [ERP advisory and pre-study](/services/erp-advisory) is the straightforward way to find out before you commit.",
    },

    { type: "h2", id: "dynamics-nav", text: "How it relates to Dynamics NAV" },
    {
      type: "p",
      text: "Dynamics NAV, often still called Navision, is the system Microsoft's upgrade path leads from: Microsoft documents upgrades from NAV 2009 SP1 onward to Business Central. NAV is first upgraded to Business Central version 14 on-premises, then to a current version, and from there it can move online. The biggest practical difference is customization. NAV code (C/AL) must be converted to AL extensions before you can move to Business Central online.",
    },
    {
      type: "p",
      text: "Microsoft's extended support for NAV 2016 ended in April 2026. NAV 2017 follows on January 11, 2027 and NAV 2018 on January 11, 2028. Read [Dynamics NAV end of life](/insights/dynamics-nav-end-of-life) and our [guide to upgrading from NAV](/insights/nav-to-business-central-upgrade), or see our [NAV to Business Central migration](/services/nav-to-business-central) service.",
    },

    { type: "h2", id: "get-started", text: "How to get started" },
    {
      type: "ol",
      items: [
        "**Try it.** Microsoft offers a free 30-day trial, which can be extended to up to 90 days in total.",
        "**Describe your processes.** Write down how orders, purchasing, stock, projects and month-end close work today, and where they cause problems.",
        "**Run a pre-study.** Check fit against Business Central, choose between Essentials and Premium, and list the integrations and data to migrate.",
        "**Plan the implementation.** Agree on scope, timeline, data migration and testing before configuration starts. See [Business Central implementation](/services/implementation).",
        "**Arrange licenses and support.** Licenses are bought through a CSP reseller, which is also your first line of support toward Microsoft. Decide early who supports you after go-live.",
      ],
    },
    {
      type: "p",
      text: "Want to talk it through? [Contact us](/contact) and tell us where you are today.",
    },
  ],
  faqs: [
    {
      question: "What is Business Central used for?",
      answer:
        "Business Central runs a company's finance, sales, purchasing, inventory, warehouse and projects in one system, with reporting on top. The Premium edition adds manufacturing and service management.",
    },
    {
      question: "Is Business Central the same as Navision?",
      answer:
        "No, but they are closely related. Microsoft's documented upgrade path takes Dynamics NAV (Navision) to Business Central. The main differences are that customizations are built as AL extensions, the online version is updated twice a year, and the newest features such as Copilot require Business Central online.",
    },
    {
      question: "What is the difference between Business Central Essentials and Premium?",
      answer:
        "Premium includes everything in Essentials plus manufacturing and service management. On October 11, 2026, Microsoft's Swedish list prices were SEK 764.70 for Essentials and SEK 1,051.40 for Premium per user and month, excluding VAT and paid yearly. Users with an Essentials license cannot sign in to a company that uses the Premium experience.",
    },
    {
      question: "How much does Business Central cost in Sweden?",
      answer:
        "Licenses cost SEK 764.70 (Essentials), SEK 1,051.40 (Premium) or SEK 76.50 (Team Members) per user and month at Microsoft's Swedish list prices, excluding VAT and paid yearly (checked 2026-10-11). Implementation, apps and support come on top. See [Business Central pricing in Sweden](/insights/business-central-pricing-sweden).",
    },
    {
      question: "Business Central on-premises vs cloud: which should we choose?",
      answer:
        "Online gives you automatic updates, Copilot and the AI agents, Teams access for Microsoft 365 users and the built-in Power BI apps, none of which are available on-premises. On-premises can suit companies with specific infrastructure needs, but it is supported only while you keep it current, and it is licensed differently.",
    },
    {
      question: "Does Business Central support Swedish requirements?",
      answer:
        "Sweden is localized by Microsoft, with a Swedish user interface and local features such as SIE export and import, automatic account codes and Swedish financial reports. Some needs, such as Swedish bank payment formats or VAT return e-filing, are not covered by Microsoft's Swedish documentation and should be checked during the pre-study.",
    },
    {
      question: "Is Business Central part of Dynamics 365?",
      answer:
        "Yes. Its full name is Microsoft Dynamics 365 Business Central, and it is covered by the Dynamics 365 licensing guide. It is licensed separately from other Dynamics 365 apps, and some integrations, such as the one with Dynamics 365 Sales, require that product's own license.",
    },
  ],
  sources: [
    {
      label: "Microsoft: Dynamics 365 Business Central product page",
      url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central",
    },
    {
      label: "Microsoft (Sweden): Business Central plans and pricing",
      url: "https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing",
    },
    {
      label: "Microsoft: Business Central pricing (US)",
      url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing",
    },
    {
      label: "Microsoft Dynamics 365 Blog: New Business Central pricing effective November 2025",
      url: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2025/05/06/new-microsoft-dynamics-365-business-central-pricing-effective-november-2025/",
    },
    {
      label: "Microsoft: Dynamics 365 Licensing Guide (October 2026)",
      url: "https://go.microsoft.com/fwlink/?LinkId=866544",
    },
    {
      label: "Microsoft: Business Central on-premises Licensing Guide (November 2025, third-party hosted)",
      url: "https://www.axians-infoma.de/wp-content/uploads/2023/04/Microsoft-Dynamics-365-Business-Central-on-premises-Licensing-Guide_November-2025.pdf",
    },
    {
      label: "Microsoft Tech Community: Business Central on-premises availability for existing customers",
      url: "https://techcommunity.microsoft.com/discussions/businessapplicationsforpartners/dynamics-365-business-central-on-premises-availability-for-customers-with-enhanc/4378832",
    },
    {
      label: "Microsoft Learn: Licensing in Business Central",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/deployment/licensing",
    },
    {
      label: "Microsoft Learn: Business Central access with Microsoft 365 licenses",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-access-with-m365-license",
    },
    {
      label: "Microsoft Learn: Enable Premium features",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-experiences",
    },
    {
      label: "Microsoft Learn: Trials and subscriptions",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/trials-subscriptions",
    },
    {
      label: "Microsoft Learn: Country/regional availability and supported languages",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/compliance/apptest-countries-and-translations",
    },
    {
      label: "Microsoft Learn: Sweden local functionality",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/localfunctionality/sweden/sweden-local-functionality",
    },
    {
      label: "Microsoft Learn: Update cycles",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/update-rollout-timeline",
    },
    {
      label: "Microsoft Learn: What's new in update 29.0",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0",
    },
    {
      label: "Microsoft Learn: Software lifecycle policy and on-premises updates",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises",
    },
    {
      label: "Microsoft Learn: Configure Copilot and agent capabilities",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/enable-ai",
    },
    {
      label: "Microsoft Learn: Copilot and agents availability and supported languages",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/copilot-agents-region-language-availability",
    },
    {
      label: "Microsoft Learn: Data movement across geographies for Copilot",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ai-copilot-data-movement",
    },
    {
      label: "Microsoft Learn: Sales Order Agent overview",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent",
    },
    {
      label: "Microsoft Learn: Payables Agent overview",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/payables-agent",
    },
    {
      label: "Microsoft Learn: Integration overview for Business Central",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/integration-overview",
    },
    {
      label: "Microsoft Learn: Introduction to Business Central and Power BI",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-powerbi",
    },
    {
      label: "Microsoft Learn: Set up e-documents",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-setup-edocuments",
    },
    {
      label: "Microsoft Learn: Migrate Dynamics NAV to Business Central online",
      url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-nav",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2016",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2016",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2017",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2017",
    },
    {
      label: "Microsoft Lifecycle: Dynamics NAV 2018",
      url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2018",
    },
  ],
};
