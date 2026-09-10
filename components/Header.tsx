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
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
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
  }, [open ]);

  const tone = open || !scrolled ? "light" : "dark";
  const light = tone === "light";
  const condensed = scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
          open && "bg-transparent",
          !open &&
            (scrolled
              ? "border-b border-brand-gold/25 bg-brand-paper/85 shadow-soft backdrop-blur-xl"
              : "border-b border-transparent bg-gradient-to-b from-brand-green950/70 via-brand-green950/25 to-transparent")
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 ease-luxe sm:px-8 lg:px-12",
            condensed ? "h-16" : "h-[4.4rem]"
          )}
        >
          <Brand markWidth={condensed ? 38 : 44} tone={tone} withWordmark priority />

          {/* desktop nav */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-5 transition-colors duration-500 lg:flex xl:gap-9",
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
                    "relative font-sans text-[0.66rem] uppercase tracking-[0.16em] transition-all duration-300 xl:text-[0.7rem] xl:tracking-[0.18em]",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-500 after:ease-luxe",
                    active
                      ? cn(
                          "after:scale-x-100",
                          light ? "text-brand-goldLight" : "text-brand-goldDeep"
                        )
                      : "opacity-80 after:hover:scale-x-100 hover:opacity-100"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "hidden items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.16em] transition-colors duration-300 2xl:inline-flex",
                light
                  ? "text-brand-ivory/75 hover:text-brand-goldLight"
                  : "text-brand-green900/75 hover:text-brand-goldDeep"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phoneDisplay}
            </a>
            <span
              aria-hidden
              className={cn(
                "hidden h-5 w-px 2xl:block",
                light ? "bg-brand-ivory/25" : "bg-brand-green950/15"
              )}
            />
            <Link
              href="/contact"
              className={cn(
                "hidden items-center whitespace-nowrap rounded-full border px-5 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] transition-all duration-500 ease-luxe xl:inline-flex",
                light
                  ? "border-brand-goldLight/70 text-brand-ivory hover:border-brand-gold hover:bg-brand-gold hover:text-brand-green950"
                  : "border-brand-goldDeep/60 text-brand-green900 hover:border-brand-green900 hover:bg-brand-green900 hover:text-brand-ivory"
              )}
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

        {/* scroll progress hairline */}
        {!open && (
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 block h-[2px] origin-left bg-gradient-to-r from-brand-goldDeep via-brand-gold to-brand-goldLight"
            style={{ transform: `scaleX(${progress})` }}
          />
        )}
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
