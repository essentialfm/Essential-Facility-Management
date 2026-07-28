"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { ShareIcon, CheckIcon } from "./icons";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = siteConfig.url;
    const data = {
      title: siteConfig.name,
      text: `${siteConfig.name} — ${siteConfig.tagline}`,
      url,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  const encodedUrl = encodeURIComponent(siteConfig.url);
  const encodedText = encodeURIComponent(`${siteConfig.name} — ${siteConfig.tagline}`);

  return (
    <div className="share">
      <button type="button" className="btn share__btn" onClick={share}>
        {copied ? <CheckIcon /> : <ShareIcon />}
        {copied ? "Link copied" : "Share EFM"}
      </button>
      <div className="share__links">
        <a
          href={`https://wa.me/2348066030376?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
