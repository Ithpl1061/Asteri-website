import type { TeamMember } from "@/lib/types";
import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useAboutScrollStoryParams = {
  rootRef: RefObject<HTMLDivElement | null>;
  teamLoaded: true;
  heroHeadlineRef: RefObject<HTMLHeadingElement | null>;
  heroCtaRef: RefObject<HTMLButtonElement | null>;
  orbDotRef: RefObject<SVGCircleElement | null>;
  orbPathRef: RefObject<SVGPathElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  outcomesHeadingSectionRef: RefObject<HTMLElement | null>;
  serveClientsSectionRef: RefObject<HTMLElement | null>;
  serveClientsHeadingRef: RefObject<HTMLHeadingElement | null>;
  serveClientsContentRef: RefObject<HTMLDivElement | null>;
  missionSectionRef: RefObject<HTMLElement | null>;
  visionSectionRef: RefObject<HTMLElement | null>;
  approachHeadingSectionRef: RefObject<HTMLElement | null>;
  approachHeadingRef: RefObject<HTMLHeadingElement | null>;
  approachCardsSectionRef: RefObject<HTMLElement | null>;
  visionariesHeadingSectionRef: RefObject<HTMLElement | null>;
  visionariesHeadingRef: RefObject<HTMLHeadingElement | null>;
  visionaries: TeamMember[];
  visionariesSectionRef: RefObject<HTMLElement | null>;
  visionariesCircleRef: RefObject<HTMLDivElement | null>;
  visionariesImageRefs: RefObject<HTMLImageElement[]>;
  visionariesContentRefs: RefObject<HTMLDivElement[]>;
  cultureSectionRef: RefObject<HTMLElement | null>;
  techSectionRef: RefObject<HTMLElement | null>;
  techLine1Ref: RefObject<HTMLSpanElement | null>;
  techLine2Ref: RefObject<HTMLSpanElement | null>;
  nextSectionRef: RefObject<HTMLElement | null>;
};

