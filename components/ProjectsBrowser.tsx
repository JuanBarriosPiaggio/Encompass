"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { areaName, projects, serviceFilters, type ServiceId } from "@/lib/projects";
import { Photo } from "@/components/Photo";

export function ProjectsBrowser() {
  const [service, setService] = useState<ServiceId | "all">("all");
  const [area, setArea] = useState<string>("all");

  const visible = useMemo(
    () =>
      projects.filter((project) => {
        const serviceOk = service === "all" || project.services.includes(service);
        const areaOk = area === "all" || project.areaSlug === area;
        return serviceOk && areaOk;
      }),
    [service, area],
  );

  return (
    <div>
      <div className="filters">
        <div className="filter-row" role="group" aria-label="Filter by service">
          {serviceFilters.map((item) => (
            <button key={item.id} type="button" className="chip" aria-pressed={service === item.id} onClick={() => setService(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="filter-row" role="group" aria-label="Filter by area">
          <button type="button" className="chip" aria-pressed={area === "all"} onClick={() => setArea("all")}>
            All areas
          </button>
          {areas.map((item) => (
            <button key={item.slug} type="button" className="chip" aria-pressed={area === item.slug} onClick={() => setArea(item.slug)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="empty">
          Nothing in this set.{" "}
          <button type="button" className="text-link" onClick={() => { setService("all"); setArea("all"); }} style={{ background: "none", border: 0, cursor: "pointer" }}>
            Clear the filters
          </button>
        </p>
      ) : (
        <div className="work-grid">
          {visible.map((project) => {
            const lead = project.images[0];
            const low = Boolean(lead?.low);
            return (
              <Link key={project.slug} href={`/project/${project.slug}/`} className={low ? "work-card low" : "work-card"}>
                {lead ? (
                  <span className="frame">
                    <Photo photo={lead} sizes={low ? "260px" : "(max-width: 700px) 100vw, 33vw"} />
                  </span>
                ) : null}
                <p className="label">{project.areaSlug ? areaName(project.areaSlug) : "Portfolio"}</p>
                <h2 style={{ fontSize: "clamp(1.7rem, 2vw, 2.2rem)" }}>{project.title}</h2>
                <p>{project.scope}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
