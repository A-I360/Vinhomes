"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowUpRight, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import Brand from "@/components/Brand";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
          solid ? "bg-brand-paper/95 shadow-soft backdrop-blur-md" : "bg-gradient-to-b from-brand-green950/60 to-transparent"
        )}
      >
        {/* ------ Top utility bar (collapses on scroll) ------ */}
        <div
          className={cn(
            "overflow-hidden border-b transition-all duration-500 ease-luxe",
            solid ? "max-h-0 border-transparent" : "max-h-12 border-brand-ivory/10"
          )}
        >
          <div
            className={cn(
              "mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 font-sans text-[0.66rem] uppercase tracking-[0.18em] sm:px-8 lg:px-12",
              solid ? "text-brand-charcoal/70" : "text-brand-ivory/70"
            )}
          >
            <span className="hidden items-center gap-2 sm:inline-flex">
              <span className="mr-1 text-brand-goldLight">•</span> {siteConfig.tagline}
            </span>
            <span className="flex items-center gap-5">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-brand-goldLight">
                <Phone className="h-3.5 w-3.5 text-brand-gold" /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hidden items-center gap-2 transition-colors hover:text-brand-goldLight md:inline-flex">
                <Mail className="h-3.5 w-3.5 text-brand-gold" /> {siteConfig.email}
              </a>
            </span>
          </div>
        </div>

        {/* ------ Main nav ------ */}
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 ease-luxe sm:px-8 lg:px-12",
            solid ? "py-3.5" : "py-4"
          )}
        >
          <Brand markWidth={solid ? 148 : 158} priority />

          {/* center nav — desktop only */}
          <nav
            aria-label="Primary"
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex",
              solid ? "text-brand-green900" : "text-brand-ivory"
            )}
          >
            {siteConfig.navigation.map((l) => {
              const active =
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative font-sans text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300",
                    "after:absolute after:-bottom-1.5 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-brand-gold after:transition-all after:duration-500",
                    active
                      ? "after:w-full opacity-100"
                      : "after:w-0 opacity-85 hover:opacity-100 hover:after:w-full"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* right actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp Vinhomes"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300",
                solid
                  ? "border-brand-green900/25 text-brand-green900 hover:border-brand-gold"
                  : "border-brand-ivory/40 text-brand-ivory hover:border-brand-goldLight"
              )}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className={cn(
                "hidden lg:inline-flex btn gap-2.5 px-7 py-3.5 text-[0.7rem]",
                solid ? "btn-dark" : "btn-outline-light"
              )}
            >
              <CalendarCheck className="h-4 w-4" /> Book a Consultation
            </Link>
            <a
              href="/contact"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-[0.66rem] uppercase tracking-[0.16em] lg:hidden",
                solid
                  ? "border-brand-green900 text-brand-green900"
                  : "border-brand-ivory/60 text-brand-ivory"
              )}
            >
              Book a Consultation
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden",
                solid ? "text-brand-green900" : "text-brand-ivory"
              )}
            >
              {open ? <X className="h-6 w-6 text-brand-ivory" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Full-screen mobile menu ---------- */}
      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden transition-all duration-500 ease-luxe",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full w-full flex-col bg-brand-green950 texture-dark px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {siteConfig.navigation.map((l, i) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ transitionDelay: open ? `${100 + i * 40}ms` : "0ms" }}
                  className={cn(
                    "group flex items-baseline justify-between border-b border-brand-ivory/10 py-4 transition-all duration-700 ease-luxe",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                >
                  <span className="font-serif text-3xl text-brand-ivory transition-colors group-hover:text-brand-goldLight">
                    {l.label}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "h-5 w-5 text-brand-gold",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-6">
            <Link
              href="/contact"
              className="btn-gold w-full"
              style={{ transitionDelay: open ? "480ms" : "0ms" }}
            >
              Book a Consultation
            </Link>
            <div className="flex justify-center gap-2 text-center text-brand-ivory/80">
              <a className="flex items-center gap-2 text-sm hover:text-brand-goldLight" href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4 text-brand-gold" /> {siteConfig.phoneDisplay}
              </a>
              <span className="text-brand-ivory/30">|</span>
              <a className="flex items-center gap-2 text-sm hover:text-brand-goldLight" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4 text-brand-gold" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
