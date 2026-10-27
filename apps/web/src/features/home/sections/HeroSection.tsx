import type { RefObject } from "react";
import { GlowOrb } from "@/components/GlowOrb";

type HeroSectionProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  heroTextWrapRef: RefObject<HTMLDivElement | null>;
  heroLine1Ref: RefObject<HTMLHeadingElement | null>;
  heroLine2Ref: RefObject<HTMLParagraphElement | null>;
  heroLine3Ref: RefObject<HTMLParagraphElement | null>;
  heroLineRef: RefObject<HTMLSpanElement | null>;
  heroDotRef: RefObject<HTMLSpanElement | null>;
};

export function HeroSection({
  heroRef,
  heroTextWrapRef,
  heroLine1Ref,
  heroLine2Ref,
  heroLine3Ref,
  heroLineRef,
  heroDotRef,
}: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className="relative -mt-24 min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen"
    >
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-6 sm:min-h-[100dvh] lg:min-h-screen">
        <div
          ref={heroTextWrapRef}
          className="flex flex-col items-center text-center font-display font-bold leading-[1.1] tracking-tight will-change-transform"
        >
          <h1 ref={heroLine1Ref} className="type-display text-white pb-1">
            Certified{" "}
            <span
              style={{
                color: "#000000",
                WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
                paintOrder: "stroke fill",
                display: "inline-block",
                paddingBottom: "0.1em",
              }}
            >
              IT
            </span>{" "}
            Solutions &amp;
          </h1>

          <p
            ref={heroLine2Ref}
            className="type-display pb-1"
            style={{
              color: "#000000",
              WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
              paintOrder: "stroke fill",
              display: "inline-block",
              paddingBottom: "0.1em",
            }}
          >
            Salesforce Partner
          </p>

          <div className="text-center">
            <div className="relative inline-block">
              <p ref={heroLine3Ref} className="type-display text-white">
                in Pune
              </p>

              {/* Connector: orb beside the last word, line out to the right edge */}
              <span
                ref={heroLineRef}
                aria-hidden="true"
                className="pointer-events-none absolute top-[55%] -mt-[0.5px] left-[calc(100%+clamp(18px,2.8vw,40px))] h-px w-[100vw] origin-left bg-[#15EC0D]"
              />
              <GlowOrb
                ref={heroDotRef}
                className="absolute top-[55%] left-[calc(100%+clamp(18px,2.8vw,40px))] z-10 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
