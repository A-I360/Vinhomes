"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import FilmModal from "@/components/FilmModal";
import type { Film } from "@/content/films";
import { cn } from "@/lib/utils";

/**
 * The "Film · 0:24" affordance. Opens the supplied footage for a home in a
 * lightbox so the video can be watched from inside a listing section.
 */
export default function FilmChip({
  film,
  label,
  className,
  variant = "pill",
}: {
  film: Film;
  /** whose footage it is — feeds the accessible name and the modal caption */
  label?: string;
  className?: string;
  variant?: "pill" | "inline" | "inlineLight";
}) {
  const [open, setOpen] = useState(false);

  const skin =
    variant === "pill"
      ? "rounded-full bg-brand-gold px-3 py-1.5 text-brand-green950 shadow-soft hover:bg-brand-goldLight"
      : variant === "inline"
        ? "rounded-full border border-brand-line bg-white/90 px-5 py-2.5 text-brand-green950 hover:border-brand-gold hover:text-brand-goldDeep"
        : "rounded-full border border-brand-ivory/50 bg-brand-green950/40 px-5 py-2.5 text-brand-ivory backdrop-blur-sm hover:border-brand-goldLight hover:text-brand-goldLight";

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        aria-label={`Play the film${label ? ` for ${label}` : ""} (${film.duration})`}
        title={`${film.title} — ${film.duration}`}
        className={cn(
          "inline-flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-[0.16em] transition-all duration-500 hover:tracking-[0.2em]",
          skin,
          className
        )}
      >
        <Play className="h-3 w-3 fill-current" />
        Film · {film.duration}
      </button>
      {open && (
        <FilmModal
          film={film}
          context={label ? `${label} — ${film.credit ?? "supplied footage"}` : film.credit}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
