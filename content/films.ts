import type { FilmAsset } from "@/lib/types";

/**
 * VINHOMES FILM REGISTRY — the five cuts of footage supplied by the client,
 * served from /public/media/videos.
 *
 * Nothing here is invented. For every film the pixel size and duration were
 * read from the file itself, the poster is a frame pulled from that same film,
 * and `shows` describes only what is actually visible on screen (title cards,
 * overlays and rooms we can see) — never a claim about the building quality,
 * returns or availability.
 *
 * Films are attached to Developments and Properties through `filmIds`, so a
 * hosted CMS can replace this registry with a video asset collection and the
 * UI keeps working unchanged.
 */

/** Brand-level fallback poster (also used for Open Graph). */
export const filmPoster = "/media/brand/film-poster.jpg";

export const films: FilmAsset[] = [
  {
    id: "emerald-tour",
    src: "/media/videos/vinhomes-film-01.mp4",
    poster: "/media/posters/emerald-duplex-tour.jpg",
    title: "The Emerald duplex, room by room",
    duration: "0:24",
    seconds: 24,
    orientation: "portrait",
    width: 478,
    height: 850,
    shows:
      "Footage shot inside The Emerald — living space, kitchen and bedrooms. The on-screen titles introduce The Emerald Duplex and list the 2, 3 and 4-bedroom fully-detached options.",
    subject: "The Emerald",
    subjectHref: "/properties?dev=the-emerald",
    credit: "Supplied footage — filmed on site",
  },
  {
    id: "citadel-tour",
    src: "/media/videos/vinhomes-film-02.mp4",
    poster: "/media/posters/citadel-oasis-aerial.jpg",
    title: "Citadel Oasis from above",
    duration: "0:39",
    seconds: 39,
    orientation: "landscape",
    width: 848,
    height: 478,
    shows:
      "Aerial footage across the terraces at Citadel Oasis. On screen: the Abraham Adesanya Road location opposite CharterHouse School, the stated payment structure (40% deposit, balance over 8 months), the community amenities and a build-status note.",
    subject: "Citadel Oasis",
    subjectHref: "/properties?dev=citadel-oasis",
    credit: "Supplied footage — filmed on site",
  },
  {
    id: "emerald-investment",
    src: "/media/videos/vinhomes-film-03.mp4",
    poster: "/media/posters/emerald-investment-case.jpg",
    title: "The Emerald — the investment case",
    duration: "0:33",
    seconds: 33,
    orientation: "portrait",
    width: 478,
    height: 850,
    shows:
      "The presentation deck behind The Emerald cut to film — prime location, luxury living, gated community and payment structure, closing on the render of the addresses.",
    subject: "The Emerald",
    subjectHref: "/properties?dev=the-emerald",
    credit: "Supplied footage — presentation film",
  },
  {
    id: "site-walk",
    src: "/media/videos/vinhomes-film-04.mp4",
    poster: "/media/posters/on-site-walk.jpg",
    title: "On the ground at the community",
    duration: "1:12",
    seconds: 72,
    orientation: "portrait",
    width: 360,
    height: 640,
    shows:
      "An unedited walk-through of the estate with a Vinhomes consultant — the laid streets, the homes at various stages of completion and the finished community buildings, ending on the marketed-by card.",
    subject: "Citadel Oasis",
    subjectHref: "/properties?dev=citadel-oasis",
    credit: "Supplied footage — filmed on site",
  },
  {
    id: "capital-loft-tour",
    src: "/media/videos/vinhomes-film-05.mp4",
    poster: "/media/posters/capital-loft-tour.jpg",
    title: "Capital Loft — the full tour",
    duration: "1:31",
    seconds: 91,
    orientation: "landscape",
    width: 640,
    height: 360,
    shows:
      "The longest cut supplied: interiors of the loft from living room to kitchen and bathroom, the surrounding roads and landmarks, and the on-screen house types, community amenities and payment structure.",
    subject: "Capital Loft",
    subjectHref: "/properties?dev=capital-loft",
    credit: "Supplied footage — filmed on site",
  },
];

export const filmById: Record<string, FilmAsset> = Object.fromEntries(
  films.map((f) => [f.id, f])
);

/** Look up a single film by id (used by the property/development pages). */
export function getFilm(id?: string | null): FilmAsset | undefined {
  if (!id) return undefined;
  return filmById[id];
}

/** Resolve a list of ids, dropping anything unknown so a CMS typo can't crash a page. */
export function getFilms(ids?: string[] | null): FilmAsset[] {
  if (!ids?.length) return [];
  const seen = new Set<string>();
  const out: FilmAsset[] = [];
  for (const id of ids) {
    const film = filmById[id];
    if (film && !seen.has(film.id)) {
      seen.add(film.id);
      out.push(film);
    }
  }
  return out;
}

/** Alias kept so `Film` still describes a registry entry. */
export type Film = FilmAsset;
