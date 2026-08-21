import styles from "./SocialLinks.module.css";

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10.5" x2="7" y2="17" />
      <circle cx="7" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 17v-3.5a2 2 0 0 1 4 0V17" />
      <line x1="11" y1="10.5" x2="11" y2="17" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 4.5 19.5 19.5" />
      <path d="M19.5 4.5 4.5 19.5" />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M4 9c6 0 11 1.5 15 6" />
      <path d="M9 3.5C13 8 15 14 15.5 20" />
      <path d="M20.5 11c-6 0-10 1.5-13 5.5" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  ),
};

const LABELS = {
  linkedin: "LinkedIn",
  x: "X (Twitter)",
  dribbble: "Dribbble",
  email: "Email",
};

/**
 * SocialLinks — thin white line icons, violet on hover.
 * Pass `links` as { linkedin, x, dribbble, email }. Email is turned into a
 * mailto: automatically. Omitted keys are skipped.
 */
export default function SocialLinks({ links = {}, name = "" }) {
  const entries = Object.entries(links).filter(([, value]) => value);
  if (entries.length === 0) return null;

  return (
    <ul className={styles.list}>
      {entries.map(([key, value]) => {
        const href = key === "email" ? `mailto:${value}` : value;
        const label = `${LABELS[key] || key}${name ? ` — ${name}` : ""}`;
        return (
          <li key={key}>
            <a
              className={styles.link}
              href={href}
              aria-label={label}
              {...(key === "email"
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {ICONS[key]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
