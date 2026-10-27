import type { Dispatch, RefObject, SetStateAction } from "react";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { canPin } from "@/lib/motion";
import type { Product } from "@/lib/types";

function productField(products: Product[], slug: string, field: "name" | "type") {
  return products.find((p) => p.slug === slug)?.[field] ?? "";
}

type useProductsCardSlidesParams = {
  productCardSectionRef: RefObject<null>;
  cardsWrapperRef: RefObject<null>;
  productMainCardRef: RefObject<null>;
  dot1Ref: RefObject<null>;
  dot2Ref: RefObject<null>;
  setProductName: Dispatch<SetStateAction<string>>;
  products: Product[];
  setProductType: Dispatch<SetStateAction<string>>;
  dot3Ref: RefObject<null>;
  dot4Ref: RefObject<null>;
  dot5Ref: RefObject<null>;
};

export function useProductsCardSlides({
  productCardSectionRef,
  cardsWrapperRef,
  productMainCardRef,
  dot1Ref,
  dot2Ref,
  setProductName,
  products,
  setProductType,
  dot3Ref,
  dot4Ref,
  dot5Ref,
}: useProductsCardSlidesParams) {
  useEffect(() => {
    if (!productCardSectionRef.current || !cardsWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(cardsWrapperRef.current, { yPercent: -50 });
      gsap.set(productMainCardRef.current, { y: 400, opacity: 0 });

      // Distance between two product cards = card width + gap. On desktop this is
      // 400 + 32 = 432px (unchanged); on phones the cards are narrower, so measure it.
      const cardStep = () => {
        const row = cardsWrapperRef.current as HTMLElement | null;
        const first = row?.firstElementChild as HTMLElement | null;
        if (!row || !first) return 432;
        return first.offsetWidth + (parseFloat(getComputedStyle(row).columnGap) || 0);
      };

      gsap.set(dot1Ref.current, {
        backgroundColor: "#8AF500",
      });

      gsap.set(dot2Ref.current, {
        backgroundColor: "#666",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: productCardSectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: window.innerWidth <= 767 ? 0.5 : true,
          pin: canPin(),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.2) {
              setProductName(productField(products, "salesforce", "name"));
              setProductType(productField(products, "salesforce", "type"));
            } else if (p < 0.4) {
              setProductName(productField(products, "zoho", "name"));
              setProductType(productField(products, "zoho", "type"));
            } else if (p < 0.6) {
              setProductName(productField(products, "1dox-ai", "name"));
              setProductType(productField(products, "1dox-ai", "type"));
            } else if (p < 0.8) {
              setProductName(productField(products, "manageengine", "name"));
              setProductType(productField(products, "manageengine", "type"));
            } else {
              setProductName(productField(products, "plsql", "name"));
              setProductType(productField(products, "plsql", "type"));
            }
          },
        },
      });

      // CARD ENTER
      tl.to(productMainCardRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
      });

      // PAUSE FOR 1ST CARD
      tl.to({}, { duration: 2 });

      // 2ND CARD
      tl.to(cardsWrapperRef.current, {
        x: () => -cardStep() * 1,
        duration: 2,
      });

      tl.to(dot1Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
      tl.to(dot2Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

      tl.to({}, { duration: 1.5 });

      // 3RD CARD
      tl.to(cardsWrapperRef.current, {
        x: () => -cardStep() * 2,
        duration: 2,
      });

      tl.to(dot2Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
      tl.to(dot3Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

      tl.to({}, { duration: 1.5 });

      // 4TH CARD
      tl.to(cardsWrapperRef.current, {
        x: () => -cardStep() * 3,
        duration: 2,
      });

      tl.to(dot3Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
      tl.to(dot4Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

      tl.to({}, { duration: 1.5 });

      // 5TH CARD
      tl.to(cardsWrapperRef.current, {
        x: () => -cardStep() * 4,
        duration: 2,
      });

      tl.to(dot4Ref.current, { backgroundColor: "#666", duration: 0.3 }, "<");
      tl.to(dot5Ref.current, { backgroundColor: "#8AF500", duration: 0.3 }, "<");

      tl.to({}, { duration: 1.5 });

      // CARD EXIT
      tl.to([productMainCardRef.current, cardsWrapperRef.current], {
        y: -1200,
        opacity: 0,
        duration: 2,
      });

      // Force ScrollTrigger to recalculate bounds now that the DOM is fully populated
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, productCardSectionRef);

    return () => ctx.revert();
  }, [
    products,
    productCardSectionRef,
    cardsWrapperRef,
    productMainCardRef,
    dot1Ref,
    dot2Ref,
    setProductName,
    setProductType,
    dot3Ref,
    dot4Ref,
    dot5Ref,
  ]);
}
