// ========================================= IMPORTS =================================================

import { z } from "zod";
import { industryDetailSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { ensureApi } from "@/lib/queries";
import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import "./industries-section.css";
import type { IndustryDetail } from "@/lib/types";
import { canPin } from "@/lib/motion";
import { IndustryHeroSection } from "@/features/industries/sections/IndustryHeroSection";
import { EveryIndustrySection } from "@/features/industries/sections/EveryIndustrySection";
import { MessageBannerSection } from "@/features/industries/sections/MessageBannerSection";
import { ScalePressureSection } from "@/features/industries/sections/ScalePressureSection";
import { IndustriesGridSection } from "@/features/industries/sections/IndustriesGridSection";
import { FintechCardsSection } from "@/features/industries/sections/FintechCardsSection";
import { OurImpactSection } from "@/features/industries/sections/OurImpactSection";
import { NextSolveSection } from "@/features/industries/sections/NextSolveSection";

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
const SHOW_FINTECH_SECTION = false;

function IndustriesPage() {
  const [details] = useState<IndustryDetail[]>(Route.useLoaderData().details);

  // ========================================= REFS ====================================================

  const industriesHeroRef = useRef(null);
  const industriesHeroContentRef = useRef(null);

  const complexitySectionRef = useRef(null);
  const complexityTextRef = useRef(null);

  const tickerSectionRef = useRef(null);
  const tickerLine1Ref = useRef(null);
  const tickerLine2Ref = useRef(null);

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
  const fintechSectionRef = useRef(null);
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

  useEffect(() => {
    if (!complexitySectionRef.current || !complexityTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(complexityTextRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: complexitySectionRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(complexityTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, complexitySectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!messageRef.current || !messageTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(messageTextRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: messageRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(messageTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, messageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tickerLine1Ref.current || !tickerSectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(tickerLine1Ref.current, {
        x: "150vw",
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tickerSectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(tickerLine1Ref.current, {
        x: "-150vw",
        ease: "none",
        duration: 1,
      });
    }, tickerSectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!industriesTitleSectionRef.current || !industriesTitleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(industriesTitleRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: industriesTitleSectionRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(industriesTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, industriesTitleSectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (
      !fintechCardsSectionRef.current ||
      !fintechTitleRef.current ||
      !fintechCarouselRef.current ||
      !fintechCard1Ref.current ||
      !fintechCard2Ref.current ||
      !fintechCard3Ref.current ||
      !fintechCard4Ref.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.set(fintechTitleRef.current, {
        y: "50vh",
        xPercent: -50,
        opacity: 0,
      });

      const elementsToAnimate = [
        fintechCarouselRef.current,
        fintechCard1Ref.current,
        fintechCard2Ref.current,
        fintechCard3Ref.current,
        fintechCard4Ref.current,
      ];

      gsap.set(elementsToAnimate, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fintechCardsSectionRef.current,
          start: "center center",
          end: "+=3115",
          scrub: true,
          pin: canPin(),
        },
      });

      // Animate title first
      tl.to(fintechTitleRef.current, {
        y: 0,
        xPercent: -50,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to({}, { duration: 0.5 })
        // Animate cards sequentially
        .to(fintechCarouselRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard1Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard2Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard3Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(fintechCard4Ref.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.4 });
    }, fintechCardsSectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!caseStudySectionRef.current || !caseStudyLine1Ref.current || !caseStudyLine2Ref.current)
      return;

    const ctx = gsap.context(() => {
      gsap.set(caseStudyLine1Ref.current, {
        x: "-100vw",
        opacity: 0,
      });
      gsap.set(caseStudyLine2Ref.current, {
        x: "100vw",
        opacity: 0,
      });
      if (caseStudyBtnRef.current) {
        gsap.set(caseStudyBtnRef.current, {
          opacity: 0,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: caseStudySectionRef.current,
          start: "center center",
          end: "+=1080",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(
        caseStudyLine1Ref.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      ).to(
        caseStudyLine2Ref.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

      if (caseStudyBtnRef.current) {
        tl.to(caseStudyBtnRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      tl.to({}, { duration: 0.3 });
    }, caseStudySectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!nextRef.current || !nextTitleRef.current || !nextTextRef.current || !nextBtnRef.current)
      return;

    const ctx = gsap.context(() => {
      gsap.set([nextTitleRef.current, nextTextRef.current, nextBtnRef.current], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "center center",
          end: "+=1935",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(nextTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to({}, { duration: 0.5 })
        .to(nextTextRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(nextBtnRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.3 });
    }, nextRef);

    return () => ctx.revert();
  }, []);

  /* ====================================== REMOVED ANIMATIONS =========================================

//==================================== 2 Every Industry ====================================
      useEffect(() => {
        if (!complexitySectionRef.current) return;

        gsap.set(complexityTextRef.current, {
          y: 300,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: complexitySectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: canPin(),
          },
        });

        // COME UP

        tl.to(complexityTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 2,
        })

        // HOLD

        .to({}, { duration: 2 })

        // MOVE UP

        .to(complexityTextRef.current, {
          y: -250,
          duration: 2,
        })

        // EXIT

        .to(complexityTextRef.current, {
          y: -1000,
          opacity: 0,
          duration: 2,
        });

      }, []);
//============================ Message Section ==========================
      useEffect(() => {
        gsap.set(messageTextRef.current, {
          y: 300,
          opacity: 0,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: messageRef.current,
            start: "top top",
            end: "+=2200",
            scrub: 1.2,
            pin: canPin(),
          },
        })

        // Come from bottom
        .to(messageTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "none",
        })

        // Pause in center
        .to({}, {
          duration: 0.8,
        })

        // Continue upward
        .to(messageTextRef.current, {
          y: -260,
          opacity: 0,
          duration: 1,
          ease: "none",
        });

      });
// ================================= 3 scale. pressure. speed. Regulation.===============================
       useEffect(() => {
        if (!tickerSectionRef.current) return;

        gsap.set(tickerTrackRef.current, {
          x: 0,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: tickerSectionRef.current,
            start: "top top",
            end: "+=5000",
            scrub: 1,
            pin: canPin(),
          },
        })
        .to(tickerTrackRef.current, {
          x: "-50%",
          ease: "none",
        });

      }, []);
// ========================================= 4 INDUSTRIES ===============================================
      useEffect(() => {
        if (!industriesTitleSectionRef.current) return;

        gsap.set(industriesTitleRef.current, {
          y: 300,
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: industriesTitleSectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: canPin(),
          },
        });

        // COME FROM BOTTOM

        tl.to(industriesTitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 2,
        })

        // HOLD

        .to({}, { duration: 2 })

        // MOVE UP

        .to(industriesTitleRef.current, {
          y: -250,
          duration: 2,
        })

        // EXIT

        .to(industriesTitleRef.current, {
          y: -1000,
          opacity: 0,
          duration: 2,
        });

      }, []);

//========================================= 5 Financial Services & Fintech ==============================
      useEffect(() => {

        // This Figma section is intentionally static; its exact layout must not be
        // overridden by the previous scroll-driven transforms.
        return;

        if (!fintechSectionRef.current) return;

        gsap.set(fintechTitleRef.current,{
          y:300,
          opacity:0,
        });

        gsap.set(fintechCard1Ref.current,{
          x:-500,
          rotationY:-25,
          opacity:0,
        });

        gsap.set(fintechCard2Ref.current,{
          x:-50,
          rotationY:-25,
          opacity:0,
        });

        gsap.set(fintechCard3Ref.current,{
          y:500,
          rotationX:-25,
          opacity:0,
        });

        gsap.set(fintechCard4Ref.current,{
          x:500,
          rotationY:25,
          opacity:0,
        });

        gsap.set(fintechArrowRef.current,{
          y:-80,
          rotation:180,
        });

        gsap.set(fintechArrow2Ref.current,{
          y:80,
          rotation:180,
        });
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:fintechSectionRef.current,
            start:"top top",
            end:"+=6000",
            scrub:1,
            pin: canPin(),
          }
        });
        
        // =====================
        // TITLE
        // =====================

        tl.to(fintechTitleRef.current,{
          y:0,
          opacity:1,
          duration:1.5
        })

        .to({}, {duration:1})

        .to(fintechTitleRef.current,{
          y:-100,

        });
    }, []);
//========================================= 6 Our impact ================================================
        useEffect(() => {
        if (!caseStudySectionRef.current) return;

        gsap.set(caseStudyTextRef.current, {
          y: 300,
          opacity: 0,
        });

        gsap.set(caseStudyBtnRef.current, {
          y: 80,
          opacity: 0,
          scale: 0.8,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: caseStudySectionRef.current,
            start: "top top",
            end: "+=4500",
            scrub: 1,
            // pin: canPin(),
          },
        });

        // TEXT COMES UP

        tl.to(caseStudyTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 2,
        })

        // HOLD

        .to({}, { duration: 1.5 })

        // MOVE LITTLE UP

        .to(caseStudyTextRef.current, {
          y: -120,
          duration: 1.5,
        })

        // BUTTON APPEAR

        .to(caseStudyBtnRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
        })

        // HOLD

        .to({}, { duration: 3 })

        // EXIT

        .to(
          [
            caseStudyTextRef.current,
            caseStudyBtnRef.current,
          ],
          {
            y: -1000,
            opacity: 0,
            duration: 2,
          }
        );

      }, []);
//==================================  7 Let’s solve what’s next ==============================
      useEffect(() => {
      if (!nextRef.current) return;

      gsap.set(nextTitleRef.current, {
        y: 250,
        opacity: 0,
      });

      gsap.set(nextTextRef.current, {
        y: 150,
        opacity: 0,
      });

      gsap.set(nextBtnRef.current, {
        y: 150,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top top",
          end: "+=700",
          scrub: 1,
          // pin: canPin(),
        },
      });

      // TITLE UP
      tl.to(nextTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })

      // PAUSE
      .to({}, { duration: 3 })

      // SHIFT TITLE UP
      .to(nextTitleRef.current, {
        y: -100,
        duration: 1,
      })

      // TEXT UP
      .to(nextTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })

      // PAUSE
      .to({}, { duration: 2 })

      // BUTTON UP
      .to(nextBtnRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, []);
*/
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
      {/* =================== SECTION : 5 Financial Services & Fintech  ======================*/}
      {SHOW_FINTECH_SECTION && (
        <section ref={fintechSectionRef} className="bg-black px-6 py-28 lg:py-36">
          <div className="relative grid grid-cols-1 gap-6 max-w-[1360px] mx-auto lg:grid-cols-3 lg:gap-7">
            {/* TITLE */}

            <h2
              ref={fintechTitleRef}
              className="
                    text-white
                    font-bold
                    text-[58px]
                    md:text-[86px]
                    leading-[0.95]
                    lg:col-span-2
                  "
            >
              Banking & Financial
              <br />
              Services
            </h2>

            <div className="flex items-end justify-start lg:justify-end">
              <div className="flex overflow-hidden rounded-full border-2 border-[#8AF500]">
                <button
                  aria-label="Previous industry"
                  className="grid h-12 w-16 place-items-center text-[#8AF500] md:h-14 md:w-20"
                >
                  <ArrowLeft size={34} strokeWidth={2} />
                </button>
                <button
                  aria-label="Next industry"
                  className="grid h-12 w-16 place-items-center bg-[#F3F3F3] text-[#8AF500] md:h-14 md:w-20"
                >
                  <ArrowRight size={34} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* NAV BUTTON */}
            {/* 
                <div
                  className="
                    absolute
                    right-[140px]
                    top-[330px]

                    flex
                    overflow-hidden

                    rounded-full
                    border-2
                    border-[#8AF500]
                  "
                >
                  <div
                    className="
                      px-10
                      py-4
                      text-[#8AF500]
                      text-[50px]
                    "
                  >
                    ←
                  </div>

                  <div
                    className="
                      px-10
                      py-4
                      bg-[#f3f3f3]
                      text-[#8AF500]
                      text-[50px]
                    "
                  >
                    →
                  </div>
                </div> */}

            {/* CARD 1 */}

            <div
              ref={fintechCard1Ref}
              className="
                    w-full
                    min-h-[160px]
                    lg:col-span-2

                    rounded-[24px]
                    border
                    border-white

                    flex
                    items-center
                    justify-start
                    gap-10
                    text-left
                    px-10
                  "
            >
              <div
                ref={fintechArrowRef}
                className="
                      w-[48px]
                      h-[94px]

                      rounded-full
                      border
                      border-[#8AF500]

                      flex
                      items-center
                      justify-center

                      text-[#8AF500]
                      shrink-0
                      text-[0px]
                    "
              >
                <ArrowDown size={38} strokeWidth={2} />↓
              </div>

              <h3
                className="
                      text-white
                      text-[26px]
                      md:text-[37px]
                      font-semibold
                      leading-[1.05]
                    "
              >
                High-stakes security and shifting regulatory landscapes.
              </h3>
            </div>

            {/* CARD 2 */}

            <div
              ref={fintechCard2Ref}
              className="
                    w-full
                    min-h-[350px]
                    lg:col-start-1

                    rounded-[24px]
                    border
                    border-white

                    p-8
                    flex
                    flex-col
                    items-start
                    justify-between
                    text-left
                  "
            >
              <h3
                className="
                      text-white
                      text-[80px]
                      font-bold
                      leading-[0.95]
                    "
              >
                Systems
                <br />
                designed
                <br />
                for
                <br />
                resilience
              </h3>

              <div
                ref={fintechArrow2Ref}
                className="
                      absolute
                      right-8
                      bottom-12
                      w-[104px]
                      h-[54px]
                      rounded-full
                      border
                      border-[#8AF500]
                      flex
                      items-center
                      justify-center
                      text-[0px]
                    "
              >
                <ArrowRight size={44} strokeWidth={2} />
                <span
                  className="
                        hidden
                        text-[#8AF500]
                        text-[100px]
                        leading-none
                        relative
                        left-[1px]
                        top-[-3px]
                      "
                >
                  →
                </span>
              </div>
            </div>

            {/* CARD 3 */}

            <div
              ref={fintechCard3Ref}
              className="
                    w-full
                    min-h-[350px]
                    lg:col-start-2

                    rounded-[24px]
                    border
                    border-white

                    p-8
                    flex
                    flex-col
                    items-start
                    justify-between
                    text-left
                  "
            >
              <h3
                className="
                      text-[#8AF500]
                      text-[37px]
                      leading-[1]
                    "
              >
                Where Security Holds, And Speed Doesn't Break.
              </h3>

              <button
                className="
                      mt-8
                      flex
                      items-center

                      rounded-full
                      border
                      border-[#8AF500]

                      px-5
                      py-2

                      text-white
                      text-[52px]
                      font-semibold
                    "
              >
                Case Study
                <span
                  className="
                        ml-3

                        w-16
                        h-16

                        rounded-full
                        bg-white

                        flex
                        items-center
                        justify-center

                        text-black
                      "
                >
                  <ArrowUpRight size={44} className="text-black" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* CARD 4 IMAGE */}

            <div
              ref={fintechCard4Ref}
              className="
                    w-full
                    h-[510px]
                    lg:col-start-3
                    lg:row-start-2
                    lg:row-span-2

                    rounded-[24px]
                    overflow-hidden

                    border
                    border-white
                  "
            >
              <img
                src="/images/figma-raw-13.webp"
                alt="Fintech"
                className="
                      w-full
                      h-full
                      object-cover
                    "
              />
            </div>
          </div>
        </section>
      )}
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
