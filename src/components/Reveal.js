"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lightweight scroll-reveal wrapper. Children animate up + fade on enter.
 * Falls back to fully visible with no motion under prefers-reduced-motion.
 */
export function Reveal({ children, className = "", as: Tag = "div", stagger = 0.08, y = 34, delay = 0 }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = el.children.length ? el.children : [el];
        gsap.fromTo(
          targets,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger,
            delay,
            scrollTrigger: { trigger: el, start: "top 82%" },
          }
        );
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, [stagger, y, delay]);

  return (
    <Tag ref={root} className={className}>
      {children}
    </Tag>
  );
}
