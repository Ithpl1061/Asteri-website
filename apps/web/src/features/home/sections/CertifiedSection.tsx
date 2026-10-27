import type { RefObject } from "react";
import { type CSSProperties } from "react";

type CertifiedSectionProps = {
  certifiedSectionRef: RefObject<HTMLElement | null>;
  certifiedWeRef: RefObject<HTMLSpanElement | null>;
  certifiedReRef: RefObject<HTMLSpanElement | null>;
  certifiedCertifiRef: RefObject<HTMLDivElement | null>;
  certifiedEdRef: RefObject<HTMLDivElement | null>;
  certifiedCopyRef: RefObject<HTMLParagraphElement | null>;
};

export function CertifiedSection({
  certifiedSectionRef,
  certifiedWeRef,
  certifiedReRef,
  certifiedCertifiRef,
  certifiedEdRef,
  certifiedCopyRef,
}: CertifiedSectionProps) {
  return (
    <section
      ref={certifiedSectionRef}
      className="certified-section relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16 lg:h-screen lg:py-0"
    >
      <div
        className="relative w-fit font-sans font-bold text-white"
        style={
          {
            "--fs": "clamp(72px, min(20.76vw, 299px, 32vh), 299px)",
            fontSize: "var(--fs)",
            lineHeight: 0.833,
          } as CSSProperties
        }
      >
        <div>
          <span ref={certifiedWeRef} className="inline-block will-change-transform">
            we
          </span>
          <span ref={certifiedReRef} className="inline-block will-change-transform">
            ’re
          </span>
        </div>
        <div ref={certifiedCertifiRef} className="will-change-transform">
          certifi
        </div>
        <div ref={certifiedEdRef} className="will-change-transform">
          ed
        </div>
        <p
          ref={certifiedCopyRef}
          className="certified-copy mt-6 max-w-[34rem] font-sans text-base font-semibold text-white will-change-transform lg:absolute lg:mt-0 lg:max-w-none"
        >
          We Work With Globally Recognized Technologies And Certified Solutions To Deliver Secure,
          Compliant, And Future-Ready Systems.
        </p>
      </div>
    </section>
  );
}
