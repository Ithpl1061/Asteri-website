import type { RefObject } from "react";
import { useLayoutEffect } from "react";

type useAboutHeroEntranceParams = {
  orbSvgRef: RefObject<SVGSVGElement | null>;
  orbPathRef: RefObject<SVGPathElement | null>;
  orbDotRef: RefObject<SVGCircleElement | null>;
  heroHeadlineRef: RefObject<HTMLHeadingElement | null>;
  heroBusinessRef: RefObject<HTMLSpanElement | null>;
  heroSubRef: RefObject<HTMLParagraphElement | null>;
  heroCtaRef: RefObject<HTMLButtonElement | null>;
};

export function useAboutHeroEntrance({
  orbSvgRef,
  orbPathRef,
  orbDotRef,
  heroHeadlineRef,
  heroBusinessRef,
  heroSubRef,
  heroCtaRef,
}: useAboutHeroEntranceParams) {
  useLayoutEffect(() => {
    const svg = orbSvgRef.current;
    const path = orbPathRef.current;
    const dot = orbDotRef.current;
    const headline = heroHeadlineRef.current;
    const business = heroBusinessRef.current;
    const sub = heroSubRef.current;
    const cta = heroCtaRef.current;
    const container = svg?.parentElement;
    if (!svg || !path || !dot || !headline || !business || !sub || !cta || !container) return;

    const RADIUS = 10;
    const roundedPath = (pts: { x: number; y: number }[]) => {
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const [a, b, c] = [pts[i - 1], pts[i], pts[i + 1]];
        const r = Math.min(
          RADIUS,
          Math.hypot(b.x - a.x, b.y - a.y) / 2,
          Math.hypot(c.x - b.x, c.y - b.y) / 2,
        );
        const inX = b.x - Math.sign(b.x - a.x) * r;
        const inY = b.y - Math.sign(b.y - a.y) * r;
        const outX = b.x + Math.sign(c.x - b.x) * r;
        const outY = b.y + Math.sign(c.y - b.y) * r;
        d += ` L ${inX} ${inY} Q ${b.x} ${b.y} ${outX} ${outY}`;
      }
      const last = pts[pts.length - 1];
      return `${d} L ${last.x} ${last.y}`;
    };

    let frame = 0;
    const build = () => {
      const c = container.getBoundingClientRect();
      if (c.width === 0 || c.height === 0) return;
      const local = (r: DOMRect) => ({
        left: r.left - c.left,
        right: r.right - c.left,
        top: r.top - c.top,
        bottom: r.bottom - c.top,
        width: r.width,
        height: r.height,
      });
      const s = parseFloat(getComputedStyle(headline).fontSize) / 96;
      const line1 = local(headline.children[0].getBoundingClientRect());
      const biz = local(business.getBoundingClientRect());
      const subR = local(sub.getBoundingClientRect());
      const btn = local(cta.getBoundingClientRect());

      // On phones the headline wraps, so "Business" sits on a later line and the desktop
      // drop (above "Business") would cut through the first lines. Detect that and
      // re-aim the drop into the free space beside those lines (same shape as desktop).
      const lineH = parseFloat(getComputedStyle(headline).fontSize) * (116 / 96);
      const line2H = headline.children[1].getBoundingClientRect().height;
      const wrapped = line1.height > lineH * 1.5 || line2H > lineH * 1.5;
      const yTurn = line1.bottom - 13 * s;
      // The line may run outside the content column (as in Figma); keep it on screen.
      const xRight = wrapped
        ? c.width - line1.left / 2 // mirror of the left gutter: clear of every line of text
        : Math.min(biz.right + 28 * s, window.innerWidth - c.left - RADIUS - 2);
      // Same shape as desktop: the line drops through the empty space to the right of the
      // short first lines ("Technology" / "That"), turns under them, and runs to the side.
      let maxRight1 = 0;
      if (wrapped) {
        const walker = document.createTreeWalker(headline.children[0], NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (!n.textContent?.trim()) continue;
          range.selectNodeContents(n);
          for (const r of Array.from(range.getClientRects()))
            maxRight1 = Math.max(maxRight1, r.right - c.left);
        }
      }
      const freeW = xRight - maxRight1;
      const xDrop = wrapped
        ? freeW >= 30
          ? (maxRight1 + xRight) / 2
          : Math.max(6, line1.left / 2)
        : biz.left + biz.width * 0.52;
      // Below the button, but never past the hero's visible bottom edge.
      const yBottom = Math.min(btn.bottom + 49 * s, c.height - 16);
      const xReturn = btn.right + 204 * s;
      const yGap = subR.bottom + (btn.top - subR.bottom) * 0.476;

      const d = roundedPath([
        { x: xDrop, y: 0 },
        { x: xDrop, y: yTurn },
        { x: xRight, y: yTurn },
        { x: xRight, y: yBottom },
        { x: xReturn, y: yBottom },
        { x: xReturn, y: yGap },
        { x: -c.left - 10, y: yGap }, // out past the screen's left edge
      ]);
      // Only touch the DOM when the geometry really changed (pinning the hero
      // can resize the container without changing the path).
      if (d === path.getAttribute("d")) return;
      svg.setAttribute("viewBox", `0 0 ${c.width} ${c.height}`);
      path.setAttribute("d", d);
      dot.setAttribute("cx", String(xDrop));
      // On phones the dot rides inside the narrow side gutter, so it must be smaller than it.
      dot.setAttribute(
        "r",
        wrapped ? String(Math.min(14, Math.max(5, (freeW >= 30 ? freeW / 2 : xDrop) - 4))) : "14",
      );
      dot.setAttribute("cy", "0");
    };

    // No ScrollTrigger.refresh() here: forcing a full refresh from this observer
    // re-laid out every pin on the page each time pinning resized the hero
    // (refresh -> pin -> resize -> refresh), which made the hero lag. ScrollTrigger
    // already refreshes on window resize and once after fonts/images load, and the
    // dot's motionPath re-reads the path then (invalidateOnRefresh).
    const rebuild = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(build);
    };

    build();
    document.fonts?.ready.then(rebuild);
    const ro = new ResizeObserver(rebuild);
    ro.observe(container);
    ro.observe(headline);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [orbSvgRef, orbPathRef, orbDotRef, heroHeadlineRef, heroBusinessRef, heroSubRef, heroCtaRef]);
}
