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

## Vercel

The Next.js app lives in **`web/`** (next to `assets/` and `flakes/`).

**Recommended (simplest):** Vercel **Root Directory** = **`web`**. Framework **Next.js** (auto). Clear any custom **Output Directory** (must **not** be `public` for Next). Install/build can stay default.

**If Root Directory stays empty (`./`):** The repo root **`vercel.json`** runs install/build against **`web/`** via `npm install --prefix web` and `npm run build --prefix web`. Still set framework to **Next.js** if the UI offers it, and **do not** set Output Directory to `public`.

The **LF/CRLF** lines from `git add` on Windows are normal line-ending hints, not errors.

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
