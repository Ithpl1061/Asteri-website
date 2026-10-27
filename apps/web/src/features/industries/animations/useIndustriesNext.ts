import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesNextParams = {
  nextRef: RefObject<HTMLElement | null>;
  nextTitleRef: RefObject<HTMLHeadingElement | null>;
  nextTextRef: RefObject<HTMLParagraphElement | null>;
  nextBtnRef: RefObject<HTMLButtonElement | null>;
};

export function useIndustriesNext({
  nextRef,
  nextTitleRef,
  nextTextRef,
  nextBtnRef,
}: useIndustriesNextParams) {
  useEffect(() => {
    if (!nextRef.current || !nextTitleRef.current || !nextTextRef.current || !nextBtnRef.current)
      return;

    const ctx = gsap.context(() => {
      gsap.set([nextTitleRef.current, nextTextRef.current, nextBtnRef.current], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "center center",
          end: "+=1935",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(nextTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to({}, { duration: 0.5 })
        .to(nextTextRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(nextBtnRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.3 });
    }, nextRef);

    return () => ctx.revert();
  }, [nextRef, nextTitleRef, nextTextRef, nextBtnRef]);
}
