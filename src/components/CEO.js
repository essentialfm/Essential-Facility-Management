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
              src="/images/ceo-picture.png"
              alt="Emmanuel Nnadozie - CEO of Essential Facility Management"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              priority
            />
            {/* Scrim for the image base */}
            <div className="ceo__photo-scrim" />

            {/* Square transparent social buttons overlay on the photo */}
            <div className="ceo__socials-overlay">
              <a 
                href="https://www.linkedin.com/in/emmanuel-nnadozie-a874a0187?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
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
              {/* <a 
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
              </a> */}
            </div>
          </div>
        </Reveal>

        <Reveal className="ceo__content" stagger={0.09} y={20}>
          <span className="micro micro--dim">Message from our CEO</span>
          <h2 className="ceo__title display">
            Emmanuel <em>Nnadozie</em>
          </h2>
          <p className="ceo__subtitle">Chief Executive Officer</p>
          
          <div className="ceo__bio">
            <p>
              &ldquo;When I launched Essential Facility Management, it represented years of hard work, learning, and passion. Long before our official launch in 2023, I had been quietly building this vision, testing ideas, helping property owners and tenants navigate real estate safely, and finding ways to make property management simpler and more reliable for everyday people. What began as a personal effort to help clients find trustworthy management for their properties has grown into a company now serving a growing community of property owners, tenants, and businesses across Lagos and Abuja.&rdquo;
            </p>
            <p>
              &ldquo;Our mission has always been clear: to make property and facility management efficient, professional, and trustworthy. Since bringing EFM to life, we've built a reputation rooted in referrals and results, and a community that relies on us for secure, seamless management of their most valuable assets.&rdquo;
            </p>
            <p>
              &ldquo;Looking ahead, our focus is to position Essential Facility Management as the leading name in property and estate management, security, project management, facility operations, legal and compliance support, and interior and exterior design across Nigeria. We're investing in innovation to transform how people experience property management, starting here and extending further.&rdquo;
            </p>
            <p>
              &ldquo;Thank you for choosing Essential Facility Management. Together, we're shaping the future of property and facility management in Nigeria, and beyond.&rdquo;
            </p>
          </div>

          {/* <div className="ceo__signature-box">
            <p className="ceo__signature-name">Emmanuel Nnadozie</p>
            <p className="micro micro--dim">Founder &amp; CEO, EFM</p>
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
