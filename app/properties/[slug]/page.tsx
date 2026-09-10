import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Building2,
  ArrowUpRight,
  Phone,
  Mail,
  ShieldCheck,
  Download,
  Check,
} from "lucide-react";
import { getPropertyBySlug, properties, getDevelopmentBySlug } from "@/content/developments";
import { amenities } from "@/content/amenities";
import { faqs } from "@/content/insights";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { breadcrumbSchema, productSchema, constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site.config";
import { whatsappLink } from "@/lib/site";
import type { MediaItem } from "@/lib/types";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getPropertyBySlug(params.slug);
  if (!p) return {};
  const img = p.gallery?.[0]?.src ?? "/media/images/video-hero.jpg";
  const meta = constructMetadata({
    title: `${p.name} — ${p.propertyType} in Lagos`,
    description: `${p.name}. ${p.propertyType}${p.location ? ` in ${p.location}` : ""} by Vinhomes Platinum Living. Status: ${p.status}.`,
    path: `/properties/${p.slug}`,
    image: img,
  });
  return meta;
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();
  const dev = getDevelopmentBySlug(property.development);
  const hero = property.gallery?.[0] ?? dev?.heroMedia;

  const amenityIds = [...new Set([...(dev?.amenityIds ?? []), ...(property.amenityIds ?? [])])];
  const amenityList = amenityIds.map((id) => amenities.find((a) => a.id === id)).filter(Boolean) as typeof amenities;
  const amenityWithImage = amenityList.filter((a) => a.image);
  const amenityText = amenityList.filter((a) => !a.image);

  const pageFaqs = faqs
    .filter((f) => f.category === "Payments" || f.category === "Properties" || f.relation === property.slug)
    .slice(0, 4);

  const enquireMsg = `Hi Vinhomes Platinum Living, I'm interested in ${property.name}. Please send me more details.`;
  const viewingMsg = `Hi Vinhomes Platinum Living, I'd like to book a viewing of ${property.name}.`;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: property.name, path: `/properties/${property.slug}` },
  ]);
  const listingSchema = productSchema({
    name: property.name,
    description: property.description,
    image: hero?.src ?? "/media/images/video-hero.jpg",
    url: `${siteConfig.url}/properties/${property.slug}`,
    location: property.location,
    bedrooms: property.bedrooms,
    status: property.status,
  });

  const quick = [
    { Icon: Building2, k: "Property Type", v: property.propertyType },
    { Icon: BedDouble, k: "Bedrooms", v: property.bedrooms != null ? `${property.bedrooms}` : "—" },
    { Icon: Bath, k: "Bathrooms", v: property.bathrooms != null ? `${property.bathrooms}` : "—" },
    { Icon: Ruler, k: "Size", v: property.size ?? "On request" },
  ];

  return (
    <>
      {/* structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-brand-green950 pt-24">
        {hero && (
          <div className="absolute inset-0">
            <Image src={hero.src} alt={hero.alt || property.name} fill priority sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/55 to-brand-green950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green950/70 to-transparent" />
          </div>
        )}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-12 text-center sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 hidden items-center justify-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-brand-ivory/60 sm:flex">
            <Link href="/" className="hover:text-brand-goldLight">Home</Link><span className="text-brand-gold">/</span>
            <Link href="/properties" className="hover:text-brand-goldLight">Properties</Link><span className="text-brand-gold">/</span>
            <span aria-current="page" className="text-brand-ivory">{property.name}</span>
          </nav>
          {dev && (
            <Link href={`/properties?dev=${dev.slug}`} className="kicker kicker-light kicker-center justify-center">
              <span className="rule" /> {dev.name} <span className="rule" />
            </Link>
          )}
          <h1 className="display display-light mt-5 text-4xl sm:text-5xl lg:text-6xl">
            {property.name}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-brand-ivory/85">
            {property.location && (
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-gold" /> {property.location}</span>
            )}
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-goldLight" /> {property.status}</span>
            {property.category && <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-gold" /> {property.category}</span>}
          </div>
        </div>
      </section>

      {/* ============ META + INTRO BAR ============ */}
      <section className="border-b border-brand-line bg-brand-ivory">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px sm:grid-cols-4 lg:grid-cols-5 px-5 sm:px-8 lg:px-12">
          {[
            { k: "Starting Price", v: property.price ?? "On request" },
            { k: "Availability", v: property.availability ?? property.status },
            { k: "Bedrooms", v: property.bedrooms != null ? `${property.bedrooms} Bed` : "—" },
            { k: "Bathrooms", v: property.bathrooms != null ? `${property.bathrooms} Bath` : "—" },
            { k: "Size", v: property.size ?? "On request" },
          ].map(({ k, v }) => (
            <div key={k} className="px-2 py-6 text-center">
              <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-brand-charcoal/50">{k}</p>
              <p className="mt-2 font-serif text-lg text-brand-green900">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_390px] lg:gap-16">
          {/* ===== MAIN ===== */}
          <div className="min-w-0 space-y-20">
            {/* Overview */}
            <section className="text-center">
              <SectionHeading kicker="Overview" title="An elegant place" accent="to call home" />
              <p className="mx-auto mt-6 max-w-3xl font-sans text-lg leading-relaxed text-brand-charcoal/80">{property.description}</p>
              {property.overview && property.overview.length > 0 && (
                <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
                  {property.overview.map((o) => (
                    <li key={o} className="border-t border-brand-gold/40 pt-4 font-sans text-sm leading-relaxed text-brand-charcoal/75">{o}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* Features */}
            {property.features.length > 0 && (
              <section>
                <SectionHeading kicker="Property Features" title="Considered in" accent="every detail" />
                <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {property.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 border-b border-brand-line py-3 font-sans text-brand-charcoal/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-goldDeep" /> {f}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Amenities */}
            {amenityList.length > 0 && (
              <section>
                <SectionHeading kicker="Amenities" title="Amenities that enrich" accent="your everyday" />
                {amenityWithImage.length > 0 && (
                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    {amenityWithImage.map((a) => (
                      <figure key={a.id} className="img-frame shape-curve group relative overflow-hidden">
                        <Image src={a.image!.src} alt={a.image!.alt || a.label} width={600} height={400} className="aspect-[3/2] w-full object-cover transition-transform duration-1000 ease-luxe group-hover:scale-105" loading="lazy" />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-green950/85 to-transparent p-3 pt-8 font-serif text-lg text-brand-ivory">{a.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                {amenityText.length > 0 && (
                  <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {amenityText.map((a) => (
                      <li key={a.id} className="flex items-start gap-2.5 border border-brand-line bg-white px-4 py-3 font-sans text-sm text-brand-green900">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-goldDeep" /> {a.label}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Gallery */}
            {property.gallery.length > 0 && (
              <section>
                <SectionHeading kicker="Gallery" title="Inside &amp; around" accent="this residence" />
                <div className="mt-7"><Gallery items={property.gallery} title={property.name} /></div>
              </section>
            )}

            {/* Floor plans */}
            <section>
              <SectionHeading kicker="Floor Plans" title="Layouts &amp; floor plans" />
              <div className="mt-7 flex flex-col items-start gap-5 border border-brand-line bg-brand-ivory/60 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-lg text-brand-green900">Floor plans &amp; measurements</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-brand-charcoal/70">
                    Room-by-room layouts and dimensions are shared with verified enquirers and in the
                    development brochure.
                  </p>
                </div>
                <a href={whatsappLink(`Hi Vinhomes Platinum Living, please send the floor plan for ${property.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0 px-6 py-3 text-[0.68rem]">
                  Request floor plan
                </a>
              </div>
            </section>

            {/* Location */}
            <section>
              <SectionHeading kicker="Location" title="Where this home" accent="sits in the city" />
              <div className="mt-7 grid gap-8 lg:grid-cols-2">
                <div className="space-y-5 font-sans text-brand-charcoal/80">
                  <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-goldDeep" /> <span>{dev?.address ?? property.address ?? property.location}</span></p>
                  {dev?.locationAdvantages && (
                    <ul className="space-y-3">
                      {dev.locationAdvantages.slice(0, 4).map((la) => (
                        <li key={la} className="flex items-start gap-3"><span className="mt-2 h-1 w-1 rotate-45 bg-brand-gold" />{la}</li>
                      ))}
                    </ul>
                  )}
                  <p className="border-l-2 border-brand-gold pl-4 text-sm leading-relaxed text-brand-charcoal/70">
                    A verified interactive map and site plan are provided during your private
                    consultation.
                  </p>
                </div>
                <div className="img-frame shape-curve-lg relative min-h-[16rem] overflow-hidden bg-brand-green800">
                  <Image src={dev?.heroMedia?.src ?? hero?.src ?? "/media/images/dev-citadel-1.jpg"} alt={`${dev?.name ?? property.name} location`} fill sizes="(min-width:1024px) 45vw,100vw" className="object-cover" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-green950/30">
                    <div className="bg-brand-ivory/95 px-6 py-4 text-center">
                      <MapPin className="mx-auto h-5 w-5 text-brand-goldDeep" />
                      <p className="mt-1 font-sans text-xs uppercase tracking-[0.16em] text-brand-green900">Request the map</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Investment potential */}
            {property.investmentNotes && (
              <section className="border border-brand-gold/30 bg-brand-ivory/70 p-7 sm:p-9">
                <span className="kicker"><span className="rule" /> Investment Potential</span>
                <h2 className="display mt-4 text-2xl sm:text-3xl">The longer view</h2>
                <p className="mt-4 max-w-2xl font-sans leading-relaxed text-brand-charcoal/80">{property.investmentNotes}</p>
                <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-brand-charcoal/60">
                  Property values and investment returns are subject to market conditions and
                  individual circumstances.
                </p>
              </section>
            )}

            {/* Payment plan */}
            <section>
              <SectionHeading kicker="Payment Plan" title="Flexible, transparent" accent="payment options" />
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {(property.paymentPlan ? [property.paymentPlan] : dev?.paymentPlans ?? []).map((pp, i) => (
                  <div key={i} className="border border-brand-line bg-white p-6">
                    <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-brand-charcoal/50">{pp.label ?? "Payment plan"}</p>
                    {pp.initialDeposit && <p className="mt-3 font-serif text-2xl text-brand-green900">{pp.initialDeposit}</p>}
                    {pp.installmentDuration && <p className="mt-2 font-sans text-sm leading-relaxed text-brand-charcoal/75">{pp.installmentDuration}</p>}
                    {pp.note && <p className="mt-3 border-t border-brand-line pt-3 font-sans text-xs leading-relaxed text-brand-charcoal/60">{pp.note}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <SectionHeading kicker="FAQ" title="Common questions" accent="about this property" />
              <div className="mt-7 divide-y divide-brand-line">
                {pageFaqs.map((f) => (
                  <details key={f.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-brand-green900">
                      {f.question}
                      <span className="text-2xl font-light text-brand-gold transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-brand-charcoal/75">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Brochure */}
            <section>
              <SectionHeading kicker="Brochure" title="Take the details with you" />
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink(`Hi Vinhomes Platinum Living, please send me the brochure for ${property.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  <Download className="h-4 w-4" /> Download brochure
                </a>
                <Link href="/contact" className="btn-outline">Talk to an advisor</Link>
              </div>
            </section>
          </div>

          {/* ===== STICKY RAIL ===== */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-brand-line bg-white shadow-card">
              <div className="border-b border-brand-line bg-brand-green950 p-6">
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-brand-goldLight">Interested in this property?</p>
                <p className="mt-2 font-serif text-xl text-brand-ivory">Book a private consultation with a Vinhomes advisor.</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {quick.map(({ Icon, k, v }) => (
                    <div key={k} className="rounded-none bg-brand-green900/50 px-3 py-2.5">
                      <div className="flex items-center gap-1.5 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-brand-goldLight"><Icon className="h-3 w-3" />{k}</div>
                      <p className="mt-0.5 truncate font-sans text-sm text-brand-ivory">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <EnquiryForm defaultProperty={property.name} dual />
                <div className="mt-5 space-y-2 border-t border-brand-line pt-5">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 font-sans text-sm text-brand-green900 hover:text-brand-goldDeep"><Phone className="h-4 w-4 text-brand-goldDeep" /> {siteConfig.phoneDisplay}</a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-sans text-sm text-brand-green900 hover:text-brand-goldDeep"><Mail className="h-4 w-4 text-brand-goldDeep" /> {siteConfig.email}</a>
                </div>
              </div>
            </div>

            <a href={whatsappLink(viewingMsg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full">
              WhatsApp about viewing <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </div>

      <CTABand
        title="See this residence in person."
        accent="Private viewings"
        body="We arrange private on-site or video viewings at a time that suits you."
        primary={{ label: "Book a Viewing", href: `/contact?property=${property.slug}` }}
        image={property.gallery?.[1]?.src ?? dev?.heroMedia?.src ?? "/media/images/video-interior-1.jpg"}
      />
    </>
  );
}
