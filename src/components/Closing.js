"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export function Closing() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Photo parallax under the fixed-feeling headline
        gsap.fromTo(
          ".closing__media",
          { yPercent: -12, scale: 1.08 },
          {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          ".closing__inner > *",
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: { trigger: root.current, start: "top 62%" },
          }
        );
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="closing" id="contact" ref={root}>
      <div className="closing__media">
        <Image
          src="/images/poolside-overhead-view-2.avif"
          alt="Overhead view of a poolside at an EFM-managed property"
          fill
          sizes="100vw"
        />
      </div>
      <div className="closing__scrim" aria-hidden="true" />

      <div className="closing__inner">
        <p className="micro">Work with EFM</p>
        <h2 className="closing__title display">
          No job is complete until the client is <em>completely satisfied</em>.
        </h2>
        <div className="closing__ctas">
          <a
            className="btn btn--solid"
            href={siteConfig.company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <a className="btn" href={`mailto:${siteConfig.company.email}`}>
            {siteConfig.company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
