import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";
import { ShareButton } from "./ShareButton";

export function Footer() {
  const { company, socials } = siteConfig;
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <Image src="/images/logo-white.svg" alt="" width={38} height={38} />
            <span className="footer__brand-name">Essential Facility Management</span>
          </div>
          <p className="footer__tag">
            Premium property and facility management across Lagos and Abuja,
            Nigeria. RC {company.rcNumber}.
          </p>
          <ShareButton />
        </div>

        <div>
          <p className="footer__heading micro micro--dim">Explore</p>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__heading micro micro--dim">Contact</p>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/-/g, "")}`}>{company.phoneDisplay}</a>
            </li>
            <li>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__heading micro micro--dim">Follow</p>
          <ul className="footer__list">
            <li>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Essential Facility Management. All rights reserved.</span>
        <span>RC Number {company.rcNumber} · Lagos · Abuja · Nigeria</span>
      </div>
    </footer>
  );
}
