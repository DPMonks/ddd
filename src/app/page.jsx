import Header from "@/components/Header";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import DeltaDivider from "@/components/DeltaDivider";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <div className={styles.heroInner}>
              <p className="eyebrow">Digital Design Service</p>
              <h1 className={styles.title}>
                DPMF <span className={styles.accent}>Design &amp; Development</span>
              </h1>
              <p className={`text-muted ${styles.lede}`}>
                Dark-tech, minimal, engineered. We craft clean digital brands and
                interfaces — web design, branding, UI/UX, content and strategy.
              </p>

              <div className={styles.actions}>
                <a className="btn btn--primary" href="/services">
                  Explore Services
                </a>
                <a className="btn btn--ghost" href="/contact">
                  Start a Project
                </a>
              </div>

              <div className={styles.logoWrap}>
                <LogoPlaceholder size="large" />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <DeltaDivider />
        </div>

        <section className="section">
          <div className="container">
            <div className="grid">
              <div className="col-4">
                <h2 className={styles.cardTitle}>Design</h2>
                <p className="text-muted">
                  Brand systems and interfaces built on a strict grid with clean
                  spacing and smooth transitions.
                </p>
              </div>
              <div className="col-4">
                <h2 className={styles.cardTitle}>Development</h2>
                <p className="text-muted">
                  Engineered front-ends — fast, accessible, and maintainable, with
                  no clutter.
                </p>
              </div>
              <div className="col-4">
                <h2 className={styles.cardTitle}>Strategy</h2>
                <p className="text-muted">
                  Content and product strategy that keeps every screen purposeful
                  and on-brand.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
