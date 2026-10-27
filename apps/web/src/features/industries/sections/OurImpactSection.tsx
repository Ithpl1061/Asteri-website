import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

type OurImpactSectionProps = {
  caseStudySectionRef: RefObject<null>;
  caseStudyLine1Ref: RefObject<null>;
  caseStudyLine2Ref: RefObject<null>;
  caseStudyBtnRef: RefObject<null>;
};

export function OurImpactSection({
  caseStudySectionRef,
  caseStudyLine1Ref,
  caseStudyLine2Ref,
  caseStudyBtnRef,
}: OurImpactSectionProps) {
  return (
    <section
      ref={caseStudySectionRef}
      className="industries-impact relative bg-black min-h-[75vh] flex items-center justify-center px-6 overflow-hidden w-full"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* GREEN GLOW */}

        <div
          className="
                    absolute
                    bottom-[-250px]
                    left-1/2
                    -translate-x-1/2
                    w-[1400px]
                    h-[500px]
                    rounded-full
                    bg-[#8AF500]
                    opacity-[0.08]
                    blur-[180px]
                  "
        />

        {/* TEXT */}

        <div
          className="
                    text-center
                    w-full
                    px-10
                  "
        >
          <h2 className="type-title text-white max-w-[1400px] mx-auto">
            <span ref={caseStudyLine1Ref} className="block">
              Our impact lives inside
            </span>
            <span ref={caseStudyLine2Ref} className="block">
              the systems in use.
            </span>
          </h2>
        </div>

        {/*Button*/}
        <button
          ref={caseStudyBtnRef}
          className="
                  hidden
                  flex
                  items-center
                  gap-3
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  backdrop-blur-md
                "
        >
          <span className="text-white type-button">Case Studies</span>

          <div
            className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#8AF500]
                    flex
                    items-center
                    justify-center
                  "
          >
            <ArrowUpRight size={44} className="text-black" strokeWidth={2.2} />
          </div>
        </button>
      </div>
    </section>
  );
}
