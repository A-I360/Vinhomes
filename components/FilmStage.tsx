"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import FilmChip from "@/components/FilmChip";
import type { Film } from "@/content/films";
import { cn } from "@/lib/utils";

/**
 * Card-level footage showcase.
 *
 * The property photo stays as the still; on hover (fine pointer only, never
 * with reduced motion) the film for that home fades in, muted and looping, with
 * no download until the pointer arrives. The gold chip opens the sound-on
 * player in a lightbox, so a listing section plays the right film for the right
 * home without leaving the page.
 */
export default function FilmStage({
  film,
  poster,
  posterAlt = "",
  label,
  className,
  imageClassName,
  videoClassName,
  aspect = "aspect-[3/2]",
  fill = false,
  sizes = "(min-width:1024px) 600px, 100vw",
  priority = false,
  chipAt = "bottom-left",
  children,
}: {
  film?: Film;
  /** still shown until the footage is hovered; defaults to the film's own frame */
  poster?: string;
  posterAlt?: string;
  /** whose footage this is — used in the chip's accessible name */
  label?: string;
  className?: string;
  imageClassName?: string;
  videoClassName?: string;
  aspect?: string;
  /** stretch inside an already positioned parent (development cards) */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  chipAt?: "bottom-left" | "bottom-right" | "none";
  children?: ReactNode;
}) {
  const [armed, setArmed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!film) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (fine.matches && !calm.matches) setArmed(true);
  }, [film]);

  // a short delay keeps a mouse simply crossing the card from asking for the clip
  const delay = useRef<number | null>(null);
  function enter() {
    if (!film || !armed) return;
    if (delay.current) window.clearTimeout(delay.current);
    delay.current = window.setTimeout(() => setHovering(true), 220);
  }
  function leave() {
    if (delay.current) window.clearTimeout(delay.current);
    delay.current = null;
    setHovering(false);
    setReady(false);
  }
  useEffect(() => () => { if (delay.current) window.clearTimeout(delay.current); }, []);

  const preview = Boolean(film) && armed && hovering;
  const src = poster ?? film?.poster;
  /** a vertical cut is shown whole rather than sliced into a landscape box */
  const fit = film?.orientation === "portrait" ? "object-contain" : "object-cover";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-brand-green950",
        fill ? "absolute inset-0" : aspect,
        className
      )}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      {src && (
        <Image
          src={src}
          alt={posterAlt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-all duration-[1400ms] ease-luxe",
            preview && ready ? "opacity-0" : "opacity-100",
            imageClassName
          )}
        />
      )}

      {preview && film && (
        <video
          src={film.src}
          muted
          loop
          autoPlay
          playsInline
          preload="none"
          aria-hidden
          onCanPlay={() => setReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-700 ease-luxe",
            fit,
            ready ? "opacity-100" : "opacity-0",
            videoClassName
          )}
        />
      )}

      {children}

      {film && chipAt !== "none" && (
        <FilmChip
          film={film}
          label={label}
          className={cn("absolute z-20", chipAt === "bottom-left" ? "bottom-3 left-3" : "bottom-3 right-3")}
        />
      )}
    </div>
  );
}
