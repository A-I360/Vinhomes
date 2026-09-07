import { Phone, Mail, MapPin, CalendarDays, MessageCircle, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/content/site.config";
import { whatsappLink } from "@/lib/site";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Contact Vinhomes Platinum Living. Call or WhatsApp 0703 672 4517, email vplatinumliving@gmail.com, or visit our office on Shasha Road, Akowonjo, Lagos. Book a private consultation or viewing.",
  path: "/contact",
});

export default function ContactPage() {
  const cards = [
    { Icon: Phone, t: "Call Us", line1: siteConfig.phoneDisplay, line2: "Mon–Sat, 9am–6pm", href: `tel:${siteConfig.phone}` },
    { Icon: Mail, t: "Email Us", line1: siteConfig.email, line2: "Replies within one working day", href: `mailto:${siteConfig.email}` },
    { Icon: MessageCircle, t: "WhatsApp", line1: "Chat with an advisor", line2: "Fastest response", href: whatsappLink("Hi Vinhomes Platinum Living, I'd like to get in touch.") },
    { Icon: MapPin, t: "Visit Our Office", line1: "Shasha Rd, Akowonjo", line2: "2nd Floor, GIG Motors building", href: "#visit" },
  ];

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Begin the conversation."
        titleAccent="We reply personally."
        lede="Call, message or visit — a Vinhomes advisor is ready to discuss your next home or investment."
        image="/media/images/dev-citadel-2.jpg"
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="bg-brand-paper py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ Icon, t, line1, line2, href }, i) => (
              <Reveal key={t} delay={i * 80}>
                <a href={href} className="group flex h-full flex-col border border-brand-line bg-white p-6 transition-all duration-500 ease-luxe hover:border-brand-gold/60 hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 text-brand-goldDeep transition-colors group-hover:bg-brand-green900 group-hover:text-brand-goldLight">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-brand-green900">{t}</h3>
                  <p className="mt-1 font-sans text-sm break-all text-brand-green800">{line1}</p>
                  <p className="mt-auto pt-2 font-sans text-xs text-brand-charcoal/55">{line2}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + office */}
      <section className="bg-brand-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="kicker"><span className="rule" /> Enquiry</span>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Tell us what you&apos;re looking for</h2>
              <p className="mt-4 max-w-lg font-sans leading-relaxed text-brand-charcoal/75">
                Share a few details and we&apos;ll respond personally with considered guidance —
                never automated.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to book a viewing.")} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Request a Viewing <CalendarDays className="h-4 w-4" />
                </a>
                <a href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to speak with an advisor.")} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <MessageCircle className="h-4 w-4" /> WhatsApp an advisor
                </a>
              </div>
            </div>
            <Reveal className="panel p-6 sm:p-9">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Office address */}
      <section id="visit" className="bg-brand-green950 py-20 texture-dark">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="kicker kicker-light"><span className="rule" /> Our office</span>
              <h2 className="display display-light mt-4 text-3xl sm:text-4xl">Vinhomes Platinum Living</h2>
              <p className="mt-6 max-w-md font-sans leading-relaxed text-brand-ivory/80">
                A warm welcome awaits at our Akowonjo office. Appointments are encouraged so an
                advisor is ready for you.
              </p>
              <div className="mt-7 space-y-3 border-l-2 border-brand-gold/60 pl-5 font-sans text-brand-ivory/90">
                <p className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />No. 41, Shasha Road, Cele B/Stop,<br />Akowonjo Road, 2nd Floor,<br />Same Building with GIG Motors.</p>
                <a className="flex items-center gap-3 hover:text-brand-goldLight" href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5 shrink-0 text-brand-gold" />{siteConfig.phoneDisplay}</a>
                <a className="flex items-center gap-3 hover:text-brand-goldLight" href={`mailto:${siteConfig.email}`}><Mail className="h-5 w-5 shrink-0 text-brand-gold" />{siteConfig.email}</a>
              </div>
            </div>
            <Reveal className="flex flex-col items-center justify-center rounded-none border border-brand-ivory/15 bg-brand-green900/30 p-8 text-center backdrop-blur-sm">
              <ArrowUpRight className="h-8 w-8 text-brand-gold" />
              <p className="mt-4 font-serif text-xl text-brand-ivory">Planning your first visit?</p>
              <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-brand-ivory/70">
                Request an appointment above and we&apos;ll confirm a time that suits you, with
                materials ready for the residences you care about.
              </p>
              <a href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to arrange a visit to your office.")} target="_blank" rel="noopener noreferrer" className="btn-outline-light mt-6">Arrange a visit</a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
