import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "development",
    title: "Property Development",
    short: "Premium residential developments designed for modern lifestyles.",
    description:
      "From The Emerald's fully-detached duplexes to the secure, solar-powered community at Citadel Oasis, we design and deliver developments that combine elegant architecture, quality construction and considered amenities.",
    image: { src: "/media/images/emerald-duplex.jpg", alt: "Premium residential development", credit: "Conceptual render" },
    features: [
      "Fully-detached and terrace residences",
      "Quality contemporary construction",
      "Secure, managed communities",
      "Considered amenities and landscaping",
    ],
    active: true,
  },
  {
    id: "land-investment",
    title: "Land & Property Investment",
    short: "Prime real estate opportunities positioned for long-term value.",
    description:
      "Vinhomes connects investors with carefully chosen land and property opportunities — from investment-focused addresses like Capital Loft to well-located residential communities — with flexible entry and transparent guidance.",
    image: { src: "/media/images/capital-loft.jpg", alt: "Land and property investment opportunity", credit: "Artist impression" },
    features: [
      "Prime, location-led opportunities",
      "Outright and structured options",
      "Guidance on payment structures",
      "Clear, factual positioning",
    ],
    active: true,
  },
  {
    id: "residential-sales",
    title: "Residential Sales",
    short: "Helping clients find homes suited to their lifestyle and investment objectives.",
    description:
      "Whether you are seeking a fully-detached family duplex, a modern terrace, or a home within a secure community, our advisors help match you to a residence that fits how you actually live.",
    image: { src: "/media/images/citadel-interior.jpg", alt: "Residential home for sale", credit: "Conceptual render" },
    features: [
      "Personalised property matching",
      "Fully-detached, terrace and community homes",
      "Lifestyle-first guidance",
      "Transparent pricing and plans",
    ],
    active: true,
  },
  {
    id: "consultation",
    title: "Property Consultation",
    short: "Professional guidance through property selection and acquisition.",
    description:
      "Choosing a home or an investment is a significant decision. Our advisors walk you through selection, location rationale, payment structures and the acquisition process — clearly, and without pressure.",
    image: { src: "/media/images/emerald-interior.jpg", alt: "Property consultation", credit: "Conceptual render" },
    features: [
      "Selection guidance and walkthroughs",
      "Payment and structuring advice",
      "Location and value rationale",
      "Concierge-level support",
    ],
    active: true,
  },
  {
    id: "investment-advisory",
    title: "Investment Advisory",
    short: "Helping clients evaluate opportunities, payment structures and long-term potential.",
    description:
      "Our advisors help you weigh location advantages, quality, payment flexibility and longer-term potential — always distinguishing factual detail from estimates, so you decide with clarity.",
    image: { src: "/media/images/home-amenity-pool.jpg", alt: "Investment advisory for property", credit: "Conceptual render" },
    features: [
      "Location and demand analysis",
      "Comparison of payment structures",
      "Factual positioning, no fabricated returns",
      "Long-term value perspective",
    ],
    active: true,
  },
  {
    id: "viewing",
    title: "Private Viewings & Handover",
    short: "Personalised viewings and a considered path to your new home.",
    description:
      "We arrange private consultations and viewings — on-site or by video — and support you through documentation and handover, so the experience feels as refined as the property itself.",
    image: { src: "/media/images/citadel-community.jpg", alt: "Private viewing of a community", credit: "Conceptual render" },
    features: [
      "Private on-site or virtual viewings",
      "Documentation guidance",
      "Structured handover support",
      "Ongoing advisory relationship",
    ],
    active: true,
  },
];
