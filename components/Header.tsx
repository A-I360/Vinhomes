"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import Brand from "@/components/Brand";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tone = open || !scrolled ? "light" : "dark";
  const light = tone === "light";
  const condensed = scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full transition-all duration-500 ease-luxe sm:top-5",
          condensed ? "h-14" : "h-16",
          light
            ? "border border-brand-ivory/15 bg-brand-green950/60 shadow-soft backdrop-blur-xl"
            : "border border-brand-gold/25 bg-brand-paper/90 shadow-soft backdrop-blur-xl"
        )}
      >
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4 pl-5 pr-2 sm:pl-6 sm:pr-3">
          <Brand markWidth={condensed ? 36 : 40} tone={tone} withWordmark priority />

          {/* desktop nav — centred inside the pill */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center justify-center gap-5 transition-colors duration-500 lg:flex xl:gap-8",
              light ? "text-brand-ivory/85" : "text-brand-green900"
            )}
          >
            {siteConfig.navigation.map((l) => {
              const active =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap font-sans text-[0.66rem] uppercase tracking-[0.16em] transition-all duration-300 xl:text-[0.7rem] xl:tracking-[0.18em]",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-500 after:ease-luxe",
                    active
                      ? cn(
                          "after:scale-x-100",
                          light ? "text-brand-goldLight" : "text-brand-goldDeep"
                        )
                      : "opacity-85 after:hover:scale-x-100 hover:opacity-100"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/contact"
              className="hidden items-center whitespace-nowrap rounded-full bg-brand-gold px-5 py-2.5 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-brand-green950 transition-all duration-500 ease-luxe hover:bg-brand-goldLight xl:inline-flex"
            >
              Book a consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden",
                light
                  ? "text-brand-ivory hover:bg-brand-ivory/10"
                  : "text-brand-green900 hover:bg-brand-green950/5"
              )}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-brand-green950 transition-all duration-500 ease-luxe lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav
          className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-1 px-8 pt-16"
          aria-label="Mobile"
        >
          {siteConfig.navigation.map((l, i) => {
            const active =
              pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                className={cn(
                  "group flex items-baseline gap-3 py-1 transition-all duration-700 ease-luxe",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
              >
                <span className="font-sans text-[0.62rem] tracking-[0.2em] text-brand-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-serif text-3xl transition-colors duration-300 sm:text-4xl",
                    active
                      ? "italic text-brand-goldLight"
                      : "text-brand-ivory group-hover:text-brand-goldLight"
                  )}
                >
                  {l.label}
                </span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{
              transitionDelay: open ? `${60 + siteConfig.navigation.length * 45}ms` : "0ms",
            }}
            className={cn(
              "mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/70 px-7 py-3 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-brand-goldLight transition-all duration-700 hover:bg-brand-gold hover:text-brand-green950",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
          >
            Book a consultation
          </Link>
        </nav>

        <div
          style={{
            transitionDelay: open ? `${120 + siteConfig.navigation.length * 45}ms` : "0ms",
          }}
          className={cn(
            "border-t border-brand-ivory/10 transition-all delay-100 duration-700",
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-8 py-5 font-sans text-xs tracking-wide text-brand-ivory/75">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-goldLight"
            >
              <Phone className="h-3.5 w-3.5 text-brand-gold" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-goldLight"
            >
              <Mail className="h-3.5 w-3.5 text-brand-gold" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-goldLight"
            >
              <MessageCircle className="h-3.5 w-3.5 text-brand-gold" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
