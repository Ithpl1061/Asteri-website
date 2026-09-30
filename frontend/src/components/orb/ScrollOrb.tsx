import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import GlowOrb from "./GlowOrb";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const ScrollOrb = () => {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!orbRef.current) return;

    gsap.to(orbRef.current, {
      motionPath: {
        path: "#orb-path",
        align: "#orb-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      <GlowOrb size={26} />
    </div>
  );
};

export default ScrollOrb;