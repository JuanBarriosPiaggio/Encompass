import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Story } from "@/components/Story";
import { getProject, projects, areaName } from "@/lib/projects";
import { breadcrumbJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const place = project.areaSlug ? areaName(project.areaSlug) : "South West London";
  return {
    title: `${project.title}, ${place}`,
    description: project.summary,
    alternates: { canonical: `/project/${project.slug}/` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/portfolio/" },
          { name: project.title, path: `/project/${project.slug}/` },
        ])}
      />
      <Story project={project} />
    </>
  );
}
