import type { Metadata } from "next";
import { Estimator } from "@/components/Estimator";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Instant loft estimate",
  description:
    "Guide prices for Velux, dormer, L-shaped, hip-to-gable and mansard lofts by Encompass London. A survey is required for a fixed quote.",
  alternates: { canonical: "/estimate" },
};

export default function EstimatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Instant estimate", path: "/estimate" },
        ])}
      />
      <header className="hero-plain">
        <p className="label">Guide price</p>
        <h1>Instant loft estimate</h1>
        <p className="lede">A range for the loft type, the house and the extras. It stays on this page. A survey is what turns it into a fixed quote.</p>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <Estimator />
      </section>
    </>
  );
}
