import type { Metadata } from "next";
import { FilterGallery, type GalleryCategory } from "@/components/FilterGallery";

const pages: Record<string, { category: GalleryCategory; title: string; path: string }> = {
  lofts: { category: "Lofts", title: "Lofts gallery", path: "/lofts-gallery/" },
  extensions: { category: "Extensions", title: "Extensions gallery", path: "/extensions-gallery/" },
  bathrooms: { category: "Bathrooms", title: "Bathrooms gallery", path: "/bathrooms-gallery/" },
  living: { category: "Living rooms", title: "Living rooms gallery", path: "/living-rooms-gallery/" },
};

export function galleryPage(key: keyof typeof pages) {
  const page = pages[key];
  const metadata: Metadata = {
    title: page.title,
    description: `${page.title} from Encompass London.`,
    alternates: { canonical: page.path },
  };
  function Page() {
    return (
      <>
        <header className="hero-plain">
          <p className="label">Photographs</p>
          <h1>{page.title}</h1>
        </header>
        <section className="section" style={{ paddingTop: 0 }}>
          <FilterGallery initial={page.category} />
        </section>
      </>
    );
  }
  return { metadata, Page };
}
