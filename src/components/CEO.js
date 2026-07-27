"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export function CEO() {
  return (
    <section className="ceo wrap" id="ceo">
      <div className="section-head">
        <span className="index">03</span>
        <p className="micro">Leadership</p>
      </div>

      <div className="ceo__grid">
        <Reveal className="ceo__image-wrapper" y={30}>
          <div className="ceo__photo-frame">
            <Image
              src="/images/ceo-picture.jpg"
              alt="Emmanuel Nnadozie Powers - CEO of Essential Facility Management"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              priority
            />
            {/* Scrim for the image base */}
            <div className="ceo__photo-scrim" />

            {/* Square transparent social buttons overlay on the photo */}
            <div className="ceo__socials-overlay">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ceo__social-btn"
                aria-label="LinkedIn"
                id="ceo-linkedin-link"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="ceo__tooltip">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ceo__social-btn"
                aria-label="Instagram"
                id="ceo-instagram-link"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="ceo__tooltip">Instagram</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="ceo__content" stagger={0.09} y={20}>
          <span className="micro micro--dim">Message from our CEO</span>
          <h2 className="ceo__title display">
            Emmanuel Nnadozie <em>Powers</em>
          </h2>
          <p className="ceo__subtitle">Chief Executive Officer</p>
          
          <div className="ceo__bio">
            <p>
              &ldquo;At Essential Facility Management, we hold ourselves to a single, uncompromising standard: 
              owner-accountable service. When you trust us with your property, you aren&apos;t just hiring a manager; 
              you are partnering with an extension of your own team dedicated to protecting and maximizing your real estate investment.&rdquo;
            </p>
            <p>
              &ldquo;Our growth is fueled entirely by trust and personal referrals. We believe facility management 
              is built on daily execution, transparency, and a relentless focus on detail. No matter the scale, 
              our promise remains simple: no job is complete until our clients are completely satisfied.&rdquo;
            </p>
          </div>

          <div className="ceo__signature-box">
            <p className="ceo__signature-name">Emmanuel Nnadozie Powers</p>
            <p className="micro micro--dim">Founder &amp; CEO, EFM</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
