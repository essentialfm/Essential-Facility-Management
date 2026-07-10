export const siteConfig = {
  name: "Essential Facility Management",
  shortName: "EFM",
  tagline: "Nigeria's premier property & facility management company",
  description:
    "Essential Facility Management (EFM) is a Lagos-based property and estate management company delivering premium facility solutions across Lagos and Abuja — property management, leasing, maintenance, security, project management, and design.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.essentialfacilitymgt.com",
  locale: "en_NG",
  keywords: [
    "facility management Nigeria",
    "facility management Lagos",
    "property management Nigeria",
    "estate management Abuja",
    "best facility management company Nigeria",
    "facility management company Lagos",
    "property management company Nigeria",
    "facility operations",
    "tenant placement Lagos",
    "property maintenance Nigeria",
    "estate security services",
    "exterior and interior design Nigeria",
    "Essential Facility Management",
    "EFM Nigeria",
  ],
  company: {
    name: "Essential Facility Management",
    legalName: "Essential Facility Management",
    email: "info@essentialfacilitymgt.com",
    phone: "+234-814-340-2222",
    phoneDisplay: "+234 814 340 2222",
    whatsapp: "https://wa.me/2348143402222",
    rcNumber: "6901537",
    founded: "2023-03",
    foundedYear: "2023",
    locations: ["Lagos", "Abuja"],
    priceRange: "₦₦₦",
    geo: { lat: 6.5244, lng: 3.3792 },
  },
  socials: {
    instagram: "https://www.instagram.com/essentialfacilitymgt",
    facebook: "https://www.facebook.com/essentialfacilitymgt",
    tiktok: "https://www.tiktok.com/@essentialfacilitymgt",
    handle: "essentialfacilitymgt",
  },
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Why EFM", href: "/compare" },
  { label: "Locations", href: "/#locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "property-estate-management",
    title: "Property & Estate Management",
    short:
      "Full-cycle management of residences and estates — leasing, tenant placement, rent administration, and owner reporting.",
    long:
      "We run your property end to end: marketing and leasing, tenant vetting and placement, rent collection and administration, service-charge management, and transparent owner reporting. Owners get a single accountable partner and a property that stays occupied, compliant, and profitable.",
    img: "/images/outside-home-building.avif",
    alt: "Exterior of a modern residential building managed by EFM",
    outcomes: ["Higher occupancy", "On-time rent collection", "Transparent owner reporting"],
  },
  {
    slug: "facility-operations",
    title: "Facility Operations Solutions",
    short:
      "Day-to-day operations, preventive maintenance, and vendor coordination that keep every space running without friction.",
    long:
      "Planned preventive maintenance, responsive repairs, cleaning and janitorial programmes, utilities and generator management, and vetted vendor coordination — all tracked and reported. We minimise downtime and reduce operating cost while keeping every space in show condition.",
    img: "/images/office-waiting-area.avif",
    alt: "Refined office waiting area maintained by EFM",
    outcomes: ["Less downtime", "Lower operating cost", "Show-ready spaces"],
  },
  {
    slug: "security-services",
    title: "Security Services",
    short:
      "Vetted personnel, access control, and round-the-clock protocols that keep properties, tenants, and assets protected.",
    long:
      "Trained and vetted security personnel, access control, CCTV coordination, visitor management, and 24/7 protocols tailored to each estate. Residents and owners get genuine peace of mind and a documented chain of accountability.",
    img: "/images/outside-of-a-home.avif",
    alt: "Secured exterior of a private home",
    outcomes: ["24/7 protection", "Access control", "Vetted personnel"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    short:
      "Renovations, fit-outs, and capital projects delivered on schedule and on budget, from scoping through handover.",
    long:
      "From scoping and budgeting to contractor selection, site supervision, quality control, and handover — we manage renovations, fit-outs, and capital projects so they land on time, on budget, and to a standard that adds value.",
    img: "/images/poolside-overhead-view.avif",
    alt: "Overhead view of a residential poolside project",
    outcomes: ["On schedule", "On budget", "Quality-controlled"],
  },
  {
    slug: "legal-compliance",
    title: "Legal & Compliance Support",
    short:
      "Documentation, regulatory compliance, and dispute resolution handled with rigour, so owners stay fully covered.",
    long:
      "Tenancy documentation, regulatory and statutory compliance, service-charge governance, and dispute resolution handled with rigour. Owners stay protected and every obligation is properly recorded.",
    img: "/images/sitting-room-cross-section.avif",
    alt: "Cross-section view of an elegant sitting room",
    outcomes: ["Full compliance", "Proper documentation", "Dispute resolution"],
  },
  {
    slug: "interior-exterior-design",
    title: "Exterior & Interior Design",
    short:
      "Considered design and finishing that elevate a property's character — and its market value.",
    long:
      "Design, furnishing, and finishing that raise a property's character and market value — from landscaping and façade to interior styling and turnkey short-let staging. Done in-house, coordinated with our operations team.",
    img: "/images/fancy-kitchen-area.avif",
    alt: "High-end kitchen with premium finishes",
    outcomes: ["Higher market value", "Turnkey finishing", "In-house delivery"],
  },
];

export const objectives = [
  {
    title: "Optimizing Property Value",
    copy: "We maximize returns for owners through strategic management, proactive maintenance, and value-adding enhancements.",
  },
  {
    title: "Enhancing Operational Efficiency",
    copy: "Proven facilities practices keep properties running smoothly — minimizing downtime and reducing operational cost.",
  },
  {
    title: "Sustainability",
    copy: "We integrate environmentally responsible practices to reduce cost and promote long-term sustainability.",
  },
  {
    title: "Leveraging Innovation",
    copy: "Smart, data-driven approaches deliver solutions that are efficient, reliable, and forward-thinking.",
  },
  {
    title: "Building Lasting Relationships",
    copy: "We build trust-based relationships with clients and partners — the referral engine that has powered EFM from day one.",
  },
  {
    title: "Client-Centric Solutions",
    copy: "Every service is tailored to the client's needs and goals. No job is complete until the client is completely satisfied.",
  },
];

export const locations = {
  lagos: {
    slug: "lagos",
    name: "Lagos",
    region: "Lagos State",
    geo: { lat: 6.5244, lng: 3.3792 },
    intro:
      "Essential Facility Management provides premium property and facility management across Lagos — from Lekki, Ikoyi, and Victoria Island to Ikeja and the mainland.",
    areas: ["Lekki", "Ikoyi", "Victoria Island", "Ikeja", "Ajah", "Banana Island", "Magodo"],
    img: "/images/poolside-side-view.avif",
  },
  abuja: {
    slug: "abuja",
    name: "Abuja",
    region: "Federal Capital Territory",
    geo: { lat: 9.0765, lng: 7.3986 },
    intro:
      "Essential Facility Management delivers full-service property and estate management across Abuja and the FCT — from Maitama and Asokoro to Wuse, Jabi, and Guzape.",
    areas: ["Maitama", "Asokoro", "Wuse", "Jabi", "Guzape", "Gwarinpa", "Katampe"],
    img: "/images/outside-of-a-home.avif",
  },
};

export const comparison = {
  rows: [
    { feature: "Hands-on, owner-accountable management", efm: true, typical: "partial" },
    { feature: "Single partner for property, facility, security & design", efm: true, typical: false },
    { feature: "Transparent owner reporting", efm: true, typical: "partial" },
    { feature: "Preventive maintenance (not just reactive)", efm: true, typical: false },
    { feature: "Vetted in-house & partner personnel", efm: true, typical: "partial" },
    { feature: "Legal & compliance support included", efm: true, typical: false },
    { feature: "Interior & exterior design in-house", efm: true, typical: false },
    { feature: "Coverage in Lagos and Abuja", efm: true, typical: "partial" },
    { feature: "Referral-driven reputation", efm: true, typical: "partial" },
    { feature: '"Not complete until you\'re satisfied" guarantee', efm: true, typical: false },
  ],
};

export const faqs = [
  {
    q: "What is the best facility management company in Nigeria?",
    a: "Essential Facility Management (EFM) is a leading property and facility management company in Nigeria, operating across Lagos and Abuja. EFM offers end-to-end management — property and estate management, facility operations, security, project management, legal and compliance support, and interior and exterior design — built on a hands-on, owner-accountable model and a referral-driven reputation.",
  },
  {
    q: "Where does Essential Facility Management operate?",
    a: "EFM manages properties across Lagos and Abuja, Nigeria, including Lekki, Ikoyi, and Victoria Island in Lagos and Maitama, Asokoro, and Wuse in Abuja.",
  },
  {
    q: "What services does EFM provide?",
    a: "EFM provides property and estate management, facility operations solutions, security services, project management, legal and compliance support, and exterior and interior design — all coordinated by a single accountable team.",
  },
  {
    q: "How do I contact Essential Facility Management?",
    a: "You can reach EFM on WhatsApp or phone at +234 814 340 2222, by email at info@essentialfacilitymgt.com, or on Instagram, Facebook, and TikTok at @essentialfacilitymgt.",
  },
  {
    q: "When was Essential Facility Management founded?",
    a: "EFM was founded in March 2023 and is registered in Nigeria with RC Number 6901537. It has grown from the ground up on trust, referrals, and consistent, quality service.",
  },
  {
    q: "Does EFM handle both residential and commercial properties?",
    a: "Yes. EFM manages residential estates and homes as well as workplaces and commercial facilities, offering leasing, tenant placement, maintenance coordination, security, and day-to-day operations.",
  },
];

export function getCanonicalUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}

export function pageMetadata({ title, description, path = "/", images } = {}) {
  const canonical = getCanonicalUrl(path);
  const desc = description || siteConfig.description;
  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: desc,
      siteName: siteConfig.name,
      images: images || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: desc,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    description: siteConfig.description,
    foundingDate: siteConfig.company.founded,
    identifier: {
      "@type": "PropertyValue",
      name: "RC Number",
      value: siteConfig.company.rcNumber,
    },
    areaServed: siteConfig.company.locations.map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.tiktok,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.company.name,
    image: `${siteConfig.url}/images/poolside-side-view.avif`,
    url: siteConfig.url,
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    priceRange: siteConfig.company.priceRange,
    foundingDate: siteConfig.company.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.company.geo.lat,
      longitude: siteConfig.company.geo.lng,
    },
    areaServed: siteConfig.company.locations.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Facility management",
      "Property management",
      "Estate management",
      "Property maintenance",
      "Estate security",
      "Interior and exterior design",
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.tiktok,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Facility Management Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short },
      })),
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-NG",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function getFaqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function getBreadcrumbSchema(trail = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function getServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.long || service.short,
    serviceType: service.title,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.company.locations.map((name) => ({ "@type": "City", name })),
  };
}
