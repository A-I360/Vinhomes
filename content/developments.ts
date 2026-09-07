import type { Development, Property } from "@/lib/types";

/**
 * NOTE ON POSITIONING & PRICING
 * Prices are intentionally left as "On request" (null / "Request brochure")
 * because no verified list prices were supplied for this build. Every value
 * here is either factual from the company materials or clearly framed as
 * conceptual positioning. Availability reflects CMS status only and should be
 * edited through the CMS — never hard-coded in the frontend.
 */

export const developments: Development[] = [
  {
    name: "The Emerald",
    slug: "the-emerald",
    tagline: "A perfect blend of style, comfort, and thoughtful design.",
    position: "residential",
    overview:
      "The Emerald is a premium modern residential development of elegant fully-detached duplexes, designed for families who expect privacy, contemporary architecture and thoughtful everyday comfort. Every residence is conceived as a calm, refined environment — generous light, quality materials and layout that respects how modern families actually live.",
    location: "A contemporary residential setting curated for quiet, modern living",
    address: "Refer to the development brochure for the exact plot address.",
    status: "AVAILABLE",
    heroMedia: {
      src: "/media/images/dev-emerald-1.jpg",
      alt: "Vinhomes development — site imagery",
    },
    gallery: [
      { src: "/media/images/dev-emerald-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-landscape-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    amenityIds: ["security", "landscaped", "car-park", "backup-power", "clean-water", "drainage"],
    propertyTypes: [
      "2 Bedroom Fully Detached Duplex",
      "3 Bedroom Fully Detached Duplex",
      "4 Bedroom Fully Detached Duplex",
    ],
    paymentPlans: [
      {
        label: "Flexible structuring",
        note: "Speak with an advisor to review an open, structured payment plan tailored to your circumstances.",
      },
    ],
    locationAdvantages: [
      "Elegant, private fully-detached living",
      "Thoughtfully planned room configurations from 2 to 4 bedrooms",
      "Quality contemporary construction and finish",
      "Secure, well-managed community environment",
    ],
    investmentInformation:
      "Fully-detached duplexes in well-managed modern developments tend to appeal to families seeking a permanent home as well as to investors looking for resilient, tradeable real estate. As with all property, outcomes depend on market conditions.",
    mapCoordinates: null,
  },
  {
    name: "Citadel Oasis",
    slug: "citadel-oasis",
    tagline: "Secure living, powered by the sun, on Abraham Adesanya Road, Ajah, Lagos.",
    position: "residential",
    overview:
      "Citadel Oasis is a secure, solar-powered residential community of modern homes located around Abraham Adesanya Road in Ajah, Lagos — directly opposite CharterHouse School. Designed for contemporary family living, the community pairs thoughtfully built modern residences with shared amenities that include a swimming pool and a fully fitted gym, all supported by an effective drainage system, clean water and considered landscaping.",
    location: "Around Abraham Adesanya Road, Ajah, Lagos",
    address: "Opposite CharterHouse School, Abraham Adesanya Road, Ajah, Lagos",
    status: "AVAILABLE",
    heroMedia: {
      src: "/media/images/dev-citadel-1.jpg",
      alt: "Vinhomes development — site imagery",
    },
    gallery: [
      { src: "/media/images/dev-citadel-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/dev-citadel-2.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-landscape-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    amenityIds: ["swimming-pool", "gym", "solar-power", "clean-water", "drainage", "security", "landscaped", "football-pitch", "play-area"],
    propertyTypes: ["Modern Residential Homes", "Terraced Residences"],
    paymentPlans: [
      {
        label: "Structured payment",
        initialDeposit: "40% initial deposit",
        installmentDuration: "Balance structured over a period of 8 months",
        note: "A clear, staged path to completion. Terms are set by the developer and confirmed in writing.",
      },
    ],
    locationAdvantages: [
      "Secure, gated community environment",
      "Solar-powered environment for cleaner, more reliable energy",
      "Prominent position opposite CharterHouse School",
      "Located around Abraham Adesanya Road in Ajah, a growing Lagos corridor",
      "Swimming pool and fully fitted gym within the community",
      "Effective drainage system and clean water provision",
    ],
    investmentInformation:
      "Positioned in the well-known Abraham Adesanya corridor of Ajah, the community combines residential amenity with the steady appeal of an established, developing area. Proximity to CharterHouse School adds to its family-focused character. Real value, as always, depends on the market.",
    mapCoordinates: null,
  },
  {
    name: "Capital Loft",
    slug: "capital-loft",
    tagline: "A future-ready address in a prime location, built around long-term value.",
    position: "investment",
    overview:
      "Capital Loft is an investment-focused terrace development positioned in a prime location and conceived as a future-ready community. Flexible payment plans and clean, contemporary living spaces make it attractive to buyers who value both a considered home and the longer-term potential of a well-located asset. The residence choices include a 3 Bedroom Terrace and a 2 Bedroom Terrace with BQ.",
    location: "A prime, accessible location selected for growth and everyday convenience",
    address: "Exact plot location shared at consultation and in the development brochure.",
    status: "AVAILABLE",
    heroMedia: {
      src: "/media/images/dev-capital-1.jpg",
      alt: "Vinhomes development — site imagery",
    },
    gallery: [
      { src: "/media/images/dev-capital-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-2.jpg", alt: "Vinhomes development — site imagery" },
    ],
    amenityIds: ["security", "landscaped", "car-park", "clean-water", "drainage", "backup-power"],
    propertyTypes: [
      "3 Bedroom Terrace",
      "2 Bedroom Terrace with BQ",
    ],
    paymentPlans: [
      {
        label: "Flexible payment plans",
        initialDeposit: "Structured entry",
        installmentDuration: "Choose outright purchase or a staged, structured plan",
        note: "Outright purchase and structured options are both available. Obtain current figures from an advisor — they are managed in the CMS.",
      },
    ],
    locationAdvantages: [
      "Prime location selected for its surroundings and convenience",
      "High-ROI-potential positioning for investment-minded buyers",
      "Flexible payment plans for outright or staged purchase",
      "Future-ready community concept",
      "Long-term appreciation potential of a well-located asset",
    ],
    investmentInformation:
      "Capital Loft is presented on its location and return potential. Buyers should weigh a prime, accessible location, flexible entry points and the resilience of quality terrace housing. Every figure is confirmed in writing before commitment; nothing is a guarantee of return.",
    mapCoordinates: null,
  },
];

export const properties: Property[] = [
  {
    name: "Emerald — 2 Bedroom Fully Detached Duplex",
    slug: "emerald-2-bedroom-duplex",
    development: "the-emerald",
    propertyType: "Fully Detached Duplex",
    status: "AVAILABLE",
    location: "The Emerald development",
    address: "Refer to development brochure.",
    bedrooms: 2,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      initialDeposit: "To be confirmed",
      installmentDuration: "Structured payment available",
      note: "Current figures confirmed with an advisor.",
    },
    amenityIds: ["security", "car-park", "landscaped", "backup-power", "clean-water", "drainage"],
    category: "Residential",
    description:
      "A refined two-bedroom fully-detached duplex within The Emerald — a premium modern development. With its own private volume and garden outlook, the home offers a calm, low-maintenance lifestyle with generous contemporary interiors.",
    overview: [
      "An elegant fully-detached duplex conceived around privacy and ease of living.",
      "Two well-proportioned bedrooms with considered contemporary bathrooms.",
      "Clean modern architecture, warm natural light and quality finishes.",
    ],
    features: [
      "Fully detached layout for privacy",
      "Open-plan living and dining",
      "Contemporary kitchen with quality fittings",
      "Landscaped private outdoor space",
      "Secure, managed community setting",
      "Clean water and effective drainage",
    ],
    gallery: [
      { src: "/media/images/dev-emerald-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "A compact fully-detached home with strong appeal to professional households and small families. Investment outlook subject to market conditions.",
    isFeatured: true,
    availability: "Currently available.",
    dateAdded: "2026-09-01",
  },
  {
    name: "Emerald — 3 Bedroom Fully Detached Duplex",
    slug: "emerald-3-bedroom-duplex",
    development: "the-emerald",
    propertyType: "Fully Detached Duplex",
    status: "AVAILABLE",
    location: "The Emerald development",
    address: "Refer to development brochure.",
    bedrooms: 3,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      initialDeposit: "To be confirmed",
      installmentDuration: "Structured payment available",
      note: "Current figures confirmed with an advisor.",
    },
    amenityIds: ["security", "car-park", "landscaped", "backup-power", "clean-water", "drainage"],
    category: "Residential",
    description:
      "The signature three-bedroom fully-detached duplex at The Emerald. Generous family spaces, elegant contemporary architecture and a considered layout make it a home built for both daily comfort and lasting value.",
    overview: [
      "A versatile fully-detached family duplex within a premium modern development.",
      "Three bedrooms across a flowing, well-considered layout.",
      "Designed for privacy, natural light and low-maintenance living.",
    ],
    features: [
      "Fully detached, private family home",
      "Spacious living, dining and family areas",
      "Modern kitchen with quality appliances",
      "Private landscaped compound",
      "Secure, well-managed community",
      "Backup power, clean water and effective drainage",
    ],
    gallery: [
      { src: "/media/images/dev-emerald-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-landscape-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "The three-bedroom configuration is the most widely requested family format, supporting strong demand. Outcomes subject to the market.",
    isFeatured: true,
    availability: "Currently available.",
    dateAdded: "2026-09-01",
  },
  {
    name: "Emerald — 4 Bedroom Fully Detached Duplex",
    slug: "emerald-4-bedroom-duplex",
    development: "the-emerald",
    propertyType: "Fully Detached Duplex",
    status: "LIMITED AVAILABILITY",
    location: "The Emerald development",
    address: "Refer to development brochure.",
    bedrooms: 4,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      initialDeposit: "To be confirmed",
      installmentDuration: "Structured payment available",
      note: "Current figures confirmed with an advisor.",
    },
    amenityIds: ["security", "car-park", "landscaped", "backup-power", "clean-water", "drainage"],
    category: "Residential",
    description:
      "The largest residence in The Emerald — a four-bedroom fully-detached duplex offering true space for growing families who value grandeur, comfort and privacy.",
    overview: [
      "The premier family residence within The Emerald.",
      "Four bedrooms with generous entertaining and family spaces.",
      "An architectural statement of modern, comfortable living.",
    ],
    features: [
      "Expansive fully-detached family home",
      "Four well-appointed bedrooms",
      "Grand living and dining spaces",
      "Quality contemporary finishes throughout",
      "Landscaped grounds and private parking",
      "Managed security and infrastructure",
    ],
    gallery: [
      { src: "/media/images/dev-emerald-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "Larger duplexes in managed communities appeal to prestige buyers. Limited inventory reflects the select nature of this format.",
    isFeatured: false,
    availability: "Limited availability.",
    dateAdded: "2026-09-01",
  },
  {
    name: "Citadel Oasis — Modern Family Home",
    slug: "citadel-oasis-modern-family-home",
    development: "citadel-oasis",
    propertyType: "Modern Residential Home",
    status: "AVAILABLE",
    location: "Abraham Adesanya Road, Ajah, Lagos",
    address: "Opposite CharterHouse School, Abraham Adesanya Road, Ajah, Lagos",
    bedrooms: null,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      initialDeposit: "40% initial deposit",
      installmentDuration: "Balance structured over a period of 8 months",
      note: "40% down with the remaining balance structured over 8 months.",
    },
    amenityIds: ["swimming-pool", "gym", "solar-power", "clean-water", "drainage", "security", "landscaped", "football-pitch", "play-area"],
    category: "Residential",
    description:
      "A modern family residence within Citadel Oasis — a secure, solar-powered community opposite CharterHouse School on Abraham Adesanya Road, Ajah. Residents enjoy a swimming pool, fully fitted gym and well-engineered community infrastructure.",
    overview: [
      "Modern home within a secure, solar-powered community.",
      "Directly opposite CharterHouse School, Abraham Adesanya Road, Ajah.",
      "Community amenities include a swimming pool and a fully fitted gym.",
    ],
    features: [
      "Modern residential architecture",
      "Effective drainage system and clean water",
      "Solar-powered community environment",
      "24/7 secure, gated living",
      "Access to swimming pool and gym",
      "Landscaped outdoor areas and play facilities",
    ],
    gallery: [
      { src: "/media/images/dev-citadel-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/dev-citadel-2.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-landscape-1.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "A family-focused address in the established Abraham Adesanya corridor with strong lifestyle and demand fundamentals. Outcomes subject to the market.",
    isFeatured: true,
    availability: "Currently available.",
    dateAdded: "2026-09-01",
  },
  {
    name: "Capital Loft — 3 Bedroom Terrace",
    slug: "capital-loft-3-bedroom-terrace",
    development: "capital-loft",
    propertyType: "Terrace",
    status: "AVAILABLE",
    location: "Capital Loft development, prime location",
    address: "Exact address shared at consultation.",
    bedrooms: 3,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      label: "Flexible payment",
      initialDeposit: "Flexible entry",
      installmentDuration: "Outright purchase or structured payment option",
      note: "Both outright and structured payment plans are offered; current figures are CMS-managed.",
    },
    amenityIds: ["security", "landscaped", "car-park", "clean-water", "drainage", "backup-power"],
    category: "Investment",
    description:
      "A 3 Bedroom Terrace at Capital Loft — a future-ready, investment-focused development in a prime location with flexible payment plans.",
    overview: [
      "A three-bedroom terrace positioned as a prime, future-ready address.",
      "Chosen for strong location fundamentals and flexible entry.",
      "Built around long-term value and everyday convenience.",
    ],
    features: [
      "Three-bedroom contemporary terrace layout",
      "Prime, accessible location",
      "Flexible outright or structured payment",
      "Clean, modern finishes",
      "Secure community setting",
      "Future-ready infrastructure concept",
    ],
    gallery: [
      { src: "/media/images/dev-capital-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-2.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "The flagship investment unit at Capital Loft. Pricing for outright purchase and structured payment is maintained independently in the CMS.",
    isFeatured: true,
    availability: "Currently available.",
    dateAdded: "2026-09-01",
  },
  {
    name: "Capital Loft — 2 Bedroom Terrace with BQ",
    slug: "capital-loft-2-bedroom-terrace-with-bq",
    development: "capital-loft",
    propertyType: "Terrace",
    status: "AVAILABLE",
    location: "Capital Loft development, prime location",
    address: "Exact address shared at consultation.",
    bedrooms: 2,
    bathrooms: null,
    size: null,
    price: null,
    currency: "NGN",
    paymentPlan: {
      label: "Flexible payment",
      initialDeposit: "Flexible entry",
      installmentDuration: "Outright purchase or structured payment option",
      note: "Independently managed price for outright purchase and structured plans.",
    },
    amenityIds: ["security", "landscaped", "car-park", "clean-water", "drainage", "backup-power"],
    category: "Investment",
    description:
      "A 2 Bedroom Terrace with BQ at Capital Loft — a smart, flexible footprint with a boys' quarters unit, ideal for buyers seeking utility plus investment potential.",
    overview: [
      "Two-bedroom terrace with an attached BQ for flexibility.",
      "Positioned within a future-ready, investment-focused community.",
      "Practical format with strong rental and resale appeal.",
    ],
    features: [
      "Two-bedroom terrace with BQ",
      "Flexible outright or structured payment",
      "Prime, accessible location",
      "Contemporary finishes",
      "Secure community living",
      "Flexible space for family or income",
    ],
    gallery: [
      { src: "/media/images/dev-capital-1.jpg", alt: "Vinhomes development — site imagery" },
      { src: "/media/images/video-interior-2.jpg", alt: "Vinhomes development — site imagery" },
    ],
    floorPlans: [],
    brochure: null,
    mapCoordinates: null,
    investmentNotes:
      "BQ-equipped terraces are prized for flexibility and income potential. Pricing is CMS-managed for outright and structured purchases.",
    isFeatured: true,
    availability: "Currently available.",
    dateAdded: "2026-09-01",
  },
];

export function getDevelopmentBySlug(slug: string) {
  return developments.find((d) => d.slug === slug);
}

export function getPropertiesByDevelopment(slug: string) {
  return properties.filter((p) => p.development === slug);
}

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.isFeatured);
}
