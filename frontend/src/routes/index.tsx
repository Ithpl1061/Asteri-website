import { createFileRoute, Link } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import * as LucideIcons from "lucide-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { GlowOrb } from "@/components/GlowOrb";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Asteri" },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Home,
});

/**
 * ============================================================================
 * ARCHITECTURE NOTE — read this before touching any scrollTrigger below
 * ============================================================================
 * Every pinned section follows ONE pattern:
 *
 *   <section ref={xRef} className="relative h-screen overflow-hidden ...">
 *      ...content...
 *   </section>
 *
 *   scrollTrigger: { trigger: xRef.current, pin: true, start: "top top",
 *                    end: "+=NNNN", scrub: 1 }
 *
 * pin:true + the default pinSpacing:true makes GSAP insert its own spacer
 * element sized to exactly (end - start). That spacer IS the scroll
 * distance — there is no second, competing height to keep in sync.
 *
 * Do NOT:
 *  - add an arbitrary h-[Nvh] class to a pinned section (that was the bug:
 *    two independent, hand-tuned numbers that drift apart -> blank gaps)
 *  - combine CSS `position: sticky` with GSAP `pin: true` on the same
 *    element (they fight for control of positioning)
 *  - use `pinSpacing: false` unless you deliberately want the next
 *    section to slide over/under this one (it did NOT want that here —
 *    that flag is what caused the Testimonials/Next-section crash)
 *
 * Mobile: heavy pinned scrubbing is disabled below 768px via
 * ScrollTrigger.matchMedia() and replaced with lightweight fade/slide
 * reveals (toggleActions, no pin, no scrub-locking) so phones get a
 * normal, fast-scrolling page instead of a desktop scrollytelling replica.
 * ============================================================================
 */

// "What we do" rows on the home page (kept here so the Services page / API data stay untouched)
const WHAT_WE_DO = [
  {
    sequenceNumber: "01",
    title: "AI Consulting & Automation with LLM",
    description:
      "We help you plan where AI fits, then build LLM-powered solutions and intelligent automation for claims, documents and workflows.",
  },
  {
    sequenceNumber: "02",
    title: "Salesforce & SAP Consulting",
    description:
      "Certified experts handle implementation, customization, integration and 24/7 support.",
  },
  {
    sequenceNumber: "03",
    title: "Software Licensing & Asset Management",
    description:
      "Authorized reseller of SAP, Oracle and leading OEM software, plus tracking of licenses and IT assets for compliance and cost control.",
  },
  {
    sequenceNumber: "04",
    title: "DPDP Compliance & Data Security",
    description:
      "We help you meet India's DPDP Act requirements and protect sensitive data through assessments, controls and ongoing monitoring.",
  },
  {
    sequenceNumber: "05",
    title: "Custom Software Development",
    description: "Secure, scalable web and mobile applications built around your business needs.",
  },
  {
    sequenceNumber: "06",
    title: "Data Analytics & Managed IT Services",
    description: "Data insights, IT support and flexible resource staffing, on demand.",
  },
];

