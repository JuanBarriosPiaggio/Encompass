import { galleryPage } from "@/lib/gallery-page";

const built = galleryPage("bathrooms");
export const metadata = built.metadata;
export default built.Page;
