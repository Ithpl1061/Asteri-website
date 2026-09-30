import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./services-page.css";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services — Asteri" }],
  }),
  component: Services,
});



function Button({
  children,
  href,
  dark = false,
}: {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`figma-service-button${dark ? " figma-service-button--dark" : ""}`}
    >
      <span className="type-button">{children}</span><b>↗</b>
    </Link>
  );
}



function Services() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/partners')
      .then(res => res.json())
      .then(data => setPartners(data))
      .catch(err => console.error(err));
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const servicRef = useRef<HTMLDivElement>(null);
  const esRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const coreSectionRef = useRef<HTMLElement>(null);
  const workHeadingSectionRef = useRef<HTMLElement>(null);
  const workHeadingRef = useRef<HTMLHeadingElement>(null);
  const workSubHeadingSectionRef = useRef<HTMLElement>(null);
  const workSubHeadingRef = useRef<HTMLHeadingElement>(null);
  const workListSectionRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const partnerSectionRef = useRef<HTMLElement>(null);
  const partnerCardRef = useRef<HTMLDivElement>(null);
  const quoteSectionRef = useRef<HTMLElement>(null);
  const quoteLine1Ref = useRef<HTMLHeadingElement>(null);
  const quoteLine2Ref = useRef<HTMLHeadingElement>(null);
  const supportSectionRef = useRef<HTMLElement>(null);
  const supportTextRef = useRef<HTMLParagraphElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (introSectionRef.current && servicRef.current && esRef.current && textRef.current) {
        gsap.set(servicRef.current, { y: -150, opacity: 0 });
        gsap.set(esRef.current, { y: 150, opacity: 0 });
        gsap.set(textRef.current, { x: 150, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introSectionRef.current,
            start: "top top",
            end: "+=1200",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        tl.to(servicRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.1)
          .to(esRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.1)
          .to(textRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.6)
          .to({}, { duration: 1.5 });
      }

      const statement = document.querySelector(".figma-services__statement");
      if (statement) {
        gsap.from(statement, {
          scrollTrigger: {
            trigger: statement,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out"
        });
      }

      if (coreSectionRef.current) {
        const coreCards = gsap.utils.toArray<HTMLElement>(".figma-services__core--desktop .core-card");
        
        gsap.set(coreCards, { x: 250, opacity: 0 });

        const coreTl = gsap.timeline({
          scrollTrigger: {
            trigger: coreSectionRef.current,
            start: "top top",
            end: () => `+=${2000 * (window.innerWidth < 1479 ? window.innerWidth / 1479 : 1)}`,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        if (coreCards.length >= 2) {
          // Card 1 gently glides into place
          coreTl.to(coreCards[0], { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
          // Card 1 stays locked in place for comfortable reading
          coreTl.to({}, { duration: 2.5 });
          // Card 1 exits smoothly left while Card 2 enters from right
          coreTl.to(coreCards[0], { x: -250, opacity: 0, duration: 0.8, ease: "power2.inOut" });
          coreTl.to(coreCards[1], { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "<0.1");
          // Card 2 stays locked in place for comfortable reading
          coreTl.to({}, { duration: 2.5 });
          // Card 2 gently exits
          coreTl.to(coreCards[1], { x: -250, opacity: 0, duration: 0.8, ease: "power2.in" });
        } else {
          coreCards.forEach((card) => {
            coreTl.to(card, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
            coreTl.to({}, { duration: 2.5 });
            coreTl.to(card, { x: -250, opacity: 0, duration: 0.8, ease: "power2.in" });
          });
        }
      }

      if (workHeadingSectionRef.current && workHeadingRef.current) {
        gsap.set(workHeadingRef.current, { rotationX: 90, y: 50, opacity: 0, transformOrigin: "50% 50%" });

        const tlWorkHeading = gsap.timeline({
          scrollTrigger: {
            trigger: workHeadingSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlWorkHeading.to(workHeadingRef.current, {
          rotationX: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }).to({}, { duration: 1 });
      }

      if (workSubHeadingSectionRef.current && workSubHeadingRef.current) {
        gsap.set(workSubHeadingRef.current, { rotationX: 90, y: 50, opacity: 0, transformOrigin: "50% 50%" });

        const tlWorkSubHeading = gsap.timeline({
          scrollTrigger: {
            trigger: workSubHeadingSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlWorkSubHeading.to(workSubHeadingRef.current, {
          rotationX: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }).to({}, { duration: 1 });
      }

      if (workListSectionRef.current && dotRef.current) {
        const olElement = workListSectionRef.current.querySelector("ol");
        if (olElement) {
          gsap.to(dotRef.current, {
            scrollTrigger: {
              trigger: olElement,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
            top: "1047px",
            ease: "none"
          });
        }
      }

      if (partnerSectionRef.current && partnerCardRef.current) {
        gsap.set(partnerCardRef.current, { x: "100vw", opacity: 0 });

        const tlPartner = gsap.timeline({
          scrollTrigger: {
            trigger: partnerSectionRef.current,
            start: "top 45px",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlPartner.to(partnerCardRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }).to({}, { duration: 1 });
      }

      if (quoteSectionRef.current && quoteLine1Ref.current && quoteLine2Ref.current) {
        gsap.set(quoteLine1Ref.current, { x: "-100vw", opacity: 0 });
        gsap.set(quoteLine2Ref.current, { x: "100vw", opacity: 0 });

        const tlQuote = gsap.timeline({
          scrollTrigger: {
            trigger: quoteSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlQuote
          .to(quoteLine1Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0)
          .to(quoteLine2Ref.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0)
          .to({}, { duration: 1 }) // Screen hold
          .to([quoteLine1Ref.current, quoteLine2Ref.current], { opacity: 0, y: -40, duration: 0.8, ease: "power2.in" });
      }

      if (supportSectionRef.current && supportTextRef.current) {
        gsap.set(supportTextRef.current, { x: "100vw", opacity: 0 });

        const tlSupport = gsap.timeline({
          scrollTrigger: {
            trigger: supportSectionRef.current,
            start: "center center",
            end: "+=800",
            scrub: true,
            pin: true,
          }
        });

        tlSupport
          .to(supportTextRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          })
          .to({}, { duration: 1 }) // Screen hold
          .to(supportTextRef.current, {
            opacity: 0,
            y: -40,
            duration: 0.8,
            ease: "power2.in"
          });
      }

      if (ctaSectionRef.current) {
        const ctaContent = ctaSectionRef.current.querySelector("div");
        if (ctaContent) {
          gsap.set(ctaContent, { x: "100vw", opacity: 0 });

          const ctaTl = gsap.timeline({
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "center center",
              end: "+=800",
              scrub: true,
              pin: true,
            }
          });

          ctaTl
            .to(ctaContent, {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            })
            .to({}, { duration: 1.5 }) // Hold firmly fixed in center
            .to(ctaContent, {
              opacity: 0,
              y: -40,
              duration: 0.8,
              ease: "power2.in"
            }); // Clean exit before Footer
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="figma-services desktop-padding-bottom" ref={containerRef}>
        <Navbar />
        <div className="figma-services__canvas">
          <section className="figma-services__hero">
            <h1 className="type-display"><span>Technology <i>Systems</i></span><span><i>Designed</i> To Perform</span></h1>
            <p className="type-lead font-semibold">From infrastructure to intelligent platforms.</p>
            <Button href="/Services- Salesforce Consulting">Explore More</Button>
          </section>

        <p className="figma-services__statement type-statement">Our services combine strategic thinking with practical implementation — ensuring systems are not only well designed, but dependable in real-world environments.</p>

        <section className="figma-services__core figma-services__core--mobile">
          <h2 className="type-title">CORE SERVICES</h2>
          <article>
            <h3>Salesforce</h3>
            <div className="figma-services__core-side"><h4>Consulting</h4><p>Strategic CRM solutions that enhance customer engagement and operational visibility.</p></div>
            <p className="figma-services__core-copy">We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes.</p>
            <Button href="/Services- Salesforce Consulting" dark>Explore More</Button>
          </article>
          <article className="figma-services__sap-card">
            <h3>SAP</h3>
            <div className="figma-services__sap-side"><h4>Consulting</h4><p>Enterprise-grade solutions designed to streamline complex business operations.</p></div>
            <p className="figma-services__sap-copy">We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making.</p>
            <Button href="/contact" dark>Explore More</Button>
          </article>
        </section>

        <section className="figma-services__work figma-services__work--mobile">
          <h2 className="type-title">HOW WE WORK</h2>
          <h3 className="type-title">OUR PROCESS</h3>
          <ol>
            <li><strong className="type-heading">Understand</strong><i /><p className="type-lead font-semibold">We begin by learning how your organization operates — technically and operationally.</p></li>
            <li><strong className="type-heading">Design</strong><span /><p className="type-lead font-semibold">Solutions are architected with clarity, scalability, and long-term sustainability in mind.</p></li>
            <li><strong className="type-heading">Implement</strong><span /><p className="type-lead font-semibold">We execute with structured delivery, ensuring stability and minimal disruption.</p></li>
            <li><strong className="type-heading">Support</strong><span /><p className="type-lead font-semibold">Our engagement continues beyond implementation, ensuring systems evolve with your needs.</p></li>
          </ol>
        </section>


        <section className="figma-services__partner-grid figma-services__partner-grid--canvas">
          <h2 className="type-title">PLATFORMS &amp;<br />PARTNERS</h2><span className="figma-services__grid-next">→</span>
          <div className="figma-services__partner-card">{partners.map((p) => <figure key={p.name}><img src={p.logoUrl} alt={p.name} /></figure>)}</div>
        </section>

        <section className="figma-services__quote figma-services__quote--mobile"><h2 className="type-statement">Technology works best</h2><h2 className="type-statement">when it works quietly.</h2></section>
        <p className="figma-services__support figma-services__support--mobile type-statement">Systems that support teams, decisions, and growth — without unnecessary complexity.</p>

        <section className="figma-services__cta figma-services__cta--mobile"><div><h2 className="type-title">Let’s design the systems</h2><p className="type-lead font-semibold">behind your next phase of growth.</p><Button href="/contact">Start a conversation</Button></div></section>
      </div>

      <section ref={introSectionRef} className="intro-absolute flex items-center justify-center">
        <div className="flex flex-col items-start w-fit mx-auto text-white">
          <div ref={servicRef} className="servic-part text-[5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter -ml-1">servic</div>
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mt-2 md:mt-3">
            <div ref={esRef} className="es-part text-[5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter -ml-1">es</div>
            <div ref={textRef} className="text-part flex flex-col pt-2 md:pt-3 mt-[4%] text-left">
              <p className="type-body text-white/90 max-w-[320px] m-0">
                We design and deliver technology systems that<br />
                help organizations operate with clarity,<br />
                resilience, and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={coreSectionRef} className="figma-services__core figma-services__core--desktop">
        <h2 className="type-title">CORE SERVICES</h2>
        <article className="core-card">
          <h3>Salesforce</h3>
          <div className="figma-services__core-side"><h4>Consulting</h4><p>Strategic CRM solutions that enhance customer engagement and operational visibility.</p></div>
          <p className="figma-services__core-copy">We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes.</p>
          <Button href="/Services- Salesforce Consulting" dark>Explore More</Button>
        </article>
        <article className="figma-services__sap-card core-card">
          <h3>SAP</h3>
          <div className="figma-services__sap-side"><h4>Consulting</h4><p>Enterprise-grade solutions designed to streamline complex business operations.</p></div>
          <p className="figma-services__sap-copy">We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making.</p>
          <Button href="/contact" dark>Explore More</Button>
        </article>
      </section>

      <section ref={workHeadingSectionRef} className="figma-services__work-heading--desktop w-full flex justify-center min-h-[75vh] items-center overflow-hidden">
        <h2 ref={workHeadingRef} style={{ perspective: "1000px" }} className="type-title uppercase">HOW WE WORK</h2>
      </section>
      
      <section ref={workSubHeadingSectionRef} className="figma-services__work-subheading--desktop w-full flex justify-center min-h-[75vh] items-center overflow-hidden">
        <h3 ref={workSubHeadingRef} style={{ perspective: "1000px" }} className="type-title uppercase">OUR PROCESS</h3>
      </section>

      <section ref={workListSectionRef} className="figma-services__work-list--desktop">
        <ol>
          <div ref={dotRef} className="figma-services__moving-dot" aria-hidden="true" />
          <li><strong className="type-heading">Understand</strong><span /><p className="type-lead font-semibold">We begin by learning how your organization operates — technically and operationally.</p></li>
          <li><strong className="type-heading">Design</strong><span /><p className="type-lead font-semibold">Solutions are architected with clarity, scalability, and long-term sustainability in mind.</p></li>
          <li><strong className="type-heading">Implement</strong><span /><p className="type-lead font-semibold">We execute with structured delivery, ensuring stability and minimal disruption.</p></li>
          <li><strong className="type-heading">Support</strong><span /><p className="type-lead font-semibold">Our engagement continues beyond implementation, ensuring systems evolve with your needs.</p></li>
        </ol>
      </section>

      <section ref={partnerSectionRef} className="figma-services__partner-grid figma-services__partner-grid--desktop">
        <h2 className="type-title">PLATFORMS &amp;<br />PARTNERS</h2><span className="figma-services__grid-next">→</span>
        <div ref={partnerCardRef} className="figma-services__partner-card">{partners.map((p) => <figure key={p.name}><img src={p.logoUrl} alt={p.name} /></figure>)}</div>
      </section>

      <section ref={quoteSectionRef} className="figma-services__quote--desktop w-full flex flex-col justify-center min-h-[75vh] items-center">
        <h2 ref={quoteLine1Ref} className="type-statement whitespace-nowrap">Technology works best</h2>
        <h2 ref={quoteLine2Ref} className="type-statement whitespace-nowrap">when it works quietly.</h2>
      </section>

      <section ref={supportSectionRef} className="figma-services__support--desktop w-full flex justify-center min-h-[75vh] items-center">
        <p ref={supportTextRef} className="type-statement max-w-[1000px] text-center px-6 text-white">
          Systems that support teams, decisions, and growth — without unnecessary complexity.
        </p>
      </section>

      <section ref={ctaSectionRef} className="figma-services__cta--desktop w-full flex flex-col justify-center min-h-[75vh] items-center">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto">
          <h2 className="type-title">Let’s design the systems</h2>
          <p className="type-lead font-semibold">behind your next phase of growth.</p>
          <div className="flex justify-center items-center w-full">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
