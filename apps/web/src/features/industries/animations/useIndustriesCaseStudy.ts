import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesCaseStudyParams = {
  caseStudySectionRef: RefObject<null>;
  caseStudyLine1Ref: RefObject<null>;
  caseStudyLine2Ref: RefObject<null>;
  caseStudyBtnRef: RefObject<null>;
};

export function useIndustriesCaseStudy({
  caseStudySectionRef,
  caseStudyLine1Ref,
  caseStudyLine2Ref,
  caseStudyBtnRef,
}: useIndustriesCaseStudyParams) {
  useEffect(() => {
    if (!caseStudySectionRef.current || !caseStudyLine1Ref.current || !caseStudyLine2Ref.current)
      return;

    const ctx = gsap.context(() => {
      gsap.set(caseStudyLine1Ref.current, {
        x: "-100vw",
        opacity: 0,
      });
      gsap.set(caseStudyLine2Ref.current, {
        x: "100vw",
        opacity: 0,
      });
      if (caseStudyBtnRef.current) {
        gsap.set(caseStudyBtnRef.current, {
          opacity: 0,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: caseStudySectionRef.current,
          start: "center center",
          end: "+=1080",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(
        caseStudyLine1Ref.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      ).to(
        caseStudyLine2Ref.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

      if (caseStudyBtnRef.current) {
        tl.to(caseStudyBtnRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      tl.to({}, { duration: 0.3 });
    }, caseStudySectionRef);

    return () => ctx.revert();
  }, [caseStudySectionRef, caseStudyLine1Ref, caseStudyLine2Ref, caseStudyBtnRef]);
}
