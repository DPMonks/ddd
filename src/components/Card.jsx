import Link from "next/link";
import styles from "./Card.module.css";

/**
 * Card — reusable dark-tech surface.
 * Grey border, black surface, rounded corners, subtle violet border on hover.
 *
 * Props:
 *  - title:       heading text
 *  - eyebrow:     optional small uppercase label
 *  - children:    body content (description, etc.)
 *  - action:      optional { label, href } rendered as a ghost button
 *  - as:          optional wrapper element/tag (defaults to <article>)
 */
export default function Card({
  title,
  eyebrow,
  children,
  action,
  className = "",
}) {
  return (
    <article className={`${styles.card} ${className}`.trim()}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {children && <div className={styles.body}>{children}</div>}
      {action && (
        <Link href={action.href} className={`btn btn--ghost ${styles.action}`}>
          {action.label}
        </Link>
      )}
    </article>
  );
}
