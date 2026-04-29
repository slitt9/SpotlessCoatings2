import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site-content";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlesscoatings.ca"),
  title: {
    default: `${SITE.name} | Premium Epoxy & Polyaspartic Floors | Vancouver`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Spotless Coatings installs premium epoxy and polyaspartic floor coatings across Greater Vancouver — metallic, flake, and hybrid systems for garages, shops, and homes.",
  keywords: [
    "epoxy flooring Vancouver",
    "polyaspartic garage floor",
    "metallic epoxy",
    "flake floor coating",
    "Spotless Coatings",
  ],
  openGraph: {
    title: `${SITE.name} — Premium floor coatings`,
    description: SITE.tagline,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} min-h-svh bg-[#0a0a0a] font-[family-name:var(--font-body)] text-zinc-100 antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
