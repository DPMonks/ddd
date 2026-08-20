import Link from "next/link";
import styles from "./Footer.module.css";

const LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>DPMF Design &amp; Development © 2026</p>

        <nav className={styles.links} aria-label="Footer">
          {LINKS.map((item, i) => (
            <span key={item.href} className={styles.linkWrap}>
              {i > 0 && <span className={styles.sep} aria-hidden="true">|</span>}
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
