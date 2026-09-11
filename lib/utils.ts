import { clsx, type ClassValue } from "clsx";

/** Join class names (kept dependency-light). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a property status into a display-safe label. */
export function statusLabel(s: string) {
  return s.replace(/\b\w/g, (m) => m.toUpperCase()).replace("Availability", "");
}

export function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
