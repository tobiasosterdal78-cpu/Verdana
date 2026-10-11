import type { Service } from "@/content/types";
import type { ServiceId } from "@/lib/routes";

export const services: Record<ServiceId, Service> = {
  advisory: {
    id: "advisory",
    phase: "implement",
    icon: "advisory",
    name: "ERP advisory",
    blurb: "Make the right choice before you invest in a new ERP system.",
    menu: "Pre-study and the right system",
    metaTitle: "ERP Readiness Assessment & Advisory | Verdana",
    metaDescription:
      "A structured assessment before you commit to Business Central: requirements, fit-gap analysis, budget range and a recommended roadmap with next steps.",
    serviceType: "ERP advisory and readiness assessment",
    title: "ERP readiness assessment and advisory",
    lead: "Before you invest in a new ERP system, you need to know what it should solve, what it will cost and how you will get there. We help you decide on facts rather than gut feeling, including whether Microsoft Dynamics 365 Business Central is the right fit.",
    fit: [
      "You are considering a new ERP system but are not sure where to start.",
      "You have outgrown Fortnox, Visma or another accounting system.",
      "You run Dynamics NAV and need a plan for what comes next.",
      "You want to know whether Business Central fits the way your business works.",
    ],
    included: [
      "A map of today's processes, systems and manual steps",
      "Requirements with clear priorities",
      "A fit-gap assessment of how well Business Central covers your needs",
      "An overview of integrations and the data that needs to move",
      "A budget range for licenses, implementation and ongoing operation",
      "A recommended way forward with a timeline and next steps",
    ],
    outcomes: [
      {
        title: "A business case you can stand behind",
        text: "Management and the board can see what needs solving, what it costs and where the risks are.",
      },
      {
        title: "A realistic timeline and budget",
        text: "Based on your processes and your data, not on a generic template.",
      },
      {
        title: "Fewer surprises later",
        text: "Requirements, integrations and data migration are known before the project starts.",
      },
    ],
    steps: [
      { title: "Kickoff", text: "We agree on goals, timeframe and who needs to be involved." },
      {
        title: "Workshops",
        text: "One process at a time, from orders and purchasing to finance and reporting.",
      },
      {
        title: "Analysis",
        text: "We compare your needs with Business Central and outline the solution, integrations and migration.",
      },
      {
        title: "Recommendation",
        text: "You get a written report and a walkthrough with proposed next steps.",
      },
    ],
    faqs: [
      {
        question: "What does an ERP assessment cost?",
        answer:
          "It depends on how many processes, companies and systems are in scope. After a first conversation you get a proposal with a clear scope and price before any work starts.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "For a small or midsize company it often takes a few weeks. The main factors are the number of processes and how quickly we can hold workshops with the right people.",
      },
      {
        question: "Do we have to choose Business Central afterwards?",
        answer:
          "No. The assessment is meant to give you an honest basis for the decision. If Business Central is not right for you, we will tell you and explain why.",
      },
      {
        question: "What do we need to prepare?",
        answer:
          "Access to the people who know the processes, a list of the systems you use today and, ideally, examples of the reports and documents you rely on day to day.",
      },
    ],
    related: ["implementation", "migration", "integrations"],
  },

  implementation: {
    id: "implementation",
    phase: "implement",
    icon: "implementation",
    name: "Implementation",
    blurb: "Business Central implemented with a clear plan, budget and ownership.",
    menu: "From plan to go-live",
    metaTitle: "Business Central Implementation in Sweden | Verdana",
    metaDescription:
      "Business Central implementation for Swedish and international companies: scope, configuration, data migration, integrations, training and go-live.",
    serviceType: "Microsoft Dynamics 365 Business Central implementation",
    title: "Business Central implementation",
    lead: "A new ERP system has to work from the first day. We implement Microsoft Dynamics 365 Business Central with a clear plan, a proven method and a focus on what makes a difference in your daily work.",
    fit: [
      "You have chosen Business Central and need a team to implement it.",
      "You are replacing an older ERP system or several separate systems.",
      "You want to go live with finance first and add inventory, projects or manufacturing later.",
      "You want to stay close to standard so that Microsoft's updates are easy to take.",
    ],
    included: [
      "Project plan, roles and governance from day one",
      "Process review and solution design",
      "Setup of finance, sales, purchasing, inventory and projects",
      "Migration of customers, vendors, items, balances and open entries",
      "Integrations with your bank, webshop and other systems",
      "Testing together with your users",
      "Training, quick-reference guides and documentation",
      "Go-live and close support in the weeks after",
    ],
    outcomes: [
      {
        title: "Go-live on schedule",
        text: "Clear decisions, checkpoints and test plans reduce the risk of delays.",
      },
      {
        title: "Users who know the system",
        text: "Training is built on your own processes and your own data.",
      },
      {
        title: "A solution that lasts",
        text: "Close to standard, with customizations built as extensions that keep working through Microsoft's updates.",
      },
    ],
    steps: [
      {
        title: "Analysis and design",
        text: "We review your processes and decide what the solution should look like.",
      },
      {
        title: "Build and migration",
        text: "Configuration, integrations and test migrations of your data.",
      },
      {
        title: "Testing and training",
        text: "Your users test real workflows and learn the system.",
      },
      {
        title: "Go-live and follow-up",
        text: "We go live together and follow up closely after the start.",
      },
    ],
    details: {
      title: "What affects time and cost",
      paragraphs: [
        "The biggest factors are the number of processes and companies, how many systems need to be integrated, how much history you move and how much time your own organization can set aside.",
        "A smaller company running finance, sales and purchasing can often go live in a few months. Inventory, several companies, manufacturing or many integrations make the project larger. An assessment gives you a timeline and budget based on your actual situation.",
      ],
    },
    faqs: [
      {
        question: "How long does a Business Central implementation take?",
        answer:
          "Often a few months for a small or midsize company. The timeline depends on the number of processes and integrations, how much data needs to be migrated and how much time you can set aside yourselves.",
      },
      {
        question: "What does an implementation cost?",
        answer:
          "The cost is consulting time for analysis, configuration, migration, integrations, testing and training, plus per-user licenses. We put together a budget based on your scope before the project starts.",
      },
      {
        question: "How much time do we need to set aside?",
        answer:
          "Mostly for workshops, testing and training. Expect key people to spend regular time on the project, especially in the run-up to go-live.",
      },
      {
        question: "Can we start with one part and build from there?",
        answer:
          "Yes. Many companies start with finance and sales and add inventory, projects or integrations in a later phase. That spreads both the work and the cost.",
      },
      {
        question: "What happens after go-live?",
        answer:
          "We follow up closely in the first weeks and fix what needs fixing. After that you can move to a support or application management agreement.",
      },
    ],
    related: ["advisory", "integrations", "support"],
  },

  migration: {
    id: "migration",
    phase: "implement",
    icon: "migration",
    name: "Migration from Dynamics NAV",
    blurb: "From Navision or NAV to Business Central in the cloud.",
    menu: "Upgrade from NAV or Navision",
    metaTitle: "NAV to Business Central Upgrade & Migration | Verdana",
    metaDescription:
      "Move from Dynamics NAV (Navision) to Business Central online: upgrade or reimplementation, data migration and customizations rebuilt as AL extensions.",
    serviceType: "Migration from Microsoft Dynamics NAV to Business Central",
    title: "Dynamics NAV to Business Central migration",
    lead: "Microsoft Dynamics 365 Business Central is the successor to Dynamics NAV and Navision. We help you move your data, replace old customizations and get started in the cloud without bringing the business to a halt.",
    fit: [
      "You run Dynamics NAV 2013 to 2018 or an older Navision version.",
      "Microsoft's support for your version has ended or is ending soon.",
      "You have many customizations and don't know which ones you still need.",
      "You want to move to the cloud but are unsure of the route and how long it will take.",
    ],
    included: [
      "Analysis of your current NAV environment, data and customizations",
      "Decisions on what is replaced by standard features, apps or new extensions",
      "A data plan: what moves and how much history to bring",
      "Necessary customizations rebuilt as extensions in AL",
      "Test migrations with reconciliation of balances and master data",
      "Training in what is new in Business Central",
      "Go-live and close support afterwards",
    ],
    outcomes: [
      {
        title: "A supported system",
        text: "Security updates, new features and a clear future with Microsoft.",
      },
      {
        title: "Less technical debt",
        text: "Old customizations are replaced by standard features where possible and by extensions where needed.",
      },
      {
        title: "Business continuity",
        text: "Test migrations and a well-prepared plan keep daily work going during the switch.",
      },
    ],
    steps: [
      {
        title: "Current-state analysis",
        text: "We review your version, data, customizations and integrations.",
      },
      {
        title: "Choosing the route",
        text: "Upgrade or a fresh start with selected data. You get the pros and cons of each.",
      },
      {
        title: "Migration and testing",
        text: "Test migrations, reconciliation and testing of real workflows.",
      },
      {
        title: "Go-live",
        text: "Final migration, go-live and follow-up in the first weeks.",
      },
    ],
    details: {
      title: "Upgrade or start fresh?",
      paragraphs: [
        "There are two main routes. In an upgrade, data and history are moved with Microsoft's tools, and the customizations you still need are rebuilt as extensions. In a fresh start, often called a reimplementation, Business Central is set up from scratch and you move master data, balances and open entries. Your history can stay available in the old system for lookups.",
        "The right route depends on how much you have customized, the condition of your data and how much of your old ways of working you want to keep. The current-state analysis gives you a recommendation with the pros and cons.",
      ],
    },
    faqs: [
      {
        question: "What happens when support for our NAV version ends?",
        answer:
          "The system keeps working, but Microsoft no longer delivers security updates or fixes. The risk grows over time, especially for integrations, servers and compatibility with other systems.",
      },
      {
        question: "Can we keep our history?",
        answer:
          "Yes, either by migrating it to Business Central or by keeping the old system available for lookups. The choice affects time and cost.",
      },
      {
        question: "What happens to our customizations?",
        answer:
          "We go through them one by one. Many are replaced by standard Business Central features or by ready-made apps. Whatever is still needed is rebuilt as an extension in AL.",
      },
      {
        question: "How long does a migration from NAV take?",
        answer:
          "It depends mainly on how many customizations you have and how much data. A current-state analysis gives you a timeline, and the earlier you start, the more you can decide the timing yourselves.",
      },
    ],
    related: ["advisory", "implementation", "integrations"],
  },

  integrations: {
    id: "integrations",
    phase: "operate",
    icon: "integration",
    name: "Integrations and development",
    blurb: "Connect your webshop, bank, logistics and Microsoft 365.",
    menu: "Connect webshop, bank and logistics",
    metaTitle: "Business Central Integrations & AL Development | Verdana",
    metaDescription:
      "Connect Business Central to your webshop, bank, logistics, Microsoft 365 and Power BI, with AL extensions built to keep working through Microsoft updates.",
    serviceType: "Integrations and development for Microsoft Dynamics 365 Business Central",
    title: "Business Central integrations and development",
    lead: "Microsoft Dynamics 365 Business Central is most useful when it talks to the rest of your business. We connect your systems and build extensions where the standard product falls short.",
    fit: [
      "You enter the same information in several places.",
      "Your webshop, warehouse or bank requires manual exports and imports.",
      "You need a feature that Business Central does not have as standard.",
      "You want to use Power BI, Power Automate or Power Apps on top of your ERP system.",
    ],
    included: [
      "Integrations with webshops, banks, logistics, payroll and CRM",
      "Connections to Microsoft 365, Power BI, Power Automate and Power Apps",
      "Integrations through the Business Central APIs",
      "Extensions developed in AL that keep working through Microsoft's updates",
      "Reports and document layouts for invoices, orders and packing slips",
      "Documentation and monitoring of integrations",
    ],
    outcomes: [
      {
        title: "Information that flows",
        text: "Orders, items, payments and stock levels stay in sync without double entry.",
      },
      {
        title: "Solutions that survive updates",
        text: "Extensions instead of changes to the standard code make upgrades easier.",
      },
      {
        title: "A clear overview",
        text: "Documented and monitored integrations mean errors are caught early.",
      },
    ],
    steps: [
      {
        title: "Requirements",
        text: "We describe the flow: which data, in which direction and how often.",
      },
      {
        title: "Choosing a solution",
        text: "A standard connector, an app from AppSource or custom development.",
      },
      {
        title: "Development and testing",
        text: "We build, test with real data and document the result.",
      },
      {
        title: "Operation",
        text: "Monitoring, error handling and further development over time.",
      },
    ],
    faqs: [
      {
        question: "Which systems can Business Central integrate with?",
        answer:
          "In principle any system with an API or a file interface. The most common are webshops, banks, logistics and shipping, payroll, CRM and BI. There are ready-made connectors for Microsoft 365, Power BI and Shopify.",
      },
      {
        question: "What is an extension?",
        answer:
          "An extension is a separate app that adds to Business Central without changing the standard code. That means Microsoft's updates can be installed without losing your customizations.",
      },
      {
        question: "Are integrations affected by Microsoft's updates?",
        answer:
          "They can be. That is why we build on the APIs and extension models Microsoft supports, and test ahead of the major updates.",
      },
      {
        question: "Should we build our own or buy an app?",
        answer:
          "If there is a well-maintained app on Microsoft Marketplace (formerly AppSource), it is often cheaper and faster. Custom development makes sense when the need is unique to your business.",
      },
    ],
    related: ["implementation", "support", "management"],
  },

  support: {
    id: "support",
    phase: "operate",
    icon: "support",
    name: "Support and optimization",
    blurb: "Quick help day to day and a system that keeps improving.",
    menu: "Day-to-day help and improvements",
    metaTitle: "Business Central Support & Optimization | Verdana",
    metaDescription:
      "Business Central support when something breaks and optimization as your business changes: troubleshooting, fixes, improvements and update planning.",
    serviceType: "Support and optimization for Microsoft Dynamics 365 Business Central",
    title: "Business Central support and optimization",
    lead: "When something goes wrong, you should get help quickly. When your business changes, Microsoft Dynamics 365 Business Central should change with it. We help with both.",
    fit: [
      "You need someone to call when something isn't working.",
      "The system isn't used to its full extent and some tasks are still done by hand.",
      "You have changed, or want to change, your Business Central partner.",
      "You want help planning and testing Microsoft's updates.",
    ],
    included: [
      "User support and troubleshooting",
      "Fixes and smaller changes",
      "Review of processes that can be simplified or automated",
      "Permissions, performance and the job queue",
      "Help with Microsoft's updates",
      "Improvement proposals, prioritized together with you",
    ],
    outcomes: [
      {
        title: "Help when you need it",
        text: "One point of contact with consultants who know Business Central and your solution.",
      },
      {
        title: "Less manual work",
        text: "We find tasks that can be simplified with standard features, automation or small extensions.",
      },
      {
        title: "A system that keeps improving",
        text: "A prioritized list of improvements instead of scattered ideas.",
      },
    ],
    steps: [
      {
        title: "Review",
        text: "We get to know your solution, your integrations and your users.",
      },
      {
        title: "Agreement",
        text: "Scope, contact channels and response times are set to match your needs.",
      },
      {
        title: "Ongoing support",
        text: "Cases are handled and documented, and recurring patterns are followed up.",
      },
      {
        title: "Improvement",
        text: "Regular check-ins with suggestions for improvements.",
      },
    ],
    faqs: [
      {
        question: "Can you take over support from another partner?",
        answer:
          "Yes. You can change your Business Central partner. We start with a review of your solution, customizations and integrations so that the handover is safe.",
      },
      {
        question: "How does a support agreement work?",
        answer:
          "Scope, contact channels and response times are adapted to your needs and to how business-critical the system is. You get a proposal after an initial review.",
      },
      {
        question: "Do you help with Microsoft's updates?",
        answer:
          "Yes. Microsoft updates Business Central on a regular schedule. We help you plan, test customizations and integrations, and tell your users what is new.",
      },
    ],
    related: ["management", "integrations", "consultants"],
  },

  management: {
    id: "management",
    phase: "operate",
    icon: "management",
    name: "Application management",
    blurb: "Updates, changes and ownership in one place.",
    menu: "Updates, changes and ownership",
    metaTitle: "Business Central Managed Services (AMS) | Verdana",
    metaDescription:
      "Application management for Business Central: major update testing, change management, users and permissions, documentation and integration monitoring.",
    serviceType: "Application management for Microsoft Dynamics 365 Business Central",
    title: "Business Central application management (managed services)",
    lead: "An ERP system needs someone who looks after the whole. We take responsibility for updates, changes, permissions and documentation in Microsoft Dynamics 365 Business Central, so the system keeps pace with your business.",
    fit: [
      "Nobody in your organization has the time or expertise to own the ERP system.",
      "Change requests pile up without being prioritized.",
      "You want control over updates, licenses and permissions.",
      "Your IT department needs support with Business Central.",
    ],
    included: [
      "An application management plan and regular check-ins",
      "Tracking and testing ahead of Microsoft's major updates",
      "Change management and prioritization of requests",
      "Users, permissions and licenses",
      "Documentation of the solution, extensions and integrations",
      "Monitoring of integrations and the job queue",
    ],
    outcomes: [
      {
        title: "Continuity",
        text: "Knowledge of your solution is documented instead of living in one person's head.",
      },
      {
        title: "Planning ahead",
        text: "Updates and changes are planned instead of arriving as surprises.",
      },
      {
        title: "Clear ownership",
        text: "You know who looks after the system and what happens next.",
      },
    ],
    steps: [
      { title: "Handover", text: "We document the solution and set up routines." },
      {
        title: "Plan",
        text: "An application management plan with a calendar for updates and check-ins.",
      },
      {
        title: "Ongoing management",
        text: "Changes, permissions, monitoring and testing.",
      },
      {
        title: "Follow-up",
        text: "Regular reviews of status, risks and improvements.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between support and application management?",
        answer:
          "Support is about resolving issues when something happens. Application management is the ongoing responsibility for the whole: updates, changes, permissions and documentation.",
      },
      {
        question: "How often is Business Central updated?",
        answer:
          "Microsoft releases two major updates a year, in April and October, and minor updates in the months in between. That is why customizations and integrations need regular testing.",
      },
      {
        question: "Can application management be combined with our own IT department?",
        answer:
          "Yes. The division of responsibility is agreed with you. We can take on all of it or support your IT department with Business Central.",
      },
    ],
    related: ["support", "integrations", "consultants"],
  },

  consultants: {
    id: "consultants",
    phase: "operate",
    icon: "consulting",
    name: "Consultants",
    blurb: "Business Central expertise that strengthens your team.",
    menu: "Expertise that joins your team",
    metaTitle: "Hire Business Central Consultants in Sweden | Verdana",
    metaDescription:
      "Business Central consultants who join your team: project management, solution design, finance and logistics, AL development and ERP requirements.",
    serviceType: "Microsoft Dynamics 365 Business Central consulting",
    title: "Business Central consultants for your team",
    lead: "Need extra capacity in a project or in day-to-day work? We work alongside your team with project management, solution design, application support or development in Microsoft Dynamics 365 Business Central.",
    fit: [
      "You are running your own project and need specialist skills.",
      "Your usual partner doesn't have capacity right now.",
      "You are about to procure an ERP system and need help with the requirements.",
      "You need temporary reinforcement during a busy period.",
    ],
    included: [
      "Project management and governance of Business Central projects",
      "Solution design and architecture",
      "Application support for finance, sales, purchasing and inventory",
      "Development and integration in AL",
      "Needs analysis, requirements and procurement support",
      "Training and coaching for your key users",
    ],
    outcomes: [
      {
        title: "The right skills from the start",
        text: "Specialists who know Business Central and quickly get up to speed on your situation.",
      },
      {
        title: "Knowledge that stays",
        text: "We work closely with your team so the expertise remains after the assignment.",
      },
      {
        title: "Flexible scope",
        text: "From single tasks to longer assignments, depending on what the situation requires.",
      },
    ],
    steps: [
      {
        title: "Needs",
        text: "We go through the assignment, the goals and the skills required.",
      },
      { title: "Setup", text: "Scope, time and responsibilities are agreed together." },
      { title: "Delivery", text: "We work in your team, with your tools and routines." },
      {
        title: "Handover",
        text: "Documentation and knowledge transfer when the assignment ends.",
      },
    ],
    faqs: [
      {
        question: "Can we hire a consultant part-time?",
        answer:
          "Yes. The scope is adapted to your needs, from a few days to longer full-time or part-time assignments.",
      },
      {
        question: "Can you help us procure an ERP system?",
        answer:
          "Yes. We help with needs analysis, requirements specification and evaluation, so you can compare the options fairly.",
      },
      {
        question: "Do you work on-site or remotely?",
        answer:
          "Both. Workshops and training often work best on-site, while much of the ongoing work can be done remotely.",
      },
    ],
    related: ["advisory", "implementation", "management"],
  },
};
