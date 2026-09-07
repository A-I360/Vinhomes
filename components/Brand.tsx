import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";

/**
 * Primary brand mark — uses the official supplied logo artwork.
 * `onLight` subtly frames the emblem for use over ivory surfaces.
 */
export default function Brand({
  className,
  markWidth = 168,
  priority,
}: {
  className?: string;
  markWidth?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brandName} home`}
      className={cn("group inline-flex items-center", className)}
    >
      <span className="relative inline-block overflow-hidden leading-none transition-transform duration-700 ease-luxe group-hover:opacity-90">
        <Image
          src="/media/brand/logo.jpg"
          alt={`${siteConfig.brandName} — ${siteConfig.tagline} logo`}
          width={705}
          height={715}
          priority={priority}
          sizes={`${markWidth * 2}px`}
          style={{ width: markWidth, height: "auto" }}
          className="block h-auto"
        />
      </span>
    </Link>
  );
}
