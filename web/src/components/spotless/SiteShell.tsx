"use client";

import { ContactSection } from "./ContactSection";
import { FloatingCall } from "./FloatingCall";
import { FlakeShowcase } from "./FlakeShowcase";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { OfferingsSection } from "./OfferingsSection";
import { ProcessSection } from "./ProcessSection";

export function SiteShell() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <ProcessSection />
        <OfferingsSection />
        <Gallery />
        <FlakeShowcase />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
