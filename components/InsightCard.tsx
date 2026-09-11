import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export default function InsightCard({ post }: { post: Insight }) {
  return (
    <article className="group">
      <Link href={`/insights/${post.slug}`} className="block overflow-hidden">
        <div className="img-frame shape-archcard aspect-[16/10]">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt || post.title}
            width={800}
            height={500}
            sizes="(min-width:1024px) 33vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="mt-5 flex items-center justify-center gap-2.5 font-sans text-[0.66rem] uppercase tracking-[0.16em] text-brand-goldDeep">
        <span>{post.category}</span>
        <span className="h-px w-4 bg-brand-gold/50" />
        <span className="text-brand-charcoal/55 normal-case tracking-normal">{formatDate(post.publishDate)}</span>
      </div>
      <h3 className="mt-3 text-center font-serif text-xl leading-snug text-brand-green900">
        <Link href={`/insights/${post.slug}`} className="transition-colors hover:text-brand-goldDeep">
          {post.title}
        </Link>
      </h3>
      <p className="mx-auto mt-3 max-w-md text-center font-sans text-sm leading-relaxed text-brand-charcoal/70">
        {post.excerpt}
      </p>
      <div className="mt-5 flex justify-center">
        <Link href={`/insights/${post.slug}`} className="link-arrow">
          Read article <ArrowRight className="arrow h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
