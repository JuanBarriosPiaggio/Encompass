"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/media";
import { Photo } from "@/components/Photo";
import { Sheen } from "@/components/Buttons";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReady(true);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!ready || paused || reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [ready, paused, reduce]);

  const slides = ready ? heroSlides : heroSlides.slice(0, 1);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Recent Encompass London projects">
      <div className="hero-media">
        {slides.map((slide, slideIndex) => (
          <div key={slide.id} className={slideIndex === index ? "hero-slide is-active" : "hero-slide"} aria-hidden={slideIndex !== index}>
            <div className="drift fill">
              <Photo photo={slide} priority={slideIndex === 0} sizes="100vw" />
            </div>
          </div>
        ))}
      </div>
      <div className="hero-plate">
        <p className="label">Earlsfield · South West London</p>
        <h1>
          Lofts and extensions, <br />
          designed and built <br />
          by one team.
        </h1>
        <div className="hero-actions">
          <Link href="/estimate" className="btn btn-gold">
            <Sheen />
            <span className="btn-label">Get an instant estimate</span>
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            View our work
          </Link>
        </div>
        <div className="hero-ui">
          <div className="dots" role="group" aria-label="Slides">
            {heroSlides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                aria-current={slideIndex === index ? "true" : undefined}
                aria-label={`Show image ${slideIndex + 1}: ${slide.alt}`}
                onClick={() => setIndex(slideIndex)}
              >
                0{slideIndex + 1}
              </button>
            ))}
          </div>
          <button className="pause" type="button" aria-pressed={paused || reduce} onClick={() => setPaused((value) => !value)}>
            {paused || reduce ? "Play" : "Pause"}
          </button>
        </div>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {heroSlides[index]?.alt}
      </p>
    </section>
  );
}
