import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

type IndustryHeroSectionProps = {
  industriesHeroRef: RefObject<null>;
  industriesHeroContentRef: RefObject<null>;
};

export function IndustryHeroSection({
  industriesHeroRef,
  industriesHeroContentRef,
}: IndustryHeroSectionProps) {
  return (
    <section
      ref={industriesHeroRef}
      className="bg-black px-8 md:px-16 lg:px-24 pb-16 pt-12 md:pb-20 md:pt-16"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-start">
        <div ref={industriesHeroContentRef} className="flex flex-col items-start">
          <h1 className="type-display text-white">
            We <span className="text-transparent stroke-text-green">Speak</span>
            <br />
            Your Sector
          </h1>

          <p
            className="
                  text-white
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-semibold
                "
          >
            Domain expertise across 6 industries.
          </p>

          {/*Button*/}
          <button
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
                  bg-[#82E926]
                  backdrop-blur-md
                "
          >
            <span className="text-black type-button">Explore More</span>

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
              <ArrowUpRight size={44} className="text-black" strokeWidth={2.4} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
