"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site-content";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden bg-[#050505]"
      aria-label="Introduction"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/gallery/metallic-hero.jpg"
          aria-hidden
        >
          <source src="/video/spotless-broll.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0a0a0a]" />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,162,98,0.18),transparent_65%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.12),transparent_70%)] blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end gap-12 px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400"
          >
            Premium epoxy & polyaspartic · Lower Mainland
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {SITE.name}
            <span className="mt-3 block text-lg font-normal text-zinc-300 sm:text-xl lg:text-2xl">
              {SITE.tagline}
            </span>
          </motion.h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_60px_rgba(255,255,255,0.2)] transition hover:bg-zinc-200"
            >
              Call {SITE.phoneDisplay}
            </a>
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
            >
              See Our Work
            </Link>
          </motion.div>
          <motion.a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <span className="font-medium text-zinc-300">Instagram</span>
            <span className="text-zinc-500">{SITE.instagramHandle}</span>
          </motion.a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md lg:max-w-lg"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            <div className="grid grid-cols-2 gap-px bg-black/80">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/gallery/patio-before.jpg"
                  alt="Rough concrete patio before Spotless Coatings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
                <span className="absolute left-2 top-2 rounded bg-black/65 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/gallery/patio-after.jpg"
                  alt="Same patio with high-gloss epoxy polyaspartic finish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
                <span className="absolute right-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-black">
                  After
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 bg-zinc-950/90 px-4 py-3 text-xs text-zinc-400 backdrop-blur">
              <span className="font-medium text-zinc-200">Dirty concrete</span>
              <span className="text-zinc-500">→</span>
              <span className="font-medium text-white">Showroom finish</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
