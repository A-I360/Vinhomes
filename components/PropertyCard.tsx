import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Ruler, ArrowUpRight } from "lucide-react";
import type { Property } from "@/lib/types";
import { amenities } from "@/content/amenities";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

function statusTone(s: string) {
  if (s === "SOLD OUT") return "bg-brand-charcoal";
  if (s === "COMING SOON") return "bg-brand-goldDeep";
  if (s === "LIMITED AVAILABILITY") return "bg-brand-gold";
  return "bg-brand-green700";
}

export default function PropertyCard({
  property,
  feature = false,
  index = 0,
}: {
  property: Property;
  feature?: boolean;
  index?: number;
}) {
  const devSlug = property.development;
  const hero = property.gallery?.[0];
  const keys = (property.amenityIds ?? []).slice(0, 4);
  const keyLabels = keys.map((id) => amenities.find((a) => a.id === id)?.label).filter(Boolean);
  const showPrice = !!property.price;

  const enquireMsg = `Hi Vinhomes Platinum Living, I'm interested in ${property.name} (${devSlug}). Please send me more details.`;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden bg-white shadow-card transition-all duration-700 ease-luxe hover:-translate-y-1.5 hover:shadow-lift",
        feature && "col-span-full"
      )}
    >
      <div className="img-frame relative">
        <Link href={`/properties/${property.slug}`} className="block">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt || `${property.name} image`}
              width={1200}
              height={feature ? 675 : 800}
              sizes={feature ? "(min-width:1024px) 1100px, 100vw" : "(min-width:1024px) 600px, 100vw"}
              className="aspect-[3/2] w-full object-cover"
              fetchPriority={index === 0 ? "high" : undefined}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ) : (
            <div className="aspect-[3/2] w-full bg-brand-green800" />
          )}
        </Link>
        {/* status */}
        <span
          className={cn(
            "absolute left-4 top-4 status-pill",
            statusTone(property.status)
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {property.status}
        </span>
        {/* dev type */}
        {property.category && (
          <span className="absolute right-4 top-4 bg-brand-green950/70 px-3 py-1.5 font-sans uppercase tracking-[0.16em] text-[0.62rem] text-brand-ivory backdrop-blur-sm">
            {property.category}
          </span>
        )}
        {/* hover arrow */}
        <span className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-brand-gold text-brand-green950 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-brand-goldDeep">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-brand-charcoal/70 normal-case tracking-[0.08em]">
            {property.location}
          </span>
        </div>
        <h3 className="mt-2 font-serif text-xl leading-snug text-brand-green900 sm:text-[1.35rem]">
          <Link href={`/properties/${property.slug}`} className="transition-colors hover:text-brand-goldDeep">
            {property.name}
          </Link>
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-sans text-[0.8rem] text-brand-charcoal/70">
          {property.propertyType && <span>{property.propertyType}</span>}
          {property.bedrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-brand-goldDeep" /> {property.bedrooms} Bed
            </span>
          )}
          {property.bathrooms != null && (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-brand-goldDeep" /> {property.bathrooms} Bath
            </span>
          )}
          {property.size && (
            <span className="inline-flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-brand-goldDeep" /> {property.size}
            </span>
          )}
        </div>

        {keyLabels.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {keyLabels.map((l) => (
              <span
                key={l}
                className="rounded-full border border-brand-line bg-brand-paper px-2.5 py-1 font-sans text-[0.68rem] text-brand-charcoal/70"
              >
                {l}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-end justify-between border-t border-brand-line pt-4">
          <div>
            {showPrice ? (
              <>
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-brand-charcoal/50">
                  Starting price
                </p>
                <p className="font-serif text-lg text-brand-green900">{property.price}</p>
              </>
            ) : (
              <p className="font-serif text-base text-brand-charcoal/80">
                {property.paymentPlan?.note ?? "Pricing on request"}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/properties/${property.slug}`}
            className="btn-dark w-full px-4 py-3 text-[0.66rem]"
          >
            View Property
          </Link>
          <a
            href={whatsappLink(enquireMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full px-4 py-3 text-[0.66rem]"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
