import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesFintechParams = {
  fintechCardsSectionRef: RefObject<null>;
  fintechTitleRef: RefObject<null>;
  fintechCarouselRef: RefObject<null>;
  fintechCard1Ref: RefObject<null>;
  fintechCard2Ref: RefObject<null>;
  fintechCard3Ref: RefObject<null>;
  fintechCard4Ref: RefObject<null>;
};

export function useIndustriesFintech({
  fintechCardsSectionRef,
  fintechTitleRef,
  fintechCarouselRef,
  fintechCard1Ref,
  fintechCard2Ref,
  fintechCard3Ref,
  fintechCard4Ref,
}: useIndustriesFintechParams) {
  useEffect(() => {
    if (
      !fintechCardsSectionRef.current ||
      !fintechTitleRef.current ||
      !fintechCarouselRef.current ||
      !fintechCard1Ref.current ||
      !fintechCard2Ref.current ||
      !fintechCard3Ref.current ||
      !fintechCard4Ref.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.set(fintechTitleRef.current, {
        y: "50vh",
        xPercent: -50,
        opacity: 0,
      });

      const elementsToAnimate = [
        fintechCarouselRef.current,
        fintechCard1Ref.current,
        fintechCard2Ref.current,
        fintechCard3Ref.current,
        fintechCard4Ref.current,
      ];

      gsap.set(elementsToAnimate, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fintechCardsSectionRef.current,
          start: "center center",
          end: "+=3115",
          scrub: true,
          pin: canPin(),
        },
      });

      // Animate title first
      tl.to(fintechTitleRef.current, {
        y: 0,
        xPercent: -50,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to({}, { duration: 0.5 })
        // Animate cards sequentially
        .to(fintechCarouselRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard1Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard2Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard3Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard4Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.4 });
    }, fintechCardsSectionRef);

    return () => ctx.revert();
  }, [
    fintechCardsSectionRef,
    fintechTitleRef,
    fintechCarouselRef,
    fintechCard1Ref,
    fintechCard2Ref,
    fintechCard3Ref,
    fintechCard4Ref,
  ]);
}
