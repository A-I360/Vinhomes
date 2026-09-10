import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Development } from "@/lib/types";
import { getPropertiesByDevelopment } from "@/content/developments";
import { whatsappLink } from "@/lib/site";

export default function DevelopmentCard({ d }: { d: Development }) {
  const props = getPropertiesByDevelopment(d.slug);
  const hero = d.heroMedia;

  const enquire = `Hi Vinhomes Platinum Living, I'm interested in ${d.name}. Please send me more details.`;

  return (
    <article className="group shape-archcard frame-line frame-line-light relative flex min-h-[30rem] flex-col justify-end overflow-hidden bg-brand-green900 transition-all duration-700 ease-luxe hover:-translate-y-1.5 hover:shadow-lift lg:min-h-[34rem]">
      <div className="img-frame absolute inset-0">
        <Image
          src={hero.src}
          alt={hero.alt || d.name}
          fill
          sizes="(min-width:1024px) 620px, 100vw"
          className="object-cover opacity-85"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/35 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center p-7 text-center sm:p-9">
        <span className="status-pill bg-brand-gold/90 text-brand-green950">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {d.status}
        </span>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-brand-ivory sm:text-4xl">
          {d.name}
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-brand-ivory/85">
          {d.tagline}
        </p>

        {d.propertyTypes.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {d.propertyTypes.map((t) => (
              <span
                key={t}
                className="rounded-full border border-brand-ivory/25 bg-brand-green950/30 px-3 py-1 font-sans text-[0.66rem] tracking-wide text-brand-ivory/90 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/properties?dev=${d.slug}`}
            className="btn-light group/btn px-6 py-3 text-[0.66rem]"
          >
            Explore {d.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Link>
          <a
            href={whatsappLink(enquire)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-6 py-3 text-[0.66rem]"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
