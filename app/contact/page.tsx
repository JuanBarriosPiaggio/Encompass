import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us For Loft Conversions",
  description:
    "Contact Encompass London for loft conversions. 338 Garratt Lane, Earlsfield, London SW18 4EL. Call 020 8871 3323 or email jason@encompasslondon.com.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <header className="hero-plain">
        <p className="label">Studio</p>
        <h1>Contact Us For Loft Conversions</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="contact-grid">
          <div>
            <div className="map-plate" role="img" aria-label="Encompass London, 338 Garratt Lane, Earlsfield, London SW18 4EL">
              <div className="diamond" aria-hidden="true" />
              <p className="label">Earlsfield</p>
              <address>
                {site.street}
                <br />
                {site.locality}
                <br />
                {site.region} {site.postcode}
              </address>
            </div>
            <div className="contact-lines">
              <a className="text-link" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
