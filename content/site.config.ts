import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  brandName: "Vinhomes Platinum Living",
  brandShort: "Vinhomes",
  tagline: "Where Luxury Meets Lifestyle",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vinhomesplatinumliving.com",
  phone: "+2349023403702",
  phoneDisplay: "+234 902 340 3702",
  whatsapp: "2349023403702",
  email: "info@vinhomesplatinum.com",
  address: {
    lines: [
      "No. 41, Shasha Road, Cele B/Stop,",
      "Akowonjo Road, 2nd Floor,",
      "Same Building with GIG Motors.",
    ],
  },
  social: {
    // Only channels with a real destination are configured. The remaining
    // platforms are not set (no fabricated handles / placeholder homepages).
    whatsapp: "https://wa.me/2349023403702",
  },
  navigation: [
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Investment", href: "/investment" },
    { label: "Why Vinhomes", href: "/why-vinhomes" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};
