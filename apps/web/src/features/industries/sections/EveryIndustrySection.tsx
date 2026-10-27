import type { RefObject } from "react";

type EveryIndustrySectionProps = {
  complexitySectionRef: RefObject<null>;
  complexityTextRef: RefObject<null>;
};

export function EveryIndustrySection({
  complexitySectionRef,
  complexityTextRef,
}: EveryIndustrySectionProps) {
  return (
    <section
      ref={complexitySectionRef}
      className="industries-complexity bg-black flex items-center justify-center px-6 min-h-screen h-screen overflow-hidden w-full relative text-center"
    >
      <div className="flex items-center justify-center">
        <div
          ref={complexityTextRef}
          className="
                    text-center
                  "
        >
          <h2
            className="
                      text-white
                      font-bold
                      leading-[1.05]
                      text-center
                    "
            style={{
              fontSize: "clamp(calc(2.25rem + 10px), calc(5vw + 10px), calc(4.5rem + 10px))",
            }}
          >
            Generic solutions
            <br />
            don't cut it
          </h2>
        </div>
      </div>
    </section>
  );
}
