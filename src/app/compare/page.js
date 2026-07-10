import { comparison, pageMetadata, getBreadcrumbSchema, getFaqSchema, siteConfig } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, DashIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Why EFM — The Best Facility Management Company in Nigeria",
  description:
    "See how Essential Facility Management compares to typical facility management companies in Nigeria. One accountable partner for property management, operations, security, and design across Lagos and Abuja.",
  path: "/compare",
});

const compareFaqs = [
  {
    q: "What makes Essential Facility Management the best facility management company in Nigeria?",
    a: "EFM combines property management, facility operations, security, project management, legal and compliance support, and interior and exterior design under one accountable team. Unlike many providers who only react to problems, EFM runs preventive maintenance, gives owners transparent reporting, and works to a simple standard: no job is complete until the client is completely satisfied. That hands-on, referral-driven model is what sets EFM apart across Lagos and Abuja.",
  },
  {
    q: "How is EFM different from other facility management companies in Lagos?",
    a: "Most Lagos facility companies specialise in one area and outsource the rest. EFM is a single partner covering the full life of a property — leasing, operations, maintenance, security, compliance, and design — with vetted personnel and owner-accountable management.",
  },
  {
    q: "Is EFM suitable for both homeowners and property investors?",
    a: "Yes. EFM works with individual homeowners, landlords, and property investors, tailoring management to each owner's goals — from protecting a single residence to maximising returns across a portfolio.",
  },
];

function Cell({ value }) {
  if (value === true) return <span className="cmp-cell cmp-cell--yes"><CheckIcon /></span>;
  if (value === "partial") return <span className="cmp-cell cmp-cell--partial">Sometimes</span>;
  return <span className="cmp-cell cmp-cell--no"><DashIcon /></span>;
}

export default function ComparePage() {
  return (
    <>
      <Nav />
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Why EFM", path: "/compare" },
          ]),
          getFaqSchema(compareFaqs),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Why EFM · The comparison"
          title="Not just another facility manager in Nigeria."
          sub="Most providers do one thing. EFM protects and grows the whole property — hands-on, accountable, and built on a referral-driven reputation across Lagos and Abuja."
          img="/images/office-waiting-area.avif"
          alt="Refined workspace managed by Essential Facility Management"
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "Why EFM", path: "/compare" },
          ]}
        />

        <section className="wrap compare">
          <div className="section-head">
            <span className="index">01</span>
            <p className="micro">EFM vs. a typical facility company</p>
          </div>

          <Reveal className="cmp" y={26} stagger={0.03}>
            <div className="cmp__head" role="row">
              <span className="cmp__feature-head">What you should expect</span>
              <span className="cmp__col cmp__col--efm">EFM</span>
              <span className="cmp__col">Typical company</span>
            </div>
            {comparison.rows.map((row) => (
              <div className="cmp__row" role="row" key={row.feature}>
                <span className="cmp__feature">{row.feature}</span>
                <span className="cmp__col cmp__col--efm">
                  <Cell value={row.efm} />
                </span>
                <span className="cmp__col">
                  <Cell value={row.typical} />
                </span>
              </div>
            ))}
          </Reveal>
          <p className="cmp__note">
            Comparison reflects EFM&apos;s standard scope of service versus a
            single-discipline facility provider. {siteConfig.company.name} · RC{" "}
            {siteConfig.company.rcNumber}.
          </p>
        </section>

        <section className="wrap reasons">
          <div className="section-head">
            <span className="index">02</span>
            <p className="micro">Three reasons owners choose EFM</p>
          </div>
          <Reveal className="reasons__grid" stagger={0.1} y={30}>
            <article className="reason">
              <span className="reason__num display">01</span>
              <h3 className="reason__title display">One accountable partner</h3>
              <p>
                Property, operations, security, compliance, and design handled by a
                single team — no finger-pointing between vendors, one point of
                accountability for everything.
              </p>
            </article>
            <article className="reason">
              <span className="reason__num display">02</span>
              <h3 className="reason__title display">Proactive, not reactive</h3>
              <p>
                Preventive maintenance and transparent reporting mean problems are
                caught before they cost you — protecting value instead of just
                responding to failures.
              </p>
            </article>
            <article className="reason">
              <span className="reason__num display">03</span>
              <h3 className="reason__title display">Built on referrals</h3>
              <p>
                EFM grew from day one on trust and word of mouth, not marketing
                budgets. The reputation is the product — and the reason clients
                stay.
              </p>
            </article>
          </Reveal>
        </section>

        <section className="wrap">
          <Faq items={compareFaqs} title="The honest questions" index="03" />
        </section>

        <CtaBand
          eyebrow="See the difference"
          title="Compare us on your own property. Start a conversation."
          img="/images/poolside-side-view.avif"
        />
      </main>
      <Footer />
    </>
  );
}
