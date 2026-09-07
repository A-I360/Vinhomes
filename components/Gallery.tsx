"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { MediaItem } from "@/lib/types";

export default function Gallery({ items, title }: { items: MediaItem[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const open = useCallback((i: number) => {
    setActive(i);
    setLightbox(true);
  }, []);
  const step = useCallback((dir: number) => {
    setActive((a) => (a + dir + items.length) % items.length);
  }, [items.length]);

  if (items.length === 0) return null;
  const current = items[active];

  return (
    <div>
      <div className="relative overflow-hidden bg-brand-green900">
        <button type="button" onClick={() => open(active)} aria-label="Open image viewer" className="img-frame block h-full w-full">
          <Image
            src={current.src}
            alt={current.alt || title}
            width={1600}
            height={1000}
            sizes="100vw"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </button>
        <button
          onClick={() => open(active)}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-brand-green950/60 text-brand-ivory backdrop-blur-sm transition-colors hover:bg-brand-green900"
          aria-label="Expand image"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
        {current.credit && (
          <span className="absolute bottom-4 left-4 bg-brand-green950/70 px-3 py-1.5 font-sans text-[0.62rem] uppercase tracking-[0.16em] text-brand-goldLight backdrop-blur-sm">
            {current.credit}
          </span>
        )}
      </div>

      {items.length > 1 && (
        <div className="thin-scroll mt-3 flex gap-3 overflow-x-auto pb-1">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${items.length}`}
              className={`relative h-20 w-28 shrink-0 overflow-hidden transition-opacity ${i === active ? "opacity-100 ring-1 ring-brand-gold" : "opacity-60 hover:opacity-90"}`}
            >
              <Image src={it.src} alt={it.alt || `${title} ${i + 1}`} fill sizes="112px" className="object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-green950/95 p-4" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button onClick={() => setLightbox(false)} aria-label="Close viewer" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-brand-ivory/30 text-brand-ivory hover:border-brand-gold hover:text-brand-gold">
            <X className="h-5 w-5" />
          </button>
          <button onClick={() => step(-1)} aria-label="Previous image" className="absolute left-3 flex h-12 w-12 items-center justify-center text-brand-ivory/80 hover:text-brand-gold sm:left-6">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button onClick={() => step(1)} aria-label="Next image" className="absolute right-3 flex h-12 w-12 items-center justify-center text-brand-ivory/80 hover:text-brand-gold sm:right-6">
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-h-[86vh] max-w-5xl">
            <Image src={items[active].src} alt={items[active].alt || title} width={1600} height={1000} className="max-h-[80vh] w-auto object-contain" sizes="90vw" />
            <div className="mt-3 text-center font-sans text-xs tracking-wide text-brand-ivory/60">
              {active + 1} / {items.length}{items[active].credit ? ` — ${items[active].credit}` : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
