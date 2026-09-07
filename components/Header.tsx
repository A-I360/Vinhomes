"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import Brand from "@/components/Brand";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
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
          solid
            ? "bg-brand-paper/92 backdrop-blur-md border-b border-brand-line shadow-soft"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
          <Brand markWidth={solid ? 150 : 158} priority />

          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-7 xl:gap-9 lg:flex",
              solid ? "text-brand-green900" : "text-brand-ivory"
            )}
          >
            {siteConfig.navigation.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative font-sans text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brand-gold after:transition-all after:duration-500",
                    active ? "after:w-full opacity-100" : "after:w-0 opacity-80 hover:opacity-100 hover:after:w-full"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className={cn(
                "hidden md:inline-flex btn px-6 py-3 text-[0.68rem]",
                solid ? "btn-dark" : "btn-outline-light"
              )}
            >
              Book a Consultation
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp Vinhomes"
              className={cn(
                "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border",
                solid ? "border-brand-green900/30 text-brand-green900" : "border-brand-ivory/50 text-brand-ivory"
              )}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center transition-colors lg:hidden",
                solid ? "text-brand-green900" : "text-brand-ivory"
              )}
            >
              {open ? <X className="h-6 w-6 text-brand-ivory" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-luxe",
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
                    className={cn("h-5 w-5 text-brand-gold", active ? "opacity-100" : "opacity-0 group-hover:opacity-100")}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-6">
            <a
              href="/contact"
              className="btn-gold w-full"
              style={{ transitionDelay: open ? "480ms" : "0ms" }}
            >
              Book a Consultation
            </a>
            <div className="space-y-1 text-center text-brand-ivory/70">
              <a className="block text-sm tracking-wide hover:text-brand-goldLight" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneDisplay}
              </a>
              <a className="block text-sm tracking-wide hover:text-brand-goldLight" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
