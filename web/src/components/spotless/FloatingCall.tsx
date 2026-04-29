"use client";

import { SITE } from "@/lib/site-content";

export function FloatingCall() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition hover:bg-zinc-100 md:bottom-6 md:right-6"
      aria-label={`Call now ${SITE.phoneDisplay}`}
    >
      <span className="hidden sm:inline">Call now</span>
      <span className="tabular-nums sm:hidden">Call</span>
      <span className="tabular-nums">{SITE.phoneDisplay}</span>
    </a>
  );
}
