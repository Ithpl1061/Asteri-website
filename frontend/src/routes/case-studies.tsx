import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./case-studies.css";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: "Case Studies â€” Asteri" }] }),
  component: CaseStudies,
});

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/case-studies')
      .then(res => res.json())
      .then(data => setCaseStudies(data))
      .catch(console.error);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      const heroTl = gsap.timeline();
      gsap.set(".case-hero h1", { y: 100, opacity: 0 });
      gsap.set(".case-hero p", { y: 50, opacity: 0 });
      gsap.set(".case-hero .case-contact-button", { x: -50, opacity: 0 });

      heroTl.to(".case-hero h1", { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
            .to(".case-hero p", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
            .to(".case-hero .case-contact-button", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
      const storySection = gsap.utils.toArray(".case-story")[0];
      const storyLine1 = gsap.utils.toArray(".case-story h2:nth-child(1)")[0];
      const storyLine2 = gsap.utils.toArray(".case-story h2:nth-child(2)")[0];

      if (storySection && storyLine1 && storyLine2) {
        const storyTl = gsap.timeline({
          scrollTrigger: {
            trigger: storySection as HTMLElement,
            start: "center center",
            end: "+=1500",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        storyTl.fromTo(
          storyLine1,
          { x: "-50vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out", duration: 1 },
          0
        ).fromTo(
          storyLine2,
          { x: "50vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out", duration: 1 },
          0
        ).to({}, { duration: 1 });
      }



      const prefaceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".case-preface",
          start: "center center",
          end: "+=1500",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      prefaceTl.fromTo(
        ".case-preface p",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2, ease: "power2.out", duration: 1 }
      ).to({}, { duration: 1 });
      gsap.fromTo(
        ".case-study-heading",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".case-study-heading-stage",
            start: "center center",
            end: "+=1500",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      gsap.set(".case-study-panel > h2", { y: 50, opacity: 0 });
      gsap.set(".panel-wrapper", { x: "100vw" });

      const panelTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".case-study-stage",
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      panelTl.to(".panel-wrapper", {
        x: 0,
        duration: 2,
      });

      panelTl.to(".case-study-panel > h2", {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      panelTl.to({}, { duration: 1.5 });

      const measureSection = gsap.utils.toArray(".case-measure")[0];
      const measureLine1 = gsap.utils.toArray(".case-measure h2:nth-child(1)")[0];
      const measureLine2 = gsap.utils.toArray(".case-measure h2:nth-child(2)")[0];

      if (measureSection && measureLine1 && measureLine2) {
        gsap.set([measureLine1, measureLine2], { opacity: 0 });

        const measureTl = gsap.timeline({
          scrollTrigger: {
            trigger: measureSection as HTMLElement,
            start: "center center",
            end: "+=1500",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        measureTl.fromTo(
          measureLine1,
          { x: "-50vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out", duration: 1 },
          0
        ).fromTo(
          measureLine2,
          { x: "50vw", opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out", duration: 1 },
          0
        ).to({}, { duration: 1 });
      }
      const ctaSection = gsap.utils.toArray(".case-cta")[0];
      const ctaTitle = gsap.utils.toArray(".case-cta-content h2")[0];
      const ctaText = gsap.utils.toArray(".case-cta-content p")[0];
      const ctaButton = gsap.utils.toArray(".case-talk-button")[0];

      if (ctaSection && ctaTitle && ctaText && ctaButton) {
        gsap.set([ctaTitle, ctaText, ctaButton], { x: "100vw", opacity: 0 });

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection as HTMLElement,
            start: "top top",
            end: "+=3000",
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        ctaTl.to(ctaTitle, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(ctaText, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(ctaButton, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 1.5 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <div className="case-studies-page" ref={containerRef}>
        <section className="case-hero" data-node-id="2513:451">
          <h1 className="type-display">
            Real <span>Stories.</span>
            <br />
            <span>Real</span> Results.
          </h1>
          <p className="type-lead font-semibold">How Asteri has helped businesses transform with technology.</p>
          <Link to="/contact" className="case-contact-button">
            <span>Contact Now</span>
            <img src="/figma/case-studies/contact-arrow.svg" alt="" aria-hidden />
          </Link>
        </section>

        <section className="case-story" data-node-id="2513:474">
          <h2 className="type-title">Every case study</h2>
          <h2 className="type-title">follows the same arc</h2>
        </section>

        <section className="case-preface">
          <p className="type-lead font-semibold">A real situation, our approach, and a</p>
          <p className="type-lead font-semibold">measurable outcome.</p>
        </section>

        <div className="case-study-heading-stage">
          <h2 className="case-study-heading type-title">Case Studies</h2>
        </div>

        <div className="case-study-stage">
          <div className="panel-wrapper" style={{ position: "absolute", inset: 0, backgroundColor: "#fff" }}>
            {caseStudies.map((study) => (
              <section key={study.id} className="case-study-panel" data-node-id="2513:797">
                <div className="case-panel-column case-panel-situation">
                <h3>The Situation</h3>
                <p>{study.situationText}</p>
                </div>
                <div className="case-panel-column case-panel-approach">
                <h3>The Approach</h3>
                <ul>
                  {JSON.parse(study.approachList).map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                </div>
                <div className="case-panel-column case-panel-outcome">
                <h3>The Outcome</h3>
                <p>{study.outcomeText}</p>
                </div>
                <img className="case-panel-arrow" src="/figma/case-studies/case-arrow.svg" alt="" aria-hidden />
                <h2 style={{ whiteSpace: "pre-line" }}>{study.industryName}</h2>
              </section>
            ))}
          </div>
        </div>

        <section className="case-measure">
          <h2 className="type-title">We measure,</h2>
          <h2 className="type-title">document, and prove it</h2>
        </section>

        <section className="case-cta" data-node-id="2513:1189">
          <div className="case-cta-content">
            <h2 className="type-cta-title">Let&apos;s build your success story</h2>
            <p className="type-cta-subtitle">Start a conversation and define what success looks like for your project.</p>
            <Link to="/contact" className="case-talk-button">
              <img src="/figma/case-studies/talk-to-us.png" alt="Talk to Us" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
