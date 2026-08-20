# DPMF Design & Development

Marketing site for **DPMF Design & Development** — a dark-tech digital design
service (web design, branding, UI/UX, content and strategy).

Built with [Next.js](https://nextjs.org/) (App Router) and React.

## Brand system

- **Colours:** Black `#000000`, White `#FFFFFF`, Violet `#9B4DFF`, Grey `#CFCFCF`
- **Type:** Poppins (body) / Montserrat (headings) / Orbitron (display) — weights 400 / 600 / 700
- **Aesthetic:** dark-tech, minimal, engineered, smooth transitions, clean spacing
- **Grid:** 12 columns · 80px columns · 24px gutters · 60px margins · 8px baseline
- **Divider:** hollow white delta (Δ)

Brand tokens live in [`src/styles/variables.css`](src/styles/variables.css).

## Project structure (root-clean)

```
src/
  app/          Next.js App Router pages + layout
  components/   Reusable UI (LogoPlaceholder, Header, DeltaDivider)
  styles/       variables.css, globals.css, grid.css
```

No nested duplicates, no `/src/src`, no `/app/app`.

## Requirements

- Node.js >= 20

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server → http://localhost:3000
```

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the Next.js dev server       |
| `npm run build` | Production build                   |
| `npm start`     | Serve the production build         |
| `npm run lint`  | Lint with `eslint-config-next`     |

## Components

- **`LogoPlaceholder`** — locked 6:1 horizontal logo placeholder (grey fill,
  violet border, 12px radius, no text/symbol). Sizes: `large` (1800×300),
  `medium` (1500×250), `small` (900×150).
- **`Header`** — logo placeholder + primary navigation, dark-tech styling.
- **`DeltaDivider`** — hollow white Δ section divider.

## Cloud Agent environment

Configured in [`.cursor/environment.json`](.cursor/environment.json): `npm ci`
installs dependencies and a `dev-server` terminal runs `npm run dev` on port
`3000`.
