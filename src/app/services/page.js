import Image from "next/image";
import { services, pageMetadata, getBreadcrumbSchema, getServiceSchema, getFaqSchema, faqs } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Facility Management Services in Lagos & Abuja",
  description:
    "Explore Essential Facility Management's services across Nigeria, property & estate management, facility operations, security, project management, legal & compliance, and interior & exterior design.",
  path: "/services",
});

const serviceFaqs = [
  faqs[2],
  faqs[5],
  {
    q: "Does EFM offer preventive maintenance?",
    a: "Yes. EFM runs planned preventive maintenance programmes alongside responsive repairs, so issues are caught early, reducing downtime and long-term cost for property owners in Lagos and Abuja.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...services.map(getServiceSchema),
          getFaqSchema(serviceFaqs),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Services · Lagos & Abuja"
          title="Everything your property needs, under one roof."
          sub="Six disciplines, one accountable team. From leasing and maintenance to security and design, EFM manages the full life of your property."
          img="/images/properties/Shortlet-Interior/parlor-view-4.jpeg"
          alt="Elegant interior of a property managed by EFM"
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />

        <div className="services-detail">
          {services.map((s, i) => (
            <Reveal className="svc-row" key={s.slug} y={40}>
              <article className={`svc-row__inner${i % 2 ? " svc-row__inner--rev" : ""}`}>
                <div className="svc-row__media">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
                <div className="svc-row__body">
                  <span className="svc-row__num micro micro--dim">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                  <h2 className="svc-row__title display">{s.title}</h2>
                  <p className="svc-row__desc">{s.long}</p>
                  <ul className="svc-row__outcomes">
                    {s.outcomes.map((o) => (
                      <li key={o}>
                        <CheckIcon />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <section className="wrap">
          <Faq items={serviceFaqs} title="Services: questions answered" index="02" />
        </section>

        <CtaBand
          eyebrow="Ready when you are"
          title="Tell us about your property. We'll handle the rest."
        />
      </main>
      <Footer />
    </>
  );
}
