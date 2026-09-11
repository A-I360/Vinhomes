"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "idle" | "hover" | "press";

const INTERACTIVE =
  "a, button, [role='button'], input, select, textarea, summary, label, details";

/**
 * A fountain-pen cursor that replaces the native pointer with an elegant
 * contract-signing nib. The tip of the nib is the "writing point" and sits
 * exactly on the pointer position; the pen lifts when hovering interactive
 * elements and leaves a faint gold ink bloom wherever the visitor clicks.
 *
 * Only activates on fine pointers (mouse/trackpad). Touch devices and
 * reduced-motion users keep the familiar native cursor.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [inks, setInks] = useState<{ id: number; x: number; y: number }[]>([]);

  const elRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const lastHover = useRef(false);
  const inkId = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-custom-active");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const interactive = !!el?.closest?.(INTERACTIVE);
      lastHover.current = interactive;
      setMode(interactive ? "hover" : "idle");
    };
    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      setMode("press");
      const id = ++inkId.current;
      setInks((s) => [...s.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setInks((s) => s.filter((d) => d.id !== id));
      }, 650);
    };
    const onUp = () => setMode(lastHover.current ? "hover" : "idle");
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.22;
      current.current.y += (target.current.y - current.current.y) * 0.22;
      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("cursor-custom-active");
    };
  }, []);

  if (!enabled) return null;

  const penClass =
    mode === "press"
      ? "cursor-pen is-pressing"
      : mode === "hover"
        ? "cursor-pen is-hovering"
        : "cursor-pen";

  return (
    <>
      {/* the pen — its nib tip tracks the pointer */}
      <div
        ref={elRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
      >
        <div style={{ transform: "translate(-50%, -100%)" }}>
          <div className={penClass}>
            <PenGlyph />
          </div>
        </div>
      </div>

      {/* ink blooms left on click */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[9998]">
        {inks.map((d) => (
          <span key={d.id} className="cursor-ink" style={{ left: d.x, top: d.y }} />
        ))}
      </div>
    </>
  );
}

/** Hand-drawn fountain pen: dark-green barrel, gold cap band, gold nib. */
function PenGlyph() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="penGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e5cf9e" />
          <stop offset="0.55" stopColor="#c6a36a" />
          <stop offset="1" stopColor="#a5813d" />
        </linearGradient>
        <linearGradient id="penBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#164a37" />
          <stop offset="0.5" stopColor="#0f2d21" />
          <stop offset="1" stopColor="#0a1a13" />
        </linearGradient>
      </defs>
      {/* barrel */}
      <rect x="16" y="2.5" width="8" height="16" rx="4" fill="url(#penBody)" />
      <rect x="17.4" y="4" width="1.6" height="13" rx="0.8" fill="#1c5a43" opacity="0.85" />
      {/* gold cap band */}
      <rect x="15.4" y="18" width="9.2" height="3.4" rx="1.7" fill="url(#penGold)" />
      {/* grip */}
      <rect x="16.6" y="21.6" width="6.8" height="7" rx="2.2" fill="#0a1a13" />
      <rect x="16.6" y="23.4" width="6.8" height="0.8" rx="0.4" fill="#1c5a43" opacity="0.55" />
      <rect x="16.6" y="26.2" width="6.8" height="0.8" rx="0.4" fill="#1c5a43" opacity="0.55" />
      {/* nib */}
      <path
        d="M16.5 28.5 C17.6 32.6 18.6 36.3 20 40 C21.4 36.3 22.4 32.6 23.5 28.5 C21.6 27 18.4 27 16.5 28.5 Z"
        fill="url(#penGold)"
      />
      {/* breather hole + slit */}
      <circle cx="20" cy="29.4" r="1.15" fill="#0d241b" />
      <rect x="19.55" y="30.2" width="0.9" height="9" rx="0.45" fill="#0d241b" />
    </svg>
  );
}
