import type { RefObject } from "react";

type CultureValuesSectionProps = {
  cultureSectionRef: RefObject<HTMLElement | null>;
};

export function CultureValuesSection({ cultureSectionRef }: CultureValuesSectionProps) {
  return (
    <section
      ref={cultureSectionRef}
      className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden py-8 sm:py-10"
    >
      <div className="culture-wrap max-w-[1400px] w-full mx-auto px-6 sm:px-10 flex flex-col justify-center">
        <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center mb-6 sm:mb-10 uppercase">
          CULTURE &amp; VALUES
        </h2>

        <div className="culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* CARD 1 */}
          <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
            <div className="flip-inner">
              {/* FRONT */}
              <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left">Innovation</h3>
                <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  1
                </span>
              </div>

              {/* BACK */}
              <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left z-10">Innovation</h3>

                <div className="z-10 space-y-3 max-w-[280px]">
                  <h4 className="text-white type-body font-bold text-left">
                    We don't follow trends
                    <br />
                    We apply what actually works.
                  </h4>
                  <p className="text-zinc-200 type-body text-left">
                    At Asteri, innovation means finding smarter ways to solve real problems. Every
                    solution we build is designed to move faster, cost less, and outlast the
                    alternatives.
                  </p>
                </div>

                <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  1
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
            <div className="flip-inner">
              {/* FRONT */}
              <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left">Integrity</h3>
                <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  2
                </span>
              </div>

              {/* BACK */}
              <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left z-10">Integrity</h3>

                <div className="z-10 space-y-3 max-w-[280px]">
                  <h4 className="text-white type-body font-bold text-left">
                    We say what we mean,
                    <br />
                    and deliver what we promise.
                  </h4>
                  <p className="text-zinc-200 type-body text-left">
                    Honest scoping, transparent timelines, and no surprises at go-live. Our clients
                    trust us because we treat their business like our own — always.
                  </p>
                </div>

                <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
            <div className="flip-inner">
              {/* FRONT */}
              <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left">Client-First</h3>
                <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  3
                </span>
              </div>

              {/* BACK */}
              <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left z-10">Client-First</h3>

                <div className="z-10 space-y-3 max-w-[280px]">
                  <h4 className="text-white type-body font-bold text-left">
                    We say what we mean,
                    <br />
                    and deliver what we promise.
                  </h4>
                  <p className="text-zinc-200 type-body text-left">
                    Honest scoping, transparent timelines, and no surprises at go-live. Our clients
                    trust us because we treat their business like our own — always.
                  </p>
                </div>

                <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  3
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="culture-card-item flip-card h-[360px] sm:h-[400px] w-full">
            <div className="flip-inner">
              {/* FRONT */}
              <div className="flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left">Agility</h3>
                <span className="text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  4
                </span>
              </div>

              {/* BACK */}
              <div className="flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden">
                <h3 className="text-white type-card font-bold text-left z-10">Agility</h3>

                <div className="z-10 space-y-3 max-w-[280px]">
                  <h4 className="text-white type-body font-bold text-left">
                    Built to move fast without
                    <br />
                    breaking things.
                  </h4>
                  <p className="text-zinc-200 type-body text-left">
                    Markets shift. Priorities change. Our on-demand model means we can assemble,
                    scale, and pivot your team without the lag of traditional IT engagements.
                  </p>
                </div>

                <span className="text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
