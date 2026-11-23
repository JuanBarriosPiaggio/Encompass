import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { photos, stairGallery } from "@/lib/media";

export const metadata: Metadata = {
  title: "Staircases and joinery",
  description: "Oak staircases and joinery, designed and made by Encompass London.",
  alternates: { canonical: "/staircases-joinery/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/staircases-joinery/"
      label="Joinery"
      title="Staircases and joinery"
      caption="Oak stairs, runners and the handrail you hold every day."
      lede="A loft needs a staircase that fits the house. Encompass designs and builds stairs and the joinery around them: oak flights, runners, handrails and the storage that sits under the eaves."
      hero={photos.stairOak}
      images={stairGallery}
      serviceType="Staircases and joinery"
    />
  );
}
