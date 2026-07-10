"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled || open ? " nav--scrolled" : ""}`}>
        <Link href="/" className="nav__brand" aria-label="Essential Facility Management — home">
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
        </Link>

        <nav aria-label="Primary" className="nav__desktop">
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--solid nav__cta"
            href={siteConfig.company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div className={`nav__sheet${open ? " nav__sheet--open" : ""}`} aria-hidden={!open}>
        <ul className="nav__sheet-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          className="btn btn--solid nav__sheet-cta"
          href={siteConfig.company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon />
          {siteConfig.company.phoneDisplay}
        </a>
      </div>
    </>
  );
}
