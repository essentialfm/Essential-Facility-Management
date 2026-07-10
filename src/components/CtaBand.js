import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { WhatsAppIcon, MailIcon } from "./icons";

export function CtaBand({
  title = "No job is complete until the client is completely satisfied.",
  eyebrow = "Let's talk",
  img = "/images/poolside-overhead-view-2.avif",
}) {
  const { company } = siteConfig;
  return (
    <section className="closing" id="cta">
      <div className="closing__media">
        <Image src={img} alt="A premium residence managed by EFM" fill sizes="100vw" />
      </div>
      <div className="closing__scrim" aria-hidden="true" />
      <div className="closing__inner">
        <p className="micro">{eyebrow}</p>
        <h2 className="display closing__title">{title}</h2>
        <div className="closing__ctas">
          <a className="btn btn--solid" href={company.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <a className="btn" href={`mailto:${company.email}`}>
            <MailIcon />
            {company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
