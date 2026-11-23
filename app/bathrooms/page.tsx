import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { bathroomGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Bathrooms in South West London",
  description:
    "Bathrooms and en-suites designed and built by Encompass London. Roll-top baths, tiled rooms and loft en-suites from our Earlsfield studio.",
  alternates: { canonical: "/bathrooms" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/bathrooms"
      label="Design and build"
      title="Bathrooms"
      caption="Roll-top baths, tiled rooms and en-suites planned with the rest of the house."
      lede="A bathroom should be drawn with the rooms around it. These are Encompass London bathrooms, including en-suites that sit inside a loft conversion."
      hero={photos.bathBlue}
      images={bathroomGallery}
      serviceType="Bathroom design and build"
    />
  );
}
