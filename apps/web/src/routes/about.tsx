import { z } from "zod";
import { teamMemberSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { ensureApi } from "@/lib/queries";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { PageShell } from "@/components/PageShell";
import "./about-page.css";
// Geist Semi Bold for the hero sub-line (per Figma)
import "@fontsource/geist-sans/latin-600.css";
import type { TeamMember } from "@/lib/types";
import { canPin } from "@/lib/motion";
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
  useLayoutEffect(() => {
    const svg = orbSvgRef.current;
    const path = orbPathRef.current;
    const dot = orbDotRef.current;
    const headline = heroHeadlineRef.current;
    const business = heroBusinessRef.current;
    const sub = heroSubRef.current;
    const cta = heroCtaRef.current;
    const container = svg?.parentElement;
    if (!svg || !path || !dot || !headline || !business || !sub || !cta || !container) return;

    const RADIUS = 10;
    const roundedPath = (pts: { x: number; y: number }[]) => {
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const [a, b, c] = [pts[i - 1], pts[i], pts[i + 1]];
        const r = Math.min(
          RADIUS,
          Math.hypot(b.x - a.x, b.y - a.y) / 2,
          Math.hypot(c.x - b.x, c.y - b.y) / 2,
        );
        const inX = b.x - Math.sign(b.x - a.x) * r;
        const inY = b.y - Math.sign(b.y - a.y) * r;
        const outX = b.x + Math.sign(c.x - b.x) * r;
        const outY = b.y + Math.sign(c.y - b.y) * r;
        d += ` L ${inX} ${inY} Q ${b.x} ${b.y} ${outX} ${outY}`;
      }
      const last = pts[pts.length - 1];
      return `${d} L ${last.x} ${last.y}`;
    };

    let frame = 0;
    const build = () => {
      const c = container.getBoundingClientRect();
      if (c.width === 0 || c.height === 0) return;
      const local = (r: DOMRect) => ({
        left: r.left - c.left,
        right: r.right - c.left,
        top: r.top - c.top,
        bottom: r.bottom - c.top,
        width: r.width,
        height: r.height,
      });
      const s = parseFloat(getComputedStyle(headline).fontSize) / 96;
      const line1 = local(headline.children[0].getBoundingClientRect());
      const biz = local(business.getBoundingClientRect());
      const subR = local(sub.getBoundingClientRect());
      const btn = local(cta.getBoundingClientRect());

      // On phones the headline wraps, so "Business" sits on a later line and the desktop
      // drop (above "Business") would cut through the first lines. Detect that and
      // re-aim the drop into the free space beside those lines (same shape as desktop).
      const lineH = parseFloat(getComputedStyle(headline).fontSize) * (116 / 96);
      const line2H = headline.children[1].getBoundingClientRect().height;
      const wrapped = line1.height > lineH * 1.5 || line2H > lineH * 1.5;
      const yTurn = line1.bottom - 13 * s;
      // The line may run outside the content column (as in Figma); keep it on screen.
      const xRight = wrapped
        ? c.width - line1.left / 2 // mirror of the left gutter: clear of every line of text
        : Math.min(biz.right + 28 * s, window.innerWidth - c.left - RADIUS - 2);
      // Same shape as desktop: the line drops through the empty space to the right of the
      // short first lines ("Technology" / "That"), turns under them, and runs to the side.
      let maxRight1 = 0;
      if (wrapped) {
        const walker = document.createTreeWalker(headline.children[0], NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (!n.textContent?.trim()) continue;
          range.selectNodeContents(n);
          for (const r of Array.from(range.getClientRects()))
            maxRight1 = Math.max(maxRight1, r.right - c.left);
        }
      }
      const freeW = xRight - maxRight1;
      const xDrop = wrapped
        ? freeW >= 30
          ? (maxRight1 + xRight) / 2
          : Math.max(6, line1.left / 2)
        : biz.left + biz.width * 0.52;
      // Below the button, but never past the hero's visible bottom edge.
      const yBottom = Math.min(btn.bottom + 49 * s, c.height - 16);
      const xReturn = btn.right + 204 * s;
      const yGap = subR.bottom + (btn.top - subR.bottom) * 0.476;

      const d = roundedPath([
        { x: xDrop, y: 0 },
        { x: xDrop, y: yTurn },
        { x: xRight, y: yTurn },
        { x: xRight, y: yBottom },
        { x: xReturn, y: yBottom },
        { x: xReturn, y: yGap },
        { x: -c.left - 10, y: yGap }, // out past the screen's left edge
      ]);
      // Only touch the DOM when the geometry really changed (pinning the hero
      // can resize the container without changing the path).
      if (d === path.getAttribute("d")) return;
      svg.setAttribute("viewBox", `0 0 ${c.width} ${c.height}`);
      path.setAttribute("d", d);
      dot.setAttribute("cx", String(xDrop));
      // On phones the dot rides inside the narrow side gutter, so it must be smaller than it.
      dot.setAttribute(
        "r",
        wrapped ? String(Math.min(14, Math.max(5, (freeW >= 30 ? freeW / 2 : xDrop) - 4))) : "14",
      );
      dot.setAttribute("cy", "0");
    };

    // No ScrollTrigger.refresh() here: forcing a full refresh from this observer
    // re-laid out every pin on the page each time pinning resized the hero
    // (refresh -> pin -> resize -> refresh), which made the hero lag. ScrollTrigger
    // already refreshes on window resize and once after fonts/images load, and the
    // dot's motionPath re-reads the path then (invalidateOnRefresh).
    const rebuild = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(build);
    };

    build();
    document.fonts?.ready.then(rebuild);
    const ro = new ResizeObserver(rebuild);
    ro.observe(container);
    ro.observe(headline);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

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
  }, [teamLoaded, visionaries.length]);

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
