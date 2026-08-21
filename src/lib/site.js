// Single source of truth for the site's absolute URL.
//
// Canonical production URL is the DPMF subdomain. Override per-environment with
// NEXT_PUBLIC_SITE_URL (e.g. http://localhost:3000 for local dev, or a preview
// URL). Used for metadataBase, canonical URLs, sitemap.xml, and robots.txt.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://design.dpmf.technology"
).replace(/\/+$/, "");
