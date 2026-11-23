import Image from "next/image";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { serviceLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-logo" aria-label="Encompass, home">
        <Image src={site.logo} alt="" width={1024} height={969} />
      </Link>
      <div className="footer-grid">
        <div>
          <h2>Studio</h2>
          <p>
            {site.street}
            <br />
            {site.locality}, {site.region} {site.postcode}
          </p>
          <p className="contact-lines">
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a className="text-link" href={site.houzz} target="_blank" rel="noreferrer">
              Houzz {site.houzzRating}★ · {site.houzzReviews} reviews
            </a>
          </p>
          <p>
            <a className="text-link" href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a className="text-link" href={site.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
        </div>
        <div>
          <h2>Work</h2>
          {serviceLinks.map((item) => (
            <p key={item.href}>
              <Link className="text-link" href={item.href}>
                {item.label}
              </Link>
            </p>
          ))}
          <p>
            <Link className="text-link" href="/projects">
              All projects
            </Link>
          </p>
        </div>
        <div>
          <h2>Areas</h2>
          <div className="areas">
            {areas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="legal">
        Loft conversions trade as {site.tradeName}. © {site.legalName}
      </p>
    </footer>
  );
}
