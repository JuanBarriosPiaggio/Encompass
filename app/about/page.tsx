import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { photos } from "@/lib/media";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the directors",
  description:
    "Jason Hunter, former modelmaker and film set designer, and Leon Morrell, carpenter and joiner. Encompass London designs and builds from 338 Garratt Lane, Earlsfield.",
  alternates: { canonical: "/about" },
};

function Portrait({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <article className="portrait">
      <div className="portrait-frame" role="img" aria-label={`${name}. Photo to come.`}>
        <svg viewBox="0 0 200 240" aria-hidden="true">
          <circle cx="100" cy="78" r="36" fill="none" stroke="#F0D090" strokeWidth="1.25" />
          <path d="M38 214c10-52 34-76 62-76s52 24 62 76" fill="none" stroke="#F0D090" strokeWidth="1.25" />
        </svg>
        <p>Photo to come</p>
      </div>
      <h2>{name}</h2>
      <p className="label">{role}</p>
      <p>{text}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <header className="hero-plain">
        <p className="label">The directors</p>
        <h1>A set designer’s eye. A joiner’s hands.</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="directors">
          <Portrait
            name="Jason Hunter"
            role="Co-director"
            text="Jason is a former modelmaker and film set designer. He watches proportion, light and how a room is framed."
          />
          <Portrait
            name="Leon Morrell"
            role="Co-director · Carpenter and joiner"
            text="Leon is a carpenter and joiner. The staircases, the handrails and the joinery you put your hand on are his side of the practice."
          />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="label">One team</p>
          <h2>Designed and built under one roof.</h2>
          <p className="lede">
            Architectural drawings, planning or permitted development, structural engineering, building control and the build itself. You deal with one point of contact from the survey to handover. Loft conversions trade as Encompass Lofts.
          </p>
        </div>
        <div className="measure">
          <p>
            The studio is at {site.street}, {site.locality}, {site.region} {site.postcode}. Call{" "}
            <a className="text-link" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>{" "}
            or write to{" "}
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
      <CtaBand photo={photos.stairOak} title="Come and see the work." />
    </>
  );
}
