import styles from "./ImagePlaceholder.module.css";

/**
 * ImagePlaceholder — a professional, on-brand stand-in for real imagery
 * (project shots, renders, photos) until final assets are supplied.
 *
 * Props:
 *  - ratio:  aspect ratio, e.g. "16 / 9" (default), "4 / 3", "1 / 1", "4 / 5"
 *  - name:   asset base name using the DPMF-<what-it-is> convention
 *            (e.g. "DPMF-meridian-brand-web"). Shown as the slot's filename and
 *            used for the accessible label. Drop the matching file into
 *            /public/images/ named "<name>.webp" (or .jpg/.png) to replace it.
 *  - ext:    expected file extension for the real asset (default "webp")
 *  - label:  fallback caption when no name is given
 *  - eyebrow: tiny uppercase kicker (e.g. "16:9")
 *  - className
 */
export default function ImagePlaceholder({
  ratio = "16 / 9",
  name,
  ext = "webp",
  label = "Image placeholder",
  eyebrow,
  className = "",
}) {
  const fileName = name ? `${name}.${ext}` : null;

  return (
    <div
      className={`${styles.frame} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={name ? name.replace(/-/g, " ") : label}
      data-filename={fileName || undefined}
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
        {fileName ? (
          <span className={styles.fileName}>{fileName}</span>
        ) : (
          <span className={styles.label}>{label}</span>
        )}
      </div>
    </div>
  );
}
