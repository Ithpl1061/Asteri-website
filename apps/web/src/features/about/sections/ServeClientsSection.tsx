import type { RefObject } from "react";

type ServeClientsSectionProps = {
  serveClientsSectionRef: RefObject<HTMLElement | null>;
  serveClientsHeadingRef: RefObject<HTMLHeadingElement | null>;
  serveClientsContentRef: RefObject<HTMLDivElement | null>;
};

export function ServeClientsSection({
  serveClientsSectionRef,
  serveClientsHeadingRef,
  serveClientsContentRef,
}: ServeClientsSectionProps) {
  return (
    <section
      ref={serveClientsSectionRef}
      className="relative h-screen w-full bg-black flex flex-col justify-center overflow-hidden"
    >
      {/* TOP HEADING (SLIDES IN FROM RIGHT) */}
      <div className="w-full pl-[30vw] pr-0">
        <h2
          ref={serveClientsHeadingRef}
          className="serve-heading type-title text-white flex items-center gap-4 sm:gap-6 w-full"
        >
          <span className="shrink-0">We Serve Clients</span>
          <span className="h-[1.5px] flex-1 bg-white" />
        </h2>
      </div>

      {/* LOWER CONTENT - LEFT CORNER WITH LITTLE WHITE LINE (SLIDES IN FROM LEFT) */}
      <div
        ref={serveClientsContentRef}
        className="mt-16 sm:mt-24 flex items-start gap-4 sm:gap-6 pl-0"
      >
        <div className="w-12 sm:w-20 lg:w-28 h-[1.5px] bg-white/90 mt-5 sm:mt-8 shrink-0 serve-client-left-item" />
        <div className="flex flex-col space-y-1 sm:space-y-3 type-display text-left">
          <span
            className="serve-client-left-item"
            style={{
              color: "#000000",
              WebkitTextStroke: "2.5px #82E926",
              paintOrder: "stroke fill",
            }}
          >
            Across
          </span>
          <span className="serve-client-left-item text-white">India</span>
          <span
            className="serve-client-left-item"
            style={{
              color: "#000000",
              WebkitTextStroke: "2.5px #82E926",
              paintOrder: "stroke fill",
            }}
          >
            And globally
          </span>
        </div>
      </div>
    </section>
  );
}
