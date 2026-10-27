import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useProductsBuiltParams = {
  builtSectionRef: RefObject<null>;
  builtTextRef: RefObject<null>;
};

export function useProductsBuilt({ builtSectionRef, builtTextRef }: useProductsBuiltParams) {
  useEffect(() => {
    if (!builtSectionRef.current || !builtTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(builtTextRef.current, {
        y: 300,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: builtSectionRef.current,
          start: "top top",
          end: "+=3055",
          scrub: 1,
          pin: canPin(),
        },
      });

      // COME UP
      tl.to(builtTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
      })

        // PAUSE / HOLD
        .to({}, { duration: 0.8 })

        // GO UP / EXIT
        .to(builtTextRef.current, {
          y: -700,
          opacity: 0,
          duration: 2,
        });
    }, builtSectionRef);

    return () => ctx.revert();
  }, [builtSectionRef, builtTextRef]);
}
