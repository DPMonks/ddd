import Link from "next/link";
import DeltaDivider from "@/components/DeltaDivider";
import Card from "@/components/Card";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "DPMF Design & Development is a premium, engineered digital studio — dark-tech, minimal, systems-driven design & development. Meet the studio.",
  keywords: [
    "digital design studio",
    "web design agency",
    "engineered web development",
    "design and development studio",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | DPMF Design & Development",
    description:
      "A premium, engineered digital studio — dark-tech, minimal, systems-driven design & development.",
    url: "/about",
    type: "website",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: absoluteUrl("/about"),
  mainEntity: { "@id": absoluteUrl("/#organization") },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: absoluteUrl("/about"),
    },
  ],
};

const EXPERTISE = [
  {
    title: "Design",
    body: "Brand identity, UI systems, and interface design on a strict 12-column grid.",
  },
  {
    title: "Development",
    body: "Production-grade front-ends engineered for speed, accessibility, and clarity.",
  },
  {
    title: "Strategy",
    body: "Content architecture and digital direction that keep every decision intentional.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-top">
      <JsonLd data={[aboutJsonLd, breadcrumbJsonLd]} />
      <section className="container">
        <header className="page-head">
          <p className="eyebrow">About</p>
          <h1>Engineered digital experiences.</h1>
          <p className="lead">
            DPMF Design &amp; Development is a premium, independent studio building
            dark-tech digital products. We design and develop with precision —
            minimal, intentional, and grid-driven from the first pixel to the last.
          </p>
        </header>
      </section>

      <section className="section container">
        <div className="grid">
          <div className="col-6 stack">
            <p className="eyebrow">Mission</p>
            <h2>Precision over noise.</h2>
            <p className="text-muted">
              We remove everything unnecessary and engineer what remains. Our work
              is measured in rhythm, hierarchy, and restraint — high-end craft
              without clutter, gradients, or shadows.
            </p>
          </div>
          <div className="col-6 stack">
            <p className="eyebrow">Approach</p>
            <h2>Systems, not screens.</h2>
            <p className="text-muted">
              Every project is built as a reusable system: tokens, components, and
              a consistent brand language that scales cleanly across surfaces.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <DeltaDivider />
      </div>

      <section className="section container">
        <header className="page-head">
          <p className="eyebrow">Expertise</p>
          <h2>What we do.</h2>
        </header>
        <div className="grid">
          {EXPERTISE.map((e) => (
            <div className="col-4" key={e.title}>
              <Card title={e.title}>
                <p>{e.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="grid">
          <div className="col-5 stack">
            <p className="eyebrow">Founder</p>
            <h2>Built by an engineer-designer.</h2>
            <p className="text-muted">
              DPMF Design &amp; Development is led hands-on, pairing design taste
              with engineering rigour so the vision and the build never drift apart.
            </p>
            <div className="actions" style={{ display: "flex", gap: "16px" }}>
              <Link className="btn btn--ghost" href="/services">
                Our Services
              </Link>
              <Link className="btn btn--primary" href="/contact">
                Start a Project
              </Link>
            </div>
          </div>
          <div className="col-7">
            <ImagePlaceholder
              ratio="3 / 2"
              eyebrow="Studio"
              label="Founder / studio portrait"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
