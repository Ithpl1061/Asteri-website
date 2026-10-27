import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";

type ProductCardSectionProps = {
  productCardSectionRef: RefObject<null>;
  productMainCardRef: RefObject<null>;
  productTitleRef: RefObject<HTMLHeadingElement | null>;
  productName: string;
  productSubtitleRef: RefObject<HTMLParagraphElement | null>;
  productType: string;
  products: Product[];
  cardsWrapperRef: RefObject<null>;
  dot1Ref: RefObject<null>;
  dot2Ref: RefObject<null>;
  dot3Ref: RefObject<null>;
  dot4Ref: RefObject<null>;
  dot5Ref: RefObject<null>;
};

export function ProductCardSection({
  productCardSectionRef,
  productMainCardRef,
  productTitleRef,
  productName,
  productSubtitleRef,
  productType,
  products,
  cardsWrapperRef,
  dot1Ref,
  dot2Ref,
  dot3Ref,
  dot4Ref,
  dot5Ref,
}: ProductCardSectionProps) {
  const bySlug = (slug: string) => products.find((p) => p.slug === slug);
  return (
    <section
      ref={productCardSectionRef}
      className="products-crm-sec bg-black h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full mx-auto overflow-hidden">
        <div
          ref={productMainCardRef}
          className="
                products-main-card
                w-full
                min-h-[700px]
                bg-[#EAEAEA]
                p-8
                md:p-14
                relative
              "
        >
          {/* LEFT */}

          <div className="relative z-10 max-w-full pt-10 md:max-w-[40%]">
            <h2
              ref={productTitleRef}
              className="
                  text-black
                  text-[clamp(2.25rem,5vw,4.5rem)]
                  font-bold
                  leading-none
                  break-words
                "
            >
              {productName}
            </h2>

            <p
              ref={productSubtitleRef}
              className="
                  text-black
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  mt-4
                "
            >
              {productType}
            </p>

            {/* BUTTON */}
            <button
              className="
                  mt-16
                  md:mt-32
                  flex
                  items-center
                  gap-4
                  pl-8
                  pr-3
                  py-3
                  rounded-full
                  border
                  border-[#82E926]
                  bg-[#82E926]/20
                    text-black
                    text-base
                    sm:text-lg
                  font-bold
                "
            >
              Contact us
              <div
                className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#8AF500]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
              >
                <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* CardsWrapper */}
          <div
            className="
                    products-cards-panel
                    relative
                    mt-16
                    h-[620px]
                    w-full
                    bg-[#DDDDDD]
                    rounded-[40px]
                    overflow-hidden
                    md:absolute
                    md:right-0
                    md:top-0
                    md:mt-0
                    md:h-full
                    md:w-[58%]
                    md:rounded-l-[40px]
                  "
          >
            <div
              ref={cardsWrapperRef}
              className="
                      products-cards-row
                      absolute
                      left-[8%]
                      top-[47%]
                      -translate-y-1/2
                      flex
                      flex-row
                      items-center
                      gap-8
                      w-max
                    "
            >
              {/* SALESFORCE */}

              <div
                className="
                    products-card shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
              >
                <img src={bySlug("salesforce")?.logoUrl ?? ""} className="w-[170px]" />

                <p className="text-black type-lead font-semibold font-medium mt-12 leading-[1.2]">
                  {bySlug("salesforce")?.description}
                </p>

                <button
                  className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                >
                  Know More
                  <div
                    className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>

              {/* ZOHO */}

              <div
                className="
                    products-card shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
              >
                <img src={bySlug("zoho")?.logoUrl ?? ""} className="w-[170px]" />

                <p className="text-black type-lead font-semibold font-medium mt-12 leading-[1.2]">
                  {bySlug("zoho")?.description}
                </p>

                <button
                  className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                >
                  Know More
                  <div
                    className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>

              {/* 3: 1dox.ai */}
              <div
                className="
                    products-card shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
              >
                <img src={bySlug("1dox-ai")?.logoUrl ?? ""} className="w-[190px]" />

                <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                  {bySlug("1dox-ai")?.description}
                </p>

                <button
                  className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                >
                  Know More
                  <div
                    className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>

              {/* 4: ManageEngine */}
              <div
                className="
                    products-card shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
              >
                <img src={bySlug("manageengine")?.logoUrl ?? ""} className="w-[220px]" />

                <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                  {bySlug("manageengine")?.description}
                </p>

                <button
                  className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                >
                  Know More
                  <div
                    className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>

              {/* 5: PL/SQL */}
              <div
                className="
                    products-card shrink-0
                    w-[400px]
                    h-[520px]
                    rounded-[35px]
                    bg-[#F3F3F3]
                    p-10
                    flex
                    flex-col
                  "
              >
                <img src={bySlug("plsql")?.logoUrl ?? ""} className="w-[150px]" />

                <p className="text-black type-lead font-semibold font-medium mt-14 leading-[1.2]">
                  {bySlug("plsql")?.description}
                </p>

                <button
                  className="
                      mt-auto
                      w-max
                      flex
                      items-center
                      gap-3
                      pl-4
                      pr-2
                      py-2
                      rounded-full
                      border
                      border-[#82E926]
                      bg-[#82E926]/20
                      text-black
                      text-sm
                      sm:text-base
                      font-semibold
                    "
                >
                  Know More
                  <div
                    className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#8AF500]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <ArrowUpRight size={30} className="text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </div>

            {/* DOTS */}

            <div
              className="
                  products-dots
                  absolute
                  bottom-12
                  left-1/2
                  -translate-x-1/2
                  flex
                  gap-4
                "
            >
              <div ref={dot1Ref} className="w-4 h-4 rounded-full" />

              <div ref={dot2Ref} className="w-4 h-4 rounded-full" />

              <div ref={dot3Ref} className="w-4 h-4 rounded-full bg-[#666]" />

              <div ref={dot4Ref} className="w-4 h-4 rounded-full bg-[#666]" />

              <div ref={dot5Ref} className="w-4 h-4 rounded-full bg-[#666]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
