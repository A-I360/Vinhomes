"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Film } from "@/content/films";
import { cn } from "@/lib/utils";

/**
 * Lightbox for the supplied films. Used from the property/development cards so
 * a visitor can watch a home without leaving the listing page. The file is only
 * fetched once this dialog opens, and the previously focused element gets focus
 * back when it closes.
 */
export default function FilmModal({
  film,
  onClose,
  context,
}: {
  film: Film;
  onClose: () => void;
  /** small line of extra context, e.g. the property name */
  context?: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, [onClose]);

  const portrait = film.orientation === "portrait";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={film.title}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex animate-fade-in items-center justify-center bg-brand-green950/95 p-4 backdrop-blur-sm sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative flex w-full flex-col items-center",
          portrait ? "max-w-[min(92vw,24rem)]" : "max-w-5xl"
        )}
      >
        <div className="flex w-full items-end justify-between gap-4 pb-3">
          <div className="min-w-0 text-left">
            <p className="truncate font-serif text-lg text-brand-ivory sm:text-xl">{film.title}</p>
            <p className="mt-0.5 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-brand-goldLight">
              {film.duration}
              {film.credit ? ` · ${film.credit}` : ""}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close film"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-ivory/30 text-brand-ivory transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <video
          src={film.src}
          poster={film.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={film.title}
          // no forced aspect box: the clip's own ratio sizes it, capped to the viewport
          className="mx-auto block w-full max-h-[76vh] bg-brand-night object-contain shadow-lift"
        />

        {context && (
          <p className="mt-3 text-center font-sans text-xs leading-relaxed text-brand-ivory/60">{context}</p>
        )}
      </div>
    </div>
  );
}
