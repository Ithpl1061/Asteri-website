import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

type NextSectionProps = {
  nextRef: RefObject<HTMLElement | null>;
  nextTitleRef: RefObject<HTMLHeadingElement | null>;
  nextTextRef: RefObject<HTMLParagraphElement | null>;
  nextBtnRef: RefObject<HTMLButtonElement | null>;
};

export function NextSection({ nextRef, nextTitleRef, nextTextRef, nextBtnRef }: NextSectionProps) {
  return (
    <section
      ref={nextRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0"
    >
      <div className="relative z-10 max-w-5xl text-center">
        <h2 ref={nextTitleRef} className="text-white type-display">
          Let&apos;s Build What&apos;s Next.
        </h2>
        <p ref={nextTextRef} className="mt-4 type-lead font-semibold text-white">
          We&apos;ll help you design the path forward.
        </p>

        <button ref={nextBtnRef} className="cta-pill mt-8">
          <span className="type-button text-black">Get In Touch</span>
          <div className="cta-pill-icon">
            <ArrowUpRight size={28} className="text-black" strokeWidth={2.3} />
          </div>
        </button>
      </div>
    </section>
  );
}
