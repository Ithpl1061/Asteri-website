import type { RefObject } from "react";

type VisionSectionProps = {
  visionSectionRef: RefObject<HTMLElement | null>;
  visionContentRef: RefObject<HTMLDivElement | null>;
};

export function VisionSection({ visionSectionRef, visionContentRef }: VisionSectionProps) {
  return (
    <section
      ref={visionSectionRef}
      className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <div ref={visionContentRef} className="flex flex-col items-center max-w-4xl mx-auto">
        <img
          src="/about/vision.webp"
          alt="Our Vision"
          className="vision-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain"
        />
        <h2 className="vision-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight">
          Our Vision
        </h2>
        <p className="vision-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight">
          A future where every business has access to quality tech solutions — on demand, within
          budget.
        </p>
      </div>
    </section>
  );
}
