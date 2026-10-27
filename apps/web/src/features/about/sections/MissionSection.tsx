import type { RefObject } from "react";

type MissionSectionProps = {
  missionSectionRef: RefObject<HTMLElement | null>;
  missionContentRef: RefObject<HTMLDivElement | null>;
};

export function MissionSection({ missionSectionRef, missionContentRef }: MissionSectionProps) {
  return (
    <section
      ref={missionSectionRef}
      className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <div ref={missionContentRef} className="flex flex-col items-center max-w-4xl mx-auto">
        <img
          src="/about/mission-goal.webp"
          alt="Our Mission"
          className="mission-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain"
        />
        <h2 className="mission-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight">
          Our Mission
        </h2>
        <p className="mission-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight">
          To provide top-notch, on-demand IT services that make us our clients&apos; first choice.
        </p>
      </div>
    </section>
  );
}
