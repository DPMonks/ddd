import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Services — Web, Brand, Product, Content & Growth",
  description:
    "Premium digital design & development services: website design, custom web apps, branding & identity, UI/UX and product design, content & strategy, plus SEO, performance, analytics and accessibility.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "product design",
    "design systems",
    "SEO",
    "performance optimisation",
    "accessibility",
    "conversion optimisation",
    "digital strategy",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | DPMF Design & Development",
    description:
      "Premium, engineered digital design & development services across web, brand, product, content and growth.",
    url: "/services",
    type: "website",
  },
};

// Services grouped by the site plan: each category maps to a stage of a
// client's journey, so the list stays attractive and easy to scan.
const CATEGORIES = [
  {
    id: "web-applications",
    title: "Web & Applications",
    blurb: "Fast, secure, engineered sites and bespoke tools.",
    services: [
      {
        num: "01",
        title: "Website Design & Development",
        want: "Modern, responsive, fast, and secure websites with clean UI and a professional presence.",
        includes: [
          "Landing pages",
          "Multi-page sites",
          "Corporate sites",
          "Portfolio sites",
          "Product sites",
          "Marketing sites",
        ],
      },
      {
        num: "02",
        title: "Custom Web Applications",
        want: "Tools, not just websites — bespoke systems that do real work.",
        includes: ["Dashboards", "Portals", "Internal tools", "Client systems"],
      },
      {
        num: "03",
        title: "Automation & Workflow Tools",
        want: "Efficiency through automated, reliable workflows.",
        includes: [
          "Automated content flows",
          "Scheduling systems",
          "Operational tools",
        ],
      },
      {
        num: "04",
        title: "Multi-Language Website Architecture",
        want: "Global reach with clean, maintainable localisation.",
        includes: ["i18n setup", "Multi-locale routing", "Language switching"],
      },
    ],
  },
  {
    id: "brand-visual-identity",
    title: "Brand & Visual Identity",
    blurb: "A recognisable, cohesive identity across every surface.",
    services: [
      {
        num: "05",
        title: "Branding & Identity Systems",
        want: "A recognisable brand with a professional, consistent identity.",
        includes: [
          "Logo design",
          "Colour palettes",
          "Typography systems",
          "Brand guidelines",
          "Visual identity systems",
          "Icon sets",
        ],
      },
      {
        num: "06",
        title: "Visual Systems & Marketing Assets",
        want: "Cohesive visuals across every touchpoint.",
        includes: [
          "Social media assets",
          "Marketing graphics",
          "Presentation design",
          "Visual frameworks",
        ],
      },
      {
        num: "07",
        title: "Illustration Systems",
        want: "A cohesive, ownable illustration language.",
        includes: [
          "Custom illustrations",
          "Illustration guidelines",
          "Spot illustrations",
          "Scene systems",
        ],
      },
      {
        num: "08",
        title: "Iconography Sets",
        want: "Consistent, thin-line icon families.",
        includes: [
          "Custom icon sets",
          "Line icons",
          "Icon guidelines",
          "Scalable SVGs",
        ],
      },
      {
        num: "09",
        title: "3D & Motion Graphics",
        want: "Depth and motion that elevate the brand.",
        includes: [
          "3D visuals",
          "Animated graphics",
          "Product renders",
          "Motion loops",
        ],
      },
    ],
  },
  {
    id: "product-experience",
    title: "Product & Experience Design",
    blurb: "Interfaces and systems engineered around real users.",
    services: [
      {
        num: "10",
        title: "UI/UX Design",
        want: "Clean interfaces, easy navigation, and a professional user experience.",
        includes: [
          "Wireframes",
          "High-fidelity UI",
          "Component systems",
          "User flows",
          "Interaction design",
        ],
      },
      {
        num: "11",
        title: "Product Design (Digital)",
        want: "Full product thinking, from research to prototype.",
        includes: [
          "UX research",
          "Product mapping",
          "Feature planning",
          "Prototype development",
        ],
      },
      {
        num: "12",
        title: "Design Systems & Component Libraries",
        want: "Scalable design that stays consistent as the product grows.",
        includes: [
          "Component sets",
          "UI kits",
          "Token systems",
          "Grid systems",
          "Reusable patterns",
        ],
      },
      {
        num: "13",
        title: "Motion & Interaction Design",
        want: "A subtle, premium feel through considered motion.",
        includes: [
          "Micro-interactions",
          "Smooth transitions",
          "Scroll animations",
          "Hover states",
        ],
      },
    ],
  },
  {
    id: "content-strategy",
    title: "Content & Strategy",
    blurb: "Clear communication and confident digital direction.",
    services: [
      {
        num: "14",
        title: "Content Creation & Structured Documentation",
        want: "Professional copy, structured documents, and clear communication.",
        includes: [
          "Website copywriting",
          "Service descriptions",
          "Product documentation",
          "Reports",
          "Manuals",
          "Digital content assets",
        ],
      },
      {
        num: "15",
        title: "Digital Strategy & Consultation",
        want: "Direction on what to build, how to build it, and how to present it.",
        includes: [
          "Project planning",
          "UX strategy",
          "Brand strategy",
          "Content strategy",
          "Digital transformation guidance",
        ],
      },
    ],
  },
  {
    id: "growth-performance-compliance",
    title: "Growth, Performance & Compliance",
    blurb: "Visibility, speed, insight, and inclusive, compliant builds.",
    services: [
      {
        num: "16",
        title: "SEO-Ready Structure & Performance Optimisation",
        want: "Visibility and speed — built in from the structure up.",
        includes: [
          "Clean semantic structure",
          "Fast load times",
          "Accessibility improvements",
          "Core Web Vitals optimisation",
        ],
      },
      {
        num: "17",
        title: "Analytics & Behaviour Tracking",
        want: "Insight into how users behave and convert.",
        includes: [
          "Heatmaps",
          "User behaviour tracking",
          "Conversion funnels",
          "Analytics dashboards",
        ],
      },
      {
        num: "18",
        title: "Conversion Optimisation",
        want: "Turning attention into action.",
        includes: [
          "A/B testing",
          "Funnel optimisation",
          "Landing page CRO",
          "Conversion tracking",
        ],
      },
      {
        num: "19",
        title: "Design Audits",
        want: "A clear read on what's working and what isn't.",
        includes: [
          "UX audit",
          "Visual audit",
          "Accessibility audit",
          "Recommendations report",
        ],
      },
      {
        num: "20",
        title: "Accessibility & Compliance",
        want: "Inclusive, compliant experiences by default.",
        includes: [
          "WCAG compliance",
          "Accessible UI",
          "Keyboard navigation",
          "Colour contrast systems",
        ],
      },
    ],
  },
];

