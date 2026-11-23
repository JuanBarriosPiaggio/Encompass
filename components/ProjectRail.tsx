"use client";

import { useRef } from "react";
import Link from "next/link";
import { rail } from "@/lib/projects";
import { Photo } from "@/components/Photo";

export function ProjectRail() {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section className="section" aria-labelledby="selected-work" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="rail-head">
        <div>
          <p className="label">Selected work</p>
          <h2 id="selected-work">Houses we have drawn and built</h2>
        </div>
        <div className="rail-controls">
          <button type="button" className="icon-btn" aria-label="Previous projects" onClick={() => move(-1)}>
            ←
          </button>
          <button type="button" className="icon-btn" aria-label="Next projects" onClick={() => move(1)}>
            →
          </button>
        </div>
      </div>
      <div ref={scroller} className="rail" tabIndex={0} aria-label="Featured projects">
        {rail.map((item, index) => (
          <Link key={item.href + item.title} href={item.href} className="rail-card">
            <span className="frame">
              <Photo photo={item.image} sizes="(max-width: 800px) 82vw, 760px" />
            </span>
            <span className="rail-meta">
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.area}</p>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
