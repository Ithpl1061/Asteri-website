import { useEffect, useRef } from "react";

/**
 * Cinematic glowing orb that follows a vertical path connecting major sections.
 * The line is a thin neon hairline; the orb travels along it as the user scrolls.
 */
export function OrbTrail() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const orb = orbRef.current;
    const line = lineRef.current;
    if (!wrap || !orb || !line) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const total = wrap.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        const len = line.getTotalLength();
        const pt = line.getPointAtLength(len * p);
        orb.style.transform = `translate3d(${pt.x - 8}px, ${pt.y - 8}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
      <svg
        className="absolute left-1/2 top-0 h-full w-[200px] -translate-x-1/2"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="orbline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.88 0.27 142)" stopOpacity="0" />
            <stop offset="20%" stopColor="oklch(0.88 0.27 142)" stopOpacity="0.6" />
            <stop offset="80%" stopColor="oklch(0.88 0.27 142)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.88 0.27 142)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={lineRef}
          d="M100,0 C100,150 40,220 40,360 C40,500 160,560 160,700 C160,840 100,880 100,1000"
          stroke="url(#orbline)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
      <div
        ref={orbRef}
        className="absolute left-1/2 top-0 h-4 w-4 rounded-full bg-primary animate-pulse-glow"
        style={{ marginLeft: "-100px" }}
      />
    </div>
  );
}
