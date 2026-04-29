# Spotless Coatings — Marketing Site

Premium single-page marketing site for **Spotless Coatings** (epoxy & polyaspartic floor coatings). Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Project structure

```
web/
├── public/
│   ├── images/
│   │   ├── flakes/          # Decorative flake PNGs (from repo /flakes)
│   │   ├── gallery/         # Before/after + metallic hero (from /assets/pics)
│   │   ├── logo/            # spotless-logo.jpg
│   │   └── instagram.png
│   └── video/
│       └── spotless-broll.mp4
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind + theme tokens
│   │   ├── layout.tsx       # Fonts (Syne + DM Sans), SEO metadata, JSON-LD
│   │   └── page.tsx         # Home (renders SiteShell)
│   ├── components/
│   │   ├── JsonLd.tsx       # schema.org LocalBusiness-style data
│   │   └── spotless/
│   │       ├── SiteShell.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── ProcessSection.tsx
│   │       ├── OfferingsSection.tsx
│   │       ├── Gallery.tsx
│   │       ├── BeforeAfterSlider.tsx
│   │       ├── FlakeShowcase.tsx
│   │       ├── ContactSection.tsx
│   │       ├── Footer.tsx
│   │       └── FloatingCall.tsx
│   └── lib/
│       └── site-content.ts  # Copy, phone, gallery entries, flakes list
├── next.config.ts           # Next.js config
└── package.json
```

## Setup

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form

The quote form submits to `POST /api/contact` and sends mail through SMTP.

For local development, copy `.env.example` to `.env.local` and fill in a valid SMTP account.

For Vercel, add these Environment Variables in the project settings for the `web` app:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

If you use Gmail, `SMTP_USER` is the Gmail address and `SMTP_PASS` must be a Google App Password, not the normal account password.

## Vercel

Your GitHub repo has **two sibling folders** at the top level: **`web`** (the Next.js site) and **`assets` / `flakes`** (source media). **Only `web` is deployed to Vercel** — the rest is not part of the Node build. Think of **`web`** as “the actual website project,” not a second app.

**Use exactly this in Vercel (Project → Settings → General):**

1. **Root Directory:** type **`web`** and save. Vercel will then run every command **from inside that folder** (where `package.json` and `next.config.ts` live).
2. **Framework preset:** **Next.js** (or leave on Auto after step 1).
3. **Install Command / Build Command:** leave **empty** (defaults = `npm install` and `npm run build` in `web`).  
   **Do not** set `cd web && …` here — that only makes sense when the root is the **repo** folder. If Root is already **`web`**, then `cd web` tries to open a folder that does not exist → **build exits with 1**.
4. **Output Directory:** leave **empty** (not `public`).

This site is one route `/` with section hashes; **`src/middleware.ts`** redirects paths like `/services` → `/#services` for direct links.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Development server       |
| `npm run build` | Production build       |
| `npm run start` | Serve production build |
| `npm run lint`  | ESLint                   |

## Content & assets

- **Global copy, phone, Instagram, gallery list, flake labels:** edit `src/lib/site-content.ts`.
- **Gallery before/after pairs:** paths in `galleryItems` under `public/images/gallery/`.
- **Flake images:** add or replace PNGs in `public/images/flakes/` and update the `flakeOptions` array in `site-content.ts`.
- **Logo:** replace `public/images/logo/spotless-logo.jpg`.
- **Hero video:** replace `public/video/spotless-broll.mp4` (optional; poster is the metallic still).

## SEO

Metadata lives in `src/app/layout.tsx`. Update `metadataBase` to your real domain when deployed. JSON-LD is in `src/components/JsonLd.tsx`.

## Deployment

Compatible with Vercel, Netlify, or any Node host. Set the production URL in `metadataBase` for correct Open Graph URLs.
