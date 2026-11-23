import Link from "next/link";
import type { Photo as PhotoType } from "@/lib/media";
import { site } from "@/lib/site";
import { Parallax } from "@/components/Parallax";
import { Photo } from "@/components/Photo";
import { Sheen } from "@/components/Buttons";

export function CtaBand({ photo, title = "Tell us about the house." }: { photo: PhotoType; title?: string }) {
  return (
    <section className="closer">
      <Parallax className="closer-media">
        <Photo photo={photo} sizes="100vw" />
      </Parallax>
      <div className="closer-plate">
        <p className="label">Earlsfield studio</p>
        <h2>{title}</h2>
        <p>Call the studio, or price a loft. One team will take it from the drawing to the build.</p>
        <div className="hero-actions">
          <Link href="/estimate" className="btn btn-gold">
            <Sheen />
            <span className="btn-label">Get an instant estimate</span>
          </Link>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
