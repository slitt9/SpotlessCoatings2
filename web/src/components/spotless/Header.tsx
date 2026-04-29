"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-content";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Transformations" },
  { href: "#flakes", label: "Flake Options" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Quote" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a0a0a]/85 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} home`}
        >
          <span className="relative block h-14 w-44 shrink-0 sm:h-16 sm:w-52 lg:h-[4.5rem] lg:w-60">
            <Image
              src="/images/logo/spotless-logo.jpg"
              alt=""
              fill
              className="object-contain object-left invert transition"
              priority
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition hover:bg-zinc-200 sm:text-sm"
          >
            Call
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-4 backdrop-blur-xl transition-all md:hidden ${
          open ? "pointer-events-auto max-h-96 opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-200" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
