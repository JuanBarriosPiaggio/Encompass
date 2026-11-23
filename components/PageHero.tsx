import type { Photo as PhotoType } from "@/lib/media";
import { Parallax } from "@/components/Parallax";
import { Photo } from "@/components/Photo";

export function PageHero({
  photo,
  label,
  title,
  caption,
}: {
  photo: PhotoType;
  label?: string;
  title: string;
  caption?: string;
}) {
  return (
    <section className="page-hero">
      <Parallax className="page-hero-media">
        <Photo photo={photo} priority sizes="100vw" />
      </Parallax>
      <div className="page-hero-plate">
        {label ? <p className="label">{label}</p> : null}
        <h1>{title}</h1>
        {caption ? <p className="caption">{caption}</p> : null}
      </div>
    </section>
  );
}
