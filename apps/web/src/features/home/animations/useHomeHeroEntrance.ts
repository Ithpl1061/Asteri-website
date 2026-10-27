import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

type useHomeHeroEntranceParams = {
  heroDotRef: RefObject<HTMLSpanElement | null>;
};

export function useHomeHeroEntrance({ heroDotRef }: useHomeHeroEntranceParams) {
  useEffect(() => {
    const dot = heroDotRef.current;
    if (!dot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap
      .timeline({ delay: 0.3 })
      .fromTo(
        dot,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2.2)" },
      );

    return () => {
      tl.kill();
    };
  }, [heroDotRef]);
}
