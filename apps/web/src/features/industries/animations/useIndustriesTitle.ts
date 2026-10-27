import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesTitleParams = {
  industriesTitleSectionRef: RefObject<null>;
  industriesTitleRef: RefObject<null>;
};

export function useIndustriesTitle({
  industriesTitleSectionRef,
  industriesTitleRef,
}: useIndustriesTitleParams) {
  useEffect(() => {
    if (!industriesTitleSectionRef.current || !industriesTitleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(industriesTitleRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: industriesTitleSectionRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(industriesTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, industriesTitleSectionRef);

    return () => ctx.revert();
  }, [industriesTitleSectionRef, industriesTitleRef]);
}
