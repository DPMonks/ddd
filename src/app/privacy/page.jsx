export const metadata = {
  title: "Privacy",
  description: "Privacy policy for DPMF Design & Development.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page-top">
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Legal</p>
          <h1>Privacy.</h1>
          <p className="lead">
            We collect only what we need to respond to enquiries and deliver work,
            and we never sell your data.
          </p>
        </header>
        <div className="stack" style={{ maxWidth: "65ch" }}>
          <p className="text-muted">
            Information you send through our contact form (name, email, and project
            details) is used solely to reply and scope potential work.
          </p>
          <p className="text-muted">
            To request access to or deletion of your information, contact{" "}
            <a href="mailto:studio@dpmf.design">studio@dpmf.design</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
