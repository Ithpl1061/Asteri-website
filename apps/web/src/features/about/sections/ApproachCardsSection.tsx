import type { RefObject } from "react";
import { Search, Users, RotateCw, HeartHandshake } from "lucide-react";

type ApproachCardsSectionProps = {
  approachCardsSectionRef: RefObject<HTMLElement | null>;
};

export function ApproachCardsSection({ approachCardsSectionRef }: ApproachCardsSectionProps) {
  return (
    <section
      ref={approachCardsSectionRef}
      className="relative h-screen w-full bg-black flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden"
    >
      <div className="approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] w-full mx-auto">
        {/* Card 1: Discovery */}
        <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
          <div className="flip-inner">
            {/* FRONT */}
            <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <Search className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Discovery</h3>
                <p className="text-black font-semibold type-body">
                  Understand the challenge and goals.
                </p>
              </div>
            </div>

            {/* BACK */}
            <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <Search className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Discovery</h3>
                <p className="text-black font-semibold type-body">
                  Understand the challenge and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Team Assembly */}
        <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
          <div className="flip-inner">
            {/* FRONT */}
            <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <Users className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Team Assembly</h3>
                <p className="text-black font-semibold type-body">Exact specialists for the job.</p>
              </div>
            </div>

            {/* BACK */}
            <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <Users className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Team Assembly</h3>
                <p className="text-black font-semibold type-body">Exact specialists for the job.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Agile Delivery */}
        <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
          <div className="flip-inner">
            {/* FRONT */}
            <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <RotateCw className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Agile Delivery</h3>
                <p className="text-black font-semibold type-body">
                  Iterative sprints, continuous feedback.
                </p>
              </div>
            </div>

            {/* BACK */}
            <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <RotateCw className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Agile Delivery</h3>
                <p className="text-black font-semibold type-body">
                  Iterative sprints, continuous feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Support & Scale */}
        <div className="approach-card-item flip-card h-[340px] sm:h-[380px] w-full">
          <div className="flip-inner">
            {/* FRONT */}
            <div className="flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <HeartHandshake className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Support &amp; Scale</h3>
                <p className="text-black font-semibold type-body">Managed support post-delivery.</p>
              </div>
            </div>

            {/* BACK */}
            <div className="flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden">
              <HeartHandshake className="w-14 h-14 text-[#82E926]" />
              <div>
                <h3 className="text-black type-card font-extrabold mb-2">Support &amp; Scale</h3>
                <p className="text-black font-semibold type-body">Managed support post-delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
