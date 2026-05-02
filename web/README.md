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
