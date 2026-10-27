import type { RefObject } from "react";

type ScalePressureSectionProps = {
  tickerSectionRef: RefObject<null>;
  tickerLine1Ref: RefObject<null>;
};

export function ScalePressureSection({
  tickerSectionRef,
  tickerLine1Ref,
}: ScalePressureSectionProps) {
  return (
    <section
      ref={tickerSectionRef}
      className="industries-ticker bg-black overflow-hidden flex items-center justify-center px-6 min-h-[75vh] w-full relative"
    >
      <div className="flex items-center justify-center w-full">
        <div
          className="
                    flex
                    flex-col
                    w-full
                    justify-center
                    items-center
                    text-center
                    gap-6
                  "
        >
          {/* Line 1 */}
          <div
            ref={tickerLine1Ref}
            className="flex flex-nowrap justify-center items-center gap-3 md:gap-6 whitespace-nowrap"
          >
            <span className="type-display text-transparent stroke-text-green">Scale.</span>
            <span className="type-display text-white">Pressure.</span>
            <span className="type-display text-transparent stroke-text-green">Speed.</span>
            <span className="type-display text-white">Regulation.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
