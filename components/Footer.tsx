import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import Brand from "@/components/Brand";
import Newsletter from "@/components/Newsletter";

/* Only channels with a verified destination are shown — WhatsApp is the
   confirmed direct line. */
const socials = [{ label: "WhatsApp", href: siteConfig.social.whatsapp, Icon: MessageCircle }];

export default function Footer() {
  return (
    <footer className="bg-brand-green950 text-brand-ivory texture-dark">
      <div aria-hidden className="gold-hairline h-px w-full opacity-70" />
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Brand markWidth={120} tone="light" withWordmark />
            <p className="mt-6 font-serif text-lg italic text-brand-goldLight">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-brand-ivory/70">
              We create more than homes — we craft lifestyles. Premium homes, prime land and
              quality building construction across Lagos, delivered with elegance, trust and
              lasting value.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vinhomes on ${label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-ivory/20 text-brand-ivory/80 transition-all duration-500 hover:border-brand-gold hover:text-brand-goldLight"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow flex items-center gap-2.5 text-brand-goldLight/90">
              <span aria-hidden className="h-3 w-px bg-brand-gold" />
              Explore
            </h3>
            <ul className="mt-5 space-y-3 font-sans text-sm text-brand-ivory/80">
              {[
                { label: "Properties", href: "/properties" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Investment", href: "/investment" },
                { label: "Why Vinhomes", href: "/why-vinhomes" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-goldLight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow flex items-center gap-2.5 text-brand-goldLight/90">
              <span aria-hidden className="h-3 w-px bg-brand-gold" />
              Company
            </h3>
            <ul className="mt-5 space-y-3 font-sans text-sm text-brand-ivory/80">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "FAQs", href: "/faq" },
                { label: "Insights", href: "/insights" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-goldLight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <Newsletter />
            <ul className="mt-8 space-y-4 border-t border-brand-ivory/10 pt-6 font-sans text-sm">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="group flex items-start gap-3 text-brand-ivory/85 hover:text-brand-goldLight">
                  <Phone className="mt-0.5 h-4 w-4 text-brand-gold" />
                  <span>
                    <span className="block text-brand-ivory/50">Call us</span>
                    {siteConfig.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="group flex items-start gap-3 text-brand-ivory/85 hover:text-brand-goldLight">
                  <Mail className="mt-0.5 h-4 w-4 text-brand-gold" />
                  <span>
                    <span className="block text-brand-ivory/50">Email us</span>
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-ivory/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <address className="not-italic">
                  <span className="block text-brand-ivory/50">Visit our office</span>
                  No. 41, Shasha Road, Cele B/Stop,<br /> Akowonjo Road, 2nd Floor,<br />
                  Same Building with GIG Motors, Lagos.
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-ivory/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-center font-sans text-xs text-brand-ivory/50 sm:px-8 lg:flex-row lg:px-12">
          <p>
            &copy; {new Date().getFullYear()} Vinhomes Platinum Living. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">{siteConfig.tagline}</p>
          <a
            href="#main"
            className="inline-flex items-center gap-2 uppercase tracking-[0.2em] transition-colors hover:text-brand-goldLight"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
