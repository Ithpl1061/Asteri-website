import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useProductsEnablesParams = {
  enablesSectionRef: RefObject<null>;
  enablesTitleRef: RefObject<null>;
  enablesCard1Ref: RefObject<null>;
  enablesCard2Ref: RefObject<null>;
  enablesCard3Ref: RefObject<null>;
  enablesCard4Ref: RefObject<null>;
};

export function useProductsEnables({
  enablesSectionRef,
  enablesTitleRef,
  enablesCard1Ref,
  enablesCard2Ref,
  enablesCard3Ref,
  enablesCard4Ref,
}: useProductsEnablesParams) {
  useEffect(() => {
    if (!enablesSectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state: Title slightly low, cards far right
      gsap.set(enablesTitleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(
        [
          enablesCard1Ref.current,
          enablesCard2Ref.current,
          enablesCard3Ref.current,
          enablesCard4Ref.current,
        ],
        {
          x: "100vw",
          opacity: 0,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: enablesSectionRef.current,
          start: "top top",
          end: "+=3320",
          scrub: true,
          pin: canPin(),
        },
      });

      // 1. Title comes in
      tl.to(enablesTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      // 2. Cards come in one by one from the right
      tl.to(enablesCard1Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard2Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard3Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard4Ref.current, { x: 0, opacity: 1, duration: 1 });

      // 3. Hold at the end
      tl.to({}, { duration: 0.4 });
    }, enablesSectionRef);

    return () => ctx.revert();
  }, [
    enablesSectionRef,
    enablesTitleRef,
    enablesCard1Ref,
    enablesCard2Ref,
    enablesCard3Ref,
    enablesCard4Ref,
  ]);
}
