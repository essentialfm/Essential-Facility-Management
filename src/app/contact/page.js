import Image from "next/image";
import { siteConfig, pageMetadata, getBreadcrumbSchema } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon, MailIcon, ArrowIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Contact Essential Facility Management",
  description:
    "Talk to Essential Facility Management about property and facility management in Lagos and Abuja. WhatsApp or call +234 814 340 2222, or email info@essentialfacilitymgt.com.",
  path: "/contact",
});

export default function ContactPage() {
  const { company, socials } = siteConfig;
  return (
    <>
      <Nav />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <main className="contact">
        <div className="contact__media" aria-hidden="true">
          <Image src="/images/for-contact-page.jpg" alt="Get in touch with EFM" fill sizes="100vw" priority style={{ objectPosition: "center 30%" }} />
          <div className="contact__scrim" />
        </div>

        <section className="contact__inner">
          <Reveal y={30} stagger={0.1}>
            <p className="micro">Contact ·</p>
            <h1 className="display contact__title">
              Let&apos;s talk about <em>your property</em>.
            </h1>
            <p className="contact__lead">
              Whether it&apos;s a single home or a full portfolio, we&apos;ll respond
              quickly and tailor a plan to your goals. The fastest way to reach us is
              WhatsApp.
            </p>
          </Reveal>

          <Reveal className="contact__cards" y={30} stagger={0.09}>
            <a className="contact-card" href={company.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span className="contact-card__label micro micro--dim">WhatsApp / Phone</span>
              <span className="contact-card__value">{company.phoneDisplay}</span>
              <span className="contact-card__go"><ArrowIcon /></span>
            </a>
            <a className="contact-card" href={`mailto:${company.email}`}>
              <MailIcon />
              <span className="contact-card__label micro micro--dim">Email</span>
              <span className="contact-card__value">{company.email}</span>
              <span className="contact-card__go"><ArrowIcon /></span>
            </a>
          </Reveal>

          <Reveal className="contact__socials" y={20}>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <span className="contact__handle">@{socials.handle}</span>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
