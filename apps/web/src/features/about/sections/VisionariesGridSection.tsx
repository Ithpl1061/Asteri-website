import type { RefObject } from "react";
import { TeamMember } from "@/lib/types";

import { ArrowUpRight } from "lucide-react";

function VisionariesSection({
  visionaries,
  sectionRef,
  circleRef,
  imageRefs,
  contentRefs,
}: {
  visionaries: TeamMember[];
  sectionRef: React.RefObject<HTMLElement | null>;
  circleRef: React.RefObject<HTMLDivElement | null>;
  imageRefs: React.MutableRefObject<HTMLImageElement[]>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-black">
      <div className="flex h-screen items-center overflow-hidden">
        <div className="visionaries-grid mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 lg:gap-20 px-8 lg:px-12">
          {/* Visual area */}
          <div className="visionaries-visual relative h-[560px]">
            <div className="absolute inset-0">
              <div
                ref={circleRef}
                className="
                  visionaries-circle
                  absolute
                  left-10
                  top-8
                  z-0
                  h-[460px]
                  w-[460px]
                  rounded-full
                  bg-white
                "
              />

              {visionaries.map((person, index) => (
                <img
                  key={person.name}
                  ref={(element) => {
                    if (element) {
                      imageRefs.current[index] = element;
                    }
                  }}
                  src={person.imageUrl}
                  alt={person.name}
                  className="
                    visionaries-photo
                    absolute
                    top-4
                    left-10
                    z-10
                    w-[460px]
                    max-h-[490px]
                    select-none
                    object-contain
                    pointer-events-none
                  "
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    zIndex: visionaries.length - index,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="visionaries-content relative h-[560px]">
            {visionaries.map((person, index) => (
              <div
                key={person.name}
                ref={(element) => {
                  if (element) {
                    contentRefs.current[index] = element;
                  }
                }}
                className="absolute inset-0 flex flex-col justify-center space-y-6"
                style={{
                  opacity: index === 0 ? 1 : 0,
                }}
              >
                <p className="type-label text-zinc-400">The Visionaries</p>

                <h2 className="type-heading text-white">{person.name}</h2>

                <h3 className="type-card text-zinc-300">{person.role}</h3>

                <p className="max-w-xl type-body text-zinc-400">{person.experience}</p>

                <a href={person.linkedinUrl} className="group inline-flex items-center gap-4 pt-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#82E926] transition group-hover:scale-110">
                    <ArrowUpRight size={28} className="text-black" />
                  </span>

                  <span className="text-lg text-white">LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
type VisionariesGridSectionProps = {
  visionaries: TeamMember[];
  visionariesSectionRef: RefObject<HTMLElement | null>;
  visionariesCircleRef: RefObject<HTMLDivElement | null>;
  visionariesImageRefs: RefObject<HTMLImageElement[]>;
  visionariesContentRefs: RefObject<HTMLDivElement[]>;
};

export function VisionariesGridSection({
  visionaries,
  visionariesSectionRef,
  visionariesCircleRef,
  visionariesImageRefs,
  visionariesContentRefs,
}: VisionariesGridSectionProps) {
  return (
    <VisionariesSection
      visionaries={visionaries}
      sectionRef={visionariesSectionRef}
      circleRef={visionariesCircleRef}
      imageRefs={visionariesImageRefs}
      contentRefs={visionariesContentRefs}
    />
  );
}
