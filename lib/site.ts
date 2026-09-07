import { siteConfig } from "@/content/site.config";
import type { SiteConfig } from "@/lib/types";

export function useSite(): SiteConfig {
  return siteConfig;
}

/** Build a contextual WhatsApp deep link for a property enquiry. */
export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const siteDefaults = {
  defaultTitle: `${siteConfig.brandName} — ${siteConfig.tagline}`,
  /** Used to build absolute URLs for canonical links & metadata. */
};
