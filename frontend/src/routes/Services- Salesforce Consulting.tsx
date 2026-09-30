import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, HeartHandshake, Megaphone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/Services- Salesforce Consulting")({
  head: () => ({
    meta: [
      { title: "Salesforce Consulting — Asteri" },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Animation
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-anim", {
          autoAlpha: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
        });

      // 2. Consulting Section Animation
      gsap.from(".consulting-anim", {
        scrollTrigger: {
          trigger: ".consulting-section",
          start: "top 80%",
        },
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 3. Capabilities Animation
      gsap.from(".capabilities-title", {
        scrollTrigger: {
          trigger: ".capabilities-section",
          start: "top 80%",
        },
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Tie every card directly to its own scroll range. This keeps the motion
      // responsive on fast scrolls and reverses it naturally when scrolling up.
      gsap.utils.toArray<HTMLElement>(".capability-card").forEach((card) => {
        gsap.fromTo(card, {
          autoAlpha: 0,
          x: () => window.innerWidth,
        }, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top 60%",
            scrub: 0.35,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
          autoAlpha: 1,
          x: 0,
          ease: "none",
        });
      });

      // 4. Solutions Animation
      gsap.from(".solutions-title", {
        scrollTrigger: {
          trigger: ".solutions-section",
          start: "top 80%",
        },
        autoAlpha: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // The solution cards share one row, so sequence them across the section's
      // scroll range instead of triggering all three at the same moment.
      gsap.fromTo(".solution-card", {
        autoAlpha: 0,
        x: () => window.innerWidth,
      }, {
        scrollTrigger: {
          trigger: ".solutions-section",
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 1.5, 1250)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.35,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        autoAlpha: 1,
        x: 0,
        stagger: 0.3,
        ease: "none",
      });

      // 5. CRM Statement Animation
      gsap.from(".crm-statement", {
        scrollTrigger: {
          trigger: ".crm-section",
          start: "top 75%",
        },
        autoAlpha: 0,
        scale: 0.95,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      // 6. Difference Animation
      gsap.from(".difference-title", {
        scrollTrigger: {
          trigger: ".difference-section",
          start: "top 80%",
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.fromTo(".difference-card", {
        autoAlpha: 0,
        x: () => window.innerWidth,
      }, {
        scrollTrigger: {
          trigger: ".difference-section",
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 1.5, 1250)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.35,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        autoAlpha: 1,
        x: 0,
        stagger: 0.25,
        ease: "none",
      });

      // 7. CTA Animation
      gsap.fromTo(".cta-anim", {
        autoAlpha: 0,
        x: () => window.innerWidth,
      }, {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight, 850)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.35,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        autoAlpha: 1,
        x: 0,
        stagger: 0,
        ease: "none",
      });
      
    }, containerRef);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, []);

  const capabilities = [
    {
      title: "Implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Customization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus.",
    },
    {
      title: "Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.",
    },
  ];

  return (
    <PageShell>
      <div ref={containerRef} className="bg-black min-h-screen text-white flex flex-col items-center pt-32 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center px-6 max-w-5xl">
          <h1 className="hero-anim font-bold leading-[0.95] type-display">
            Salesforce <span className="text-transparent stroke-text-green">solutions.</span>
            <br />
            <span className="text-transparent stroke-text-green">Built for</span> clarity.
          </h1>
          <p className="hero-anim mt-10 type-lead font-semibold font-semibold text-gray-300">
            Connecting customer data, processes, and teams.
          </p>
          <button className="hero-anim mt-12 flex items-center gap-3 pl-6 pr-3 py-3 rounded-full border-2 border-[#8AF500] bg-[#82E926] hover:bg-[#97f842] transition-colors">
            <span className="text-black type-button font-bold">Explore More</span>
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight size={34} className="text-black" strokeWidth={2.5} />
            </div>
          </button>
        </section>

        {/* CONSULTING SECTION */}
        <section className="consulting-section flex flex-col items-center text-center px-6 max-w-5xl w-full">
          <h2 className="consulting-anim font-bold leading-none type-title mb-8">
            Salesforce
          </h2>
          <div className="consulting-anim leading-[1.5] font-semibold max-w-[600px]">
            <span className="font-bold block mb-4 type-heading">Consulting</span>
            <p className="text-gray-300 type-body">
              We design & implement Salesforce solutions that align with business processes & drive measurable outcomes.
            </p>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="capabilities-section flex flex-col items-center px-6 w-full max-w-5xl">
          <h2 className="capabilities-title type-title font-bold mb-16 text-center">
            CAPABILITIES
          </h2>
          <div className="w-full flex flex-col gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="capability-card will-change-transform bg-[#2a2a2a]/90 border border-white/20 p-8 rounded-[20px] text-center transition-colors hover:bg-[#242424]/95">
                <h3 className="type-heading font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70 type-body">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOLUTIONS WE ENABLE */}
        <section className="solutions-section min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-6xl w-full">
          <h2 className="solutions-title type-title font-bold mb-20 leading-tight">
            SOLUTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Sales Cloud */}
            <div className="solution-card will-change-transform flex flex-col items-center bg-[#00B5B8]/10 border border-[#00B5B8] p-10 rounded-[30px] hover:bg-[#00B5B8]/20 transition-colors">
              <div className="w-28 h-28 rounded-3xl bg-[#00B5B8]/20 border border-[#00B5B8] flex items-center justify-center mb-8">
                <TrendingUp size={60} strokeWidth={2.5} className="text-[#00D7DA]" />
              </div>
              <h3 className="type-heading font-bold mb-4">Sales Cloud</h3>
              <p className="text-white/80 type-body">Streamlining sales processes and pipeline visibility.</p>
            </div>

            {/* Service Cloud */}
            <div className="solution-card will-change-transform flex flex-col items-center bg-pink-500/10 border border-pink-500 p-10 rounded-[30px] hover:bg-pink-500/20 transition-colors">
              <div className="w-28 h-28 rounded-3xl bg-pink-500/20 border border-pink-500 flex items-center justify-center mb-8">
                <HeartHandshake size={60} strokeWidth={2.5} className="text-pink-400" />
              </div>
              <h3 className="type-heading font-bold mb-4">Service Cloud</h3>
              <p className="text-white/80 type-body">Enhancing customer support with structured workflows and automation.</p>
            </div>

            {/* Marketing Cloud */}
            <div className="solution-card will-change-transform flex flex-col items-center bg-orange-500/10 border border-orange-500 p-10 rounded-[30px] hover:bg-orange-500/20 transition-colors">
              <div className="w-28 h-28 rounded-3xl bg-orange-500/20 border border-orange-500 flex items-center justify-center mb-8">
                <Megaphone size={60} strokeWidth={2.5} className="text-orange-400" />
              </div>
              <h3 className="type-heading font-bold mb-4">Marketing Cloud</h3>
              <p className="text-white/80 type-body">Enabling targeted campaigns and customer engagement.</p>
            </div>
          </div>
        </section>

        {/* CRM STATEMENT SECTION */}
        <section className="crm-section flex flex-col items-center text-center px-6 max-w-5xl py-24">
          <h2 className="crm-statement type-statement font-bold leading-[1.05]">
            A CRM system<br />that actually works.
          </h2>
        </section>

        {/* WHERE IT MADE THE DIFFERENCE */}
        <section className="difference-section min-h-screen flex flex-col items-center justify-center px-6 w-full max-w-6xl">
          <div className="w-full rounded-[40px] bg-[#E8E8E8] p-12 md:p-20 text-center">
            <h2 className="difference-title text-black type-title font-bold leading-[0.95] mb-16">
              Where It Made the
              <br />
              Difference
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors">
                <h3 className="text-white type-heading font-bold mb-4">Efficiency</h3>
                <p className="text-white type-body leading-[1.2]">Reduced manual effort through automation and structured workflows.</p>
              </div>
              
              <div className="difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors">
                <h3 className="text-white type-heading font-bold mb-4">Alignment</h3>
                <p className="text-white type-body leading-[1.2]">Better coordination between sales, service, and operations teams.</p>
              </div>
              
              <div className="difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors">
                <h3 className="text-white type-heading font-bold mb-4">Scalability</h3>
                <p className="text-white type-body leading-[1.2]">A CRM system that evolves with your business.</p>
              </div>
              
              <div className="difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors">
                <h3 className="text-white type-heading font-bold mb-4">Visibility</h3>
                <p className="text-white type-body leading-[1.2]">Clear insights into customer interactions and pipeline.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-5xl relative pb-32">
          {/* GREEN GLOW - static background effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[700px] rounded-[40px] bg-[#65ff00] opacity-[0.12] blur-[140px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center translate-y-8 md:translate-y-12">
            <h2 className="cta-anim will-change-transform type-title font-bold leading-none mb-6">
              Let’s build a CRM that scales
            </h2>
            <button className="cta-anim will-change-transform flex items-center gap-3 pl-6 pr-3 py-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] hover:bg-white transition-colors">
              <span className="text-black type-button font-bold">Start a conversation</span>
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight size={34} className="text-black" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
