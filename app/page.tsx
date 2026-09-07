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

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-24 text-center sm:px-8">
          <span className="kicker kicker-light justify-center animate-fade-in">
            <span className="rule" />
            Vinhomes Platinum Living
            <span className="rule" />
          </span>
          <h1 className="display display-light mt-6 animate-fade-up text-5xl sm:text-6xl lg:text-7xl">
            Where Luxury
            <span className="block font-serif italic text-brand-goldLight">Meets Lifestyle</span>
          </h1>
          <p className="mt-8 max-w-2xl animate-fade-up font-sans text-lg leading-relaxed text-brand-ivory/85 [animation-delay:150ms]">
            Premium homes and thoughtfully planned communities designed for elegant living,
            secure investment, and lasting value.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <Link href="/properties" className="btn-gold">
              Explore Properties <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Speak with an Advisor
            </Link>
          </div>

          {/* quick trust chips */}
          <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden border border-brand-ivory/15 bg-brand-ivory/10 backdrop-blur-sm animate-fade-in [animation-delay:450ms] sm:grid-cols-4">
            {["Premium Homes", "Secure Communities", "Flexible Payments", "Long-Term Value"].map((t) => (
              <div key={t} className="bg-brand-green950/30 px-3 py-3 text-center font-sans text-[0.62rem] uppercase tracking-[0.16em] text-brand-ivory/85">
                {t}
              </div>
            ))}
          </div>

          {/* scroll indicator */}
          <div className="mt-14 flex flex-col items-center gap-3 animate-fade-in [animation-delay:700ms]">
            <span className="scroll-line" />
            <span className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-brand-ivory/60">
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
          <Reveal>
            <SectionHeading
              kicker="Signature Developments"
              title="Featured developments,"
              accent="crafted for modern living"
              lede="Three considered addresses — each with its own character, from elegant fully-detached duplexes to a secure solar-powered community and a future-ready investment terrace."
            />
            <div className="mt-9 flex justify-center">
              <Link href="/properties" className="btn-outline">
                View all properties
              </Link>
            </div>
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

      {/* ====================== PHILOSOPHY (immersive) ================= */}
      <section className="relative flex min-h-[42rem] items-center overflow-hidden bg-brand-green950 py-28">
        <div className="absolute inset-0">
          <Image
            src="/media/images/video-interior-1.jpg"
            alt="A refined Vinhomes Platinum Living residence"
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green950/75 via-brand-green950/55 to-brand-green950/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="kicker kicker-light justify-center">
            <span className="rule" /> Our Philosophy <span className="rule" />
          </span>
          <h2 className="display display-light mt-6 text-4xl sm:text-5xl">
            We craft lifestyles,<span className="block font-serif italic text-brand-goldLight">not just structures.</span>
          </h2>
          <div className="mx-auto mt-7 h-px w-24 gold-hairline" />
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-relaxed text-brand-ivory/85">
            We are a premium real estate brand redefining modern living with elegance, trust and
            innovation. Every residence we build is a considered environment for comfort,
            security and quiet distinction.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-brand-ivory">
            {["Elegant & sustainable homes", "Prime land", "Concierge service", "Smart urban living"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-goldLight" /> {t}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/about" className="btn-light">
              Discover who we are <ArrowUpRight className="h-4 w-4" />
            </Link>
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
              <Reveal key={a.src} delay={i * 120} className="img-frame shape-arch relative aspect-[4/5]">
                <Image src={a.src} alt={a.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-green950/85 via-brand-green950/30 to-transparent px-4 pb-6 pt-16 text-center">
                  <figcaption className="font-serif text-2xl text-brand-ivory">{a.label}</figcaption>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-line pt-8 font-sans text-center sm:grid-cols-3 lg:grid-cols-5">
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
                <li key={a} className="inline-flex items-center justify-center gap-2 text-sm text-brand-charcoal/75">
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
          <Reveal>
            <SectionHeading
              kicker="Featured Residences"
              title="Homes available now,"
              accent="ready to be yours"
            />
            <div className="mt-9 flex justify-center">
              <Link href="/properties" className="btn-ghost-link">
                Browse all properties <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
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
      <section className="relative flex min-h-[40rem] items-center overflow-hidden bg-brand-green950 py-28 text-center">
        <div className="absolute inset-0">
          <Image
            src="/media/images/dev-citadel-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green950/80 via-brand-green950/55 to-brand-green950/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
          <span className="kicker kicker-light justify-center">
            <span className="rule" /> Location — Ajah, Lagos <span className="rule" />
          </span>
          <h2 className="display display-light mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Citadel Oasis
            <span className="block font-serif italic text-brand-goldLight">
              opposite CharterHouse School
            </span>
          </h2>
          <p className="mt-5 inline-flex items-center justify-center gap-2 font-sans text-brand-ivory/85">
            <MapPin className="h-5 w-5 text-brand-gold" /> Around Abraham Adesanya Road, Ajah, Lagos
          </p>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-brand-ivory/90 sm:text-3xl">
            “Secure, solar-powered living in one of Lagos&apos; most discussed residential
            corridors — a community built for family, convenience and enduring appeal.”
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/properties?dev=citadel-oasis" className="btn-light">
              Explore Citadel Oasis
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== INVESTMENT TEASER ====================== */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              kicker="Investment"
              title="Invest in space."
              accent="Build lasting value."
              lede="Capital Loft is our investment-focused address — a prime, future-ready development of modern terraces with flexible entry, from outright purchase to structured plans."
            />
            <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-5 text-center font-sans text-brand-charcoal/80">
              <div><p className="font-serif text-2xl text-brand-green900">Prime</p><p className="text-sm">accessible location</p></div>
              <span className="hidden h-10 w-px bg-brand-line sm:block" />
              <div><p className="font-serif text-2xl text-brand-green900">Flexible</p><p className="text-sm">outright or structured</p></div>
              <span className="hidden h-10 w-px bg-brand-line sm:block" />
              <div><p className="font-serif text-2xl text-brand-green900">3 &amp; 2 Beds</p><p className="text-sm">terrace formats</p></div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/investment" className="btn-dark">Explore Investment</Link>
              <Link href="/properties?dev=capital-loft" className="btn-outline">Capital Loft homes</Link>
            </div>
          </Reveal>
          <Reveal className="img-frame shape-archcard relative mt-14 aspect-[21/10]">
            <Image
              src="/media/images/dev-capital-1.jpg"
              alt="A Vinhomes Platinum Living investment development"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-6 left-6 bg-brand-green950/70 px-3 py-1.5 font-sans uppercase tracking-[0.16em] text-[0.62rem] text-brand-goldLight backdrop-blur-sm">
              Capital Loft
            </span>
          </Reveal>
        </div>
      </section>

      {/* ===================== INSIGHTS TEASER ======================== */}
      <section className="bg-brand-ivory py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading kicker="Insights" title="Notes on property," accent="written plainly" />
            <div className="mt-9 flex justify-center">
              <Link href="/insights" className="btn-ghost-link">
                All insights <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
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
