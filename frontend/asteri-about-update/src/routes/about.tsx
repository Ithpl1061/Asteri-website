import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageShell } from "@/components/PageShell";
import "./about-page.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const FIGMA_GREEN = "#82E926";

const outlineTextStyle = {
  color: "#000",
  WebkitTextStroke: "clamp(2px, 0.28vw, 4px) #82E926",
  paintOrder: "stroke fill",
} as const;

const approachItems = [
  {
    title: "Discovery",
    description: "Understand the challenge and goals.",
    image: "/about/approach-discovery.png",
  },
  {
    title: "Team Assembly",
    description: "Exact specialists for the job.",
    image: "/about/approach-team.png",
  },
  {
    title: "Agile Delivery",
    description: "Iterative sprints, continuous feedback.",
    image: "/about/approach-agile.png",
  },
  {
    title: "Support & Scale",
    description: "Managed support post-delivery.",
    image: "/about/approach-support.png",
  },
] as const;

const visionaries = [
  {
    name: "Avinash Abnave",
    role: "Chief Executive Officer",
    experience:
      "10+ years of experience in running successful businesses, especially medium to large enterprises in the technology sector.",
    image: "/about/visionary-avinash.png",
    linkedin: "#",
  },
  {
    name: "Anuraj Paniker",
    role: "Chief Technology Officer",
    experience: "15+ years of experience in enterprise technology and delivery.",
    image: "/AnurajSir.png",
    linkedin: "#",
  },
  {
    name: "Aishwarya Abnave",
    role: "Chief Marketing Officer",
    experience: "12+ years of experience in marketing and business growth.",
    image: "/AishwariaMam.png",
    linkedin: "#",
  },
] as const;

const values = [
  {
    title: "Innovation",
    heading: "We don't follow trends. We apply what actually works.",
    body:
      "At Asteri, innovation means finding smarter ways to solve real problems. Every solution we build is designed to move faster, cost less, and outlast the alternatives.",
  },
  {
    title: "Integrity",
    heading: "We say what we mean, and deliver what we promise.",
    body:
      "Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.",
  },
  {
    title: "Client-First",
    heading: "We say what we mean, and deliver what we promise.",
    body:
      "Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.",
  },
  {
    title: "Agility",
    heading: "Built to move fast without breaking things.",
    body:
      "Markets shift. Priorities change. Our on-demand model means we can assemble, scale, and pivot your team without the lag of traditional IT engagements.",
  },
] as const;

type SvgPathAsset = {
  d: string;
  viewBox: string;
};

const HERO_FALLBACK: SvgPathAsset = {
  viewBox: "0 0 1281.5 848.5",
  d: "M1080 0V280Q1080 320 1120 320H1360Q1400 320 1400 360V760Q1400 800 1360 800H760Q720 800 720 760V560Q720 520 680 520H0",
};

function useSvgPathAsset(src: string, fallback: SvgPathAsset) {
  const [asset, setAsset] = useState<SvgPathAsset>(fallback);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) return;
        const source = await response.text();
        const documentNode = new DOMParser().parseFromString(source, "image/svg+xml");
        const svg = documentNode.querySelector("svg");
        const path = documentNode.querySelector("path");
        const d = path?.getAttribute("d");
        const viewBox = svg?.getAttribute("viewBox");

        if (!cancelled && d) {
          setAsset({ d, viewBox: viewBox || fallback.viewBox });
        }
      } catch {
        // Keep the embedded fallback path when the local Figma export is unavailable.
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [fallback, src]);

  return asset;
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Asteri" },
      {
        name: "description",
        content:
          "Asteri builds on-demand technology teams and scalable digital systems for global businesses.",
      },
    ],
  }),
  component: About,
});

