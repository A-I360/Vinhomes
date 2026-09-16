"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Volume2 } from "lucide-react";
import type { Film } from "@/content/films";
import { filmPoster } from "@/content/films";
import { cn } from "@/lib/utils";

/**
 * Inline player for the supplied films: the film's own poster frame and a gold
 * play button until pressed, the video file only afterwards. Keeps film-heavy
 * pages fast and means no visitor ever sees an empty black rectangle.
 */
export default function FilmPlayer({
  film,
  shape = "shape-curve",
  aspect,
  caption,
  className,
  sizes = "(min-width:1024px) 60vw, 100vw",
  eager = false,
  showSoundHint = false,
}: {
  film: Film;
  shape?: string;
  /** override the box; defaults to the film's own orientation */
  aspect?: string;
  caption?: string;
  className?: string;
  sizes?: string;
  /** use for the first film above the fold */
  eager?: boolean;
  showSoundHint?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const portrait = film.orientation === "portrait";
  const box = aspect ?? (portrait ? "aspect-[9/16]" : "aspect-video");
  const poster = film.poster || filmPoster;

  return (
    <figure className={cn("group relative overflow-hidden bg-brand-green950", shape, className)}>
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${film.title} (${film.duration})${showSoundHint ? " — sound on" : ""}`}
          className={cn("relative block h-full w-full cursor-pointer", box)}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes={sizes}
            className="scale-105 object-cover transition-all duration-[1400ms] ease-luxe group-hover:scale-110"
            loading={eager ? "eager" : "lazy"}
            priority={eager}
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-green950/85 via-brand-green950/15 to-brand-green950/35"
          />
          {/* play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-green950 shadow-lift transition-all duration-500 ease-luxe group-hover:scale-110 group-hover:bg-brand-goldLight sm:h-20 sm:w-20">
              <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
            </span>
          </span>
          {/* duration */}
          <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-brand-green950/70 px-2.5 py-1 font-sans text-[0.65rem] tracking-[0.14em] text-brand-goldLight backdrop-blur-sm">
            {showSoundHint && <Volume2 className="h-3 w-3" />}
            {film.duration}
          </span>
          <span className={cn("absolute left-4 right-20 text-left", portrait ? "bottom-14" : "bottom-4")}>
            <span className={cn("block truncate font-serif italic text-brand-ivory", portrait ? "text-base" : "text-lg sm:text-xl")}>
              {caption ?? film.title}
            </span>
            {film.subject && (
              <span className="mt-1 block font-sans text-[0.6rem] uppercase tracking-[0.2em] text-brand-goldLight">
                {film.subject}
              </span>
            )}
          </span>
        </button>
      ) : (
        <video
          src={film.src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={film.title}
          className={cn("h-full w-full bg-brand-night object-contain", box)}
        />
      )}
    </figure>
  );
}
