import type { RefObject } from "react";

type TechnologyMattersSectionProps = {
  techSectionRef: RefObject<HTMLElement | null>;
  techHeadingRef: RefObject<HTMLHeadingElement | null>;
  techLine1Ref: RefObject<HTMLSpanElement | null>;
  techLine2Ref: RefObject<HTMLSpanElement | null>;
};

export function TechnologyMattersSection({
  techSectionRef,
  techHeadingRef,
  techLine1Ref,
  techLine2Ref,
}: TechnologyMattersSectionProps) {
  return (
    <section
      ref={techSectionRef}
      className="relative h-screen w-full bg-black flex items-center justify-center px-6 sm:px-10 overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto text-center">
        <h2
          ref={techHeadingRef}
          className="text-center text-white tracking-tight"
          style={{
            color: "#FFF",
            fontFamily: '"Inter", sans-serif',
            fontSize: "clamp(2rem, 5.2vw, 4.875rem)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1.15",
          }}
        >
          <span ref={techLine1Ref} className="block whitespace-normal sm:whitespace-nowrap">
            Technology Only Matters
          </span>
          <span ref={techLine2Ref} className="block whitespace-normal sm:whitespace-nowrap">
            When It Delivers Clarity.
          </span>
        </h2>
      </div>
    </section>
  );
}
