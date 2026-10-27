import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useProductsNextParams = {
  nextRef: RefObject<HTMLElement | null>;
  nextTitleRef: RefObject<HTMLHeadingElement | null>;
  nextTextRef: RefObject<HTMLParagraphElement | null>;
  nextBtnRef: RefObject<HTMLButtonElement | null>;
};

export function useProductsNext({
  nextRef,
  nextTitleRef,
  nextTextRef,
  nextBtnRef,
}: useProductsNextParams) {
  useEffect(() => {
    if (!nextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([nextTitleRef.current, nextTextRef.current, nextBtnRef.current], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top top",
          end: "+=2400",
          scrub: true,
          pin: canPin(),
        },
      });

      // TITLE IN
      tl.to(nextTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // PAUSE
      tl.to({}, { duration: 0.5 });

      // TEXT IN
      tl.to(nextTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // PAUSE
      tl.to({}, { duration: 0.5 });

      // BUTTON IN
      tl.to(nextBtnRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // HOLD
      tl.to({}, { duration: 0.4 });
    }, nextRef);

    return () => ctx.revert();
  }, [nextRef, nextTitleRef, nextTextRef, nextBtnRef]);
}
