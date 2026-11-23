import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Estimator } from "@/components/Estimator";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { loftTypes } from "@/lib/estimator";
import { loftFaqs } from "@/lib/projects";
import { loftGallery, photos } from "@/lib/media";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { formatGBP } from "@/lib/site";

const description =
  "Velux, dormer, L-shaped, hip-to-gable and mansard lofts, designed and built by Encompass Lofts in Earlsfield. Guide prices from £32,000.";

export const metadata: Metadata = {
  title: "Loft conversions in South West London",
  description,
  alternates: { canonical: "/loft-conversions" },
};

export default function LoftPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loftFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Loft conversions",
            path: "/loft-conversions",
            description,
            serviceType: "Loft conversion",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Loft conversions", path: "/loft-conversions" },
          ]),
          faq,
        ]}
      />
      <PageHero
        photo={photos.loftBedroom}
        label="Encompass Lofts · Earlsfield"
        title="Loft conversions"
        caption="A bedroom, a bathroom, or a quiet room under the roof you already own. We draw it and we build it."
      />
      <section className="section">
        <div className="section-head">
          <p className="label">Types and guide prices</p>
          <h2>Five ways to use the roof.</h2>
          <p className="lede">
            Loft conversions trade as Encompass Lofts. The bands below are guides. A survey is required for a fixed quote. Terraced houses are the base. A semi adds 3%, a detached house 6%, and a top-floor flat 10%, subject to freeholder consent.
          </p>
        </div>
        <div className="loft-types">
          {loftTypes.map((type) => (
            <article key={type.id} className="loft-type">
              <div className="frame">
                <img src={type.image.src} alt={type.image.alt} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
              </div>
              <div>
                <h3>{type.name}</h3>
                <p className="band" style={{ marginTop: "0.6rem" }}>
                  {formatGBP(type.min)}–{formatGBP(type.max)}
                </p>
                <p className="est-time">{type.time}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="loft-estimate">
        <div className="section-head">
          <h2 id="loft-estimate">Price your loft</h2>
          <p className="lede">The same guide, adjusted as you choose. Nothing on this page is sent anywhere.</p>
        </div>
        <Estimator />
      </section>
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="loft-gallery">
        <div className="section-head">
          <p className="label">Photographs</p>
          <h2 id="loft-gallery">Loft rooms</h2>
        </div>
        <Gallery images={loftGallery} />
      </section>
      <section className="section paper faq" aria-labelledby="faq-heading">
        <div className="section-head">
          <p className="label">Questions</p>
          <h2 id="faq-heading">Before the survey</h2>
        </div>
        {loftFaqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="text-link" href="/areas/earlsfield">
            Loft conversions in Earlsfield
          </Link>
        </p>
      </section>
      <CtaBand photo={photos.loftLantern} title="Book the survey." />
    </>
  );
}
