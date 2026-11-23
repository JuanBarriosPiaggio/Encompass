import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Loft conversion areas",
  description: "Where Encompass London designs and builds loft conversions, from Earlsfield across South West London and into Surrey.",
  alternates: { canonical: "/areas/" },
};

export default function AreasIndex() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">South West London and Surrey</p>
        <h1>Areas we build in</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="area-strip">
          {areas.map((area) => (
            <Link key={area.slug} href={`/${area.path}/`}>
              {area.name}
              <span>{area.postcodes}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
