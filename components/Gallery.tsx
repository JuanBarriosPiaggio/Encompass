"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo as PhotoType } from "@/lib/media";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Gallery({ images }: { images: PhotoType[] }) {
  const full = images.filter((image) => !image.low);
  const thumbs = images.filter((image) => image.low);
  const ordered = [...full, ...thumbs];
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number | null>(null);
  indexRef.current = index;

  useEffect(() => {
    if (index === null) return;
    const root = dialogRef.current;
    const previously = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const close = root?.querySelector<HTMLElement>("[data-close]");
    close?.focus();

    const onKey = (event: KeyboardEvent) => {
      const current = indexRef.current;
      if (current === null) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setIndex(null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current + 1) % ordered.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current - 1 + ordered.length) % ordered.length);
      } else if (event.key === "Tab" && root) {
        const nodes = [...root.querySelectorAll<HTMLElement>("button")];
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previously?.focus();
    };
  }, [index === null, ordered.length]);

  const active = index === null ? null : ordered[index];

  return (
    <>
      <div className="masonry">
        {full.map((image) => (
          <figure key={image.id}>
            <Reveal>
              <button type="button" className={image.portrait ? "shot portrait" : "shot"} onClick={() => setIndex(ordered.findIndex((item) => item.id === image.id))}>
                <span className="frame">
                  <Photo photo={image} sizes="(max-width: 700px) 100vw, 33vw" />
                </span>
              </button>
              <figcaption>{image.alt}</figcaption>
            </Reveal>
          </figure>
        ))}
      </div>
      {thumbs.length ? (
        <div className="thumbs" aria-label="Smaller frames">
          {thumbs.map((image) => (
            <button key={image.id} type="button" className="shot" onClick={() => setIndex(ordered.findIndex((item) => item.id === image.id))}>
              <span className="frame">
                <Photo photo={image} sizes="220px" />
              </span>
              <span className="visually-hidden">{image.alt}</span>
            </button>
          ))}
        </div>
      ) : null}

      {active && index !== null ? (
        <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <div className="lb-bar">
            <p className="label">
              {String(index + 1).padStart(2, "0")} / {String(ordered.length).padStart(2, "0")}
            </p>
            <button type="button" className="btn btn-ghost" data-close onClick={() => setIndex(null)}>
              Close
            </button>
          </div>
          <div className={active.low ? "lb-stage small" : "lb-stage"}>
            {/* Lightbox uses a plain image so low-resolution frames stay contained. */}
            <img src={active.src} alt={active.alt} />
          </div>
          <div className="lb-bar">
            <p className="lb-caption">{active.alt}</p>
            <div className="lb-nav">
              <button type="button" className="icon-btn" aria-label="Previous image" onClick={() => setIndex((index - 1 + ordered.length) % ordered.length)}>
                ←
              </button>
              <button type="button" className="icon-btn" aria-label="Next image" onClick={() => setIndex((index + 1) % ordered.length)}>
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
