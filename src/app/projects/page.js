import { pageMetadata, getBreadcrumbSchema } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Locations } from "@/components/Locations";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "EFM Managed Projects & Properties",
  description:
    "Explore EFM's premium portfolio of managed properties in Lagos, including Lekki 5-Bedroom Duplex, Esteek Plaza, JE Plaza, and Qwess Mall.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="Our Portfolio"
          title="Premium properties under management."
          sub="Explore Essential Facility Management's selection of commercial, residential, and retail properties under full-cycle management in Lagos, Nigeria."
          img="/images/properties/Lekki-5-bedroom/lekki-1.jpg"
          alt="Lekki 5-Bedroom Duplex managed by EFM"
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]}
        />

        {/* Render the property slider component */}
        <section className="wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <Locations />
        </section>

        <CtaBand 
          eyebrow="EFM Management" 
          title="Elevate your property operations to world-class standards." 
        />
      </main>
      <Footer />
    </>
  );
}
