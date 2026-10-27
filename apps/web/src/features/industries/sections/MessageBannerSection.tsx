import type { RefObject } from "react";

type MessageBannerSectionProps = {
  messageRef: RefObject<HTMLDivElement | null>;
  messageTextRef: RefObject<HTMLDivElement | null>;
};

export function MessageBannerSection({ messageRef, messageTextRef }: MessageBannerSectionProps) {
  return (
    <section
      ref={messageRef}
      className="industries-message bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative"
    >
      <div className="flex items-center justify-center">
        <div
          ref={messageTextRef}
          className="
                    max-w-[1400px]
                    px-10
                    text-center
                    text-white
                    font-bold
                    leading-[1.2]
                    text-[clamp(1.2rem,2.8vw,2.35rem)]
                  "
        >
          Every sector has different compliance needs,
          <br />
          data complexity, and growth pressure.
        </div>
      </div>
    </section>
  );
}
