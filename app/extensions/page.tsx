import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { extensionGallery, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "House extensions in South West London",
  description:
    "Rear extensions, side returns and garden rooms, designed and built by one team from our Earlsfield studio. See the work, then call or estimate a loft.",
  alternates: { canonical: "/extensions" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/extensions"
      label="Design and build"
      title="House extensions"
      caption="Rear extensions, side returns and rooms that open to the garden."
      lede="A rear extension, a side return, or a full-width ground floor. The drawing and the build stay with one team, including planning or permitted development, the structural engineer and building control."
      hero={photos.extBifold}
      images={extensionGallery}
      serviceType="House extension"
    />
  );
}
