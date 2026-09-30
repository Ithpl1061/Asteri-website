// ========================================= IMPORTS =================================================

import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Target,
  Users,
  Zap,
  CheckCircle,
  Heart,
  Lightbulb,
  Rocket,
  MessagesSquare,
  MonitorCheck,
  PackageCheck,
  Headset,
} from "lucide-react";

import { PageShell } from "@/components/PageShell";
import "./industries-section.css";

// ========================================= ROUTE ==================================================

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      {
        title: "Industries — Asteri",
      },
      {
        name: "description",
        content:
          "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Services,
});
// ========================================= START HERE ==============================================
function Services() {
  const [details, setDetails] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/industry-details')
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(console.error);
  }, []);

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
      const caseStudyTextRef = useRef(null);
      const caseStudyBtnRef = useRef(null);

      const nextRef = useRef<HTMLElement>(null);
      const nextTitleRef = useRef<HTMLHeadingElement>(null);
      const nextTextRef = useRef<HTMLParagraphElement>(null);
      const nextBtnRef = useRef<HTMLButtonElement>(null);
      const fintechHeadingSectionRef = useRef(null);
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
              end: "+=2000",
              scrub: true,
              pin: true,
            },
          });

          tl.to(complexityTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1.5 });
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
              end: "+=2000",
              scrub: true,
              pin: true,
            },
          });

          tl.to(messageTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1.5 });
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
              pin: true,
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
              end: "+=2000",
              scrub: true,
              pin: true,
            },
          });

          tl.to(industriesTitleRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1.5 });
        }, industriesTitleSectionRef);

        return () => ctx.revert();
      }, []);

      useEffect(() => {
        if (!fintechHeadingSectionRef.current || !fintechTitleRef.current || !fintechCarouselRef.current || !fintechCard1Ref.current || !fintechCard2Ref.current || !fintechCard3Ref.current || !fintechCard4Ref.current) return;

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
            fintechCard4Ref.current
          ];

          gsap.set(elementsToAnimate, {
            x: "100vw",
            opacity: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: fintechHeadingSectionRef.current,
              start: "center center",
              end: "+=1500",
              scrub: true,
              pin: true,
            },
          });

          // Animate title
          tl.to(fintechTitleRef.current, {
            y: 0,
            xPercent: -50,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.5 });

          const tlCards = gsap.timeline({
            scrollTrigger: {
              trigger: fintechCardsSectionRef.current,
              start: "center center",
              end: "+=2000",
              scrub: true,
              pin: true,
            },
          });

          // Animate cards sequentially
          tlCards.to(fintechCarouselRef.current, {
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
          .to({}, { duration: 1.5 });
        });

        return () => ctx.revert();
      }, []);

      useEffect(() => {
        if (!caseStudySectionRef.current || !caseStudyTextRef.current || !caseStudyBtnRef.current) return;

        const ctx = gsap.context(() => {
          gsap.set([caseStudyTextRef.current, caseStudyBtnRef.current], {
            x: "100vw",
            opacity: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: caseStudySectionRef.current,
              start: "center center",
              end: "+=1500",
              scrub: true,
              pin: true,
            },
          });

          tl.to(caseStudyTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.5 })
          .to(caseStudyBtnRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1 });
        }, caseStudySectionRef);

        return () => ctx.revert();
      }, []);

      useEffect(() => {
        if (!nextRef.current || !nextTitleRef.current || !nextTextRef.current || !nextBtnRef.current) return;

        const ctx = gsap.context(() => {
          gsap.set([nextTitleRef.current, nextTextRef.current, nextBtnRef.current], {
            x: "100vw",
            opacity: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: nextRef.current,
              start: "center center",
              end: "+=1500",
              scrub: true,
              pin: true,
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
          .to({}, { duration: 1 });
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
            pin: true,
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
            pin: true,
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
            pin: true,
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
            pin: true,
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
            pin:true,
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
            // pin: true,
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
          // pin: true,
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
          <section
            ref={industriesHeroRef}
            className="bg-black px-8 md:px-16 lg:px-24 pb-16 pt-12 md:pb-20 md:pt-16"
            >
            <div className="w-full max-w-[1360px] mx-auto flex flex-col items-start">
            <div
              ref={industriesHeroContentRef}
              className="flex flex-col items-start"
            >
              <h1
                className="type-display text-white"
              >
                We{" "}
                <span
                  className="text-transparent stroke-text-green"
                >
                Speak
                </span>

                <br />

                Your Sector
              </h1>

              <p
                className="
                  text-white
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-semibold
                "
              >
                Domain expertise across 6 industries.
              </p>

            {/*Button*/}
              <button
                className="
                  mt-12
                  flex
                  items-center
                  gap-4
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#82E926]
                  backdrop-blur-md
                "
              >
                <span
                  className="text-black type-button"
                >
                  Explore More
                </span>

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight
                    size={44}
                    className="text-black"
                    strokeWidth={2.4}
                  />
                </div>
              </button>
            </div>
          </div>
        </section>
            {/* =================== SECTION : 2 Every Industry ======================*/}

            <section
              ref={complexitySectionRef}
              className="bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative"
            >
              <div className="flex items-center justify-center">

                <div
                  ref={complexityTextRef}
                  className="
                    text-center
                  "
                >
                  <h2
                    className="
                      text-white
                      text-[clamp(2.25rem,5vw,4.5rem)]
                      font-bold
                      leading-[1.05]
                    "
                  >
                    Generic solutions
                    <br />
                    don't cut it
                  </h2>
                </div>

              </div>
            </section>
            {/* ================= Message Section ================= */}
            <section ref={messageRef} className="bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative">
              <div className="flex items-center justify-center">
                <div
                  ref={messageTextRef}
                  className="
                    max-w-[1400px]
                    px-10
                    text-center
                    text-white
                    font-bold
                    leading-[1.2]
                    text-[clamp(1.2rem,2.8vw,2.35rem)]
                  "
                >
                  Every sector has different compliance needs,
                  <br />
                  data complexity, and growth pressure.
                </div>
              </div>
            </section>
            {/* =================== SECTION : 3 scale. pressure. speed. Regulation. ======================*/}
            <section
              ref={tickerSectionRef}
              className="bg-black overflow-hidden flex items-center justify-center px-6 min-h-[75vh] w-full relative"
            >
              <div className="flex items-center justify-center w-full">

                <div
                  className="
                    flex
                    flex-col
                    w-full
                    justify-center
                    items-center
                    text-center
                    gap-6
                  "
                >

                  {/* Line 1 */}
                  <div ref={tickerLine1Ref} className="flex flex-nowrap justify-center items-center gap-3 md:gap-6 whitespace-nowrap">
                    <span className="type-display text-transparent stroke-text-green">
                      Scale.
                    </span>
                    <span className="type-display text-white">
                      Pressure.
                    </span>
                    <span className="type-display text-transparent stroke-text-green">
                      Speed.
                    </span>
                    <span className="type-display text-white">
                      Regulation.
                    </span>
                  </div>

                </div>

              </div>
            </section>

            {/* =================== SECTION : 4 INDUSTRIES ======================*/}
            <section
              ref={industriesTitleSectionRef}
              className="bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative text-center"
            >
              <div className="flex items-center justify-center">

                <div
                  ref={industriesTitleRef}
                  className="
                    text-center
                  "
                >
                  <h2
                    className="
                      text-white
                      text-[clamp(2.25rem,5vw,4.5rem)]
                      font-bold
                      tracking-tight
                      whitespace-nowrap
                    "
                  >
                    INDUSTRIES
                  </h2>
                </div>

              </div>
            </section>
            {/* =================== SECTION : 5 Financial Services & Fintech  ======================*/}
            {false && (
             <section
              ref={fintechSectionRef}
              className="bg-black px-6 py-28 lg:py-36"
            >
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
                    <button aria-label="Previous industry" className="grid h-12 w-16 place-items-center text-[#8AF500] md:h-14 md:w-20">
                      <ArrowLeft size={34} strokeWidth={2} />
                    </button>
                    <button aria-label="Next industry" className="grid h-12 w-16 place-items-center bg-[#F3F3F3] text-[#8AF500] md:h-14 md:w-20">
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
                    <ArrowDown size={38} strokeWidth={2} />
                    ↓
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
                    High-stakes security and shifting
                    regulatory landscapes.
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
                    Where Security
                    Holds, And
                    Speed Doesn't
                    Break.
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
                    <ArrowUpRight
                    size={44}
                    className="text-black"
                    strokeWidth={2.5}
                  />
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
                    src="/images/figma-raw-13.png"
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
            <section ref={fintechHeadingSectionRef} className="bg-black min-h-[100vh] flex flex-col items-center justify-center relative w-full overflow-hidden pt-12 gap-0">
              <div className="industries-banking-layout flex-none -translate-y-16" style={{ height: "220px", margin: 0 }}>
                <h2 ref={fintechTitleRef}>{details[0]?.name}</h2>
              </div>
            </section>

            <section ref={fintechCardsSectionRef} className="bg-black min-h-[100vh] flex flex-col items-center justify-center relative w-full overflow-hidden pt-12 gap-0">
              <div className="industries-banking-layout flex-none" style={{ margin: 0 }}>
                <img
                  ref={fintechCarouselRef}
                  className="industries-carousel"
                  src="/figma/industries/carousel-button.svg"
                  alt=""
                  aria-hidden="true"
                />
                <article ref={fintechCard1Ref} className="industries-security-card">
                  <span ref={fintechArrowRef} className="industries-security-arrow" aria-hidden="true">
                    <ArrowDown size={28} strokeWidth={3} color="#7cff00" />
                  </span>
                  <p>{details[0]?.challengesDescription}</p>
                </article>

                <article ref={fintechCard2Ref} className="industries-resilience-card">
                  <h3>{details[0]?.solutionsDescription}</h3>
                  <span ref={fintechArrow2Ref} className="industries-resilience-arrow" aria-hidden="true">
                    <ArrowRight size={28} strokeWidth={3} color="#7cff00" />
                  </span>
                </article>

                <article ref={fintechCard3Ref} className="industries-speed-card">
                  <p>{details[0]?.impactDescription}</p>
                  <button type="button">
                    Case Study
                    <img src="/figma/industries/case-arrow.svg" alt="" aria-hidden="true" />
                  </button>
                </article>

                <article ref={fintechCard4Ref} className="industries-banking-image">
                  <img src={details[0]?.imageUrl} alt={details[0]?.name} />
                </article>
              </div>
            </section>
            {/* =================== SECTION : 6 Our impact ======================*/}
            <section
              ref={caseStudySectionRef}
              className="relative bg-black min-h-[75vh] flex items-center justify-center px-6 overflow-hidden w-full"
            >
              <div className="relative z-10 flex flex-col items-center text-center">

                {/* GREEN GLOW */}

                <div
                  className="
                    absolute
                    bottom-[-250px]
                    left-1/2
                    -translate-x-1/2
                    w-[1400px]
                    h-[500px]
                    rounded-full
                    bg-[#8AF500]
                    opacity-[0.08]
                    blur-[180px]
                  "
                />

                {/* TEXT */}

                <div
                  ref={caseStudyTextRef}
                  className="
                    text-center
                    w-full
                    px-10
                  "
                >
                  <h2
                    className="type-title text-white max-w-[1400px] mx-auto"
                  >
                    Our impact lives inside
                    <br />
                    the systems in use.
                  </h2>
                </div>

            {/*Button*/}
              <button
                ref={caseStudyBtnRef}           
                className="
                  hidden
                  flex
                  items-center
                  gap-3
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  backdrop-blur-md
                "
              >
                <span
                  className="text-white type-button"
                >
                  Case Studies
                </span>

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#8AF500]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight
                    size={44}
                    className="text-black"
                    strokeWidth={2.2}
                  />
                </div>
              </button>
            </div>
            </section>
  {/*=======================SECTION : 7 Let’s solve what’s next =================*/}
       <section
          ref={nextRef}
          className="relative bg-black min-h-[75vh] w-full flex items-center justify-center overflow-hidden px-6"
        >
          <div className="relative flex w-full max-w-[1360px] items-center justify-center overflow-hidden py-20 md:py-24">

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center">

              <h2
                ref={nextTitleRef}
                className="type-cta-title text-white">
                Don't see your sector?
              </h2>

              <p
                ref={nextTextRef}
                className="mt-10 type-cta-subtitle text-white">
                Reach out and let's discuss your 
                <br />
                specific context.
              </p>

            {/*Button*/}
              <button
                ref={nextBtnRef}              
                className="
                  mt-12
                  flex
                  items-center
                  gap-4
                  pl-6
                  pr-3
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#D9D9D9]
                  backdrop-blur-md
                
                "
              >
                <span
                  className="text-black type-button"
                >
                  Talk to Us
                </span>

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight
                    size={44}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            </div>


          </div>
        </section>
    </PageShell>
  );
}
// ========================================= END ====================================================
