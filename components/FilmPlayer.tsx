"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Film } from "@/content/films";
import { filmPoster } from "@/content/films";
import { cn } from "@/lib/utils";

/**
 * Elegant video player with a branded facade: poster, gold play button and
 * duration badge. The video file only loads when the visitor presses play,
 * so film-heavy pages stay fast and never show a black rectangle.
 */
export default function FilmPlayer({
  film,
  shape = "shape-curve",
  aspect = "aspect-video",
  caption,
  className,
}: {
  film: Film;
  shape?: string;
  aspect?: string;
  caption?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={cn("group relative overflow-hidden bg-brand-green950", shape, className)}>
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${film.title} (${film.duration})`}
          className={cn("relative block h-full w-full cursor-pointer", aspect)}
        >
          <Image
            src={filmPoster}
            alt=""
            fill
            sizes="(min-width:1024px) 60vw, 100vw"
            className="scale-105 object-cover opacity-80 transition-all duration-[1400ms] ease-luxe group-hover:scale-110 group-hover:opacity-90"
            loading="lazy"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-green950/85 via-brand-green950/20 to-brand-green950/40"
          />
          {/* play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-green950 shadow-lift transition-all duration-500 ease-luxe group-hover:scale-110 group-hover:bg-brand-goldLight sm:h-20 sm:w-20">
              <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
            </span>
          </span>
          {/* duration */}
          <span className="absolute bottom-4 right-4 bg-brand-green950/70 px-2.5 py-1 font-sans text-[0.65rem] tracking-[0.14em] text-brand-goldLight backdrop-blur-sm">
            {film.duration}
          </span>
          {caption && (
            <figcaption className="absolute inset-x-0 bottom-4 left-4 right-20 text-left font-serif text-lg italic text-brand-ivory sm:text-xl">
              {caption}
            </figcaption>
          )}
        </button>
      ) : (
        <video
          src={film.src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={film.title}
          className={cn("h-full w-full bg-black object-contain", aspect)}
        />
      )}
    </figure>
  );
}
