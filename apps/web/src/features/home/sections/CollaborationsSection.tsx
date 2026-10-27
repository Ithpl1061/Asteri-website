import type { RefObject } from "react";
import { type CSSProperties } from "react";

type CollaborationsSectionProps = {
  collaborationsSectionRef: RefObject<HTMLElement | null>;
};

export function CollaborationsSection({ collaborationsSectionRef }: CollaborationsSectionProps) {
  return (
    <section
      ref={collaborationsSectionRef}
      className="collaborations-section relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-12 sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
    >
      <div className="relative w-full -translate-y-[3%]">
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-center lg:px-[3.92vw]">
          <h2 className="collab-heading font-sans font-semibold uppercase text-white text-[clamp(2.2rem,4.4vw,64px)] leading-[1.14]">
            Valuable
            <br />
            Customers
          </h2>
        </div>

        {/* Logo grid — one row at a time slides in from the right, then leaves for the next */}
        <div className="collab-logos-container relative mt-4 sm:mt-6 w-full overflow-hidden">
          <div
            className="collab-logos-wrapper relative mx-auto"
            style={
              {
                "--collab-w": "min(100vw, 2400px)",
                width: "var(--collab-w)",
                height: "calc(var(--collab-w) * 0.24)",
              } as CSSProperties
            }
          >
            <div
              className="collab-logos-inner absolute left-0 top-1/2 w-full -translate-y-1/2"
              style={{ aspectRatio: "2 / 1" }}
            >
              {[
                [0, 29],
                [29, 50.4],
                [50.4, 67.3],
                [67.3, 100],
              ].map(([from, to], i) => (
                <div
                  key={`collab-col-${i}`}
                  className="collab-col absolute inset-0"
                  style={{ opacity: 0 }}
                >
                  <img
                    src="/figma/home/collaborations-logos.webp"
                    alt={
                      i === 0
                        ? "Our collaborators: Tata Communications, Humanata, Compulink, Steel1, intellimation.ai, Apexpertise, Roche, Themis Medicare, Symbiosis International, POSCO, Amdocs, Xoriant, CitiusTech, Indian Army 512 Army Base Workshop, GA Steel Tech and Netafim"
                        : ""
                    }
                    loading="eager"
                    className="collab-logo-img pointer-events-none h-full w-full max-w-none select-none"
                    style={{ clipPath: `inset(${from}% 0 ${100 - to}% 0)` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
