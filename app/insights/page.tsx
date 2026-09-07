import PageHero from "@/components/PageHero";
import InsightCard from "@/components/InsightCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { insights } from "@/content/insights";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Insights & Blog",
  description:
    "Practical notes on buying, investing in and living in Lagos real estate — from duplex buying guides and flexible payment plans to location and amenities insight from Vinhomes Platinum Living.",
  path: "/insights",
});

export default function InsightsPage() {
  const categories = [...new Set(insights.map((i) => i.category))];

  return (
    <>
      <PageHero
        kicker="Insights"
        title="Property thinking,"
        titleAccent="written in plain English"
        lede="Guides and notes to help you buy, invest and live well in Lagos — with clarity, and never a hard sell."
        image="/media/images/emerald-interior.jpg"
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />

      <section className="bg-brand-paper py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-brand-line pb-6">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-brand-gold/40 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.12em] text-brand-green900">
                {c}
              </span>
            ))}
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <InsightCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Prefer to talk through your property questions?"
        accent="Speak with an advisor"
        body="A private conversation is often more useful than an article. We're here when you're ready."
        primary={{ label: "Contact an advisor", href: "/contact" }}
      />
    </>
  );
}
