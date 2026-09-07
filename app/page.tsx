import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, MapPin, Home, ShieldCheck, Wallet, TrendingUp } from "lucide-react";
import { developments, getFeaturedProperties } from "@/content/developments";
import { insights } from "@/content/insights";
import SectionHeading from "@/components/SectionHeading";
import DevelopmentCard from "@/components/DevelopmentCard";
import PropertyCard from "@/components/PropertyCard";
import InsightCard from "@/components/InsightCard";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  description:
    "Where Luxury Meets Lifestyle. Vinhomes Platinum Living crafts premium homes, secure communities and considered investment opportunities across Lagos — fully-detached duplexes, solar-powered communities and prime terraces.",
  path: "/",
});

const trustItems = [
  { Icon: Home, label: "Premium Developments" },
  { Icon: Home, label: "Modern Homes" },
  { Icon: ShieldCheck, label: "Secure Communities" },
  { Icon: Wallet, label: "Flexible Payment Options" },
  { Icon: TrendingUp, label: "Long-Term Value" },
];

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-brand-green950">
        <div className="absolute inset-0">
          <Image
            src="/media/images/video-hero.jpg"
            alt="Vinhomes Platinum Living residential development"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/45 to-brand-green950/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green950/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="kicker kicker-light animate-fade-in">
              <span className="rule" />
              Vinhomes Platinum Living
            </span>
            <h1 className="display display-light mt-6 animate-fade-up text-5xl sm:text-6xl lg:text-7xl">
              Where Luxury
              <span className="block font-serif italic text-brand-goldLight">Meets Lifestyle</span>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up font-sans text-lg leading-relaxed text-brand-ivory/80 [animation-delay:150ms]">
              Premium homes and thoughtfully planned communities designed for elegant living,
              secure investment, and lasting value.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:300ms]">
              <Link href="/properties" className="btn-gold">
                Explore Properties <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Speak with an Advisor
              </Link>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="mt-16 flex items-center gap-4 animate-fade-in [animation-delay:700ms]">
            <span className="scroll-line" />
            <span className="font-sans text-[0.66rem] uppercase tracking-[0.24em] text-brand-ivory/60">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* ========================= TRUST STRIP ========================= */}
      <section className="bg-brand-ivory">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {trustItems.map(({ Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 text-center">
                <span className="hidden h-px w-4 bg-brand-gold/60 sm:block" />
                <Icon className="h-5 w-5 shrink-0 text-brand-goldDeep" strokeWidth={1.4} />
                <span className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-brand-green900">
                  {label}
                </span>
                <span className="hidden h-px w-4 bg-brand-gold/60 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FEATURED DEVELOPMENTS ==================== */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              kicker="Signature Developments"
              title="Featured developments,"
              accent="crafted for modern living"
              lede="Three considered addresses — each with its own character, from elegant fully-detached duplexes to a secure solar-powered community and a future-ready investment terrace."
            />
            <Link href="/properties" className="btn-outline shrink-0">
              View all properties
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {developments.map((d, i) => (
              <Reveal key={d.slug} delay={i * 120}>
                <DevelopmentCard d={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PHILOSOPHY / SPLIT ===================== */}
      <section className="overflow-hidden bg-brand-ivory">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[24rem] lg:min-h-[34rem]">
            <Image
              src="/media/images/video-interior-1.jpg"
              alt="A Vinhomes Platinum Living residence"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <span className="kicker">
              <span className="rule" /> Our Philosophy
            </span>
            <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-5xl">
              We craft lifestyles,<span className="block font-serif italic text-brand-goldDeep">not just structures.</span>
            </h2>
            <div className="mt-6 h-px w-16 gold-hairline" />
            <p className="mt-6 max-w-lg font-sans leading-relaxed text-brand-charcoal/75">
              Vinhomes Platinum Living is a premium real estate brand redefining modern living with
              elegance, trust and innovation. We create more than homes — we craft lifestyles.
              Every residence we build is a considered environment for comfort, security and
              quiet distinction.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Elegant, secure and sustainable homes",
                "Prime land and quality building construction",
                "Unmatched, concierge-level customer service",
                "Communities shaped by smart urban thinking",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 font-sans text-brand-green900">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link href="/about" className="link-arrow">
                Discover who we are <ArrowUpRight className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SIGNATURE AMENITIES ==================== */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            kicker="The Vinhomes Standard"
            title="Considered amenities,"
            accent="quietly elevating every day"
            lede="From a resort-style pool and fully fitted gym to solar-powered living and clean water, the amenities in our communities are chosen to enrich real daily life — never as decoration."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { src: "/media/images/dev-citadel-1.jpg", alt: "A planned, secure Vinhomes community", label: "Secure communities" },
              { src: "/media/images/video-landscape-1.jpg", alt: "Communal outdoor surroundings at a Vinhomes development", label: "Planned surroundings" },
              { src: "/media/images/dev-emerald-1.jpg", alt: "Residences built to the Vinhomes standard", label: "The Vinhomes standard" },
            ].map((a, i) => (
              <Reveal key={a.src} delay={i * 120} className="img-frame relative aspect-[4/5]">
                <Image src={a.src} alt={a.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" loading="lazy" />
                <figcaption className="absolute bottom-5 left-5 font-serif text-2xl text-brand-ivory drop-shadow">
                  {a.label}
                </figcaption>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-line pt-8 font-sans sm:grid-cols-3 lg:grid-cols-5">
              {[
                "24/7 Security",
                "Clean Water",
                "Effective Drainage",
                "Children's Play Area",
                "Football Pitch",
                "Landscaped Grounds",
                "Private Parking",
                "Power Backup",
              ].map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-sm text-brand-charcoal/75">
                  <span className="h-1 w-1 rotate-45 bg-brand-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ==================== FEATURED PROPERTY LISTINGS ================= */}
      <section className="bg-brand-ivory py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              kicker="Featured Residences"
              title="Homes available now,"
              accent="ready to be yours"
            />
            <Link href="/properties" className="btn-ghost-link shrink-0">
              Browse all properties <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <PropertyCard property={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOCATION SPOTLIGHT ====================== */}
      <section className="relative overflow-hidden bg-brand-green950 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/media/images/dev-citadel-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-green950/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="kicker kicker-light">
                <span className="rule" /> Location — Ajah, Lagos
              </span>
              <h2 className="display display-light mt-5 text-4xl sm:text-5xl">
                Citadel Oasis
                <span className="block font-serif italic text-brand-goldLight">
                  opposite CharterHouse School
                </span>
              </h2>
              <p className="mt-6 flex items-center gap-2 font-sans text-brand-ivory/80">
                <MapPin className="h-5 w-5 text-brand-gold" /> Around Abraham Adesanya Road,
                Ajah, Lagos
              </p>
            </div>
            <div className="flex flex-col justify-center border-l border-brand-ivory/15 pl-6 sm:pl-10">
              <p className="font-serif text-2xl italic leading-snug text-brand-ivory sm:text-3xl">
                “Secure, solar-powered living in one of Lagos&apos; most discussed residential
                corridors — a community built for family, convenience and enduring appeal.”
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/properties?dev=citadel-oasis" className="btn-light">
                  Explore Citadel Oasis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INVESTMENT TEASER ====================== */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionHeading
              kicker="Investment"
              title="Invest in space."
              accent="Build lasting value."
              lede="Capital Loft is our investment-focused address — a prime, future-ready development of modern terraces with flexible entry, from outright purchase to structured plans."
            />
            <ul className="mt-8 space-y-4 font-sans">
              {[
                ["Prime, accessible location", "Selected for surroundings and everyday convenience."],
                ["Flexible payment plans", "Outright purchase or a staged, structured option."],
                ["3 Bedroom Terrace & 2 Bedroom Terrace with BQ", "Contemporary formats with strong demand fundamentals."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 font-serif text-brand-goldDeep">
                    •
                  </span>
                  <div>
                    <p className="font-serif text-lg text-brand-green900">{t}</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-brand-charcoal/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/investment" className="btn-dark">
                Explore Investment
              </Link>
              <Link href="/properties?dev=capital-loft" className="btn-outline">
                Capital Loft homes
              </Link>
            </div>
          </div>
          <Reveal className="img-frame relative aspect-[4/5]">
            <Image
              src="/media/images/dev-capital-1.jpg"
              alt="A Vinhomes Platinum Living investment development"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
            <span className="absolute left-5 top-5 bg-brand-green950/70 px-3 py-1.5 font-sans uppercase tracking-[0.16em] text-[0.62rem] text-brand-goldLight backdrop-blur-sm">
              Vinhomes development
            </span>
          </Reveal>
        </div>
      </section>

      {/* ===================== INSIGHTS TEASER ======================== */}
      <section className="bg-brand-ivory py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading kicker="Insights" title="Notes on property," accent="written plainly" />
            <Link href="/insights" className="btn-ghost-link shrink-0">
              All insights <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((post, i) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <InsightCard post={post} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ============================= */}
      <CTABand
        title="Your next chapter begins with a conversation."
        accent="Speak with an advisor"
        body="Tell us how you want to live — a private duplex, a place within a secure community, or a considered investment. Our advisors respond personally."
        primary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
