import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for managing GSAP animations with proper cleanup
 *
 * Usage:
 * const context = useGsapAnimation();
 *
 * useEffect(() => {
 *   context?.add(() => {
 *     gsap.to(elementRef.current, { duration: 1 });
 *   });
 * }, []);
 */
export function useGsapAnimation() {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    contextRef.current = gsap.context(() => {});

    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
      // Kill any remaining ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger) trigger.kill();
      });
    };
  }, []);

  return contextRef.current;
}

/**
 * Hook to check if user prefers reduced motion
 * Returns true if user has enabled "prefers-reduced-motion"
 *
 * Usage:
 * const prefersReducedMotion = useReducedMotion();
 * if (prefersReducedMotion) return <StaticComponent />;
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = (
    useRef<boolean | null>(null)
  );

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced.current = mediaQuery.matches;

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReduced.current = e.matches;
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return prefersReduced.current ?? false;
}

/**
 * Create a GSAP timeline with motion-safe fallback
 *
 * Usage:
 * const timeline = useGsapTimeline(elementRef, {
 *   duration: 1,
 *   ease: "power2.out"
 * });
 */
export interface TimelineOptions {
  duration?: number;
  ease?: string;
  stagger?: number;
  delay?: number;
}

export function createCinematicTimeline(
  elements: HTMLElement | HTMLElement[] | null,
  options: TimelineOptions = {}
) {
  const { duration = 1, ease = "power2.out", stagger = 0 } = options;

  if (!elements) return null;

  const tl = gsap.timeline();

  if (Array.isArray(elements)) {
    tl.to(elements, { duration, ease, stagger }, 0);
  } else {
    tl.to(elements, { duration, ease }, 0);
  }

  return tl;
}

/**
 * Animate elements with motion-safe support
 *
 * Returns instant animation if prefers-reduced-motion is enabled
 */
export function animateWithMotionSafe(
  target: gsap.TweenTarget,
  vars: gsap.ToVars,
  prefersReduced: boolean
) {
  if (prefersReduced) {
    // Set end state immediately without animation
    gsap.set(target, vars);
    return gsap.timeline();
  }

  return gsap.to(target, vars);
}