function About() {
  const heroPathAsset = useSvgPathAsset("/about/hero-path.svg", HERO_FALLBACK);

  const rootRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef<HTMLElement>(null);
  const heroWordRefs = useRef<HTMLSpanElement[]>([]);
  const heroSupportRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const orbPathRef = useRef<SVGPathElement>(null);
  const orbDotRef = useRef<HTMLImageElement>(null);

  const statementRef = useRef<HTMLElement>(null);
  const statementTextRef = useRef<HTMLParagraphElement>(null);

  const clientsRef = useRef<HTMLElement>(null);
  const clientsContentRef = useRef<HTMLDivElement>(null);
  const clientsLineRef = useRef<HTMLDivElement>(null);

  const coverageRef = useRef<HTMLElement>(null);
  const acrossRef = useRef<HTMLHeadingElement>(null);
  const indiaRef = useRef<HTMLHeadingElement>(null);
  const globalRef = useRef<HTMLHeadingElement>(null);
  const coverageLineRef = useRef<HTMLDivElement>(null);

  const missionIntroRef = useRef<HTMLElement>(null);
  const missionIntroTitleRef = useRef<HTMLHeadingElement>(null);

  const missionRef = useRef<HTMLElement>(null);
  const missionTopRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLParagraphElement>(null);

  const visionRef = useRef<HTMLElement>(null);
  const visionTopRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLParagraphElement>(null);

  const approachRef = useRef<HTMLElement>(null);
  const approachTitleRef = useRef<HTMLHeadingElement>(null);
  const approachCardRefs = useRef<HTMLElement[]>([]);

  const visionariesRef = useRef<HTMLElement>(null);
  const visionariesTitleRef = useRef<HTMLHeadingElement>(null);
  const visionariesPanelRef = useRef<HTMLDivElement>(null);
  const visionariesCircleRef = useRef<HTMLImageElement>(null);
  const visionariesImageRefs = useRef<HTMLImageElement[]>([]);
  const visionariesContentRefs = useRef<HTMLDivElement[]>([]);

  const cultureRef = useRef<HTMLElement>(null);
  const cultureTitleRef = useRef<HTMLHeadingElement>(null);
  const cultureGridRef = useRef<HTMLDivElement>(null);

  const technologyRef = useRef<HTMLElement>(null);
  const technologyTextRef = useRef<HTMLHeadingElement>(null);

  const finalCtaRef = useRef<HTMLElement>(null);
  const finalGlowRef = useRef<HTMLImageElement>(null);
  const finalTitleRef = useRef<HTMLHeadingElement>(null);
  const finalTextRef = useRef<HTMLParagraphElement>(null);
  const finalButtonRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root.querySelectorAll<HTMLElement>("[data-motion]"), {
          clearProps: "all",
          opacity: 1,
          visibility: "visible",
        });
        gsap.set(visionariesImageRefs.current.slice(1), { display: "none" });
        gsap.set(visionariesContentRefs.current.slice(1), { display: "none" });
      });

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          mobile: "(max-width: 767px)",
          short: "(max-height: 750px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            tablet: boolean;
            mobile: boolean;
            short: boolean;
            reduce: boolean;
          };

          if (conditions.reduce) return;

          const compact = conditions.mobile || conditions.short;
          const viewportY = () => Math.min(window.innerHeight * (compact ? 0.12 : 0.2), compact ? 80 : 170);
          const viewportX = () => Math.min(window.innerWidth * (compact ? 0.55 : 0.82), compact ? 260 : 1080);
          const scrub = compact ? 0.45 : 0.7;
          const triggerDefaults = {
            scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          } as const;

          // 1. HERO — headline sequence + exact Figma path movement.
          if (
            heroRef.current &&
            heroSupportRef.current &&
            heroCtaRef.current &&
            orbPathRef.current &&
            orbDotRef.current
          ) {
            const words = heroWordRefs.current.filter(Boolean);
            gsap.set(words, { y: compact ? 24 : 46, opacity: 0 });
            gsap.set([heroSupportRef.current, heroCtaRef.current], {
              y: compact ? 18 : 30,
              opacity: 0,
            });
            gsap.set(orbDotRef.current, { transformOrigin: "50% 50%" });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: heroRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 1.1 : 1.7))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(words, {
                y: 0,
                opacity: 1,
                duration: 0.58,
                stagger: 0.09,
                ease: "power3.out",
              })
              .to(heroSupportRef.current, { y: 0, opacity: 1, duration: 0.42 }, "<0.22")
              .to(heroCtaRef.current, { y: 0, opacity: 1, duration: 0.42 }, "<0.12")
              .to(
                orbDotRef.current,
                {
                  motionPath: {
                    path: orbPathRef.current,
                    align: orbPathRef.current,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: false,
                  },
                  duration: 1.4,
                  ease: "none",
                },
                0,
              )
              .to({}, { duration: 0.2 });
          }

          // 2. BUSINESS STATEMENT — previous rise, hold, and exit animation.
          if (statementRef.current && statementTextRef.current) {
            gsap.set(statementTextRef.current, { y: () => viewportY(), opacity: 0 });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: statementRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 0.95 : 1.2))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(statementTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power3.out",
              })
              .to({}, { duration: 0.55 })
              .to(statementTextRef.current, {
                y: () => -viewportY(),
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
              });
          }

          // 3. WE SERVE CLIENTS — horizontal entry and line growth.
          if (clientsRef.current && clientsContentRef.current && clientsLineRef.current) {
            gsap.set(clientsContentRef.current, { x: () => viewportX() * 0.55, opacity: 0 });
            gsap.set(clientsLineRef.current, { scaleX: 0, transformOrigin: "left center" });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: clientsRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 0.75 : 0.95))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(clientsContentRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out",
              })
              .to(clientsLineRef.current, { scaleX: 1, duration: 0.68, ease: "power2.out" }, "<")
              .to({}, { duration: 0.28 })
              .to([clientsContentRef.current, clientsLineRef.current], {
                x: compact ? -50 : -110,
                opacity: 0,
                duration: 0.45,
                ease: "power2.in",
              });
          }

          // 4. COVERAGE — sequential words based on the old clarity animation.
          if (
            coverageRef.current &&
            acrossRef.current &&
            indiaRef.current &&
            globalRef.current &&
            coverageLineRef.current
          ) {
            gsap.set(acrossRef.current, { x: () => -viewportX() * 0.55, opacity: 0 });
            gsap.set(indiaRef.current, { y: () => viewportY(), opacity: 0 });
            gsap.set(globalRef.current, { x: () => viewportX() * 0.55, opacity: 0 });
            gsap.set(coverageLineRef.current, { scaleX: 0, transformOrigin: "left center" });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: coverageRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 1.05 : 1.35))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(acrossRef.current, { x: 0, opacity: 1, duration: 0.58, ease: "power3.out" })
              .to(coverageLineRef.current, { scaleX: 1, duration: 0.5 }, "<")
              .to(indiaRef.current, { y: 0, opacity: 1, duration: 0.58 }, "<0.18")
              .to(globalRef.current, { x: 0, opacity: 1, duration: 0.58 }, "<0.18")
              .to({}, { duration: 0.45 })
              .to([acrossRef.current, indiaRef.current, globalRef.current, coverageLineRef.current], {
                y: () => -viewportY() * 0.75,
                opacity: 0,
                duration: 0.52,
              });
          }

          // 5. MISSION & VISION INTRO.
          if (missionIntroRef.current && missionIntroTitleRef.current) {
            gsap.set(missionIntroTitleRef.current, {
              y: () => viewportY(),
              opacity: 0,
              scale: 0.95,
            });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: missionIntroRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 0.9 : 1.1))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(missionIntroTitleRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.78,
                ease: "power3.out",
              })
              .to({}, { duration: 0.5 })
              .to(missionIntroTitleRef.current, {
                y: () => -viewportY(),
                opacity: 0,
                scale: 1.04,
                duration: 0.58,
              });
          }

          // 6. OUR MISSION.
          if (missionRef.current && missionTopRef.current && missionTextRef.current) {
            gsap.set(missionTopRef.current, { y: () => viewportY(), opacity: 0 });
            gsap.set(missionTextRef.current, {
              y: () => viewportY() * 1.1,
              rotation: compact ? 4 : 10,
              opacity: 0,
              transformOrigin: "50% 50%",
            });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: missionRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 1.05 : 1.3))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(missionTopRef.current, { y: 0, opacity: 1, duration: 0.65 })
              .to(
                missionTextRef.current,
                { y: 0, rotation: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "<0.18",
              )
              .to({}, { duration: 0.45 })
              .to([missionTopRef.current, missionTextRef.current], {
                y: () => -viewportY(),
                opacity: 0,
                duration: 0.52,
              });
          }

          // 7. OUR VISION.
          if (visionRef.current && visionTopRef.current && visionTextRef.current) {
            gsap.set(visionTopRef.current, { y: () => viewportY(), opacity: 0 });
            gsap.set(visionTextRef.current, {
              y: () => viewportY() * 1.1,
              rotation: compact ? -4 : -10,
              opacity: 0,
              transformOrigin: "50% 50%",
            });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: visionRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 1.05 : 1.3))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(visionTopRef.current, { y: 0, opacity: 1, duration: 0.65 })
              .to(
                visionTextRef.current,
                { y: 0, rotation: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "<0.18",
              )
              .to({}, { duration: 0.45 })
              .to([visionTopRef.current, visionTextRef.current], {
                y: () => -viewportY(),
                opacity: 0,
                duration: 0.52,
              });
          }

          // 8. OUR APPROACH — title clip reveal and four sequential Figma stages.
          if (
            approachRef.current &&
            approachTitleRef.current &&
            approachCardRefs.current.length === approachItems.length
          ) {
            const cards = approachCardRefs.current;
            const travel = () => Math.min(window.innerWidth * (compact ? 0.95 : 1.05), compact ? 360 : 1400);
            gsap.set(approachTitleRef.current, { clipPath: "inset(0 100% 0 0)" });
            gsap.set(cards, { x: () => travel(), opacity: 0 });
            gsap.set(cards[0], { x: 0, y: () => viewportY(), opacity: 0 });

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: approachRef.current,
                start: "top top",
                end: () => `+=${Math.round(window.innerHeight * (compact ? 2.45 : 3.05))}`,
                pin: true,
                ...triggerDefaults,
              },
            });

            timeline
              .to(approachTitleRef.current, {
                clipPath: "inset(0 0% 0 0)",
                duration: 0.7,
                ease: "none",
              })
              .to(approachTitleRef.current, {
                y: compact ? -55 : -92,
                duration: 0.45,
              });

            cards.forEach((card, index) => {
              timeline.to(card, { x: 0, y: 0, opacity: 1, duration: 0.55 }).to({}, { duration: 0.34 });
              if (index < cards.length - 1) {
                timeline.to(card, { x: () => -travel(), opacity: 0, duration: 0.5 });
              }
            });

            timeline
              .to({}, { duration: 0.2 })
              .to([approachTitleRef.current, cards[cards.length - 1]], {
                x: () => -travel(),
                opacity: 0,
                duration: 0.52,
              });
          }

          // 9. THE VISIONARIES — exact current image order with old 3D transitions.
          if (
            visionariesRef.current &&
            visionariesTitleRef.current &&
            visionariesPanelRef.current &&
            visionariesCircleRef.current &&
            visionariesImageRefs.current.length === visionaries.length &&
            visionariesContentRefs.current.length === visionaries.length
          ) {
            const imageDistance = () => Math.min(window.innerWidth * (compact ? 0.24 : 0.11), compact ? 105 : 170);
            gsap.set(visionariesTitleRef.current, { y: () => viewportY(), opacity: 0 });
            gsap.set(visionariesPanelRef.current, { y: compact ? 25 : 45, opacity: 0 });
            gsap.set(visionariesImageRefs.current, {
              opacity: 0,
              x: 0,
              rotationY: 0,
              scale: 1,
              transformPerspective: 1200,
              transformOrigin: "50% 50%",
            });
            gsap.set(visionariesContentRefs.current, { opacity: 0, y: compact ? 14 : 24 });
            gsap.set(visionariesImageRefs.current[0], { opacity: 1 });
            gsap.set(visionariesContentRefs.current[0], { opacity: 1, y: 0 });
            gsap.set(visionariesCircleRef.current, {
              rotation: 0,
              x: 0,
              scale: 1,
              transformOrigin: "50% 50%",
            });

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: visionariesRef.current,
                start: "top top",
                end: () => `+=${Math.round(window.innerHeight * (compact ? 2.15 : 2.65))}`,
                pin: true,
                ...triggerDefaults,
              },
            });

            timeline
              .to(visionariesTitleRef.current, { y: 0, opacity: 1, duration: 0.55 })
              .to(visionariesPanelRef.current, { y: 0, opacity: 1, duration: 0.55 }, "<0.2")
              .to({}, { duration: 0.25 });

            [0, 1].forEach((index) => {
              timeline
                .to(visionariesCircleRef.current, {
                  rotation: `+=360`,
                  x: index === 0 ? () => imageDistance() * 0.35 : 0,
                  scale: index === 0 ? 0.97 : 1,
                  duration: 0.85,
                  ease: "power2.inOut",
                })
                .to(
                  visionariesImageRefs.current[index],
                  {
                    x: () => imageDistance(),
                    rotationY: compact ? 58 : 82,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.72,
                  },
                  "<",
                )
                .to(
                  visionariesContentRefs.current[index],
                  { y: compact ? -16 : -26, opacity: 0, duration: 0.55 },
                  "<",
                )
                .fromTo(
                  visionariesImageRefs.current[index + 1],
                  {
                    x: () => -imageDistance(),
                    rotationY: compact ? -58 : -82,
                    opacity: 0,
                    scale: 0.95,
                  },
                  { x: 0, rotationY: 0, opacity: 1, scale: 1, duration: 0.72 },
                  "<0.2",
                )
                .to(
                  visionariesContentRefs.current[index + 1],
                  { y: 0, opacity: 1, duration: 0.55 },
                  "<",
                )
                .to({}, { duration: 0.28 });
            });
          }

          // 10. CULTURE & VALUES — pin desktop/tablet; natural flow on mobile.
          if (cultureRef.current && cultureTitleRef.current && cultureGridRef.current) {
            const cards = gsap.utils.toArray<HTMLElement>(".about-value-card", cultureRef.current);
            gsap.set(cultureTitleRef.current, { y: () => viewportY(), opacity: 0 });
            gsap.set(cultureGridRef.current, { y: () => viewportY() * 1.1, opacity: 0 });
            gsap.set(cards, {
              y: () => viewportY(),
              opacity: 0,
              rotation: compact ? 5 : 12,
              transformOrigin: "50% 50%",
            });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: cultureRef.current,
                  start: compact ? "top 82%" : "top top",
                  end: compact
                    ? "bottom 25%"
                    : () => `+=${Math.round(window.innerHeight * (conditions.tablet ? 1.55 : 1.85))}`,
                  pin: !compact,
                  pinSpacing: !compact,
                  ...triggerDefaults,
                },
              })
              .to(cultureTitleRef.current, {
                y: compact ? 0 : -48,
                opacity: 1,
                duration: 0.65,
              })
              .to(cultureGridRef.current, { y: 0, opacity: 1, duration: 0.5 }, "<0.12")
              .to(cards, {
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 0.62,
                stagger: 0.1,
                ease: "back.out(1.45)",
              })
              .to({}, { duration: compact ? 0.05 : 0.45 })
              .to(
                compact ? [] : [cultureTitleRef.current, cultureGridRef.current],
                {
                  y: () => -viewportY() * 0.9,
                  opacity: 0,
                  duration: 0.52,
                },
              );
          }

          // 11. TECHNOLOGY STATEMENT.
          if (technologyRef.current && technologyTextRef.current) {
            gsap.set(technologyTextRef.current, { y: () => viewportY(), opacity: 0 });
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: technologyRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * (compact ? 0.9 : 1.1))}`,
                  pin: true,
                  ...triggerDefaults,
                },
              })
              .to(technologyTextRef.current, { y: 0, opacity: 1, duration: 0.78 })
              .to({}, { duration: 0.45 })
              .to(technologyTextRef.current, {
                y: () => -viewportY(),
                opacity: 0,
                duration: 0.52,
              });
          }

          // 12. FINAL CTA — glow, heading, copy, button, then footer naturally follows.
          if (
            finalCtaRef.current &&
            finalGlowRef.current &&
            finalTitleRef.current &&
            finalTextRef.current &&
            finalButtonRef.current
          ) {
            gsap.set(finalGlowRef.current, { opacity: 0, scale: 0.88 });
            gsap.set([finalTitleRef.current, finalTextRef.current, finalButtonRef.current], {
              y: () => viewportY(),
              opacity: 0,
            });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: finalCtaRef.current,
                  start: compact ? "top 70%" : "top top",
                  end: compact
                    ? "bottom 25%"
                    : () => `+=${Math.round(window.innerHeight * 0.95)}`,
                  pin: !compact,
                  pinSpacing: !compact,
                  ...triggerDefaults,
                },
              })
              .to(finalGlowRef.current, { opacity: 1, scale: 1, duration: 0.55 })
              .to(finalTitleRef.current, { y: 0, opacity: 1, duration: 0.52 }, "<0.1")
              .to(finalTextRef.current, { y: 0, opacity: 1, duration: 0.46 }, "<0.16")
              .to(finalButtonRef.current, { y: 0, opacity: 1, duration: 0.46 }, "<0.16")
              .to({}, { duration: 0.42 });
          }

          const refresh = () => requestAnimationFrame(() => ScrollTrigger.refresh());
          refresh();
          void document.fonts?.ready.then(refresh);

          const images = Array.from(root.querySelectorAll("img"));
          void Promise.all(
            images.map(
              (image) =>
                new Promise<void>((resolve) => {
                  if (image.complete) {
                    resolve();
                    return;
                  }
                  const done = () => resolve();
                  image.addEventListener("load", done, { once: true });
                  image.addEventListener("error", done, { once: true });
                }),
            ),
          ).then(refresh);
        },
      );

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, [heroPathAsset.d]);

  return (
    <PageShell>
      <div ref={rootRef} className="overflow-x-clip bg-black text-white">
        {/* 1. HERO */}
        <section ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden bg-black">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-45" />
          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1367px] items-center px-5 py-24 sm:px-8 lg:px-[7.5rem]">
            <div className="relative z-20 max-w-[66rem]">
              <h1 className="font-display text-center text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em] md:text-left">
                <span ref={(node) => node && (heroWordRefs.current[0] = node)} data-motion className="inline-block">
                  Technology
                </span>{" "}
                <span
                  ref={(node) => node && (heroWordRefs.current[1] = node)}
                  data-motion
                  className="inline-block"
                  style={outlineTextStyle}
                >
                  That Works
                </span>
                <br />
                <span ref={(node) => node && (heroWordRefs.current[2] = node)} data-motion className="inline-block">
                  For Your
                </span>{" "}
                <span
                  ref={(node) => node && (heroWordRefs.current[3] = node)}
                  data-motion
                  className="inline-block"
                  style={outlineTextStyle}
                >
                  Business
                </span>
              </h1>

              <p
                ref={heroSupportRef}
                data-motion
                className="mt-7 max-w-3xl text-center text-[clamp(1rem,2vw,2.45rem)] font-semibold leading-tight md:text-left"
              >
                Pune-based, globally delivered, certified since 2020.
              </p>

              <Link
                ref={heroCtaRef}
                data-motion
                to="/contact"
                className="mx-auto mt-9 inline-flex items-center gap-3 rounded-[2.3rem] bg-[#D9D9D9] py-3 pl-6 pr-3 text-[clamp(1.2rem,2.6vw,2.65rem)] font-semibold text-black transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82E926] md:mx-0"
              >
                Get in touch
                <img src="/about/cta-arrow.svg" alt="" className="size-11 sm:size-14" />
              </Link>
            </div>

            <svg
              viewBox={heroPathAsset.viewBox}
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 size-full"
            >
              <defs>
                <linearGradient id="aboutHeroGradient" x1="0" x2="1">
                  <stop offset="0" stopColor={FIGMA_GREEN} />
                  <stop offset="1" stopColor={FIGMA_GREEN} stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                ref={orbPathRef}
                d={heroPathAsset.d}
                fill="none"
                stroke="url(#aboutHeroGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <img
              ref={orbDotRef}
              data-motion
              src="/about/orb.svg"
              alt=""
              className="pointer-events-none absolute left-0 top-0 z-10 size-11 sm:size-[3.7rem]"
            />
          </div>
        </section>

        {/* 2. BUSINESS STATEMENT */}
        <section ref={statementRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5 py-20 sm:px-10">
            <p
              ref={statementTextRef}
              data-motion
              className="max-w-[77rem] text-center text-[clamp(1.8rem,3.5vw,2.9rem)] font-semibold leading-[1.2]"
            >
              We build on-demand teams tailored to your project — reducing overhead, expanding your service portfolio, and delivering on time, every time.
            </p>
          </div>
        </section>

        {/* 3. WE SERVE CLIENTS */}
        <section ref={clientsRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5">
            <div ref={clientsContentRef} data-motion className="flex flex-col items-center gap-6 sm:flex-row">
              <h2 className="text-center text-[clamp(3rem,7vw,6rem)] font-semibold leading-none sm:text-left">
                We Serve Clients
              </h2>
              <div ref={clientsLineRef} className="h-[2px] w-[min(46vw,26rem)] bg-[#82E926]" />
            </div>
          </div>
        </section>

        {/* 4. COVERAGE */}
        <section ref={coverageRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <div className="mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-center px-5 sm:px-10">
            <div className="flex items-center gap-5">
              <div ref={coverageLineRef} className="h-[2px] w-[min(20vw,15rem)] bg-[#82E926]" />
              <h2 ref={acrossRef} data-motion className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-none" style={outlineTextStyle}>
                Across
              </h2>
            </div>
            <h2 ref={indiaRef} data-motion className="mt-3 text-[clamp(4rem,10vw,7.5rem)] font-semibold leading-[0.9]">
              India
            </h2>
            <h2
              ref={globalRef}
              data-motion
              className="mt-3 text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95]"
              style={outlineTextStyle}
            >
              Canada &amp; globally
            </h2>
          </div>
        </section>

        {/* 5. MISSION & VISION INTRO */}
        <section ref={missionIntroRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5">
            <h2
              ref={missionIntroTitleRef}
              data-motion
              className="text-center text-[clamp(3rem,8vw,8rem)] font-semibold leading-none"
            >
              MISSION &amp; VISION
            </h2>
          </div>
        </section>

        {/* 6. OUR MISSION */}
        <section ref={missionRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5 py-16">
            <div className="max-w-5xl text-center">
              <div ref={missionTopRef} data-motion className="flex flex-col items-center">
                <img src="/about/mission-goal.png" alt="Mission" className="mb-8 h-auto w-[clamp(7rem,16vw,13.5rem)]" />
                <h3 className="text-[clamp(2.5rem,4.8vw,3rem)] font-bold">Our Mission</h3>
              </div>
              <p
                ref={missionTextRef}
                data-motion
                className="mx-auto mt-8 max-w-5xl text-[clamp(1.4rem,3.3vw,2.9rem)] leading-[1.2]"
              >
                To provide top-notch, on-demand IT services that make us our clients&apos; first choice.
              </p>
            </div>
          </div>
        </section>

        {/* 7. OUR VISION */}
        <section ref={visionRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5 py-16">
            <div className="max-w-5xl text-center">
              <div ref={visionTopRef} data-motion className="flex flex-col items-center">
                <img src="/about/vision.png" alt="Vision" className="mb-8 h-auto w-[clamp(7rem,16vw,14.5rem)]" />
                <h3 className="text-[clamp(2.5rem,4.8vw,3rem)] font-bold">Our Vision</h3>
              </div>
              <p
                ref={visionTextRef}
                data-motion
                className="mx-auto mt-8 max-w-6xl text-[clamp(1.4rem,3.3vw,2.9rem)] leading-[1.2]"
              >
                A future where every business has access to quality tech solutions — on demand, within budget.
              </p>
            </div>
          </div>
        </section>

        {/* 8. OUR APPROACH */}
        <section ref={approachRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <div className="flex min-h-[100svh] flex-col items-center justify-center px-5 py-16">
            <h2
              ref={approachTitleRef}
              data-motion
              className="mb-8 text-center text-[clamp(3rem,8vw,8rem)] font-semibold leading-none"
            >
              OUR APPROACH
            </h2>
            <div className="relative grid min-h-[25rem] w-full max-w-5xl place-items-center sm:min-h-[30rem]">
              {approachItems.map((item, index) => (
                <article
                  key={item.title}
                  ref={(node) => node && (approachCardRefs.current[index] = node)}
                  data-motion
                  className="absolute inset-x-0 mx-auto flex w-full max-w-4xl flex-col items-center gap-7 text-center sm:flex-row sm:gap-12 sm:text-left"
                >
                  <img src={item.image} alt="" className="h-auto w-[clamp(8rem,19vw,15rem)] shrink-0 object-contain" />
                  <div>
                    <h3 className="text-[clamp(2.2rem,4vw,3rem)] font-bold leading-tight">{item.title}</h3>
                    <p className="mt-5 max-w-xl text-[clamp(1.35rem,3vw,2.85rem)] leading-[1.17]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. THE VISIONARIES */}
        <section ref={visionariesRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <div className="mx-auto flex min-h-[100svh] max-w-[1432px] flex-col justify-center px-4 py-12 sm:px-8 lg:py-16">
            <h2
              ref={visionariesTitleRef}
              data-motion
              className="mb-10 text-center text-[clamp(3rem,8vw,8rem)] font-semibold leading-none"
            >
              THE VISIONARIES
            </h2>

            <div
              ref={visionariesPanelRef}
              data-motion
              className="relative mx-auto grid min-h-[38rem] w-full overflow-hidden bg-[#4F4F4F] px-5 py-10 md:grid-cols-[0.92fr_1.08fr] md:px-10 lg:min-h-[54rem] lg:px-16"
            >
              <div className="relative mx-auto aspect-[0.74] h-[clamp(22rem,58vw,53rem)] w-full max-w-[31rem] self-end">
                <img
                  ref={visionariesCircleRef}
                  src="/about/visionary-circle.svg"
                  alt=""
                  className="absolute left-[5%] top-[22%] w-[92%]"
                />
                {visionaries.map((person, index) => (
                  <img
                    key={person.name}
                    ref={(node) => node && (visionariesImageRefs.current[index] = node)}
                    src={person.image}
                    alt={person.name}
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-full max-h-full w-auto max-w-full select-none object-contain"
                  />
                ))}
              </div>

              <div className="relative min-h-[28rem] self-center text-center md:min-h-[34rem] md:text-left">
                {visionaries.map((person, index) => (
                  <div
                    key={person.name}
                    ref={(node) => node && (visionariesContentRefs.current[index] = node)}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em]">The Visionaries</p>
                    <h3 className="text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.98]">{person.name}</h3>
                    <p className="mt-7 text-[clamp(1.55rem,3vw,3rem)] font-bold leading-tight">{person.role}</p>
                    <p className="mt-7 max-w-2xl text-[clamp(1rem,1.7vw,1.45rem)] leading-relaxed text-white/70">{person.experience}</p>
                    <a
                      href={person.linkedin}
                      aria-label={`${person.name} on LinkedIn`}
                      className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-lg font-semibold md:mx-0"
                    >
                      LinkedIn
                      <span className="flex size-12 items-center justify-center rounded-full bg-[#82E926]">
                        <img src="/about/cta-arrow.svg" alt="" className="size-8" />
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. CULTURE & VALUES */}
        <section ref={cultureRef} className="relative min-h-[100svh] bg-black">
          <div className="mx-auto flex min-h-[100svh] max-w-[1367px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-16">
            <h2
              ref={cultureTitleRef}
              data-motion
              className="mb-10 text-center text-[clamp(3rem,8vw,8rem)] font-semibold leading-none lg:text-left"
            >
              CULTURE &amp; VALUES
            </h2>
            <div ref={cultureGridRef} data-motion className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  tabIndex={0}
                  className="about-value-card about-flip-card h-[23rem] min-w-0 cursor-pointer rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82E926]"
                >
                  <div className="about-flip-inner">
                    <div className="about-flip-face about-flip-front">
                      <h3 className="relative z-10 text-[clamp(1.55rem,2.4vw,2rem)] font-semibold">{value.title}</h3>
                      <span className="absolute bottom-[-0.12em] right-[0.06em] text-[15rem] font-semibold leading-none text-black/20">{index + 1}</span>
                    </div>
                    <div className="about-flip-face about-flip-back">
                      <h3 className="text-xl font-semibold leading-tight">{value.heading}</h3>
                      <p className="mt-7 text-base leading-relaxed">{value.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 11. TECHNOLOGY STATEMENT */}
        <section ref={technologyRef} className="relative min-h-[100svh] bg-black">
          <div className="flex min-h-[100svh] items-center justify-center px-5">
            <h2
              ref={technologyTextRef}
              data-motion
              className="max-w-4xl text-center text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1]"
            >
              Technology Only Matters
              <br />
              When It Delivers Clarity.
            </h2>
          </div>
        </section>

        {/* 12. FINAL CTA — PageShell footer remains unchanged below this section. */}
        <section ref={finalCtaRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <img
            ref={finalGlowRef}
            src="/about/final-glow.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(75vh,66rem)] w-[min(120vw,94rem)] max-w-none -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center">
            <h2
              ref={finalTitleRef}
              data-motion
              className="text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
            >
              Let&apos;s build something that matters
            </h2>
            <p
              ref={finalTextRef}
              data-motion
              className="mt-7 max-w-4xl text-[clamp(1.3rem,3vw,2.9rem)] font-medium leading-tight"
            >
              Tell us about your project and we&apos;ll put together the right team
            </p>
            <Link
              ref={finalButtonRef}
              data-motion
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-[2.3rem] bg-[#D9D9D9] py-3 pl-6 pr-3 text-[clamp(1.2rem,2.4vw,2.9rem)] font-semibold text-black transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82E926]"
            >
              Talk to Us
              <img src="/about/cta-arrow.svg" alt="" className="size-11 sm:size-14" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
