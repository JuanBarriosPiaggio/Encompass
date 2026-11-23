import type { Metadata } from "next";
import { FilterGallery } from "@/components/FilterGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of Encompass London lofts, extensions, kitchens, bathrooms, living rooms, interiors and staircases.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <header className="hero-plain">
        <p className="label">Photographs</p>
        <h1>Gallery</h1>
      </header>
      <section className="section" style={{ paddingTop: 0 }}>
        <FilterGallery />
      </section>
    </>
  );
}
