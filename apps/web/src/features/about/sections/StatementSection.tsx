import type { RefObject } from "react";

type StatementSectionProps = {
  outcomesHeadingSectionRef: RefObject<HTMLElement | null>;
  outcomesHeadingRef: RefObject<HTMLHeadingElement | null>;
};

export function StatementSection({
  outcomesHeadingSectionRef,
  outcomesHeadingRef,
}: StatementSectionProps) {
  return (
    <section
      ref={outcomesHeadingSectionRef}
      className="solutions-outcomes-heading h-screen flex items-center justify-center relative w-full overflow-hidden text-center bg-black px-6 sm:px-10"
    >
      <h2
        ref={outcomesHeadingRef}
        style={{ perspective: "1000px" }}
        className="text-[clamp(1.2rem,2.8vw,2.35rem)] font-bold leading-[1.35] text-center text-white tracking-tight"
      >
        <span className="statement-text-item block">
          We build on-demand teams tailored to your project —
        </span>
        <span className="statement-text-item block">
          reducing overhead, expanding your service portfolio,
        </span>
        <span className="statement-text-item block">and delivering on time, every time.</span>
      </h2>
    </section>
  );
}
