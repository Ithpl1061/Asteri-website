import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

type NextSolveSectionProps = {
  nextRef: RefObject<HTMLElement | null>;
  nextTitleRef: RefObject<HTMLHeadingElement | null>;
  nextTextRef: RefObject<HTMLParagraphElement | null>;
  nextBtnRef: RefObject<HTMLButtonElement | null>;
};

export function NextSolveSection({
  nextRef,
  nextTitleRef,
  nextTextRef,
  nextBtnRef,
}: NextSolveSectionProps) {
  return (
    <section
      ref={nextRef}
      className="industries-next relative bg-black min-h-[75vh] w-full flex items-center justify-center overflow-hidden px-6"
    >
      <div className="relative flex w-full max-w-[1360px] items-center justify-center overflow-hidden py-20 md:py-24">
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 ref={nextTitleRef} className="type-display text-white sm:whitespace-nowrap">
            Don't see your sector?
          </h2>

          <p ref={nextTextRef} className="mt-10 type-lead font-semibold text-white">
            Reach out and let's discuss your
            <br />
            specific context.
          </p>

          {/*Button*/}
          <button
            ref={nextBtnRef}
            className="
                  mt-12
                  flex
                  items-center
                  gap-4
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#D9D9D9]
                  backdrop-blur-md
                
                "
          >
            <span className="text-black type-button">Talk to Us</span>

            <div
              className="
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
            >
              <ArrowUpRight size={44} className="text-black" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
