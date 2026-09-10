import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

export default function PageHero({
  kicker,
  title,
  titleAccent,
  lede,
  image,
  crumbs = [],
  compact = false,
}: {
  kicker: string;
  title: string;
  titleAccent?: string;
  lede?: string;
  image: string;
  crumbs?: Crumb[];
  compact?: boolean;
}) {
  return (
    <section className="relative flex min-h-[54vh] items-center overflow-hidden bg-brand-green950 pt-24 text-center lg:min-h-[60vh]">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/60 to-brand-green950/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-8">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7 flex animate-fade-in justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-brand-ivory/65">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-goldLight">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  <span className="text-brand-gold">/</span>
                  {i === crumbs.length - 1 ? (
                    <span className="text-brand-ivory" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="transition-colors hover:text-brand-goldLight">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <span className="kicker kicker-light kicker-center animate-fade-in justify-center">{kicker}</span>
        <h1 className="display display-light display-hero mt-6 animate-fade-up [animation-delay:120ms]">
          {title}
          {titleAccent ? (
            <span className="block font-serif italic text-brand-goldLight">{titleAccent}</span>
          ) : null}
        </h1>
        {lede && (
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up font-sans text-base leading-relaxed text-brand-ivory/80 [animation-delay:240ms] sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
