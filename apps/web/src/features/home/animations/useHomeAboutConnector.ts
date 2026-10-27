import type { RefObject } from "react";
import { useEffect } from "react";

type useHomeAboutConnectorParams = {
  about2Ref: RefObject<HTMLDivElement | null>;
  aboutHeadingRef: RefObject<HTMLHeadingElement | null>;
  aboutConnectorLineRef: RefObject<HTMLSpanElement | null>;
  aboutConnectorDotRef: RefObject<HTMLSpanElement | null>;
};

export function useHomeAboutConnector({
  about2Ref,
  aboutHeadingRef,
  aboutConnectorLineRef,
  aboutConnectorDotRef,
}: useHomeAboutConnectorParams) {
  useEffect(() => {
    const section = about2Ref.current;
    const heading = aboutHeadingRef.current;
    const line = aboutConnectorLineRef.current;
    const dot = aboutConnectorDotRef.current;
    if (!section || !heading || !line || !dot) return;

    const measure = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const h = heading.getBoundingClientRect();
      const centre = h.top + h.height / 2 - sectionTop;
      line.style.height = `${centre}px`;
      dot.style.top = `${centre}px`;
    };

    measure();
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    ro.observe(heading);
    return () => ro.disconnect();
  }, [about2Ref, aboutHeadingRef, aboutConnectorLineRef, aboutConnectorDotRef]);
}
