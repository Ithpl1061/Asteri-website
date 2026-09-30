import { useRef, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "./partnership-page.css";

export const Route = createFileRoute("/Partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Asteri" },
      { name: "description", content: "Global technology partnerships, verified expertise." },
    ],
  }),
  component: Partnership,
});


function Arrow({ green = false }: { green?: boolean }) {
  return <img aria-hidden="true" className="partnership-arrow" src={green ? "/figma/partnership/asset-02.svg" : "/figma/partnership/asset-01.svg"} alt="" />;
}

function Partnership() {
  const [partnerCards, setPartnerCards] = useState<any[]>([]);
  const [ecosystem, setEcosystem] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/partnership-principles')
      .then(res => res.json())
      .then(data => setPartnerCards(data))
      .catch(console.error);

    fetch('http://localhost:5000/api/partner-ecosystem')
      .then(res => res.json())
      .then(data => {
        setEcosystem(data);
        if (data.length > 0) {
          setPartnerName(data[0].partnerName);
          setPartnerSubtitle(data[0].subtitle);
        }
      })
      .catch(console.error);
  }, []);

  const statementSectionRef = useRef<HTMLElement>(null);
  const statementLine1Ref = useRef<HTMLSpanElement>(null);
  const statementLine2Ref = useRef<HTMLSpanElement>(null);
  const proofSectionRef = useRef<HTMLElement>(null);
  const proofTextRef = useRef<HTMLParagraphElement>(null);

  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const ecosystemTitleSectionRef = useRef<HTMLElement>(null);
  const ecosystemTitleRef = useRef<HTMLHeadingElement>(null);
  const ecosystemPanelRef = useRef<HTMLDivElement>(null);
  const ecosystemCardsWrapperRef = useRef<HTMLDivElement>(null);
  const ecosystemCard1Ref = useRef<HTMLElement>(null);
  const ecosystemCard2Ref = useRef<HTMLElement>(null);

  const [partnerName, setPartnerName] = useState("Salesforce");
  const [partnerSubtitle, setPartnerSubtitle] = useState("Certified Salesforce Partner");

  const benefitsSectionRef = useRef<HTMLElement>(null);
  const benefit1Ref = useRef<HTMLParagraphElement>(null);
  const benefit2Ref = useRef<HTMLParagraphElement>(null);
  const benefit3Ref = useRef<HTMLParagraphElement>(null);

  const principlesSectionRef = useRef<HTMLElement>(null);
  const principlesTitleRef = useRef<HTMLHeadingElement>(null);

  const ctaSectionRef = useRef<HTMLElement>(null);
  const ctaHeadingRef = useRef<HTMLHeadingElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statementSectionRef.current && statementLine1Ref.current && statementLine2Ref.current) {
        gsap.set([statementLine1Ref.current, statementLine2Ref.current], {
          x: "100vw",
          opacity: 0,
        });

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: statementSectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
          },
        });

        tl1
          .to({}, { duration: 0.5 })
          .to(statementLine1Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 })
          .to(statementLine2Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1 });
      }

      if (proofSectionRef.current && proofTextRef.current) {
        gsap.set(proofTextRef.current, { x: "100vw", opacity: 0 });
        const tl2 = gsap.timeline({
          scrollTrigger: { trigger: proofSectionRef.current, start: "top top", end: "+=1500", scrub: 1, pin: true },
        });
        tl2.to(proofTextRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }).to({}, { duration: 1.5 });
      }

      if (ecosystemSectionRef.current && ecosystemTitleRef.current && ecosystemPanelRef.current && ecosystemCardsWrapperRef.current) {
        
        // Fade in title normally when it enters the viewport
        gsap.fromTo(
          ecosystemTitleRef.current,
          { y: "10vh", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ecosystemSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );

        gsap.set(ecosystemPanelRef.current, { y: "100vh" });
        gsap.set(ecosystemCard2Ref.current, { x: "100vw", opacity: 1 });

        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: ecosystemSectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const card0Name = ecosystem[0]?.partnerName || "Salesforce";
              const card0Sub = ecosystem[0]?.subtitle || "Certified Salesforce Partner";
              const card1Name = ecosystem[1]?.partnerName || "ZIONIT";
              const card1Sub = ecosystem[1]?.subtitle || "Enabling Streamlined Software Solutions";

              if (self.progress < 0.53) {
                setPartnerName(card0Name);
                setPartnerSubtitle(card0Sub);
              } else {
                setPartnerName(card1Name);
                setPartnerSubtitle(card1Sub);
              }
            }
          },
        });

        tl3
          .to({}, { duration: 1.5 }) // Hold title screen
          .to(ecosystemPanelRef.current, { y: 0, duration: 1.5, ease: "power2.inOut" }) // Slide panel up like a curtain
          .to(ecosystemTitleRef.current, { opacity: 0, duration: 0.8, ease: "power2.out" }, "<0.5") // Title fades out as panel covers it
          .to({}, { duration: 0.5 }) // Hold panel before sliding cards
          .to(ecosystemCard1Ref.current, { x: "-100vw", duration: 1, ease: "power2.inOut" }) // Salesforce slides out entirely
          .to(ecosystemCard2Ref.current, { x: 0, duration: 1, ease: "power2.inOut" }, "<") // ZionIT slides in entirely (synchronously)
          .to({}, { duration: 2 }); // Hold at the end
      }

      if (benefitsSectionRef.current && benefit1Ref.current && benefit2Ref.current && benefit3Ref.current) {
        gsap.set([benefit1Ref.current, benefit2Ref.current, benefit3Ref.current], {
          y: "20vh",
          opacity: 0,
        });

        const tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: benefitsSectionRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
          },
        });

        tl4
          .to({}, { duration: 0.5 })
          .to(benefit1Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 })
          .to(benefit2Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 })
          .to(benefit3Ref.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1 });
      }

      if (principlesSectionRef.current && principlesTitleRef.current) {
        const cards = gsap.utils.toArray(".partnership-principle-card", principlesSectionRef.current);
        
        gsap.set(principlesTitleRef.current, { y: "20vh", opacity: 0 });
        gsap.set(cards, { y: "20vh", opacity: 0 });

        const tl5 = gsap.timeline({
          scrollTrigger: {
            trigger: principlesSectionRef.current,
            start: "top top",
            end: "+=3500",
            scrub: 1,
            pin: true,
          },
        });

        tl5
          .to({}, { duration: 0.5 })
          .to(principlesTitleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.2 });

        cards.forEach((card) => {
          tl5
            .to(card as Element, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
            .to({}, { duration: 0.2 });
        });

        tl5.to({}, { duration: 1 });
      }

      if (ctaSectionRef.current && ctaHeadingRef.current && ctaTextRef.current && ctaButtonRef.current) {
        gsap.set([ctaHeadingRef.current, ctaTextRef.current, ctaButtonRef.current], {
          x: "100vw",
          opacity: 0,
        });

        const tl6 = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top top",
            end: "+=2500",
            scrub: 1,
            pin: true,
          },
        });

        tl6
          .to({}, { duration: 0.5 })
          .to(ctaHeadingRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 })
          .to(ctaTextRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 0.5 })
          .to(ctaButtonRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1 });
      }
    });

    return () => ctx.revert();
  }, [ecosystem, partnerCards]);

  return (
    <PageShell disableAnimations>
      <div className="partnership-page">
        <section className="relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen">
          <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-8 md:px-16 lg:px-24 sm:min-h-[100dvh] lg:min-h-screen">
            <div className="flex flex-col font-display font-bold leading-[0.95] tracking-tight w-full max-w-4xl mt-32 md:mt-48">
              <h1 className="type-display text-white">
                <span
                  style={{
                    color: "#000000",
                    WebkitTextStroke: "clamp(1.5px, 0.3vw, 3px) #82E926",
                    paintOrder: "stroke fill",
                  }}
                >
                  Certified
                </span>
                <br />
                Where It Counts
              </h1>
              <p className="mt-8 font-mono type-lead font-semibold text-white/90">
                Global technology partnerships, verified expertise.
              </p>
              <div className="mt-12">
                <a 
                  className="inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105" 
                  href="#ecosystem"
                >
                  Explore More <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section ref={statementSectionRef} className="partnership-statement partnership-statement--headline px-6 bg-black text-white min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden">
          <h2 className="type-title text-center">
            <span ref={statementLine1Ref} className="block">We only partner</span>
            <span ref={statementLine2Ref} className="block">where we can deliver</span>
          </h2>
        </section>
        <section ref={proofSectionRef} className="partnership-statement partnership-statement--proof bg-black text-white min-h-[75vh] flex items-center justify-center relative overflow-hidden">
          <p ref={proofTextRef} className="type-statement">Every partnership backs a real, certified implementation capability.</p>
        </section>

        <section id="ecosystem" ref={ecosystemSectionRef} className="relative h-[100vh] w-full overflow-hidden bg-black">
          
          {/* Title Layer */}
          <div className="absolute inset-0 flex items-center justify-center z-0 text-white">
            <h2 ref={ecosystemTitleRef} className="type-title" style={{ whiteSpace: "nowrap", margin: 0 }}>Our Partner Ecosystem</h2>
          </div>

          {/* Panel Layer */}
          <div ref={ecosystemPanelRef} className="partnership-partner-panel absolute inset-0 z-10 w-full h-full">
            <div className="partnership-partner-intro">
              <h3 className="type-heading">{partnerName}</h3>
              <p className="type-lead font-semibold">{partnerSubtitle}</p>
              <a className="partnership-outline-button type-button" href="/contact">Know More <Arrow green /></a>
            </div>
            <div className="partnership-partner-slider relative w-full h-full">
              <div ref={ecosystemCardsWrapperRef} className="grid place-items-center w-full h-full">
                <article ref={ecosystemCard1Ref} className="partnership-partner-card [grid-area:1/1] !m-0">
                  <img src={ecosystem[0]?.logoUrl || ""} alt={ecosystem[0]?.partnerName || ""} />
                  <p>{ecosystem[0]?.description || ""}</p>
                </article>
                <article ref={ecosystemCard2Ref} className="partnership-partner-card [grid-area:1/1] !m-0">
                  <img src={ecosystem[1]?.logoUrl || ""} alt={ecosystem[1]?.partnerName || ""} />
                  <p>{ecosystem[1]?.description || ""}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section ref={benefitsSectionRef} className="partnership-benefits">
          <p ref={benefit1Ref} className="type-title">Better licensing pricing.</p>
          <p ref={benefit2Ref} className="type-title">Faster implementation.</p>
          <p ref={benefit3Ref} className="type-title">Direct vendor escalation paths.</p>
        </section>

        <section ref={principlesSectionRef} className="partnership-principles">
          <h2 ref={principlesTitleRef} className="type-title">Partnership Principles</h2>
          <div className="partnership-principle-grid">
            {partnerCards.map((card) => (
              <article key={card.title} className="partnership-principle-card"><h3>{card.title}</h3><p>{card.description}</p></article>
            ))}
          </div>
        </section>

        <section ref={ctaSectionRef} className="partnership-cta">
          <img className="partnership-cta-art" src="/figma/partnership/raw-09.png" alt="" />
          <div className="partnership-cta-copy">
            <h2 ref={ctaHeadingRef} className="type-cta-title">Need access to a specific platform?</h2>
            <p ref={ctaTextRef} className="type-cta-subtitle">Our partnerships give you better pricing and direct escalation paths.</p>
            <Link 
              ref={ctaButtonRef}
              to="/contact" 
              className="mt-10 inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105"
            >
              Talk to Us <Arrow />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
