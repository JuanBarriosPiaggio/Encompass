import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { interiorGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Interiors and refurbishments in Earlsfield",
  description:
    "Whole-house refurbishments and interiors by Encompass London. Colour, joinery and rooms from an Earlsfield interior project.",
  alternates: { canonical: "/interiors" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/interiors"
      label="Earlsfield"
      title="Interiors & refurbishments"
      caption="Colour, joinery and furniture, arranged as one interior."
      lede="Whole-house refurbishments sit with the same team as the loft or the extension. The rooms below are from an Earlsfield interior project: a living room and three bedrooms."
      hero={photos.intLiving}
      images={interiorGallery}
      serviceType="Interior refurbishment"
    />
  );
}
