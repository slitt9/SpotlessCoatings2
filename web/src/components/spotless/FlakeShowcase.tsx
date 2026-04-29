import Image from "next/image";
import { flakeOptions } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function FlakeShowcase() {
  return (
    <section
      id="flakes"
      className="relative border-t border-white/5 bg-neutral-950/70 py-24 backdrop-blur-sm sm:py-28"
      aria-labelledby="flakes-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Flake &amp; color options
          </p>
          <h2
            id="flakes-heading"
            className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Designer blends — each chip tells a story.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Premium broadcast blends for depth, grip, and a finish tailored to your space.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {flakeOptions.map((flake, i) => (
            <Reveal key={flake.file} delay={(i % 5) * 0.04}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-lg ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-white/25 hover:shadow-2xl">
                <div className="relative aspect-square">
                  <Image
                    src={`/images/flakes/${flake.file}`}
                    alt={`${flake.label} decorative flake blend sample`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-sm font-semibold text-white">{flake.label}</h3>
                    <p className="mt-0.5 text-[11px] text-zinc-400">{flake.tone}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
