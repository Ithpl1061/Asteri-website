import type { RefObject } from "react";

type IndustriesGridSectionProps = {
  industriesTitleSectionRef: RefObject<null>;
  industriesTitleRef: RefObject<null>;
};

export function IndustriesGridSection({
  industriesTitleSectionRef,
  industriesTitleRef,
}: IndustriesGridSectionProps) {
  return (
    <section
      ref={industriesTitleSectionRef}
      className="industries-title-sec bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative text-center"
    >
      <div className="flex items-center justify-center">
        <div
          ref={industriesTitleRef}
          className="
                    text-center
                  "
        >
          <h2
            className="uppercase tracking-tight whitespace-nowrap text-white font-semibold text-center"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(2.25rem, 8.88vw, 128px)",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            INDUSTRIES
          </h2>
        </div>
      </div>
    </section>
  );
}
