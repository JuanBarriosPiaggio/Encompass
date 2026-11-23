import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Estimator } from "@/components/Estimator";
import { Hero } from "@/components/Hero";
import { ProjectRail } from "@/components/ProjectRail";
import { Photo } from "@/components/Photo";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { photos } from "@/lib/media";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: { absolute: "Loft Conversions Earlsfield | Encompass London" },
  description:
    "Loft conversions and extensions in Earlsfield, designed and built by one team. Encompass London, 338 Garratt Lane, SW18 4EL.",
};

const services = [
  { href: "/loft-conversions", title: "Loft conversions", className: "s-loft", image: photos.loftBedroom, index: "01" },
  { href: "/staircases", title: "Staircases & joinery", className: "s-stairs", image: photos.stairSky, index: "02" },
  { href: "/extensions", title: "Extensions", className: "s-ext", image: photos.extLiving, index: "03" },
  { href: "/kitchens", title: "Kitchens", className: "s-kit", image: photos.kitTeal, index: "04" },
  { href: "/bathrooms", title: "Bathrooms", className: "s-bath", image: photos.bathBlue, index: "05" },
  { href: "/interiors", title: "Interiors", className: "s-int", image: photos.intLiving, index: "06" },
];

const steps = [
  { n: "01", title: "Survey", text: "We come to the house, measure it, and listen to how you want to live in the new rooms." },
  { n: "02", title: "Design & planning", text: "Drawings, planning or permitted development, and the structural engineer. One point of contact." },
  { n: "03", title: "Build", text: "The same team builds what it drew. Lofts, extensions, kitchens, bathrooms, stairs and the rest of the house." },
  { n: "04", title: "Handover", text: "Building control is closed out, and the rooms are ready to use." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="trust-wrap">
        <div className="trust-inner">
          <p className="trust">
            <span>Houzz {site.houzzRating}★</span>
            <span>{site.houzzReviews} reviews</span>
            <span>Best of Houzz ×{site.houzzYears.length}</span>
            <span>Design & build under one roof</span>
          </p>
        </div>
      </div>
      <ProjectRail />
      <section className="section" aria-labelledby="services-heading">
        <div className="section-head">
          <p className="label">The practice</p>
          <h2 id="services-heading">What we draw, we build.</h2>
          <p className="lede">
            Architectural drawings, planning or permitted development, structural engineering, building control and the build itself. One team. One point of contact.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className={`service ${service.className}`}>
              <span className="service-media">
                <Photo photo={service.image} sizes="(max-width: 900px) 100vw, 40vw" />
              </span>
              <span className="service-meta">
                <span className="idx">{service.index}</span>
                <h3>{service.title}</h3>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section" id="estimate" aria-labelledby="estimate-heading" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="label">Guide price</p>
          <h2 id="estimate-heading">Instant loft estimate</h2>
          <p className="lede">Five loft types, adjusted for the house. A survey turns the guide into a fixed quote.</p>
        </div>
        <Estimator />
      </section>
      <section className="section" aria-labelledby="process-heading" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="label">How it works</p>
          <h2 id="process-heading">From the first visit to handover.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article key={step.n} className="step">
              <p className="num">{step.n}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section paper" aria-labelledby="reviews-heading">
        <div className="section-head">
          <p className="label">Houzz</p>
          <h2 id="reviews-heading">
            {site.houzzRating}★ from {site.houzzReviews} reviews
          </h2>
          <p className="lede">Best of Houzz in {site.houzzYears.join(", ")}.</p>
        </div>
        <div className="seal-row">
          {site.houzzYears.map((year) => (
            <div key={year} className="seal">
              <strong>{year}</strong>
              <span>Best of Houzz</span>
            </div>
          ))}
        </div>
        <div className="review-grid">
          {reviews.slice(0, 3).map((review) => (
            <article key={review.name} className="review">
              <p>“{review.quote}”</p>
              <footer>{review.name}</footer>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "1.8rem" }}>
          <a className="text-link" href={site.houzz} target="_blank" rel="noreferrer">
            Read all {site.houzzReviews} reviews on Houzz
          </a>
        </p>
      </section>
      <section className="section" aria-labelledby="areas-heading">
        <div className="section-head">
          <p className="label">South West London and Surrey</p>
          <h2 id="areas-heading">Where we build</h2>
        </div>
        <div className="area-strip">
          {areas.map((area) => (
            <Link key={area.slug} href={`/${area.path}/`}>
              {area.name}
              <span>{area.postcodes}</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand photo={photos.extBifold} />
    </>
  );
}
