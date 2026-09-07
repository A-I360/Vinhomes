import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  brandName: "Vinhomes Platinum Living",
  brandShort: "Vinhomes",
  tagline: "Where Luxury Meets Lifestyle",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vinhomesplatinumliving.com",
  phone: "+2347036724517",
  phoneDisplay: "0703 672 4517",
  whatsapp: "2347036724517",
  email: "vplatinumliving@gmail.com",
  address: {
    lines: [
      "No. 41, Shasha Road, Cele B/Stop,",
      "Akowonjo Road, 2nd Floor,",
      "Same Building with GIG Motors.",
    ],
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    whatsapp: "https://wa.me/2347036724517",
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
