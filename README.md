# ddd

A minimal full-stack **Notes** app used to demonstrate a working Cloud Agent
development environment. It has no external dependencies (no database) — notes
are held in memory — so it runs anywhere out of the box.

## Stack

- **Backend:** Node.js + [Express](https://expressjs.com/) REST API
- **Frontend:** static HTML/CSS/JS served by Express
- **Tests:** [Jest](https://jestjs.io/) + [SuperTest](https://github.com/ladjs/supertest)
- **Lint:** [ESLint](https://eslint.org/) (flat config)

## Requirements

- Node.js >= 20

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server with auto-reload (http://localhost:3000)
```

Then open http://localhost:3000 and add a note.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Start the server (production style)          |
| `npm run dev`   | Start the server with `--watch` auto-reload  |
| `npm test`      | Run the Jest test suite                      |
| `npm run lint`  | Lint the codebase with ESLint                |

## API

| Method   | Path              | Description              |
| -------- | ----------------- | ------------------------ |
| `GET`    | `/api/health`     | Health check             |
| `GET`    | `/api/notes`      | List notes               |
| `POST`   | `/api/notes`      | Create a note (`{text}`) |
| `PATCH`  | `/api/notes/:id`  | Update `text` / `done`   |
| `DELETE` | `/api/notes/:id`  | Delete a note            |

## Configuration

- `PORT` — server port (default `3000`)
- `HOST` — bind host (default `0.0.0.0`)

## Cloud Agent environment

The Cloud Agent development environment is configured in
[`.cursor/environment.json`](.cursor/environment.json): `npm ci` installs
dependencies, and a `dev-server` terminal runs `npm run dev` on port `3000`.
