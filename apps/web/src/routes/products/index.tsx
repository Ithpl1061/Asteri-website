// ========================================= IMPORTS =================================================

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { productEnablerSchema, productSchema } from "@/lib/schemas";
import { ensureApi } from "@/lib/queries";

import { useRef, useState } from "react";

import { PageShell } from "@/components/PageShell";

import { ProductHeroSection } from "@/features/products/sections/ProductHeroSection";
import { EverySystemSection } from "@/features/products/sections/EverySystemSection";
import { OursAreBuiltSection } from "@/features/products/sections/OursAreBuiltSection";
import { ProductCardSection } from "@/features/products/sections/ProductCardSection";
import { WhatItEnablesSection } from "@/features/products/sections/WhatItEnablesSection";
import { NextSolveSection } from "@/features/products/sections/NextSolveSection";
import { useProductsSimpleQuote } from "@/features/products/animations/useProductsSimpleQuote";
import { useProductsBuilt } from "@/features/products/animations/useProductsBuilt";
import { useProductsCardSlides } from "@/features/products/animations/useProductsCardSlides";
import { useProductsEnables } from "@/features/products/animations/useProductsEnables";
import { useProductsNext } from "@/features/products/animations/useProductsNext";

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

function ProductsPage() {
  const { products, enablers } = Route.useLoaderData();
  const nameOf = (slug: string) => products.find((p) => p.slug === slug)?.name ?? "";
  const typeOf = (slug: string) => products.find((p) => p.slug === slug)?.type ?? "";

  // ========================================= REFS =====================================================
  const simpleQuoteSectionRef = useRef(null);
  const simpleQuoteTextRef = useRef(null);

  const builtSectionRef = useRef(null);
  const builtTextRef = useRef(null);

  const productCardSectionRef = useRef(null);
  const productMainCardRef = useRef(null);
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

  useProductsSimpleQuote({ simpleQuoteSectionRef });

  useProductsBuilt({ builtSectionRef, builtTextRef });

  useProductsCardSlides({
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
  });

  useProductsEnables({
    enablesSectionRef,
    enablesTitleRef,
    enablesCard1Ref,
    enablesCard2Ref,
    enablesCard3Ref,
    enablesCard4Ref,
  });

  useProductsNext({ nextRef, nextTitleRef, nextTextRef, nextBtnRef });

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
