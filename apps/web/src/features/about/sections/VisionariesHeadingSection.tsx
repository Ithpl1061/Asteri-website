import type { RefObject } from "react";

type VisionariesHeadingSectionProps = {
  visionariesHeadingSectionRef: RefObject<HTMLElement | null>;
  visionariesHeadingRef: RefObject<HTMLHeadingElement | null>;
};

export function VisionariesHeadingSection({
  visionariesHeadingSectionRef,
  visionariesHeadingRef,
}: VisionariesHeadingSectionProps) {
  return (
    <section
      ref={visionariesHeadingSectionRef}
      className="relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <h2
        ref={visionariesHeadingRef}
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
        THE VISIONARIES
      </h2>
    </section>
  );
}
