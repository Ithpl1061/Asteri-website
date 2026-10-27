import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Phones/tablets: take over touch scrolling so pinned scroll-scenes stay locked to the
 * finger (no address-bar jumps) and one hard swipe can't fly through the page.
 * Same settings as PageShell. Desktop (mouse/wheel) is never touched.
 */
export function useTouchScroll() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024 || !ScrollTrigger.isTouch)
      return;
    ScrollTrigger.normalizeScroll({
      type: "touch",
      allowNestedScroll: true,
      momentum: (self: { velocityY: number }) => Math.min(1.7, Math.abs(self.velocityY) / 3000),
    });
    return () => {
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);
}
