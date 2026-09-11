import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Services",
  description:
    "From premium property development and land & property investment to residential sales, consultation and investment advisory — Vinhomes Platinum Living's services in Lagos.",
  path: "/services",
});

export default function ServicesPage() {
  const active = services.filter((s) => s.active);

  return (
    <>
      <PageHero
        kicker="Services"
        title="Advisory, development"
        titleAccent="and investment — in one place"
        lede="From the ground you choose to the day you receive your keys, we guide every step. Discover the ways Vinhomes Platinum Living can serve you."
        image="/media/images/video-interior-2.jpg"
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="bg-brand-paper py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            kicker="What we offer"
            title="Services built around"
            accent="how you want to live and invest"
            lede="A single, trusted partner for acquiring, developing and investing in prime Lagos real estate — served with the discretion of a private consultancy."
          />

          <div className="mt-16 space-y-14 lg:space-y-24">
            {active.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={s.id}>
                  <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                    <div className={`img-frame relative aspect-[16/11] lg:col-span-7 ${flip ? "shape-arc-alt lg:order-2" : "shape-arc"}`}>
                      <Image
                        src={s.image.src}
                        alt={s.image.alt || s.title}
                        fill
                        sizes="(min-width:1024px) 56vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                      {s.image.credit && (
                        <span className="absolute bottom-4 right-4 bg-brand-green950/60 px-2.5 py-1 font-sans text-[0.6rem] uppercase tracking-[0.16em] text-brand-ivory backdrop-blur-sm">
                          {s.image.credit}
                        </span>
                      )}
                    </div>
                    <div className={`flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left ${flip ? "lg:order-1 lg:items-end lg:text-right" : ""}`}>
                      <span className="kicker justify-center lg:justify-start">
                        <span className="rule" /> 0{i + 1} {flip ? <span className="rule" /> : null}
                      </span>
                      <h2 className="display mt-4 text-2xl sm:text-3xl lg:text-[2rem]">{s.title}</h2>
                      <p className="mt-4 font-sans text-base leading-relaxed text-brand-charcoal/75">
                        {s.description}
                      </p>
                      {s.features && (
                        <ul className={`mt-5 space-y-2.5 font-sans text-sm text-brand-charcoal/80 ${flip ? "" : "text-left"}`}>
                          {s.features.map((f) => (
                            <li key={f} className={`flex items-start gap-2.5 ${flip ? "lg:flex-row-reverse" : ""}`}>
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-goldDeep" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-7">
                        <Link href={`/contact?service=${s.id}`} className="link-arrow">
                          Learn More <ArrowUpRight className="arrow h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process / concierge strip */}
      <section className="bg-brand-green950 py-24 texture-dark">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            tone="light"
            align="center"
            kicker="The Vinhomes approach"
            title="A concierge experience,"
            accent="from first call to keys in hand"
          />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Consult", "We listen first — your lifestyle, budget and goals shape everything."],
              ["02", "Curate", "We match you to residences and opportunities that genuinely fit."],
              ["03", "Commit", "Clear documentation and transparent payment structures, in writing."],
              ["04", "Receive", "Considered handover and an ongoing advisory relationship."],
            ].map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 100}>
                <div className="border-t border-brand-gold/40 pt-5 text-center">
                  <span className="font-serif text-3xl text-brand-gold">{n}</span>
                  <h3 className="mt-3 font-serif text-xl text-brand-ivory">{t}</h3>
                  <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-brand-ivory/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 flex justify-center">
            <Link href="/contact" className="btn-gold">
              Speak with an advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Not sure which service you need?"
        accent="Let's find out together"
        body="Tell us about your plans and our advisors will point you in the right direction — no obligation, no pressure."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        image="/media/images/dev-citadel-2.jpg"
      />
    </>
  );
}
