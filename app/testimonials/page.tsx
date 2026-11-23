import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Client words about Encompass London. Houzz ${site.houzzRating} from ${site.houzzReviews} reviews.`,
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Houzz {site.houzzRating}★ · {site.houzzReviews} reviews</p>
        <h1>Testimonials</h1>
      </header>
      <section className="section paper" style={{ paddingTop: "3rem" }}>
        <div className="seal-row">
          {site.houzzYears.map((year) => (
            <div key={year} className="seal">
              <strong>{year}</strong>
              <span>Best of Houzz</span>
            </div>
          ))}
        </div>
        <div className="review-grid" style={{ marginTop: "2rem" }}>
          {reviews.map((review) => (
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
        <p style={{ marginTop: "1rem" }}>
          <Link className="text-link" href="/contact/">
            Contact the studio
          </Link>
        </p>
      </section>
    </>
  );
}
