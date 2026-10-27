import type { RefObject } from "react";

type CaseStudiesSectionProps = {
  caseRef: RefObject<HTMLDivElement | null>;
  caseTitleRef: RefObject<HTMLDivElement | null>;
};

export function CaseStudiesSection({ caseRef, caseTitleRef }: CaseStudiesSectionProps) {
  return (
    <section
      ref={caseRef}
      className="case-studies-section relative flex h-[100svh] items-center overflow-hidden bg-black py-0 lg:h-screen"
    >
      <div
        ref={caseTitleRef}
        className="case-title relative block whitespace-nowrap uppercase text-white"
        style={{
          color: "#FFF",
          fontFamily: '"Inter", sans-serif',
          fontSize: "clamp(4.5rem, 25vw, 481px)",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        CASE
        <div className="case-tag type-card tag-1 absolute left-[-4%] top-[57%]">
          Sales &amp; Service
          <br />
          Cloud Implementation
        </div>
        <div className="case-tag type-card tag-2 absolute left-[8%] top-[2%]">
          Warehouse
          <br />
          Management
        </div>
        STUDIES
        <div className="case-tag type-card tag-3 absolute left-[28%] top-[62%]">SAP AMC</div>
        <div className="case-tag type-card tag-4 absolute left-[41%] top-[36%]">
          Vehicle Management
          <br />
          System
        </div>
        <div className="case-tag type-card tag-5 absolute left-[62%] top-[54%]">
          Medical Claim
          <br />
          Processing-Automation
        </div>
        <div className="case-tag type-card tag-6 absolute left-[84%] top-[13%]">
          Augmented Reality-Based
          <br />
          Hospital Navigation App
        </div>
      </div>
      <div className="mx-auto hidden w-full max-w-2xl gap-3 px-6">
        <h2 className="mb-5 text-center font-display text-[clamp(2.5rem,13vw,5.5rem)] font-bold uppercase leading-[0.82] text-white">
          Case Studies
        </h2>
        <div className="case-tag type-card static w-fit max-w-full justify-self-start">
          Sales &amp; Service
          <br />
          Cloud Implementation
        </div>
        <div className="case-tag type-card static w-fit max-w-full justify-self-end">
          Warehouse
          <br />
          Management
        </div>
        <div className="case-tag type-card static w-fit max-w-full justify-self-start">SAP AMC</div>
        <div className="case-tag type-card static w-fit max-w-full justify-self-end">
          Vehicle Management
          <br />
          System
        </div>
        <div className="case-tag type-card static w-fit max-w-full justify-self-start">
          Medical Claim
          <br />
          Processing-Automation
        </div>
        <div className="case-tag type-card static w-fit max-w-full justify-self-end">
          Augmented Reality-Based
          <br />
          Hospital Navigation App
        </div>
      </div>
    </section>
  );
}
