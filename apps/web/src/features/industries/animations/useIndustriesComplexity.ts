import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesComplexityParams = {
  complexitySectionRef: RefObject<null>;
  complexityTextRef: RefObject<null>;
};

export function useIndustriesComplexity({
  complexitySectionRef,
  complexityTextRef,
}: useIndustriesComplexityParams) {
  useEffect(() => {
    if (!complexitySectionRef.current || !complexityTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(complexityTextRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: complexitySectionRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(complexityTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, complexitySectionRef);

    return () => ctx.revert();
  }, [complexitySectionRef, complexityTextRef]);
}
