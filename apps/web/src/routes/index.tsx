import { z } from "zod";
import { serviceSchema, industrySchema, partnerSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { ensureApi } from "@/lib/queries";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { PageShell } from "@/components/PageShell";

import type { Service, Industry, Partner } from "@/lib/types";
import { canPin } from "@/lib/motion";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { BigTitleSection } from "@/features/home/sections/BigTitleSection";
import { AboutContentSection } from "@/features/home/sections/AboutContentSection";
import { WhatWeDoTitleSection } from "@/features/home/sections/WhatWeDoTitleSection";
import { IndustriesSection } from "@/features/home/sections/IndustriesSection";
import { QuoteSection } from "@/features/home/sections/QuoteSection";
import { CaseStudiesSection } from "@/features/home/sections/CaseStudiesSection";
import { CertifiedSection } from "@/features/home/sections/CertifiedSection";
import { PartnersSection } from "@/features/home/sections/PartnersSection";
import { BreathingRoomSection } from "@/features/home/sections/BreathingRoomSection";
import { CollaborationsSection } from "@/features/home/sections/CollaborationsSection";
import { TestimonialsSection } from "@/features/home/sections/TestimonialsSection";
import { NextSection } from "@/features/home/sections/NextSection";
import { useHomeHeroEntrance } from "@/features/home/animations/useHomeHeroEntrance";
import { useHomeAboutConnector } from "@/features/home/animations/useHomeAboutConnector";
import { useHomeTravellingDot } from "@/features/home/animations/useHomeTravellingDot";
import { useHomeScrollStory } from "@/features/home/animations/useHomeScrollStory";

export const Route = createFileRoute("/")({
  // Data is loaded on the server, so it is in the first HTML
  loader: async ({ context }) => {
    const [services, industries, partners] = await Promise.all([
      ensureApi(context.queryClient, "/api/services", z.array(serviceSchema), []),
      ensureApi(context.queryClient, "/api/industries", z.array(industrySchema), []),
      ensureApi(context.queryClient, "/api/partners", z.array(partnerSchema), []),
    ]);
    return { services, industries, partners };
  },
  head: () => ({
    meta: [
      { title: "Home — Asteri" },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Home,
});

/**
 * ============================================================================
 * ARCHITECTURE NOTE — read this before touching any scrollTrigger below
 * ============================================================================
 * Every pinned section follows ONE pattern:
 *
 *   <section ref={xRef} className="relative h-screen overflow-hidden ...">
 *      ...content...
 *   </section>
 *
 *   scrollTrigger: { trigger: xRef.current, pin: canPin(), start: "top top",
 *                    end: "+=NNNN", scrub: 1 }
 *
 * pin:true + the default pinSpacing:true makes GSAP insert its own spacer
 * element sized to exactly (end - start). That spacer IS the scroll
 * distance — there is no second, competing height to keep in sync.
 *
 * Do NOT:
 *  - add an arbitrary h-[Nvh] class to a pinned section (that was the bug:
 *    two independent, hand-tuned numbers that drift apart -> blank gaps)
 *  - combine CSS `position: sticky` with GSAP `pin: canPin()` on the same
 *    element (they fight for control of positioning)
 *  - use `pinSpacing: false` unless you deliberately want the next
 *    section to slide over/under this one (it did NOT want that here —
 *    that flag is what caused the Testimonials/Next-section crash)
 *
 * Mobile: heavy pinned scrubbing is disabled below 768px via
 * ScrollTrigger.matchMedia() and replaced with lightweight fade/slide
 * reveals (toggleActions, no pin, no scrub-locking) so phones get a
 * normal, fast-scrolling page instead of a desktop scrollytelling replica.
 * ============================================================================
 */

// "What we do" rows on the home page (kept here so the Services page / API data stay untouched)

function Home() {
  // ========================================= REFS =================================================
  const heroRef = useRef<HTMLDivElement>(null);
  const heroOrbTrackRef = useRef<HTMLDivElement>(null);
  const heroOrbPathRef = useRef<SVGPathElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const heroTextWrapRef = useRef<HTMLDivElement>(null);
  const heroLine1Ref = useRef<HTMLHeadingElement>(null);
  const heroLine2Ref = useRef<HTMLParagraphElement>(null);
  const heroLine3Ref = useRef<HTMLParagraphElement>(null);
  const heroDotRef = useRef<HTMLSpanElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const aboutIntroSectionRef = useRef<HTMLElement>(null);
  const aboutIntroLineLeftRef = useRef<HTMLSpanElement>(null);
  const aboutIntroDotRef = useRef<HTMLSpanElement>(null);
  const aboutConnectorLineRef = useRef<HTMLSpanElement>(null);
  const aboutConnectorDotRef = useRef<HTMLSpanElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutIntroTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutHeadingPathRef = useRef<SVGPathElement>(null);
  const aboutHeadingDotRef = useRef<HTMLDivElement>(null);

  const about2Ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);
  const aboutVerticalPathRef = useRef<SVGPathElement>(null);
  const aboutVerticalDotRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const quote1Ref = useRef<HTMLHeadingElement>(null);
  const quote2Ref = useRef<HTMLHeadingElement>(null);

  const whatRef = useRef<HTMLDivElement>(null);

  const industriesSectionRef = useRef<HTMLDivElement>(null);
  const industriesTitleRef = useRef<HTMLDivElement>(null);
  const industriesGridRef = useRef<HTMLDivElement>(null);

  const quoteSectionRef = useRef<HTMLDivElement>(null);

  const caseRef = useRef<HTMLDivElement>(null);
  const caseTitleRef = useRef<HTMLDivElement>(null);

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const nextTextRef = useRef<HTMLParagraphElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const certifiedSectionRef = useRef<HTMLElement>(null);
  const certifiedWeRef = useRef<HTMLSpanElement>(null);
  const certifiedReRef = useRef<HTMLSpanElement>(null);
  const certifiedCertifiRef = useRef<HTMLDivElement>(null);
  const certifiedEdRef = useRef<HTMLDivElement>(null);
  const certifiedCopyRef = useRef<HTMLParagraphElement>(null);

  const partnerSectionRef = useRef<HTMLElement>(null);
  const partnerCardRef = useRef<HTMLDivElement>(null);
  const collaborationsSectionRef = useRef<HTMLElement>(null);

  const heroOutlineStroke = "clamp(1px, 0.55vw, 3px)";

  const loaderData = Route.useLoaderData();
  const [services] = useState<Service[]>(loaderData.services);
  const [industries] = useState<Industry[]>(loaderData.industries);
  const [partners] = useState<Partner[]>(loaderData.partners);
  // =================================== END REFS ==========================================

  //======================================= HERO ENTRANCE (runs once on load, all breakpoints) ===========
  // The headline and the green line render statically (the line is fixed and
  // never animates); only the orb ignites beside the last word.
  useHomeHeroEntrance({ heroDotRef });

  //======================================= ABOUT CONNECTOR GEOMETRY ====================================
  // The About section's connector runs from the section top to the centre of
  // the "ABOUT US" heading, where its orb sits. The heading's position depends
  // on font size and wrapping, so measure it rather than hard-coding.
  useHomeAboutConnector({
    about2Ref,
    aboutHeadingRef,
    aboutConnectorLineRef,
    aboutConnectorDotRef,
  });

  //======================================= TRAVELLING DOT + HOLDS (desktop) ===========================
  // Kept in its own effect, created once: the big animation effect below
  // re-runs when services/industries data arrives, and rebuilding these pins
  // and the dot then made the hero line/dot visibly flash after a refresh.
  // Declared before that effect so these pins are created (and refreshed) first.
  useHomeTravellingDot({
    heroDotRef,
    aboutIntroSectionRef,
    aboutIntroDotRef,
    aboutIntroLineLeftRef,
    about2Ref,
    aboutConnectorDotRef,
    heroRef,
  });

  //======================================= ALL GSAP ANIMATIONS =========================================
  useHomeScrollStory({
    quote1Ref,
    quote2Ref,
    nextTitleRef,
    nextTextRef,
    nextBtnRef,
    certifiedWeRef,
    certifiedReRef,
    certifiedCertifiRef,
    certifiedEdRef,
    certifiedCopyRef,
    partnerCardRef,
    heroRef,
    orbRef,
    heroOrbPathRef,
    heroOrbTrackRef,
    aboutIntroSectionRef,
    about2Ref,
    quoteRef,
    whatRef,
    industriesSectionRef,
    industriesGridRef,
    quoteSectionRef,
    caseTitleRef,
    caseRef,
    certifiedSectionRef,
    partnerSectionRef,
    collaborationsSectionRef,
    testimonialsRef,
    nextRef,
    services,
    industries,
  });

  //======================================= MAIN RENDER CODE =========================================
  return (
    <>
      <PageShell>
        {/* ============================== HERO =================================== */}
        <HeroSection
          heroRef={heroRef}
          heroTextWrapRef={heroTextWrapRef}
          heroLine1Ref={heroLine1Ref}
          heroLine2Ref={heroLine2Ref}
          heroLine3Ref={heroLine3Ref}
          heroLineRef={heroLineRef}
          heroDotRef={heroDotRef}
        />

        {/* ============================== ABOUT INTRO =================================== */}
        {/* Big title with connectors (Figma): on the right a line runs to the
            edge with an orb on it; on the left an L-line runs out to the
            gutter and down into the About content below. */}
        <BigTitleSection
          aboutIntroSectionRef={aboutIntroSectionRef}
          aboutIntroLineLeftRef={aboutIntroLineLeftRef}
          aboutIntroDotRef={aboutIntroDotRef}
        />

        {/* ============================== ABOUT CONTENT =================================== */}
        <AboutContentSection
          about2Ref={about2Ref}
          aboutConnectorLineRef={aboutConnectorLineRef}
          aboutConnectorDotRef={aboutConnectorDotRef}
          aboutHeadingRef={aboutHeadingRef}
          transitionRef={transitionRef}
          whiteRef={whiteRef}
          quoteRef={quoteRef}
          quote1Ref={quote1Ref}
          quote2Ref={quote2Ref}
        />

        {/* ========================== WHAT WE DO (title + content, single pin) ========================== */}
        <WhatWeDoTitleSection whatRef={whatRef} />

        {/* ============================= INDUSTRIES — PINNED VIEWPORT ============================*/}
        <IndustriesSection
          industriesSectionRef={industriesSectionRef}
          industriesTitleRef={industriesTitleRef}
          industriesGridRef={industriesGridRef}
          industries={industries}
        />

        {/*=================================== QUOTE =================================*/}
        <QuoteSection quoteSectionRef={quoteSectionRef} />

        {/*============================= CASE STUDIES ========================*/}
        <CaseStudiesSection caseRef={caseRef} caseTitleRef={caseTitleRef} />

        {/*============================= WE'RE CERTIFIED ======================*/}
        <CertifiedSection
          certifiedSectionRef={certifiedSectionRef}
          certifiedWeRef={certifiedWeRef}
          certifiedReRef={certifiedReRef}
          certifiedCertifiRef={certifiedCertifiRef}
          certifiedEdRef={certifiedEdRef}
          certifiedCopyRef={certifiedCopyRef}
        />

        {/*============================= PLATFORMS & PARTNERS ================*/}
        <PartnersSection partnerSectionRef={partnerSectionRef} partnerCardRef={partnerCardRef} />

        {/* Breathing room between the partner cards and the collaborations section */}
        <BreathingRoomSection />

        {/*============================= VALUABLE COLLABORATIONS ==============*/}
        <CollaborationsSection collaborationsSectionRef={collaborationsSectionRef} />

        {/*============================= TESTIMONIALS =========================*/}
        <TestimonialsSection testimonialsRef={testimonialsRef} />

        {/*======================= "Let's design the systems" =================*/}
        <NextSection
          nextRef={nextRef}
          nextTitleRef={nextTitleRef}
          nextTextRef={nextTextRef}
          nextBtnRef={nextBtnRef}
        />
      </PageShell>
    </>
  );
}
