import type { Amenity } from "@/lib/types";

/**
 * Amenities catalogue. Each amenity is attached to a property/development
 * record via `amenityIds`. Only amenities confirmed for a specific
 * development are shown there — nothing is assumed site-wide.
 */
export const amenities: Amenity[] = [
  {
    id: "swimming-pool",
    label: "Swimming Pool",
    description: "Resort-style swimming pool within the community.",
    image: { src: "/media/images/home-amenity-pool.jpg", alt: "Community swimming pool", credit: "Conceptual render" },
  },
  {
    id: "gym",
    label: "Fully Fitted Gym",
    description: "On-site fitness suite for residents.",
    image: { src: "/media/images/amenity-gym.jpg", alt: "Fully fitted residents' gym", credit: "Conceptual render" },
  },
  {
    id: "football-pitch",
    label: "Football Pitch",
    description: "Recreational multi-purpose sports ground.",
  },
  {
    id: "play-area",
    label: "Children's Play Area",
    description: "Safe, landscaped play space for families.",
  },
  {
    id: "solar-power",
    label: "Solar-Powered Environment",
    description: "Clean, reliable solar energy throughout the community.",
    image: { src: "/media/images/amenity-solar.jpg", alt: "Solar panels on a premium roof", credit: "Conceptual render" },
  },
  {
    id: "clean-water",
    label: "Clean Water",
    description: "Reliable supply of clean water to every home.",
  },
  {
    id: "drainage",
    label: "Effective Drainage System",
    description: "Properly engineered drainage for a dry, safe environment.",
  },
  {
    id: "security",
    label: "24/7 Security",
    description: "Secured, gated community with continuous monitoring.",
  },
  {
    id: "landscaped",
    label: "Landscaped Outdoor Areas",
    description: "Beautifully landscaped communal outdoor spaces.",
  },
  {
    id: "backup-power",
    label: "Power Backup",
    description: "Thoughtfully provisioned power resilience.",
  },
  {
    id: "car-park",
    label: "Private Parking",
    description: "Secure dedicated parking arrangements.",
  },
];
