import { getLocalBusinessSchema, getFaqSchema, faqs } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { CEO } from "@/components/CEO";
import { Locations } from "@/components/Locations";
import { Objectives } from "@/components/Objectives";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StructuredData />
      <JsonLd data={[getLocalBusinessSchema(), getFaqSchema(faqs)]} />
      <Nav />
      <main>
        <Hero />
        <PromiseStrip />
        <Services />
        <About />
        <CEO />
        <section className="wrap">
          <Locations />
        </section>
        <Objectives />
        <section className="wrap">
          <Faq items={faqs} title="Frequently asked questions" />
        </section>
        <Closing />
      </main>
      <Footer />
    </>
  );
}
