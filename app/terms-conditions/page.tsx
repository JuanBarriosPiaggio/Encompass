import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Terms and conditions for Encompass London. Placeholder text until the client supplies them.",
  alternates: { canonical: "/terms-conditions/" },
};

export default function TermsPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Encompass London LLP</p>
        <h1>Terms and conditions</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="measure">
          <p>[Placeholder. The terms and conditions are still to be supplied by Encompass London LLP.]</p>
          <p style={{ marginTop: "1rem" }}>
            Guide prices on this site are not a fixed quote. A survey is required before a price is fixed.
          </p>
        </div>
      </section>
    </>
  );
}
