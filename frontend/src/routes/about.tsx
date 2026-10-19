import { createFileRoute } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Search, Users, RotateCw, HeartHandshake } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import "./about-page.css";
// Geist Semi Bold for the hero sub-line (per Figma)
import "@fontsource/geist-sans/latin-600.css";

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

// Outline words in the hero headline — same style as the Home hero's green text
const aboutHeroOutline: CSSProperties = {
  color: "#000000",
  WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
  paintOrder: "stroke fill",
  display: "inline-block",
  paddingBottom: "0.1em",
};


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
        <div className="visionaries-grid mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 lg:gap-20 px-8 lg:px-12">
          {/* Visual area */}
          <div className="visionaries-visual relative h-[560px]">
            <div className="absolute inset-0">
              <div
                ref={circleRef}
                className="
                  visionaries-circle
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
                    visionaries-photo
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
          <div className="visionaries-content relative h-[560px]">
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
                <p className="type-label text-zinc-400">
                  The Visionaries
                </p>

                <h2 className="type-heading text-white">
                  {person.name}
                </h2>

                <h3 className="type-card text-zinc-300">
                  {person.role}
                </h3>

                <p className="max-w-xl type-body text-zinc-400">
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
    fetch(apiUrl('/api/team'))
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
        const r = Math.min(RADIUS, Math.hypot(b.x - a.x, b.y - a.y) / 2, Math.hypot(c.x - b.x, c.y - b.y) / 2);
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
          for (const r of Array.from(range.getClientRects())) maxRight1 = Math.max(maxRight1, r.right - c.left);
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
      dot.setAttribute("r", wrapped ? String(Math.min(14, Math.max(5, (freeW >= 30 ? freeW / 2 : xDrop) - 4))) : "14");
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
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
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
                  end: "+=203%",
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

              tlStatement.to({}, { duration: 0.4 });
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
                end: "+=257%",
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

            tlServe.to({}, { duration: 0.4 });
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
                  end: "+=203%",
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

              tlMission.to({}, { duration: 0.4 });
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
                  end: "+=203%",
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
              .to({}, { duration: 0.4 });
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
                pin: true,
                anticipatePin: 1,
              }
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
              .to(images[2], { opacity: 1, duration: 0.6 });
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
                  end: "+=254%",
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
                pin: true,
                anticipatePin: 1,
              }
            });

            tlTechHeading
              .to(techLine1Ref.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              }, 0)
              .to(techLine2Ref.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              }, 0)
              .to({}, { duration: 0.5 });
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
                  end: "+=203%",
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
          <div className="about-hero relative mx-auto min-h-[calc(100svh-6rem)] w-full max-w-[1400px] px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-start text-left">

            {/* TEXT */}
            <div className="relative z-20 max-w-full flex flex-col items-start text-left">
              {/* Figma (About hero): Inter Semi Bold 96px / 116px line height;
                  outline words have a transparent fill with a 2px #82E926 stroke.
                  Sizes scale with the viewport and hit the Figma values at 1440px. */}
              <h1
                ref={heroHeadlineRef}
                data-about-motion
                className="hero-headline font-sans font-semibold text-white max-w-full text-left"
                // Same font size as the Home hero headline (.type-display)
                style={{ fontSize: "clamp(2.75rem, 6vw, 7rem)", lineHeight: 116 / 96, letterSpacing: 0 }}
              >
                <span className="block lg:whitespace-nowrap">
                  Technology <span style={aboutHeroOutline}>That</span>
                </span>
                <span className="block lg:whitespace-nowrap">
                  <span style={aboutHeroOutline}>Works</span> For Your{" "}
                  <span ref={heroBusinessRef} style={aboutHeroOutline}>Business</span>
                </span>
              </h1>

              {/* Geist Semi Bold 37px, white, normal line height */}
              <p
                ref={heroSubRef}
                className="mt-[clamp(16px,2.4vw,34px)] text-white"
                style={{
                  fontFamily: '"Geist Sans", "Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 2.708vw, 37px)",
                  lineHeight: "normal",
                }}
              >
                Pune-based, globally delivered, certified since 2020.
              </p>

              {/* Button */}
              <button
                ref={heroCtaRef}
                data-about-motion
                className="cta-pill mt-16 sm:mt-20 transition-transform duration-300 ease-out hover:scale-105"
              >
                <span className="text-black type-button">
                  Get in touch
                </span>
                <div className="cta-pill-icon">
                  <ArrowUpRight size={20} className="text-black" strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* SVG PATH */}
            <svg
              ref={orbSvgRef}
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
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
                  M 1040 0
                  L 1040 240
                  Q 1040 280 1080 280
                  L 1240 280
                  Q 1280 280 1280 320
                  L 1280 480
                  Q 1280 520 1240 520
                  L 740 520
                  Q 700 520 700 560
                  L 700 640
                  Q 700 680 660 680
                  L -200 680
                "
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                ref={orbDotRef}
                cx="1040"
                cy="0"
                r="14"
                fill="#39FF14"
              />
            </svg>
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
          {/* TOP HEADING (SLIDES IN FROM RIGHT) */}
          <div className="w-full pl-[30vw] pr-0">
            <h2
              ref={serveClientsHeadingRef}
              className="serve-heading type-title text-white flex items-center gap-4 sm:gap-6 w-full"
            >
              <span className="shrink-0">We Serve Clients</span>
              <span className="h-[1.5px] flex-1 bg-white" />
            </h2>
          </div>

          {/* LOWER CONTENT - LEFT CORNER WITH LITTLE WHITE LINE (SLIDES IN FROM LEFT) */}
          <div
            ref={serveClientsContentRef}
            className="mt-16 sm:mt-24 flex items-start gap-4 sm:gap-6 pl-0"
          >
            <div className="w-12 sm:w-20 lg:w-28 h-[1.5px] bg-white/90 mt-5 sm:mt-8 shrink-0 serve-client-left-item" />
            <div className="flex flex-col space-y-1 sm:space-y-3 type-display text-left">
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
            className="uppercase tracking-tight"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(2.25rem, 8.88vw, 128px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            OUR APPROACH
          </h2>
        </section>

        {/* ============= OUR APPROACH CARDS SECTION ============= */}
        <section
          ref={approachCardsSectionRef}
          className="relative h-screen w-full bg-black flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden"
        >
          <div className="approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] w-full mx-auto">
            {/* Card 1: Discovery */}
            <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <Search className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Discovery</h3>
                    <p className="text-black font-semibold type-body">Understand the challenge and goals.</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <Search className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Discovery</h3>
                    <p className="text-black font-semibold type-body">Understand the challenge and goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Team Assembly */}
            <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <Users className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Team Assembly</h3>
                    <p className="text-black font-semibold type-body">Exact specialists for the job.</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <Users className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Team Assembly</h3>
                    <p className="text-black font-semibold type-body">Exact specialists for the job.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Agile Delivery */}
            <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <RotateCw className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Agile Delivery</h3>
                    <p className="text-black font-semibold type-body">Iterative sprints, continuous feedback.</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <RotateCw className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Agile Delivery</h3>
                    <p className="text-black font-semibold type-body">Iterative sprints, continuous feedback.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Support & Scale */}
            <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <HeartHandshake className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Support &amp; Scale</h3>
                    <p className="text-black font-semibold type-body">Managed support post-delivery.</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
                  <HeartHandshake className="w-14 h-14 text-[#82E926]" />
                  <div>
                    <h3 className="text-black type-card font-extrabold mb-2">Support &amp; Scale</h3>
                    <p className="text-black font-semibold type-body">Managed support post-delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============= THE VISIONARIES HEADING SECTION ============= */}
        <section
          ref={visionariesHeadingSectionRef}
          className="relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden"
        >
          <h2
            ref={visionariesHeadingRef}
            className="uppercase tracking-tight"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(2.25rem, 8.88vw, 128px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            THE VISIONARIES
          </h2>
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
          <div className="culture-wrap max-w-[1400px] w-full mx-auto px-6 sm:px-10 flex flex-col justify-center">
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center mb-6 sm:mb-10 uppercase">
              CULTURE &amp; VALUES
            </h2>

            <div className="culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* CARD 1 */}
              <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white type-card font-bold text-left">
                      Innovation
                    </h3>
                    <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                      1
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white type-card font-bold text-left z-10">
                      Innovation
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white type-body font-bold text-left">
                        We don't follow trends<br />We apply what actually works.
                      </h4>
                      <p className="text-zinc-200 type-body text-left">
                        At Asteri, innovation means finding smarter ways to solve real problems. Every solution we build is designed to move faster, cost less, and outlast the alternatives.
                      </p>
                    </div>

                    <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
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
                    <h3 className="text-white type-card font-bold text-left">
                      Integrity
                    </h3>
                    <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                      2
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white type-card font-bold text-left z-10">
                      Integrity
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white type-body font-bold text-left">
                        We say what we mean,<br />and deliver what we promise.
                      </h4>
                      <p className="text-zinc-200 type-body text-left">
                        Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.
                      </p>
                    </div>

                    <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
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
                    <h3 className="text-white type-card font-bold text-left">
                      Client-First
                    </h3>
                    <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                      3
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white type-card font-bold text-left z-10">
                      Client-First
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white type-body font-bold text-left">
                        We say what we mean,<br />and deliver what we promise.
                      </h4>
                      <p className="text-zinc-200 type-body text-left">
                        Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always.
                      </p>
                    </div>

                    <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
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
                    <h3 className="text-white type-card font-bold text-left">
                      Agility
                    </h3>
                    <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                      4
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                    <h3 className="text-white type-card font-bold text-left z-10">
                      Agility
                    </h3>

                    <div className="z-10 space-y-3 max-w-[280px]">
                      <h4 className="text-white type-body font-bold text-left">
                        Built to move fast without<br />breaking things.
                      </h4>
                      <p className="text-zinc-200 type-body text-left">
                        Markets shift. Priorities change. Our on-demand model means we can assemble, scale, and pivot your team without the lag of traditional IT engagements.
                      </p>
                    </div>

                    <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
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
          <div className="w-full max-w-[1200px] mx-auto text-center">
            <h2
              ref={techHeadingRef}
              className="text-center text-white tracking-tight"
              style={{
                color: "#FFF",
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2rem, 5.2vw, 4.875rem)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              <span ref={techLine1Ref} className="block whitespace-normal sm:whitespace-nowrap">Technology Only Matters</span>
              <span ref={techLine2Ref} className="block whitespace-normal sm:whitespace-nowrap">When It Delivers Clarity.</span>
            </h2>
          </div>
        </section>

        {/* ============= DESIGNED FOR WHAT'S NEXT SECTION ============= */}
        <section ref={nextSectionRef} className="relative h-screen w-full bg-black flex flex-col items-center justify-center px-5 overflow-hidden">
          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-7xl w-full mx-auto flex flex-col items-center justify-center px-4">
            <h2 className="next-text-item text-white type-display tracking-tight text-center sm:whitespace-nowrap">
              Designed For What’s Next.
            </h2>
            <p className="next-text-item mt-8 text-white type-lead font-semibold text-center">
              Tell us where complexity is slowing you down.
              <br />
              We’ll design what comes next.
            </p>

            <button className="next-text-item cta-pill mt-10 mx-auto font-bold hover:scale-105 transition-transform">
              <span className="text-black type-button text-center">
                Talk To Us
              </span>
              <div className="cta-pill-icon">
                <ArrowUpRight size={24} className="text-black" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
