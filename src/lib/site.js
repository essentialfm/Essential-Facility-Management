export const siteConfig = {
  name: "Essential Facility Management",
  shortName: "EFM",
  description:
    "Essential Facility Management (EFM) is a Lagos-based property and estate management company delivering premium facility solutions across Lagos and Abuja — property management, leasing, maintenance, security, and design.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.essentialfacilitymgt.com",
  locale: "en_NG",
  keywords: [
    "facility management Lagos",
    "property management Nigeria",
    "estate management Abuja",
    "facility operations",
    "tenant placement",
    "property maintenance",
    "security services",
    "exterior and interior design",
    "Essential Facility Management",
    "EFM Nigeria",
  ],
  company: {
    name: "Essential Facility Management",
    email: "info@essentialfacilitymgt.com",
    phone: "+234-814-340-2222",
    phoneDisplay: "+234 814 340 2222",
    whatsapp: "https://wa.me/2348143402222",
    rcNumber: "6901537",
    founded: "2023-03",
    locations: ["Lagos", "Abuja"],
  },
  socials: {
    instagram: "https://www.instagram.com/essentialfacilitymgt",
    facebook: "https://www.facebook.com/essentialfacilitymgt",
    tiktok: "https://www.tiktok.com/@essentialfacilitymgt",
    handle: "essentialfacilitymgt",
  },
};

export function getCanonicalUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.url,
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    description: siteConfig.description,
    foundingDate: siteConfig.company.founded,
    identifier: {
      "@type": "PropertyValue",
      name: "RC Number",
      value: siteConfig.company.rcNumber,
    },
    areaServed: siteConfig.company.locations.map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.tiktok,
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };
}
