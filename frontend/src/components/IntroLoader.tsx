import { useEffect, useState } from "react";
import gsap from "gsap";

export default function IntroLoader() {
  const [hide, setHide] = useState(false);

    useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.set(".intro-beam", {
      opacity: 1,
      height: 0,
    });

    gsap.set(".intro-dot", {
    y: -1200,
    scale: 1,
    opacity: 1,
    });

    gsap.set(".intro-flash", {
    opacity: 0,
    });

    gsap.set(".intro-logo", {
    opacity: 0,
    scale: 0.8,
    });

    const tl = gsap.timeline({
    onComplete: () => {
    document.body.style.overflow = "auto";
    setHide(true);
    },
    });

    tl.to(
      ".intro-dot",
      {
        y: 0,
        duration: 1.2,
        ease: "power4.out",

        onUpdate() {
          const orb = document.querySelector(".intro-dot") as HTMLElement;
          const beam = document.querySelector(".intro-beam") as HTMLElement;

          if (!orb || !beam) return;

          const y = gsap.getProperty(orb, "y") as number;

          beam.style.height = `${1000 + y}px`;
        },
      },
      0
    );
    // ORB FALL
    tl.to(
      ".intro-dot",
      {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      },
      0
    )

    // IMPACT
    .to(".intro-dot", {
      scale: 1.8,
      duration: 0.1,
    })

    .to(".intro-dot", {
      scale: 1,
      duration: 0.1,
    })

    // EXPLOSION
    .to(".intro-dot", {
      scale: 30,
      duration: 0.7,
      ease: "power3.out",
    })

    // WHITE FLASH APPEARS
    .to(".intro-flash", {
      opacity: 1,
       scale: 1,
      duration: 0.10,
      ease: "power3.out",
    })

    // LOGO REVEAL
    .to(
      ".intro-logo",
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "<"
    )

    // HOLD
    .to({}, {
      duration: 4,
    })

    // FLASH DISAPPEARS
    .to(".intro-flash", {
      opacity: 0,
      duration: 1.20,
      ease: "power2.out",
    })

    // LOGO DISAPPEARS
    .to(".intro-logo", {
      opacity: 0,
      duration: 0.1,
      ease: "power2.out",
    },
    "<"
  )

    // SHRINK ORB
    .to(".intro-dot", {
      scale: 1,
      duration: 0.8,
      ease: "power3.inOut",
    })

    // // MOVE TO HERO
    // .to(".intro-dot", {
    //   x: 320,
    //   y: 40,
    //   duration: 1.4,
    //   ease: "power3.inOut",
    // })

    // HIDE LOADER
    .to(".intro-loader", {
      opacity: 0,
      duration: 0.6,
    });

    return () => {
    tl.kill();
    };
    }, []);


  if (hide) return null;

  return (
    <div className="intro-loader">
      {/* Vertical energy beam */}
      <div className="intro-beam" />

      {/* Falling orb */}
      <div className="intro-dot" />

      {/* White flash/reveal screen */}
      <div className="intro-flash" />

      {/* Logo reveal */}
      <div className="intro-logo">
        <video
          src="/Asteri Animated Logo.mp4"
          autoPlay
          muted
          playsInline
          className="w-[760px]"
        />
      </div>
    </div>
  );
}