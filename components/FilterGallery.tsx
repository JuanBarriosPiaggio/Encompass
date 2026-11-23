"use client";

import { useState } from "react";
import { Gallery } from "@/components/Gallery";
import {
  bathroomGallery,
  extensionGallery,
  interiorGallery,
  kitchenGallery,
  loftGallery,
  photos,
  stairGallery,
  type Photo,
} from "@/lib/media";

export const galleryCategories = [
  "Lofts",
  "Extensions",
  "Kitchens",
  "Bathrooms",
  "Living rooms",
  "Interiors",
  "Staircases",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

const sets: Record<GalleryCategory, Photo[]> = {
  Lofts: loftGallery,
  Extensions: extensionGallery,
  Kitchens: kitchenGallery,
  Bathrooms: bathroomGallery,
  "Living rooms": [photos.extLiving, photos.extSteel, photos.extTeal, photos.extBlueSofa, photos.extOpen, photos.intLiving],
  Interiors: interiorGallery,
  Staircases: stairGallery,
};

export function FilterGallery({ initial = "Lofts" }: { initial?: GalleryCategory }) {
  const [category, setCategory] = useState<GalleryCategory>(initial);
  return (
    <div>
      <div className="filters">
        <div className="filter-row" role="group" aria-label="Filter the gallery">
          {galleryCategories.map((item) => (
            <button key={item} type="button" className="chip" aria-pressed={category === item} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <Gallery key={category} images={sets[category]} />
    </div>
  );
}