const ALL_SERVICES = CATEGORIES.flatMap((c) => c.services);

// Popularity ranking (most popular first). Used to surface a "Most Popular"
// quick-access strip and to badge top services within the categories.
const POPULARITY = [
  "Website Design & Development",
  "Branding & Identity Systems",
  "UI/UX Design",
  "Content Creation & Structured Documentation",
  "Digital Strategy & Consultation",
  "Design Systems & Component Libraries",
  "Motion & Interaction Design",
  "SEO-Ready Structure & Performance Optimisation",
  "Multi-Language Website Architecture",
  "Analytics & Behaviour Tracking",
  "Custom Web Applications",
  "Automation & Workflow Tools",
  "Product Design (Digital)",
  "Visual Systems & Marketing Assets",
  "Accessibility & Compliance",
  "3D & Motion Graphics",
  "Illustration Systems",
  "Iconography Sets",
  "Design Audits",
  "Conversion Optimisation",
];

// Number of top-ranked services treated as "Most Popular".
const POPULAR_COUNT = 6;

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const rankOf = (title) => {
  const index = POPULARITY.indexOf(title);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index + 1;
};

const isPopular = (title) => rankOf(title) <= POPULAR_COUNT;

// Top services in popularity order, with anchor slugs, for the quick-access strip.
const MOST_POPULAR = ALL_SERVICES.map((s) => ({
  title: s.title,
  slug: slugify(s.title),
  rank: rankOf(s.title),
}))
  .filter((s) => s.rank <= POPULAR_COUNT)
  .sort((a, b) => a.rank - b.rank);

// Service structured data (JSON-LD) to help search engines index the offering.
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DPMF Design & Development — Services",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: ALL_SERVICES.length,
  itemListElement: ALL_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.want,
      serviceType: s.title,
      provider: {
        "@type": "Organization",
        name: "DPMF Design & Development",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="page-top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Services</p>
          <h1>Engineered from strategy to ship.</h1>
          <p className="lead">
            A complete, premium service offering across the full lifecycle of a
            digital product — organised so you can find exactly what you need.
          </p>
        </header>

        {/* Most Popular quick-access strip (ranked, deep-linked) */}
        <section className={styles.popular} aria-label="Most popular services">
          <span className={styles.navLabel}>Most popular</span>
          <ol className={styles.popularList}>
            {MOST_POPULAR.map((s) => (
              <li key={s.slug}>
                <Link href={`#${s.slug}`} className={styles.popularLink}>
                  <span className={styles.popularRank}>
                    {String(s.rank).padStart(2, "0")}
                  </span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Browse-by-category nav with anchor deep-links */}
        <nav className={styles.nav} aria-label="Browse services by category">
          <span className={styles.navLabel}>Browse</span>
          <ul className={styles.navList}>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link href={`#${c.id}`} className={styles.navLink}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {CATEGORIES.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`section container ${styles.category}`}
          aria-labelledby={`${category.id}-heading`}
        >
          <header className={styles.categoryHead}>
            <h2 id={`${category.id}-heading`} className={styles.categoryTitle}>
              {category.title}
            </h2>
            <p className={styles.categoryBlurb}>{category.blurb}</p>
          </header>

          <div className={styles.list}>
            {category.services.map((s) => (
              <article
                className={styles.service}
                id={slugify(s.title)}
                key={s.num}
              >
                <div className="grid">
                  <div className="col-5">
                    <div className={styles.serviceMeta}>
                      <span className={`eyebrow ${styles.num}`}>{s.num}</span>
                      {isPopular(s.title) && (
                        <span className={styles.badge}>Popular</span>
                      )}
                    </div>
                    <h3 className={styles.title}>{s.title}</h3>
                    <p className={styles.want}>{s.want}</p>
                  </div>
                  <div className="col-7">
                    <p className={styles.includesLabel}>Includes</p>
                    <ul className={styles.chips}>
                      {s.includes.map((item) => (
                        <li className={styles.chip} key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section container">
        <div className="grid">
          <div className="col-8 stack">
            <h2>Have a project in mind?</h2>
            <p className="text-muted">
              Tell us what you&apos;re building and we&apos;ll shape an engineered
              plan around it.
            </p>
          </div>
          <div className="col-4" style={{ display: "flex", alignItems: "center" }}>
            <a className="btn btn--primary" href="/contact">
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
