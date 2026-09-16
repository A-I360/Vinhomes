// ---------------------------------------------------------------------------
// VINHOMES PLATINUM LIVING — CMS content types
// These mirror the CMS collections so any headless CMS (or the local JSON
// content layer) can map 1:1 onto the frontend without code changes.
// ---------------------------------------------------------------------------

export type AvailabilityStatus =
  | "AVAILABLE"
  | "LIMITED AVAILABILITY"
  | "SOLD OUT"
  | "COMING SOON";

export type PropertyType =
  | "Duplex"
  | "Terrace"
  | "Terraced House"
  | "Apartment"
  | "Plot / Land"
  | "Townhouse"
  | "Semi-Detached Duplex"
  | "Fully Detached Duplex";

export interface MediaItem {
  src: string; // path under /public or absolute URL
  alt: string;
  type?: "image" | "video";
  caption?: string;
  credit?: string; // e.g. "Conceptual render" / "Artist impression"
}

/**
 * A supplied video, registered once and referenced from Developments and
 * Properties by `filmIds` (mirrors a CMS video/asset collection).
 */
export interface FilmAsset {
  id: string;
  /** mp4 served from /public */
  src: string;
  /** still frame extracted from this exact film */
  poster: string;
  title: string;
  /** short on-screen label, e.g. "0:24" */
  duration: string;
  /** exact length in seconds (used for VideoObject JSON-LD) */
  seconds: number;
  orientation: "landscape" | "portrait";
  width: number;
  height: number;
  /** what the footage actually contains — describe only what is on screen */
  shows: string;
  /** short label for the film's subject, e.g. "The Emerald" */
  subject?: string;
  /** where the "view this property" link in a film strip points to */
  subjectHref?: string;
  credit?: string;
}

export interface PaymentPlan {
  label?: string;
  initialDeposit?: string; // % or currency note, CMS editable
  installmentDuration?: string; // e.g. "Balance over 8 months"
  note?: string;
}

export interface Property {
  name: string;
  slug: string;
  development: string; // references a Development slug
  propertyType: PropertyType | string;
  status: AvailabilityStatus;
  location: string;
  address?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  size?: string | null;
  /** CMS controlled — leave null / "On request" to avoid fabricating price */
  price?: string | null;
  currency?: string;
  paymentPlan?: PaymentPlan;
  amenityIds?: string[];
  description: string;
  features: string[];
  gallery: MediaItem[];
  /** keys into the film registry (content/films.ts) — the video for this home */
  filmIds?: string[];
  floorPlans?: MediaItem[];
  brochure?: string | null;
  mapCoordinates?: { lat?: number; lng?: number; label?: string } | null;
  investmentNotes?: string;
  category: "Residential" | "Investment" | "Mixed" | string;
  isFeatured?: boolean;
  availability?: string;
  dateAdded: string; // ISO
  overview?: string[];
}

export interface Development {
  name: string;
  slug: string;
  tagline?: string;
  overview: string;
  location: string;
  address?: string;
  status: AvailabilityStatus;
  heroMedia: MediaItem;
  gallery?: MediaItem[];
  /** keys into the film registry (content/films.ts) — films for this address */
  filmIds?: string[];
  amenityIds?: string[];
  propertyTypes: string[];
  paymentPlans?: PaymentPlan[];
  locationAdvantages: string[];
  investmentInformation?: string;
  position?: "residential" | "investment" | "mixed";
  mapCoordinates?: { lat?: number; lng?: number; label?: string } | null;
}

export interface Amenity {
  id: string;
  label: string;
  description?: string;
  image?: MediaItem;
}

export interface Insight {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown-ish paragraphs split by \n\n
  coverImage: MediaItem;
  author: string;
  category: string;
  publishDate: string;
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  quote: string;
  property?: string;
  image?: MediaItem;
  approved: boolean;
}

export interface Faq {
  question: string;
  answer: string;
  category: string;
  relation?: string; // property/development slug
}

export interface Service {
  id: string;
  title: string;
  short: string;
  description?: string;
  image: MediaItem;
  features?: string[];
  active?: boolean;
}

export interface ValueItem {
  title: string;
  statement: string;
  image: MediaItem;
}

export interface Advisor {
  name: string;
  role: string;
  bio?: string;
  image?: MediaItem;
  email?: string;
  phone?: string;
  social?: { label: string; url: string }[];
}

/** Founder / leadership profile. Name & title are CMS-editable (added when supplied). */
export interface Founder {
  name?: string;
  role?: string;
  title?: string;
  image?: MediaItem;
  tagline?: string;
  message: string[];
  published?: boolean;
}

export interface SiteConfig {
  brandName: string;
  brandShort: string;
  tagline: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // digits only, intl
  email: string;
  address: { lines: string[] };
  social: { instagram?: string; facebook?: string; tiktok?: string; whatsapp?: string };
  navigation: { label: string; href: string }[];
}
