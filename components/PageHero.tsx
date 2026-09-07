import Image from "next/image";
import Link from "next/link";

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
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-brand-green950 pt-28 lg:min-h-[58vh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/70 to-brand-green950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green950/85 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-12">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-brand-ivory/60">
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

        <span className="kicker kicker-light">
          <span className="rule" />
          {kicker}
        </span>
        <h1 className="display display-light mt-5 max-w-5xl">
          {title}
          {titleAccent ? (
            <span className="block font-serif italic text-brand-goldLight">{titleAccent}</span>
          ) : null}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-brand-ivory/75 sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
