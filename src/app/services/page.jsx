import Card from "@/components/Card";

export const metadata = {
  title: "Services · DPMF Design & Development",
  description:
    "Web design & development, branding, UI/UX, content, and digital strategy.",
};

const SERVICES = [
  {
    eyebrow: "01",
    title: "Web Design & Development",
    body: "Marketing sites and web apps, designed and engineered end-to-end on a clean, componentised stack.",
  },
  {
    eyebrow: "02",
    title: "Branding & Identity",
    body: "Dark-tech identity systems — logo direction, colour, type, and usage rules that scale.",
  },
  {
    eyebrow: "03",
    title: "UI/UX Design",
    body: "Interface systems built on an 8px baseline with intentional hierarchy and motion.",
  },
  {
    eyebrow: "04",
    title: "Content & Documentation",
    body: "Sharp copy and precise product documentation that keep the experience coherent.",
  },
  {
    eyebrow: "05",
    title: "Digital Strategy & Consultation",
    body: "Direction on architecture, roadmap, and craft to keep the build engineered and intentional.",
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
        <div className="grid">
          {SERVICES.map((s) => (
            <div className="col-4" key={s.title}>
              <Card eyebrow={s.eyebrow} title={s.title}>
                <p>{s.body}</p>
              </Card>
            </div>
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
