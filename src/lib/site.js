// Single source of truth for the site's absolute URL.
//
// There is no production domain yet, so this defaults to localhost. When a
// domain is acquired, set NEXT_PUBLIC_SITE_URL (e.g. https://your-domain.com)
// in the environment — no code changes needed. Used for metadataBase,
// canonical URLs, sitemap.xml, and robots.txt.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/+$/, "");
