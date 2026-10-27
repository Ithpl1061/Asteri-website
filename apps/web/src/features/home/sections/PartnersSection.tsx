import type { RefObject } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PartnersSectionProps = {
  partnerSectionRef: RefObject<HTMLElement | null>;
  partnerCardRef: RefObject<HTMLDivElement | null>;
};

export function PartnersSection({ partnerSectionRef, partnerCardRef }: PartnersSectionProps) {
  return (
    <section
      ref={partnerSectionRef}
      className="platforms-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 lg:h-screen lg:min-h-0 lg:px-[3.33vw] lg:py-0"
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center translate-y-[1%]">
        {/* Header: Centered title with green pill next arrow on the right */}
        <div className="relative flex w-full items-center justify-center pb-5 lg:pb-6">
          <h2
            className="type-title text-center text-white !text-[clamp(3rem,calc(2.8vw+20px),4.5rem)] font-bold uppercase tracking-tight lg:whitespace-nowrap mb-0"
            style={{ fontSize: "calc(clamp(1.75rem, 2.8vw, 3.25rem) + 20px)" }}
          >
            PLATFORMS &amp; PARTNERS
          </h2>
          <Link
            to="/partnership"
            aria-label="View all platforms and partners"
            className="!absolute !right-0 !top-1/2 !-translate-y-1/2 hidden md:flex overflow-hidden rounded-full border-2 border-[#8AF500] transition-transform hover:scale-105"
          >
            <span className="grid h-12 w-16 place-items-center text-[#8AF500] lg:h-14 lg:w-20">
              <ArrowLeft size={34} strokeWidth={2} />
            </span>
            <span className="grid h-12 w-16 place-items-center bg-[#F3F3F3] text-[#8AF500] lg:h-14 lg:w-20">
              <ArrowRight size={34} strokeWidth={2} />
            </span>
          </Link>
        </div>

        {/* Cards container: Single unified rounded container with card height reduced by 4% */}
        <div
          ref={partnerCardRef}
          className="platform-cards relative w-full max-w-[1400px] overflow-hidden rounded-[20px] bg-black will-change-transform grid grid-cols-2 md:grid-cols-4 gap-[2px]"
          style={{
            gridAutoRows: "225px",
          }}
        >
          {[
            { src: "/Salesforce.webp", alt: "Salesforce", w: "58%" },
            { src: "/ManageEngine logo.webp", alt: "ManageEngine", w: "91%" },
            { src: "/zoho logo.webp", alt: "Zoho", w: "56%" },
            { src: "/aws logo.webp", alt: "AWS", w: "56%" },
            { src: "/Shipsy_Logo 1.webp", alt: "Shipsy", w: "84.5%" },
            { src: "/savex.webp", alt: "Savex Technologies", w: "67%" },
            { src: "/figma/home/partners-logo2.webp", alt: "Partner", w: "78%" },
            { src: "/sap logo.webp", alt: "SAP", w: "62%" },
          ].map((p, idx) => (
            <figure
              key={p.alt || idx}
              className="m-0 flex items-center justify-center bg-[#d9d9d9] w-full h-full p-4"
              style={{ margin: 0, background: "#d9d9d9" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="max-h-[58%] max-w-[72%] object-contain"
                style={{ width: p.w }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
