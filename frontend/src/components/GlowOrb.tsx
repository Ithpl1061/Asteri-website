import { forwardRef, type CSSProperties } from "react";

/**
 * Glowing green node used on the connector lines (Figma "Orb": 24px #15EC0D
 * with a six-layer #09D32A drop-shadow glow).
 */
export const GlowOrb = forwardRef<HTMLSpanElement, { className?: string; style?: CSSProperties }>(
  function GlowOrb({ className = "", style }, ref) {
    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={`pointer-events-none block h-4 w-4 rounded-full bg-[#15EC0D] sm:h-6 sm:w-6 ${className}`}
        style={{
          boxShadow:
            "0 0 3px #09D32A, 0 0 6px #09D32A, 0 0 21px #09D32A, 0 0 41px rgba(9,211,42,0.75), 0 0 71px rgba(9,211,42,0.5), 0 0 124px rgba(9,211,42,0.35)",
          ...style,
        }}
      />
    );
  },
);
