import { site } from "@/lib/site";

// Canonical link for the page being shown. Empty until VITE_SITE_URL is set.
export function canonicalLinks(pathname: string) {
  const base = site.url.replace(/\/$/, "");
  return base ? [{ rel: "canonical", href: `${base}${pathname}` }] : [];
}

// Absolute address of a page, for og:url. Empty until VITE_SITE_URL is set.
export function absoluteUrl(pathname: string) {
  const base = site.url.replace(/\/$/, "");
  return base ? `${base}${pathname}` : "";
}
