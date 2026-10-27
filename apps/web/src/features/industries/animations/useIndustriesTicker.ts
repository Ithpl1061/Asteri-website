import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesTickerParams = {
  tickerLine1Ref: RefObject<null>;
  tickerSectionRef: RefObject<null>;
};

export function useIndustriesTicker({
  tickerLine1Ref,
  tickerSectionRef,
}: useIndustriesTickerParams) {
  useEffect(() => {
    if (!tickerLine1Ref.current || !tickerSectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(tickerLine1Ref.current, {
        x: "150vw",
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tickerSectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(tickerLine1Ref.current, {
        x: "-150vw",
        ease: "none",
        duration: 1,
      });
    }, tickerSectionRef);

    return () => ctx.revert();
  }, [tickerLine1Ref, tickerSectionRef]);
}
