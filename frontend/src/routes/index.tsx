import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Hero3DBackground } from "@/components/Hero3DBackground";

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

function Home() {
  // ========================================= REFS =================================================
  const heroRef = useRef<HTMLDivElement>(null);
  const heroOrbTrackRef = useRef<HTMLDivElement>(null);
  const heroOrbPathRef = useRef<SVGPathElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

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


  const heroOutlineStroke = "clamp(1px, 0.55vw, 3px)";

  const [services, setServices] = useState<any[]>([]);
  const [industries, setIndustries] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));

    fetch('http://localhost:5000/api/industries')
      .then(res => res.json())
      .then(data => setIndustries(data))
      .catch(err => console.error(err));
  }, []);
  // =================================== END REFS ==========================================

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
        const { isDesktop, isTablet, isMobile } = context.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
          isMobile: boolean;
        };
        const isPinned = isDesktop;
        const isCompact = isMobile || isTablet;

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
              end: "+=6000",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to(".about-title-main", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.3)
            .to(".about-text", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.6)
            .to(".about-btn", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.9)
            .to({}, { duration: 1.5 })
            .to(
              [".about-title-main", ".about-text", ".about-btn"],
              { opacity: 0, x: -80, duration: 0.8, ease: "power2.in" },
            )
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
        gsap.set(".service-row", { opacity: 0, x: isCompact ? 0 : 350 });

        if (isPinned) {
          const whatTl = gsap.timeline({
            scrollTrigger: {
              trigger: whatRef.current,
              start: "top top",
              end: "+=5200",
              scrub: 1,
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
              { opacity: 1, x: 0, stagger: 0.35, duration: 0.6, ease: "power3.out" },
              0.25,
            )
            .to({}, { duration: 0.8 });
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
              end: "+=1800",
              scrub: 1,
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
              start: "top top",
              end: "+=4200",
              pin: isDesktop,
              scrub: 1,
              anticipatePin: 1,
            },
          })
          .to(".quote-text", { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 3 })
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
              end: "+=3600",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
            },
          });

          caseTl.fromTo(
            caseTitleRef.current,
            { x: window.innerWidth },
            { x: travel, duration: 1.3, ease: "none" },
          );

          [1, 2, 3, 4, 5, 6].forEach((num, index) => {
            caseTl.fromTo(
              `.tag-${num}`,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1 },
              0.2 + index * 0.12,
            );
          });
        } else {
          gsap.from(".case-tag", {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            scrollTrigger: { trigger: caseRef.current, start: "top 60%" },
          });
        }

        // =====================================================
        // TESTIMONIALS — pinSpacing left at default (true) on
        // purpose: the next section must NOT overlap this one.
        // =====================================================
        gsap.set(".testimonial-card", { y: isCompact ? 40 : 200, opacity: 0 });

        const testimonialTl = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top top",
            end: "+=1400",
            scrub: 1,
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
            start: "top top",
            end: "+=4800",
            scrub: 1,
            pin: isPinned,
            anticipatePin: 1,
          },
        });

        nextTl
          .to(nextTitleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1.5 })
          .to(nextTextRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1.5 })
          .to(nextBtnRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1.5 });

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
            scrub: 1,
          },
        });
        footerTl
          .to(".footer-logo", { y: 0, opacity: 1 })
          .to(".footer-left a", { y: 0, opacity: 1, stagger: 0.1 }, 0.1)
          .to(".footer-middle a", { y: 0, opacity: 1, stagger: 0.1 }, 0.25)
          .to(".footer-contact-item", { x: 0, opacity: 1, stagger: 0.12 }, 0.4)
          .to(".footer-social", { x: 0, opacity: 1 }, 0.6)
          .to(".asteri-footer-huge-logo", { y: 0, duration: 1.5 }, 0);

        // Return a cleanup for this matchMedia context
        return () => {
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
          className="relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen"
        >
          {/* 3D Agentic Background Animation */}
          <Hero3DBackground />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-6 sm:min-h-[100dvh] lg:min-h-screen">
            <div className="flex flex-col items-center text-center font-display font-bold leading-[1.1] tracking-tight">
              <h1 className="type-display text-white">
                Engineering{" "}
                <span
                  style={{
                    color: "#000000",
                    WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
                    paintOrder: "stroke fill",
                  }}
                >
                  Digital
                </span>{" "}
                Systems
              </h1>

              <p
                className="type-display"
                style={{
                  color: "#000000",
                  WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
                  paintOrder: "stroke fill",
                }}
              >
                That Scale With
              </p>

              <div className="text-center">
                <div className="relative inline-block">
                  <p className="type-display text-white">Ambition</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ============================== ABOUT CONTENT =================================== */}
        <section
          ref={about2Ref}
          className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          {/* ABOUT BLOCK */}
          <div className="relative z-10 mx-auto w-full max-w-3xl text-center lg:absolute lg:left-1/2 lg:top-[42%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[90%] lg:text-center">
            <h2 className="about-title-main type-title text-white">
              ABOUT US
            </h2>
            <p className="about-text mt-6 type-lead text-white/85 md:mt-8">
              We are a consulting-first technology firm helping organizations modernize, unify, and
              scale their digital ecosystems; where business strategy meets real-world execution.
            </p>
            <button className="about-btn mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6">
              <span className="type-button text-black">Get In Touch</span>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center">
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
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center type-statement text-black whitespace-nowrap"
              >
                Technology, in isolation, doesn&rsquo;t scale.
              </h2>
              <h2
                ref={quote2Ref}
                className="absolute left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center type-statement text-black"
              >
                Enduring systems emerge when business, data and
                <br />
                infrastructure move in harmony.
              </h2>
            </div>
          </div>
        </section>

        {/* ========================== WHAT WE DO (title + content, single pin) ========================== */}
        <section
          ref={whatRef}
          className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:min-h-0 lg:px-0 lg:py-0"
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

              <ul className="flex w-full flex-col lg:max-h-none lg:overflow-visible">
                {services.map((s) => (
                  <li
                    key={s.sequenceNumber}
                    className="service-row group border-b border-white/8 py-2.5 transition-all duration-300 hover:translate-x-2 sm:py-3 lg:py-3.5"
                  >
                    <div className="flex items-center gap-3 sm:gap-5">
                      <div className="w-[45px] sm:w-[60px] shrink-0">
                        <span className="font-display text-xs sm:text-base font-semibold text-muted-foreground">
                          {s.sequenceNumber}.
                        </span>
                        <div className="service-line mt-1 h-px w-8 bg-white" />
                      </div>
                      <span className="min-w-0 font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg">
                        {s.title}
                      </span>
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
          className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black px-4 py-12 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:px-12 lg:py-16"
        >
          <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-between">
            <h2
              ref={industriesTitleRef}
              className="industries-title my-auto flex flex-col gap-[clamp(1.5rem,3vw,3rem)] font-display type-title uppercase tracking-tight text-white"
            >
              <div className="industries-left">Industries</div>
              <div className="industries-right ml-auto w-fit">We Serve</div>
            </h2>

            <div
              ref={industriesGridRef}
              className="industries-grid grid grid-cols-1 border-2 border-white bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-auto"
            >
              {industries.map((i, idx) => {
                const IconComp = (LucideIcons as any)[i.iconName] || LucideIcons.HelpCircle;
                return (
                  <div
                    key={i.id}
                    className={`industry-card flex min-h-[180px] items-center justify-center bg-black px-4 py-6 sm:min-h-[220px] sm:px-6 ${idx < industries.length - 1 ? "border-r border-white/50" : ""
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
          </div>
        </section>

        {/*=================================== QUOTE =================================*/}
        <section
          ref={quoteSectionRef}
          className="quote-section relative flex min-h-[65svh] items-center justify-center overflow-hidden px-6 py-20 sm:min-h-[65dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="quote-text font-display type-statement tracking-tight">
              Technology only matters
              <br />
              when it delivers clarity
            </p>
          </div>
        </section>

        {/*============================= CASE STUDIES ========================*/}
        <section
          ref={caseRef}
          className="case-studies-section relative overflow-hidden bg-black py-20 lg:flex lg:h-screen lg:items-center lg:py-0"
        >
          <div
            ref={caseTitleRef}
            className="case-title relative hidden whitespace-nowrap font-display text-[clamp(4.5rem,10vw,9.5rem)] font-bold uppercase leading-none text-white lg:block"
          >
            CASE
            <div className="case-tag type-card tag-1 absolute left-[3%] top-[70%]">
              Sales &amp; Service
              <br />
              Cloud Implementation
            </div>
            <div className="case-tag type-card tag-2 absolute left-[12%] top-[10%]">
              Warehouse
              <br />
              Management
            </div>
            STUDIES
            <div className="case-tag type-card tag-3 absolute left-[32%] top-[75%]">SAP AMC</div>
            <div className="case-tag type-card tag-4 absolute left-[47%] top-[29%]">
              Vehicle Management
              <br />
              System
            </div>
            <div className="case-tag type-card tag-5 absolute left-[57%] top-[71%]">
              Medical Claim
              <br />
              Processing-Automation
            </div>
            <div className="case-tag type-card tag-6 absolute left-[85%] top-[25%]">
              Augmented Reality-Based
              <br />
              Hospital Navigation App
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-2xl gap-3 px-6 lg:hidden">
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
          <div className="absolute w-[90vw] max-w-[1300px] h-[50vh] max-h-[700px] rounded-[40px] bg-[#65ff00] opacity-[0.12] blur-[100px] sm:blur-[140px]" />

          <div className="relative z-10 max-w-5xl text-center">
            <h2
              ref={nextTitleRef}
              className="text-white type-cta-title">
              Let&apos;s Build What&apos;s Next.
            </h2>
            <p
              ref={nextTextRef}
              className="mt-4 type-cta-subtitle text-white">
              We&apos;ll help you design the path forward.
            </p>

            <button
              ref={nextBtnRef}
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6"
            >
              <span className="type-button text-black">Get In Touch</span>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight size={28} className="text-black" strokeWidth={2.3} />
              </div>
            </button>
          </div>
        </section>
      </PageShell>
    </>
  );
}
