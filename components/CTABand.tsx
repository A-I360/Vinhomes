import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function CTABand({
  title = "Begin your conversation with Vinhomes",
  accent = "Book a private consultation",
  body,
  primary = { label: "Book a Consultation", href: "/contact" },
  image = "/media/images/emerald-interior.jpg",
}: {
  title?: string;
  accent?: string;
  body?: string;
  primary?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-green950">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green950 via-brand-green950/85 to-brand-green900/70" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <span className="kicker kicker-light">
            <span className="rule" />
            {accent}
          </span>
          <h2 className="display display-light mt-5">{title}</h2>
          {body && <p className="mt-5 font-sans leading-relaxed text-brand-ivory/75">{body}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
