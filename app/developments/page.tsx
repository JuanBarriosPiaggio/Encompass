import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Residential developments",
  description: "Residential developments designed and built by Encompass London.",
  alternates: { canonical: "/developments/" },
};

export default function Page() {
  return (
    <ServiceLayout
      path="/developments/"
      label="Developments"
      title="Residential developments"
      caption="Houses, not a single room."
      lede="Encompass takes on residential developments as well as single-house lofts and extensions. The same team draws the work and builds it. These photographs are houses from the portfolio, shown while a dedicated development set is still to be published."
      hero={photos.extDetached}
      images={[photos.extDetached, photos.extVictorian, photos.seymour1, photos.seymour2, photos.extBrick]}
      serviceType="Residential development"
    />
  );
}
