/**
 * Vinhomes films — portrait/landscape footage supplied by the client,
 * served from /media/videos. Durations verified from file metadata;
 * captions stay neutral (brand-level, never claiming specific content).
 */
export interface Film {
  src: string;
  title: string;
  duration: string;
  orientation: "landscape" | "portrait";
}

export const filmPoster = "/media/brand/film-poster.jpg";

export const films = {
  /** Homepage band — punchy landscape cut. */
  homepage: {
    src: "/media/videos/vinhomes-film-02.mp4",
    title: "Vinhomes Platinum Living — on film",
    duration: "0:39",
    orientation: "landscape",
  },
  /** About page feature — the long landscape cut. */
  feature: {
    src: "/media/videos/vinhomes-film-05.mp4",
    title: "The Vinhomes story — on film",
    duration: "1:31",
    orientation: "landscape",
  },
  /** About page portrait trio, shown in arch frames. */
  moments: [
    {
      src: "/media/videos/vinhomes-film-01.mp4",
      title: "Vinhomes moments — I",
      duration: "0:24",
      orientation: "portrait",
    },
    {
      src: "/media/videos/vinhomes-film-03.mp4",
      title: "Vinhomes moments — II",
      duration: "0:33",
      orientation: "portrait",
    },
    {
      src: "/media/videos/vinhomes-film-04.mp4",
      title: "Vinhomes moments — III",
      duration: "1:12",
      orientation: "portrait",
    },
  ],
} satisfies { homepage: Film; feature: Film; moments: Film[] };
