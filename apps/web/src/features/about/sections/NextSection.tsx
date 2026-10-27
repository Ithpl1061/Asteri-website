import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

type NextSectionProps = {
  nextSectionRef: RefObject<HTMLElement | null>;
};

export function NextSection({ nextSectionRef }: NextSectionProps) {
  return (
    <section
      ref={nextSectionRef}
      className="relative h-screen w-full bg-black flex flex-col items-center justify-center px-5 overflow-hidden"
    >
      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-7xl w-full mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="next-text-item text-white type-display tracking-tight text-center sm:whitespace-nowrap">
          Designed For What’s Next.
        </h2>
        <p className="next-text-item mt-8 text-white type-lead font-semibold text-center">
          Tell us where complexity is slowing you down.
          <br />
          We’ll design what comes next.
        </p>

        <button className="next-text-item cta-pill mt-10 mx-auto font-bold hover:scale-105 transition-transform">
          <span className="text-black type-button text-center">Talk To Us</span>
          <div className="cta-pill-icon">
            <ArrowUpRight size={24} className="text-black" strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
}
