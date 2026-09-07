import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";

export const baseUrl = siteConfig.url;

export interface Seo {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

/** Centralised per-page metadata so titles/descriptions are unique. */
export function constructMetadata({
  title,
  description,
  path = "",
  image = "/media/images/video-hero.jpg",
}: Seo): Metadata {
  const cleanPath = path === "/" ? "" : path;
  const canonical = `${baseUrl}${cleanPath}`;
  const ogImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const defaultDescription =
    "Vinhomes Platinum Living is a premium Lagos real estate brand crafting elegant homes, secure communities and considered investment opportunities. Where Luxury Meets Lifestyle.";

  return {
    title: title ? `${title} | ${siteConfig.brandName}` : siteDefaults.defaultTitle,
    description: description ?? defaultDescription,
    alternates: { canonical },
    openGraph: {
      title: title ? `${title} | ${siteConfig.brandName}` : siteDefaults.defaultTitle,
      description: description ?? defaultDescription,
      url: canonical,
      siteName: siteConfig.brandName,
      type: "website",
      locale: "en_NG",
      images: [{ url: ogImage, width: 1536, height: 1024, alt: siteConfig.brandName }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.brandName}` : siteDefaults.defaultTitle,
      description: description ?? defaultDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}

export const siteDefaults = {
  defaultTitle: `${siteConfig.brandName} — ${siteConfig.tagline}`,
};

/** Organization + LocalBusiness JSON-LD. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.brandName,
    description: `${siteConfig.brandName} — ${siteConfig.tagline}. Premium homes, quality building construction and prime land in Lagos.`,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.url}/media/brand/logo.png`,
    logo: `${siteConfig.url}/media/brand/logo.png`,
    priceRange: "₦₦₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 41, Shasha Road, Cele B/Stop, Akowonjo Road, 2nd Floor, Same Building with GIG Motors",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
    areaServed: "Lagos",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.tiktok].filter(Boolean) as string[],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.url,
    description: `${siteConfig.brandName} — premium luxury real estate in Lagos.`,
    inLanguage: "en-NG",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path}`,
    })),
  };
}

export function productSchema(o: {
  name: string;
  description: string;
  image: string;
  url: string;
  location: string;
  bedrooms?: number | null;
  status?: string;
}) {
  const availability =
    o.status === "SOLD OUT"
      ? "https://schema.org/SoldOut"
      : o.status === "COMING SOON"
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock";
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: o.name,
    description: o.description,
    url: o.url,
    image: o.image.startsWith("http") ? o.image : `${siteConfig.url}${o.image}`,
    offers: {
      "@type": "Offer",
      availability,
      priceCurrency: "NGN",
    },
    contentLocation: { "@type": "Place", name: o.location, address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" } },
    ...(o.bedrooms ? { numberOfBedrooms: o.bedrooms } : {}),
  };
}
