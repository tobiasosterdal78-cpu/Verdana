import type { Article, InsightsIndex } from "@/content/types";
import type { InsightId } from "@/lib/routes";

export const insightsIndex: InsightsIndex = {
  metaTitle: "Business Central Insights & Guides | Vardena",
  metaDescription:
    "Practical guides to Business Central in Sweden: Dynamics NAV end of life, upgrading from NAV, pricing in SEK and how to plan a switch of ERP system.",
  title: "Business Central insights",
  lead: "Practical guides for decision-makers in Sweden: what Business Central costs, when Dynamics NAV support ends, how the upgrade works and how to plan a switch of ERP system. Facts are checked against Microsoft's own sources and dated.",
};

const LIFECYCLE_NAV_2017 = {
  label: "Microsoft Lifecycle: Dynamics NAV 2017",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2017",
};
const LIFECYCLE_NAV_2018 = {
  label: "Microsoft Lifecycle: Dynamics NAV 2018",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2018",
};
const LEARN_MIGRATE_NAV = {
  label: "Microsoft Learn: Migrate Dynamics NAV to Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-nav",
};
const LEARN_MIGRATE_DATA = {
  label: "Microsoft Learn: Migrate on-premises data to Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/migrate-data",
};
const LEARN_LIFECYCLE_ONPREM = {
  label: "Microsoft Learn: Software lifecycle policy and on-premises updates",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises",
};
const LIFECYCLE_BC_MODERN = {
  label: "Microsoft Lifecycle: Business Central on-premises (Modern Policy)",
  url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-365-business-central-onpremises-modern-policy",
};
const PRICING_SV = {
  label: "Microsoft (Sweden): Business Central plans and pricing",
  url: "https://www.microsoft.com/sv-se/dynamics-365/products/business-central/pricing",
};
const PRICING_US = {
  label: "Microsoft: Business Central pricing (US)",
  url: "https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing",
};
const PRICE_BLOG = {
  label: "Microsoft Dynamics 365 Blog: New Business Central pricing effective November 2025",
  url: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2025/05/06/new-microsoft-dynamics-365-business-central-pricing-effective-november-2025/",
};
const LICENSING_GUIDE = {
  label: "Microsoft: Dynamics 365 Licensing Guide (October 2026)",
  url: "https://go.microsoft.com/fwlink/?LinkId=866544",
};
const LEARN_LICENSING = {
  label: "Microsoft Learn: Licensing in Business Central",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/deployment/licensing",
};
const LEARN_TRIALS = {
  label: "Microsoft Learn: Trials and subscriptions",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/trials-subscriptions",
};
const LEARN_RESELLER = {
  label: "Microsoft Learn: Get started as a reseller of Business Central online",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/get-started-online",
};
const LEARN_SWEDEN = {
  label: "Microsoft Learn: Sweden local functionality",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/localfunctionality/sweden/sweden-local-functionality",
};
const LEARN_UPDATE_29 = {
  label: "Microsoft Learn: What's new in update 29.0",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0",
};
const LEARN_UPDATE_CYCLES = {
  label: "Microsoft Learn: Update cycles",
  url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/update-rollout-timeline",
};

