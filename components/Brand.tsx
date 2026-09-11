import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";

/**
 * Primary brand lockup — transparent emblem plus an optional tracked
 * wordmark, so the brand reads clearly in the header and footer.
 * `tone` adapts the wordmark for dark vs light surfaces.
 */
export default function Brand({
  className,
  markWidth = 132,
  tone = "dark",
  withWordmark = false,
  priority,
}: {
  className?: string;
  markWidth?: number;
  tone?: "light" | "dark";
  withWordmark?: boolean;
  priority?: boolean;
}) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brandName} home`}
      className={cn("group inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/media/brand/logo.png"
        alt={`${siteConfig.brandName} emblem`}
        width={529}
        height={535}
        priority={priority}
        sizes={`${Math.ceil(markWidth * 2)}px`}
        style={{ width: markWidth, height: "auto", maxHeight: markWidth * 1.02 }}
        className="h-auto w-auto object-contain transition-all duration-700 ease-luxe group-hover:opacity-90"
      />
      {withWordmark && (
        <span className="ml-3 flex flex-col leading-none">
          <span
            className={cn(
              "whitespace-nowrap font-sans text-[0.9rem] font-medium uppercase tracking-[0.28em] transition-colors duration-500",
              light ? "text-brand-ivory" : "text-brand-green950"
            )}
          >
            {siteConfig.brandShort}
          </span>
          <span
            className={cn(
              "mt-1.5 whitespace-nowrap font-sans text-[0.55rem] uppercase tracking-[0.3em] transition-colors duration-500",
              light ? "text-brand-goldLight/90" : "text-brand-goldDeep"
            )}
          >
            Platinum Living
          </span>
        </span>
      )}
    </Link>
  );
}
