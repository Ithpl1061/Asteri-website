import type { RefObject } from "react";
import { Settings, Timer, ShieldCheck, HeartHandshake, type LucideIcon } from "lucide-react";
import type { ProductEnabler } from "@/lib/types";

type WhatItEnablesSectionProps = {
  enablers: ProductEnabler[];
  enablesSectionRef: RefObject<null>;
  enablesTitleRef: RefObject<null>;
  enablesCard1Ref: RefObject<null>;
  enablesCard2Ref: RefObject<null>;
  enablesCard3Ref: RefObject<null>;
  enablesCard4Ref: RefObject<null>;
};

const ENABLER_ICONS: Record<string, LucideIcon> = { Settings, Timer, ShieldCheck, HeartHandshake };

// Icon chosen by the iconName stored in the database.
function EnablerIcon({ name }: { name?: string }) {
  const Icon = (name && ENABLER_ICONS[name]) || Settings;
  return <Icon size={64} strokeWidth={3} className="text-[#8AF500]" />;
}

// Two-line title: the database stores "Line one\nLine two".
function TwoLineTitle({ title }: { title?: string }) {
  const [first, second] = (title ?? "").split("\n");
  return (
    <>
      {first}
      {second !== undefined && (
        <>
          <br />
          {second}
        </>
      )}
    </>
  );
}

export function WhatItEnablesSection({
  enablers,
  enablesSectionRef,
  enablesTitleRef,
  enablesCard1Ref,
  enablesCard2Ref,
  enablesCard3Ref,
  enablesCard4Ref,
}: WhatItEnablesSectionProps) {
  return (
    <section
      ref={enablesSectionRef}
      className="products-enables bg-black px-6 h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1360px]">
        {/* TITLE */}

        <div
          ref={enablesTitleRef}
          className="
                products-enables-title
                mb-16
              "
        >
          <h2
            className="
                  text-white
                  text-[clamp(2.25rem,5vw,4.5rem)]
                  font-bold
                  leading-[0.9]
                "
          >
            WHAT
            <br />
            IT ENABLES
          </h2>
        </div>

        {/* CARDS */}

        <div
          className="
                products-enables-grid
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
        >
          {/* CARD 1 */}

          <div ref={enablesCard1Ref} className="enable-card min-h-[310px]">
            <div className="enable-inner">
              <div className="enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between">
                <EnablerIcon name={enablers[0]?.iconName} />

                <h3
                  className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
                >
                  <TwoLineTitle title={enablers[0]?.title} />
                </h3>
              </div>
              <div className="enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between">
                <h3 className="text-black text-xl sm:text-2xl font-bold leading-[1.15]">
                  {enablers[0]?.title.replace("\n", " ")}
                </h3>
                <p className="text-black/80 text-base sm:text-lg font-medium leading-snug">
                  {enablers[0]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}

          <div ref={enablesCard2Ref} className="enable-card min-h-[310px]">
            <div className="enable-inner">
              <div className="enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between">
                <EnablerIcon name={enablers[1]?.iconName} />

                <h3
                  className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
                >
                  <TwoLineTitle title={enablers[1]?.title} />
                </h3>
              </div>
              <div className="enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between">
                <h3 className="text-black text-xl sm:text-2xl font-bold leading-[1.15]">
                  {enablers[1]?.title.replace("\n", " ")}
                </h3>
                <p className="text-black/80 text-base sm:text-lg font-medium leading-snug">
                  {enablers[1]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}

          <div ref={enablesCard3Ref} className="enable-card min-h-[310px]">
            <div className="enable-inner">
              <div className="enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between">
                <EnablerIcon name={enablers[2]?.iconName} />

                <h3
                  className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
                >
                  <TwoLineTitle title={enablers[2]?.title} />
                </h3>
              </div>
              <div className="enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between">
                <h3 className="text-black text-xl sm:text-2xl font-bold leading-[1.15]">
                  {enablers[2]?.title.replace("\n", " ")}
                </h3>
                <p className="text-black/80 text-base sm:text-lg font-medium leading-snug">
                  {enablers[2]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}

          <div ref={enablesCard4Ref} className="enable-card min-h-[310px]">
            <div className="enable-inner">
              <div className="enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between">
                <EnablerIcon name={enablers[3]?.iconName} />

                <h3
                  className="
                  text-black
                  text-xl
                  sm:text-2xl
                  font-bold
                  leading-[1.15]
                  text-right
                "
                >
                  <TwoLineTitle title={enablers[3]?.title} />
                </h3>
              </div>
              <div className="enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between">
                <h3 className="text-black text-xl sm:text-2xl font-bold leading-[1.15]">
                  {enablers[3]?.title.replace("\n", " ")}
                </h3>
                <p className="text-black/80 text-base sm:text-lg font-medium leading-snug">
                  {enablers[3]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
