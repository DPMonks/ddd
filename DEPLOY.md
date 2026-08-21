# Deploying to `design.dpmf.technology`

This site is a Next.js (App Router) app. The recommended free hosting is
**Vercel** (built by the Next.js team — zero config), reached via the subdomain
`design.dpmf.technology` on your existing `dpmf.technology` domain.

DNS for `dpmf.technology` is managed by **Wix** (nameservers `ns6/ns7.wixdns.net`),
and email runs on Google Workspace (MX → `aspmx.l.google.com`). **Do not change
the nameservers** — you only add one subdomain record, leaving the existing site
and email untouched.

## 1. Deploy the app (Vercel, free Hobby plan)

1. Push this branch / merge to `main` (the repo is `DPMonks/ddd`).
2. Go to https://vercel.com, sign in with GitHub, and **Add New… → Project**.
3. Import the `DPMonks/ddd` repository and click **Deploy** (no settings needed).
4. You immediately get a working URL like `ddd.vercel.app` with free HTTPS.

## 2. Add the custom subdomain in Vercel

1. In the Vercel project: **Settings → Domains → Add**.
2. Enter `design.dpmf.technology`.
3. Vercel shows a DNS record to create — typically:
   - Type: `CNAME`
   - Name/Host: `design`
   - Value/Target: `cname.vercel-dns.com` (use the exact value Vercel displays)

## 3. Create the record in Wix

1. Open https://www.wix.com/account/domains and click **`dpmf.technology`**.
2. Go to **Advanced → Edit DNS** (a.k.a. "Manage DNS Records").
3. Under **CNAME**, click **Add Record**:
   - **Host / Name:** `design`
   - **Value / Points to:** `cname.vercel-dns.com` (the target from step 2)
   - **TTL:** default
4. **Save.**

   Alternatively, use Wix's guided **"Add a Subdomain → Point your subdomain to
   an external server"** flow, which creates the same record.

## 4. Verify

Propagation takes ~10–60 minutes; Vercel auto-issues HTTPS once it sees the
record. Check from any terminal:

```bash
dig +short design.dpmf.technology
```

When it resolves to the Vercel target, the site is live at
`https://design.dpmf.technology`.

## 5. Environment variable

Set the canonical URL so metadata, `sitemap.xml`, and `robots.txt` match:

```
NEXT_PUBLIC_SITE_URL=https://design.dpmf.technology
```

In Vercel: **Settings → Environment Variables** → add `NEXT_PUBLIC_SITE_URL`.
(The code already defaults to this value; setting the env var makes it explicit
and lets you override it for preview/staging deployments.)

## Notes

- Keep **one canonical** subdomain. If you later add aliases (e.g.
  `dd.dpmf.technology`), configure them to **redirect** to
  `design.dpmf.technology` so search engines don't index duplicates.
- Do not switch `dpmf.technology`'s nameservers away from Wix — it would break
  the existing site and Google-hosted email.
