import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_EMAIL, absoluteUrl } from "@/lib/site";
import styles from "./team.module.css";

export const metadata = {
  title: "Team",
  description:
    "Meet the DPMF Design & Development team — the designers, developers and strategists behind our engineered, dark-tech digital work.",
  keywords: [
    "design team",
    "development team",
    "digital studio team",
    "meet the team",
  ],
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | DPMF Design & Development",
    description:
      "Meet the designers, developers and strategists behind DPMF Design & Development.",
    url: "/team",
    type: "website",
  },
};

// Team members. These are placeholders — swap `name`, `bio`, `image` and
// `links` as real people join. Duplicate a card to add a member.
const TEAM = [
  {
    name: "Full Name",
    role: "Founder & Creative Director",
    image: "DPMF-team-founder",
    bio: "Sets the studio's direction and craft — pairing design taste with engineering rigour on every build.",
    links: { linkedin: "#", x: "#", dribbble: "#", email: SITE_EMAIL },
  },
  {
    name: "Full Name",
    role: "Lead Developer",
    image: "DPMF-team-lead-developer",
    bio: "Owns the front-end architecture — fast, accessible, componentised builds engineered to last.",
    links: { linkedin: "#", x: "#", email: SITE_EMAIL },
  },
  {
    name: "Full Name",
    role: "UI/UX Designer",
    image: "DPMF-team-ux-designer",
    bio: "Designs clean, intentional interfaces on a strict grid — from wireframe to high-fidelity system.",
    links: { linkedin: "#", dribbble: "#", email: SITE_EMAIL },
  },
  {
    name: "Full Name",
    role: "Brand & Motion Designer",
    image: "DPMF-team-brand-motion",
    bio: "Crafts identity systems, motion and 3D that give each brand a premium, ownable feel.",
    links: { linkedin: "#", x: "#", dribbble: "#", email: SITE_EMAIL },
  },
];

// Duplicate placeholders — ready to become new team members.
const OPEN_ROLES = [
  { role: "Open position", image: "DPMF-team-placeholder-01" },
  { role: "Open position", image: "DPMF-team-placeholder-02" },
];

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} — Team`,
  numberOfItems: TEAM.length,
  itemListElement: TEAM.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
      worksFor: { "@id": absoluteUrl("/#organization") },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    {
      "@type": "ListItem",
      position: 2,
      name: "Team",
      item: absoluteUrl("/team"),
    },
  ],
};

export default function TeamPage() {
  return (
    <main className="page-top">
      <JsonLd data={[teamJsonLd, breadcrumbJsonLd]} />

      <section className="container">
        <header className="page-head">
          <p className="eyebrow">Team</p>
          <h1>The people behind the work.</h1>
          <p className="lead">
            A small, senior team of designers, developers and strategists —
            engineering premium digital experiences end to end.
          </p>
        </header>
      </section>

      <section className="section container">
        <div className="grid">
          {TEAM.map((member, i) => (
            <div className="col-3" key={`${member.role}-${i}`}>
              <Reveal className={styles.member} delay={i * 80}>
                <div className={styles.face}>
                  <ImagePlaceholder
                    ratio="4 / 5"
                    eyebrow="Team"
                    name={member.image}
                  />
                </div>
                <h2 className={styles.name}>{member.name}</h2>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
                <SocialLinks links={member.links} name={member.role} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <header className="page-head">
          <p className="eyebrow">We&apos;re growing</p>
          <h2>Open roles.</h2>
          <p className="lead">
            Duplicate, ready-to-fill slots — the studio is expanding. Think
            you&apos;re a fit?
          </p>
        </header>

        <div className="grid">
          {OPEN_ROLES.map((role, i) => (
            <div className="col-3" key={`open-${i}`}>
              <Reveal className={`${styles.member} ${styles.open}`} delay={i * 80}>
                <div className={styles.face}>
                  <ImagePlaceholder
                    ratio="4 / 5"
                    eyebrow="Open"
                    name={role.image}
                  />
                </div>
                <h3 className={styles.name}>Your name here</h3>
                <p className={styles.role}>{role.role}</p>
                <p className={styles.bio}>
                  A duplicate placeholder — replace with a new team member.
                </p>
                <Link className="btn btn--ghost" href="/contact">
                  Get in touch
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
