"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Property & Estate Management",
    desc: "Full-cycle management of residences and estates — leasing, tenant placement, rent administration, and owner reporting.",
    img: "/images/outside-home-building.avif",
    alt: "Exterior of a modern residential building",
  },
  {
    title: "Facility Operations Solutions",
    desc: "Day-to-day operations, preventive maintenance, and vendor coordination that keep every space running without friction.",
    img: "/images/office-waiting-area.avif",
    alt: "Refined office waiting area",
  },
  {
    title: "Security Services",
    desc: "Vetted personnel, access control, and round-the-clock protocols that keep properties, tenants, and assets protected.",
    img: "/images/outside-of-a-home.avif",
    alt: "Secure exterior of a private home",
  },
  {
    title: "Project Management",
    desc: "Renovations, fit-outs, and capital projects delivered on schedule and on budget, from scoping through handover.",
    img: "/images/poolside-overhead-view.avif",
    alt: "Overhead view of a residential poolside",
  },
  {
    title: "Legal & Compliance Support",
    desc: "Documentation, regulatory compliance, and dispute resolution handled with rigour, so owners stay fully covered.",
    img: "/images/sitting-room-cross-section.avif",
    alt: "Cross-section view of an elegant sitting room",
  },
  {
    title: "Exterior & Interior Design",
    desc: "Considered design and finishing that elevate a property's character — and its market value.",
    img: "/images/fancy-kitchen-area.avif",
    alt: "High-end kitchen area with premium finishes",
  },
];

export function Services() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const set = (i) => {
    const clamped = Math.max(0, Math.min(SERVICES.length - 1, i));
    if (activeRef.current !== clamped) {
      activeRef.current = clamped;
      setActive(clamped);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop with motion: pinned scrub sequence — images swap as scroll scrubs by
      mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          trigger: ".services__stage",
          start: "top top",
          end: () => `+=${SERVICES.length * 55}%`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            set(Math.floor(self.progress * SERVICES.length * 0.999));
          },
        });

        // Subtle 3D breathing on the frame while pinned
        gsap.fromTo(
          ".services__frame",
          { rotateY: -4, rotateX: 2 },
          {
            rotateY: 4,
            rotateX: -2,
            ease: "none",
            scrollTrigger: {
              trigger: ".services__stage",
              start: "top top",
              end: () => `+=${SERVICES.length * 55}%`,
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          ".services__intro",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".services__intro", start: "top 80%" },
          }
        );
      });

      // Mobile or reduced motion: no pin — active service follows scroll position
      mm.add("(max-width: 860px), (prefers-reduced-motion: reduce)", () => {
        const items = gsap.utils.toArray(".service-item");
        items.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 65%",
            end: "bottom 65%",
            onToggle: (self) => {
              if (self.isActive) set(i);
            },
          });
        });
      });

      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={root}>
      <div className="services__intro">
        <div className="section-head">
          <span className="index">01</span>
          <p className="micro">What we do</p>
        </div>
        <h2 className="display objectives__title">
          Six disciplines. <em>One standard</em> of care.
        </h2>
      </div>

      <div className="services__stage">
        <ol className="services__list">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className={`service-item${i === active ? " service-item--active" : ""}`}
            >
              <button
                type="button"
                className="service-item__head"
                onClick={() => set(i)}
                style={{ background: "none", border: 0, textAlign: "left", color: "inherit", width: "100%" }}
                aria-expanded={i === active}
              >
                <span className="service-item__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-item__title">{s.title}</span>
              </button>
              <p className="service-item__desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="services__visual">
          <div className="services__frame">
            {SERVICES.map((s, i) => (
              <div
                key={s.img}
                className={`services__img${i === active ? " services__img--active" : ""}`}
              >
                <Image src={s.img} alt={s.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            ))}
          </div>
          <p className="services__counter" aria-hidden="true">
            <strong>{String(active + 1).padStart(2, "0")}</strong> / {String(SERVICES.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
