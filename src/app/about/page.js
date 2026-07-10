import Image from "next/image";
import { objectives, pageMetadata, getBreadcrumbSchema } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "About Essential Facility Management",
  description:
    "Founded in March 2023, Essential Facility Management has grown on trust and referrals to manage premium properties across Lagos and Abuja, Nigeria. RC 6901537.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Nav />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="About EFM · Est. March 2023"
          title="Grown from the ground up, on trust."
          sub="Essential Facility Management is a Lagos-based property and estate management company delivering exceptional, reliable facility solutions across Nigeria."
          img="/images/outside-home-building.avif"
          alt="Exterior of a residence managed by Essential Facility Management"
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]}
        />

        <section className="wrap about-story">
          <div className="about-story__grid">
            <Reveal className="about-story__body" y={30} stagger={0.12}>
              <p>
                Since our founding in <strong>March 2023</strong>, we&apos;ve grown
                not on big marketing budgets, but on trust, referrals, and
                consistent, quality service.
              </p>
              <p>
                Today we manage properties across <strong>Lagos and Abuja</strong>,
                offering end-to-end solutions spanning property management, leasing,
                tenant placement, maintenance coordination, and day-to-day
                operations.
              </p>
              <p>
                What sets us apart is our hands-on approach. We don&apos;t just
                manage properties — we protect and grow their value, while ensuring
                tenants and owners alike experience seamless, professional service at
                every touchpoint.
              </p>
              <p className="about-story__pull">
                Every property we manage reflects one belief: no job is complete
                until the client is completely satisfied.
              </p>
            </Reveal>
            <Reveal className="about-story__media" y={40}>
              <div className="about-story__photo">
                <Image src="/images/sitting-room-cross-section.avif" alt="Interior of a managed residence" fill sizes="(max-width: 860px) 100vw, 40vw" />
              </div>
              <div className="about-story__chips">
                <span className="chip"><strong>Founded</strong> 2023</span>
                <span className="chip"><strong>Lagos</strong> &amp; Abuja</span>
                <span className="chip"><strong>RC</strong> 6901537</span>
                <span className="chip"><strong>Referral</strong>-driven</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="objectives">
          <div className="section-head">
            <span className="index">02</span>
            <p className="micro">What guides us</p>
          </div>
          <h2 className="display objectives__title">Our core objectives.</h2>
          <div className="objectives__grid">
            {objectives.map((o, i) => (
              <div className="objective" key={o.title}>
                <span className="objective__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="objective__title">{o.title}</h3>
                <p className="objective__copy">{o.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBand eyebrow="Work with us" title="Trust us with your property. We'll earn it." />
      </main>
      <Footer />
    </>
  );
}
