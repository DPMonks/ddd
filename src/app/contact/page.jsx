import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import DeltaDivider from "@/components/DeltaDivider";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_EMAIL, absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with DPMF Design & Development. Tell us what you're building and get an engineered plan. Email aarathi@dpmf.technology.",
  keywords: [
    "contact design agency",
    "start a web project",
    "hire web developer",
    "hire UI/UX designer",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DPMF Design & Development",
    description:
      "Start a project with DPMF Design & Development. Tell us what you're building and get an engineered plan.",
    url: "/contact",
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE_NAME}`,
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    email: SITE_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "sales",
      availableLanguage: ["English"],
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: absoluteUrl("/contact"),
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="page-top">
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
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
              engineered. Explore our <Link href="/services">services</Link> or
              recent <Link href="/portfolio">work</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
