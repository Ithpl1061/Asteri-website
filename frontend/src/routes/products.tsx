// ========================================= IMPORTS =================================================

import { createFileRoute, Link } from "@tanstack/react-router";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, Settings, Timer, ShieldCheck, HeartHandshake } from "lucide-react";

import { PageShell } from "@/components/PageShell";

// ========================================= ROUTE ====================================================

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "products — Asteri",
      },
      {
        name: "products",
        content:
          "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Services,
});

// ========================================= START HERE ===============================================
function Services() {

  useEffect(() => {
    // Database integration removed as per request
  }, []);

// ========================================= REFS =====================================================
          const simpleQuoteSectionRef = useRef(null);
          const simpleQuoteTextRef = useRef(null);

          const builtSectionRef = useRef(null);
          const builtTextRef = useRef(null);

          const operationsSectionRef = useRef(null);
          const operationsTextRef = useRef(null);

          const productCardSectionRef = useRef(null);
          const productMainCardRef = useRef(null);
          const salesforceCardRef = useRef(null);
          const zohoCardRef = useRef(null);
          const dot1Ref = useRef(null);
          const dot2Ref = useRef(null);
          const dot3Ref = useRef(null);
          const dot4Ref = useRef(null);
          const dot5Ref = useRef(null);
          const productTitleRef = useRef<HTMLHeadingElement | null>(null);
          const productSubtitleRef = useRef<HTMLParagraphElement | null>(null);

          const [productName, setProductName] = useState("Salesforce");

          const [productType, setProductType] = useState(
            "CRM & Cloud Platform"
          );

          const enablesSectionRef = useRef(null);
          const enablesTitleRef = useRef(null);
          const enablesCard1Ref = useRef(null);
          const enablesCard2Ref = useRef(null);
          const enablesCard3Ref = useRef(null);
          const enablesCard4Ref = useRef(null);

          const nextRef = useRef<HTMLElement>(null);
          const nextTitleRef = useRef<HTMLHeadingElement>(null);
          const nextTextRef = useRef<HTMLParagraphElement>(null);
          const nextBtnRef = useRef<HTMLButtonElement>(null);

          const cardsWrapperRef = useRef(null);



/* ============================== REMOVED ANIMATIONS =================================

//================================= 3 Ours are built ===============================
          useEffect(() => {
            if (!builtSectionRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(builtTextRef.current, {
                y: 300,
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: builtSectionRef.current,
                  start: "top top",
                  end: "+=3500",
                  scrub: 1,
                  pin: true,
                },
              });

              // COME UP

              tl.to(builtTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 2,
              })

              // PAUSE

              .to({}, { duration: 1.5 })

              // GO UP

              .to(builtTextRef.current, {
                y: -700,
                opacity: 0,
                duration: 2,
              });
            }, builtSectionRef);

            return () => ctx.revert();
          }, []);
//================================= 4 Solutions built for real operations. ============================================
          useEffect(() => {
            if (!operationsSectionRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(operationsTextRef.current, {
                x: 2500,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: operationsSectionRef.current,
                  start: "top top",
                  end: "+=3000",
                  scrub: 1,
                  pin: true,
                },
              });

              tl.to(operationsTextRef.current, {
                x: -3000,
                ease: "none",
                duration: 3,
              });
            }, operationsSectionRef);

            return () => ctx.revert();
          }, []);

// ========================================= 5 CRM & Cloud Platform =====================================
// OLD USE EFFECT REMOVED
// ========================================= 6 WHAT IT ENABLES ==========================================
          useEffect(() => {
            if (!enablesSectionRef.current || enablers.length === 0) return;

            const ctx = gsap.context(() => {
              gsap.set(enablesTitleRef.current, {
                y: 300,
                opacity: 0,
              });

              gsap.set(enablesCard1Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard2Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard3Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard4Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: enablesSectionRef.current,
                  start: "top top",
                  end: "+=6000",
                  scrub: 1,
                  pin: true,
                },
              });

              // TITLE IN

              tl.to(enablesTitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
              });

              // HOLD

              tl.to({}, { duration: 1 });

              // TITLE SHIFT UP

              tl.to(enablesTitleRef.current, {
                y: -120,
                duration: 1,
              });

              // CARDS IN

              tl.to(
                enablesCard1Ref.current,
                {
                  y: 0,
                  rotation: 0,
                  opacity: 1,
                  duration: 1,
                },
                "<"
              )
                .to(
                  enablesCard2Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                )
                .to(
                  enablesCard3Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                )
                .to(
                  enablesCard4Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                );

              // HOLD

              tl.to({}, { duration: 2 });

              // EXIT

              tl.to(
                [
                  enablesTitleRef.current,
                  enablesCard1Ref.current,
                  enablesCard2Ref.current,
                  enablesCard3Ref.current,
                  enablesCard4Ref.current,
                ],
                {
                  y: -1000,
                  opacity: 0,
                  duration: 2,
                }
              );
            }, enablesSectionRef);

            return () => ctx.revert();
          }, []);
//==================================  7 Let’s solve what’s next ==============================
      useEffect(() => {
        if (!nextRef.current) return;

        const ctx = gsap.context(() => {
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
        }, nextRef);

        return () => ctx.revert();
      }, []);
*/

          useEffect(() => {
            if (!simpleQuoteSectionRef.current) return;

            const ctx = gsap.context(() => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: simpleQuoteSectionRef.current,
                  start: "center center",
                  end: "+=1500",
                  scrub: 1,
                  pin: true,
                },
              });

              tl.fromTo(
                ".simple-quote-line-1",
                { x: "-100vw" },
                { x: 0, ease: "power3.out", duration: 1 },
                0
              );

              tl.fromTo(
                ".simple-quote-line-2",
                { x: "100vw" },
                { x: 0, ease: "power3.out", duration: 1 },
                0
              );

              tl.to({}, { duration: 1.5 }); // Hold screen
            }, simpleQuoteSectionRef);

            return () => ctx.revert();
          }, []);



          useEffect(() => {
            if (!builtSectionRef.current || !builtTextRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(builtTextRef.current, {
                y: 300,
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: builtSectionRef.current,
                  start: "top top",
                  end: "+=3500",
                  scrub: 1,
                  pin: true,
                },
              });

              // COME UP
              tl.to(builtTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 2,
              })

              // PAUSE / HOLD
              .to({}, { duration: 1.5 })

              // GO UP / EXIT
              .to(builtTextRef.current, {
                y: -700,
                opacity: 0,
                duration: 2,
              });
            }, builtSectionRef);

            return () => ctx.revert();
          }, []);

          useEffect(() => {
            if (!productCardSectionRef.current || !cardsWrapperRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(cardsWrapperRef.current, { yPercent: -50 });
              gsap.set(productMainCardRef.current, { y: 400, opacity: 0 });

              gsap.set(dot1Ref.current, {
                backgroundColor: "#8AF500",
              });

              gsap.set(dot2Ref.current, {
                backgroundColor: "#666",
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: productCardSectionRef.current,
                  start: "top top",
                  end: "+=5000",
                  scrub: true,
                  pin: true,
                  onUpdate: (self) => {
                    const p = self.progress;
                    if (p < 0.2) {
                      setProductName("Salesforce");
                      setProductType("CRM & Cloud Platform");
                    } else if (p < 0.4) {
                      setProductName("Zoho");
                      setProductType("CRM & Cloud Platform");
                    } else if (p < 0.6) {
                      setProductName("1dox.ai");
                      setProductType("CRM & Cloud Platform");
                    } else if (p < 0.8) {
                      setProductName("ManageEngine");
                      setProductType("CRM & Cloud Platform");
                    } else {
                      setProductName("PL/SQL");
                      setProductType("CRM & Cloud Platform");
                    }
                  },
                },
              });

              // CARD ENTER
              tl.to(productMainCardRef.current, {
                y: 0,
                opacity: 1,
                duration: 2,
              });

              // PAUSE FOR 1ST CARD
              tl.to({}, { duration: 2 });

              // 2ND CARD
              tl.to(cardsWrapperRef.current, {
                x: -432,
                duration: 2,
              });

              tl.to(dot1Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
              tl.to(dot2Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

              tl.to({}, { duration: 1.5 });

              // 3RD CARD
              tl.to(cardsWrapperRef.current, {
                x: -864,
                duration: 2,
              });

              tl.to(dot2Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
              tl.to(dot3Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

              tl.to({}, { duration: 1.5 });

              // 4TH CARD
              tl.to(cardsWrapperRef.current, {
                x: -1296,
                duration: 2,
              });

              tl.to(dot3Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
              tl.to(dot4Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

              tl.to({}, { duration: 1.5 });

              // 5TH CARD
              tl.to(cardsWrapperRef.current, {
                x: -1728,
                duration: 2,
              });

              tl.to(dot4Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
              tl.to(dot5Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

              tl.to({}, { duration: 1.5 });

              // CARD EXIT
              tl.to(
                [productMainCardRef.current, cardsWrapperRef.current],
                {
                  y: -1200,
                  opacity: 0,
                  duration: 2,
                }
              );

              // Force ScrollTrigger to recalculate bounds now that the DOM is fully populated
              setTimeout(() => {
                ScrollTrigger.refresh();
              }, 100);

            }, productCardSectionRef);

            return () => ctx.revert();
          }, []);

          useEffect(() => {
            if (!enablesSectionRef.current) return;

            const ctx = gsap.context(() => {
              // Initial state: Title slightly low, cards far right
              gsap.set(enablesTitleRef.current, {
                y: 50,
                opacity: 0,
              });

              gsap.set([
                enablesCard1Ref.current,
                enablesCard2Ref.current,
                enablesCard3Ref.current,
                enablesCard4Ref.current
              ], {
                x: "100vw",
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: enablesSectionRef.current,
                  start: "top top",
                  end: "+=4000",
                  scrub: true,
                  pin: true,
                },
              });

              // 1. Title comes in
              tl.to(enablesTitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
              });

              // 2. Cards come in one by one from the right
              tl.to(enablesCard1Ref.current, { x: 0, opacity: 1, duration: 1 });
              tl.to(enablesCard2Ref.current, { x: 0, opacity: 1, duration: 1 });
              tl.to(enablesCard3Ref.current, { x: 0, opacity: 1, duration: 1 });
              tl.to(enablesCard4Ref.current, { x: 0, opacity: 1, duration: 1 });

              // 3. Hold at the end
              tl.to({}, { duration: 1.5 });

            }, enablesSectionRef);

            return () => ctx.revert();
          }, []);

          useEffect(() => {
            if (!nextRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set([
                nextTitleRef.current,
                nextTextRef.current,
                nextBtnRef.current
              ], {
                x: "100vw",
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: nextRef.current,
                  start: "top top",
                  end: "+=3000",
                  scrub: true,
                  pin: true,
                },
              });

              // TITLE IN
              tl.to(nextTitleRef.current, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              });

              // PAUSE
              tl.to({}, { duration: 0.5 });

              // TEXT IN
              tl.to(nextTextRef.current, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              });

              // PAUSE
              tl.to({}, { duration: 0.5 });

              // BUTTON IN
              tl.to(nextBtnRef.current, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              });

              // HOLD
              tl.to({}, { duration: 1.5 });

            }, nextRef);

            return () => ctx.revert();
          }, []);

  return (
    <PageShell>
        {/* =================== SECTION : 1 HERO ============================ */}
          <section
              className="
              bg-black
              flex
              items-center
              px-6
              pt-24
              pb-20
            "
          >
            <div
              className="
                w-full
                max-w-[1360px]
                mx-auto
                pl-[3%]
              "
            >

              <h1
                className="
                  text-white
                  font-bold
                  text-[46px]
                  md:text-[68px]
                  xl:text-[76px]
                  leading-[1]
                "
              >
                Industry-Leading{" "}
                <span className="text-transparent stroke-text-green">
                  Software
                </span>

                <br />

                <span className="text-transparent stroke-text-green">Authorized</span>{" "}Supported
              </h1>

              <p
                className="
                mt-8
                max-w-[900px]
                text-white
                text-[20px]
                md:text-[26px]
                font-semibold
                font-mono
                "
              >
                Buy with confidence — implementation expertise included.
              </p>

            {/*Button*/}
              <button
                className="
                  mt-24
                  flex
                  items-center
                  gap-3
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
                  className="
                    text-black
                    text-[26px]
                    font-bold
                  "
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
                    size={34}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            </div>
          </section>
        {/* =================== SECTION : 2 Every system should  ========================== */}  
        <section
          ref={simpleQuoteSectionRef}
          className="bg-black flex items-center justify-center px-6 py-32 overflow-hidden"
        >
          <div className="flex items-center justify-center">

            <div
              ref={simpleQuoteTextRef}
              className="
                text-center
              "
            >
              <h2
                className="
                  text-white
                  font-bold
                  text-[clamp(2.25rem,5vw,4.5rem)]
                  leading-[1.05]
                "
              >
                <div className="simple-quote-line-1">We only resell</div>
                <div className="simple-quote-line-2">what we can implement</div>
              </h2>
            </div>

          </div>
        </section>
        {/* =================== SECTION : 3 Ours are built ============================ */}
        <section
          ref={builtSectionRef}
          className="bg-black h-screen flex items-center justify-center px-6 overflow-hidden"
        >
          <div className="flex items-center justify-center">

            <div
              ref={builtTextRef}
              className="
                text-center
              "
            >
              <h2
                className="
                  text-white
                  font-bold
                  text-[clamp(1.2rem,2.8vw,2.35rem)]
                  leading-[1.05]
                "
              >
                Certified onboarding support
                <br />
                comes with every license.
              </h2>
            </div>

          </div>
        </section>


    {/*============================= SECTION : 5 CRM & CLOUD PLATFORM ============================*/}
        <section
          ref={productCardSectionRef}
          className="bg-black h-screen flex flex-col items-center justify-center"
        >
          <div className="w-full mx-auto overflow-hidden">
            <div
              ref={productMainCardRef}
              className="
                w-full
                min-h-[700px]
                bg-[#EAEAEA]
                p-8
                md:p-14
                relative
              "
            >

              {/* LEFT */}

              <div className="relative z-10 max-w-full pt-10 md:max-w-[40%]">

              <h2
                ref={productTitleRef}
                className="
                  text-black
                  text-[clamp(2.25rem,5vw,4.5rem)]
                  font-bold
                  leading-none
                  break-words
                "
              >
                {productName}
              </h2>

              <p
                ref={productSubtitleRef}
                className="
                  text-black
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  mt-4
                "
              >
                {productType}
              </p>

            {/* BUTTON */}
              <button
                className="
                  mt-16
                  md:mt-32
                  flex
                  items-center
                  gap-4
                  pl-8
                  pr-3
                  py-3
                  rounded-full
                  border
                  border-[#82E926]
                  bg-[#82E926]/20
                    text-black
                    text-base
                    sm:text-lg
                  font-bold
                "
              >
                Contact us

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#8AF500]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <ArrowUpRight
                    size={30}
                    className="text-black"
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            </div>

            {/* CardsWrapper */}
                <div
                  className="
                    relative
                    mt-16
                    h-[620px]
                    w-full
                    bg-[#DDDDDD]
                    rounded-[40px]
                    overflow-hidden
                    md:absolute
                    md:right-0
                    md:top-0
                    md:mt-0
                    md:h-full
                    md:w-[58%]
                    md:rounded-l-[40px]
                  "
                >
                  <div
                    ref={cardsWrapperRef}
                    className="
                      absolute
                      left-[8%]
                      top-[47%]
                      -translate-y-1/2
                      flex
                      flex-row
                      items-center
                      gap-8
                      w-max
                    "
                  > 

                {/* SALESFORCE */}

                <div
                  className="
                    shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
                >
                  <img src="/Salesforce.png" className="w-[170px]" />

                  <p className="text-black type-lead font-semibold font-medium mt-12 leading-[1.2]">
                    World's #1 CRM platform —
                    licenses & configs
                  </p>

                  <button
                    className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                  >
                    Know More
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={30}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                </div>

                {/* ZOHO */}

                <div
                  className="
                    shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
                >
                  <img src="/zoho logo.png" className="w-[170px]" />

                  <p className="text-black type-lead font-semibold font-medium mt-12 leading-[1.2]">
                    Integrated applications for
                    managing operations, sales,
                    and customer engagement.
                  </p>

                  <button
                    className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                  >
                    Know More
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={30}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                </div>

                {/* 3: 1dox.ai */}
                <div
                  className="
                    shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
                >
                  <img src="/1dox.ai 1.png" className="w-[190px]" />

                  <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                    A unified system to store, manage, and collaborate on documents with workflows and AI.
                  </p>

                  <button
                    className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                  >
                    Know More
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={30}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                </div>

                {/* 4: ManageEngine */}
                <div
                  className="
                    shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
                >
                  <img src="/ManageEngine logo.png" className="w-[220px]" />

                  <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                    Tools for monitoring, managing and securing IT infrastructure.
                  </p>

                  <button
                    className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                  >
                    Know More
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={30}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                </div>

                {/* 5: PL/SQL */}
                <div
                  className="
                    shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
                >
                  <img src="/plsql.png" className="w-[150px]" />

                  <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                    Robust database management and backend logic for structured applications.
                  </p>

                  <button
                    className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                  >
                    Know More
                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={30}
                        className="text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                </div>
              </div>

              {/* DOTS */}

              <div
                className="
                  absolute
                  bottom-12
                  left-1/2
                  -translate-x-1/2
                  flex
                  gap-4
                "
              >
                <div
                  ref={dot1Ref}
                  className="w-4 h-4 rounded-full"
                />

                <div
                  ref={dot2Ref}
                  className="w-4 h-4 rounded-full"
                />
                
                <div
                  ref={dot3Ref}
                  className="w-4 h-4 rounded-full bg-[#666]"
                />

                <div
                  ref={dot4Ref}
                  className="w-4 h-4 rounded-full bg-[#666]"
                />

                <div
                  ref={dot5Ref}
                  className="w-4 h-4 rounded-full bg-[#666]"
                />
              </div>
              </div>
            </div>

          </div>
        </section>
    {/*============================= SECTION : 6 WHAT IT ENABLES ============================*/}
        <section
          ref={enablesSectionRef}
          className="bg-black px-6 h-screen flex flex-col justify-center overflow-hidden"
        >
          <div className="mx-auto w-full max-w-[1360px]">

            {/* TITLE */}

            <div
              ref={enablesTitleRef}
              className="
                mb-16
              "
            >
              <h2
                className="
                  text-white
                  text-[clamp(2.25rem,5vw,4.5rem)]
                  font-bold
                  leading-[0.9]
                "
              >
                WHAT
                <br />
                IT ENABLES
              </h2>
            </div>

            {/* CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
            {/* CARD 1 */}

            <div
              ref={enablesCard1Ref}
              className="
                min-h-[310px]
                rounded-[24px]
                bg-white
                p-6
                flex
                flex-col
                justify-between
              "
            >
              <Settings
                size={64}
                strokeWidth={3}
                className="text-[#8AF500]"
              />

              <h3
                className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
              >
                Smarter
                <br />
                Operations
              </h3>
            </div>

            {/* CARD 2 */}

            <div
              ref={enablesCard2Ref}
              className="
                min-h-[310px]
                rounded-[24px]
                bg-white
                p-6
                flex
                flex-col
                justify-between
              "
            >
              <Timer
                size={64}
                strokeWidth={3}
                className="text-[#8AF500]"
              />

              <h3
                className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
              >
                Faster
                <br />
                Decisions
              </h3>
            </div>

            {/* CARD 3 */}

            <div
              ref={enablesCard3Ref}
              className="
                min-h-[310px]
                rounded-[24px]
                bg-white
                p-6
                flex
                flex-col
                justify-between
              "
            >
              <ShieldCheck
                size={64}
                strokeWidth={3}
                className="text-[#8AF500]"
              />

              <h3
                className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
              >
                Stronger
                <br />
                Security
              </h3>
            </div>

            {/* CARD 4 */}

            <div
              ref={enablesCard4Ref}
              className="
                min-h-[310px]
                rounded-[24px]
                bg-white
                p-6
                flex
                flex-col
                justify-between
              "
            >
              <HeartHandshake
                size={64}
                strokeWidth={3}
                className="text-[#8AF500]"
              />

              <h3
                className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
              >
                Better
                <br />
                Collaboration
              </h3>
            </div>
          </div>
          </div>
        </section>
  {/*=======================SECTION : 7 Let’s solve what’s next =================*/}
       <section
          ref={nextRef}
          className="relative h-screen bg-black flex items-center justify-center overflow-hidden px-6"
        >
          <div className="relative flex min-h-[650px] w-full max-w-[1360px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0B1205] py-28">




            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">

              <h2
                ref={nextTitleRef}
                className="
                  text-white
                  font-bold
                  leading-tight
                  text-[clamp(1.5rem,3vw,2.5rem)]
                "
              >
                Not just a license - a real partnership.
              </h2>

              <p
                ref={nextTextRef}
                className="
                  mt-8
                  text-white
                  text-[clamp(0.875rem,1.3vw,1.125rem)]
                  font-medium
                  leading-relaxed
                "
              >
                Every product we sell, we also implement
                <br />
                - at the right price, with the right support.
              </p>

            {/*Button*/}
              <button
                ref={nextBtnRef}
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  pl-6
                  pr-3
                  py-2.5
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#D9D9D9]
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    text-black
                    text-sm
                    sm:text-base
                    font-bold
                  "
                >
                  Request a Quote
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
                    size={34}
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
// ========================================= END ========================================================

