import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { interiorGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Interior design",
  description: "Interior design and joinery by Encompass London, from colour and fitted furniture to the finished rooms.",
  alternates: { canonical: "/interior-design/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/interior-design/"
      label="Interiors"
      title="Interior design"
      caption="Colour, joinery and the rooms you actually use."
      lede="Interior design at Encompass is part of the build, not a separate set of drawings that someone else has to interpret. Living rooms and bedrooms in the published work show how colour and joinery sit in the same scheme."
      hero={photos.intPink}
      images={interiorGallery}
      serviceType="Interior design"
    />
  );
}
