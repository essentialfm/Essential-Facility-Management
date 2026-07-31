"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Editorial copy rises in
        gsap.fromTo(
          ".about__copy > *",
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: ".about__copy", start: "top 72%" },
          }
        );

        // Clip-path photo reveals
        gsap.utils.toArray(".about__photo").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(12% 8% 12% 8%)", opacity: 0.4 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 80%" },
            }
          );
        });

        // Parallax drift inside each photo frame
        gsap.utils.toArray(".about__media .parallax-img").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={root}>
      <div className="section-head">
        <span className="index">02</span>
        <p className="micro">About EFM</p>
      </div>

      <div className="about__grid">
        <div className="about__copy">
          <h2 className="about__title display">
            Built on trust, <em>grown</em> by referral.
          </h2>
          <div className="about__body">
            <p>
              Essential Facility Management is a Lagos-based property and estate
              management company committed to delivering exceptional, reliable
              facility solutions across Nigeria.
            </p>
            <p>
              Since our founding in <strong>March 2023</strong>, we&apos;ve grown from
              the ground up; built not on big marketing budgets, but on trust,
              referrals, and consistent, quality service. Today we manage
              properties across <strong>Lagos and Abuja</strong>, offering end-to-end
              solutions spanning property management, leasing, tenant placement,
              maintenance coordination, and day-to-day operations.
            </p>
          </div>

          <blockquote className="about__pull">
            &ldquo;We don&apos;t just manage properties, we protect and grow their
            value.&rdquo;
          </blockquote>

          <div className="about__body">
            <p>
              What sets us apart is our hands-on approach: tenants and property
              owners alike experience seamless, professional service at every
              touchpoint. Every property we manage reflects our core belief: <em>no
              job is complete until the client is completely satisfied.</em>
            </p>
          </div>

          <div className="about__chips">
            <span className="chip"><strong>Founded</strong> March 2023</span>
            <span className="chip"><strong>Multiple</strong> locations</span>
            <span className="chip"><strong>Referral</strong>-driven</span>
            <span className="chip"><strong>RC</strong> {siteConfig.company.rcNumber}</span>
          </div>
        </div>

        <div className="about__media">
          <figure className="about__photo about__photo--tall">
            <div className="parallax-img">
              <Image
                src="/images/properties/JE-Plaza/je-1.jpg"
                alt="Elegant sitting room in an EFM-managed residence"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
              />
            </div>
          </figure>
          <figure className="about__photo about__photo--wide">
            <div className="parallax-img">
              <Image
                src="/images/properties/Shortlet-Interior/parlor-view-1.jpeg"
                alt="Premium sitting room with modern finishes"
                fill
                sizes="(max-width: 860px) 100vw, 38vw"
              />
            </div>
          </figure>
          <p className="about__caption">Shopping Complexes managed, Lagos</p>
        </div>
      </div>
    </section>
  );
}
