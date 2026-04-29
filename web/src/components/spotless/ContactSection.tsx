"use client";

import Image from "next/image";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { SITE } from "@/lib/site-content";
import { Reveal } from "./Reveal";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  company: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "Garage floor",
  message: "",
  company: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send your request right now.");
      }

      setValues(initialValues);
      setStatus("success");
      setFeedback("Request sent. Spotless Coatings will follow up by email or phone.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your request right now. Please call instead.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-neutral-950/80 py-24 text-zinc-100 backdrop-blur-sm sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Get a quote
              </p>
              <h2
                id="contact-heading"
                className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Start with the form, then we follow up fast
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
                Tell us what space you want coated, what shape it is in, and how soon you want
                the job done. If you would rather talk right away, call or send a DM.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                    Call
                  </p>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="mt-3 inline-flex text-lg font-semibold text-white transition hover:text-zinc-300"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-3 inline-flex text-sm font-semibold text-white transition hover:text-zinc-300"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row lg:flex-col">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_50px_rgba(255,255,255,0.12)] transition hover:bg-zinc-200"
                >
                  Call now
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10"
                >
                  <span className="relative h-5 w-5 shrink-0">
                    <Image
                      src="/images/instagram.png"
                      alt=""
                      fill
                      className="object-contain invert"
                    />
                  </span>
                  Instagram
                </a>
              </div>

              <p className="mt-8 text-xs text-zinc-500">{SITE.area}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-white/10 bg-zinc-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:bg-white/[0.05]"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:bg-white/[0.05]"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:bg-white/[0.05]"
                    placeholder="778-555-0123"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Project type
                  </span>
                  <select
                    name="projectType"
                    value={values.projectType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.05]"
                  >
                    <option className="bg-zinc-950">Garage floor</option>
                    <option className="bg-zinc-950">Patio</option>
                    <option className="bg-zinc-950">Stairs or landing</option>
                    <option className="bg-zinc-950">Metallic epoxy</option>
                    <option className="bg-zinc-950">Commercial space</option>
                    <option className="bg-zinc-950">Other</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Project details
                </span>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30 focus:bg-white/[0.05]"
                  placeholder="Tell us about the space, square footage if you know it, current condition, and your ideal timeline."
                />
              </label>

              <label className="hidden" aria-hidden>
                Company
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_50px_rgba(255,255,255,0.12)] transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send request"}
                </button>
                <p className="text-xs leading-relaxed text-zinc-500">
                  This sends directly to {SITE.email}. For urgent jobs, call instead.
                </p>
              </div>

              {feedback ? (
                <p
                  className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/20 bg-red-400/10 text-red-200"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
