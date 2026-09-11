import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export default function CTABand({
  title = "Begin your conversation with Vinhomes",
  accent = "Book a private consultation",
  body,
  primary = { label: "Book a Consultation", href: "/contact" },
  image = "/media/images/video-interior-1.jpg",
}: {
  title?: string;
  accent?: string;
  body?: string;
  primary?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="frame-line frame-line-light texture-grain relative overflow-hidden bg-brand-green950">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="animate-kenburns object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green950/80 via-brand-green950/70 to-brand-green950/90" />
      </div>
      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <span className="kicker kicker-light kicker-center justify-center">{accent}</span>
        <h2 className="display display-light mt-6">{title}</h2>
        {body && <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-brand-ivory/80">{body}</p>}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={primary.href} className="btn-gold">
            {primary.label}
          </Link>
          <a
            href={whatsappLink("Hi Vinhomes Platinum Living, I'd like to speak with an advisor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            WhatsApp us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
