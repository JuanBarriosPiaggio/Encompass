import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import type { Photo } from "@/lib/media";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

export function ServiceLayout({
  path,
  label,
  title,
  caption,
  lede,
  hero,
  images,
  serviceType,
}: {
  path: string;
  label: string;
  title: string;
  caption: string;
  lede: string;
  hero: Photo;
  images: Photo[];
  serviceType: string;
}) {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: title, path, description: lede, serviceType }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <PageHero photo={hero} label={label} title={title} caption={caption} />
      <section className="section">
        <div className="measure">
          <p>{lede}</p>
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <Gallery images={images} />
        </div>
      </section>
      <CtaBand photo={hero} />
    </>
  );
}
