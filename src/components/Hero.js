"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Load choreography: line-mask headline reveal + slow photo settle
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          ".hero__media",
          { scale: 1.14, opacity: 0.6 },
          { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" },
          0
        )
          .fromTo(
            ".hero__line > span",
            { yPercent: 110 },
            { yPercent: 0, duration: 1.2, stagger: 0.14 },
            0.35
          )
          .fromTo(
            [".hero__eyebrow", ".hero__sub", ".hero__ctas", ".hero__meta"],
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
            0.9
          );

        // Parallax depth on scroll: photo drifts slower, type lifts away
        gsap.to(".hero__media", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero__inner", {
          yPercent: -8,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom 25%",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__media">
        <Image
          src="/images/properties/Lekki-5-bedroom/lekki-1.jpg"
          alt="a luxury residence in Lekki managed by EFM"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow micro">Property &amp; Facility Management</p>

        <h1 className="hero__title display">
          <span className="hero__line"><span>We protect and grow the</span></span>
          <span className="hero__line"><span>value of <em>exceptional</em></span></span>
          <span className="hero__line"><span>properties.</span></span>
        </h1>

        <p className="hero__sub">
          Essential Facility Management delivers end-to-end estate and facility solutions for premium residential and commercial properties across Nigeria; managed hands-on, down to the last detail.
        </p>

        <div className="hero__ctas">
          <a
            className="btn btn--solid"
            href={siteConfig.company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Request a consultation
          </a>
          <a className="btn" href="/services">
            Explore services
          </a>
        </div>

        <div className="hero__meta">
          <span className="micro micro--dim">Est. March 2023 · RC {siteConfig.company.rcNumber}</span>
          <span className="hero__scroll-hint">Scroll</span>
        </div>
      </div>
    </section>
  );
}
