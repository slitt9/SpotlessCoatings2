import Image from "next/image";
import { SITE } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/90 py-14 text-zinc-300 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="relative block h-[4.5rem] w-60 shrink-0 sm:h-20 sm:w-72">
            <Image
              src="/images/logo/spotless-logo.jpg"
              alt=""
              fill
              className="object-contain object-left invert"
            />
          </span>
          <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
            Premium epoxy &amp; polyaspartic floor coatings. {SITE.area}.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-semibold tracking-wide text-white hover:underline"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <span className="relative h-5 w-5">
              <Image src="/images/instagram.png" alt="" fill className="object-contain" />
            </span>
            Follow on Instagram
          </a>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
