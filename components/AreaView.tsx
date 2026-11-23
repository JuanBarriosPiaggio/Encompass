import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sheen } from "@/components/Buttons";
import { areaCopy } from "@/lib/area-copy";
import { areaMore } from "@/lib/area-more";
import { areaHeading, areas, getArea, type Area } from "@/lib/areas";
import { areaName, heroForArea, projectsForArea } from "@/lib/projects";
import { reviewsFor } from "@/lib/reviews";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export function AreaView({ area }: { area: Area }) {
  const hero = heroForArea(area.slug);
  const { items, nearby } = projectsForArea(area.slug);
  const neighbours = area.neighbours.map((item) => getArea(item)).filter((item): item is Area => Boolean(item));
  const index = areas.findIndex((item) => item.slug === area.slug);
  const quotes = reviewsFor(index);
  const paragraphs = [areaCopy[area.slug], areaMore[area.slug]].filter(Boolean).join("\n\n").split(/\n\n+/).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas/" },
          { name: area.name, path: `/${area.path}/` },
        ])}
      />
      {hero ? (
        <PageHero photo={hero.image} label={`${area.name} · ${area.postcodes}`} title={areaHeading(area.path)} caption={hero.nearby ? `Nearby project · ${hero.caption}` : hero.caption} />
      ) : (
        <header className="hero-plain">
          <p className="label">
            {area.name} · {area.postcodes}
          </p>
          <h1>{areaHeading(area.path)}</h1>
        </header>
      )}
      <section className="section">
        <div className="measure">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} style={{ marginTop: "1rem" }}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="section-head" style={{ marginTop: "3.5rem" }}>
          <p className="label">{nearby ? "Nearby projects" : `Recent work in ${area.name}`}</p>
          <h2>{nearby ? "Work on neighbouring streets" : "Projects"}</h2>
        </div>
        {nearby ? (
          <p className="lede" style={{ marginTop: 0, marginBottom: "1.4rem" }}>
            We have not published a project photograph for {area.name} here. These are nearby Encompass London projects.
          </p>
        ) : null}
        <div className="work-grid">
          {items.map((project) => {
            const image = project.images.find((item) => !item.low) ?? project.images[0];
            if (!image) return null;
            return (
              <Link key={project.slug} href={`/project/${project.slug}/`} className={image.low ? "work-card low" : "work-card"}>
                <span className="frame">
                  <Photo photo={image} sizes="(max-width: 700px) 100vw, 33vw" />
                </span>
                <p className="label">{nearby ? areaName(project.areaSlug) : area.name}</p>
                <h3>{project.title}</h3>
                <p>{project.scope}</p>
              </Link>
            );
          })}
        </div>
        <div className="hero-actions" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimate/" className="btn btn-gold">
            <Sheen />
            <span className="btn-label">Get an instant estimate</span>
          </Link>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
        <div className="review-grid" style={{ marginTop: "3rem" }}>
          {quotes.map((review) => (
            <article key={review.name} className="review">
              <p>“{review.quote}”</p>
              <footer>{review.name}</footer>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "1.2rem" }}>
          <Link className="text-link" href="/testimonials/">
            All testimonials
          </Link>
        </p>
        {neighbours.length ? (
          <div style={{ marginTop: "3rem" }}>
            <p className="label">Neighbouring areas</p>
            <div className="area-strip" style={{ marginTop: "0.8rem" }}>
              {neighbours.map((item) => (
                <Link key={item.slug} href={`/${item.path}/`}>
                  {item.name}
                  <span>{item.postcodes}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
