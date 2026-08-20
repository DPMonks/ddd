import styles from "./DeltaDivider.module.css";

/**
 * DeltaDivider — hollow white delta (Δ) used as a section divider.
 * Thin white stroke, minimal spacing, violet on hover.
 */
export default function DeltaDivider({ className = "" }) {
  return (
    <div className={`${styles.divider} ${className}`.trim()} aria-hidden="true">
      <span className={styles.rule} />
      <svg
        className={styles.delta}
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <polygon points="12,3 21,20 3,20" />
      </svg>
      <span className={styles.rule} />
    </div>
  );
}
