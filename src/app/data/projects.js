// Portfolio projects. Add new works to the top of this list.
//
// Fields:
//   title     – project name
//   summary   – one line shown on the card
//   company   – where you built it, e.g. "Pandoblox" (optional)
//   year      – e.g. "2025" or "2023 – 2024" (optional)
//   overview  – short paragraph shown in the details dialog
//   features  – list of key features
//   tech      – list of technologies
//   role      – what you did on the project
//   links     – [{ label, href }]; omit href (or use null) for private repos

const projects = [
  {
    title: "NYC PBA",
    company: "Pandoblox",
    summary:
      "CMS for nycpba.org built as a custom WordPress theme with ACF, Twig, and Tailwind.",
    overview:
      "A custom WordPress theme powering the nycpba.org website, giving the content team a flexible, structured CMS.",
    features: [
      "Custom WordPress theme built from scratch.",
      "Editable content structures powered by Advanced Custom Fields (ACF).",
      "Twig templating for clean, maintainable markup.",
      "Responsive, utility-first styling with Tailwind CSS.",
    ],
    tech: ["WordPress", "ACF", "Twig", "Tailwind CSS"],
    role: "Developed the custom WordPress theme and CMS setup.",
    links: [{ label: "Live site", href: "https://www.nycpba.org" }],
  },
  {
    title: "Tsavorite",
    company: "Pandoblox",
    summary:
      "CMS for tsavoritesi.com built as a custom WordPress theme with ACF, Twig, and Tailwind.",
    overview:
      "A custom WordPress theme powering the tsavoritesi.com website, with content fully editable through the CMS.",
    features: [
      "Custom WordPress theme built from scratch.",
      "Editable content structures powered by Advanced Custom Fields (ACF).",
      "Twig templating for clean, maintainable markup.",
      "Responsive, utility-first styling with Tailwind CSS.",
    ],
    tech: ["WordPress", "ACF", "Twig", "Tailwind CSS"],
    role: "Developed the custom WordPress theme and CMS setup.",
    links: [{ label: "Live site", href: "https://tsavoritesi.com" }],
  },
  {
    title: "SymphonyAI",
    company: "Pandoblox",
    summary: "Migration of symphonyai.com from WordPress to Webflow.",
    overview:
      "Moved the symphonyai.com marketing site off WordPress and rebuilt it on Webflow.",
    features: [
      "Migrated site pages and content from WordPress to Webflow.",
      "Rebuilt the site's layouts and templates in Webflow.",
    ],
    tech: ["Webflow", "WordPress"],
    role: "Handled the site migration from WordPress to Webflow.",
    links: [{ label: "Live site", href: "https://www.symphonyai.com" }],
  },
  {
    title: "VBO Tickets",
    company: "Pandoblox",
    summary:
      "Built modules for vbotickets.com, a headless WordPress site with a Nuxt frontend.",
    overview:
      "vbotickets.com is a headless setup: WordPress manages the content and a Nuxt app renders the frontend. I supported the team by building modules for the existing site.",
    features: [
      "Built new modules on the existing headless WordPress + Nuxt setup.",
      "Module content is managed in WordPress and rendered by the Nuxt frontend.",
    ],
    tech: ["Nuxt", "Vue", "WordPress", "Headless CMS"],
    role: "Supporting developer: built modules for the existing site.",
    links: [{ label: "Live site", href: "https://www.vbotickets.com" }],
  },
  {
    title: "Lauten Audio",
    company: "Pandoblox",
    summary:
      "Webflow site for lautenaudio.com, kept in sync with the Shopify store through a Zapier workflow.",
    overview:
      "lautenaudio.com runs on Webflow with Shopify handling commerce. I built the Webflow site and automated the link between the two platforms.",
    features: [
      "Built and managed the Webflow site.",
      "Zapier workflow that updates the Webflow collection list whenever products change in Shopify.",
      "Keeps product content in sync without manual re-entry.",
    ],
    tech: ["Webflow", "Zapier", "Shopify"],
    role: "Handled the Webflow site and built the Zapier automation (the Shopify side was handled separately).",
    links: [{ label: "Live site", href: "https://lautenaudio.com" }],
  },
  {
    title: "Mati Water District System",
    summary:
      "Web and mobile water-billing system that turns meter readings into accurate bills.",
    company: "Mediaone PH",
    overview:
      "A web and mobile application for managing water billing, payments, and customer accounts for Mati Water District.",
    features: [
      "Employees input customer water usage directly in the app.",
      "Automatic receipt and bill generation based on previous usage.",
      "Customer account management with billing history.",
    ],
    tech: ["Laravel", "Ionic", "MySQL"],
    role: "Maintained the system and fixed bugs to improve reliability and performance.",
  },
  {
    title: "MediaoneTix",
    summary:
      "Online ticketing app for the October Metal Mayhem concert in Davao City.",
    company: "Mediaone PH",
    overview:
      "An online ticketing system developed for the October Metal Mayhem concert in Davao City.",
    features: [
      "Online seat reservation and ticket purchasing.",
      "QR code-based digital tickets.",
      "PayMongo integration for secure payment processing.",
      "Event organizer dashboard for tracking sales.",
    ],
    tech: ["React Native", "Laravel", "Mapbox"],
    role: "Mobile Developer: developed and implemented core features of the app.",
  },
  {
    title: "Medtracker",
    summary:
      "A Grab-style mobile app focused on medicine delivery from nearby pharmacies.",
    company: "Mediaone PH",
    overview: "A mobile app similar to Grab but focused on medicine delivery.",
    features: [
      "Search nearby pharmacies and order medicines.",
      "Real-time delivery tracking.",
      "Prescription upload for controlled medications.",
    ],
    tech: ["React Native", "Laravel", "Mapbox"],
    role: "Mobile Developer: developed and implemented core features of the app.",
  },
  {
    title: "DMFlow",
    summary:
      "Document management system used by Del Monte Fresh Produce for file tracking and approvals.",
    company: "Mediaone PH",
    overview:
      "A Document Management System used by Del Monte Fresh Produce for efficient file tracking.",
    features: [
      "Document version control and approval workflow.",
      "Automated notifications for pending approvals.",
      "Secure role-based access for users.",
    ],
    tech: ["Java", "Oracle SQL", "Angular", "LoopBack JS"],
    role: "Maintained the system and implemented new features based on business needs.",
  },
];

export default projects;
