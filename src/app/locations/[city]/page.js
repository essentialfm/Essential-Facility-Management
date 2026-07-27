import { notFound } from "next/navigation";
import Image from "next/image";
import {
  locations,
  services,
  siteConfig,
  pageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getCanonicalUrl,
} from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return Object.keys(locations).map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const loc = locations[city];
  if (!loc) return {};
  return pageMetadata({
    title: `Facility Management in ${loc.name}`,
    description: `Premium property and facility management in ${loc.name}, Nigeria by Essential Facility Management, covering ${loc.areas.slice(0, 3).join(", ")} and more. Leasing, operations, security, and design.`,
    path: `/locations/${loc.slug}`,
  });
}

function cityFaqs(loc) {
  return [
    {
      q: `Who is the best facility management company in ${loc.name}?`,
      a: `Essential Facility Management (EFM) is a leading facility and property management company operating in ${loc.name}, Nigeria. EFM covers ${loc.areas.slice(0, 4).join(", ")} and surrounding areas with end-to-end property management, facility operations, security, and design.`,
    },
    {
      q: `What areas of ${loc.name} does EFM cover?`,
      a: `EFM manages properties across ${loc.name}, including ${loc.areas.join(", ")}.`,
    },
    {
      q: `How do I get facility management for my property in ${loc.name}?`,
      a: `Contact EFM on WhatsApp or phone at ${siteConfig.company.phoneDisplay} or email ${siteConfig.company.email} to arrange management for your ${loc.name} property.`,
    },
  ];
}

export default async function LocationPage({ params }) {
  const { city } = await params;
  const loc = locations[city];
  if (!loc) notFound();
  const faqs = cityFaqs(loc);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.company.name} — ${loc.name}`,
    url: getCanonicalUrl(`/locations/${loc.slug}`),
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    priceRange: siteConfig.company.priceRange,
    image: `${siteConfig.url}${loc.img}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: loc.region,
      addressCountry: "NG",
    },
    geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
    areaServed: loc.areas.map((name) => ({ "@type": "Place", name: `${name}, ${loc.name}` })),
  };

  return (
    <>
      <Nav />
      <JsonLd
        data={[
          localBusiness,
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/#locations" },
            { name: loc.name, path: `/locations/${loc.slug}` },
          ]),
          getFaqSchema(faqs),
        ]}
      />
      <main>
        <PageHero
          eyebrow={`Facility Management · ${loc.name}`}
          title={`Facility management in ${loc.name}, done properly.`}
          sub={loc.intro}
          img={loc.img}
          alt={`Premium property managed by EFM in ${loc.name}`}
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: loc.name, path: `/locations/${loc.slug}` },
          ]}
        />

        <section className="wrap loc-page">
          <div className="section-head">
            <span className="index">01</span>
            <p className="micro">Neighbourhoods we serve</p>
          </div>
          <Reveal className="loc-areas" stagger={0.04} y={18}>
            {loc.areas.map((a) => (
              <span className="loc-area" key={a}>{a}</span>
            ))}
          </Reveal>

          <div className="section-head loc-page__head2">
            <span className="index">02</span>
            <p className="micro">What we manage in {loc.name}</p>
          </div>
          <Reveal className="loc-services" stagger={0.08} y={26}>
            {services.map((s) => (
              <a className="loc-service" href="/services" key={s.slug}>
                <h3 className="loc-service__title display">{s.title}</h3>
                <p>{s.short}</p>
                <span className="loc-service__link">Learn more <ArrowIcon /></span>
              </a>
            ))}
          </Reveal>
        </section>

        <section className="wrap">
          <Faq items={faqs} title={`Facility management in ${loc.name} — FAQ`} index="03" />
        </section>

        <CtaBand
          eyebrow={`EFM · ${loc.name}`}
          title={`Manage your ${loc.name} property with EFM.`}
        />
      </main>
      <Footer />
    </>
  );
}
