"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageHero({ eyebrow, title, sub, img, alt, breadcrumb }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          ".pagehero__media",
          { scale: 1.16, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 1.9, ease: "power2.out" },
          0
        )
          .fromTo(
            ".pagehero__line > span",
            { yPercent: 115 },
            { yPercent: 0, duration: 1.1, stagger: 0.12 },
            0.3
          )
          .fromTo(
            [".pagehero__eyebrow", ".pagehero__sub"],
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
            0.7
          );

        gsap.to(".pagehero__media", {
          yPercent: 16,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  const words = title.split(" ");

  return (
    <section className="pagehero" ref={root}>
      <div className="pagehero__media">
        <Image src={img} alt={alt} fill priority sizes="100vw" />
      </div>
      <div className="pagehero__scrim" aria-hidden="true" />
      <div className="pagehero__inner">
        {breadcrumb && (
          <nav className="pagehero__crumbs" aria-label="Breadcrumb">
            {breadcrumb.map((c, i) => (
              <span key={c.path}>
                {i > 0 && <span className="pagehero__crumb-sep">/</span>}
                {i < breadcrumb.length - 1 ? <a href={c.path}>{c.name}</a> : <span>{c.name}</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="pagehero__eyebrow micro">{eyebrow}</p>
        <h1 className="pagehero__title display">
          {words.map((w, i) => (
            <span className="pagehero__line" key={i}>
              <span>{w}&nbsp;</span>
            </span>
          ))}
        </h1>
        {sub && <p className="pagehero__sub">{sub}</p>}
      </div>
    </section>
  );
}
