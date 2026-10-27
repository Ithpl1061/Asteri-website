import type { IndustryDetail } from "@/lib/types";
import type { RefObject } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

type FintechCardsSectionProps = {
  fintechCardsSectionRef: RefObject<null>;
  fintechTitleRef: RefObject<null>;
  details: IndustryDetail[];
  fintechCarouselRef: RefObject<null>;
  fintechCard1Ref: RefObject<null>;
  fintechArrowRef: RefObject<null>;
  fintechCard2Ref: RefObject<null>;
  fintechArrow2Ref: RefObject<null>;
  fintechCard3Ref: RefObject<null>;
  fintechCard4Ref: RefObject<null>;
};

export function FintechCardsSection({
  fintechCardsSectionRef,
  fintechTitleRef,
  details,
  fintechCarouselRef,
  fintechCard1Ref,
  fintechArrowRef,
  fintechCard2Ref,
  fintechArrow2Ref,
  fintechCard3Ref,
  fintechCard4Ref,
}: FintechCardsSectionProps) {
  return (
    <section
      ref={fintechCardsSectionRef}
      className="industries-cards-sec bg-black min-h-[100vh] flex flex-col items-center justify-center relative w-full overflow-hidden"
    >
      <div className="industries-banking-layout flex-none">
        <h2 ref={fintechTitleRef}>{details[0]?.name}</h2>
        <img
          ref={fintechCarouselRef}
          className="industries-carousel"
          src="/figma/industries/carousel-button.svg"
          alt=""
          aria-hidden="true"
        />
        <article ref={fintechCard1Ref} className="industries-security-card">
          <span ref={fintechArrowRef} className="industries-security-arrow" aria-hidden="true">
            <ArrowDown size={28} strokeWidth={3} color="#7cff00" />
          </span>
          <p>{details[0]?.challengesDescription}</p>
        </article>

        <article ref={fintechCard2Ref} className="industries-resilience-card">
          <h3>{details[0]?.solutionsDescription}</h3>
          <span ref={fintechArrow2Ref} className="industries-resilience-arrow" aria-hidden="true">
            <ArrowRight size={28} strokeWidth={3} color="#7cff00" />
          </span>
        </article>

        <article ref={fintechCard3Ref} className="industries-speed-card">
          <p>{details[0]?.impactDescription}</p>
          <button type="button">
            Case Study
            <img src="/figma/industries/case-arrow.svg" alt="" aria-hidden="true" />
          </button>
        </article>

        <article ref={fintechCard4Ref} className="industries-banking-image">
          <img src={details[0]?.imageUrl} alt={details[0]?.name} />
        </article>
      </div>
    </section>
  );
}
