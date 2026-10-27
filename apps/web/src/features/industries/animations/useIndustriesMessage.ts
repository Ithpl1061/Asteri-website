import type { RefObject } from "react";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { canPin } from "@/lib/motion";

type useIndustriesMessageParams = {
  messageRef: RefObject<HTMLDivElement | null>;
  messageTextRef: RefObject<HTMLDivElement | null>;
};

export function useIndustriesMessage({ messageRef, messageTextRef }: useIndustriesMessageParams) {
  useEffect(() => {
    if (!messageRef.current || !messageTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(messageTextRef.current, {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: messageRef.current,
          start: "top top",
          end: "+=1120",
          scrub: true,
          pin: canPin(),
        },
      });

      tl.to(messageTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to({}, { duration: 0.4 });
    }, messageRef);

    return () => ctx.revert();
  }, [messageRef, messageTextRef]);
}
