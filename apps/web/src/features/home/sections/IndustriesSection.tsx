import type { Industry } from "@/lib/types";
import type { RefObject } from "react";
import {
  HelpCircle,
  Banknote,
  Cpu,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Truck,
} from "lucide-react";

const INDUSTRY_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Banknote,
  Cpu,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Truck,
};
type IndustriesSectionProps = {
  industriesSectionRef: RefObject<HTMLDivElement | null>;
  industriesTitleRef: RefObject<HTMLDivElement | null>;
  industriesGridRef: RefObject<HTMLDivElement | null>;
  industries: Industry[];
};

export function IndustriesSection({
  industriesSectionRef,
  industriesTitleRef,
  industriesGridRef,
  industries,
}: IndustriesSectionProps) {
  return (
    <section
      ref={industriesSectionRef}
      className="home-industries relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black py-6 sm:min-h-[100dvh] sm:py-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:py-10"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between mb-4 lg:mb-6">
        <h2
          ref={industriesTitleRef}
          className="industries-title my-auto flex flex-col gap-[clamp(1rem,2.5vw,2.5rem)] uppercase tracking-tight text-white"
          style={{
            color: "#FFF",
            fontFamily: '"Inter", sans-serif',
            fontSize: "clamp(2.25rem, 8.88vw, 128px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          <div className="industries-left">Industries</div>
          <div className="industries-right ml-auto w-fit">We Serve</div>
        </h2>
      </div>

      <div
        ref={industriesGridRef}
        className="industries-grid w-full grid grid-cols-1 border-y border-white bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-auto"
      >
        {industries.map((i, idx) => {
          const IconComp = INDUSTRY_ICONS[i.iconName] || HelpCircle;
          return (
            <div
              key={i.id}
              className={`industry-card flex min-h-[163px] items-center justify-center bg-black px-4 py-[23px] sm:min-h-[183px] sm:px-6 ${
                idx < industries.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-white/50"
                  : ""
              }`}
            >
              <div className="text-center">
                <IconComp className="mx-auto mb-3 sm:mb-4 h-9 w-9 sm:h-10 sm:w-10 text-primary" />
                <div className="type-card text-white">
                  {i.titleLine1}
                  {i.titleLine2 ? (
                    <>
                      <br />
                      {i.titleLine2}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
