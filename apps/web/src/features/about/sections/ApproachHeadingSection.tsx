import type { RefObject } from "react";

type ApproachHeadingSectionProps = {
  approachHeadingSectionRef: RefObject<HTMLElement | null>;
  approachHeadingRef: RefObject<HTMLHeadingElement | null>;
};

export function ApproachHeadingSection({
  approachHeadingSectionRef,
  approachHeadingRef,
}: ApproachHeadingSectionProps) {
  return (
    <section
      ref={approachHeadingSectionRef}
      className="relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <h2
        ref={approachHeadingRef}
        className="uppercase tracking-tight"
        style={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: '"Inter", sans-serif',
          fontSize: "clamp(2.25rem, 8.88vw, 128px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        OUR APPROACH
      </h2>
    </section>
  );
}
