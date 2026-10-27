import type { RefObject } from "react";
import { GlowOrb } from "@/components/GlowOrb";

type BigTitleSectionProps = {
  aboutIntroSectionRef: RefObject<HTMLElement | null>;
  aboutIntroLineLeftRef: RefObject<HTMLSpanElement | null>;
  aboutIntroDotRef: RefObject<HTMLSpanElement | null>;
};

export function BigTitleSection({
  aboutIntroSectionRef,
  aboutIntroLineLeftRef,
  aboutIntroDotRef,
}: BigTitleSectionProps) {
  return (
    <section
      ref={aboutIntroSectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black lg:h-screen lg:min-h-0"
    >
      <div className="relative flex w-full items-center">
        <span aria-hidden="true" className="block w-[9.25vw] shrink-0 lg:block" />
        <span
          ref={aboutIntroLineLeftRef}
          aria-hidden="true"
          className="about-intro-line-left block h-[1.5px] flex-1 origin-right bg-[#15EC0D] lg:block"
        />
        <h2
          className="about-intro-title relative z-10 mx-[18px] shrink-0 bg-black lg:mx-[46px]"
          style={{
            color: "#FFF",
            fontFamily: '"Inter", sans-serif',
            fontSize: "clamp(2.25rem, 8.88vw, 128px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          ABOUT US
        </h2>
        <span
          aria-hidden="true"
          className="about-intro-line-right block h-[1.5px] flex-1 origin-left bg-[#15EC0D] lg:block"
        />
      </div>

      {/* The travelling dot while the intro is held (desktop; positioned by GSAP). */}
      <GlowOrb
        ref={aboutIntroDotRef}
        className="absolute left-0 top-0 z-0 block lg:block"
        style={{ visibility: "hidden" }}
      />

      {/* Vertical leg of the L: from the title's centre line down to the
              section bottom, continued by the About section's connector. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[9.25vw] top-1/2 -ml-[0.75px] block w-[1.5px] bg-[#15EC0D] lg:block"
      />
    </section>
  );
}
