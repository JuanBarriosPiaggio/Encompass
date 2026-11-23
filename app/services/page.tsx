import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/media";
import { serviceLinks } from "@/lib/site";

const thumbs = [
  photos.loftBedroom,
  photos.extBifold,
  photos.intLiving,
  photos.intPink,
  photos.kitTeal,
  photos.bathBlue,
  photos.stairOak,
  photos.intSlat,
  photos.extDetached,
  photos.heroKitchen,
];

export const metadata: Metadata = {
  title: "Services",
  description: "Lofts, extensions, refurbishments, interiors, kitchens, bathrooms, joinery, retail fit-outs and developments. One team.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Design and build</p>
        <h1>Services</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="work-grid">
          {serviceLinks.map((item, index) => (
            <Link key={item.href} href={item.href} className="work-card">
              <span className="frame">
                <Photo photo={thumbs[index] ?? photos.loftBedroom} sizes="(max-width: 700px) 100vw, 33vw" />
              </span>
              <h3>{item.label}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
