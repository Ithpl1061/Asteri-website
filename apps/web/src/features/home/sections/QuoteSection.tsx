import type { RefObject } from "react";

type QuoteSectionProps = {
  quoteSectionRef: RefObject<HTMLDivElement | null>;
};

export function QuoteSection({ quoteSectionRef }: QuoteSectionProps) {
  return (
    <section
      ref={quoteSectionRef}
      className="quote-section relative flex min-h-[65svh] items-center justify-center overflow-hidden px-6 py-20 sm:min-h-[65dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p
          className="quote-text tracking-tight text-center"
          style={{
            color: "#FFF",
            fontFamily: '"Inter", sans-serif',
            fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          Technology only matters
          <br />
          when it delivers clarity
        </p>
      </div>
    </section>
  );
}
