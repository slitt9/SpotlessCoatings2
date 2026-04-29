import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

const sheenStrips = [
  { left: "7%", delayMs: 0, durationMs: 3200 },
  { left: "18%", delayMs: 450, durationMs: 4100 },
  { left: "30%", delayMs: 950, durationMs: 3600 },
  { left: "42%", delayMs: 180, durationMs: 4500 },
  { left: "54%", delayMs: 1200, durationMs: 3300 },
  { left: "66%", delayMs: 620, durationMs: 3900 },
  { left: "78%", delayMs: 220, durationMs: 4300 },
  { left: "90%", delayMs: 880, durationMs: 3500 },
] as const;

const variations = [
  {
    label: "Custom finishes",
    title: "Metallic & designer looks",
    lead: "Liquid depth, mirror gloss, and one-of-one artistry for garages, basements, and spaces that should feel like a showroom.",
    points: [
      "Swirling metallic epoxy with 3D movement and reflection",
      "Satin or high-gloss polyaspartic topcoats — tailored to your taste",
      "Designer flake blends when you want texture with a premium look",
    ],
    accent: "from-amber-500/30 to-transparent",
  },
  {
    label: "Performance systems",
    title: "Hybrid epoxy + polyaspartic",
    lead: "Industrial-grade protection with a refined finish — moisture-aware prep, mechanical bond, and a UV-stable topcoat suited to garages and shops.",
    points: [
      "UV stable, chemical resistant, hot tire pickup resistant",
      "Decorative flake broadcast for grip, camouflage, and easy cleaning",
      "Every install mechanically prepped — no shortcuts to adhesion",
    ],
    accent: "from-sky-500/25 to-transparent",
  },
] as const;

export function OfferingsSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/gallery/benefits-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/76 via-neutral-950/68 to-neutral-950/80" />
        <div className="absolute inset-0 bg-neutral-950/35" />
        <div className="absolute inset-0 overflow-hidden">
          {sheenStrips.map((s) => (
            <div
              key={s.left}
              className="benefits-sheen-strip absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              style={
                {
                  left: s.left,
                  ["--sheen-ms"]: `${s.durationMs}ms`,
                  ["--sheen-delay"]: `${s.delayMs}ms`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            What we install
          </p>
          <h2
            id="services-heading"
            className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Two ways we elevate your concrete.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Statement metallics or a hybrid flake system — same mechanical prep and
            polyaspartic seal every time, so the finish matches the way you use the space.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {variations.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/88 p-8 shadow-xl backdrop-blur-md sm:p-10">
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${v.accent} blur-3xl`}
                  aria-hidden
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  {v.label}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {v.lead}
                </p>
                <ul className="mt-8 space-y-3 border-t border-white/10 pt-8 text-sm text-zinc-300">
                  {v.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-amber-200/90" aria-hidden>
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
