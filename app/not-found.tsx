import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-green950 texture-dark px-5 pt-20 text-center">
      <span className="pointer-events-none absolute select-none font-serif text-[34vw] leading-none text-brand-green900/40">404</span>
      <div className="relative z-10 max-w-xl">
        <span className="kicker kicker-light"><span className="rule" /> Page not found</span>
        <h1 className="display display-light mt-6 text-4xl sm:text-6xl">
          This address <span className="italic text-brand-goldLight">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-6 font-sans leading-relaxed text-brand-ivory/75">
          The page you&apos;re looking for may have moved, or the link may be outdated. Let&apos;s
          guide you somewhere beautiful instead.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-gold"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          <Link href="/properties" className="btn-outline-light">Explore properties <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <a href={whatsappLink("Hi Vinhomes Platinum Living, I couldn't find the page I was looking for and need some help.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block font-sans text-sm text-brand-ivory/60 underline-offset-4 hover:text-brand-goldLight hover:underline">
          Or ask an advisor on WhatsApp
        </a>
      </div>
    </section>
  );
}
