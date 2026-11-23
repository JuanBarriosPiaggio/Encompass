import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { interiorGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Home refurbishments in Earlsfield",
  description: "Home refurbishments in Earlsfield, London. One team designs and builds the whole house.",
  alternates: { canonical: "/home-refurbishments-earlsfield-london/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/home-refurbishments-earlsfield-london/"
      label="Whole house"
      title="Home refurbishments in Earlsfield"
      caption="Kitchens, bathrooms, stairs and the rooms between them."
      lede="A refurbishment is the house as a whole: the rooms you live in, the services, and the joinery that ties them together. Encompass draws the scheme and builds it, from the Earlsfield studio."
      hero={photos.intLiving}
      images={interiorGallery}
      serviceType="Home refurbishment"
    />
  );
}
