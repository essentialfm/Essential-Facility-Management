import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { siteConfig, pageMetadata, getBreadcrumbSchema, getCanonicalUrl } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    images: project.images ? [{ url: project.images[0], width: 1200, height: 630, alt: project.name }] : undefined,
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Custom Local Business Schema for this specific project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": getCanonicalUrl(`/projects/${project.slug}/#project`),
    name: `${project.name} — Essential Facility Management`,
    url: getCanonicalUrl(`/projects/${project.slug}`),
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    priceRange: siteConfig.company.priceRange,
    image: `${siteConfig.url}${project.images[0]}`,
    description: project.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location.split(",")[0].trim(),
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <>
      <Nav />
      <JsonLd
        data={[
          projectSchema,
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Properties", path: "/#locations" },
            { name: project.name, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <main>
        <PageHero
          eyebrow={`Properties we manage · ${project.type}`}
          title={project.name}
          sub={project.intro}
          img={project.images[0]}
          alt={`Exterior of ${project.name} managed by EFM`}
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: project.name, path: `/projects/${project.slug}` },
          ]}
        />

        <section className="wrap project-detail">
          <div className="project-detail__grid">
            <Reveal className="project-detail__gallery-sec" y={20}>
              <h2 className="micro micro--dim" style={{ marginBottom: "1rem" }}>Project Gallery</h2>
              <ProjectGallery images={project.images} name={project.name} />
            </Reveal>

            <Reveal className="project-detail__info-sec" stagger={0.08} y={20}>
              <div>
                <span className="micro micro--dim">Property Overview</span>
                <h3 className="display project-detail__title" style={{ marginTop: "0.5rem" }}>
                  Managed to perfection.
                </h3>
                <p className="project-detail__desc" style={{ marginTop: "1.5rem" }}>
                  {project.description}
                </p>
              </div>

              <div className="project-detail__meta" style={{ marginTop: "2rem" }}>
                <div className="project-detail__meta-item">
                  <span className="micro micro--dim">Location</span>
                  <p>{project.location}</p>
                </div>
                <div className="project-detail__meta-item">
                  <span className="micro micro--dim">Property Type</span>
                  <p>{project.type}</p>
                </div>
              </div>

              <div className="project-detail__highlights-container" style={{ marginTop: "2rem" }}>
                <span className="micro micro--dim">Facility Management Highlights</span>
                <ul className="project-detail__highlights" style={{ marginTop: "1rem" }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} className="project-detail__highlight-item">
                      <span className="project-detail__bullet">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <a
                  href={siteConfig.company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  id="inquire-whatsapp-btn"
                >
                  Inquire About Management
                </a>
              </div>
            </Reveal>
          </div>
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
