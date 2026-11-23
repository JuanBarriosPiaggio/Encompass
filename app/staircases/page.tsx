import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { photos, stairGallery } from "@/lib/media";

export const metadata: Metadata = {
  title: "Staircases and joinery in South West London",
  description:
    "Staircases and joinery by Encompass London. Leon Morrell, co-director, is a carpenter and joiner. Oak stairs, handrails and flights under rooflights.",
  alternates: { canonical: "/staircases" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/staircases"
      label="Leon Morrell · Joiner"
      title="Staircases & joinery"
      caption="The piece of the house you touch every day."
      lede="Leon Morrell, co-director, is a carpenter and joiner. Staircases and joinery are where that craft shows: oak treads, a runner, a handrail, a flight under a skylight. Jason Hunter, co-director, came from modelmaking and film set design. Between them the stair is both a made object and a composed one."
      hero={photos.stairSky}
      images={stairGallery}
      serviceType="Staircase and joinery"
    />
  );
}
