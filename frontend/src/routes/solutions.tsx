import { createFileRoute, Link } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./solutions-page.css";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Asteri" },
      {
        name: "description",
        content: "Solutions shaped around your specific business context and constraints.",
      },
    ],
  }),
  component: Solutions,
});




function ActionButton({ children, href, dark = false }: { children: string; href: string; dark?: boolean }) {
  return (
    <Link to={href} className={`solutions-action${dark ? " solutions-action--dark" : ""}`}>
      <span className="type-button">{children}</span>
      <i aria-hidden="true"><ArrowUpRight /></i>
    </Link>
  );
}

const DEFAULT_OUTCOMES = [
  { title: "Faster Processes", description: "Cut time spent on manual, repetitive tasks" },
  { title: "Reduced Costs", description: "Lower overhead through smarter resourcing" },
  { title: "Higher Visibility", description: "Real-time data across every team and system" },
  { title: "Measurable Growth", description: "Outcomes tracked, documented, and proven" },
];

function Solutions() {
  const [outcomes, setOutcomes] = useState<any[]>(DEFAULT_OUTCOMES);

  useEffect(() => {
    fetch(apiUrl('/api/solutions-outcomes'))
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setOutcomes(data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, [outcomes]);

  const containerRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const introStatementSectionRef = useRef<HTMLElement>(null);
  const introStatementTextRef = useRef<HTMLParagraphElement>(null);
  const coreSectionRef = useRef<HTMLElement>(null);
  const outcomesSubHeadingSectionRef = useRef<HTMLElement>(null);
  const outcomesSectionRef = useRef<HTMLElement>(null);
  const playbookSectionRef = useRef<HTMLElement>(null);
  const statementSectionRef = useRef<HTMLElement>(null);
  const statementTextRef = useRef<HTMLParagraphElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  const notAGenericRef = useRef<HTMLSpanElement>(null);
  const playbookRef = useRef<HTMLSpanElement>(null);
  const outcomesSubHeadingRef = useRef<HTMLHeadingElement>(null);
  const solutiRef = useRef<HTMLDivElement>(null);
  const onRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      if (introSectionRef.current && solutiRef.current && onRef.current && textRef.current) {
        // Initial states for animation
        gsap.set(solutiRef.current, { y: -150, opacity: 0 });
        gsap.set(onRef.current, { y: 150, opacity: 0 });
        gsap.set(textRef.current, { x: 150, opacity: 0 });

        // Hero entrance animation (mimicking footer style)
        const heroTitle = container.querySelector(".solutions-hero h1");
        const heroDesc = container.querySelector(".solutions-hero p");
        const heroBtn = container.querySelector(".solutions-hero a");

        if (heroTitle && heroDesc && heroBtn) {
          gsap.set(heroTitle, { y: 120, opacity: 0 });
          gsap.set(heroDesc, { y: 80, opacity: 0 });
          gsap.set(heroBtn, { x: 150, opacity: 0 });

          const heroTl = gsap.timeline();
          heroTl.to(heroTitle, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 0.2)
                .to(heroDesc, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.4)
                .to(heroBtn, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.6);
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introSectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
          }
        });

        tl.to(solutiRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0)
          .to(onRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0)
          .to(textRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.5)
          .to({}, { duration: 1 }); // empty space to let it hold at the end
      }

      // Intro Statement slide & pin animation
      if (introStatementSectionRef.current && introStatementTextRef.current) {
        gsap.set(introStatementTextRef.current, { x: "100vw", opacity: 0 });

        const tlIntroStatement = gsap.timeline({
          scrollTrigger: {
            trigger: introStatementSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlIntroStatement
          .to(introStatementTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1 });
      }

      // Core services animation
      if (coreSectionRef.current) {
        const coreCards = gsap.utils.toArray<HTMLElement>(".core-card");
        const container = (coreSectionRef.current.querySelector(".max-w-\\[1600px\\]") as HTMLElement) || coreSectionRef.current;
        
        // Calculate offset to center each card inside the section container
        const getCenterOffset = (card: HTMLElement) => {
          const containerWidth = container.offsetWidth;
          const cardLeft = card.offsetLeft;
          const cardWidth = card.offsetWidth;
          return (containerWidth - cardWidth) / 2 - cardLeft;
        };

        gsap.set(coreCards, { x: "100vw", opacity: 0 });

        const coreTl = gsap.timeline({
          scrollTrigger: {
            trigger: coreSectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        coreCards.forEach((card, i) => {
          const targetX = () => getCenterOffset(card);

          if (i === 0) {
            coreTl.to(card, {
              x: targetX,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
            coreTl.to({}, { duration: 1 }); // hold card 1 in center
          } else {
            const prevCard = coreCards[i - 1];
            coreTl.to(prevCard, {
              x: "-100vw",
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
            });
            coreTl.to(card, {
              x: targetX,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }, "<"); // card 2 enters to center as card 1 exits
            coreTl.to({}, { duration: 1 }); // hold card 2 in center
          }
        });
      }

      // Flip flop animation for outcomes subheading (OUTCOMES)
      if (outcomesSubHeadingSectionRef.current && outcomesSubHeadingRef.current) {
        gsap.set(outcomesSubHeadingRef.current, { rotationX: 90, y: 50, opacity: 0, transformOrigin: "50% 50%" });

        const tlOutcomesSubHeading = gsap.timeline({
          scrollTrigger: {
            trigger: outcomesSubHeadingSectionRef.current,
            start: "center center",
            end: "+=1000",
            scrub: true,
            pin: true,
          }
        });

        tlOutcomesSubHeading.to(outcomesSubHeadingRef.current, {
          rotationX: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }).to({}, { duration: 1 });
      }

      // Outcomes moving dot animation and synchronized text fade
      if (outcomesSectionRef.current && dotRef.current) {
        const olElement = outcomesSectionRef.current.querySelector("ol");
        if (olElement) {
          const outcomeItems = Array.from(olElement.querySelectorAll<HTMLLIElement>("li"));
          const n = outcomeItems.length;

          if (n > 0) {
            const totalDuration = Math.max(1, n - 1);
            const outcomesTl = gsap.timeline({
              scrollTrigger: {
                trigger: olElement,
                start: "top center",
                end: "bottom center",
                scrub: true,
              }
            });

            // Dot moves continuously from top to bottom
            outcomesTl.to(dotRef.current, {
              top: "calc(100% - clamp(65px, 7.5vw, 125px))",
              ease: "none",
              duration: totalDuration,
            }, 0);

            // Initial state: First item is active, others are subtly dimmed
            gsap.set(outcomeItems[0], { opacity: 1 });
            for (let i = 1; i < n; i++) {
              gsap.set(outcomeItems[i], { opacity: 0.25 });
            }

            // Crossfade items as the dot travels from item i to item i+1
            for (let i = 0; i < n - 1; i++) {
              const transitionStart = i + 0.35;
              outcomesTl.to(outcomeItems[i], { opacity: 0.3, ease: "power1.inOut", duration: 0.65 }, transitionStart);
              outcomesTl.to(outcomeItems[i + 1], { opacity: 1, ease: "power1.inOut", duration: 0.65 }, transitionStart);
            }
          }
        }
      }

      // Playbook left/right scroll animation
      if (playbookSectionRef.current && notAGenericRef.current && playbookRef.current) {
        gsap.set(notAGenericRef.current, { x: "-100vw" });
        gsap.set(playbookRef.current, { x: "100vw" });

        const tlPlaybook = gsap.timeline({
          scrollTrigger: {
            trigger: playbookSectionRef.current,
            start: "center center",
            end: "+=700",
            scrub: true,
            pin: true,
          }
        });

        tlPlaybook.to(notAGenericRef.current, {
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(playbookRef.current, {
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to({}, { duration: 1 });
      }

      // Statement slide & pin animation
      if (statementSectionRef.current && statementTextRef.current) {
        gsap.set(statementTextRef.current, { x: "100vw", opacity: 0 });

        const tlStatement = gsap.timeline({
          scrollTrigger: {
            trigger: statementSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlStatement
          .to(statementTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 1 });
      }

      // CTA stagger animation
      if (ctaSectionRef.current) {
        const ctaTitle = ctaSectionRef.current.querySelector("h2");
        const ctaText = ctaSectionRef.current.querySelector("p");
        const ctaBtn = ctaSectionRef.current.querySelector("a");
        
        if (ctaTitle && ctaText && ctaBtn) {
          gsap.set([ctaTitle, ctaText, ctaBtn], { x: "100vw", opacity: 0 });

          const ctaTl = gsap.timeline({
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "top top",
              end: "+=1000",
              scrub: true,
              pin: true,
            }
          });

          ctaTl.to(ctaTitle, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
               .to({}, { duration: 0.5 })
               .to(ctaText, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
               .to({}, { duration: 0.5 })
               .to(ctaBtn, { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
               .to({}, { duration: 1.5 });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <div className="solutions-page" ref={containerRef}>
        <section className="solutions-hero">
          <h1 className="type-display">Transformation<br /><span>at&nbsp;&nbsp;Every</span> Layer</h1>
          <p className="type-lead font-semibold">From startup MVP to enterprise modernization.</p>
          <ActionButton href="/contact">Explore More</ActionButton>
        </section>

        <section ref={introSectionRef} className="py-20 px-6 min-h-[clamp(500px,100vh,1000px)] flex items-center justify-center overflow-hidden w-full bg-black">
          <div className="flex flex-col items-start w-fit mx-auto text-white">
            <div ref={solutiRef} className="text-[6rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-bold leading-[0.8] tracking-tighter -ml-2">soluti</div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-2 md:mt-4">
              <div ref={onRef} className="text-[6rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-bold leading-[0.8] tracking-tighter -ml-2">on</div>
              <div ref={textRef} className="flex flex-col text-left">
                <strong className="type-lead font-bold mb-1 block">Whatever stage you&apos;re at</strong>
                <p className="type-body m-0 max-w-[320px] text-white/90">
                  We have a proven path to<br />get you there faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={introStatementSectionRef}
          className="min-h-screen flex items-center justify-center relative w-full overflow-hidden text-center px-6"
        >
          <p
            ref={introStatementTextRef}
            className="type-statement max-w-[1120px] mx-auto text-white text-center"
          >
            Every solution is shaped by your specific business context and constraints.
          </p>
        </section>

        <section ref={coreSectionRef} className="solutions-core">
          <h2 className="type-title">CORE SERVICES</h2>
          
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 -translate-y-8">
            
            {/* Card 1: Enterprise */}
            <div className="core-card rounded-xl bg-[#403f3f] p-6 sm:p-8 lg:p-6 xl:p-8 relative top-[25px] overflow-hidden flex flex-col items-start text-left w-full lg:w-[calc(100%+20px)] max-w-[920px] shadow-2xl">
              <div className="w-full mb-3 sm:mb-4">
                <div className="text-white font-bold tracking-tighter" style={{ lineHeight: 0.85 }}>
                  <div className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[4.25rem] xl:text-[5.5rem] 2xl:text-[6.5rem]">Enterpr</div>
                  <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mt-3 sm:mt-4">
                    <span className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[4.25rem] xl:text-[5.5rem] 2xl:text-[6.5rem]">ise</span>
                    
                    <div className="flex flex-col pb-1 sm:pb-2 md:pb-2 lg:pb-1 xl:pb-1.5">
                      <h3 className="text-white text-lg sm:text-xl md:text-[1.4rem] lg:text-lg xl:text-xl font-bold mb-1 leading-tight tracking-[0.015em]">Digital Transformation</h3>
                      <p className="text-[#82e926] text-sm sm:text-base md:text-[1rem] lg:text-sm xl:text-base font-medium leading-tight">Modernize without the<br className="hidden sm:block" /> disruption.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white text-sm sm:text-base leading-relaxed max-w-[800px] mb-5 sm:mb-6">
                We help you automate manual processes, retire legacy systems, and rebuild
                around a digital-first operating model — without bringing your business to a
                halt mid-transition. Every transformation roadmap is built around your existing
                constraints, not a generic best-practices template.
              </p>

              <Link to="/contact" className="inline-flex items-center gap-4 pl-6 pr-2 py-2 border-[2.5px] border-[#82e926] rounded-full text-white text-[0.9rem] md:text-[1.1rem] font-bold hover:bg-[#82e926] hover:text-black transition-all group mt-auto">
                Explore More
                <div className="w-[36px] h-[36px] bg-[#82e926] rounded-full flex items-center justify-center text-white group-hover:bg-black group-hover:text-[#82e926] transition-colors">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
                </div>
              </Link>
            </div>

            {/* Card 2: Cloud Modernization */}
            <div className="core-card rounded-xl bg-[#403f3f] p-6 sm:p-8 lg:p-6 xl:p-8 relative top-[25px] overflow-hidden flex flex-col items-start text-left w-full lg:w-[calc(100%+20px)] max-w-[920px] shadow-2xl">
              <div className="w-full mb-3 sm:mb-4">
                <div className="text-white font-bold tracking-tighter" style={{ lineHeight: 0.85 }}>
                  
                  {/* First row: Cloud (vertical) + Moderniz */}
                  <div className="flex flex-row items-end">
                    <div className="flex items-center justify-center pr-1 sm:pr-2 mb-2 lg:mb-1 xl:mb-2 z-10">
                       <span className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[0.9rem] xl:text-[1.1rem] 2xl:text-[1.25rem] font-bold tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Cloud</span>
                    </div>
                    <div className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[4.25rem] xl:text-[5.5rem] 2xl:text-[6.5rem]">Moderniz</div>
                  </div>

                  {/* Second row: ation + Solutions block */}
                  <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mt-3 sm:mt-4">
                    <span className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[4.25rem] xl:text-[5.5rem] 2xl:text-[6.5rem]">ation</span>
                    
                    <div className="flex flex-col pb-1 sm:pb-2 md:pb-2 lg:pb-1 xl:pb-1.5">
                      <h3 className="text-white text-lg sm:text-xl md:text-[1.4rem] lg:text-lg xl:text-xl font-bold mb-1 leading-tight tracking-[0.015em]">Solutions</h3>
                      <p className="text-[#82e926] text-sm sm:text-base md:text-[1rem] lg:text-sm xl:text-base font-medium leading-tight max-w-[280px]">Upgrading legacy systems into agile, cloud-based environments.</p>
                    </div>
                  </div>

                </div>
              </div>

              <p className="text-white text-sm sm:text-base leading-relaxed max-w-[800px] mb-5 sm:mb-6">
                We enable seamless migration and modernization, ensuring improved performance, flexibility, and cost efficiency.
              </p>

              <Link to="/contact" className="inline-flex items-center gap-4 pl-6 pr-2 py-2 border-[2.5px] border-[#82e926] rounded-full text-white text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-[1.1rem] font-bold hover:bg-[#82e926] hover:text-black transition-all group mt-auto">
                Explore More
                <div className="w-[36px] h-[36px] bg-[#82e926] rounded-full flex items-center justify-center text-white group-hover:bg-black group-hover:text-[#82e926] transition-colors">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
                </div>
              </Link>
            </div>

          </div>
        </section>

        <section ref={outcomesSubHeadingSectionRef} className="solutions-outcomes-subheading min-h-[75vh] flex items-center justify-center relative w-full overflow-hidden text-center">
          <h3
            ref={outcomesSubHeadingRef}
            style={{
              perspective: "1000px",
              fontSize: "clamp(3.4375rem, calc(5.2vw + 15px), 7.1875rem)",
            }}
            className="type-title"
          >
            OUTCOMES
          </h3>
        </section>

        <section ref={outcomesSectionRef} className="solutions-outcomes min-h-[75vh] flex flex-col items-center justify-center relative w-full overflow-hidden">
          <ol>
            <div ref={dotRef} className="outcomes-moving-dot" aria-hidden="true" />
            {outcomes.map((o) => (
              <li key={o.title}>
                <strong className="type-heading">{o.title}</strong>
                <div aria-hidden="true" /> {/* Spacer for grid */}
                <p className="type-lead font-semibold">{o.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section ref={playbookSectionRef} className="min-h-[75vh] flex justify-center items-center overflow-hidden w-full relative">
          <div className="max-w-[1400px] w-full flex flex-col">
            <h2
              className="w-full text-white tracking-tight"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2.25rem, 8.88vw, 128px)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              <span ref={notAGenericRef} className="block text-left w-full pl-[5%] md:pl-[10%]">Not A Generic</span>
              <span ref={playbookRef} className="block text-right w-full pr-[5%] md:pr-[10%]">Playbook.</span>
            </h2>
          </div>
        </section>

        <section
          ref={statementSectionRef}
          className="min-h-screen flex items-center justify-center relative w-full overflow-hidden text-center px-6"
        >
          <p
            ref={statementTextRef}
            className="type-statement max-w-[1120px] mx-auto text-white text-center"
          >
            Every solution is shaped by your specific business context and constraints.
          </p>
        </section>

        <section ref={ctaSectionRef} className="solutions-cta">
          <div className="solutions-cta__content">
            <h2 className="type-title">Which solution fits your challenge?</h2>
            <p className="type-lead font-semibold">Let&apos;s map the right combination to your specific goals.</p>
            <ActionButton href="/contact">Talk to Us</ActionButton>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
