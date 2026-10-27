// ========================================= IMPORTS =================================================

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { productEnablerSchema, productSchema } from "@/lib/schemas";
import { ensureApi } from "@/lib/queries";
import type { Product } from "@/lib/types";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { PageShell } from "@/components/PageShell";
import { canPin } from "@/lib/motion";
import { ProductHeroSection } from "@/features/products/sections/ProductHeroSection";
import { EverySystemSection } from "@/features/products/sections/EverySystemSection";
import { OursAreBuiltSection } from "@/features/products/sections/OursAreBuiltSection";
import { ProductCardSection } from "@/features/products/sections/ProductCardSection";
import { WhatItEnablesSection } from "@/features/products/sections/WhatItEnablesSection";
import { NextSolveSection } from "@/features/products/sections/NextSolveSection";

// ========================================= ROUTE ====================================================

export const Route = createFileRoute("/products/")({
  // Products come from the database (published, in sort order), so they are in the first HTML.
  loader: async ({ context }) => ({
    products: await ensureApi(context.queryClient, "/api/products", z.array(productSchema), []),
    enablers: await ensureApi(
      context.queryClient,
      "/api/product-enablers",
      z.array(productEnablerSchema),
      [],
    ),
  }),
  head: () => ({
    meta: [
      {
        title: "Products — Asteri",
      },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: ProductsPage,
});

// ========================================= START HERE ===============================================
// Returns one field of the product with this slug (empty when the product is missing).
function productField(products: Product[], slug: string, field: "name" | "type") {
  return products.find((p) => p.slug === slug)?.[field] ?? "";
}

function ProductsPage() {
  const { products, enablers } = Route.useLoaderData();
  const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? "";
  const typeOf = (slug: string) => products.find((p) => p.slug === slug)?.type ?? "";

  // ========================================= REFS =====================================================
  const simpleQuoteSectionRef = useRef(null);
  const simpleQuoteTextRef = useRef(null);

  const builtSectionRef = useRef(null);
  const builtTextRef = useRef(null);

  const operationsSectionRef = useRef(null);
  const operationsTextRef = useRef(null);

  const productCardSectionRef = useRef(null);
  const productMainCardRef = useRef(null);
  const salesforceCardRef = useRef(null);
  const zohoCardRef = useRef(null);
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const dot4Ref = useRef(null);
  const dot5Ref = useRef(null);
  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  const productSubtitleRef = useRef<HTMLParagraphElement | null>(null);

  const [productName, setProductName] = useState(() => nameOf("salesforce"));

  const [productType, setProductType] = useState(() => typeOf("salesforce"));

  const enablesSectionRef = useRef(null);
  const enablesTitleRef = useRef(null);
  const enablesCard1Ref = useRef(null);
  const enablesCard2Ref = useRef(null);
  const enablesCard3Ref = useRef(null);
  const enablesCard4Ref = useRef(null);

  const nextRef = useRef<HTMLElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const nextTextRef = useRef<HTMLParagraphElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const cardsWrapperRef = useRef(null);

  /* ============================== REMOVED ANIMATIONS =================================

//================================= 3 Ours are built ===============================
          useEffect(() => {
            if (!builtSectionRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(builtTextRef.current, {
                y: 300,
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: builtSectionRef.current,
                  start: "top top",
                  end: "+=3500",
                  scrub: 1,
                  pin: canPin(),
                },
              });

              // COME UP

              tl.to(builtTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 2,
              })

              // PAUSE

              .to({}, { duration: 1.5 })

              // GO UP

              .to(builtTextRef.current, {
                y: -700,
                opacity: 0,
                duration: 2,
              });
            }, builtSectionRef);

            return () => ctx.revert();
          }, []);
//================================= 4 Solutions built for real operations. ============================================
          useEffect(() => {
            if (!operationsSectionRef.current) return;

            const ctx = gsap.context(() => {
              gsap.set(operationsTextRef.current, {
                x: 2500,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: operationsSectionRef.current,
                  start: "top top",
                  end: "+=3000",
                  scrub: 1,
                  pin: canPin(),
                },
              });

              tl.to(operationsTextRef.current, {
                x: -3000,
                ease: "none",
                duration: 3,
              });
            }, operationsSectionRef);

            return () => ctx.revert();
          }, []);

// ========================================= 5 CRM & Cloud Platform =====================================
// OLD USE EFFECT REMOVED
// ========================================= 6 WHAT IT ENABLES ==========================================
          useEffect(() => {
            if (!enablesSectionRef.current || enablers.length === 0) return;

            const ctx = gsap.context(() => {
              gsap.set(enablesTitleRef.current, {
                y: 300,
                opacity: 0,
              });

              gsap.set(enablesCard1Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard2Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard3Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              gsap.set(enablesCard4Ref.current, {
                y: 250,
                rotation: 0,
                opacity: 0,
              });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: enablesSectionRef.current,
                  start: "top top",
                  end: "+=6000",
                  scrub: 1,
                  pin: canPin(),
                },
              });

              // TITLE IN

              tl.to(enablesTitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
              });

              // HOLD

              tl.to({}, { duration: 1 });

              // TITLE SHIFT UP

              tl.to(enablesTitleRef.current, {
                y: -120,
                duration: 1,
              });

              // CARDS IN

              tl.to(
                enablesCard1Ref.current,
                {
                  y: 0,
                  rotation: 0,
                  opacity: 1,
                  duration: 1,
                },
                "<"
              )
                .to(
                  enablesCard2Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                )
                .to(
                  enablesCard3Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                )
                .to(
                  enablesCard4Ref.current,
                  {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                  },
                  "<"
                );

              // HOLD

              tl.to({}, { duration: 2 });

              // EXIT

              tl.to(
                [
                  enablesTitleRef.current,
                  enablesCard1Ref.current,
                  enablesCard2Ref.current,
                  enablesCard3Ref.current,
                  enablesCard4Ref.current,
                ],
                {
                  y: -1000,
                  opacity: 0,
                  duration: 2,
                }
              );
            }, enablesSectionRef);

            return () => ctx.revert();
          }, []);
//==================================  7 Let’s solve what’s next ==============================
      useEffect(() => {
        if (!nextRef.current) return;

        const ctx = gsap.context(() => {
          gsap.set(nextTitleRef.current, {
            y: 250,
            opacity: 0,
          });

          gsap.set(nextTextRef.current, {
            y: 150,
            opacity: 0,
          });

          gsap.set(nextBtnRef.current, {
            y: 150,
            opacity: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: nextRef.current,
              start: "top top",
              end: "+=700",
              scrub: 1,
              // pin: canPin(),
            },
          });

          // TITLE UP
          tl.to(nextTitleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          })

          // PAUSE
          .to({}, { duration: 3 })

          // SHIFT TITLE UP
          .to(nextTitleRef.current, {
            y: -100,
            duration: 1,
          })

          // TEXT UP
          .to(nextTextRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          })

          // PAUSE
          .to({}, { duration: 2 })

          // BUTTON UP
          .to(nextBtnRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        }, nextRef);

        return () => ctx.revert();
      }, []);
*/

  useEffect(() => {
    if (!simpleQuoteSectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: simpleQuoteSectionRef.current,
          start: "center center",
          end: "+=840",
          scrub: 1,
          pin: canPin(),
        },
      });

      tl.fromTo(
        ".simple-quote-line-1",
        { x: "-100vw" },
        { x: 0, ease: "power3.out", duration: 1 },
        0,
      );

      tl.fromTo(
        ".simple-quote-line-2",
        { x: "100vw" },
        { x: 0, ease: "power3.out", duration: 1 },
        0,
      );

      tl.to({}, { duration: 0.4 }); // Hold screen
    }, simpleQuoteSectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!builtSectionRef.current || !builtTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(builtTextRef.current, {
        y: 300,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: builtSectionRef.current,
          start: "top top",
          end: "+=3055",
          scrub: 1,
          pin: canPin(),
        },
      });

      // COME UP
      tl.to(builtTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
      })

        // PAUSE / HOLD
        .to({}, { duration: 0.8 })

        // GO UP / EXIT
        .to(builtTextRef.current, {
          y: -700,
          opacity: 0,
          duration: 2,
        });
    }, builtSectionRef);

    return () => ctx.revert();
  }, []);

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
  }, [products]);

  useEffect(() => {
    if (!enablesSectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state: Title slightly low, cards far right
      gsap.set(enablesTitleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(
        [
          enablesCard1Ref.current,
          enablesCard2Ref.current,
          enablesCard3Ref.current,
          enablesCard4Ref.current,
        ],
        {
          x: "100vw",
          opacity: 0,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: enablesSectionRef.current,
          start: "top top",
          end: "+=3320",
          scrub: true,
          pin: canPin(),
        },
      });

      // 1. Title comes in
      tl.to(enablesTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      // 2. Cards come in one by one from the right
      tl.to(enablesCard1Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard2Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard3Ref.current, { x: 0, opacity: 1, duration: 1 });
      tl.to(enablesCard4Ref.current, { x: 0, opacity: 1, duration: 1 });

      // 3. Hold at the end
      tl.to({}, { duration: 0.4 });
    }, enablesSectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!nextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([nextTitleRef.current, nextTextRef.current, nextBtnRef.current], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top top",
          end: "+=2400",
          scrub: true,
          pin: canPin(),
        },
      });

      // TITLE IN
      tl.to(nextTitleRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // PAUSE
      tl.to({}, { duration: 0.5 });

      // TEXT IN
      tl.to(nextTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // PAUSE
      tl.to({}, { duration: 0.5 });

      // BUTTON IN
      tl.to(nextBtnRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });

      // HOLD
      tl.to({}, { duration: 0.4 });
    }, nextRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      {/* =================== SECTION : 1 HERO ============================ */}
      <ProductHeroSection />
      {/* =================== SECTION : 2 Every system should  ========================== */}
      <EverySystemSection
        simpleQuoteSectionRef={simpleQuoteSectionRef}
        simpleQuoteTextRef={simpleQuoteTextRef}
      />
      {/* =================== SECTION : 3 Ours are built ============================ */}
      <OursAreBuiltSection builtSectionRef={builtSectionRef} builtTextRef={builtTextRef} />

      {/*============================= SECTION : 5 CRM & CLOUD PLATFORM ============================*/}
      <ProductCardSection
        products={products}
        productCardSectionRef={productCardSectionRef}
        productMainCardRef={productMainCardRef}
        productTitleRef={productTitleRef}
        productName={productName}
        productSubtitleRef={productSubtitleRef}
        productType={productType}
        cardsWrapperRef={cardsWrapperRef}
        dot1Ref={dot1Ref}
        dot2Ref={dot2Ref}
        dot3Ref={dot3Ref}
        dot4Ref={dot4Ref}
        dot5Ref={dot5Ref}
      />
      {/*============================= SECTION : 6 WHAT IT ENABLES ============================*/}
      <WhatItEnablesSection
        enablers={enablers}
        enablesSectionRef={enablesSectionRef}
        enablesTitleRef={enablesTitleRef}
        enablesCard1Ref={enablesCard1Ref}
        enablesCard2Ref={enablesCard2Ref}
        enablesCard3Ref={enablesCard3Ref}
        enablesCard4Ref={enablesCard4Ref}
      />
      {/*=======================SECTION : 7 Let’s solve what’s next =================*/}
      <NextSolveSection
        nextRef={nextRef}
        nextTitleRef={nextTitleRef}
        nextTextRef={nextTextRef}
        nextBtnRef={nextBtnRef}
      />
    </PageShell>
  );
}
// ========================================= END ========================================================
