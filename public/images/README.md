# Image assets — `DPMF-<what-it-is>` naming

Real images that replace the on-site placeholders live here and are served from
`/images/<file>`. Every image slot in the UI already declares the exact base
name it expects (shown inside the placeholder and in its `data-filename`), using
the studio convention below — **no AI-generator names or tags**.

## Naming rules

- Prefix every file with `DPMF-`.
- Describe *what it is* in kebab-case (lowercase, hyphen-separated).
- No spaces, no generator tags (no `ai`, `midjourney`, `dalle`, `sdxl`, random
  hashes, etc.).
- Prefer `.webp` (fallback `.jpg`/`.png`).

Example: `DPMF-meridian-brand-web.webp`

## Expected files

| File (base name)                 | Used on            | Ratio |
| -------------------------------- | ------------------ | ----- |
| `DPMF-meridian-brand-web`        | Home, Portfolio    | 16:9  |
| `DPMF-halo-ui-product-design`    | Home, Portfolio    | 16:9  |
| `DPMF-northpoint-branding`       | Portfolio          | 16:9  |
| `DPMF-cadence-web-app`           | Portfolio          | 16:9  |
| `DPMF-founder-studio-portrait`   | About              | 3:2   |

Drop `DPMF-meridian-brand-web.webp` (etc.) into this folder; then swap the
`ImagePlaceholder` for `next/image` pointing at `/images/<file>`.

## Strip AI / EXIF metadata (remove any AI tags)

AI tools can embed provenance/EXIF/XMP/C2PA tags. Strip them before committing:

```bash
# ImageMagick — removes all metadata while re-encoding
mogrify -strip public/images/DPMF-*.webp

# or exiftool — wipe every tag in place
exiftool -all= -overwrite_original public/images/DPMF-*.{webp,jpg,png}
```

Re-encoding (e.g. `cwebp input.png -o DPMF-name.webp`) also drops embedded
provenance. Verify with `exiftool DPMF-name.webp` — the output should show no
`AI`, `Software`, or C2PA/`jumbf` entries.
