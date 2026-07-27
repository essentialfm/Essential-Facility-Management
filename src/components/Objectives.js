"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OBJECTIVES = [
  {
    title: "Optimizing Property Value",
    copy: "We maximize returns for property owners through strategic management, proactive maintenance, and value-adding enhancements.",
  },
  {
    title: "Enhancing Operational Efficiency",
    copy: "We apply proven facilities management practices to keep our clients' properties running smoothly, minimizing downtime and reducing operational costs.",
  },
  {
    title: "Sustainability",
    copy: "We integrate environmentally responsible practices into our property and facilities management, working with clients to reduce costs and promote long-term sustainability.",
  },
  {
    title: "Leveraging Innovation",
    copy: "We adopt smart, data-driven approaches to deliver solutions that are efficient, reliable, and forward-thinking.",
  },
  {
    title: "Building Lasting Relationships",
    copy: "We build strong, trust-based relationships with clients and partners; the same referral-driven reputation that has powered EFM's growth from day one.",
  },
  {
    title: "Client-Centric Solutions",
    copy: "Every service we offer is tailored to the client's unique needs, goals, and expectations. No job is complete until the client is completely satisfied.",
  },
];

export function Objectives() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".objective",
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: ".objectives__grid", start: "top 78%" },
          }
        );
        gsap.fromTo(
          ".objectives__title",
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: root.current, start: "top 78%" },
          }
        );
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="objectives" id="objectives" ref={root}>
      <div className="section-head">
        <span className="index">03</span>
        <p className="micro">Core objectives</p>
      </div>

      <h2 className="objectives__title display">
        The principles behind <em>every</em> property we manage.
      </h2>

      <div className="objectives__grid">
        {OBJECTIVES.map((o, i) => (
          <article className="objective" key={o.title}>
            <span className="objective__num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="objective__title">{o.title}</h3>
            <p className="objective__copy">{o.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
