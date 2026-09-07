import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Award, HeartHandshake, Leaf, KeyRound, Sparkles, Building2, MapPinned, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Why Vinhomes",
  description:
    "Prime locations, high-quality construction, elegant architecture, secure communities and flexible payment plans. Discover the advantages of choosing Vinhomes Platinum Living in Lagos.",
  path: "/why-vinhomes",
});

const advantages = [
  { Icon: MapPinned, t: "Prime Locations", d: "Addresses chosen for accessibility, surroundings and enduring demand — from Abraham Adesanya Road in Ajah to considered residential corridors." },
  { Icon: Building2, t: "High-Quality Construction", d: "Quality materials and disciplined building practices, delivered by our own development team." },
  { Icon: Sparkles, t: "Elegant Architecture", d: "Contemporary, timeless design — generous light, clean lines and refined finishes." },
  { Icon: ShieldCheck, t: "Secure Communities", d: "Gated, well-managed environments with continuous security for true peace of mind." },
  { Icon: KeyRound, t: "Modern Amenities", d: "Pools, gyms and landscaped grounds — plus the infrastructure that quietly sustains daily life." },
  { Icon: Wallet, t: "Flexible Payment Plans", d: "From outright purchase to structured plans such as a 40% deposit with balance over 8 months." },
  { Icon: Leaf, t: "Sustainable Infrastructure", d: "Clean, forward-thinking energy and water systems built into how we design communities." },
  { Icon: HeartHandshake, t: "Customer-First Service", d: "A concierge-level relationship from first enquiry through handover and beyond." },
  { Icon: Award, t: "Long-Term Property Value", d: "Quality and location working together to sustain the value of what you own." },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        kicker="Why Vinhomes"
        title="Chosen for the way"
        titleAccent="it makes you feel at home"
        lede="We measure ourselves by one outcome — real people living beautifully, securely and wisely. These are the standards behind every Vinhomes community."
        image="/media/images/video-interior-1.jpg"
        crumbs={[{ name: "Why Vinhomes", path: "/why-vinhomes" }]}
      />

      {/* Advantages */}
      <section className="bg-brand-paper py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            kicker="The Vinhomes advantages"
            title="The reasons discerning buyers"
            accent="choose Vinhomes"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col items-center border border-brand-line bg-white p-7 text-center transition-all duration-500 ease-luxe hover:border-brand-gold/60 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 text-brand-goldDeep transition-colors duration-500 group-hover:bg-brand-green900 group-hover:text-brand-goldLight">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-brand-green900">{t}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-brand-charcoal/75">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for today / positioned for tomorrow */}
      <section className="relative overflow-hidden bg-brand-green950 py-24 lg:py-32 texture-dark">
        <div className="absolute inset-0 opacity-15">
          <Image src="/media/images/video-hero.jpg" alt="" fill sizes="100vw" className="object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="kicker kicker-light justify-center lg:justify-start">
                <span className="rule" /> Built for today
              </span>
              <h2 className="display display-light mt-5 text-4xl sm:text-5xl">
                Positioned
                <span className="block font-serif italic text-brand-goldLight">for tomorrow.</span>
              </h2>
              <p className="mt-6 max-w-lg font-sans leading-relaxed text-brand-ivory/75">
                Every community is designed to serve you now — and to remain relevant as your life,
                and the city around you, evolves. Quality construction, resilient infrastructure and
                locations with lasting appeal are how we protect your tomorrow.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/properties" className="btn-gold">
                  View our properties <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["Today", "The home you live in — elegant, secure, comfortable and simply working well."],
                ["Tomorrow", "A community and location engineered to hold their relevance and value."],
              ].map(([t, d]) => (
                <Reveal key={t}>
                  <div className="h-full border-l-2 border-brand-gold/60 bg-brand-green900/40 p-7 text-center backdrop-blur-sm">
                    <h3 className="font-serif text-2xl italic text-brand-goldLight">{t}</h3>
                    <p className="mx-auto mt-3 max-w-[14rem] font-sans text-sm leading-relaxed text-brand-ivory/75">{d}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal className="sm:col-span-2" delay={120}>
                <div className="bg-brand-gold p-7 text-center">
                  <p className="mx-auto max-w-xl font-serif text-xl leading-snug text-brand-green950">
                    “We don&apos;t simply sell addresses. We steward the decisions that let families
                    live beautifully today and grow into tomorrow.”
                  </p>
                  <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-brand-green900">
                    The Vinhomes Standard
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent promise */}
      <section className="bg-brand-ivory py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="Our promise"
                title="Honest, by default."
                accent="No inflated claims"
              />
            </div>
            <div className="space-y-6 text-center lg:col-span-7">
              {[
                ["Transparent figures", "Pricing and payment terms are confirmed in writing. We never publish figures we cannot stand behind."],
                ["Factual positioning", "We distinguish clearly between what a property factually offers and how we position it in the market."],
                ["No fabricated credentials", "We do not inflate our history, awards, client counts or returns. Where we grow, we earn it."],
                ["Considered, never pushy", "Our advisors inform and guide — the decision is always yours, made with clarity."],
              ].map(([t, d]) => (
                <Reveal key={t}>
                  <div className="border-t border-brand-gold/40 pt-5">
                    <h3 className="font-serif text-xl text-brand-green900">{t}</h3>
                    <p className="mx-auto mt-1.5 max-w-lg font-sans text-sm leading-relaxed text-brand-charcoal/75">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Experience the difference a considered partner makes."
        accent="Talk to an advisor"
        primary={{ label: "Book a Consultation", href: "/contact" }}
        image="/media/images/dev-capital-1.jpg"
      />
    </>
  );
}
