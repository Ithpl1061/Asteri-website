// Company links used by the header, footer and contact page.
// Fill these in when the real URLs are available. While a value is empty the link points to "#".
export const site = {
  name: "Asteri",
  // Full public address, e.g. "https://www.example.com". Used for canonical and og:url tags.
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? "",
  social: {
    linkedin: "https://www.linkedin.com/company/asteritechnology/",
    instagram: "https://www.instagram.com/asteritechnologypvtltd/",
    youtube: "https://www.youtube.com/@asteritechnology5886",
  },
} as const;

export const socialHref = (value: string) => value || "#";
