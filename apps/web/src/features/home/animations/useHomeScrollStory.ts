import type { Service, Industry } from "@/lib/types";
import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useHomeScrollStoryParams = {
  quote1Ref: RefObject<HTMLHeadingElement | null>;
  quote2Ref: RefObject<HTMLHeadingElement | null>;
  nextTitleRef: RefObject<HTMLHeadingElement | null>;
  nextTextRef: RefObject<HTMLParagraphElement | null>;
  nextBtnRef: RefObject<HTMLButtonElement | null>;
  certifiedWeRef: RefObject<HTMLSpanElement | null>;
  certifiedReRef: RefObject<HTMLSpanElement | null>;
  certifiedCertifiRef: RefObject<HTMLDivElement | null>;
  certifiedEdRef: RefObject<HTMLDivElement | null>;
  certifiedCopyRef: RefObject<HTMLParagraphElement | null>;
  partnerCardRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  orbRef: RefObject<HTMLDivElement | null>;
  heroOrbPathRef: RefObject<SVGPathElement | null>;
  heroOrbTrackRef: RefObject<HTMLDivElement | null>;
  aboutIntroSectionRef: RefObject<HTMLElement | null>;
  about2Ref: RefObject<HTMLDivElement | null>;
  quoteRef: RefObject<HTMLDivElement | null>;
  whatRef: RefObject<HTMLDivElement | null>;
  industriesSectionRef: RefObject<HTMLDivElement | null>;
  industriesGridRef: RefObject<HTMLDivElement | null>;
  quoteSectionRef: RefObject<HTMLDivElement | null>;
  caseTitleRef: RefObject<HTMLDivElement | null>;
  caseRef: RefObject<HTMLDivElement | null>;
  certifiedSectionRef: RefObject<HTMLElement | null>;
  partnerSectionRef: RefObject<HTMLElement | null>;
  collaborationsSectionRef: RefObject<HTMLElement | null>;
  testimonialsRef: RefObject<HTMLDivElement | null>;
  nextRef: RefObject<HTMLElement | null>;
  services: Service[];
  industries: Industry[];
};

export function useHomeScrollStory({
  quote1Ref,
  quote2Ref,
  nextTitleRef,
  nextTextRef,
  nextBtnRef,
  certifiedWeRef,
  certifiedReRef,
  certifiedCertifiRef,
  certifiedEdRef,
  certifiedCopyRef,
  partnerCardRef,
  heroRef,
  orbRef,
  heroOrbPathRef,
  heroOrbTrackRef,
  aboutIntroSectionRef,
  about2Ref,
  quoteRef,
  whatRef,
  industriesSectionRef,
  industriesGridRef,
  quoteSectionRef,
  caseTitleRef,
  caseRef,
  certifiedSectionRef,
  partnerSectionRef,
  collaborationsSectionRef,
  testimonialsRef,
  nextRef,
  services,
  industries,
}: useHomeScrollStoryParams) {
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

          const point = path.getPointAtLength(
            path.getTotalLength() * Math.min(Math.max(progress, 0), 1),
          );
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
              pin: canPin(),
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
          introTl.from(".about-intro-title", {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
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
              end: pinEnd(6000),
              scrub: scrubFor(1.5),
              pin: canPin(),
              anticipatePin: 1,
            },
          });

          // The connector line + heading orb are driven by the travelling orb
          // below; this timeline only fades them out with the content.
          tl.to(".about-title-main", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.3)
            .to(".about-text", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.6)
            .to(".about-btn", { opacity: 1, x: 0, duration: 2.2, ease: "power3.out" }, 0.9)
            .to({}, { duration: 1.5 })
            .to([".about-title-main", ".about-text", ".about-btn"], {
              opacity: 0,
              x: -80,
              duration: 0.8,
              ease: "power2.in",
            })
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
            .to(
              [".about-title-main", ".about-text", ".about-btn"],
              { opacity: 0, x: -40, duration: 0.25 },
              1.15,
            )
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
        gsap.set(".service-row", {
          opacity: 0,
          x: isCompact ? 0 : 350,
          y: 0,
          force3D: true,
          willChange: "transform, opacity",
        });

        if (isPinned) {
          const whatTl = gsap.timeline({
            scrollTrigger: {
              trigger: whatRef.current,
              start: "top top",
              end: pinEnd(4400),
              scrub: scrubFor(0.3),
              pin: canPin(),
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
              pin: canPin(),
              anticipatePin: 1,
            },
          });

          industriesTl
            .fromTo(
              ".industries-left",
              { x: isCompact ? 0 : -80, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
              0,
            )
            .fromTo(
              ".industries-right",
              { x: isCompact ? 0 : 80, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
              0,
            )
            .to(
              ".industries-grid",
              {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
              },
              0.3,
            );
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
              pin: canPin(),
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
            { opacity: 0, y: isCompact ? 15 : 30 },
          );

          if (isPinned) {
            const certifiedTl = gsap.timeline({
              scrollTrigger: {
                trigger: certifiedSectionRef.current,
                start: "top top",
                end: pinEnd(2760),
                scrub: scrubFor(1),
                pin: canPin(),
                anticipatePin: 1,
              },
            });

            certifiedTl
              .to(certifiedWeRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedReRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
              .to({}, { duration: 0.6 })
              .to(certifiedCertifiRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
              })
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
              .to(
                certifiedReRef.current,
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                "+=0.1",
              )
              .to(
                certifiedCertifiRef.current,
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                "+=0.1",
              )
              .to(
                certifiedEdRef.current,
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                "+=0.1",
              )
              .to(
                certifiedCopyRef.current,
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "+=0.15",
              );
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
                pin: canPin(),
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
              collabTl.to(
                row,
                { x: () => -window.innerWidth, opacity: 0, duration: 1, ease: "power2.in" },
                t + 1.6,
              );
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
  }, [
    services.length,
    industries.length,
    quote1Ref,
    quote2Ref,
    nextTitleRef,
    nextTextRef,
    nextBtnRef,
    certifiedWeRef,
    certifiedReRef,
    certifiedCertifiRef,
    certifiedEdRef,
    certifiedCopyRef,
    partnerCardRef,
    heroRef,
    orbRef,
    heroOrbPathRef,
    heroOrbTrackRef,
    aboutIntroSectionRef,
    about2Ref,
    quoteRef,
    whatRef,
    industriesSectionRef,
    industriesGridRef,
    quoteSectionRef,
    caseTitleRef,
    caseRef,
    certifiedSectionRef,
    partnerSectionRef,
    collaborationsSectionRef,
    testimonialsRef,
    nextRef,
  ]);
}
