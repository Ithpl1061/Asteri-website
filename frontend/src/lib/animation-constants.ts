/**
 * Animation timing constants and easing functions
 * Used across the cinematic storytelling engine
 *
 * Inspired by premium motion design from Apple and Linear
 */

/**
 * Cinematic easing curves optimized for storytelling
 * All easing functions follow premium motion design principles
 */
export const CinematicEasing = {
  // Smooth, natural feel - used for intro animations
  smoothIn: "power2.out",
  smoothOut: "power2.in",
  smoothInOut: "power2.inOut",

  // More dramatic, intentional motion
  dramaticIn: "power3.out",
  dramaticOut: "power3.in",
  dramaticInOut: "power3.inOut",

  // Subtle, elegant easing for floating elements
  float: "sine.inOut",
  floatOut: "sine.out",

  // Quad easing for orb magnetic feel
  magnetic: "power2.out",

  // Used for final landing/emphasis
  landing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

/**
 * Timing durations for consistent animation pacing
 * All durations in seconds
 */
export const AnimationDuration = {
  // Quick accent animations
  quick: 0.4,

  // Standard UI animations
  standard: 0.8,

  // Orchestrated sequences
  orchestrated: 1.2,

  // Hero/section transitions
  epic: 1.4,

  // Full screen scroll interactions
  heroic: 1.6,

  // Stagger delays
  staggerSmall: 0.08,
  staggerMedium: 0.12,
  staggerLarge: 0.15,
};

/**
 * Glow shadow configurations for neon green orb effects
 */
export const OrbGlow = {
  // Subtle glow at rest
  subtle: {
    filter: "drop-shadow(0 0 12px oklch(0.88 0.27 142 / 0.4))",
    boxShadow:
      "0 0 18px 4px oklch(0.88 0.27 142 / 0.5), 0 0 40px 8px oklch(0.88 0.27 142 / 0.2)",
  },

  // Standard glow during movement
  standard: {
    filter: "drop-shadow(0 0 14px oklch(0.88 0.27 142 / 0.6))",
    boxShadow:
      "0 0 18px 4px oklch(0.88 0.27 142 / 0.7), 0 0 50px 10px oklch(0.88 0.27 142 / 0.35)",
  },

  // Intense glow at landing/emphasis
  intense: {
    filter: "drop-shadow(0 0 24px oklch(0.88 0.27 142 / 0.8))",
    boxShadow:
      "0 0 24px 6pk oklch(0.88 0.27 142 / 0.9), 0 0 60px 15px oklch(0.88 0.27 142 / 0.5)",
  },

  // Pulse glow for emphasis
  pulse: {
    filter: "drop-shadow(0 0 18px oklch(0.88 0.27 142 / 0.7))",
  },
};

/**
 * Line glow configurations for connecting visuals
 */
export const LineGlow = {
  subtle: "0 0 6px oklch(0.88 0.27 142 / 0.3)",
  standard: "0 0 8px oklch(0.88 0.27 142 / 0.5)",
  intense: "0 0 12px oklch(0.88 0.27 142 / 0.7)",
};

/**
 * Scroll trigger settings for optimal performance
 */
export const ScrollTriggerSettings = {
  // Mobile-friendly threshold
  mobileThreshold: 0.45,

  // Desktop threshold for precise triggering
  desktopThreshold: 0.35,

  // Viewport base settings
  viewportThreshold: 0.3,

  // Optimized marker (remove in production)
  markers: false,
};

/**
 * Helper to get motion-safe animation variants
 *
 * Usage:
 * const vars = getMotionSafeVariant(
 *   { opacity: 1, duration: 1 },
 *   { opacity: 1, duration: 0 }, // fallback
 *   prefersReducedMotion
 * );
 */
export function getMotionSafeVariant<T extends Record<string, any>>(
  animationVars: T,
  reducedMotionVars: T,
  prefersReduced: boolean
): T {
  return prefersReduced ? reducedMotionVars : animationVars;
}
