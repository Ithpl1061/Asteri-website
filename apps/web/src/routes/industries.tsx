// ========================================= IMPORTS =================================================

import { z } from "zod";
import { industryDetailSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { ensureApi } from "@/lib/queries";
import { useRef, useState } from "react";

import { PageShell } from "@/components/PageShell";
import "./industries-section.css";
import type { IndustryDetail } from "@/lib/types";

import { IndustryHeroSection } from "@/features/industries/sections/IndustryHeroSection";
import { EveryIndustrySection } from "@/features/industries/sections/EveryIndustrySection";
import { MessageBannerSection } from "@/features/industries/sections/MessageBannerSection";
import { ScalePressureSection } from "@/features/industries/sections/ScalePressureSection";
import { IndustriesGridSection } from "@/features/industries/sections/IndustriesGridSection";
import { FintechCardsSection } from "@/features/industries/sections/FintechCardsSection";
import { OurImpactSection } from "@/features/industries/sections/OurImpactSection";
import { NextSolveSection } from "@/features/industries/sections/NextSolveSection";
import { useIndustriesComplexity } from "@/features/industries/animations/useIndustriesComplexity";
import { useIndustriesMessage } from "@/features/industries/animations/useIndustriesMessage";
import { useIndustriesTicker } from "@/features/industries/animations/useIndustriesTicker";
import { useIndustriesTitle } from "@/features/industries/animations/useIndustriesTitle";
import { useIndustriesFintech } from "@/features/industries/animations/useIndustriesFintech";
import { useIndustriesCaseStudy } from "@/features/industries/animations/useIndustriesCaseStudy";
import { useIndustriesNext } from "@/features/industries/animations/useIndustriesNext";

// ========================================= ROUTE ==================================================

export const Route = createFileRoute("/industries")({
  // Industry details are loaded on the server, so they are in the first HTML
  loader: async ({ context }) => ({
    details: await ensureApi(
      context.queryClient,
      "/api/industry-details",
      z.array(industryDetailSchema),
      [],
    ),
  }),
  head: () => ({
    meta: [
      {
        title: "Industries — Asteri",
      },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: IndustriesPage,
});
// ========================================= START HERE ==============================================
// The Financial Services section is hidden in the current design. Set to true to show it.

function IndustriesPage() {
  const [details] = useState<IndustryDetail[]>(Route.useLoaderData().details);

  // ========================================= REFS ====================================================

  const industriesHeroRef = useRef(null);
  const industriesHeroContentRef = useRef(null);

  const complexitySectionRef = useRef(null);
  const complexityTextRef = useRef(null);

  const tickerSectionRef = useRef(null);
  const tickerLine1Ref = useRef(null);

  const industriesTitleSectionRef = useRef(null);
  const industriesTitleRef = useRef(null);

  const caseStudySectionRef = useRef(null);
  const caseStudyLine1Ref = useRef(null);
  const caseStudyLine2Ref = useRef(null);
  const caseStudyBtnRef = useRef(null);

  const nextRef = useRef<HTMLElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const nextTextRef = useRef<HTMLParagraphElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const fintechCardsSectionRef = useRef(null);
  const fintechTitleRef = useRef(null);
  const fintechCarouselRef = useRef(null);
  const fintechArrowRef = useRef(null);
  const fintechArrow2Ref = useRef(null);
  const fintechCard1Ref = useRef(null);
  const fintechCard2Ref = useRef(null);
  const fintechCard3Ref = useRef(null);
  const fintechCard4Ref = useRef(null);

  const messageRef = useRef<HTMLDivElement>(null);
  const messageTextRef = useRef<HTMLDivElement>(null);

  useIndustriesComplexity({ complexitySectionRef, complexityTextRef });

  useIndustriesMessage({ messageRef, messageTextRef });

  useIndustriesTicker({ tickerLine1Ref, tickerSectionRef });

  useIndustriesTitle({ industriesTitleSectionRef, industriesTitleRef });

  useIndustriesFintech({
    fintechCardsSectionRef,
    fintechTitleRef,
    fintechCarouselRef,
    fintechCard1Ref,
    fintechCard2Ref,
    fintechCard3Ref,
    fintechCard4Ref,
  });

  useIndustriesCaseStudy({
    caseStudySectionRef,
    caseStudyLine1Ref,
    caseStudyLine2Ref,
    caseStudyBtnRef,
  });

  useIndustriesNext({ nextRef, nextTitleRef, nextTextRef, nextBtnRef });

  // ========================================= MAIN CODE -> ===============================================
  // ======================================================================================================
  return (
    <PageShell disableAnimations>
      {/* =================== SECTION : 1 Hero ======================*/}
      <IndustryHeroSection
        industriesHeroRef={industriesHeroRef}
        industriesHeroContentRef={industriesHeroContentRef}
      />
      {/* =================== SECTION : 2 Every Industry ======================*/}

      <EveryIndustrySection
        complexitySectionRef={complexitySectionRef}
        complexityTextRef={complexityTextRef}
      />
      {/* ================= Message Section ================= */}
      <MessageBannerSection messageRef={messageRef} messageTextRef={messageTextRef} />
      {/* =================== SECTION : 3 scale. pressure. speed. Regulation. ======================*/}
      <ScalePressureSection tickerSectionRef={tickerSectionRef} tickerLine1Ref={tickerLine1Ref} />

      {/* =================== SECTION : 4 INDUSTRIES ======================*/}
      <IndustriesGridSection
        industriesTitleSectionRef={industriesTitleSectionRef}
        industriesTitleRef={industriesTitleRef}
      />
      <FintechCardsSection
        fintechCardsSectionRef={fintechCardsSectionRef}
        fintechTitleRef={fintechTitleRef}
        details={details}
        fintechCarouselRef={fintechCarouselRef}
        fintechCard1Ref={fintechCard1Ref}
        fintechArrowRef={fintechArrowRef}
        fintechCard2Ref={fintechCard2Ref}
        fintechArrow2Ref={fintechArrow2Ref}
        fintechCard3Ref={fintechCard3Ref}
        fintechCard4Ref={fintechCard4Ref}
      />
      {/* =================== SECTION : 6 Our impact ======================*/}
      <OurImpactSection
        caseStudySectionRef={caseStudySectionRef}
        caseStudyLine1Ref={caseStudyLine1Ref}
        caseStudyLine2Ref={caseStudyLine2Ref}
        caseStudyBtnRef={caseStudyBtnRef}
      />
      {/*=======================SECTION : 7 Let’s solve what’s next =================*/}
      <NextSolveSection
        nextRef={nextRef}
        nextTitleRef={nextTitleRef}
        nextTextRef={nextTextRef}
        nextBtnRef={nextBtnRef}
      />
    </PageShell>
  );
}
// ========================================= END ====================================================
