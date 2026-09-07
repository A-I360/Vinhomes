import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { faqs } from "@/content/insights";
import { siteConfig } from "@/content/site.config";
import { whatsappLink } from "@/lib/site";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about Vinhomes Platinum Living, our developments, payment plans, viewings and how to buy or invest in premium Lagos real estate.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        kicker="Help Centre"
        title="Questions, answered"
        titleAccent="clearly and honestly"
        lede="Everything you need to know about our developments, payments and how we work. Can't find an answer? We're one message away."
        image="/media/images/dev-citadel-1.jpg"
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />

      <section className="bg-brand-paper py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12">
          <aside>
            <SectionHeading kicker="Categories" title="Browse" />
            <nav className="mt-6 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {categories.map((c) => (
                <a key={c} href={`#${c.toLowerCase()}`} className="rounded-full border border-brand-line bg-white px-4 py-2 font-sans text-xs uppercase tracking-[0.12em] text-brand-green900 transition-colors hover:border-brand-gold lg:rounded-none lg:border-0 lg:border-l-2 lg:bg-transparent lg:px-4 lg:py-2 lg:text-left">
                  {c}
                </a>
              ))}
            </nav>
            <div className="mt-8 hidden border border-brand-gold/40 bg-brand-ivory p-6 lg:block">
              <p className="font-serif text-lg text-brand-green900">Still have questions?</p>
              <p className="mt-2 font-sans text-sm text-brand-charcoal/70">We answer quickly.</p>
              <a href={whatsappLink("Hi Vinhomes Platinum Living, I have a question.")} target="_blank" rel="noopener noreferrer" className="btn-dark mt-4 w-full px-4 py-3 text-[0.66rem]">WhatsApp us</a>
            </div>
          </aside>

          <div className="space-y-14">
            {categories.map((c) => {
              const list = faqs.filter((f) => f.category === c);
              return (
                <section key={c} id={c.toLowerCase()} className="scroll-mt-28">
                  <h2 className="border-b-2 border-brand-gold/50 pb-3 font-serif text-2xl text-brand-green900">{c}</h2>
                  <div className="divide-y divide-brand-line">
                    {list.map((f) => (
                      <details key={f.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-sans text-lg font-medium text-brand-green900 sm:text-xl">
                          <span>{f.question}</span>
                          <span className="mt-1 text-2xl font-light text-brand-gold transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 max-w-3xl font-sans leading-relaxed text-brand-charcoal/75">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="A question only your advisor can answer?"
        accent="Talk to us"
        body={`Call or WhatsApp ${siteConfig.phoneDisplay}, or email ${siteConfig.email}.`}
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
