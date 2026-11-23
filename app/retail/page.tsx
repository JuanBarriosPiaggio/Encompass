import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { interiorGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Retail and commercial fit-outs",
  description: "Retail and commercial fit-outs by Encompass London. Short notes, with interior photographs from the portfolio.",
  alternates: { canonical: "/retail/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/retail/"
      label="Fit-out"
      title="Retail and commercial"
      caption="Shops, offices and the rooms a business works in."
      lede="Encompass fits out commercial rooms as well as houses. The photographs here are interior and fit-out images from the portfolio. A named office or shop set has not been published on this page yet."
      hero={photos.intSlat}
      images={interiorGallery}
      serviceType="Retail and commercial fit-out"
    />
  );
}
