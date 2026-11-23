import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { extensionGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "House extensions in Earlsfield",
  description: "Rear extensions, side returns and garden rooms in Earlsfield, designed and built by one team.",
  alternates: { canonical: "/house-extensions-earlsfield/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/house-extensions-earlsfield/"
      label="Design and build"
      title="House extensions in Earlsfield"
      caption="Rear extensions, side returns and rooms that open to the garden."
      lede="A rear extension, a side return, or a full-width ground floor. The drawing and the build stay with one team, including planning or permitted development, the structural engineer and building control."
      hero={photos.extBifold}
      images={extensionGallery}
      serviceType="House extension"
    />
  );
}
