import styles from "./ImagePlaceholder.module.css";

/**
 * ImagePlaceholder — a professional, on-brand stand-in for real imagery
 * (project shots, renders, photos) until final assets are supplied.
 *
 * Props:
 *  - ratio:  aspect ratio, e.g. "16 / 9" (default), "4 / 3", "1 / 1", "4 / 5"
 *  - label:  short caption shown under the icon (e.g. "Project image")
 *  - eyebrow: tiny uppercase kicker (e.g. "16:9")
 *  - className
 */
export default function ImagePlaceholder({
  ratio = "16 / 9",
  label = "Image placeholder",
  eyebrow,
  className = "",
}) {
  return (
    <div
      className={`${styles.frame} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div className={styles.inner}>
        <svg
          className={styles.icon}
          viewBox="0 0 48 48"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="6" y="9" width="36" height="30" rx="3" />
          <circle cx="17" cy="20" r="3.5" />
          <path d="M42 33 32 24 18 38" />
          <path d="M6 39 15 30l6 5" />
        </svg>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
