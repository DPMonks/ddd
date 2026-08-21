import ContactForm from "@/components/ContactForm";
import DeltaDivider from "@/components/DeltaDivider";

export const metadata = {
  title: "Contact",
  description: "Start a project with DPMF Design & Development.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="page-top">
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Contact</p>
          <h1>Start a project.</h1>
          <p className="lead">
            Tell us what you&apos;re building. We&apos;ll reply with an engineered
            plan and next steps.
          </p>
        </header>
      </section>

      <section className="section container">
        <div className="grid">
          <div className="col-7">
            <ContactForm />
          </div>

          <div className="col-5 stack">
            <div className="stack">
              <p className="eyebrow">Direct</p>
              <h2>Get in touch.</h2>
            </div>
            <div className="stack">
              <p className="text-muted">
                Email
                <br />
                <a href="mailto:aarathi@dpmf.technology">
                  aarathi@dpmf.technology
                </a>
              </p>
            </div>

            <DeltaDivider />

            <p className="text-muted">
              Premium digital design &amp; development. Dark-tech, minimal,
              engineered.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
