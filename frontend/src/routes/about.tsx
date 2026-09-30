import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Search, Users, RotateCw, HeartHandshake } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import "./about-page.css";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Asteri" },
      {
        name: "description",
        content:
          "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: About,
});

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


function VisionariesSection({
  visionaries,
  sectionRef,
  circleRef,
  imageRefs,
  contentRefs,
}: {
  visionaries: any[];
  sectionRef: React.RefObject<HTMLElement | null>;
  circleRef: React.RefObject<HTMLDivElement | null>;
  imageRefs: React.MutableRefObject<HTMLImageElement[]>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black"
    >
      <div className="flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 lg:gap-20 px-8 lg:px-12">
          {/* Visual area */}
          <div className="relative h-[560px]">
            <div className="absolute inset-0">
              <div
                ref={circleRef}
                className="
                  absolute
                  left-10
                  top-8
                  z-0
                  h-[460px]
                  w-[460px]
                  rounded-full
                  bg-white
                "
              />

              {visionaries.map((person, index) => (
                <img
                  key={person.name}
                  ref={(element) => {
                    if (element) {
                      imageRefs.current[index] = element;
                    }
                  }}
                  src={person.imageUrl}
                  alt={person.name}
                  className="
                    absolute
                    top-4
                    left-10
                    z-10
                    w-[460px]
                    max-h-[490px]
                    select-none
                    object-contain
                    pointer-events-none
                  "
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    zIndex: visionaries.length - index,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="relative h-[560px]">
            {visionaries.map((person, index) => (
              <div
                key={person.name}
                ref={(element) => {
                  if (element) {
                    contentRefs.current[index] = element;
                  }
                }}
                className="absolute inset-0 flex flex-col justify-center space-y-6"
                style={{
                  opacity: index === 0 ? 1 : 0,
                }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  The Visionaries
                </p>

                <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-none text-white">
                  {person.name}
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-300">
                  {person.role}
                </h3>

                <p className="max-w-xl text-base md:text-lg leading-7 text-zinc-400">
                  {person.experience}
                </p>

                <a
                  href={person.linkedinUrl}
                  className="group inline-flex items-center gap-4 pt-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#82E926] transition group-hover:scale-110">
                    <ArrowUpRight
                      size={28}
                      className="text-black"
                    />
                  </span>

                  <span className="text-lg text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [visionaries, setVisionaries] = useState<any[]>([]);
  const [teamLoaded, setTeamLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/team')
      .then(res => res.json())
      .then(data => setVisionaries(data))
      .catch(err => console.error(err))
      .finally(() => setTeamLoaded(true));
  }, []);

  // ========================================= REFS ====================================================
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const orbPathRef = useRef<SVGPathElement>(null);
  const orbDotRef = useRef<SVGCircleElement>(null);
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
  const approachCardsContentRef = useRef<HTMLDivElement>(null);
  const visionariesSectionRef = useRef<HTMLElement>(null);
  const visionariesCircleRef = useRef<HTMLDivElement>(null);
  const visionariesImageRefs = useRef<HTMLImageElement[]>([]);
  const visionariesContentRefs = useRef<HTMLDivElement[]>([]);
  const cultureSectionRef = useRef<HTMLElement>(null);
  const techSectionRef = useRef<HTMLElement>(null);
  const techHeadingRef = useRef<HTMLHeadingElement>(null);
  const nextSectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !teamLoaded) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          mobile: "(max-width: 767px)",
          short: "(max-height: 750px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as Record<string, boolean>;
          const compact = conditions.mobile || conditions.short;
          const distanceY = () => Math.min(window.innerHeight * (compact ? 0.1 : 0.16), compact ? 72 : 140);
          const scrollDefaults = {
            scrub: conditions.mobile ? 0.8 : conditions.tablet ? 0.95 : 1.1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          };

          if (conditions.reduce) {
            gsap.set(root.querySelectorAll<HTMLElement>("[data-about-motion]"), {
              clearProps: "all",
              opacity: 1,
              visibility: "visible",
            });
            return;
          }

          // HERO SECTION (STATIC - NO SCROLL ANIMATION OR PIN)
          if (heroHeadlineRef.current && heroCtaRef.current) {
            gsap.set([heroHeadlineRef.current, heroCtaRef.current], { y: 0, opacity: 1 });
          }

          // Statement section animation (text lines slide in ONE BY ONE from right + pin/hold)
          if (outcomesHeadingSectionRef.current) {
            const statementLines = Array.from(outcomesHeadingSectionRef.current.querySelectorAll<HTMLElement>(".statement-text-item"));
            if (statementLines.length > 0) {
              gsap.set(statementLines, { y: "100vh", opacity: 0 });

              const tlStatement = gsap.timeline({
                scrollTrigger: {
                  trigger: outcomesHeadingSectionRef.current,
                  start: "top top",
                  end: "+=250%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              statementLines.forEach((line, i) => {
                tlStatement.to(line, {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 0.95);
              });

              tlStatement.to({}, { duration: 1.2 });
            }
          }

          // We Serve Clients animation (Heading from RIGHT, Content lines from LEFT + pin/hold)
          if (serveClientsSectionRef.current && serveClientsHeadingRef.current && serveClientsContentRef.current) {
            const serveLeftItems = Array.from(serveClientsContentRef.current.querySelectorAll<HTMLElement>(".serve-client-left-item"));

            gsap.set(serveClientsHeadingRef.current, { x: "100vw", opacity: 0 });
            gsap.set(serveLeftItems, { x: "-100vw", opacity: 0 });

            const tlServe = gsap.timeline({
              scrollTrigger: {
                trigger: serveClientsSectionRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 0.5,
                pin: true,
                  anticipatePin: 1,
                  }
            });

            // Heading from right
            tlServe.to(serveClientsHeadingRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power1.out",
            });

            // Items from left
            serveLeftItems.forEach((item) => {
              tlServe.to(item, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              }, ">-0.4");
            });

            tlServe.to({}, { duration: 1.2 });
          }

          // Mission animation (elements slide in ONE BY ONE from right + pin/hold)
          if (missionSectionRef.current) {
            const missionItems = Array.from(missionSectionRef.current.querySelectorAll<HTMLElement>(".mission-text-item"));
            if (missionItems.length > 0) {
              gsap.set(missionItems, { x: "100vw", y: "100vh", opacity: 0 });

              const tlMission = gsap.timeline({
                scrollTrigger: {
                  trigger: missionSectionRef.current,
                  start: "top top",
                  end: "+=250%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              missionItems.forEach((item, i) => {
                tlMission.to(item, {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 0.95);
              });

              tlMission.to({}, { duration: 1.2 });
            }
          }

          // Vision animation (elements slide in ONE BY ONE from right + pin/hold)
          if (visionSectionRef.current) {
            const visionItems = Array.from(visionSectionRef.current.querySelectorAll<HTMLElement>(".vision-text-item"));
            if (visionItems.length > 0) {
              gsap.set(visionItems, { x: "100vw", y: "100vh", opacity: 0 });

              const tlVision = gsap.timeline({
                scrollTrigger: {
                  trigger: visionSectionRef.current,
                  start: "top top",
                  end: "+=250%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              visionItems.forEach((item, i) => {
                tlVision.to(item, {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 0.95);
              });

              tlVision.to({}, { duration: 1.2 });
            }
          }

          // Our Approach Heading animation (slide in from right + pin/hold)
          if (approachHeadingSectionRef.current && approachHeadingRef.current) {
            gsap.set(approachHeadingRef.current, { x: "100vw", opacity: 0 });

            const tlApproachHeading = gsap.timeline({
              scrollTrigger: {
                trigger: approachHeadingSectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 0.5,
                pin: true,
                  anticipatePin: 1,
                  }
            });

            tlApproachHeading
              .to(approachHeadingRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              })
              .to({}, { duration: 1.2 });
          }          // Our Approach Cards animation (cards slide in ONE BY ONE from right + pin/hold)
          if (approachCardsSectionRef.current) {
            const cardElements = Array.from(approachCardsSectionRef.current.querySelectorAll<HTMLElement>(".approach-card-item"));
            if (cardElements.length > 0) {
              gsap.set(cardElements, { x: "100vw", opacity: 0 });

              const tlApproachCards = gsap.timeline({
                scrollTrigger: {
                  trigger: approachCardsSectionRef.current,
                  start: "top top",
                  end: "+=300%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              cardElements.forEach((card, i) => {
                tlApproachCards.to(card, {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 1.2);
              });

              tlApproachCards.to({}, { duration: 1.2 });
            }
          }

          // Visionaries section animation (Avinash -> Anuraj -> Aishwarya)
          if (
            visionaries.length > 0 &&
            visionariesSectionRef.current &&
            visionariesCircleRef.current &&
            visionariesImageRefs.current.length >= visionaries.length &&
            visionariesContentRefs.current.length >= visionaries.length
          ) {
            const images = visionariesImageRefs.current;
            const content = visionariesContentRefs.current;
            const circle = visionariesCircleRef.current;

            gsap.set(images, {
              opacity: 0,
              x: 0,
              y: 0,
              rotationY: 0,
              scale: 1,
              transformPerspective: 1200,
              transformOrigin: "center center",
            });

            gsap.set(content, {
              opacity: 0,
              y: 20,
            });

            gsap.set(images[0], {
              opacity: 1,
              scale: 1,
            });

            gsap.set(content[0], {
              opacity: 1,
              y: 0,
            });

            gsap.set(circle, {
              rotation: 0,
              x: 0,
              scale: 1,
              transformOrigin: "50% 50%",
              willChange: "transform",
            });

            const tlVisionaries = gsap.timeline({
              scrollTrigger: {
                trigger: visionariesSectionRef.current,
                start: "top top",
                end: "+=400%",
                scrub: 0.5,
                pin: true,
                  anticipatePin: 1,
                  },
            });

            tlVisionaries
              .to(images[0], { opacity: 1, duration: 2 })

              // Avinash Abnave -> Anuraj Paniker
              .to(circle, {
                rotation: 360,
                x: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.inOut",
              })
              .to(
                images[0],
                {
                  x: 140,
                  rotationY: 90,
                  opacity: 0,
                  scale: 0.94,
                  duration: 1.2,
                  ease: "power3.inOut",
                },
                "<"
              )
              .to(
                content[0],
                {
                  opacity: 0,
                  y: -25,
                  duration: 1,
                  ease: "power3.inOut",
                },
                "<"
              )
              .fromTo(
                images[1],
                {
                  opacity: 0,
                  x: -140,
                  rotationY: -90,
                  scale: 0.94,
                },
                {
                  opacity: 1,
                  x: 0,
                  rotationY: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.out",
                },
                "<20%"
              )
              .fromTo(
                content[1],
                {
                  opacity: 0,
                  y: 25,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                },
                "<"
              )

              // Card 2 (Anuraj Paniker) hold duration
              .to(images[1], { opacity: 1, duration: 2.5 })

              // Anuraj Paniker -> Aishwarya Abnave
              .to(circle, {
                rotation: 720,
                x: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.inOut",
              })
              .to(
                images[1],
                {
                  x: 140,
                  rotationY: 90,
                  opacity: 0,
                  scale: 0.94,
                  duration: 1.2,
                  ease: "power3.inOut",
                },
                "<"
              )
              .to(
                content[1],
                {
                  opacity: 0,
                  y: -25,
                  duration: 1,
                  ease: "power3.inOut",
                },
                "<"
              )
              .fromTo(
                images[2],
                {
                  opacity: 0,
                  x: -140,
                  rotationY: -90,
                  scale: 0.94,
                },
                {
                  opacity: 1,
                  x: 0,
                  rotationY: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.out",
                },
                "<20%"
              )
              .fromTo(
                content[2],
                {
                  opacity: 0,
                  y: 25,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                },
                "<"
              )
              .to(
                circle,
                {
                  rotation: 1080,
                  x: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power3.inOut",
                },
                "<"
              )

              // Card 3 (Aishwarya Abnave) hold duration on screen after animation completes
              .to(images[2], { opacity: 1, duration: 2 });
          }

          // Culture & Values animation (cards slide in ONE BY ONE from right + pin/hold)
          if (cultureSectionRef.current) {
            const cultureCards = Array.from(cultureSectionRef.current.querySelectorAll<HTMLElement>(".culture-card-item"));
            if (cultureCards.length > 0) {
              gsap.set(cultureCards, { x: "100vw", opacity: 0 });

              const tlCulture = gsap.timeline({
                scrollTrigger: {
                  trigger: cultureSectionRef.current,
                  start: "top top",
                  end: "+=300%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              cultureCards.forEach((card, i) => {
                tlCulture.to(card, {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 0.95);
              });

              tlCulture.to({}, { duration: 1.2 });
            }
          }

          // Technology Matters animation (slide in from right + pin/hold)
          if (techSectionRef.current && techHeadingRef.current) {
            gsap.set(techHeadingRef.current, { x: "100vw", opacity: 0 });

            const tlTechHeading = gsap.timeline({
              scrollTrigger: {
                trigger: techSectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 0.5,
                pin: true,
                  anticipatePin: 1,
                  }
            });

            tlTechHeading
              .to(techHeadingRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              })
              .to({}, { duration: 1.2 });
          }

          // Designed For What's Next animation (text & button slide in ONE BY ONE from right + pin/hold)
          if (nextSectionRef.current) {
            const nextItems = Array.from(nextSectionRef.current.querySelectorAll<HTMLElement>(".next-text-item"));
            if (nextItems.length > 0) {
              gsap.set(nextItems, { x: "100vw", opacity: 0 });

              const tlNext = gsap.timeline({
                scrollTrigger: {
                  trigger: nextSectionRef.current,
                  start: "top top",
                  end: "+=250%",
                  scrub: 0.5,
                  pin: true,
                  anticipatePin: 1,
                  }
              });

              nextItems.forEach((item, i) => {
                tlNext.to(item, {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                }, i * 0.95);
              });

              tlNext.to({}, { duration: 1.2 });
            }
          }

          const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
          const imageReady = images.map((image) => {
            if (image.complete) return Promise.resolve();
            return new Promise<void>((resolve) => {
              image.addEventListener("load", () => resolve(), { once: true });
              image.addEventListener("error", () => resolve(), { once: true });
            });
          });
          void Promise.all([document.fonts.ready, ...imageReady]).then(() => {
            requestAnimationFrame(() => {
              ScrollTrigger.sort();
              ScrollTrigger.refresh();
            });
          });
        }
      );

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, [teamLoaded, visionaries.length]);

  return (
    <PageShell>
      <div ref={rootRef} className="about-page overflow-x-clip bg-black">
        {/* ================= ORIGINAL HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="relative min-h-screen overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* MAIN HERO CONTAINER */}
          <div className="about-hero relative mx-auto h-[100svh] w-full max-w-[1400px] px-5 sm:px-8 lg:h-screen lg:px-10 flex flex-col items-center justify-center text-center">

            {/* TEXT */}
            <div className="relative z-20 max-w-full flex flex-col items-center justify-center text-center">
              <h1
                ref={heroHeadlineRef}
                data-about-motion
                className="hero-headline font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.2] tracking-normal text-white max-w-full md:max-w-[1000px] text-center"
              >
                We Design{" "}
                <span
                  style={{
                    color: "#000000",
                    WebkitTextStroke: "3px #82E926",
                    paintOrder: "stroke fill",
                  }}
                >
                  Digital
                </span>
                <br />
                Systems That Work{" "}
                <span
                  className="relative z-30 inline-block px-1"
                  style={{
                    color: "#000000",
                    WebkitTextStroke: "3px #82E926",
                    paintOrder: "stroke fill",
                  }}
                >
                  And Scale.
                </span>
              </h1>

              {/* Button */}
              <button
                ref={heroCtaRef}
                data-about-motion
                className="
                  mt-8
                  sm:mt-10
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-full
                  border-2
                  border-[#8AF500]
                  bg-[#82E926]
                  backdrop-blur-md
                  transition-transform
                  duration-300
                  ease-out
                  hover:scale-105
                "
              >
                <span className="text-black text-base sm:text-lg font-bold">
                  Get in touch
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <ArrowUpRight size={20} className="text-black" strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* SVG PATH (COMMENTED OUT FOR NOW) */}
            {/*
            <svg
              width="1400"
              height="950"
              viewBox="0 0 1350 950"
              className="absolute inset-0 w-full h-full"
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
                  M 1080 0
                  L 1080 280
                  Q 1080 320 1120 320
                  L 1360 320
                  Q 1400 320 1400 360
                  L 1400 760
                  Q 1400 800 1360 800
                  L 760 800
                  Q 720 800 720 760
                  L 720 560
                  Q 720 520 680 520
                  L 0 520
                "
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                ref={orbDotRef}
                cx="180"
                cy="0"
                r="18"
                fill="#39FF14"
              />
            </svg>
            */}
          </div>
        </section>
        {/* ================= HERO ENDS ================= */}

        {/* ============= STATEMENT SECTION ============= */}
        <section ref={outcomesHeadingSectionRef} className="solutions-outcomes-heading h-screen flex items-center justify-center relative w-full overflow-hidden text-center bg-black px-6 sm:px-10">
          <h2 ref={outcomesHeadingRef} style={{ perspective: "1000px" }} className="text-[clamp(1.2rem,2.8vw,2.35rem)] font-bold leading-[1.35] text-center text-white tracking-tight">
            <span className="statement-text-item block">We build on-demand teams tailored to your project —</span>
            <span className="statement-text-item block">reducing overhead, expanding your service portfolio,</span>
            <span className="statement-text-item block">and delivering on time, every time.</span>
          </h2>
        </section>

        {/* ============= WE SERVE CLIENTS SECTION ============= */}
        <section
          ref={serveClientsSectionRef}
          className="relative h-screen w-full bg-black flex flex-col justify-center overflow-hidden"
        >
          {/* TOP HEADING - CENTERED (SLIDES IN FROM RIGHT) */}
          <div className="w-full text-center px-6">
            <h2
              ref={serveClientsHeadingRef}
              className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center"
            >
              We Serve Clients
            </h2>
          </div>

          {/* LOWER CONTENT - LEFT CORNER WITH LITTLE WHITE LINE (SLIDES IN FROM LEFT) */}
          <div
            ref={serveClientsContentRef}
            className="mt-16 sm:mt-24 flex items-start gap-4 sm:gap-6 pl-0"
          >
            <div className="w-12 sm:w-20 lg:w-28 h-[1.5px] bg-white/90 mt-5 sm:mt-8 shrink-0 serve-client-left-item" />
            <div className="flex flex-col space-y-1 sm:space-y-3 font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-left">
              <span
                className="serve-client-left-item"
                style={{
                  color: "#000000",
                  WebkitTextStroke: "2.5px #82E926",
                  paintOrder: "stroke fill",
                }}
              >
                Across
              </span>
              <span className="serve-client-left-item text-white">
                India
              </span>
              <span
                className="serve-client-left-item"
                style={{
                  color: "#000000",
                  WebkitTextStroke: "2.5px #82E926",
                  paintOrder: "stroke fill",
                }}
              >
                And globally
              </span>
            </div>
          </div>
        </section>

        {/* ============= OUR MISSION SECTION ============= */}
        <section
          ref={missionSectionRef}
          className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
          <div ref={missionContentRef} className="flex flex-col items-center max-w-4xl mx-auto">
            <img src="/about/mission-goal.png" alt="Our Mission" className="mission-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain" />
            <h2 className="mission-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight">
              Our Mission
            </h2>
            <p className="mission-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight">
              To provide top-notch, on-demand IT services that make us our clients&apos; first choice.
            </p>
          </div>
        </section>

        {/* ============= OUR VISION SECTION ============= */}
        <section
          ref={visionSectionRef}
          className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
          <div ref={visionContentRef} className="flex flex-col items-center max-w-4xl mx-auto">
            <img src="/about/vision.png" alt="Our Vision" className="vision-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain" />
            <h2 className="vision-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight">
              Our Vision
            </h2>
            <p className="vision-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight">
              A future where every business has access to quality tech solutions — on demand, within budget.
            </p>
          </div>
        </section>

        {/* ============= OUR APPROACH HEADING SECTION ============= */}
        <section
          ref={approachHeadingSectionRef}
          className="relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden"
        >
          <h2
            ref={approachHeadingRef}
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white uppercase tracking-tight text-center"
          >
            OUR APPROACH
          </h2>
        </section>

        {/* ============= OUR APPROACH CARDS SECTION ============= */}
        <section
          ref={approachCardsSectionRef}
          className="relative h-screen w-full bg-black flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] w-full mx-auto">
            {/* Card 1: Discovery */}
            <div className="approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl">
              <Search className="w-14 h-14 text-[#82E926] mb-6" />
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Discovery</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">Understand the challenge and goals.</p>
              </div>
            </div>

            {/* Card 2: Team Assembly */}
            <div className="approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl">
              <Users className="w-14 h-14 text-[#82E926] mb-6" />
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Team Assembly</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">Exact specialists for the job.</p>
              </div>
            </div>

            {/* Card 3: Agile Delivery */}
            <div className="approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl">
              <RotateCw className="w-14 h-14 text-[#82E926] mb-6" />
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Agile Delivery</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">Iterative sprints, continuous feedback.</p>
              </div>
            </div>

            {/* Card 4: Support & Scale */}
            <div className="approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl">
              <HeartHandshake className="w-14 h-14 text-[#82E926] mb-6" />
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Support &amp; Scale</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">Managed support post-delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============= VISIONARIES SECTION ============= */}
        <VisionariesSection
          visionaries={visionaries}
          sectionRef={visionariesSectionRef}
          circleRef={visionariesCircleRef}
          imageRefs={visionariesImageRefs}
          contentRefs={visionariesContentRefs}
        />

        {/* ============= CULTURE & VALUES SECTION ============= */}
        <section
          ref={cultureSectionRef}
          className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden py-8 sm:py-10"
        >
          <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 flex flex-col justify-center">
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center mb-6 sm:mb-10 uppercase">
              CULTURE &amp; VALUES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* CARD 1 */}
              <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left">
                      Innovation
                    </h3>
                    <span className="text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      1
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left z-10">
                      Innovation
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug text-left">
                        We don't follow trends<br />We apply what actually works.
                      </h4>
                      <p className="text-zinc-200 font-normal text-sm leading-relaxed text-left">
                        At Asteri, innovation means finding smarter ways to solve real problems. Every solution we build is designed to move faster, cost less, and outlast the alternatives.
                      </p>
                    </div>

                    <span className="text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left">
                      Integrity
                    </h3>
                    <span className="text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      2
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left z-10">
                      Integrity
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug text-left">
                        We say what we mean,<br />and deliver what we promise.
                      </h4>
                      <p className="text-zinc-200 font-normal text-sm leading-relaxed text-left">
                        Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.
                      </p>
                    </div>

                    <span className="text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      2
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left">
                      Client-First
                    </h3>
                    <span className="text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      3
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left z-10">
                      Client-First
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug text-left">
                        We say what we mean,<br />and deliver what we promise.
                      </h4>
                      <p className="text-zinc-200 font-normal text-sm leading-relaxed text-left">
                        Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.
                      </p>
                    </div>

                    <span className="text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      3
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left">
                      Agility
                    </h3>
                    <span className="text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      4
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight text-left z-10">
                      Agility
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug text-left">
                        Built to move fast without<br />breaking things.
                      </h4>
                      <p className="text-zinc-200 font-normal text-sm leading-relaxed text-left">
                        Markets shift. Priorities change. Our on-demand model means we can assemble, scale, and pivot your team without the lag of traditional IT engagements.
                      </p>
                    </div>

                    <span className="text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============= TECHNOLOGY MATTERS SECTION ============= */}
        <section ref={techSectionRef} className="relative h-screen w-full bg-black flex items-center justify-center px-6 sm:px-10 overflow-hidden">
          <div className="w-full max-w-[1100px] mx-auto text-center">
            <h2 ref={techHeadingRef} className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.3] text-center text-white tracking-tight">
              <span className="block">Technology Only Matters</span>
              <span className="block">When It Delivers Clarity.</span>
            </h2>
          </div>
        </section>

        {/* ============= DESIGNED FOR WHAT'S NEXT SECTION ============= */}
        <section ref={nextSectionRef} className="relative h-screen w-full bg-black flex flex-col items-center justify-center px-5 overflow-hidden">
          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
            <h2 className="next-text-item text-white font-bold leading-tight text-[clamp(2rem,4.5vw,3.75rem)] text-center">
              Designed For What’s Next.
            </h2>
            <p className="next-text-item mt-8 text-white text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-snug text-center">
              Tell us where complexity is slowing you down.
              <br />
              We’ll design what comes next.
            </p>

            <button className="next-text-item mt-10 mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] text-black font-bold hover:scale-105 transition-transform">
              <span className="text-black text-base sm:text-lg font-bold text-center">
                Talk To Us
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight size={24} className="text-black" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