function Home() {
  // ========================================= REFS =================================================
  const heroRef = useRef<HTMLDivElement>(null);
  const heroOrbTrackRef = useRef<HTMLDivElement>(null);
  const heroOrbPathRef = useRef<SVGPathElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const heroTextWrapRef = useRef<HTMLDivElement>(null);
  const heroLine1Ref = useRef<HTMLHeadingElement>(null);
  const heroLine2Ref = useRef<HTMLParagraphElement>(null);
  const heroLine3Ref = useRef<HTMLParagraphElement>(null);
  const heroDotRef = useRef<HTMLSpanElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  const aboutIntroSectionRef = useRef<HTMLElement>(null);
  const aboutIntroLineLeftRef = useRef<HTMLSpanElement>(null);
  const aboutIntroDotRef = useRef<HTMLSpanElement>(null);
  const aboutConnectorLineRef = useRef<HTMLSpanElement>(null);
  const aboutConnectorDotRef = useRef<HTMLSpanElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutIntroTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutHeadingPathRef = useRef<SVGPathElement>(null);
  const aboutHeadingDotRef = useRef<HTMLDivElement>(null);

  const about2Ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);
  const aboutVerticalPathRef = useRef<SVGPathElement>(null);
  const aboutVerticalDotRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const quote1Ref = useRef<HTMLHeadingElement>(null);
  const quote2Ref = useRef<HTMLHeadingElement>(null);

  const whatRef = useRef<HTMLDivElement>(null);

  const industriesSectionRef = useRef<HTMLDivElement>(null);
  const industriesTitleRef = useRef<HTMLDivElement>(null);
  const industriesGridRef = useRef<HTMLDivElement>(null);

  const quoteSectionRef = useRef<HTMLDivElement>(null);

  const caseRef = useRef<HTMLDivElement>(null);
  const caseTitleRef = useRef<HTMLDivElement>(null);

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const nextTextRef = useRef<HTMLParagraphElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const certifiedSectionRef = useRef<HTMLElement>(null);
  const certifiedWeRef = useRef<HTMLSpanElement>(null);
  const certifiedReRef = useRef<HTMLSpanElement>(null);
  const certifiedCertifiRef = useRef<HTMLDivElement>(null);
  const certifiedEdRef = useRef<HTMLDivElement>(null);
  const certifiedCopyRef = useRef<HTMLParagraphElement>(null);

  const partnerSectionRef = useRef<HTMLElement>(null);
  const partnerCardRef = useRef<HTMLDivElement>(null);
  const collaborationsSectionRef = useRef<HTMLElement>(null);


  const heroOutlineStroke = "clamp(1px, 0.55vw, 3px)";

  const [services, setServices] = useState<any[]>([]);
  const [industries, setIndustries] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    fetch(apiUrl('/api/services'))
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));

    fetch(apiUrl('/api/industries'))
      .then(res => res.json())
      .then(data => setIndustries(data))
      .catch(err => console.error(err));

    fetch(apiUrl('/api/partners'))
      .then(res => res.json())
      .then(data => setPartners(data))
      .catch(err => console.error(err));
  }, []);
  // =================================== END REFS ==========================================

  //======================================= HERO ENTRANCE (runs once on load, all breakpoints) ===========
  // The headline and the green line render statically (the line is fixed and
  // never animates); only the orb ignites beside the last word.
  useEffect(() => {
    const dot = heroDotRef.current;
    if (!dot) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap
      .timeline({ delay: 0.3 })
      .fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2.2)" });

    return () => {
      tl.kill();
    };
  }, []);

  //======================================= ABOUT CONNECTOR GEOMETRY ====================================
  // The About section's connector runs from the section top to the centre of
  // the "ABOUT US" heading, where its orb sits. The heading's position depends
  // on font size and wrapping, so measure it rather than hard-coding.
  useEffect(() => {
    const section = about2Ref.current;
    const heading = aboutHeadingRef.current;
    const line = aboutConnectorLineRef.current;
    const dot = aboutConnectorDotRef.current;
    if (!section || !heading || !line || !dot) return;

    const measure = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const h = heading.getBoundingClientRect();
      const centre = h.top + h.height / 2 - sectionTop;
      line.style.height = `${centre}px`;
      dot.style.top = `${centre}px`;
    };

    measure();
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    ro.observe(heading);
    return () => ro.disconnect();
  }, []);

  //======================================= TRAVELLING DOT + HOLDS (desktop) ===========================
  // Kept in its own effect, created once: the big animation effect below
  // re-runs when services/industries data arrives, and rebuilding these pins
  // and the dot then made the hero line/dot visibly flash after a refresh.
  // Declared before that effect so these pins are created (and refreshed) first.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isPinned = true;
      let resetTraveler: (() => void) | undefined;
      // =====================================================
      // SINGLE TRAVELLING DOT (desktop) — follows the existing green lines,
      // driven 1:1 by scroll, and only ever one visible:
      //   1. Hero: the "Ambition" dot runs right along the hero line, off-screen.
      //   2. About intro PINS with the big "ABOUT US" centred on screen. While
      //      held, the dot appears just before the title, runs left along the
      //      L to the corner, then down the L.
      //   3. After the hold it continues down the L into the About section
      //      and lands on the heading's dot as that section pins.
      // Each leg's dot lives inside its own section, so it pins/scrolls
      // exactly with the lines it rides. At the section seam both halves
      // are clipped by their sections and read as one dot.
      // =====================================================
      const heroDot = heroDotRef.current;
      const introSection = aboutIntroSectionRef.current;
      const introDot = aboutIntroDotRef.current;
      const introLineLeft = aboutIntroLineLeftRef.current;
      const aboutSection = about2Ref.current;
      const connectorDot = aboutConnectorDotRef.current;

      if (isPinned && heroDot && introSection && introDot && introLineLeft && aboutSection && connectorDot) {
        const ease = gsap.parseEase("power1.inOut");
        const PHONE = window.innerWidth < 1024; // longer runway on touch widths
        const HOLD = PHONE ? 1.7 : 1.3; // intro hold length, in viewport heights
        const ACROSS = 0.4; // share of the hold spent running left along the right line to the L corner
        const LEG_DROP = 0.5; // drop all the way to the bottom edge of the intro section (titleY + 0.5 * height = height)
        let p1 = 0; // hero leg
        let p2 = 0; // intro hold
        let p3 = 0; // intro release -> About pin

        const place = (el: HTMLElement, x: number, y: number) =>
          gsap.set(el, { x, y, xPercent: -50, yPercent: -50 });

        const update = () => {
          // 1) Hero: slide the "Ambition" dot right, past the hero's edge.
          const heroRect = heroRef.current!.getBoundingClientRect();
          const dotRect = heroDot.getBoundingClientRect();
          const currentX = (gsap.getProperty(heroDot, "x") as number) || 0;
          const restX = dotRect.left + dotRect.width / 2 - currentX;
          const distance = Math.max(heroRect.right - restX + 60, window.innerWidth - restX + 60);
          place(heroDot, ease(p1) * distance, 0);

          // 2 + 3) Intro dot, in the intro section's own coordinates.
          const sec = introSection.getBoundingClientRect();
          const line = introLineLeft.getBoundingClientRect();
          const titleY = sec.height / 2;
          const startX = sec.width; // start from the far right edge of the right-side green line
          const gutterX = window.innerWidth * 0.0925 - sec.left; // the L's vertical
          const legEndY = titleY + sec.height * LEG_DROP; // bottom edge of section line
          // Distance still to travel after the hold: rest of the L, then the
          // About connector down to the heading.
          const headingY = parseFloat(connectorDot.style.top) || 0;
          const restOfLeg = sec.height - legEndY;
          const travel = (restOfLeg + headingY) * p3;

          let ix = gutterX;
          let iy = legEndY + travel;
          if (p3 === 0) {
            if (p2 < ACROSS) {
              ix = startX + (gutterX - startX) * ease(p2 / ACROSS);
              iy = titleY;
            } else {
              iy = titleY + (legEndY - titleY) * ((p2 - ACROSS) / (1 - ACROSS));
            }
          }
          place(introDot, ix, iy);

          // About connector dot: rides from the section top to the heading.
          const aboutY = travel - restOfLeg; // 0 at the seam, headingY on arrival
          place(connectorDot, 0, Math.min(aboutY, headingY) - headingY);

          // Exactly one dot: overlap only across the seam, where each half
          // is clipped by its own section.
          const r = 12;
          heroDot.style.visibility = p2 === 0 ? "visible" : "hidden";
          introDot.style.visibility = p2 > 0 && iy <= sec.height + r ? "visible" : "hidden";
          connectorDot.style.visibility = p2 > 0 && aboutY >= -r ? "visible" : "hidden";
        };

        const heroLeg = ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: PHONE ? "+=100%" : "+=80%",
          pin: isPinned,
          anticipatePin: 1,
          onUpdate: (self) => {
            p1 = self.progress;
            update();
          },
        });
        const hold = ScrollTrigger.create({
          trigger: introSection,
          start: "top top",
          end: `+=${HOLD * 100}%`,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            p2 = self.progress;
            update();
          },
        });
        // After the hold the intro scrolls away; the About section pins
        // exactly one intro-height later.
        const release = ScrollTrigger.create({
          trigger: introSection,
          start: () => hold.end,
          end: () => hold.end + introSection.offsetHeight,
          onUpdate: (self) => {
            p3 = self.progress;
            update();
          },
        });
        const syncAll = () => {
          p1 = heroLeg.progress;
          p2 = hold.progress;
          p3 = release.progress;
          update();
        };
        ScrollTrigger.addEventListener("refresh", syncAll);
        syncAll();

        resetTraveler = () => {
          ScrollTrigger.removeEventListener("refresh", syncAll);
          for (const el of [heroDot, introDot, connectorDot]) el.style.visibility = "";
          gsap.set([heroDot, connectorDot], { x: 0, y: 0, xPercent: -50, yPercent: -50 });
        };
      }
      return () => resetTraveler?.();
    });
    return () => mm.revert();
  }, []);

  //======================================= ALL GSAP ANIMATIONS =========================================
  useEffect(() => {
    const mm = gsap.matchMedia();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---------------------------------------------------------------
    // DESKTOP / TABLET — full scrollytelling experience
    // ---------------------------------------------------------------
    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
        isShort: "(max-height: 700px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop: isDesktopMq, isMobile } = context.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
          isMobile: boolean;
        };
        // Phones and tablets run the same pinned "hold screen" scenes as desktop
        // (scaled down by CSS), so every width gets the same animations.
        const isDesktop = true;
        const isPinned = true;
        const isCompact = false;
        // Desktop keeps its eased catch-up; touch widths use a soft ~0.65s catch-up
        // so micro-stutter from touchmove events is smoothed out without feeling laggy.
        const scrubFor = (v: number | boolean) =>
          isDesktopMq ? v : typeof v === "number" ? Math.min(v, 0.65) : 0.65;
        // A phone flick covers far more distance than a wheel notch, so on touch widths
        // each pinned scene gets a longer scroll runway (same animation, slower per px).
        const pinEnd = (px: number) => `+=${isDesktopMq ? px : Math.round(px * 1.15)}`;

        // Keep each orb tied to the rendered SVG path instead of animating an
        // independent x/y offset. This also keeps it accurate when a path is
        // resized or its shape changes.
        const positionDotOnPath = (
          dot: HTMLDivElement | null,
          path: SVGPathElement | null,
          progress: number,
        ) => {
          const svg = path?.ownerSVGElement;
          const track = dot?.parentElement;
          const matrix = path?.getScreenCTM();
          if (!dot || !path || !svg || !track || !matrix) return;

          const point = path.getPointAtLength(path.getTotalLength() * Math.min(Math.max(progress, 0), 1));
          const screenPoint = svg.createSVGPoint();
          screenPoint.x = point.x;
          screenPoint.y = point.y;

          const trackBounds = track.getBoundingClientRect();
          const position = screenPoint.matrixTransform(matrix);
          gsap.set(dot, {
            zIndex: 30,
            x: position.x - trackBounds.left,
            y: position.y - trackBounds.top,
            xPercent: -50,
            yPercent: -50,
          });
        };

        if (reduceMotion) {
          // Respect the OS setting: everything just appears, no motion.
          gsap.set(
            [
              ".about-title-main",
              ".about-text",
              ".about-btn",
              ".what-content",
              ".service-row",
              ".industries-left",
              ".industries-right",
              ".industries-grid",
              ".quote-text",
              quote1Ref.current,
              quote2Ref.current,
              ".testimonials-title",
              ".testimonial-card",
              nextTitleRef.current,
              nextTextRef.current,
              nextBtnRef.current,
              certifiedWeRef.current,
              certifiedReRef.current,
              certifiedCertifiRef.current,
              certifiedEdRef.current,
              certifiedCopyRef.current,
              partnerCardRef.current,
            ],
            { opacity: 1, x: 0, y: 0, clearProps: "transform" },
          );
          return;
        }

        // =====================================================
        // HERO — orb travels the width of its own track
        // =====================================================
        if (heroRef.current && orbRef.current && heroOrbPathRef.current) {
          const heroProgress = { value: 0 };
          const getOrbTravel = () => Math.max(heroOrbTrackRef.current?.offsetWidth ?? 0, 0);
          const updateHeroOrb = () =>
            positionDotOnPath(orbRef.current, heroOrbPathRef.current, heroProgress.value);

          updateHeroOrb();
          gsap.to(heroProgress, {
            value: 1,
            ease: "none",
            onUpdate: updateHeroOrb,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: () => `+=${Math.max(getOrbTravel(), window.innerHeight)}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onRefresh: updateHeroOrb,
            },
          });
        }



        // =====================================================
        // ABOUT INTRO — title + connector lines
        // =====================================================
        if (aboutIntroSectionRef.current) {
          const introTl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutIntroSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          });
          // Only the title animates; the green lines either side are fixed
          // (no grow/shrink, so they never blink when scrolling in and out).
          introTl.from(".about-intro-title", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out" });
        }


        // =====================================================
        // ABOUT CONTENT + explosion + quotes
        // =====================================================
        if (isPinned) {
          gsap.set(".about-title-main", { opacity: 0, x: 260, y: 0 });
          gsap.set(".about-text", { opacity: 0, x: 320, y: 0 });
          gsap.set(".about-btn", { opacity: 0, x: 380, y: 0 });
          gsap.set(quote1Ref.current, { y: 200, opacity: 0 });
          gsap.set(quote2Ref.current, { y: 200, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: about2Ref.current,
              start: "top top",
              end: pinEnd(6000),
              scrub: scrubFor(1.5),
              pin: true,
              anticipatePin: 1,
            },
          });

          // The connector line + heading orb are driven by the travelling orb
          // below; this timeline only fades them out with the content.
          tl.to(".about-title-main", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.3)
            .to(".about-text", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.6)
            .to(".about-btn", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.9)
            .to({}, { duration: 1.5 })
            .to(
              [".about-title-main", ".about-text", ".about-btn"],
              { opacity: 0, x: -80, duration: 0.8, ease: "power2.in" },
            )
            .to(".about-connector", { opacity: 0, duration: 0.8, ease: "power2.in" }, "<")
            .to(quoteRef.current, { opacity: 1, duration: 0.8 }, "+=0.1")
            .to(quote1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
            .to({}, { duration: 2.2 })
            .to(quote1Ref.current, { y: -160, opacity: 0, duration: 0.8, ease: "power2.in" })
            .fromTo(
              quote2Ref.current,
              { y: 200, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
            )
            .to({}, { duration: 2.2 })
            .to(quote2Ref.current, { y: -160, opacity: 0, duration: 0.8, ease: "power2.in" });
        } else {
          gsap.set(".about-title-main", { opacity: 0, x: 80, y: 0 });
          gsap.set(".about-text", { opacity: 0, x: 100, y: 0 });
          gsap.set(".about-btn", { opacity: 0, x: 120, y: 0 });
          gsap.set(quoteRef.current, { autoAlpha: 0 });
          gsap.set(quote1Ref.current, { opacity: 0, y: 36 });
          gsap.set(quote2Ref.current, { opacity: 0, y: 36 });

          const mobileAboutTl = gsap.timeline({
            scrollTrigger: {
              trigger: about2Ref.current,
              start: "top 82%",
              end: "bottom 12%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          mobileAboutTl
            .to(".about-title-main", { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, 0.1)
            .to(".about-text", { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, 0.3)
            .to(".about-btn", { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, 0.5)
            .to([".about-title-main", ".about-text", ".about-btn"], { opacity: 0, x: -40, duration: 0.25 }, 1.15)
            .to(quoteRef.current, { autoAlpha: 1, duration: 0.2 }, 1.25)
            .to(quote1Ref.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 1.3)
            .to(quote1Ref.current, { opacity: 0, y: -28, duration: 0.3, ease: "power2.in" }, 1.95)
            .to(quote2Ref.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 2.05);
        }

        // =====================================================
        // WHAT WE DO — title shrinks + content revealed, one pin
        // =====================================================
        gsap.set(".what-content", { opacity: 0 });
        gsap.set(".what-card", { opacity: 0, scale: 0.95 });
        gsap.set(".service-row", { opacity: 0, x: isCompact ? 0 : 350, y: 0, force3D: true, willChange: "transform, opacity" });

        if (isPinned) {
          const whatTl = gsap.timeline({
            scrollTrigger: {
              trigger: whatRef.current,
              start: "top top",
              end: pinEnd(4400),
              scrub: scrubFor(0.3),
              pin: true,
              anticipatePin: 1,
            },
          });

          whatTl
            .to(".what-big-title", {
              scale: 0.42,
              x: "-25%",
              y: "-30%",
              opacity: 0,
              duration: 0.4,
              ease: "power1.inOut",
            })
            .to(".what-content", { opacity: 1, duration: 0.2, ease: "power1.out" }, 0.15)
            .to(".what-card", { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }, 0.2)
            .to(
              ".service-row",
              { opacity: 1, x: 0, y: 0, stagger: 0.35, duration: 0.6, ease: "none" },
              0.25,
            )
            .to({}, { duration: 0.15 });
        } else {
          gsap.to(".what-big-title", {
            scale: 0.55,
            y: -40,
            scrollTrigger: { trigger: whatRef.current, start: "top 60%", end: "top 20%", scrub: 1 },
          });
          gsap.to(".what-content", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: ".what-content",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
          gsap.to(".service-row", {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".what-content",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // =====================================================
        // INDUSTRIES — Single Pinned Viewport Animation
        // =====================================================
        gsap.set(".industries-grid", { x: isCompact ? 0 : "100vw", opacity: isCompact ? 1 : 0 });

        if (isPinned) {
          const industriesTl = gsap.timeline({
            scrollTrigger: {
              trigger: industriesSectionRef.current,
              start: "top top",
              end: pinEnd(1800),
              scrub: scrubFor(1),
              pin: true,
              anticipatePin: 1,
            },
          });

          industriesTl
            .fromTo(
              ".industries-left",
              { x: isCompact ? 0 : -80, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
              0
            )
            .fromTo(
              ".industries-right",
              { x: isCompact ? 0 : 80, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
              0
            )
            .to(".industries-grid", {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
            }, 0.3);
        } else {
          gsap.to(".industries-grid", {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: industriesGridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // =====================================================
        // QUOTE SECTION
        // =====================================================
        gsap.set(".quote-text", { y: isCompact ? 60 : 300, opacity: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: quoteSectionRef.current,
              start: isDesktop ? "top top" : "top 85%",
              end: isDesktop ? pinEnd(2520) : "bottom 15%",
              pin: isDesktop,
              scrub: scrubFor(1),
              anticipatePin: 1,
            },
          })
          .to(".quote-text", { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1 })
          .to(".quote-text", { y: -200, opacity: 0, duration: 1, ease: "power2.in" });

        // =====================================================
        // CASE STUDIES — title width measured, not a magic number
        // =====================================================
        if (isPinned && caseTitleRef.current) {
          const travel = () => -(caseTitleRef.current!.scrollWidth + window.innerWidth * 0.5);

          const caseTl = gsap.timeline({
            scrollTrigger: {
              trigger: caseRef.current,
              start: "top top",
              end: pinEnd(3600),
              scrub: scrubFor(1.5),
              pin: true,
              anticipatePin: 1,
            },
          });

          caseTl.fromTo(
            caseTitleRef.current,
            { x: window.innerWidth },
            { x: travel, duration: 1.3, ease: "none" },
          );
          // Case-study tags are static: they ride along with the title, no fade/scale.
        }

        // =====================================================
        // WE'RE CERTIFIED — sequential fade-in reveal
        // =====================================================
        if (certifiedSectionRef.current) {
          gsap.set(
            [
              certifiedWeRef.current,
              certifiedReRef.current,
              certifiedCertifiRef.current,
              certifiedEdRef.current,
              certifiedCopyRef.current,
            ],
            { opacity: 0, y: isCompact ? 15 : 30 }
          );

          if (isPinned) {
            const certifiedTl = gsap.timeline({
              scrollTrigger: {
                trigger: certifiedSectionRef.current,
                start: "top top",
                end: pinEnd(2760),
                scrub: scrubFor(1),
                pin: true,
                anticipatePin: 1,
              },
            });

            certifiedTl
              .to(certifiedWeRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedReRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedCertifiRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedEdRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedCopyRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" })
              .to({}, { duration: 0.6 });
          } else {
            const mobileCertifiedTl = gsap.timeline({
              scrollTrigger: {
                trigger: certifiedSectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            });

            mobileCertifiedTl
              .to(certifiedWeRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
              .to(certifiedReRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "+=0.1")
              .to(certifiedCertifiRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "+=0.1")
              .to(certifiedEdRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "+=0.1")
              .to(certifiedCopyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.15");
          }
        }


        // =====================================================
        // PLATFORMS & PARTNERS — slide in from right (from services page)
        // =====================================================
        if (partnerSectionRef.current && partnerCardRef.current) {
          gsap.set(partnerCardRef.current, { x: isCompact ? 100 : "100vw", opacity: 0 });

          if (isPinned) {
            const tlPartner = gsap.timeline({
              scrollTrigger: {
                trigger: partnerSectionRef.current,
                start: "top top",
                end: pinEnd(1140),
                scrub: true,
                pin: true,
                anticipatePin: 1,
              },
            });

            tlPartner
              .to(partnerCardRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              })
              .to({}, { duration: 1 });
          } else {
            const mobileTlPartner = gsap.timeline({
              scrollTrigger: {
                trigger: partnerSectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            });

            mobileTlPartner.to(partnerCardRef.current, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            });
          }
        }

        // =====================================================
        // VALUABLE COLLABORATIONS — screen hold / pin
        // =====================================================
        if (collaborationsSectionRef.current) {
          gsap.fromTo(
            ".collab-heading",
            { y: 70, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: collaborationsSectionRef.current,
                start: "top 85%",
                end: "top 35%",
                scrub: scrubFor(1),
              },
            },
          );
          const collabRows = gsap.utils.toArray<HTMLElement>(".collab-col");
          // Every row sits on the same centre line: the row's own offset is cancelled with yPercent.
          const ROW_CENTRES = [0.189, 0.392, 0.59, 0.792];
          collabRows.forEach((row, i) => gsap.set(row, { yPercent: (0.5 - ROW_CENTRES[i]) * 100 }));
          const collabTl = gsap.timeline({
            scrollTrigger: {
              trigger: collaborationsSectionRef.current,
              start: isPinned ? "top top" : "top 70%",
              end: isPinned ? pinEnd(3200) : "top 10%",
              scrub: scrubFor(1),
              pin: isPinned,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          // One row at a time: slides in from the right, holds, then leaves to the left as the next one arrives.
          collabRows.forEach((row, i) => {
            const t = i * 2.6;
            collabTl.fromTo(
              row,
              { x: () => window.innerWidth, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
              t,
            );
            if (i < collabRows.length - 1) {
              collabTl.to(row, { x: () => -window.innerWidth, opacity: 0, duration: 1, ease: "power2.in" }, t + 1.6);
            }
          });
          collabTl.to({}, { duration: 1 });
        }

        // =====================================================
        // TESTIMONIALS — pinSpacing left at default (true) on
        // purpose: the next section must NOT overlap this one.
        // =====================================================
        gsap.set(".testimonial-card", { y: isCompact ? 40 : 200, opacity: 0 });

        const testimonialTl = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: isPinned ? "top top" : "top 85%",
            end: isPinned ? pinEnd(1400) : "top 35%",
            scrub: scrubFor(1),
            pin: isPinned,
            anticipatePin: 1,
          },
        });

        if (isPinned) {
          testimonialTl.fromTo(
            ".testimonials-title",
            { x: window.innerWidth },
            { x: 0, ease: "power3.out" },
          );
        }
        testimonialTl.to(
          ".testimonial-card",
          { y: 0, opacity: 1, ease: "power3.out" },
          isDesktop ? 0.6 : 0,
        );

        // =====================================================
        // NEXT SECTION — "Let's Build What's Next"
        // =====================================================
        gsap.set(nextTitleRef.current, { y: isCompact ? 40 : 100, opacity: 0 });
        gsap.set(nextTextRef.current, { y: isCompact ? 30 : 80, opacity: 0 });
        gsap.set(nextBtnRef.current, { y: isCompact ? 30 : 80, opacity: 0 });

        const nextTl = gsap.timeline({
          scrollTrigger: {
            trigger: nextRef.current,
            start: isPinned ? "top top" : "top 85%",
            end: isPinned ? pinEnd(3264) : "top 20%",
            scrub: scrubFor(1),
            pin: isPinned,
            anticipatePin: 1,
          },
        });

        nextTl
          .to(nextTitleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.8 })
          .to(nextTextRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.8 })
          .to(nextBtnRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 });

        // =====================================================
        // FOOTER (unchanged logic, just cleaned up)
        // =====================================================
        gsap.set(".footer-logo", { y: 80, opacity: 0 });
        gsap.set(".footer-left a, .footer-middle a", { y: 60, opacity: 0 });
        gsap.set(".footer-contact-item, .footer-social", { x: isMobile ? 0 : 100, opacity: 0 });
        gsap.set(".asteri-footer-huge-logo", { y: isMobile ? 60 : 200 });

        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 80%",
            end: "+=50",
            scrub: scrubFor(1),
          },
        });
        footerTl
          .to(".footer-logo", { y: 0, opacity: 1 })
          .to(".footer-left a", { y: 0, opacity: 1, stagger: 0.1 }, 0.1)
          .to(".footer-middle a", { y: 0, opacity: 1, stagger: 0.1 }, 0.25)
          .to(".footer-contact-item", { x: 0, opacity: 1, stagger: 0.12 }, 0.4)
          .to(".footer-social", { x: 0, opacity: 1 }, 0.6)
          .to(".asteri-footer-huge-logo", { y: 0, duration: 1.5 }, 0);

        // Phones/tablets: the pins above are (re)built after the page data arrives, so
        // recalculate every trigger once they all exist (otherwise the last pinned
        // screens can end up with no scroll distance until something else refreshes).
        let mobileRefresh = 0;
        if (window.innerWidth < 1024) {
          mobileRefresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
        }

        // Return a cleanup for this matchMedia context
        return () => {
          window.clearTimeout(mobileRefresh);
          // gsap.matchMedia() handles killing its own triggers on revert
        };
      },
    );

    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    let viewportWidth = window.innerWidth;

    const scheduleRefresh = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };

    const handleResize = () => {
      // Mobile browsers resize the visual viewport while their address bar
      // expands or collapses. Refreshing every one of those events makes
      // scrubbed timelines stutter, so only refresh after a real width change.
      if (window.innerWidth === viewportWidth) return;
      viewportWidth = window.innerWidth;
      scheduleRefresh();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", scheduleRefresh);

    let refreshFrame: number;
    document.fonts.ready.then(() => {
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", scheduleRefresh);
      clearTimeout(refreshTimer);
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      mm.revert();
    };
  }, [services.length, industries.length]);

  //======================================= MAIN RENDER CODE =========================================
  return (
    <>
      <PageShell>

        {/* ============================== HERO =================================== */}
        <section
          ref={heroRef}
          className="relative -mt-24 min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen"
        >
          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-6 sm:min-h-[100dvh] lg:min-h-screen">
            <div
              ref={heroTextWrapRef}
              className="flex flex-col items-center text-center font-display font-bold leading-[1.1] tracking-tight will-change-transform"
            >
              <h1 ref={heroLine1Ref} className="type-display text-white pb-1">
                Certified{" "}
                <span
                  style={{
                    color: "#000000",
                    WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
                    paintOrder: "stroke fill",
                    display: "inline-block",
                    paddingBottom: "0.1em",
                  }}
                >
                  IT
                </span>{" "}
                Solutions &amp;
              </h1>

              <p
                ref={heroLine2Ref}
                className="type-display pb-1"
                style={{
                  color: "#000000",
                  WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
                  paintOrder: "stroke fill",
                  display: "inline-block",
                  paddingBottom: "0.1em",
                }}
              >
                Salesforce Partner
              </p>

              <div className="text-center">
                <div className="relative inline-block">
                  <p ref={heroLine3Ref} className="type-display text-white">in Pune</p>

                  {/* Connector: orb beside the last word, line out to the right edge */}
                  <span
                    ref={heroLineRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-[55%] -mt-[0.5px] left-[calc(100%+clamp(18px,2.8vw,40px))] h-px w-[100vw] origin-left bg-[#15EC0D]"
                  />
                  <GlowOrb
                    ref={heroDotRef}
                    className="absolute top-[55%] left-[calc(100%+clamp(18px,2.8vw,40px))] z-10 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ============================== ABOUT INTRO =================================== */}
        {/* Big title with connectors (Figma): on the right a line runs to the
            edge with an orb on it; on the left an L-line runs out to the
            gutter and down into the About content below. */}
        <section
          ref={aboutIntroSectionRef}
          className="relative flex min-h-[100svh] items-center overflow-hidden bg-black lg:h-screen lg:min-h-0"
        >
          <div className="relative flex w-full items-center">
            <span aria-hidden="true" className="block w-[9.25vw] shrink-0 lg:block" />
            <span
              ref={aboutIntroLineLeftRef}
              aria-hidden="true"
              className="about-intro-line-left block h-[1.5px] flex-1 origin-right bg-[#15EC0D] lg:block"
            />
            <h2
              className="about-intro-title relative z-10 mx-[18px] shrink-0 bg-black lg:mx-[46px]"
              style={{
                color: "#FFF",
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2.25rem, 8.88vw, 128px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              ABOUT US
            </h2>
            <span
              aria-hidden="true"
              className="about-intro-line-right block h-[1.5px] flex-1 origin-left bg-[#15EC0D] lg:block"
            />
          </div>

          {/* The travelling dot while the intro is held (desktop; positioned by GSAP). */}
          <GlowOrb
            ref={aboutIntroDotRef}
            className="absolute left-0 top-0 z-0 block lg:block"
            style={{ visibility: "hidden" }}
          />

          {/* Vertical leg of the L: from the title's centre line down to the
              section bottom, continued by the About section's connector. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[9.25vw] top-1/2 -ml-[0.75px] block w-[1.5px] bg-[#15EC0D] lg:block"
          />
        </section>

        {/* ============================== ABOUT CONTENT =================================== */}
        <section
          ref={about2Ref}
          className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          {/* Connector continuing down from the intro's L-line to the heading orb.
              Its height is measured to the heading's centre (see effect). */}
          <span
            ref={aboutConnectorLineRef}
            aria-hidden="true"
            className="about-connector pointer-events-none absolute left-[9.25vw] top-0 -ml-[0.75px] block w-[1.5px] origin-top bg-[#15EC0D] lg:block"
          />
          <GlowOrb
            ref={aboutConnectorDotRef}
            className="about-connector absolute left-[9.25vw] z-20 block -translate-x-1/2 -translate-y-1/2 lg:block"
          />

          {/* ABOUT BLOCK */}
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center lg:absolute lg:left-[16vw] lg:top-[42%] lg:mx-0 lg:w-[73vw] lg:max-w-none lg:-translate-y-1/2 lg:text-left">
            <h2 ref={aboutHeadingRef} className="about-title-main type-heading text-white">
              ABOUT US
            </h2>
            <p className="about-text mt-6 type-lead text-white/85 md:mt-8">
              We are a consulting-first technology firm helping organizations modernize, unify, and
              scale their digital ecosystems; where business strategy meets real-world execution.
            </p>
            <button className="about-btn cta-pill mt-8">
              <span className="type-button text-black">Get In Touch</span>
              <div className="cta-pill-icon">
                <ArrowUpRight size={28} className="text-black" strokeWidth={2.3} />
              </div>
            </button>
          </div>

          {/* ORB EXPANSION */}
          <div
            ref={transitionRef}
            className="absolute z-[90] rounded-full bg-primary/75 pointer-events-none"
            style={{
              width: 24,
              height: 24,
              left: "9%",
              top: "clamp(160px, 24vh, 212px)",
              opacity: 0,
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 24px oklch(0.88 0.27 142 / 0.8), 0 0 64px oklch(0.88 0.27 142 / 0.65), 0 0 128px oklch(0.88 0.27 142 / 0.4)`,
            }}
          />

          {/* WHITE EXPANSION */}
          <div
            ref={whiteRef}
            className="absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-white/85 opacity-0"
          />

          {/* QUOTE */}
          <div
            ref={quoteRef}
            className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 bg-white"
          >
            <div className="relative w-full max-w-6xl h-full">
              <h2
                ref={quote1Ref}
                className="absolute left-1/2 top-1/2 w-[88vw] -translate-x-1/2 -translate-y-1/2 text-center type-statement text-black whitespace-normal lg:w-auto lg:whitespace-nowrap"
              >
                Technology, in isolation, doesn&rsquo;t scale.
              </h2>
              <h2
                ref={quote2Ref}
                className="absolute left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center type-statement text-black text-balance"
              >
                Enduring systems emerge when business, data and infrastructure move in harmony.
              </h2>
            </div>
          </div>
        </section>

        {/* ========================== WHAT WE DO (title + content, single pin) ========================== */}
        <section
          ref={whatRef}
          className="what-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:min-h-0 lg:px-0 lg:py-0"
        >
          <h2 className="what-big-title relative z-10 mb-10 text-center font-display type-title uppercase text-white lg:absolute lg:mb-0 lg:whitespace-nowrap">
            WHAT WE DO
          </h2>

          <div className="what-content relative flex w-full items-center justify-center lg:absolute lg:inset-0 lg:w-auto lg:px-6 xl:px-10">
            <div className="mx-auto max-w-6xl w-full grid gap-6 lg:gap-8 lg:grid-cols-[320px_1fr] items-center">
              <div className="what-card relative hidden lg:block h-[420px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60" />
                <img
                  src="/What we do.png"
                  alt="What We Do"
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                />
              </div>

              <ul className="what-list flex w-full flex-col lg:max-h-none lg:overflow-visible">
                {WHAT_WE_DO.map((s) => (
                  <li
                    key={s.sequenceNumber}
                    className="service-row group border-b border-white/8 py-2.5 transition-[translate] duration-300 hover:translate-x-2 sm:py-3 lg:py-3.5"
                  >
                    <div className="flex items-center gap-3 sm:gap-5">
                      <div className="w-[45px] sm:w-[60px] shrink-0">
                        <span className="font-display text-xs sm:text-base font-semibold text-muted-foreground">
                          {s.sequenceNumber}.
                        </span>
                        <div className="service-line mt-1 h-px w-8 bg-white" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg">
                          {s.title}
                        </span>
                        {/* Description is revealed on hover/focus (always visible below lg, where there is no hover) */}
                        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 max-lg:grid-rows-[1fr] max-lg:opacity-100">
                          <p className="min-h-0 overflow-hidden max-w-[46rem] font-sans text-xs font-normal leading-snug text-muted-foreground sm:text-sm">
                            <span className="mt-1 block">{s.description}</span>
                          </p>
                        </div>
                      </div>
                      <a
                        href="/services"
                        className="ml-auto flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-primary hover:text-black hover:rotate-45 hover:scale-110"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================= INDUSTRIES — PINNED VIEWPORT ============================*/}
        <section
          ref={industriesSectionRef}
          className="home-industries relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black py-6 sm:min-h-[100dvh] sm:py-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:py-10"
        >
          <div className="w-full px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between mb-4 lg:mb-6">
            <h2
              ref={industriesTitleRef}
              className="industries-title my-auto flex flex-col gap-[clamp(1rem,2.5vw,2.5rem)] uppercase tracking-tight text-white"
              style={{
                color: "#FFF",
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2.25rem, 8.88vw, 128px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              <div className="industries-left">Industries</div>
              <div className="industries-right ml-auto w-fit">We Serve</div>
            </h2>
          </div>

          <div
            ref={industriesGridRef}
            className="industries-grid w-full grid grid-cols-1 border-y border-white bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-auto"
          >
            {industries.map((i, idx) => {
              const IconComp = (LucideIcons as any)[i.iconName] || LucideIcons.HelpCircle;
              return (
                <div
                  key={i.id}
                  className={`industry-card flex min-h-[163px] items-center justify-center bg-black px-4 py-[23px] sm:min-h-[183px] sm:px-6 ${idx < industries.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/50" : ""
                    }`}
                >
                  <div className="text-center">
                    <IconComp className="mx-auto mb-3 sm:mb-4 h-9 w-9 sm:h-10 sm:w-10 text-primary" />
                    <div className="type-card text-white">
                      {i.titleLine1}
                      {i.titleLine2 ? <><br />{i.titleLine2}</> : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/*=================================== QUOTE =================================*/}
        <section
          ref={quoteSectionRef}
          className="quote-section relative flex min-h-[65svh] items-center justify-center overflow-hidden px-6 py-20 sm:min-h-[65dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p
              className="quote-text tracking-tight text-center"
              style={{
                color: "#FFF",
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Technology only matters
              <br />
              when it delivers clarity
            </p>
          </div>
        </section>

        {/*============================= CASE STUDIES ========================*/}
        <section
          ref={caseRef}
          className="case-studies-section relative flex h-[100svh] items-center overflow-hidden bg-black py-0 lg:h-screen"
        >
          <div
            ref={caseTitleRef}
            className="case-title relative block whitespace-nowrap uppercase text-white"
            style={{
              color: "#FFF",
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(4.5rem, 25vw, 481px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            CASE
            <div className="case-tag type-card tag-1 absolute left-[-4%] top-[57%]">
              Sales &amp; Service
              <br />
              Cloud Implementation
            </div>
            <div className="case-tag type-card tag-2 absolute left-[8%] top-[2%]">
              Warehouse
              <br />
              Management
            </div>
            STUDIES
            <div className="case-tag type-card tag-3 absolute left-[28%] top-[62%]">SAP AMC</div>
            <div className="case-tag type-card tag-4 absolute left-[41%] top-[36%]">
              Vehicle Management
              <br />
              System
            </div>
            <div className="case-tag type-card tag-5 absolute left-[62%] top-[54%]">
              Medical Claim
              <br />
              Processing-Automation
            </div>
            <div className="case-tag type-card tag-6 absolute left-[84%] top-[13%]">
              Augmented Reality-Based
              <br />
              Hospital Navigation App
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-2xl gap-3 px-6">
            <h2 className="mb-5 text-center font-display text-[clamp(2.5rem,13vw,5.5rem)] font-bold uppercase leading-[0.82] text-white">
              Case Studies
            </h2>
            <div className="case-tag type-card static w-fit max-w-full justify-self-start">
              Sales &amp; Service
              <br />
              Cloud Implementation
            </div>
            <div className="case-tag type-card static w-fit max-w-full justify-self-end">
              Warehouse
              <br />
              Management
            </div>
            <div className="case-tag type-card static w-fit max-w-full justify-self-start">SAP AMC</div>
            <div className="case-tag type-card static w-fit max-w-full justify-self-end">
              Vehicle Management
              <br />
              System
            </div>
            <div className="case-tag type-card static w-fit max-w-full justify-self-start">
              Medical Claim
              <br />
              Processing-Automation
            </div>
            <div className="case-tag type-card static w-fit max-w-full justify-self-end">
              Augmented Reality-Based
              <br />
              Hospital Navigation App
            </div>
          </div>
        </section>

        {/*============================= WE'RE CERTIFIED ======================*/}
        <section
          ref={certifiedSectionRef}
          className="certified-section relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16 lg:h-screen lg:py-0"
        >
          <div
            className="relative w-fit font-sans font-bold text-white"
            style={
              {
                "--fs": "clamp(72px, min(20.76vw, 299px, 32vh), 299px)",
                fontSize: "var(--fs)",
                lineHeight: 0.833,
              } as CSSProperties
            }
          >
            <div>
              <span ref={certifiedWeRef} className="inline-block will-change-transform">we</span><span ref={certifiedReRef} className="inline-block will-change-transform">’re</span>
            </div>
            <div ref={certifiedCertifiRef} className="will-change-transform">certifi</div>
            <div ref={certifiedEdRef} className="will-change-transform">ed</div>
            <p
              ref={certifiedCopyRef}
              className="certified-copy mt-6 max-w-[34rem] font-sans text-base font-semibold text-white will-change-transform lg:absolute lg:mt-0 lg:max-w-none"
            >
              We Work With Globally Recognized Technologies And Certified Solutions To Deliver
              Secure, Compliant, And Future-Ready Systems.
            </p>
          </div>
        </section>

        {/*============================= PLATFORMS & PARTNERS ================*/}
        <section
          ref={partnerSectionRef}
          className="platforms-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 lg:h-screen lg:min-h-0 lg:px-[3.33vw] lg:py-0"
        >
          <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center translate-y-[1%]">
            {/* Header: Centered title with green pill next arrow on the right */}
            <div className="relative flex w-full items-center justify-center pb-5 lg:pb-6">
              <h2
                className="type-title text-center text-white !text-[clamp(3rem,calc(2.8vw+20px),4.5rem)] font-bold uppercase tracking-tight lg:whitespace-nowrap mb-0"
                style={{ fontSize: "calc(clamp(1.75rem, 2.8vw, 3.25rem) + 20px)" }}
              >
                PLATFORMS &amp; PARTNERS
              </h2>
              <Link
                to="/Partnership"
                aria-label="View all platforms and partners"
                className="!absolute !right-0 !top-1/2 !-translate-y-1/2 hidden md:flex overflow-hidden rounded-full border-2 border-[#8AF500] transition-transform hover:scale-105"
              >
                <span className="grid h-12 w-16 place-items-center text-[#8AF500] lg:h-14 lg:w-20">
                  <ArrowLeft size={34} strokeWidth={2} />
                </span>
                <span className="grid h-12 w-16 place-items-center bg-[#F3F3F3] text-[#8AF500] lg:h-14 lg:w-20">
                  <ArrowRight size={34} strokeWidth={2} />
                </span>
              </Link>
            </div>

            {/* Cards container: Single unified rounded container with card height reduced by 4% */}
            <div
              ref={partnerCardRef}
              className="platform-cards relative w-full max-w-[1400px] overflow-hidden rounded-[20px] bg-black will-change-transform grid grid-cols-2 md:grid-cols-4 gap-[2px]"
              style={{
                gridAutoRows: "225px",
              }}
            >
              {[
                { src: "/Salesforce.png", alt: "Salesforce", w: "58%" },
                { src: "/ManageEngine logo.png", alt: "ManageEngine", w: "91%" },
                { src: "/zoho logo.png", alt: "Zoho", w: "56%" },
                { src: "/aws logo.png", alt: "AWS", w: "56%" },
                { src: "/Shipsy_Logo 1.png", alt: "Shipsy", w: "84.5%" },
                { src: "/savex.png", alt: "Savex Technologies", w: "67%" },
                { src: "/figma/home/partners-logo2.png", alt: "Partner", w: "78%" },
                { src: "/sap logo.png", alt: "SAP", w: "62%" },
              ].map((p, idx) => (
                <figure
                  key={p.alt || idx}
                  className="m-0 flex items-center justify-center bg-[#d9d9d9] w-full h-full p-4"
                  style={{ margin: 0, background: "#d9d9d9" }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="max-h-[58%] max-w-[72%] object-contain"
                    style={{ width: p.w }}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Breathing room between the partner cards and the collaborations section */}
        <div className="hidden h-[16vh] w-full bg-black lg:block" aria-hidden="true" />

        {/*============================= VALUABLE COLLABORATIONS ==============*/}
        <section
          ref={collaborationsSectionRef}
          className="collaborations-section relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-12 sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          <div className="relative w-full -translate-y-[3%]">
            <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-center lg:px-[3.92vw]">
              <h2 className="collab-heading font-sans font-semibold uppercase text-white text-[clamp(2.2rem,4.4vw,64px)] leading-[1.14]">
                Valuable
                <br />
                Customers
              </h2>
            </div>

            {/* Logo grid — one row at a time slides in from the right, then leaves for the next */}
            <div className="collab-logos-container relative mt-4 sm:mt-6 w-full overflow-hidden">
              <div
                className="collab-logos-wrapper relative mx-auto"
                style={{ "--collab-w": "min(100vw, 2400px)", width: "var(--collab-w)", height: "calc(var(--collab-w) * 0.24)" } as CSSProperties}
              >
                <div className="collab-logos-inner absolute left-0 top-1/2 w-full -translate-y-1/2" style={{ aspectRatio: "2 / 1" }}>
                  {[[0,29],[29,50.4],[50.4,67.3],[67.3,100]].map(([from, to], i) => (
                    <div key={`collab-col-${i}`} className="collab-col absolute inset-0" style={{ opacity: 0 }}>
                      <img
                        src="/figma/home/collaborations-logos.png"
                        alt={i === 0 ? "Our collaborators: Tata Communications, Humanata, Compulink, Steel1, intellimation.ai, Apexpertise, Roche, Themis Medicare, Symbiosis International, POSCO, Amdocs, Xoriant, CitiusTech, Indian Army 512 Army Base Workshop, GA Steel Tech and Netafim" : ""}
                        loading="eager"
                        className="collab-logo-img pointer-events-none h-full w-full max-w-none select-none"
                        style={{ clipPath: `inset(${from}% 0 ${100 - to}% 0)` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*============================= TESTIMONIALS =========================*/}
        <section
          ref={testimonialsRef}
          className="testimonials-section relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:h-screen lg:min-h-0"
        >
          <div className="flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 py-16 sm:min-h-[100dvh] lg:h-full lg:min-h-0 lg:gap-10">
            <h2 className="testimonials-title text-center font-display type-title uppercase text-white lg:whitespace-nowrap">
              TESTIMONIALS
            </h2>

            <div className="testimonial-card relative mx-auto w-full max-w-xl rounded-[24px] bg-[#d9d9d9d5] p-5 sm:rounded-[40px] sm:p-10">
              <p className="type-lead text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae
                pellentesque sem placerat in. Cursus mi pretium tellus duis convallis tempus leo.
              </p>
              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-black shrink-0" />
                <div>
                  <h3 className="type-lead font-bold text-black">Lorem Ipsum</h3>
                  <p className="type-body text-black">Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*======================= "Let's design the systems" =================*/}
        <section
          ref={nextRef}
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          <div className="relative z-10 max-w-5xl text-center">
            <h2
              ref={nextTitleRef}
              className="text-white type-display"
            >
              Let&apos;s Build What&apos;s Next.
            </h2>
            <p
              ref={nextTextRef}
              className="mt-4 type-lead font-semibold text-white"
            >
              We&apos;ll help you design the path forward.
            </p>

            <button
              ref={nextBtnRef}
              className="cta-pill mt-8"
            >
              <span className="type-button text-black">Get In Touch</span>
              <div className="cta-pill-icon">
                <ArrowUpRight size={28} className="text-black" strokeWidth={2.3} />
              </div>
            </button>
          </div>
        </section>
      </PageShell>
    </>
  );
}
