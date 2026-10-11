import type { HomeCopy } from "@/content/types";

export const home: HomeCopy = {
  metaTitle: "Business Central Consultancy in Sweden | Verdana",
  metaDescription:
    "Verdana is a Sweden-based Microsoft Dynamics 365 Business Central consultancy: ERP advisory, implementation, NAV migration, integrations and support.",
  hero: {
    title: ["Business Central consultants in Sweden.", "From assessment to support."],
    lead: [
      "We help companies in Sweden choose, implement and run Microsoft Dynamics 365 Business Central.",
      "ERP advisory, implementation, migration from Dynamics NAV (Navision), integrations and application management. One team from the first conversation to everyday use, with standard features before custom code.",
    ],
    primaryCta: "Start a conversation",
    secondaryCta: "See how we work",
  },
  services: {
    label: "Services",
    title: "From the first decision to a system that keeps improving.",
    lead: "We can take responsibility for the whole Business Central lifecycle, or for the part where you need us most.",
    all: "All services",
  },
  nav: {
    label: "Dynamics NAV",
    title: "Still running Dynamics NAV?",
    lead: "Microsoft's extended support for the last NAV versions is running out. Without security updates the risk grows every month, and a move to Business Central needs to be planned well ahead.",
    source:
      "Source: Microsoft's lifecycle pages for Dynamics NAV. The date is the last day of extended support, after which Microsoft no longer ships security updates.",
    primary: "Plan the move",
    secondary: "Read the guide",
    until: "Extended support until",
    ended: "Ended",
    thisMonth: "Ends this month",
    oneMonth: "In 1 month",
    months: "In {n} months",
    today: "Today",
  },
  businessCentral: {
    label: "Business Central",
    title: "One system for the whole business.",
    paragraphs: [
      "Microsoft Dynamics 365 Business Central is an ERP system for small and midsize companies. Finance, sales, purchasing, inventory and projects share the same data, and the system runs in Microsoft's cloud.",
      "That means less double entry, numbers you can trust and a system Microsoft updates twice a year.",
    ],
    more: "More about Business Central",
    premium: "Premium",
    capabilities: [
      { icon: "finance", title: "Finance", text: "General ledger, receivables, payables, VAT, budgets and closing." },
      { icon: "sales", title: "Sales", text: "Quote, order, shipment and invoice in one flow." },
      { icon: "purchasing", title: "Purchasing", text: "Purchase orders, vendors, approvals and receiving." },
      { icon: "inventory", title: "Inventory", text: "Items, locations, picking and physical counts." },
      { icon: "projects", title: "Projects", text: "Budget, time, resources and billing per project." },
      { icon: "report", title: "Reporting", text: "Real-time analysis and ready-made Power BI reports." },
      { icon: "manufacturing", title: "Manufacturing", text: "Bills of materials, production orders and planning.", premium: true },
      { icon: "service", title: "Service", text: "Service orders, contracts and service items.", premium: true },
    ],
    flow: {
      caption: "Illustration: one order moving through a connected Business Central setup.",
      stations: [
        { icon: "order", title: "Order", detail: "The customer orders in the web shop", status: "Received" },
        { icon: "core", title: "Business Central", detail: "Sales order created, item reserved", status: "Registered" },
        { icon: "warehouse", title: "Warehouse", detail: "Picked, packed and shipped", status: "Shipped" },
        { icon: "invoice", title: "Invoice", detail: "Posted and sent to the customer", status: "Posted" },
        { icon: "bank", title: "Bank", detail: "Payment matched to the invoice", status: "Reconciled" },
        { icon: "report", title: "Report", detail: "Sales and margin in Power BI", status: "Updated" },
      ],
    },
  },
  integrations: {
    label: "Integrations",
    title: "Business Central in a bigger picture.",
    lead: "An ERP system is worth most when information keeps flowing: to the web shop, the bank, the warehouse and the tools you already use.",
    cta: "About integrations and development",
    items: [
      { icon: "document", title: "Microsoft 365", text: "Work with customers, orders and quotes directly in Outlook, Excel and Teams." },
      { icon: "report", title: "Power BI", text: "Reports and dashboards on top of the same data as the ERP system." },
      { icon: "automation", title: "Power Automate and Power Apps", text: "Automate approvals and flows, and build apps for field and warehouse staff." },
      { icon: "copilot", title: "Copilot", text: "AI assistance built into Business Central for the tasks that eat up the day." },
      { icon: "ecommerce", title: "E-commerce", text: "Orders, items, prices and stock levels in sync with the web shop." },
      { icon: "bank", title: "Banking and payments", text: "Payment files, bank statements and reconciliation without manual steps." },
      { icon: "logistics", title: "Logistics and shipping", text: "Freight booking, tracking and third-party warehouses in the same chain." },
      { icon: "yourSystems", title: "Your other systems", text: "Payroll, CRM, BI or industry systems through standard APIs." },
    ],
  },
  process: {
    label: "How we work",
    title: "How a project runs.",
    lead: "Four steps with clear deliverables. You always know where the project stands and what happens next.",
    outcome: "You get",
    steps: [
      {
        title: "Understand",
        text: "We map processes, systems and goals together with the people who do the work every day.",
        outcome: "A picture of your needs, priorities and a first budget range.",
      },
      {
        title: "Design",
        text: "We describe the solution, the data migration and the integrations before anything is built.",
        outcome: "A solution description, a timeline and clear ownership.",
      },
      {
        title: "Deliver",
        text: "We configure, migrate, test and train, with check-ins at every step.",
        outcome: "A tested system and users who are ready for go-live.",
      },
      {
        title: "Improve",
        text: "After go-live we follow up, fix and keep developing as the business changes.",
        outcome: "Support, an improvement backlog and a handle on Microsoft's updates.",
      },
    ],
  },
  principles: {
    label: "Principles",
    title: "Three principles guide how we work.",
    lead: "They apply whether we are proposing, building or maintaining a solution.",
    cta: "About Verdana",
    items: [
      {
        title: "Standard before custom code",
        text: "Business Central covers a lot out of the box. We customize only where it clearly pays off, and then as extensions that survive Microsoft's updates.",
      },
      {
        title: "Straight answers on time and cost",
        text: "You get a clear scope, a realistic plan and early notice if anything changes. No surprises at the end of the project.",
      },
      {
        title: "You should understand your own system",
        text: "Documentation and knowledge transfer are included, so you never depend on a single consultant to move forward.",
      },
    ],
  },
  faq: {
    label: "Questions",
    title: "Frequently asked questions",
    lead: "Short answers to what we are asked most often. Can't find yours? Get in touch.",
    items: [
      {
        question: "What is Microsoft Dynamics 365 Business Central?",
        answer:
          "Business Central is Microsoft's ERP system for small and midsize companies. It brings finance, sales, purchasing, inventory, projects and reporting into one system and runs as a cloud service. It works closely with Microsoft 365, Power BI and Power Platform.",
      },
      {
        question: "How much does Business Central cost?",
        answer:
          "The cost is made up of licenses per user and month, the implementation itself and any ongoing support. Microsoft's Swedish list prices (October 2026) are SEK 764.70 for Essentials, SEK 1,051.40 for Premium and SEK 76.50 for Team Members per user and month, excluding VAT and paid yearly. The final price is set by the reseller. Project cost depends on scope, integrations and data migration, which is why we start by reviewing your needs.",
      },
      {
        question: "How long does a Business Central implementation take?",
        answer:
          "For a small or midsize company an implementation often takes a few months. The timeline depends mostly on the number of processes, integrations, how much data needs to move and how much time your own team can set aside. An assessment gives you a timeline based on your reality.",
      },
      {
        question: "We run Dynamics NAV. Do we have to move?",
        answer:
          "Microsoft's extended support for NAV 2016 ended in April 2026. For NAV 2017 it ends in January 2027 and for NAV 2018 in January 2028. The system keeps working after that, but without security updates or fixes. Business Central is the natural successor, and the move should be planned well ahead.",
      },
      {
        question: "Can Business Central connect to our other systems?",
        answer:
          "Yes. Business Central has open APIs and ready-made connections to Microsoft 365, Power BI and Shopify, among others. Other systems, such as banking, logistics, payroll or CRM, connect through standard integrations or ready-made apps from Microsoft's app marketplace.",
      },
      {
        question: "What is the difference between Essentials and Premium?",
        answer:
          "Essentials covers finance, sales, purchasing, inventory, projects and reporting. Premium includes everything in Essentials and adds manufacturing and service management. Many trading and service companies manage well with Essentials.",
      },
    ],
  },
};
