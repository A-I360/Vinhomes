"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Film as FilmIcon } from "lucide-react";
import FilmPlayer from "@/components/FilmPlayer";
import type { Film } from "@/content/films";
import { cn } from "@/lib/utils";

export interface FilmStripItem {
  film: Film;
  /** whose footage it is, e.g. "Citadel Oasis — Modern Family Home" */
  label?: string;
  /** where the strip's link points (property or development page) */
  href?: string;
  linkLabel?: string;
}

/**
 * The video showcase used on property pages, development sections and the
 * listing/home reels: one large player for the selected film, the other films
 * for the same home as a strip beneath it.
 *
 * Portrait cuts are the phone-shaped films, so they are held at a vertical
 * ratio beside their caption instead of stretched across the page.
 */
export default function FilmStrip({
  items,
  tone = "dark",
  shape = "frame-line",
  className,
  showShows = true,
  maxThumbnails = 6,
}: {
  items: FilmStripItem[];
  tone?: "light" | "dark";
  shape?: string;
  className?: string;
  /** print what the footage contains under the player */
  showShows?: boolean;
  maxThumbnails?: number;
}) {
  const [active, setActive] = useState(0);
  const index = Math.min(active, items.length - 1);
  const current = items[index];
  if (!current) return null;

  // repo convention, as in SectionHeading: tone="light" means light type on a dark surface
  const onDark = tone === "light";
  const portrait = current.film.orientation === "portrait";
  const thumbs = items.slice(0, maxThumbnails);

  const meta = (
    <div className={cn("min-w-0", portrait ? "text-left" : "text-center sm:text-left")}>
      <p className={cn("font-serif text-xl", onDark ? "text-brand-ivory" : "text-brand-green900")}>
        {current.film.title}
      </p>
      <p className={cn("mt-1 font-sans text-[0.62rem] uppercase tracking-[0.2em]", onDark ? "text-brand-goldLight" : "text-brand-goldDeep")}>
        {current.label ?? current.film.subject}
        {current.film.credit ? ` · ${current.film.credit}` : ""}
      </p>
      {showShows && (
        <p
          className={cn(
            "mt-4 max-w-xl font-sans text-sm leading-relaxed",
            onDark ? "text-brand-ivory/70" : "text-brand-charcoal/70"
          )}
        >
          {current.film.shows}
        </p>
      )}
      {current.href && (
        <Link
          href={current.href}
          className={cn(
            "mt-5 inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.16em] transition-colors",
            onDark ? "text-brand-goldLight hover:text-brand-ivory" : "text-brand-green800 hover:text-brand-goldDeep"
          )}
        >
          {current.linkLabel ?? "Open this home"} <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );

  const player = (
    <FilmPlayer
      key={current.film.id}
      film={current.film}
      shape={shape}
      sizes={portrait ? "(min-width:1024px) 20rem, 90vw" : "(min-width:1024px) 58vw, 100vw"}
      showSoundHint
    />
  );

  return (
    <div className={cn("min-w-0", className)}>
      {portrait ? (
        <div className="grid items-center gap-8 xl:grid-cols-[19rem_minmax(0,1fr)]">
          <div className="mx-auto w-full max-w-[19rem]">{player}</div>
          {meta}
        </div>
      ) : (
        <div className="space-y-6">
          {player}
          <div className={cn("border-t pt-5", onDark ? "border-brand-ivory/15" : "border-brand-line")}>{meta}</div>
        </div>
      )}

      {thumbs.length > 1 && (
        <>
          <div className="thin-scroll mt-4 flex gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Choose a film">
            {thumbs.map((it, i) => {
              const isActive = i === index;
              return (
                <button
                  key={it.film.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group/thumb relative flex h-20 w-32 shrink-0 items-end overflow-hidden bg-brand-green950 transition-all duration-500",
                    "shape-curve-sm",
                    isActive
                      ? "opacity-100 ring-1 ring-brand-gold"
                      : cn("opacity-70 hover:opacity-100", onDark ? "ring-1 ring-brand-ivory/20" : "ring-1 ring-brand-line")
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.film.poster}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-green950/90 via-brand-green950/20 to-transparent" />
                  <span className="relative z-10 flex w-full items-center justify-between gap-1 px-2 pb-1.5">
                    <span className="truncate font-sans text-[0.58rem] uppercase tracking-[0.14em] text-brand-ivory">
                      {it.film.subject ?? `Film ${i + 1}`}
                    </span>
                    <span className="flex items-center gap-1 font-sans text-[0.58rem] text-brand-goldLight">
                      <FilmIcon className="h-2.5 w-2.5" />
                      {it.film.duration}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p
            className={cn(
              "mt-2 font-sans text-[0.62rem] uppercase tracking-[0.16em]",
              onDark ? "text-brand-ivory/45" : "text-brand-charcoal/50"
            )}
          >
            {thumbs.length} films — press one to switch
          </p>
        </>
      )}
    </div>
  );
}
