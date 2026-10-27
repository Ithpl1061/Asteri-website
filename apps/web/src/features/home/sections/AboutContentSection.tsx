import type { RefObject } from "react";
import { GlowOrb } from "@/components/GlowOrb";
import { ArrowUpRight } from "lucide-react";

type AboutContentSectionProps = {
  about2Ref: RefObject<HTMLDivElement | null>;
  aboutConnectorLineRef: RefObject<HTMLSpanElement | null>;
  aboutConnectorDotRef: RefObject<HTMLSpanElement | null>;
  aboutHeadingRef: RefObject<HTMLHeadingElement | null>;
  transitionRef: RefObject<HTMLDivElement | null>;
  whiteRef: RefObject<HTMLDivElement | null>;
  quoteRef: RefObject<HTMLDivElement | null>;
  quote1Ref: RefObject<HTMLHeadingElement | null>;
  quote2Ref: RefObject<HTMLHeadingElement | null>;
};

export function AboutContentSection({
  about2Ref,
  aboutConnectorLineRef,
  aboutConnectorDotRef,
  aboutHeadingRef,
  transitionRef,
  whiteRef,
  quoteRef,
  quote1Ref,
  quote2Ref,
}: AboutContentSectionProps) {
  return (
    <section
      ref={about2Ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
    >
      {/* Connector continuing down from the intro's L-line to the heading orb.
              Its height is measured to the heading's centre (see effect). */}
      <span
        ref={aboutConnectorLineRef}
        aria-hidden="true"
        className="about-connector pointer-events-none absolute left-[9.25vw] top-0 -ml-[0.75px] block w-[1.5px] origin-top bg-[#15EC0D] lg:block"
      />
      <GlowOrb
        ref={aboutConnectorDotRef}
        className="about-connector absolute left-[9.25vw] z-20 block -translate-x-1/2 -translate-y-1/2 lg:block"
      />

      {/* ABOUT BLOCK */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center lg:absolute lg:left-[16vw] lg:top-[42%] lg:mx-0 lg:w-[73vw] lg:max-w-none lg:-translate-y-1/2 lg:text-left">
        <h2 ref={aboutHeadingRef} className="about-title-main type-heading text-white">
          ABOUT US
        </h2>
        <p className="about-text mt-6 type-lead text-white/85 md:mt-8">
          We are a consulting-first technology firm helping organizations modernize, unify, and
          scale their digital ecosystems; where business strategy meets real-world execution.
        </p>
        <button className="about-btn cta-pill mt-8">
          <span className="type-button text-black">Get In Touch</span>
          <div className="cta-pill-icon">
            <ArrowUpRight size={28} className="text-black" strokeWidth={2.3} />
          </div>
        </button>
      </div>

      {/* ORB EXPANSION */}
      <div
        ref={transitionRef}
        className="absolute z-[90] rounded-full bg-primary/75 pointer-events-none"
        style={{
          width: 24,
          height: 24,
          left: "9%",
          top: "clamp(160px, 24vh, 212px)",
          opacity: 0,
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 24px oklch(0.88 0.27 142 / 0.8), 0 0 64px oklch(0.88 0.27 142 / 0.65), 0 0 128px oklch(0.88 0.27 142 / 0.4)`,
        }}
      />

      {/* WHITE EXPANSION */}
      <div
        ref={whiteRef}
        className="absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-white/85 opacity-0"
      />

      {/* QUOTE */}
      <div
        ref={quoteRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 bg-white"
      >
        <div className="relative w-full max-w-6xl h-full">
          <h2
            ref={quote1Ref}
            className="absolute left-1/2 top-1/2 w-[88vw] -translate-x-1/2 -translate-y-1/2 text-center type-statement text-black whitespace-normal lg:w-auto lg:whitespace-nowrap"
          >
            Technology, in isolation, doesn&rsquo;t scale.
          </h2>
          <h2
            ref={quote2Ref}
            className="absolute left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center type-statement text-black text-balance"
          >
            Enduring systems emerge when business, data and infrastructure move in harmony.
          </h2>
        </div>
      </div>
    </section>
  );
}
