"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROMISE =
  "To deliver superior, sustainable facility management solutions built on professionalism and innovation, leveraging our experience and trusted relationships to create exceptional environments and keep our clients completely satisfied.";

export function PromiseStrip() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Word-by-word ink reveal as the reader scrolls through
        gsap.fromTo(
          ".promise__text .word",
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: ".promise__text",
              start: "top 78%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          [".promise__label", ".promise__sig"],
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: { trigger: root.current, start: "top 75%" },
          }
        );
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="promise" ref={root} aria-label="Our promise">
      <p className="promise__label micro">Our Promise</p>
      <p className="promise__text">
        {PROMISE.split(" ").map((word, i) => (
          <span key={i}>
            <span className="word">{word}</span>{" "}
          </span>
        ))}
      </p>
      <p className="promise__sig micro micro--dim">Essential Facility Management</p>
    </section>
  );
}
