"use client";

import { useState } from "react";
import { galleryItems } from "@/lib/site-content";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState(galleryItems[0]?.id ?? "");

  const featured = galleryItems.find((g) => g.id === active) ?? galleryItems[0];

  return (
    <section
      id="gallery"
      className="relative border-t border-white/5 bg-neutral-950/70 py-24 backdrop-blur-sm sm:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">
            Portfolio
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Before &amp; after transformations
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Real projects from patios, staircases, and garages across the Lower Mainland.
            Use the slider to compare each installation.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {galleryItems.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active === g.id
                  ? "bg-white text-black"
                  : "border border-white/15 bg-white/5 text-zinc-300 hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={active === g.id}
            >
              {g.title}
            </button>
          ))}
        </div>

        {featured && (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <BeforeAfterSlider
                beforeSrc={featured.beforeSrc}
                afterSrc={featured.afterSrc}
                beforeAlt={featured.beforeAlt}
                afterAlt={featured.afterAlt}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-zinc-950/70 p-8 lg:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Project spotlight
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {featured.caption}
                </p>
                <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2">
                    <span className="text-amber-200/90">✓</span>
                    Coordinated crew, contained jobsite
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-200/90">✓</span>
                    UV-stable, easy-clean finish
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-200/90">✓</span>
                    Clear handoff when the system is ready for use
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        )}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setActive(g.id)}
                className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 text-left ring-1 ring-white/5 transition hover:border-white/25"
                aria-label={`View ${g.title} transformation`}
              >
                <div className="relative aspect-[4/3]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${g.afterSrc})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
                    {g.title}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
