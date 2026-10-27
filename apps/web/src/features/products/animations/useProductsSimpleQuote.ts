import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useProductsSimpleQuoteParams = {
  simpleQuoteSectionRef: RefObject<null>;
};

export function useProductsSimpleQuote({ simpleQuoteSectionRef }: useProductsSimpleQuoteParams) {
  useEffect(() => {
    if (!simpleQuoteSectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: simpleQuoteSectionRef.current,
          start: "center center",
          end: "+=840",
          scrub: 1,
          pin: canPin(),
        },
      });

      tl.fromTo(
        ".simple-quote-line-1",
        { x: "-100vw" },
        { x: 0, ease: "power3.out", duration: 1 },
        0,
      );

      tl.fromTo(
        ".simple-quote-line-2",
        { x: "100vw" },
        { x: 0, ease: "power3.out", duration: 1 },
        0,
      );

      tl.to({}, { duration: 0.4 }); // Hold screen
    }, simpleQuoteSectionRef);

    return () => ctx.revert();
  }, [simpleQuoteSectionRef]);
}
