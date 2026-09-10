import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import FounderSection from "@/components/FounderSection";
import FilmPlayer from "@/components/FilmPlayer";
import { films } from "@/content/films";
import { values } from "@/content/values";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us",
  description:
    "Vinhomes Platinum Living is a premium Lagos real estate brand redefining modern living with elegance, trust and innovation. Learn who we are, our vision, mission and core values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Vinhomes Platinum Living"
        title="More than homes."
        titleAccent="A better way to live."
        lede="A premium real estate brand focused on creating homes and communities that combine elegance, trust, innovation, security, sustainability and genuine customer satisfaction."
        image="/media/images/video-hero.jpg"
        crumbs={[{ name: "About", path: "/about" }]}
      />

      {/* WHO WE ARE */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal className="img-frame frame-line shape-arch relative order-2 aspect-[4/5] lg:order-1">
            <Image
              src="/media/images/dev-citadel-1.jpg"
              alt="Citadel Oasis — modern residential community on Abraham Adesanya Road, Ajah"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-6 left-6 bg-brand-green950/70 px-3 py-1.5 font-sans uppercase tracking-[0.16em] text-[0.62rem] text-brand-goldLight backdrop-blur-sm">
              Our communities
            </span>
          </Reveal>
          <div className="order-1 text-center lg:order-2">
            <span className="kicker kicker-center justify-center">
              <span className="rule" /> Who We Are <span className="rule" />
            </span>
            <h2 className="display mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
              A premium brand for
              <span className="block font-serif italic text-brand-goldDeep">a discerning generation</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-brand-charcoal/75">
              Vinhomes Platinum Living is a premium real estate brand redefining modern living with
              elegance, trust and innovation. We offer prime land, beautiful homes and quality
              building construction — delivering spaces that inspire comfort, style and lasting
              value.
            </p>
            <p className="mx-auto mt-4 max-w-xl font-sans leading-relaxed text-brand-charcoal/75">
              We are, at heart, custodians of how people live. That means every plot we position,
              every residence we build and every community we shape is judged against a single
              standard: does it make life more elegant, more secure and more fulfilling?
            </p>
            <div className="mx-auto mt-8 max-w-xl border-y border-brand-gold/40 py-5">
              <p className="font-serif text-2xl italic leading-snug text-brand-green900">
                “We create more than homes — we craft lifestyles.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative overflow-hidden bg-brand-green950 py-24 lg:py-28 texture-dark">
        <div className="absolute inset-0 opacity-[0.16]">
          <Image src="/media/images/dev-emerald-1.jpg" alt="" fill sizes="100vw" className="object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal className="text-center">
              <span className="kicker kicker-light kicker-center justify-center">
                <span className="rule" /> Our Vision <span className="rule" />
              </span>
              <h2 className="display display-light mt-5 text-3xl sm:text-4xl">The name families trust.</h2>
              <p className="mx-auto mt-6 max-w-md font-sans text-lg leading-relaxed text-brand-ivory/80">
                To be the most trusted name in luxury real estate, shaping communities with
                excellence and innovation.
              </p>
              <div className="mx-auto mt-8 h-px w-24 gold-hairline" />
              <p className="mx-auto mt-8 max-w-md font-serif text-2xl italic leading-snug text-brand-goldLight">
                Excellence and innovation are not ambitions we display — they are how we work.
              </p>
            </Reveal>
            <Reveal delay={120} className="text-center">
              <span className="kicker kicker-light kicker-center justify-center">
                <span className="rule" /> Our Mission <span className="rule" />
              </span>
              <h2 className="display display-light mt-5 text-3xl sm:text-4xl">Delivered in every home.</h2>
              <ul className="mx-auto mt-7 max-w-md space-y-6 border-t border-brand-ivory/15 pt-8 text-center">
                {[
                  ["Elegant & secure", "Deliver elegant, secure and sustainable homes."],
                  ["Service beyond sale", "Provide unmatched customer service at every step."],
                  ["Smart urban living", "Inspire lifestyles through smart urban solutions."],
                ].map(([t, d]) => (
                  <li key={t}>
                    <span className="mx-auto mb-2 block h-2 w-2 rotate-45 bg-brand-gold" />
                    <p className="font-serif text-xl text-brand-ivory">{t}</p>
                    <p className="mx-auto mt-1 max-w-sm font-sans text-sm leading-relaxed text-brand-ivory/70">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FILMS — our own footage */}
      <section className="bg-brand-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            kicker="Watch our story"
            title="Vinhomes, on film"
            accent="every frame our own footage"
            lede="Press play on any film below — captured across Vinhomes Platinum Living and presented here for you."
          />
          <Reveal delay={100} className="mx-auto mt-12 max-w-5xl">
            <FilmPlayer
              film={films.feature}
              shape="frame-line"
              caption="The Vinhomes story — on film"
            />
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {films.moments.map((film, i) => (
              <Reveal key={film.src} delay={i * 120} className="mx-auto w-full max-w-[16rem] sm:max-w-none">
                <FilmPlayer film={film} shape="shape-arch" aspect="aspect-[9/16]" caption={film.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-brand-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            kicker="Core Values"
            title="The principles behind"
            accent="every home we build"
            lede="Five values guide how we treat our clients, our land and our communities — expressed here through the spaces we create."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 100} className={i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""}>
                <article className="img-frame shape-archcard group relative flex aspect-[4/5] items-end justify-center overflow-hidden">
                  <Image
                    src={v.image.src}
                    alt={v.image.alt || v.title}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] ease-luxe group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green950/92 via-brand-green950/25 to-transparent" />
                  <div className="relative z-10 p-6 text-center sm:p-8">
                    <span className="font-serif text-4xl text-brand-gold/90">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 font-serif text-2xl text-brand-ivory">{v.title}</h3>
                    <p className="mx-auto mt-2 max-w-[15rem] font-sans text-sm italic leading-relaxed text-brand-ivory/85">
                      {v.statement}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            {/* Editorial accent card */}
            <Reveal delay={200}>
              <div className="flex aspect-[4/5] flex-col items-center justify-between border border-brand-gold/30 bg-brand-green950 p-7 text-center">
                <div>
                  <span className="kicker kicker-light kicker-center justify-center"><span className="rule" /> Our Philosophy <span className="rule" /></span>
                  <h3 className="mt-5 font-serif text-3xl leading-snug text-brand-ivory">
                    We craft lifestyles, <span className="italic text-brand-goldLight">not just structures.</span>
                  </h3>
                </div>
                <div>
                  <p className="mx-auto max-w-xs font-sans text-sm leading-relaxed text-brand-ivory/70">
                    Every decision — where we build, what we include, how we serve — begins with
                    the life it will support.
                  </p>
                  <Link href="/services" className="btn-outline-light mt-6 w-full px-4 py-3 text-[0.66rem]">
                    Explore our services
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FounderSection />

      <CTABand
        title="Experience the Vinhomes difference for yourself."
        accent="Meet our advisors"
        body="Discover who we are by seeing what we build. Book a private consultation or visit our Lagos office."
        primary={{ label: "Get in Touch", href: "/contact" }}
        image="/media/images/video-interior-2.jpg"
      />
    </>
  );
}
