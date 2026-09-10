import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { founder } from "@/content/founder";
import Reveal from "@/components/Reveal";

export default function FounderSection() {
  if (!founder.published) return null;
  const img = founder.image;

  return (
    <section className="relative overflow-hidden bg-brand-paper py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 select-none font-serif text-[26vw] italic leading-none text-brand-line/60 lg:text-[12rem]" aria-hidden>
        Leadership
      </div>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="kicker kicker-center justify-center">
            <span className="rule" /> Leadership <span className="rule" />
          </span>
          <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">
            The vision behind
            <span className="block font-serif italic text-brand-goldDeep">Vinhomes Platinum Living</span>
          </h2>
          {founder.tagline && (
            <p className="mt-5 font-serif text-xl italic text-brand-green700">{founder.tagline}</p>
          )}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <span className="shape-arch absolute inset-0 translate-x-4 translate-y-4 border border-brand-gold/40" aria-hidden />
              <div className="img-frame shape-arch relative aspect-[4/5]">
                <Image
                  src={img!.src}
                  alt={img!.alt || "Founder of Vinhomes Platinum Living"}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* caption */}
              <div className="mt-5 border-t border-brand-line pt-4 text-center">
                {founder.name ? (
                  <p className="font-serif text-2xl text-brand-green900">{founder.name}</p>
                ) : null}
                <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-brand-goldDeep">
                  {founder.title || founder.role || "Leadership"}
                  {founder.name ? "" : " — Vinhomes Platinum Living"}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-center lg:text-left">
              {founder.message.map((m, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "mx-auto max-w-2xl font-serif text-2xl italic leading-[1.6] text-brand-green800 sm:text-[1.7rem]"
                      : "mx-auto max-w-2xl font-sans text-[1.02rem] leading-[1.85] text-brand-charcoal/80"
                  }
                >
                  {m}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="/about" className="btn-dark">Discover our values <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="btn-outline">Meet the team</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
