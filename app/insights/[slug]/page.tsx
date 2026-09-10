import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MessageCircle, User, CalendarDays } from "lucide-react";
import { insights } from "@/content/insights";
import InsightCard from "@/components/InsightCard";
import { whatsappLink } from "@/lib/site";
import { constructMetadata, breadcrumbSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/content/site.config";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return {};
  return constructMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/insights/${post.slug}`,
    image: post.coverImage.src,
  });
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);
  const paragraphs = post.content.split(/\n\n+/);
  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: post.title, path: `/insights/${post.slug}` },
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    image: post.coverImage.src.startsWith("http") ? post.coverImage.src : `${siteConfig.url}${post.coverImage.src}`,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.brandName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="bg-brand-paper">
        {/* Header */}
        <header className="relative flex min-h-[64vh] items-end overflow-hidden bg-brand-green950 pt-24">
          <div className="absolute inset-0">
            <Image src={post.coverImage.src} alt={post.coverImage.alt || post.title} fill priority sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green950 via-brand-green950/55 to-brand-green950/20" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14 sm:px-8">
            <Link href="/insights" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-brand-ivory/70 hover:text-brand-goldLight">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-xs uppercase tracking-[0.16em] text-brand-goldLight">
              <span>{post.category}</span>
              <span className="h-px w-6 bg-brand-gold/60" />
              <span className="inline-flex items-center gap-1.5 text-brand-ivory/70 normal-case tracking-normal"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.publishDate)}</span>
              <span className="inline-flex items-center gap-1.5 text-brand-ivory/70 normal-case tracking-normal"><User className="h-3.5 w-3.5" />{post.author}</span>
            </div>
            <h1 className="display display-light mt-5 text-4xl sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-2xl font-serif text-xl italic leading-snug text-brand-ivory/80">{post.excerpt}</p>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "article-dropcap font-sans text-[1.06rem] leading-[1.9] text-brand-charcoal/90"
                    : "font-sans text-[1.02rem] leading-[1.9] text-brand-charcoal/85"
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* share */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-brand-line py-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-charcoal/55">Was this useful?</p>
            <a href={whatsappLink(`I'm reading “${post.title}” on the Vinhomes site — thought you might be interested.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#1fa855] px-5 py-2 font-sans text-xs text-[#128c47] hover:bg-[#1fa855] hover:text-white">
              <MessageCircle className="h-4 w-4" /> Share on WhatsApp
            </a>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-brand-green900">Continue reading</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <InsightCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
