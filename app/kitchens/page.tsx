import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { kitchenGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Kitchens in South West London",
  description:
    "Kitchens designed and built by Encompass London in Earlsfield. Islands, joinery and rooms that open to the garden, from one team.",
  alternates: { canonical: "/kitchens" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/kitchens"
      label="Design and build"
      title="Kitchens"
      caption="The room you use most, planned with the dining table and the garden in mind."
      lede="Cabinetry, light and the way the kitchen meets the rest of the ground floor. Designed and built by the same team that draws the extension or the loft around it."
      hero={photos.kitTeal}
      images={kitchenGallery}
      serviceType="Kitchen design and build"
    />
  );
}
