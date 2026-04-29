import Image from "next/image";
import { processSteps } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/gallery/metallic-hero.jpg"
          alt=""
          fill
          className="object-cover object-[center_32%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/65 to-neutral-950/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            The Spotless process
          </p>
          <h2
            id="process-heading"
            className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Prep, build, seal — one clear sequence.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Every slab gets the same adhesion-first discipline: mechanical prep, a
            finish layer that matches your space, then a polyaspartic seal so the gloss
            you see is the gloss you keep.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-6 sm:mt-16">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="relative flex gap-6 rounded-2xl border border-white/15 bg-zinc-950/80 p-6 shadow-lg backdrop-blur-md sm:gap-10 sm:p-8">
                <span
                  className="font-[family-name:var(--font-display)] text-3xl font-semibold tabular-nums text-zinc-500 sm:text-4xl"
                  aria-hidden
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
