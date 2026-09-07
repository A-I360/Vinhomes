"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import Brand from "@/components/Brand";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const light = !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-luxe",
          light ? "bg-transparent" : "border-b border-brand-green950/5 bg-brand-paper/80 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-[4.4rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand markWidth={44} priority />

          {/* desktop nav */}
          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-9 lg:flex",
              light ? "text-brand-ivory/90" : "text-brand-green900"
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
                    "font-sans text-[0.72rem] uppercase tracking-[0.18em] transition-opacity duration-300",
                    "relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-400",
                    "hover:opacity-100",
                    active ? "opacity-100 after:scale-x-100" : "opacity-75 after:hover:scale-x-100"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden font-sans text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 xl:inline-block",
                light ? "text-brand-goldLight/90 hover:text-brand-ivory" : "text-brand-goldDeep hover:text-brand-green900"
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
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                light ? "text-brand-ivory" : "text-brand-green900"
              )}
            >
              {open ? <X className="h-6 w-6 text-brand-ivory" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-brand-green950 transition-all duration-500 ease-luxe lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav
          className="mx-auto flex w-full max-w-xl flex-col items-center gap-1 px-8"
          aria-label="Mobile"
        >
          {siteConfig.navigation.map((l, i) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                className={cn(
                  "font-serif text-3xl transition-all duration-700 ease-luxe",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  active
                    ? "italic text-brand-goldLight"
                    : "text-brand-ivory hover:text-brand-goldLight"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{ transitionDelay: open ? `${60 + siteConfig.navigation.length * 45}ms` : "0ms" }}
            className={cn(
              "mt-8 border-b border-brand-gold pb-1 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-brand-goldLight transition-all duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
          >
            Book a consultation
          </Link>
        </nav>
      </div>
    </>
  );
}
