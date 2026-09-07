import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site.config";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "How Vinhomes Platinum Living collects, uses and protects your personal information.",
  path: "/privacy",
});

const sections: [string, string][] = [
  ["1. Who we are", `${siteConfig.brandName} is a premium real estate company in Lagos, Nigeria. When you enquire about our properties, services or investment opportunities, we act as the controller of the personal information you choose to share.`],
  ["2. Information we collect", "We collect the details you provide through our enquiry and contact forms, by phone, WhatsApp or email — typically your name, phone number, email address, the property you are interested in and the nature of your enquiry."],
  ["3. How we use it", "We use your information to respond to your enquiry, arrange viewings and consultations, send you requested brochures or updates, and — only if you opt in — occasional insights. We do not sell your personal information."],
  ["4. WhatsApp & messaging", "When you message us on WhatsApp, our conversation is governed by WhatsApp's own terms and privacy policy. Please message us there only if you are comfortable doing so."],
  ["5. Analytics", "We may use privacy-respecting analytics to understand how visitors use this website so we can improve it. No sensitive personal information is collected for this purpose."],
  ["6. Retention & security", "We keep enquiry records only as long as needed to serve you and meet legal obligations, and we take reasonable measures to protect them."],
  ["7. Your rights", "You may request access to, correction of, or deletion of the personal information we hold about you, or opt out of marketing at any time."],
  ["8. Contact", `For any privacy request, contact us at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" lede="How we handle the information you share with us." image="/media/images/citadel-interior.jpg" crumbs={[{ name: "Privacy Policy", path: "/privacy" }]} compact />
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
          <p className="mt-12 border-t border-brand-line pt-6 font-sans text-sm leading-relaxed text-brand-charcoal/60">
            This policy may be updated as our practices or the law evolve. The current version
            always appears here.
          </p>
        </div>
      </section>
    </>
  );
}
