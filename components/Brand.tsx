import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";

/**
 * Primary brand mark — transparent emblem so it sits cleanly on any surface.
 */
export default function Brand({
  className,
  markWidth = 132,
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
      className={cn("inline-flex shrink-0", className)}
    >
      <Image
        src="/media/brand/logo.png"
        alt={`${siteConfig.brandName} emblem`}
        width={529}
        height={535}
        priority={priority}
        sizes={`${Math.ceil(markWidth * 2)}px`}
        style={{ width: markWidth, height: "auto", maxHeight: markWidth * 1.02 }}
        className="h-auto w-auto object-contain transition-opacity duration-700 ease-luxe hover:opacity-85"
      />
    </Link>
  );
}
