import Image from "next/image";
import { SITE } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-neutral-950/80 py-24 text-zinc-100 backdrop-blur-sm sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-50" />
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Get a quote
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Call, email, or message us
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            For pricing and scheduling, reach us by phone or email. Prefer social? Send a DM on
            Instagram and we will reply there too.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_50px_rgba(255,255,255,0.12)] transition hover:bg-zinc-200"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10"
            >
              <span className="relative h-5 w-5 shrink-0">
                <Image src="/images/instagram.png" alt="" fill className="object-contain invert" />
              </span>
              Instagram
            </a>
          </div>
          <p className="mt-10 text-xs text-zinc-500">{SITE.area}</p>
        </Reveal>
      </div>
    </section>
  );
}