export function useAboutScrollStory({
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
}: useAboutScrollStoryParams) {
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
          const distanceY = () =>
            Math.min(window.innerHeight * (compact ? 0.1 : 0.16), compact ? 72 : 140);
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

          // Green line orb dot animation with scroll & screenhold (pin)
          if (orbDotRef.current && orbPathRef.current && heroRef.current) {
            gsap.to(orbDotRef.current, {
              motionPath: {
                path: orbPathRef.current,
                align: orbPathRef.current,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
              },
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=120%",
                scrub: true,
                pin: canPin(),
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          }

          // Statement section animation (text lines slide in ONE BY ONE from right + pin/hold)
          if (outcomesHeadingSectionRef.current) {
            const statementLines = Array.from(
              outcomesHeadingSectionRef.current.querySelectorAll<HTMLElement>(
                ".statement-text-item",
              ),
            );
            if (statementLines.length > 0) {
              gsap.set(statementLines, { y: "100vh", opacity: 0 });

              const tlStatement = gsap.timeline({
                scrollTrigger: {
                  trigger: outcomesHeadingSectionRef.current,
                  start: "top top",
                  end: "+=203%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              statementLines.forEach((line, i) => {
                tlStatement.to(
                  line,
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 0.95,
                );
              });

              tlStatement.to({}, { duration: 0.4 });
            }
          }

          // We Serve Clients animation (Heading from RIGHT, Content lines from LEFT + pin/hold)
          if (
            serveClientsSectionRef.current &&
            serveClientsHeadingRef.current &&
            serveClientsContentRef.current
          ) {
            const serveLeftItems = Array.from(
              serveClientsContentRef.current.querySelectorAll<HTMLElement>(
                ".serve-client-left-item",
              ),
            );

            gsap.set(serveClientsHeadingRef.current, { x: "100vw", opacity: 0 });
            gsap.set(serveLeftItems, { x: "-100vw", opacity: 0 });

            const tlServe = gsap.timeline({
              scrollTrigger: {
                trigger: serveClientsSectionRef.current,
                start: "top top",
                end: "+=257%",
                scrub: 0.5,
                pin: canPin(),
                anticipatePin: 1,
              },
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
              tlServe.to(
                item,
                {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                },
                ">-0.4",
              );
            });

            tlServe.to({}, { duration: 0.4 });
          }

          // Mission animation (elements slide in ONE BY ONE from right + pin/hold)
          if (missionSectionRef.current) {
            const missionItems = Array.from(
              missionSectionRef.current.querySelectorAll<HTMLElement>(".mission-text-item"),
            );
            if (missionItems.length > 0) {
              gsap.set(missionItems, { x: "100vw", y: "100vh", opacity: 0 });

              const tlMission = gsap.timeline({
                scrollTrigger: {
                  trigger: missionSectionRef.current,
                  start: "top top",
                  end: "+=203%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              missionItems.forEach((item, i) => {
                tlMission.to(
                  item,
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 0.95,
                );
              });

              tlMission.to({}, { duration: 0.4 });
            }
          }

          // Vision animation (elements slide in ONE BY ONE from right + pin/hold)
          if (visionSectionRef.current) {
            const visionItems = Array.from(
              visionSectionRef.current.querySelectorAll<HTMLElement>(".vision-text-item"),
            );
            if (visionItems.length > 0) {
              gsap.set(visionItems, { x: "100vw", y: "100vh", opacity: 0 });

              const tlVision = gsap.timeline({
                scrollTrigger: {
                  trigger: visionSectionRef.current,
                  start: "top top",
                  end: "+=203%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              visionItems.forEach((item, i) => {
                tlVision.to(
                  item,
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 0.95,
                );
              });

              tlVision.to({}, { duration: 0.4 });
            }
          }

          // Our Approach Heading animation (slide in from right + pin/hold)
          if (approachHeadingSectionRef.current && approachHeadingRef.current) {
            gsap.set(approachHeadingRef.current, { x: "100vw", opacity: 0 });

            const tlApproachHeading = gsap.timeline({
              scrollTrigger: {
                trigger: approachHeadingSectionRef.current,
                start: "top top",
                end: "+=133%",
                scrub: 0.5,
                pin: canPin(),
                anticipatePin: 1,
              },
            });

            tlApproachHeading
              .to(approachHeadingRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              })
              .to({}, { duration: 0.4 });
          } // Our Approach Cards animation (cards slide in ONE BY ONE from right + pin/hold)
          if (approachCardsSectionRef.current) {
            const cardElements = Array.from(
              approachCardsSectionRef.current.querySelectorAll<HTMLElement>(".approach-card-item"),
            );
            if (cardElements.length > 0) {
              gsap.set(cardElements, { x: "100vw", opacity: 0 });

              const tlApproachCards = gsap.timeline({
                scrollTrigger: {
                  trigger: approachCardsSectionRef.current,
                  start: "top top",
                  end: "+=300%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              cardElements.forEach((card, i) => {
                tlApproachCards.to(
                  card,
                  {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 1.2,
                );
              });

              tlApproachCards.to({}, { duration: 1.2 });
              tlApproachCards.to(cardElements, {
                opacity: 0,
                y: -40,
                duration: 1,
                ease: "power1.in",
              });
            }
          }

          // "The Visionaries" heading (slide in from right + pin/hold)
          if (visionariesHeadingSectionRef.current && visionariesHeadingRef.current) {
            gsap.set(visionariesHeadingRef.current, { x: "100vw", opacity: 0 });

            const tlVisionariesHeading = gsap.timeline({
              scrollTrigger: {
                trigger: visionariesHeadingSectionRef.current,
                start: "top top",
                end: "+=133%",
                scrub: 0.5,
                pin: canPin(),
                anticipatePin: 1,
              },
            });

            tlVisionariesHeading
              .to(visionariesHeadingRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              })
              .to({}, { duration: 0.4 });
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
                end: "+=337%",
                scrub: 0.5,
                pin: canPin(),
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
                "<",
              )
              .to(
                content[0],
                {
                  opacity: 0,
                  y: -25,
                  duration: 1,
                  ease: "power3.inOut",
                },
                "<",
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
                "<20%",
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
                "<",
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
                "<",
              )
              .to(
                content[1],
                {
                  opacity: 0,
                  y: -25,
                  duration: 1,
                  ease: "power3.inOut",
                },
                "<",
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
                "<20%",
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
                "<",
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
                "<",
              )

              // Card 3 (Aishwarya Abnave) hold duration on screen after animation completes
              .to(images[2], { opacity: 1, duration: 0.6 });
          }

          // Culture & Values animation (cards slide in ONE BY ONE from right + pin/hold)
          if (cultureSectionRef.current) {
            const cultureCards = Array.from(
              cultureSectionRef.current.querySelectorAll<HTMLElement>(".culture-card-item"),
            );
            if (cultureCards.length > 0) {
              gsap.set(cultureCards, { x: "100vw", opacity: 0 });

              const tlCulture = gsap.timeline({
                scrollTrigger: {
                  trigger: cultureSectionRef.current,
                  start: "top top",
                  end: "+=254%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              cultureCards.forEach((card, i) => {
                tlCulture.to(
                  card,
                  {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 0.95,
                );
              });

              tlCulture.to({}, { duration: 0.4 });
            }
          }

          // Technology Matters animation (left right animation: line 1 from left, line 2 from right + pin/hold)
          if (techSectionRef.current && techLine1Ref.current && techLine2Ref.current) {
            gsap.set(techLine1Ref.current, { x: "-100vw", opacity: 0 });
            gsap.set(techLine2Ref.current, { x: "100vw", opacity: 0 });

            const tlTechHeading = gsap.timeline({
              scrollTrigger: {
                trigger: techSectionRef.current,
                start: "top top",
                end: "+=260%",
                scrub: 0.5,
                pin: canPin(),
                anticipatePin: 1,
              },
            });

            tlTechHeading
              .to(
                techLine1Ref.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                },
                0,
              )
              .to(
                techLine2Ref.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power1.out",
                },
                0,
              )
              .to({}, { duration: 0.5 });
          }

          // Designed For What's Next animation (text & button slide in ONE BY ONE from right + pin/hold)
          if (nextSectionRef.current) {
            const nextItems = Array.from(
              nextSectionRef.current.querySelectorAll<HTMLElement>(".next-text-item"),
            );
            if (nextItems.length > 0) {
              gsap.set(nextItems, { x: "100vw", opacity: 0 });

              const tlNext = gsap.timeline({
                scrollTrigger: {
                  trigger: nextSectionRef.current,
                  start: "top top",
                  end: "+=203%",
                  scrub: 0.5,
                  pin: canPin(),
                  anticipatePin: 1,
                },
              });

              nextItems.forEach((item, i) => {
                tlNext.to(
                  item,
                  {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.out",
                  },
                  i * 0.95,
                );
              });

              tlNext.to({}, { duration: 0.4 });
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
        },
      );

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, [
    teamLoaded,
    visionaries.length,
    rootRef,
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
    visionariesSectionRef,
    visionariesCircleRef,
    cultureSectionRef,
    techSectionRef,
    techLine1Ref,
    techLine2Ref,
    nextSectionRef,
    visionariesContentRefs,
    visionariesImageRefs,
  ]);
}
