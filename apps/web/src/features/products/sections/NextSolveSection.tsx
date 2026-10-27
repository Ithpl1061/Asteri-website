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
      className="products-next relative h-screen bg-black flex items-center justify-center overflow-hidden px-6"
    >
      <div className="products-next-card relative flex min-h-[650px] w-full max-w-[1360px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0B1205] py-28">
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2
            ref={nextTitleRef}
            className="text-white text-[clamp(2rem,4.5vw,5.25rem)] font-bold leading-tight text-center"
          >
            Not just a license - a real partnership.
          </h2>

          <p
            ref={nextTextRef}
            className="
                  mt-8
                  text-white
                  text-[clamp(0.875rem,1.3vw,1.125rem)]
                  font-medium
                  leading-relaxed
                "
          >
            Every product we sell, we also implement
            <br />- at the right price, with the right support.
          </p>

          {/*Button*/}
          <button
            ref={nextBtnRef}
            className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  pl-6
                  pr-3
                  py-2.5
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#D9D9D9]
                  backdrop-blur-md
                "
          >
            <span
              className="
                    text-black
                    text-sm
                    sm:text-base
                    font-bold
                  "
            >
              Request a Quote
            </span>

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
              <ArrowUpRight size={34} className="text-black" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
