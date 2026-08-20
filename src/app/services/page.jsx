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
  {
    num: "06",
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
    num: "07",
    title: "Motion & Interaction Design",
    want: "A subtle, premium feel through considered motion.",
    includes: [
      "Micro-interactions",
      "Smooth transitions",
      "Scroll animations",
      "Hover states",
    ],
  },
  {
    num: "08",
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
    num: "09",
    title: "Multi-Language Website Architecture",
    want: "Global reach with clean, maintainable localisation.",
    includes: ["i18n setup", "Multi-locale routing", "Language switching"],
  },
  {
    num: "10",
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
    num: "11",
    title: "Custom Web Applications",
    want: "Tools, not just websites — bespoke systems that do real work.",
    includes: ["Dashboards", "Portals", "Internal tools", "Client systems"],
  },
  {
    num: "12",
    title: "Automation & Workflow Tools",
    want: "Efficiency through automated, reliable workflows.",
    includes: [
      "Automated content flows",
      "Scheduling systems",
      "Operational tools",
    ],
  },
  {
    num: "13",
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
    num: "14",
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
    num: "15",
    title: "Accessibility & Compliance",
    want: "Inclusive, compliant experiences by default.",
    includes: [
      "WCAG compliance",
      "Accessible UI",
      "Keyboard navigation",
      "Colour contrast systems",
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
