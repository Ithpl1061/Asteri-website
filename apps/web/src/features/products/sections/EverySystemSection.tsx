import type { RefObject } from "react";

type EverySystemSectionProps = {
  simpleQuoteSectionRef: RefObject<null>;
  simpleQuoteTextRef: RefObject<null>;
};

export function EverySystemSection({
  simpleQuoteSectionRef,
  simpleQuoteTextRef,
}: EverySystemSectionProps) {
  return (
    <section
      ref={simpleQuoteSectionRef}
      className="products-quote bg-black flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div className="flex items-center justify-center">
        <div
          ref={simpleQuoteTextRef}
          className="
                text-center
              "
        >
          <h2
            className="
                  text-white
                  font-bold
                  text-[calc(clamp(2.25rem,5vw,4.5rem)+20px)]
                  leading-[1.05]
                "
          >
            <div className="simple-quote-line-1">We only resell</div>
            <div className="simple-quote-line-2">what we can implement</div>
          </h2>
        </div>
      </div>
    </section>
  );
}