export const articles: Record<InsightId, Article> = {
  navToBusinessCentral: {
    id: "navToBusinessCentral",
    category: "Guide",
    metaTitle: "How to Migrate from NAV to Business Central | Vardena",
    metaDescription:
      "How to move from Dynamics NAV (Navision) to Business Central: upgrade vs reimplementation, data migration, customizations, licenses and typical risks.",
    title: "How to move from Dynamics NAV to Business Central",
    lead: "Moving from Dynamics NAV (Navision) to Business Central follows a set of fixed technical steps and one big decision: carry your current system forward or start again with clean data. This guide covers the paths Microsoft documents, what happens to customizations, data and licenses, and how to plan the project.",
    summary:
      "The paths from Dynamics NAV to Business Central, what happens to customizations and data, and how to plan the move without surprises.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "what-changes", text: "NAV and Business Central: what changes" },
      {
        type: "p",
        text: "Business Central is where Microsoft's upgrade path for Dynamics NAV leads. Microsoft treats a NAV database as something you upgrade rather than replace, but three things work differently once you arrive:",
      },
      {
        type: "ul",
        items: [
          "**Customizations** are built as AL extensions on top of the standard application, not as changes to its code.",
          "**Updates** arrive on a fixed schedule online: two major release waves a year, in April and October, and minor updates in the other months.",
          "**Cloud features** such as Copilot, the AI agents, Teams access for Microsoft 365 users and the built-in Power BI apps require Business Central online.",
        ],
      },

      { type: "h2", id: "paths", text: "The three paths" },
      {
        type: "p",
        text: "Microsoft documents two ways to reach Business Central online from NAV: full migration and reimplementation. A third option uses the same technical upgrade but stays on-premises.",
      },
      { type: "h3", text: "1. Full migration" },
      {
        type: "p",
        text: "You bring all data and customizations forward. That requires converting your C/AL customizations to AL extensions and upgrading through to the latest version. You keep your full history in the new system. The cost is the technical work: every customization has to be rebuilt or replaced, and the upgrade passes through several versions.",
      },
      { type: "h3", text: "2. Reimplementation" },
      {
        type: "p",
        text: "You start from a new Business Central and bring across only essential data: master data, balances, setup and possibly a subset of posted history. Microsoft's own documentation is not consistent on how much history this path carries, so agree on it explicitly with whoever does the work, and decide where older history will be kept for reference.",
      },
      {
        type: "p",
        text: "Reimplementation suits companies whose NAV system has drifted far from how they work today, or whose customizations no longer earn their keep.",
      },
      { type: "h3", text: "3. Upgrade and stay on-premises" },
      {
        type: "p",
        text: "The same upgrade can end on Business Central on-premises instead of online. You keep your own infrastructure but give up the online-only features. On-premises versions are supported only while you keep them current: each recent version has about 18 months of support, and version 29, released in October 2026, is supported until April 6, 2028.",
      },

      { type: "h2", id: "upgrade-routes", text: "Which route applies to your NAV version" },
      {
        type: "p",
        text: "Both online paths start by upgrading NAV to Business Central version 14. Microsoft's documented routes:",
      },
      {
        type: "table",
        caption: "Upgrade routes from Microsoft Learn. Checked 2026-10-11.",
        head: ["Your NAV version", "Route to Business Central online"],
        rows: [
          [
            "NAV 2015, 2016, 2017 or 2018",
            "Business Central 14 on-premises → Business Central on-premises 25 or later → online",
          ],
          ["NAV 2013 or 2013 R2", "NAV 2018 → Business Central 14 → 25 or later → online"],
          [
            "NAV 2009 SP1 or 2009 R2",
            "NAV 2013 or 2015 → NAV 2018 → Business Central 14 → 25 or later → online",
          ],
        ],
      },
      {
        type: "p",
        text: "There is no direct path from NAV to Business Central online. The last step uses Microsoft's cloud migration tool, which replicates data through Azure Data Factory, first in full and then as incremental updates. The source database must run on SQL Server 2016 or later with compatibility level 130 or higher.",
      },

      { type: "h2", id: "customizations", text: "What happens to customizations" },
      {
        type: "p",
        text: "Before you can move to Business Central online, all C/AL customizations must be converted to AL extensions. Data in tables you have customized is not carried forward unless the customization is handled by an extension. Each customization ends up in one of four groups:",
      },
      {
        type: "ul",
        items: [
          "**Now standard:** Business Central covers it, so you drop it.",
          "**Available as an app:** an app on Microsoft Marketplace does the job.",
          "**Still needed:** you rebuild it as an AL extension.",
          "**No longer used:** you retire it.",
        ],
      },
      {
        type: "p",
        text: "This review is the most important piece of analysis in the project, because it sets both cost and risk. The Swedish localization also changed: since 2023 release wave 1 it runs as apps on top of Microsoft's worldwide base application, so older Sweden-specific adjustments in NAV may need an extra look.",
      },
      {
        type: "p",
        text: "If you stay on-premises, customizations that are not compatible with Microsoft's universal code model trigger an extra per-user license fee for customers moving from NAV.",
      },

      { type: "h2", id: "data", text: "Data" },
      {
        type: "p",
        text: "With full migration your data comes along, history included. With reimplementation you choose what to bring. Either way:",
      },
      {
        type: "ul",
        items: [
          "clean up customers, vendors, items and the chart of accounts before migrating, not after",
          "decide how much history you need in the new system and how you will reach the rest",
          "run at least one dry run in a sandbox, as Microsoft recommends",
          "reconcile balances between the old and new system before go-live",
        ],
      },

      { type: "h2", id: "licenses", text: "Licenses" },
      {
        type: "p",
        text: "Moving online means subscribing to Business Central online licenses for every user, through a CSP reseller. On October 11, 2026, Microsoft's Swedish list prices were SEK 764.70 for Essentials, SEK 1,051.40 for Premium and SEK 76.50 for Team Members, per user and month, excluding VAT and paid yearly. See [Business Central pricing in Sweden](/insights/business-central-pricing-sweden).",
      },
      {
        type: "p",
        text: "For on-premises customers with an active service plan, Microsoft has said that its license transition policies, for example from a NAV perpetual license to a Business Central on-premises perpetual license, are unchanged. Check what applies to your agreement before choosing a path.",
      },

      { type: "h2", id: "planning", text: "Planning steps" },
      {
        type: "ol",
        items: [
          "**Take stock.** Record your NAV version, database size, customizations, integrations, reports and users.",
          "**Check your deadline.** NAV 2017 extended support ends January 11, 2027 and NAV 2018 on January 11, 2028. See [Dynamics NAV end of life](/insights/dynamics-nav-end-of-life).",
          "**Choose the path.** Full migration, reimplementation or on-premises, based on the customization review and how much history you need.",
          "**Choose the target.** Online or on-premises, Essentials or Premium.",
          "**Plan integrations.** List every connection to banks, webshops, EDI and other systems, and decide how each will work in Business Central.",
          "**Rehearse.** Do dry runs in a sandbox, test real scenarios with users and write a cutover plan with a fallback.",
          "**Train and go live.** Train users on the new interface and processes, and plan extra support for the first weeks.",
        ],
      },

      { type: "h2", id: "risks", text: "Typical risks" },
      {
        type: "ul",
        items: [
          "**Underestimated customizations.** Older NAV systems often contain more custom code than anyone remembers.",
          "**Integrations that break.** In version 29, Microsoft made disabling SOAP web services on UI pages mandatory, so integrations built on them must be checked.",
          "**Poor data quality.** Migrating bad master data moves the problem into the new system.",
          "**Too little testing.** Without dry runs, problems show up on go-live day.",
          "**Time pressure.** Starting late against a support deadline leaves no room to handle any of the above.",
        ],
      },
      {
        type: "p",
        text: "See how we approach [NAV to Business Central migration](/services/nav-to-business-central), or [contact us](/contact) to talk about your system.",
      },
    ],
    faqs: [
      {
        question: "How do we migrate from NAV to Business Central?",
        answer:
          "Upgrade NAV to Business Central version 14 on-premises, then to version 25 or later, then use Microsoft's cloud migration tool to move online. Older versions take extra steps through NAV 2018. Customizations must be converted to AL extensions, or you choose a reimplementation with only essential data.",
      },
      {
        question: "Can we upgrade NAV to Business Central on-premises?",
        answer:
          "Yes. The technical upgrade can end on Business Central on-premises. You then need to keep the installation current to stay supported, and features such as Copilot, the AI agents and Teams access for Microsoft 365 users are not available.",
      },
      {
        question: "Is Navision the same as Business Central?",
        answer:
          "No. Microsoft's upgrade path takes Dynamics NAV (Navision) to Business Central, but customizations work differently (AL extensions), the online version is updated twice a year, and the newest features require Business Central online.",
      },
      {
        question: "Do we need to rebuild all our customizations?",
        answer:
          "Not all of them. Some are covered by standard Business Central, some by Marketplace apps, and some are no longer used. Only what is still needed and not covered elsewhere has to be rebuilt as AL extensions.",
      },
      {
        question: "How long does a NAV upgrade take?",
        answer:
          "It depends on your NAV version, the amount of custom code, data volume and quality, and the number of integrations. A pre-study that reviews these gives a realistic timeline, which a generic estimate cannot.",
      },
    ],
    sources: [
      LEARN_MIGRATE_NAV,
      LEARN_MIGRATE_DATA,
      LEARN_LIFECYCLE_ONPREM,
      LIFECYCLE_BC_MODERN,
      LEARN_UPDATE_29,
      LEARN_UPDATE_CYCLES,
      LEARN_SWEDEN,
      PRICING_SV,
      LEARN_LICENSING,
      {
        label: "Microsoft: Business Central on-premises Licensing Guide (November 2025, third-party hosted)",
        url: "https://www.axians-infoma.de/wp-content/uploads/2023/04/Microsoft-Dynamics-365-Business-Central-on-premises-Licensing-Guide_November-2025.pdf",
      },
      {
        label: "Microsoft Tech Community: Business Central on-premises availability for existing customers",
        url: "https://techcommunity.microsoft.com/discussions/businessapplicationsforpartners/dynamics-365-business-central-on-premises-availability-for-customers-with-enhanc/4378832",
      },
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
    ],
  },

  navEndOfLife: {
    id: "navEndOfLife",
    category: "Lifecycle",
    metaTitle: "Dynamics NAV End of Life: Support Dates & Options | Vardena",
    metaDescription:
      "NAV 2017 extended support ends January 11, 2027, and NAV 2018 on January 11, 2028. What end of support means and how to move to Business Central.",
    title: "Dynamics NAV end of life: support dates and what to do next",
    lead: "Microsoft's support for Dynamics NAV is ending version by version. NAV 2016 left extended support in April 2026, NAV 2017 follows in January 2027 and NAV 2018 in January 2028. Here are the exact dates, what end of support means in practice, and the options you have.",
    summary:
      "Support end dates for every Dynamics NAV version, what end of support means in practice, and your options from here.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 6,
    body: [
      { type: "h2", id: "dates", text: "Support end dates by NAV version" },
      {
        type: "p",
        text: "Dynamics NAV follows Microsoft's Fixed Lifecycle Policy, which typically means five years of mainstream support followed by five years of extended support. When extended support ends, the version is out of support. The dates below come from Microsoft's lifecycle pages.",
      },
      {
        type: "table",
        caption: "Last day of support per Microsoft's lifecycle pages. Checked 2026-10-11.",
        head: ["Version", "Mainstream support ended", "Extended support ends"],
        rows: [
          ["NAV 2009 and 2009 R2", "January 13, 2015", "January 14, 2020 (ended)"],
          ["NAV 2013 and 2013 R2", "January 9, 2018", "January 10, 2023 (ended)"],
          ["NAV 2015", "January 14, 2020", "January 14, 2025 (ended)"],
          ["NAV 2016", "April 13, 2021", "April 14, 2026 (ended)"],
          ["NAV 2017", "January 11, 2022", "January 11, 2027"],
          ["NAV 2018", "January 10, 2023", "January 11, 2028"],
        ],
      },
      {
        type: "note",
        title: "How to read the dates",
        text: "Microsoft lists each end as 06:59:59 on the following day, for example 1/12/2027 06:59:59 for NAV 2017. That timestamp marks the end of the date shown here in US Pacific time, which is how the dates are usually quoted. Check the lifecycle page for your version before you plan around a specific day.",
      },
      {
        type: "p",
        text: "As of October 2026, every version up to and including NAV 2016 is out of support. NAV 2017 has about three months of extended support left and NAV 2018 about fifteen.",
      },

      { type: "h2", id: "what-it-means", text: "What end of support means in practice" },
      {
        type: "p",
        text: "When a product reaches end of support, Microsoft stops providing security updates, non-security updates and assisted support for it. The software does not stop working on that date. Your NAV system will still start, post and print the next morning. What changes is that you are on your own:",
      },
      {
        type: "ul",
        items: [
          "**No security fixes.** Vulnerabilities found after the end date stay open.",
          "**No other fixes.** Bugs and compatibility problems are not corrected by Microsoft.",
          "**No Microsoft support cases.** Help depends entirely on your partner or your own team.",
          "**A shrinking platform.** Operating systems, SQL Server versions and the software around NAV keep moving, and keeping everything compatible gets harder.",
        ],
      },

      { type: "h2", id: "risks", text: "The risks of staying" },
      {
        type: "ul",
        items: [
          "**Security exposure.** Your ERP system holds customer, vendor and bank data. Running it without patches is a risk that auditors and insurers may ask about.",
          "**Key-person dependency.** Knowledge of C/AL and of your own customizations often sits with a few people.",
          "**Integration drift.** Banks, webshops, e-invoicing services and other systems change their formats and interfaces, and old NAV connections get harder to maintain.",
          "**A longer jump later.** The older the version, the more steps the upgrade takes. From NAV 2009, Microsoft's route passes through NAV 2013 or 2015, NAV 2018 and Business Central 14 before it reaches a current version.",
          "**Crowded deadlines.** Waiting until the last months means competing for consultant time with every other company in the same position.",
        ],
      },

      { type: "h2", id: "options", text: "Your options" },
      { type: "h3", text: "Upgrade to Business Central online" },
      {
        type: "p",
        text: "The route goes through Business Central 14 and version 25 or later on-premises before moving online with Microsoft's cloud migration tool. Customizations are converted to AL extensions. You then get updates twice a year and access to Copilot and the AI agents. Our [guide to upgrading from NAV](/insights/nav-to-business-central-upgrade) covers the steps.",
      },
      {
        type: "p",
        text: "Online, version numbers stop being something you manage. Microsoft releases a major update every April and October, and you choose when to apply it within a five-month window. Support no longer runs out on a fixed date; the task instead is to test your extensions and integrations against each release.",
      },
      { type: "h3", text: "Upgrade to Business Central on-premises" },
      {
        type: "p",
        text: "You keep your own infrastructure. Business Central on-premises follows Microsoft's Modern Lifecycle Policy, so you are supported only while you keep it current. Each recent major version is supported for about 18 months: version 26 support ends on October 13, 2026, and version 29 runs until April 6, 2028. That is a very different rhythm from the ten years NAV versions typically had.",
      },
      { type: "h3", text: "Reimplement Business Central" },
      {
        type: "p",
        text: "Start from a fresh Business Central with master data, balances and setup, and leave old customizations behind. This suits heavily customized systems or companies whose processes have changed a lot.",
      },
      { type: "h3", text: "Switch to a different ERP system" },
      {
        type: "p",
        text: "End of support is a natural point to evaluate the market. Our article on [switching ERP systems](/insights/switching-erp-systems) explains how to go about it.",
      },
      { type: "h3", text: "Stay on NAV for now" },
      {
        type: "p",
        text: "This can work for a short period if you have a plan: a decided exit date, a security review of the environment around NAV, and someone who can support the system in the meantime. Treat it as borrowed time, not a strategy.",
      },

      { type: "h2", id: "next-steps", text: "What to do now" },
      {
        type: "ol",
        items: [
          "Confirm which NAV version you run and find its end date in the table above.",
          "List your customizations, integrations, reports and data volumes.",
          "Decide on path and target: online or on-premises, upgrade or reimplementation.",
          "Plan backward from your deadline, leaving time for dry runs, testing and training.",
          "Book the people you need early, internally and externally.",
        ],
      },
      {
        type: "p",
        text: "Timing matters more than it seems. NAV 2017 and NAV 2018 both reach end of support in mid-January, right after year-end for companies with a calendar fiscal year. If you want to go live at the start of a fiscal year, that start date has to come before support ends, which leaves very little room for delays.",
      },
      {
        type: "p",
        text: "We help companies plan and carry out the move. See [NAV to Business Central migration](/services/nav-to-business-central) or [contact us](/contact).",
      },
    ],
    faqs: [
      {
        question: "Is Dynamics NAV end of life?",
        answer:
          "Partly. As of October 2026, NAV 2016 and all earlier versions are out of Microsoft support. NAV 2017 is supported until January 11, 2027 and NAV 2018 until January 11, 2028.",
      },
      {
        question: "When does NAV 2018 support end?",
        answer:
          "Mainstream support for NAV 2018 ended on January 10, 2023. Extended support ends on January 11, 2028, according to Microsoft's lifecycle page.",
      },
      {
        question: "Can we keep running NAV after support ends?",
        answer:
          "Technically yes, since the software keeps working. But Microsoft no longer provides security updates, other updates or support cases, so the risk grows over time. It is a short-term option at best.",
      },
      {
        question: "What about NAV 2009 and NAV 2013?",
        answer:
          "Both are out of support: NAV 2009 and 2009 R2 since January 14, 2020, and NAV 2013 and 2013 R2 since January 10, 2023. Upgrading from them to Business Central takes extra steps through NAV 2018.",
      },
      {
        question: "Is Business Central on-premises supported as long as NAV was?",
        answer:
          "No. Business Central on-premises follows the Modern Lifecycle Policy. Each recent version is supported for about 18 months, and you stay supported only by keeping your installation current.",
      },
    ],
    sources: [
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2009",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2009",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2009 R2",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2009-r2",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2013",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2013",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2013 R2",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2013-r2",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2015",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2015",
      },
      {
        label: "Microsoft Lifecycle: Dynamics NAV 2016",
        url: "https://learn.microsoft.com/en-us/lifecycle/products/dynamics-nav-2016",
      },
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
      {
        label: "Microsoft Lifecycle: Product end of support overview",
        url: "https://learn.microsoft.com/en-us/lifecycle/overview/product-end-of-support-overview",
      },
      LIFECYCLE_BC_MODERN,
      LEARN_LIFECYCLE_ONPREM,
      LEARN_MIGRATE_NAV,
      LEARN_UPDATE_CYCLES,
    ],
  },

  pricing: {
    id: "pricing",
    category: "Pricing",
    metaTitle: "Business Central Pricing in Sweden (2026) | Vardena",
    metaDescription:
      "Microsoft list prices in Sweden (Oct 2026): Essentials SEK 764.70 and Premium SEK 1,051.40 per user/month ex. VAT, plus what drives your total cost.",
    title: "Business Central pricing in Sweden: licenses and total cost",
    lead: "Business Central's license prices in Sweden are public. The total cost of owning it is not, because it depends on your scope. This article gives Microsoft's current Swedish list prices, explains what else you pay for, and shows how to build a realistic budget.",
    summary:
      "Microsoft's Swedish list prices for Essentials, Premium and Team Members, what the license includes, and what drives implementation and running costs.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "list-prices", text: "License list prices in Sweden" },
      {
        type: "p",
        text: "Microsoft's Swedish pricing page showed the following list prices on October 11, 2026:",
      },
      {
        type: "table",
        caption:
          "SEK prices as displayed on microsoft.com/sv-se, excluding VAT, paid yearly. USD prices from microsoft.com/en-us. Checked 2026-10-11.",
        head: ["License", "SEK per user/month", "USD per user/month", "What it covers"],
        rows: [
          [
            "Essentials",
            "764.70",
            "80",
            "Finance, sales, purchasing, inventory, warehouse and projects; Copilot included",
          ],
          ["Premium", "1,051.40", "110", "Everything in Essentials plus manufacturing and service management"],
          [
            "Team Members",
            "76.50",
            "8",
            "Read data, approve workflows, update existing records and create quotes",
          ],
        ],
      },
      { type: "p", text: "Three things to know about these numbers:" },
      {
        type: "ul",
        items: [
          "**They are list prices.** Microsoft labels them informational. Your actual price is shown at checkout or set by the CSP reseller you buy from, since Business Central licenses are sold only through Microsoft's Cloud Solution Provider program.",
          "**They exclude VAT and are paid yearly.** Microsoft's Business Central pages show only annual payment. Whether a monthly term is available, and at what premium, is a question for your reseller.",
          "**They rose recently.** On November 1, 2025, Microsoft raised Business Central prices for the first time in more than five years: Essentials went from $70 to $80, Premium from $100 to $110 and Device from $40 to $45 per month. Existing subscriptions moved to the new prices at their first renewal after that date.",
        ],
      },

      { type: "h2", id: "license-mix", text: "Choosing the right license mix" },
      {
        type: "p",
        text: "Business Central is licensed per named user, and you rarely need the same license for everyone:",
      },
      {
        type: "ul",
        items: [
          "**Essentials** for people who post, order, invoice, manage stock or run projects.",
          "**Premium** only if you use manufacturing or service management. Users with an Essentials license cannot sign in to a company that uses the Premium experience. Online, you can run Essentials and Premium in separate environments on the same tenant.",
          "**Team Members** for people who mainly look up data, approve purchases or report time. Its write rights are narrow, so it is not a cheap replacement for a full user.",
          "**Device** for shared devices such as warehouse scanners: $45 per device and month in the US. Microsoft's Swedish page shows no SEK price.",
          "**External Accountant**, up to three per tenant, for your auditor or accounting firm. Microsoft's pricing pages show no price.",
          "**Microsoft 365 users** can read Business Central data in Teams without a Business Central license, as long as at least one person in the organization has one.",
        ],
      },
      {
        type: "note",
        title: "Example at list price",
        text: "A company with 8 Essentials users and 10 Team Members: 8 × SEK 764.70 + 10 × SEK 76.50 = SEK 6,882.60 per month, or SEK 82,591.20 per year, excluding VAT. Your reseller's price may differ.",
      },

      { type: "h2", id: "included", text: "What the license includes" },
      {
        type: "ul",
        items: [
          "Copilot in Business Central, plus 30 minutes per tenant of Azure AI access for other AI features",
          "80 GB of database storage per tenant, plus 3 GB per Essentials user and 5 GB per Premium user",
          "One production environment and three sandbox environments",
          "A Power Automate license for flows that use Business Central",
          "Multiple companies, with a limit per environment",
        ],
      },

      { type: "h2", id: "other-microsoft-costs", text: "Other Microsoft costs" },
      {
        type: "ul",
        items: [
          "**AI agents.** The Sales Order Agent and Payables Agent consume Copilot Credits, which are sold separately, and require an Azure subscription. Microsoft charges per action, for example 50 credits to process a vendor invoice plus 5 per invoice line. In Microsoft's own example, 100 three-line invoices use 6,500 credits a month. The pricing pages show no price per credit.",
          "**Extra storage and environments.** Database capacity add-ons come in 1 GB and 100 GB increments. An Additional Environment add-on gives one production and three sandbox environments with 4 GB of capacity. Microsoft's pricing pages show no prices for these. Exceeding your storage quota does not stop transactions, but it blocks creating or copying environments.",
          "**Other licenses** for connected products, for example Dynamics 365 Sales if you use that integration.",
        ],
      },

      { type: "h2", id: "implementation-cost", text: "What drives implementation cost" },
      {
        type: "p",
        text: "Implementation is usually the largest single cost, and it varies far more than licenses do. Generic price ranges hide the factors that actually decide it:",
      },
      {
        type: "ul",
        items: [
          "**Scope:** the number of processes, companies, countries and currencies.",
          "**Edition:** manufacturing and service management need more setup than finance and distribution.",
          "**Data migration:** how many source systems, how much history and how clean the data is.",
          "**Integrations:** webshop, bank, EDI, e-invoicing, CRM, payroll and others, and whether standard connectors exist.",
          "**Customizations:** each AL extension has to be designed, built, tested and kept working through every release wave.",
          "**Starting point:** a [NAV upgrade](/insights/nav-to-business-central-upgrade) is priced differently from a new implementation, depending largely on the amount of custom code.",
          "**Your own time:** key users in workshops, testing and training. This cost is real even though it never shows up on an invoice.",
          "**Training and change management** for everyone who will use the system.",
        ],
      },

      { type: "h2", id: "ongoing-costs", text: "Ongoing costs after go-live" },
      {
        type: "ul",
        items: [
          "**Licenses**, renewed yearly.",
          "**Support.** Microsoft's Professional Direct support does not cover Business Central, and Microsoft refers Business Central customers to their reselling partner for technical help. Decide who handles user questions, fixes and incidents. See [Business Central support](/services/support).",
          "**Release waves.** Two major updates a year mean recurring testing of extensions and integrations. See [application management](/services/application-management).",
          "**Marketplace apps**, priced by each publisher.",
          "**Copilot Credits**, if you use the AI agents.",
          "**Improvements:** new reports, automations and process changes as the business evolves.",
        ],
      },

      { type: "h2", id: "budget", text: "How to budget" },
      {
        type: "ol",
        items: [
          "**Count users by role** and match each role to a license.",
          "**Calculate licenses** at list price, then ask your reseller for the actual price and payment terms.",
          "**List integrations, data sources and customizations.** These shape the implementation estimate.",
          "**Get a scoped estimate** based on a pre-study rather than a ballpark figure from a first meeting. See [ERP advisory and pre-study](/services/erp-advisory).",
          "**Add running costs** for support, release-wave testing, apps and AI usage over at least three years.",
          "**Keep a contingency** for scope that appears during the project.",
        ],
      },
      {
        type: "p",
        text: "For an overview of the product itself, see [Business Central explained](/business-central). To discuss your scope and what an [implementation](/services/implementation) would involve, [contact us](/contact).",
      },
    ],
    faqs: [
      {
        question: "How much does Business Central cost in Sweden?",
        answer:
          "Microsoft's Swedish list prices on October 11, 2026 were SEK 764.70 per user and month for Essentials, SEK 1,051.40 for Premium and SEK 76.50 for Team Members, excluding VAT and paid yearly. Implementation, apps, support and any AI agent usage come on top.",
      },
      {
        question: "Essentials vs Premium: what's the difference?",
        answer:
          "Premium includes everything in Essentials plus manufacturing and service management. If you neither produce goods nor run a service operation, Essentials covers finance, sales, purchasing, inventory, warehouse and projects.",
      },
      {
        question: "What can a Team Member license do?",
        answer:
          "A Team Members user can read data, update existing records, approve or reject workflow tasks, create and edit sales and purchase quotes, and edit their own time sheets. It cannot replace a full user for posting and order processing.",
      },
      {
        question: "Why did Business Central prices increase?",
        answer:
          "Microsoft announced in May 2025 the first Business Central price increase in more than five years, effective November 1, 2025. Storage per license increased at the same time, from 2 to 3 GB for Essentials and from 3 to 5 GB for Premium.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes. Microsoft offers a free 30-day trial, which can be extended to up to 90 days of trial use in total.",
      },
    ],
    sources: [
      PRICING_SV,
      PRICING_US,
      PRICE_BLOG,
      LICENSING_GUIDE,
      LEARN_LICENSING,
      {
        label: "Microsoft Learn: Business Central access with Microsoft 365 licenses",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/admin-access-with-m365-license",
      },
      {
        label: "Microsoft Learn: Enable Premium features",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/ui-experiences",
      },
      {
        label: "Microsoft Learn: Managing capacity",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-capacity",
      },
      {
        label: "Microsoft Learn: Manage consumption-based billing",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing",
      },
      {
        label: "Microsoft Learn: Use Power Automate flows in Business Central",
        url: "https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-financials-data-source-flow",
      },
      LEARN_TRIALS,
      LEARN_UPDATE_CYCLES,
    ],
  },

  switchingErp: {
    id: "switchingErp",
    category: "Guide",
    metaTitle: "Switching ERP Systems: A Guide to ERP Selection | Vardena",
    metaDescription:
      "Signs you have outgrown your ERP or accounting system, how to evaluate a replacement, run a pre-study, choose a partner and plan the data migration.",
    title: "Switching ERP systems: the signs, the evaluation and the plan",
    lead: "Switching ERP systems is something most companies do rarely, so few people on the team have done it before. This guide covers the signs that it is time, how to set requirements and evaluate options, what a pre-study should produce, how to choose a partner, and what drives the timeline.",
    summary:
      "How to tell that you have outgrown your system, and how to evaluate, choose and plan a switch of ERP system without the usual pitfalls.",
    published: "2026-10-11",
    updated: "2026-10-11",
    readingMinutes: 7,
    body: [
      { type: "h2", id: "signs", text: "Signs you have outgrown your current system" },
      {
        type: "p",
        text: "Accounting systems such as Fortnox or Visma serve many companies well. Growth changes the requirements, and the signs usually appear in daily work long before anyone calls it an ERP problem:",
      },
      {
        type: "ul",
        items: [
          "**Spreadsheets fill the gaps.** Stock, orders, project margins or forecasts live in Excel because the system cannot hold them.",
          "**Inventory lives elsewhere.** Stock levels, purchasing and warehouse work run in a separate tool, with manual transfers to accounting.",
          "**Month-end takes too long.** Reconciliations and reports depend on exports and manual adjustments.",
          "**More companies, currencies or countries.** Intercompany flows and consolidation are done by hand.",
          "**Integrations multiply.** Every new webshop, bank or logistics partner adds another fragile connection.",
          "**Reporting is slow.** Management waits days for figures that should be on screen.",
          "**Your current system is ending.** For example, Dynamics NAV versions are leaving Microsoft support. See [Dynamics NAV end of life](/insights/dynamics-nav-end-of-life).",
        ],
      },
      {
        type: "p",
        text: "One sign on its own is rarely enough to justify a switch. Several at once usually are.",
      },

      { type: "h2", id: "timing", text: "When to switch, and when not to" },
      {
        type: "p",
        text: "A good time to switch is when the business drives the change: growth, new business models, new companies, or a deadline you can plan around. A bad time is during peak season, a reorganization or year-end close.",
      },
      {
        type: "p",
        text: "Be honest about the cause, too. If the main frustration is a system that was never set up properly, fixing the setup may cost less than replacing it.",
      },

      { type: "h2", id: "requirements", text: "Start with requirements, not vendors" },
      { type: "p", text: "Describe how you work before you look at systems:" },
      {
        type: "ul",
        items: [
          "**Processes:** order to cash, procure to pay, inventory and warehouse, production or projects, and record to report.",
          "**Volumes:** users, companies, transactions, items and locations.",
          "**Integrations:** every system that must exchange data with the ERP, and how.",
          "**Swedish requirements:** SIE files for your accountant or auditor, VAT reporting, bank payment formats and e-invoicing (Peppol), where they apply.",
          "**Reporting:** what management and the board need, and how often.",
          "**Constraints:** budget, timeline, cloud or on-premises, and your in-house IT capacity.",
        ],
      },
      {
        type: "p",
        text: "Then prioritize: must-have, should-have, nice-to-have. A long list of equally weighted requirements makes every system look the same.",
      },

      { type: "h2", id: "pre-study", text: "Run a pre-study" },
      { type: "p", text: "A pre-study turns requirements into a decision. It should give you:" },
      {
        type: "ul",
        items: [
          "a description of today's processes and the problems to solve",
          "a fit-gap analysis against the systems you are considering",
          "an outline of integrations and data migration",
          "a budget range for licenses, implementation and running costs",
          "a recommended path with a timeline and the main risks",
        ],
      },
      {
        type: "p",
        text: "We run this work as an [ERP advisory and pre-study](/services/erp-advisory). It is also a fair test of whether a consultancy listens before it sells.",
      },

      { type: "h2", id: "evaluate", text: "How to evaluate systems" },
      {
        type: "ul",
        items: [
          "**Scripted demos.** Give vendors your own scenarios and sample data instead of accepting a free-form demo.",
          "**Hands-on trials.** Let key users try the system. Business Central, for example, has a free 30-day trial that can be extended to up to 90 days.",
          "**Total cost over several years**, not just the license price. See [Business Central pricing in Sweden](/insights/business-central-pricing-sweden) for how the costs add up.",
          "**Ecosystem:** apps, integrations and access to consultants who know the product.",
          "**Direction:** where the vendor is taking the product, including cloud, AI and update cadence.",
          "**References** from companies of similar size and industry.",
        ],
      },
      {
        type: "p",
        text: "If Business Central is on your list, our [Business Central overview](/business-central) explains editions, licensing and Swedish localization.",
      },

      { type: "h2", id: "partner", text: "Choosing a partner or consultancy" },
      {
        type: "p",
        text: "The people who implement the system matter as much as the system. Ask every candidate:",
      },
      {
        type: "ul",
        items: [
          "Who will actually work on our project, and what have they delivered before?",
          "What is your method from pre-study to go-live, and what do you need from us?",
          "How do you handle data migration and testing?",
          "Who supports us after go-live, and on what terms?",
          "How do you keep customizations few and safe through future updates?",
        ],
      },
      {
        type: "p",
        text: "For Business Central, licenses are sold only through Microsoft's Cloud Solution Provider (CSP) program, and the reseller is your first line of support toward Microsoft. That firm may or may not be the one that implements your system, so ask how licenses, implementation and support are split before you sign.",
      },

      { type: "h2", id: "data-migration", text: "Data migration" },
      { type: "p", text: "Decide early what moves to the new system:" },
      {
        type: "ul",
        items: [
          "**Master data:** customers, vendors, items and the chart of accounts. Clean it before migration.",
          "**Opening balances and open items:** unpaid invoices, open orders and stock on hand.",
          "**History:** how many years of transactions you need in the new system, and where the rest will be kept. Check what your auditor needs access to.",
        ],
      },
      {
        type: "p",
        text: "For Business Central, Microsoft provides migration tools for several sources, including Dynamics NAV, Dynamics GP, Dynamics SL and other SQL databases through custom migrations. Data from other systems is typically brought in through configuration packages or import routines. Whatever the source, plan at least one full test migration before go-live.",
      },

      { type: "h2", id: "timeline", text: "What drives the timeline" },
      { type: "p", text: "There is no standard duration. The timeline depends on:" },
      {
        type: "ul",
        items: [
          "the number of processes, companies and countries in scope",
          "the number and complexity of integrations",
          "the amount and quality of data to migrate",
          "how much you customize versus use standard functionality",
          "how available your key users are for workshops, testing and training",
          "how quickly decisions are made on your side",
          "fixed dates such as fiscal year-end or end of support for the old system",
        ],
      },
      {
        type: "p",
        text: "Going live at the start of a fiscal year or period simplifies opening balances and reporting, so many projects plan backward from such a date.",
      },
      {
        type: "p",
        text: "Thinking about a switch? [Contact us](/contact) for a first conversation about where you are and what a pre-study would cover.",
      },
    ],
    faqs: [
      {
        question: "What should we think about when switching ERP systems?",
        answer:
          "Start with your processes and requirements, not with vendors. Run a pre-study, evaluate systems with your own scenarios, look at total cost over several years, plan data migration early and make sure key users have time for the project.",
      },
      {
        question: "When is it time to switch ERP systems?",
        answer:
          "When several signs appear together: spreadsheets filling gaps, inventory in a separate tool, slow month-end close, manual intercompany work or a system leaving support. The best timing is driven by the business, outside peak season and year-end.",
      },
      {
        question: "How long does it take to switch ERP systems?",
        answer:
          "It depends on scope, integrations, data volume and quality, customizations and how much time your team can give. A pre-study produces a timeline based on your situation rather than a generic estimate.",
      },
      {
        question: "Which ERP system is best?",
        answer:
          "There is no best system in general, only the best fit for your processes, size, budget and plans. That is why requirements and a pre-study come before choosing a vendor.",
      },
      {
        question: "Can we move from Fortnox or Visma to Business Central?",
        answer:
          "Yes. Business Central is one of the systems companies consider when they outgrow an accounting tool. Master data, opening balances and open items are typically migrated, and history is kept accessible in the old system or an archive.",
      },
    ],
    sources: [
      LEARN_TRIALS,
      LEARN_MIGRATE_DATA,
      LEARN_LICENSING,
      LEARN_RESELLER,
      LEARN_SWEDEN,
      LIFECYCLE_NAV_2017,
      LIFECYCLE_NAV_2018,
    ],
  },
};
