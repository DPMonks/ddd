import Link from "next/link";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import DeltaDivider from "@/components/DeltaDivider";
import Card from "@/components/Card";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import styles from "./page.module.css";

const PILLARS = [
  {
    eyebrow: "01",
    title: "Design",
    body: "Clean UI, branding, and identity systems built on a strict grid with intentional spacing.",
  },
  {
    eyebrow: "02",
    title: "Development",
    body: "Engineered front-ends — fast, accessible, and maintainable, with zero clutter.",
  },
  {
    eyebrow: "03",
    title: "Strategy",
    body: "Content flow and digital direction that keep every screen purposeful and on-brand.",
  },
];

const WORK = [
  {
    eyebrow: "Case Study",
    title: "Meridian — Brand & Web",
    image: "DPMF-meridian-brand-web",
    body: "A dark-tech identity system and marketing site for a precision engineering studio.",
  },
  {
    eyebrow: "Case Study",
    title: "Halo UI — Product Design",
    image: "DPMF-halo-ui-product-design",
    body: "An end-to-end product interface designed on an 8px baseline for a data platform.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">Digital Design Services</p>
            <h1 className={styles.title}>
              Design <span className={styles.accent}>&amp;</span> Development
            </h1>
            <p className={styles.subline}>Dark-tech, minimal, engineered.</p>

            <div className={styles.actions}>
              <Link className="btn btn--primary" href="/services">
                Explore Services
              </Link>
              <Link className="btn btn--ghost" href="/contact">
                Start a Project
              </Link>
            </div>

            <div className={styles.logoWrap}>
              <LogoPlaceholder
                size="large"
                ariaLabel="DPMF Design & Development logo placeholder — 6:1 grey rectangle with a violet border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DELTA DIVIDER */}
      <div className="container">
        <DeltaDivider />
      </div>

      {/* SECTION 3 — THREE-PILLAR VALUE GRID */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {PILLARS.map((p) => (
              <div className="col-4" key={p.title}>
                <Card eyebrow={p.eyebrow} title={p.title}>
                  <p>{p.body}</p>
                </Card>
              </div>
            ))}
          </div>
          <p className={styles.sectionLink}>
            <Link href="/services">View all services →</Link>
          </p>
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK PREVIEW */}
      <section className="section">
        <div className="container">
          <header className={styles.sectionHead}>
            <p className="eyebrow">Selected Work</p>
            <h2>Featured Work</h2>
            <p className={styles.sectionLink}>
              <Link href="/portfolio">See the full portfolio →</Link>
            </p>
          </header>
          <div className="grid">
            {WORK.map((w) => (
              <div className="col-6" key={w.title}>
                <Card
                  eyebrow={w.eyebrow}
                  title={w.title}
                  media={
                    <ImagePlaceholder
                      ratio="16 / 9"
                      eyebrow="16:9"
                      name={w.image}
                    />
                  }
                  action={{ label: "View Project", href: "/portfolio" }}
                >
                  <p>{w.body}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — SECONDARY CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              Ready to build something engineered?
            </h2>
            <Link className="btn btn--primary" href="/contact">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
