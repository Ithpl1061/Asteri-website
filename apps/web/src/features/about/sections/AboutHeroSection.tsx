import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import { type CSSProperties } from "react";

const aboutHeroOutline: CSSProperties = {
  color: "#000000",
  WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
  paintOrder: "stroke fill",
  display: "inline-block",
  paddingBottom: "0.1em",
};
type AboutHeroSectionProps = {
  heroRef: RefObject<HTMLDivElement | null>;
  heroHeadlineRef: RefObject<HTMLHeadingElement | null>;
  heroBusinessRef: RefObject<HTMLSpanElement | null>;
  heroSubRef: RefObject<HTMLParagraphElement | null>;
  heroCtaRef: RefObject<HTMLButtonElement | null>;
  orbSvgRef: RefObject<SVGSVGElement | null>;
  orbPathRef: RefObject<SVGPathElement | null>;
  orbDotRef: RefObject<SVGCircleElement | null>;
};

export function AboutHeroSection({
  heroRef,
  heroHeadlineRef,
  heroBusinessRef,
  heroSubRef,
  heroCtaRef,
  orbSvgRef,
  orbPathRef,
  orbDotRef,
}: AboutHeroSectionProps) {
  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* MAIN HERO CONTAINER */}
      <div className="about-hero relative mx-auto min-h-[calc(100svh-6rem)] w-full max-w-[1400px] px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-start text-left">
        {/* TEXT */}
        <div className="relative z-20 max-w-full flex flex-col items-start text-left">
          {/* Figma (About hero): Inter Semi Bold 96px / 116px line height;
                  outline words have a transparent fill with a 2px #82E926 stroke.
                  Sizes scale with the viewport and hit the Figma values at 1440px. */}
          <h1
            ref={heroHeadlineRef}
            data-about-motion
            className="hero-headline font-sans font-semibold text-white max-w-full text-left"
            // Same font size as the Home hero headline (.type-display)
            style={{
              fontSize: "clamp(2.75rem, 6vw, 7rem)",
              lineHeight: 116 / 96,
              letterSpacing: 0,
            }}
          >
            <span className="block lg:whitespace-nowrap">
              Technology <span style={aboutHeroOutline}>That</span>
            </span>
            <span className="block lg:whitespace-nowrap">
              <span style={aboutHeroOutline}>Works</span> For Your{" "}
              <span ref={heroBusinessRef} style={aboutHeroOutline}>
                Business
              </span>
            </span>
          </h1>

          {/* Geist Semi Bold 37px, white, normal line height */}
          <p
            ref={heroSubRef}
            className="mt-[clamp(16px,2.4vw,34px)] text-white"
            style={{
              fontFamily: '"Geist Sans", "Inter", sans-serif',
              fontWeight: 600,
              fontSize: "clamp(1rem, 2.708vw, 37px)",
              lineHeight: "normal",
            }}
          >
            Pune-based, globally delivered, certified since 2020.
          </p>

          {/* Button */}
          <button
            ref={heroCtaRef}
            data-about-motion
            className="cta-pill mt-16 sm:mt-20 transition-transform duration-300 ease-out hover:scale-105"
          >
            <span className="text-black type-button">Get in touch</span>
            <div className="cta-pill-icon">
              <ArrowUpRight size={20} className="text-black" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* SVG PATH */}
        <svg
          ref={orbSvgRef}
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%">
              <stop offset="0%" stopColor="oklch(0.88 0.27 142)" />
              <stop offset="100%" stopColor="oklch(0.88 0.27 142 / 0.4)" />
            </linearGradient>
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            ref={orbPathRef}
            d="
                  M 1040 0
                  L 1040 240
                  Q 1040 280 1080 280
                  L 1240 280
                  Q 1280 280 1280 320
                  L 1280 480
                  Q 1280 520 1240 520
                  L 740 520
                  Q 700 520 700 560
                  L 700 640
                  Q 700 680 660 680
                  L -200 680
                "
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle ref={orbDotRef} cx="1040" cy="0" r="14" fill="#39FF14" />
        </svg>
      </div>
    </section>
  );
}
