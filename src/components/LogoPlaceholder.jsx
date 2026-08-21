import styles from "./LogoPlaceholder.module.css";

/**
 * LogoPlaceholder — locked brand placeholder for the DPMF logo.
 *
 * - Aspect ratio: 6 : 1 (horizontal)
 * - Fill: Grey (#CFCFCF)
 * - Border: Violet (#9B4DFF)
 * - Radius: 8–12px
 * - No text, no symbol, no icon
 *
 * Reference sizes (all 6:1):
 *   large  -> 1800 x 300
 *   medium -> 1500 x 250
 *   small  ->  900 x 150
 *
 * The box is fluid: it fills its container up to the reference max-width for the
 * chosen size while always preserving the 6:1 ratio.
 */
const MAX_WIDTHS = {
  large: 1800,
  medium: 1500,
  small: 900,
};

export default function LogoPlaceholder({
  size = "medium",
  className = "",
  ariaLabel = "DPMF Design & Development logo placeholder",
}) {
  const maxWidth = MAX_WIDTHS[size] ?? MAX_WIDTHS.medium;

  return (
    <div
      className={`${styles.logo} ${className}`.trim()}
      style={{ maxWidth: `${maxWidth}px` }}
      role="img"
      aria-label={ariaLabel}
      data-size={size}
    />
  );
}
