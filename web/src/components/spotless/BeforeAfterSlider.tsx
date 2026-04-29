"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: Props) {
  const id = useId();
  const [pct, setPct] = useState(50);

  const setFromClientX = useCallback(
    (clientX: number, currentTarget: HTMLElement) => {
      const rect = currentTarget.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      setPct(Math.round((x / rect.width) * 100));
    },
    [],
  );

  return (
    <div className={`group/slider ${className}`}>
      <div
        className="relative cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl ring-1 ring-white/5"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          setFromClientX(e.clientX, e.currentTarget);
        }}
        onPointerMove={(e) => {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
          setFromClientX(e.clientX, e.currentTarget);
        }}
        onPointerUp={(e) => {
          try {
            (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          } catch {
            /* ignore */
          }
        }}
        role="img"
        aria-label={`Before and after comparison. Slider at ${pct} percent.`}
      >
        <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_24px_rgba(0,0,0,0.45)]"
            style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          />
          <div
            className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/75 text-[10px] font-bold tracking-widest text-white backdrop-blur-md"
            style={{ left: `${pct}%` }}
            aria-hidden
          >
            DRAG
          </div>
          <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            Before
          </div>
          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            After
          </div>
        </div>
      </div>
      <label className="sr-only" htmlFor={`ba-range-${id}`}>
        Adjust before and after comparison
      </label>
      <input
        id={`ba-range-${id}`}
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-ew-resize accent-zinc-100"
        aria-valuetext={`${pct} percent before visible`}
      />
    </div>
  );
}
