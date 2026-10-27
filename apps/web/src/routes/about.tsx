import { z } from "zod";
import { teamMemberSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { ensureApi } from "@/lib/queries";
import { useRef, useState } from "react";

import { PageShell } from "@/components/PageShell";
import "./about-page.css";
// Geist Semi Bold for the hero sub-line (per Figma)
import "@fontsource/geist-sans/latin-600.css";
import type { TeamMember } from "@/lib/types";

import { AboutHeroSection } from "@/features/about/sections/AboutHeroSection";
import { StatementSection } from "@/features/about/sections/StatementSection";
import { ServeClientsSection } from "@/features/about/sections/ServeClientsSection";
import { MissionSection } from "@/features/about/sections/MissionSection";
import { VisionSection } from "@/features/about/sections/VisionSection";
import { ApproachHeadingSection } from "@/features/about/sections/ApproachHeadingSection";
import { ApproachCardsSection } from "@/features/about/sections/ApproachCardsSection";
import { VisionariesHeadingSection } from "@/features/about/sections/VisionariesHeadingSection";
import { VisionariesGridSection } from "@/features/about/sections/VisionariesGridSection";
import { CultureValuesSection } from "@/features/about/sections/CultureValuesSection";
import { TechnologyMattersSection } from "@/features/about/sections/TechnologyMattersSection";
import { NextSection } from "@/features/about/sections/NextSection";
import { useAboutHeroEntrance } from "@/features/about/animations/useAboutHeroEntrance";
import { useAboutScrollStory } from "@/features/about/animations/useAboutScrollStory";

export const Route = createFileRoute("/about")({
  // Data is loaded on the server, so it is in the first HTML
  loader: async ({ context }) => ({
    team: await ensureApi(context.queryClient, "/api/team", z.array(teamMemberSchema), []),
  }),
  head: () => ({
    meta: [
      { title: "About — Asteri" },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: About,
});

// Outline words in the hero headline — same style as the Home hero's green text

function About() {
  // Team arrives with the page (route loader), so it is ready on the first render
  const [visionaries] = useState<TeamMember[]>(Route.useLoaderData().team);
  const teamLoaded = true;

  // ========================================= REFS ====================================================
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const orbPathRef = useRef<SVGPathElement>(null);
  const orbDotRef = useRef<SVGCircleElement>(null);
  const orbSvgRef = useRef<SVGSVGElement>(null);
  const heroBusinessRef = useRef<HTMLSpanElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const outcomesHeadingSectionRef = useRef<HTMLElement>(null);
  const outcomesHeadingRef = useRef<HTMLHeadingElement>(null);
  const serveClientsSectionRef = useRef<HTMLElement>(null);
  const serveClientsHeadingRef = useRef<HTMLHeadingElement>(null);
  const serveClientsContentRef = useRef<HTMLDivElement>(null);
  const missionSectionRef = useRef<HTMLElement>(null);
  const missionContentRef = useRef<HTMLDivElement>(null);
  const visionSectionRef = useRef<HTMLElement>(null);
  const visionContentRef = useRef<HTMLDivElement>(null);
  const approachHeadingSectionRef = useRef<HTMLElement>(null);
  const approachHeadingRef = useRef<HTMLHeadingElement>(null);
  const approachCardsSectionRef = useRef<HTMLElement>(null);
  const visionariesHeadingSectionRef = useRef<HTMLElement>(null);
  const visionariesHeadingRef = useRef<HTMLHeadingElement>(null);
  const approachCardsContentRef = useRef<HTMLDivElement>(null);
  const visionariesSectionRef = useRef<HTMLElement>(null);
  const visionariesCircleRef = useRef<HTMLDivElement>(null);
  const visionariesImageRefs = useRef<HTMLImageElement[]>([]);
  const visionariesContentRefs = useRef<HTMLDivElement[]>([]);
  const cultureSectionRef = useRef<HTMLElement>(null);
  const techSectionRef = useRef<HTMLElement>(null);
  const techHeadingRef = useRef<HTMLHeadingElement>(null);
  const techLine1Ref = useRef<HTMLSpanElement>(null);
  const techLine2Ref = useRef<HTMLSpanElement>(null);
  const nextSectionRef = useRef<HTMLElement>(null);

  // ===================== HERO GREEN LINE GEOMETRY (Figma "Orb- HH") =====================
  // Same route as the Figma About hero, placed around the real text so it never
  // crosses it: down between the headline lines (over the middle of "Business"),
  // right past the end of "Business", down below the button, left, up into the
  // gap between the sub-line and the button, then out to the left edge.
  // Offsets are the Figma values (designed at a 96px headline), scaled with the
  // headline size; 10px corner radius as in Figma. Recomputed on resize, and
  // the dot's motionPath re-reads it on refresh (invalidateOnRefresh).
  useAboutHeroEntrance({
    orbSvgRef,
    orbPathRef,
    orbDotRef,
    heroHeadlineRef,
    heroBusinessRef,
    heroSubRef,
    heroCtaRef,
  });

  useAboutScrollStory({
    rootRef,
    teamLoaded,
    heroHeadlineRef,
    heroCtaRef,
    orbDotRef,
    orbPathRef,
    heroRef,
    outcomesHeadingSectionRef,
    serveClientsSectionRef,
    serveClientsHeadingRef,
    serveClientsContentRef,
    missionSectionRef,
    visionSectionRef,
    approachHeadingSectionRef,
    approachHeadingRef,
    approachCardsSectionRef,
    visionariesHeadingSectionRef,
    visionariesHeadingRef,
    visionaries,
    visionariesSectionRef,
    visionariesCircleRef,
    visionariesImageRefs,
    visionariesContentRefs,
    cultureSectionRef,
    techSectionRef,
    techLine1Ref,
    techLine2Ref,
    nextSectionRef,
  });

  return (
    <PageShell>
      <div ref={rootRef} className="about-page overflow-x-clip bg-black">
        {/* ================= ORIGINAL HERO SECTION ================= */}
        <AboutHeroSection
          heroRef={heroRef}
          heroHeadlineRef={heroHeadlineRef}
          heroBusinessRef={heroBusinessRef}
          heroSubRef={heroSubRef}
          heroCtaRef={heroCtaRef}
          orbSvgRef={orbSvgRef}
          orbPathRef={orbPathRef}
          orbDotRef={orbDotRef}
        />
        {/* ================= HERO ENDS ================= */}

        {/* ============= STATEMENT SECTION ============= */}
        <StatementSection
          outcomesHeadingSectionRef={outcomesHeadingSectionRef}
          outcomesHeadingRef={outcomesHeadingRef}
        />

        {/* ============= WE SERVE CLIENTS SECTION ============= */}
        <ServeClientsSection
          serveClientsSectionRef={serveClientsSectionRef}
          serveClientsHeadingRef={serveClientsHeadingRef}
          serveClientsContentRef={serveClientsContentRef}
        />

        {/* ============= OUR MISSION SECTION ============= */}
        <MissionSection
          missionSectionRef={missionSectionRef}
          missionContentRef={missionContentRef}
        />

        {/* ============= OUR VISION SECTION ============= */}
        <VisionSection visionSectionRef={visionSectionRef} visionContentRef={visionContentRef} />

        {/* ============= OUR APPROACH HEADING SECTION ============= */}
        <ApproachHeadingSection
          approachHeadingSectionRef={approachHeadingSectionRef}
          approachHeadingRef={approachHeadingRef}
        />

        {/* ============= OUR APPROACH CARDS SECTION ============= */}
        <ApproachCardsSection approachCardsSectionRef={approachCardsSectionRef} />

        {/* ============= THE VISIONARIES HEADING SECTION ============= */}
        <VisionariesHeadingSection
          visionariesHeadingSectionRef={visionariesHeadingSectionRef}
          visionariesHeadingRef={visionariesHeadingRef}
        />

        {/* ============= VISIONARIES SECTION ============= */}
        <VisionariesGridSection
          visionaries={visionaries}
          visionariesSectionRef={visionariesSectionRef}
          visionariesCircleRef={visionariesCircleRef}
          visionariesImageRefs={visionariesImageRefs}
          visionariesContentRefs={visionariesContentRefs}
        />

        {/* ============= CULTURE & VALUES SECTION ============= */}
        <CultureValuesSection cultureSectionRef={cultureSectionRef} />

        {/* ============= TECHNOLOGY MATTERS SECTION ============= */}
        <TechnologyMattersSection
          techSectionRef={techSectionRef}
          techHeadingRef={techHeadingRef}
          techLine1Ref={techLine1Ref}
          techLine2Ref={techLine2Ref}
        />

        {/* ============= DESIGNED FOR WHAT'S NEXT SECTION ============= */}
        <NextSection nextSectionRef={nextSectionRef} />
      </div>
    </PageShell>
  );
}
