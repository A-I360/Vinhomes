import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2, ShieldCheck, Landmark, FileText } from "lucide-react";
import { developments, getFeaturedProperties } from "@/content/developments";
import { insights } from "@/content/insights";
import SectionHeading from "@/components/SectionHeading";
import DevelopmentCard from "@/components/DevelopmentCard";
import PropertyCard from "@/components/PropertyCard";
import InsightCard from "@/components/InsightCard";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import FilmPlayer from "@/components/FilmPlayer";
import { films } from "@/content/films";
import { constructMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata = constructMetadata({
  description:
    "Where Luxury Meets Lifestyle. Vinhomes Platinum Living crafts premium homes, secure communities and considered investment opportunities across Lagos — fully-detached duplexes, solar-powered communities and prime terraces.",
  path: "/",
});

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="texture-grain relative flex min-h-screen items-end overflow-hidden bg-brand-green950">
        <div aria-hidden className="arch-divider absolute inset-x-0 bottom-0 z-[5] h-8 bg-brand-paper sm:h-12" />
        <div className="absolute inset-0">
          <Image
            src="/media/images/video-hero.jpg"
            alt="Vinhomes Platinum Living residential development"
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green950/85 via-brand-green950/30 to-brand-green950/55" />
        </div>

        {/* editorial corner details */}
        <p className="absolute bottom-8 left-8 z-10 hidden animate-fade-in font-sans text-[0.62rem] uppercase tracking-[0.3em] text-brand-ivory/60 [animation-delay:900ms] lg:block">
          Lagos&thinsp;—&thinsp;NG
        </p>
        <div className="absolute bottom-8 right-8 z-10 hidden animate-fade-in flex-col items-center gap-3 [animation-delay:900ms] lg:flex">
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-brand-ivory/60 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="scroll-line h-12" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pb-20 text-center sm:px-8">
          <span className="kicker kicker-light kicker-center justify-center animate-fade-in">
            Vinhomes Platinum Living
          </span>
          <h1 className="display display-light mt-6 animate-fade-up text-5xl sm:text-6xl lg:text-7xl">
            Where Luxury
            <span className="block font-serif italic text-brand-goldLight">Meets Lifestyle</span>
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up font-sans text-lg leading-relaxed text-brand-ivory/85 [animation-delay:150ms]">
            Premium homes and thoughtfully planned communities designed for elegant living,
            secure investment, and lasting value.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-fade-up [animation-delay:300ms]">
            <Link href="/properties" className="btn-gold">
              Explore Properties <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-b border-brand-ivory/40 pb-1 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-brand-ivory/90 transition-colors duration-300 hover:border-brand-goldLight hover:text-brand-goldLight"
            >
              Speak with an advisor
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
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
          <span className="kicker kicker-light kicker-center justify-center">
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
          <span className="kicker kicker-light kicker-center justify-center">
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

      {/* ===================== ON FILM ====================== */}
      <section className="bg-brand-green950 pb-24 texture-dark lg:pb-32">
        <div aria-hidden className="gold-hairline h-px w-full opacity-60" />
        <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-24">
          <Reveal>
            <SectionHeading
              tone="light"
              kicker="Vinhomes on film"
              title="See the standard"
              accent="in motion"
              lede="Press play — moments from Vinhomes Platinum Living, captured in our own footage."
            />
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-12 max-w-5xl">
            <FilmPlayer
              film={films.homepage}
              shape="frame-line frame-line-light"
              caption="Vinhomes Platinum Living — on film"
            />
          </Reveal>
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
              alt="Capital Loft — modern terrace residences"
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

      {/* ===================== FMBN MORTGAGE CTA ====================== */}
      <section className="texture-grain relative overflow-hidden bg-brand-green950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/media/images/video-interior-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="animate-kenburns object-cover object-center opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green950/85 via-brand-green950/70 to-brand-green950/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Copy */}
            <Reveal className="lg:col-span-7">
              <span className="kicker kicker-light">
                <span className="rule" /> FMBN Mortgage Funding <span className="rule" />
              </span>
              <h2 className="display display-light mt-6 text-4xl sm:text-5xl lg:text-[3.5rem]">
                Unlock Up to{" "}
                <span className="font-serif italic text-brand-goldLight">₦50M</span>{" "}
                FMBN Mortgage Funding
                <span className="block font-serif italic text-brand-goldLight">— Hassle-Free</span>
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-brand-ivory/85">
                We take the stress out of the MRIEF mortgage process. From registering you with
                the NHF and pairing you with an accredited Primary Mortgage Bank (PMB) to
                compiling and processing every required document, our expert team manages your
                application end-to-end.
              </p>

              {/* Pillar list */}
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { Icon: ShieldCheck, t: "NHF Registration", d: "We handle your National Housing Fund registration." },
                  { Icon: Landmark, t: "PMB Pairing", d: "Matched to an accredited Primary Mortgage Bank." },
                  { Icon: FileText, t: "Document Compilation", d: "Every required form, prepared and processed." },
                  { Icon: CheckCircle2, t: "End-to-End Support", d: "Expert guidance from application to approval." },
                ].map(({ Icon, t, d }) => (
                  <li key={t} className="flex items-start gap-3 border-t border-brand-gold/30 pt-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/50 text-brand-goldLight">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-serif text-base text-brand-ivory">{t}</p>
                      <p className="mt-0.5 font-sans text-sm leading-relaxed text-brand-ivory/70">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-serif text-xl italic text-brand-goldLight sm:text-2xl">
                Ready to own your dream home?
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=mortgage"
                  className="btn-gold"
                >
                  Start Your Application Today <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink(
                    "Hi Vinhomes Platinum Living, I'm interested in the FMBN MRIEF mortgage (up to ₦50M). Please share how to start my application."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  WhatsApp a mortgage advisor
                </a>
              </div>
            </Reveal>

            {/* Amount / trust card */}
            <Reveal delay={150} className="lg:col-span-5">
              <div className="relative border border-brand-gold/40 bg-brand-green900/40 p-8 backdrop-blur-sm sm:p-10">
                <div aria-hidden className="gold-hairline absolute inset-x-6 top-0 h-px" />
                <div aria-hidden className="gold-hairline absolute inset-x-6 bottom-0 h-px" />
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-brand-goldLight">
                  Up to
                </p>
                <p className="mt-3 font-serif text-6xl text-brand-ivory sm:text-7xl">
                  ₦50<span className="text-brand-goldLight">M</span>
                </p>
                <p className="mt-2 font-sans text-sm uppercase tracking-[0.2em] text-brand-ivory/70">
                  FMBN MRIEF Mortgage
                </p>
                <div className="mt-8 h-px w-16 gold-hairline" />
                <p className="mt-6 font-sans text-sm leading-relaxed text-brand-ivory/80">
                  Seamless NHF &amp; PMB processing. Maximum funding. Zero stress. Let our team
                  turn your MRIEF mortgage eligibility into key-in-hand homeownership — with
                  expert, end-to-end support.
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-brand-ivory/15 pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-brand-green950">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="font-sans text-sm text-brand-ivory/80">
                    Fast-track your mortgage with a dedicated advisor from day one.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
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
