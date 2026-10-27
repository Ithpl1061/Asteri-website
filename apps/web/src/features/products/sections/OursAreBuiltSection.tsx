import type { RefObject } from "react";

type OursAreBuiltSectionProps = {
  builtSectionRef: RefObject<null>;
  builtTextRef: RefObject<null>;
};

export function OursAreBuiltSection({ builtSectionRef, builtTextRef }: OursAreBuiltSectionProps) {
  return (
    <section
      ref={builtSectionRef}
      className="products-built bg-black h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="flex items-center justify-center">
        <div
          ref={builtTextRef}
          className="
                text-center
              "
        >
          <h2
            className="
                  text-white
                  font-bold
                  text-[clamp(1.5rem,3.5vw,3rem)]
                  leading-[1.05]
                "
          >
            Certified onboarding support
            <br />
            comes with every license.
          </h2>
        </div>
      </div>
    </section>
  );
}
