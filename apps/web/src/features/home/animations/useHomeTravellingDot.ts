import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useHomeTravellingDotParams = {
  heroDotRef: RefObject<HTMLSpanElement | null>;
  aboutIntroSectionRef: RefObject<HTMLElement | null>;
  aboutIntroDotRef: RefObject<HTMLSpanElement | null>;
  aboutIntroLineLeftRef: RefObject<HTMLSpanElement | null>;
  about2Ref: RefObject<HTMLDivElement | null>;
  aboutConnectorDotRef: RefObject<HTMLSpanElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
};

export function useHomeTravellingDot({
  heroDotRef,
  aboutIntroSectionRef,
  aboutIntroDotRef,
  aboutIntroLineLeftRef,
  about2Ref,
  aboutConnectorDotRef,
  heroRef,
}: useHomeTravellingDotParams) {
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

      if (
        isPinned &&
        heroDot &&
        introSection &&
        introDot &&
        introLineLeft &&
        aboutSection &&
        connectorDot
      ) {
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
          pin: canPin(),
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
  }, [
    heroDotRef,
    aboutIntroSectionRef,
    aboutIntroDotRef,
    aboutIntroLineLeftRef,
    about2Ref,
    aboutConnectorDotRef,
    heroRef,
  ]);
}
