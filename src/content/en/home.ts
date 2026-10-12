import type { HomeCopy } from "@/content/types";

export const home: HomeCopy = {
  metaTitle: "Business Central Consultancy in Sweden | Vardena",
  metaDescription:
    "Vardena is a Sweden-based Microsoft Dynamics 365 Business Central consultancy: ERP advisory, implementation, NAV migration, integrations and support.",
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
    lead: "Microsoft's extended support for the last NAV versions is running out. A move to Business Central needs to be planned well ahead.",
    source:
      "Source: Microsoft's lifecycle pages for Dynamics NAV. The date is the last day of extended support, after which Microsoft no longer ships security updates.",
    primary: "Plan the move",
    secondary: "Read the guide",
    until: "Extended support until",
    ended: "Ended",
    thisMonth: "Ends this month",
    oneMonth: "In 1 month",
    months: "In {n} months",
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
  areas: {
    label: "Areas",
    title: "Where Business Central shows up in the working day.",
    lead: "Five areas where we most often make the biggest difference: from reported hours and bin locations to reports and a system that is looked after once you are live.",
    projects: {
      name: "Time and projects",
      title: "From a reported hour to an invoice.",
      text: "Projects, resources and time sheets live in the same system as your finances. You see budget against actuals while the project is running, not after the books are closed.",
      points: [
        "Time sheets with approval, per project and task",
        "Budget, actuals and work in progress per project",
        "Invoicing on time and materials or at a fixed price, straight from the project",
      ],
      scope: "Standard functionality, already in the Essentials licence.",
      link: "What Business Central covers",
      caption: "Illustration with example data: a project with budget against actuals per task, and an approved time sheet.",
      mock: {
        window: "Project",
        status: "In progress",
        project: "P-1042 · New customer centre",
        totals: [
          { label: "Hours", value: "312 h" },
          { label: "Cost", value: "SEK 468k" },
          { label: "Invoiced", value: "SEK 420k" },
        ],
        activities: "Tasks",
        budget: "Budget",
        actual: "Actual",
        rows: [
          { label: "Pre-study", value: "96%" },
          { label: "Build", value: "81%" },
          { label: "Training", value: "34%" },
        ],
        week: "Time sheet, week 42",
        approved: "Approved",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        hours: ["8", "7.5", "8", "6", "4"],
        sum: "Total",
        total: "33.5",
      },
    },
    warehouse: {
      name: "Warehouse",
      title: "The right item in the right place, and stock levels you can trust.",
      text: "Locations, bins and picking are run in the same system as orders and purchasing. Stock changes when the goods move, not when someone finds time to register it.",
      points: [
        "Picks, put-aways and movements per bin",
        "Lot and serial numbers with traceability all the way",
        "Physical counts, reorder points and purchase suggestions",
      ],
      scope: "Standard functionality, already in the Essentials licence. Handheld barcode scanners usually take an add-on.",
      link: "What Business Central covers",
      caption: "Illustration with example data: bins with a picking route, the pick list and the stock level of one item.",
      mock: {
        window: "Warehouse",
        location: "Main warehouse",
        legend: { occupied: "Occupied", free: "Free", stop: "Pick stop" },
        pick: "Pick PL-0318",
        columns: ["Item", "Bin", "Qty"],
        lines: [
          { number: "10-204", item: "Shelf 90 cm", bin: "A-05", quantity: "4" },
          { number: "10-311", item: "Steel bracket", bin: "B-06", quantity: "12" },
          { number: "20-118", item: "Upright 200 cm", bin: "C-03", quantity: "6" },
        ],
        picked: "Picked",
        next: "Next",
        stock: { label: "Stock 10-204", value: "148 pcs", reorder: "Reorder point 60" },
      },
    },
    commerce: {
      name: "Logistics and e-commerce",
      title: "From a click in the web shop to a delivered parcel.",
      text: "Orders, stock levels, prices and shipping belong together. What is sold in the web shop is in the ERP system at once, without anyone retyping an order.",
      points: [
        "Web orders become sales orders automatically, with the built-in Shopify connector or an integration with your platform",
        "Stock levels and prices flow back to the web shop",
        "Shipping method and tracking number follow the order all the way to the customer",
      ],
      scope: "The Shopify connector is included in Business Central online. Carrier booking, third-party warehouses and other e-commerce platforms are connected with an add-on or an integration.",
      link: "About integrations and development",
    },
    reporting: {
      name: "Reporting with Power BI",
      title: "Numbers to steer by, not just to reconcile.",
      text: "Power BI reads the same data as the ERP system. We start from Microsoft's ready-made reports for Business Central and build on them with the measures that are yours.",
      points: [
        "Ready-made Power BI reports for finance, sales, purchasing, inventory and projects, among others",
        "Reports embedded in Business Central, where decisions are made",
        "Your own dashboards for management, sales and warehouse on the same data",
      ],
      scope: "Microsoft's reports need Business Central online and Power BI licences for those who read them.",
      link: "About integrations and development",
      caption: "Illustration with example data: dashboards for sales, project profitability and receivables, as they can look in Power BI.",
      mock: {
        sales: {
          title: "Sales",
          period: "Last 12 months",
          kpis: [
            { label: "Revenue", value: "SEK 42.6m", change: "+8%" },
            { label: "Gross margin", value: "31.4%", change: "+1.2" },
            { label: "Order intake", value: "SEK 3.9m", change: "+5%" },
            { label: "Inventory value", value: "SEK 6.1m", change: "−3%" },
          ],
          trend: "Revenue per month",
          thisYear: "This year",
          lastYear: "Last year",
          groupsTitle: "By item group",
          groups: [
            { label: "Furnishing", value: "17.2" },
            { label: "Lighting", value: "11.8" },
            { label: "Accessories", value: "8.4" },
            { label: "Service", value: "5.2" },
          ],
        },
        projects: {
          title: "Project profitability",
          subtitle: "Contribution margin",
          rows: [
            { label: "P-1042", value: "34%" },
            { label: "P-1038", value: "27%" },
            { label: "P-1031", value: "12%" },
          ],
        },
        receivables: {
          title: "Receivables",
          total: "SEK 4.8m",
          buckets: [
            { label: "Not due", value: "2.9" },
            { label: "1–30 days", value: "1.1" },
            { label: "31–60 days", value: "0.5" },
            { label: "Over 60", value: "0.3" },
          ],
        },
      },
    },
    care: {
      name: "Application management and support",
      title: "Someone who looks after the system once you are live.",
      text: "Microsoft updates Business Central twice a year, and the business changes more often than that. We handle tickets, updates and improvements so the system keeps pace.",
      points: [
        "Support and troubleshooting from consultants who know your solution",
        "Monitoring and testing ahead of Microsoft's major updates",
        "Change management, permissions and documentation",
      ],
      link: "Support and optimization",
      secondLink: "Application management",
      caption: "Illustration with example data: a ticket list and this year's Business Central updates, with major updates in April and October.",
      mock: {
        window: "Tickets",
        tickets: [
          { title: "VAT report shows the wrong period", area: "Finance", status: "Resolved" },
          { title: "New user for the warehouse", area: "Permissions", status: "In progress" },
          { title: "Report for the order backlog", area: "Improvement", status: "Planned" },
        ],
        updates: "Microsoft's updates",
        major: "Major update",
        minor: "Minor updates every month",
        checks: ["Tested in sandbox", "Extensions checked", "Approved for production"],
      },
    },
  },
  integrations: {
    label: "Integrations",
    title: "Business Central in a bigger picture.",
    lead: "An ERP system is worth most when information keeps flowing: to the web shop, the bank, the warehouse and the tools you already use.",
    cta: "About integrations and development",
    items: [
      { icon: "document", title: "Microsoft 365", text: "Work with customers, orders and quotes directly in Outlook, Excel and Teams." },
      { icon: "automation", title: "Power Automate and Power Apps", text: "Automate approvals and flows, and build apps for field and warehouse staff." },
      { icon: "copilot", title: "Copilot", text: "AI assistance built into Business Central for the tasks that eat up the day." },
      { icon: "bank", title: "Banking and payments", text: "Payment files, bank statements and reconciliation without manual steps." },
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
    cta: "About Vardena",
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
