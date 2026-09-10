import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Landmark, TrendingUp, FileText, ArrowRight, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { developments } from "@/content/developments";
import { whatsappLink } from "@/lib/site";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Investment Opportunities",
  description:
    "Invest in prime Lagos real estate with Vinhomes Platinum Living. Prime locations, quality construction, flexible payment structures and clear, factual investment guidance. Invest in space, build lasting value.",
  path: "/investment",
});

const pillars = [
  {
    Icon: MapPin,
    t: "Why Location Matters",
    d: "Location determines how a property is lived in and how relevant it stays. We prioritise established, developing corridors — such as Abraham Adesanya Road in Ajah — where real people want to live and work, because demand underwrites long-term appeal.",
  },
  {
    Icon: Landmark,
    t: "Why Quality Matters",
    d: "A well-built home costs less to maintain, attracts better occupants and holds its appeal. Quality construction is not a luxury — it is the clearest protection of your investment.",
  },
  {
    Icon: TrendingUp,
    t: "Development Potential",
    d: "Well-positioned land and communities in growing areas carry the potential to appreciate as infrastructure, population and amenities mature. We present that potential plainly — as opportunity, never as a guarantee.",
  },
  {
    Icon: FileText,
    t: "Flexible Payment Structures",
    d: "Flexible entry makes premium real estate more attainable. Options range from outright purchase to structured plans — such as a 40% initial deposit with the balance over 8 months at Citadel Oasis. Terms are confirmed in writing.",
  },
];

