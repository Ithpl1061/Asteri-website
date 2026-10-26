// Motion rules shared by all pages.
// Pinned (sticky) scroll sections are turned off only when the visitor has asked for reduced motion.
// Phones keep their pinned scenes: the home page is designed around them, and removing the pins
// on phones collapses the scroll distance and leaves sections blank (see the before/after screenshots).

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_QUERY).matches;

export const canPin = () => !prefersReducedMotion();
