import Card from "@/components/Card";
import DeltaDivider from "@/components/DeltaDivider";

export const metadata = {
  title: "Portfolio · DPMF Design & Development",
  description: "Selected engineered design and development work.",
};

const PROJECTS = [
  {
    eyebrow: "Brand & Web",
    title: "Meridian",
    body: "Identity system and marketing site for a precision engineering studio.",
  },
  {
    eyebrow: "Product Design",
    title: "Halo UI",
    body: "End-to-end product interface for a data platform, built on an 8px baseline.",
  },
  {
    eyebrow: "Branding",
    title: "Northpoint",
    body: "Minimal dark-tech identity and documentation system for a developer tool.",
  },
  {
    eyebrow: "Web App",
    title: "Cadence",
    body: "Engineered dashboard front-end with a componentised, reusable design language.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-top">
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Portfolio</p>
          <h1>Selected work.</h1>
          <p className="lead">
            A sample of engineered, minimal digital products — each built as a
            clean, reusable system.
          </p>
        </header>
      </section>

      <section className="section container">
        <div className="grid">
          {PROJECTS.map((p) => (
            <div className="col-6" key={p.title}>
              <Card
                eyebrow={p.eyebrow}
                title={p.title}
                action={{ label: "View Project", href: "/contact" }}
              >
                <p>{p.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <DeltaDivider />
      </div>

      <section className="section container">
        <div className="page-head">
          <h2>Your project could be next.</h2>
          <p className="text-muted">
            Let&apos;s build something engineered and intentional.
          </p>
        </div>
        <a className="btn btn--primary" href="/contact">
          Start a Project
        </a>
      </section>
    </main>
  );
}
