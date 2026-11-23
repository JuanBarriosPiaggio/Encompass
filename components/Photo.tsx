import Image from "next/image";
import type { Photo as PhotoType } from "@/lib/media";

export function Photo({
  photo,
  priority = false,
  sizes,
  className,
}: {
  photo: PhotoType;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      style={{ objectFit: "cover", objectPosition: photo.focal ?? "center" }}
    />
  );
}
