import Link from "next/link";
import { areaName, type Project } from "@/lib/projects";
import { photos } from "@/lib/media";
import { Photo } from "@/components/Photo";
import { Parallax } from "@/components/Parallax";
import { CtaBand } from "@/components/CtaBand";

export function Story({ project }: { project: Project }) {
  const lead = project.images[0];
  const rest = project.images.slice(1);
  const full = rest.filter((image) => !image.low);
  const thumbs = rest.filter((image) => image.low);
  const lowLead = Boolean(lead?.low);
  const ctaPhoto = !lowLead && lead ? lead : photos.heroLantern;

  return (
    <article>
      {lead && !lowLead ? (
        <header className="story-hero">
          <Parallax className="story-media">
            <Photo photo={lead} priority sizes="100vw" />
          </Parallax>
          <div className="story-plate">
            <p className="label">{project.areaSlug ? areaName(project.areaSlug) : "Portfolio"}</p>
            <h1>{project.title}</h1>
          </div>
        </header>
      ) : (
        <header className="story-hero contained">
          {lead ? (
            <div className="frame">
              <Photo photo={lead} priority sizes="640px" />
            </div>
          ) : null}
          <div className="story-plate">
            <p className="label">{project.areaSlug ? areaName(project.areaSlug) : "Portfolio"}</p>
            <h1>{project.title}</h1>
          </div>
        </header>
      )}

      <div className="story-intro">
        <dl className="facts">
          <div>
            <dt>Area</dt>
            <dd>{project.areaSlug ? areaName(project.areaSlug) : "South West London"}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{project.scope}</dd>
          </div>
        </dl>
        <div className="measure">
          <p>{project.summary}</p>
          <p style={{ marginTop: "1rem" }}>
            <Link className="text-link" href="/portfolio/">
              All projects
            </Link>
          </p>
          {project.pending ? (
            <p className="est-note" style={{ marginTop: "1rem" }}>
              Photos to come. The pictures below are other Encompass loft and extension rooms, shown until photographs of this house are published.
            </p>
          ) : null}
        </div>
      </div>

      <div className="sequence">
        {full.map((image, index) => (
          <figure key={image.id} className={index % 2 === 0 ? "wide" : "inset"}>
            <div className={image.portrait ? "frame" : "frame"} style={image.portrait ? { aspectRatio: "3 / 4", maxWidth: "32rem" } : undefined}>
              <Photo photo={image} sizes="(max-width: 800px) 100vw, 90vw" />
            </div>
            <figcaption>{image.alt}</figcaption>
          </figure>
        ))}
        {thumbs.length ? (
          <div className="thumbs">
            {thumbs.map((image) => (
              <figure key={image.id} className="shot">
                <span className="frame">
                  <Photo photo={image} sizes="220px" />
                </span>
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
      <CtaBand photo={ctaPhoto} />
    </article>
  );
}
