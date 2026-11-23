"use client";

import { useEffect, useRef } from "react";

export function Parallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = frame.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 900px)").matches;
    if (reduce || !wide) return;
    const inner = root.querySelector<HTMLElement>("[data-parallax]");
    if (!inner) return;
    let frameId = 0;
    const update = () => {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const y = Math.max(-22, Math.min(22, progress * -26));
      inner.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={frame} className={`parallax ${className}`.trim()}>
      <div className="parallax-inner" data-parallax>
        {children}
      </div>
    </div>
  );
}