const formats = [
  {
    name: "Capital Loft",
    role: "Investment-focused",
    note: "Prime, future-ready terraces with flexible outright or structured purchase. 3 Bedroom Terrace and 2 Bedroom Terrace with BQ.",
    img: "/media/images/dev-capital-1.jpg",
  },
  {
    name: "Citadel Oasis",
    role: "Residential community",
    note: "Secure, solar-powered homes opposite CharterHouse School, Abraham Adesanya Road — 40% deposit, balance over 8 months.",
    img: "/media/images/dev-citadel-1.jpg",
  },
  {
    name: "The Emerald",
    role: "Fully-detached duplexes",
    note: "Premium fully-detached residences in 2, 3 and 4 bedroom formats within a modern development.",
    img: "/media/images/dev-emerald-1.jpg",
  },
];

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        kicker="Investment Opportunities"
        title="Invest in space."
        titleAccent="Build lasting value."
        lede="Considered opportunities in prime Lagos real estate — positioned on location, built on quality, and entered on terms that work for you."
        image="/media/images/dev-capital-1.jpg"
        crumbs={[{ name: "Investment", path: "/investment" }]}
      />

      {/* Pillars */}
      <section className="bg-brand-paper py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            kicker="The investor's view"
            title="What separates a home"
            accent="from a lasting asset"
            lede="We guide you through the four forces that shape real estate value — so you invest with context, not guesswork."
          />
          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {pillars.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={(i % 2) * 100}>
                <div className="flex flex-col items-center border-t-2 border-brand-gold/40 pt-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green900 text-brand-goldLight">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-5 font-serif text-2xl text-brand-green900">{t}</h2>
                  <p className="mx-auto mt-3 max-w-md font-sans leading-relaxed text-brand-charcoal/75">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment formats */}
      <section className="bg-brand-ivory py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            kicker="Opportunities now"
            title="Where you could invest today"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden bg-white shadow-card transition-all duration-500 ease-luxe hover:-translate-y-1 hover:shadow-lift">
                  <div className="img-frame shape-archcard relative aspect-[16/10]">
                    <Image src={f.img} alt={`${f.name} investment`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" loading="lazy" />
                    <span className="absolute bottom-4 right-4 bg-brand-green950/70 px-3 py-1 font-sans uppercase tracking-[0.16em] text-[0.6rem] text-brand-goldLight backdrop-blur-sm">
                      {f.role}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-6 text-center">
                    <h3 className="font-serif text-2xl text-brand-green900">{f.name}</h3>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-brand-charcoal/75">{f.note}</p>
                    <Link href={`/properties?dev=${f.name.toLowerCase().replaceAll(" ", "-")}`} className="link-arrow mt-6">
                      Explore {f.name} <ArrowUpRight className="arrow h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fact vs positioning */}
      <section className="bg-brand-green950 py-20 texture-dark">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col items-center justify-center text-center lg:col-span-4">
              <span className="kicker kicker-light kicker-center justify-center"><span className="rule" /> Read the fine print <span className="rule" /></span>
              <h2 className="display display-light mt-4 text-3xl sm:text-4xl">We separate fact from potential.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden border border-brand-ivory/15 bg-brand-green900/30 backdrop-blur-sm">
                <div className="grid divide-y divide-brand-ivory/10 text-center font-sans text-sm sm:divide-y-0 sm:grid-cols-3 sm:divide-x">
                  {[
                    ["Fact", "Confirmed property details — location, configuration, amenities, published payment structures and status as entered in our records."],
                    ["Positioning", "How we frame a development's appeal and character — for example 'prime location' or 'future-ready community.'"],
                    ["Estimate", "Potential or outlook (such as appreciation prospects) framed as possibility only — never presented as a guaranteed return."],
                  ].map(([t, d]) => (
                    <div key={t} className="p-6">
                      <p className="font-serif text-lg text-brand-goldLight">{t}</p>
                      <p className="mx-auto mt-2 max-w-xs leading-relaxed text-brand-ivory/75">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 border border-brand-gold bg-brand-green900/40 p-5 text-center">
                <Info className="h-5 w-5 shrink-0 text-brand-gold" />
                <p className="font-sans text-sm leading-relaxed text-brand-ivory/85">
                  Property values and investment returns are subject to market conditions and
                  individual circumstances. Always obtain current figures and legal advice before
                  committing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment structures */}
      <section className="bg-brand-paper py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="img-frame shape-arch relative order-2 aspect-[4/5] lg:order-1">
              <Image src="/media/images/video-landscape-2.jpg" alt="Sustainable infrastructure in a Vinhomes community" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover" loading="lazy" />
            </Reveal>
            <div className="order-1 flex flex-col items-center lg:order-2">
              <SectionHeading
                kicker="Flexible entry"
                title="Payment structures"
                accent="that fit your plan"
              />
              <ul className="mt-8 w-full max-w-lg space-y-6 text-center">
                {developments.flatMap((d) =>
                  (d.paymentPlans ?? []).map((pp) => (
                    <li key={`${d.slug}-${pp.label}`} className="border-b border-brand-line pb-5">
                      <span className="mx-auto mb-3 block h-2 w-2 rotate-45 bg-brand-gold" />
                      <p className="font-serif text-xl text-brand-green900">{d.name}</p>
                      <p className="mx-auto mt-2 max-w-md font-sans text-sm leading-relaxed text-brand-charcoal/75">
                        {pp.label}. {pp.initialDeposit ? `${pp.initialDeposit}` : ""}{" "}
                        {pp.installmentDuration ? `${pp.installmentDuration}.` : ""} {pp.note}
                      </p>
                    </li>
                  ))
                )}
              </ul>
              <a
                href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to understand the payment structures available for investment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-9"
              >
                Ask about payment plans <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment enquiry */}
      <section className="bg-brand-ivory py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center text-center">
              <SectionHeading
                kicker="Investment Enquiry"
                title="Discuss an opportunity"
                accent="with a senior advisor"
                lede="Share your objectives — budget, timeline and the kind of asset you have in mind. We will respond with a considered, factual overview of what fits."
              />
              <ul className="mt-8 space-y-3 font-sans text-sm text-brand-charcoal/80">
                <li className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rotate-45 bg-brand-gold" /> One-to-one, no-pressure guidance</li>
                <li className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rotate-45 bg-brand-gold" /> Current pricing &amp; terms in writing</li>
                <li className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 rotate-45 bg-brand-gold" /> Private on-site or virtual reviews</li>
              </ul>
            </div>
            <Reveal className="panel p-6 sm:p-8">
              <EnquiryForm defaultProperty="General enquiry" compact />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
