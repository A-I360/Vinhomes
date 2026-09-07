import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site.config";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Website Use",
  description: "The terms that govern your use of the Vinhomes Platinum Living website.",
  path: "/terms",
});

const sections: [string, string][] = [
  ["1. About this website", "This website is provided by Vinhomes Platinum Living, a premium real estate company based in Lagos, Nigeria, to help you learn about our developments, services and investment opportunities."],
  ["2. Information is for general guidance", "Content on this site — including descriptions, images and positioning — is provided for general information only. Renderings and concept imagery are clearly labelled as artist impressions and conceptual renders, and may not exactly reflect the final property."],
  ["3. Pricing, availability & timelines", "Prices, availability and payment structures are managed through our content system and may change without notice. Where figures are not shown, please confirm current details with an advisor in writing before relying on them."],
  ["4. Not financial or legal advice", "Nothing on this website constitutes financial, investment or legal advice. Property values and investment returns are subject to market conditions and individual circumstances. Seek independent professional advice before making decisions."],
  ["5. Intellectual property", "All content, branding and imagery on this site belong to Vinhomes Platinum Living or are used with permission. You may not reproduce them without our written consent."],
  ["6. No misrepresentation", "We do not publish inflated credentials, fabricated statistics, awards or guaranteed returns. Where you see figures or claims, they reflect what we can factually support or are clearly framed as positioning or estimates."],
  ["7. Contact", `Questions about these terms? Reach us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`],
];

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms & Website Use" lede="A few clear terms for using this website." image="/media/images/hero-home.jpg" crumbs={[{ name: "Terms", path: "/terms" }]} compact />
      <section className="bg-brand-paper py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="font-sans text-sm text-brand-charcoal/60">Last updated: 1 September 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map(([t, d]) => (
              <section key={t}>
                <h2 className="border-l-2 border-brand-gold pl-4 font-serif text-2xl text-brand-green900">{t}</h2>
                <p className="mt-3 font-sans leading-relaxed text-brand-charcoal/80">{d}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
