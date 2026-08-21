// Single source of truth for the site's absolute URL.
//
// Canonical production URL is the DPMF subdomain. Override per-environment with
// NEXT_PUBLIC_SITE_URL (e.g. http://localhost:3000 for local dev, or a preview
// URL). Used for metadataBase, canonical URLs, sitemap.xml, and robots.txt.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://design.dpmf.technology"
).replace(/\/+$/, "");

// Shared brand constants used across metadata and structured data.
export const SITE_NAME = "DPMF Design & Development";
export const SITE_EMAIL = "aarathi@dpmf.technology";
export const SITE_TAGLINE = "Dark-tech, minimal, engineered.";
export const SITE_DESCRIPTION =
  "Premium, engineered digital design & development studio. Web design & development, branding, UI/UX, product design, content, and digital strategy.";

// Absolute URL helper.
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
