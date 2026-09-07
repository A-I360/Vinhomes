import type { Founder } from "@/lib/types";

/**
 * FOUNDER / LEADERSHIP
 * The portrait below is a frame taken from Vinhomes' own promo footage and
 * retouched into a clean professional portrait. The founder's full name and
 * title are intentionally left empty here — add them through the CMS / this
 * file when the client confirms how they wish to be presented. Until then the
 * section renders an elegant, factual leadership profile with no invented
 * name, title, credentials or direct quotes attributed to an individual.
 */
export const founder: Founder = {
  role: "Founder",
  image: {
    src: "/media/brand/founder.jpg",
    alt: "Portrait of the founder of Vinhomes Platinum Living",
  },
  tagline: "Built on a conviction, not a template.",
  message: [
    "Vinhomes Platinum Living was founded on a simple conviction: that the homes we live in should match the ambition of the lives we lead — elegant, secure, considered, and built to last.",
    "Every development, from fully-detached duplexes to secure solar-powered communities, is a reflection of that belief. We build the way we would want to be served — with honesty, quality and genuine care for the people who will live there.",
    "This is not about selling property. It is about creating places where families feel proud to belong — today and for generations to come.",
  ],
  published: true,
};
