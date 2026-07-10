"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand" aria-label="Essential Facility Management — home">
        <Image
          src="/images/logo-white.svg"
          alt=""
          width={34}
          height={34}
          className="nav__logo"
          priority
        />
        <span className="nav__wordmark">
          EFM <span>· Essential Facility Management</span>
        </span>
      </a>

      <nav aria-label="Primary">
        <ul className="nav__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#objectives">Objectives</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a
        className="btn btn--solid nav__cta"
        href={siteConfig.company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp us
      </a>
    </header>
  );
}
