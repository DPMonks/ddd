import styles from "./services.module.css";

export const metadata = {
  title: "Services · DPMF Design & Development",
  description:
    "Website design & development, branding & identity, UI/UX, content & documentation, and digital strategy.",
};

const SERVICES = [
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
];

export default function ServicesPage() {
  return (
    <main className="page-top">
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Services</p>
          <h1>Engineered from strategy to ship.</h1>
          <p className="lead">
            A focused set of services covering the full lifecycle of a premium
            digital product — design, development, and direction.
          </p>
        </header>
      </section>

      <section className="section container">
        <div className={styles.list}>
          {SERVICES.map((s) => (
            <article className={styles.service} key={s.num}>
              <div className="grid">
                <div className="col-5">
                  <p className={`eyebrow ${styles.num}`}>{s.num}</p>
                  <h2 className={styles.title}>{s.title}</h2>
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
