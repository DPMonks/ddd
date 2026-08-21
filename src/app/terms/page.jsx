export const metadata = {
  title: "Terms",
  description: "Terms of service for DPMF Design & Development.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page-top">
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Legal</p>
          <h1>Terms.</h1>
          <p className="lead">
            Engagements are defined per project in a written proposal. These terms
            summarise the basics.
          </p>
        </header>
        <div className="stack" style={{ maxWidth: "65ch" }}>
          <p className="text-muted">
            Scope, deliverables, timelines, and fees are agreed in a project
            proposal before work begins.
          </p>
          <p className="text-muted">
            Ownership of final deliverables transfers on full payment. This site
            and its placeholder content are for demonstration purposes.
          </p>
        </div>
      </section>
    </main>
  );
}
