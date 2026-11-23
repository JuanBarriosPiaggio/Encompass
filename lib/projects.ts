import { areas } from "@/lib/areas";
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

export type ServiceId =
  | "lofts"
  | "extensions"
  | "kitchens"
  | "bathrooms"
  | "interiors"
  | "staircases";

export const serviceFilters: { id: ServiceId | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "lofts", label: "Loft conversions" },
  { id: "extensions", label: "Extensions" },
  { id: "kitchens", label: "Kitchens" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "interiors", label: "Interiors" },
  { id: "staircases", label: "Staircases" },
];

export type Project = {
  slug: string;
  title: string;
  areaSlug?: string;
  services: ServiceId[];
  scope: string;
  summary: string;
  images: Photo[];
  rich?: boolean;
  study?: boolean;
  pending?: boolean;
};

function street(
  slug: string,
  title: string,
  areaSlug: string,
  services: ServiceId[],
  scope: string,
  summary: string,
  images: Photo[],
  rich = false,
): Project {
  return { slug, title, areaSlug, services, scope, summary, images, rich };
}

export const projects: Project[] = [
  street(
    "duntshill-road",
    "Duntshill Road",
    "earlsfield",
    ["kitchens"],
    "Open-plan kitchen and dining",
    "Duntshill Road, Earlsfield. An open-plan kitchen and dining room, designed and built by Encompass London.",
    [photos.duntshill1, photos.duntshill2, photos.duntshill3],
    true,
  ),
  street(
    "loft-elsygne-road",
    "Elsygne Road",
    "wandsworth",
    ["lofts", "interiors"],
    "Loft conversion and first floor",
    "Elsygne Road, Wandsworth. The photographs cover a loft conversion and the first floor.",
    [photos.elsyneLoft1, photos.elsyneLoft2, photos.elsyne1, photos.elsyne2, photos.elsyneFirst1, photos.elsyneFirst2],
    true,
  ),
  street(
    "brisbane",
    "Brisbane Avenue",
    "wimbledon",
    ["lofts"],
    "Residential project",
    "Brisbane Avenue, Wimbledon. A completed Encompass London project.",
    [photos.brisbane1, photos.brisbane2],
    true,
  ),
  street(
    "sugden-road",
    "Sugden Road",
    "clapham",
    ["lofts"],
    "Residential project",
    "Sugden Road, Clapham. A completed Encompass London project.",
    [photos.sugden1, photos.sugden2],
    true,
  ),
  street(
    "arundel-road",
    "Arundel Avenue",
    "ewell",
    ["lofts"],
    "Residential project",
    "Arundel Avenue, Ewell. A completed Encompass London project.",
    [photos.arundel1, photos.arundel2],
    true,
  ),
  street(
    "loft-richmond-park-road",
    "Richmond Park",
    "richmond",
    ["lofts"],
    "Residential project",
    "Richmond Park, TW10. A completed Encompass London project.",
    [photos.richmond1, photos.richmond2],
    true,
  ),
  street(
    "brookwood-road",
    "Brookwood Road",
    "earlsfield",
    [],
    "Residential project",
    "Brookwood Road, Earlsfield. A completed Encompass London project.",
    [photos.brookwood1, photos.brookwood2],
  ),
  street(
    "loft-earlsfield-road",
    "Earlsfield Road",
    "earlsfield",
    ["lofts"],
    "Residential project",
    "Earlsfield Road. A completed Encompass London project.",
    [photos.earlsfieldRd1, photos.earlsfieldRd2],
  ),
  street(
    "vanderbilt-road",
    "Vanderbilt Road",
    "earlsfield",
    [],
    "Residential project",
    "Vanderbilt Road, Earlsfield. A smaller frame from the Houzz portfolio.",
    [photos.vanderbilt],
  ),
  street(
    "oxford-road",
    "Oxford Avenue",
    "wimbledon",
    ["lofts"],
    "Residential project",
    "Oxford Avenue, Wimbledon. A completed Encompass London project.",
    [photos.oxford1, photos.oxford2],
  ),
  street(
    "fairlawn-road",
    "Fairlawn Road",
    "wimbledon",
    [],
    "Residential project",
    "Fairlawn Road, Wimbledon. A smaller frame from the Houzz portfolio.",
    [photos.fairlawn],
  ),
  street(
    "pelham-road",
    "Pelham Road",
    "wimbledon",
    [],
    "Residential project",
    "Pelham Road, Wimbledon. A smaller frame from the Houzz portfolio.",
    [photos.pelham],
  ),
  street(
    "kitchen-chatham",
    "Chatham Close",
    "clapham",
    ["kitchens"],
    "Residential project",
    "Chatham Close, Clapham. A completed Encompass London project.",
    [photos.chatham1, photos.chatham2],
  ),
  street(
    "ridgeway-road",
    "Ridgeway Road",
    "twickenham",
    [],
    "Residential project",
    "Ridgeway Road. A completed Encompass London project, shown with the Twickenham and Richmond work.",
    [photos.ridgeway1, photos.ridgeway2],
  ),
  street(
    "albany-park-road",
    "Albany Park Road",
    "kingston",
    [],
    "Residential project",
    "Albany Park Road, Kingston. A completed Encompass London project.",
    [photos.albany1, photos.albany2],
  ),
  street(
    "queens-drive",
    "Queens Drive",
    "kingston",
    [],
    "Residential project",
    "Queens Drive, Kingston. A completed Encompass London project.",
    [photos.queens],
  ),
  street(
    "seymour-road",
    "Seymour Road",
    "kingston",
    ["extensions"],
    "Two-storey extension",
    "Seymour Road, Kingston. A two-storey extension.",
    [photos.seymour1, photos.seymour2],
  ),
  street(
    "henley-avenue",
    "Henley Avenue",
    "sutton",
    [],
    "Residential project",
    "Henley Avenue, Sutton. A completed Encompass London project.",
    [photos.henley],
  ),
  street(
    "montpelier-road",
    "Montpelier Road",
    "sutton",
    [],
    "Residential project",
    "Montpelier Road, Sutton. A completed Encompass London project.",
    [photos.montpelier1, photos.montpelier2],
  ),
  street(
    "loft-wilbury-avenue",
    "Wilbury Avenue",
    "sutton",
    ["lofts"],
    "Residential project",
    "Wilbury Avenue, Sutton. A completed Encompass London project.",
    [photos.wilbury1, photos.wilbury2],
  ),
  street(
    "gomshall-road",
    "Gomshall Road",
    "sutton",
    [],
    "Residential project",
    "Gomshall Road, Sutton. A smaller frame from the Houzz portfolio.",
    [photos.gomshall],
  ),
  street(
    "loft-manor-crescent",
    "Manor Crescent",
    "epsom",
    ["lofts"],
    "Residential project",
    "Manor Crescent, Epsom. A completed Encompass London project.",
    [photos.manor1, photos.manor2],
  ),
  street(
    "barlow-road",
    "Barlow Road",
    "hampton",
    [],
    "Residential project",
    "Barlow Road, Hampton. A completed Encompass London project.",
    [photos.barlow1, photos.barlow2],
  ),
  street(
    "ethnard-road",
    "Ethnard Road",
    "peckham",
    ["lofts"],
    "Residential project",
    "Ethnard Road, Peckham. A completed Encompass London project.",
    [photos.ethnard],
  ),
  street(
    "lynton-road",
    "Lynton Road",
    "camberwell",
    [],
    "Residential project",
    "Lynton Road, Camberwell. A completed Encompass London project.",
    [photos.lynton],
  ),
  street(
    "loft-sugden-road",
    "Sugden Road loft",
    "clapham",
    ["lofts"],
    "Loft conversion",
    "Sugden Road, Clapham. A completed Encompass London project.",
    [photos.sugden1, photos.sugden2],
    true,
  ),
  street(
    "wilbury",
    "Wilbury",
    "sutton",
    ["lofts"],
    "Loft conversion",
    "Wilbury Avenue, Sutton. A completed Encompass London project.",
    [photos.wilbury1, photos.wilbury2],
    true,
  ),
  street(
    "elsygne",
    "Elsygne",
    "wandsworth",
    ["lofts", "interiors"],
    "Loft conversion and first floor",
    "Elsygne Road, Wandsworth. The photographs cover a loft conversion and the first floor.",
    [photos.elsyneLoft1, photos.elsyneLoft2, photos.elsyne1, photos.elsyne2, photos.elsyneFirst1, photos.elsyneFirst2],
    true,
  ),
  street(
    "arundel",
    "Arundel",
    "ewell",
    ["lofts"],
    "Residential project",
    "Arundel Avenue, Ewell. A completed Encompass London project.",
    [photos.arundel1, photos.arundel2],
    true,
  ),
  {
    slug: "kitchen-extension-wimbledon-revelstoke-road",
    title: "Revelstoke Road",
    areaSlug: "wimbledon",
    services: ["extensions", "kitchens"],
    scope: "Kitchen extension",
    summary: "Revelstoke Road, Wimbledon. Photographs of this house are still to come.",
    images: [photos.extBifold, photos.extIsland, photos.kitGarden],
    pending: true,
  },
  {
    slug: "loft-queens-road",
    title: "Queens Road",
    services: ["lofts"],
    scope: "Loft conversion",
    summary: "Queens Road. Photographs of this house are still to come.",
    images: [photos.loftBedroom, photos.loftVelux, photos.loftEaves],
    pending: true,
  },
  {
    slug: "central",
    title: "Central",
    services: ["lofts"],
    scope: "Loft conversion",
    summary: "Central. Photographs of this house are still to come.",
    images: [photos.loftEnsuite, photos.loftDormerExt, photos.extLiving],
    pending: true,
  },
  {
    slug: "loft-conversion-felsham",
    title: "Felsham",
    services: ["lofts"],
    scope: "Loft conversion",
    summary: "Felsham. Photographs of this house are still to come.",
    images: [photos.loftBedroom, photos.loftGlazing, photos.loftEaves],
    pending: true,
  },
  {
    slug: "loft-rooms",
    title: "Loft rooms",
    services: ["lofts"],
    scope: "Loft conversions",
    summary: "Loft bedrooms, rooflights, a dormer exterior and a roof lantern. Photographs from Encompass London loft work.",
    images: loftGallery,
    study: true,
  },
  {
    slug: "extensions-and-gardens",
    title: "Extensions and gardens",
    services: ["extensions"],
    scope: "House extensions",
    summary: "Rear extensions, side returns, bi-folds and garden rooms. Photographs from Encompass London extension work.",
    images: extensionGallery,
    study: true,
  },
  {
    slug: "kitchens",
    title: "Kitchens",
    services: ["kitchens"],
    scope: "Kitchens",
    summary: "Islands, breakfast bars and kitchens opening to the garden. Photographs from Encompass London kitchen work.",
    images: kitchenGallery,
    study: true,
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    services: ["bathrooms"],
    scope: "Bathrooms",
    summary: "Roll-top baths, tiled rooms and vanities. Photographs from Encompass London bathroom work.",
    images: bathroomGallery,
    study: true,
  },
  {
    slug: "earlsfield-interiors",
    title: "Earlsfield interiors",
    areaSlug: "earlsfield",
    services: ["interiors"],
    scope: "Interior design",
    summary: "An Earlsfield interior: living room and bedrooms, colour and joinery in one scheme.",
    images: interiorGallery,
    study: true,
  },
  {
    slug: "staircases-and-joinery",
    title: "Staircases and joinery",
    services: ["staircases"],
    scope: "Staircases and joinery",
    summary: "Oak stairs, a runner, a handrail and a flight under a skylight. Joinery from Encompass London.",
    images: stairGallery,
    study: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function areaName(slug?: string) {
  if (!slug) return "South West London";
  return areas.find((area) => area.slug === slug)?.name ?? slug;
}

export function projectHasLowLead(project: Project) {
  return Boolean(project.images[0]?.low);
}

export type RailSlide = {
  href: string;
  title: string;
  area: string;
  image: Photo;
};

export const rail: RailSlide[] = [
  { href: "/project/duntshill-road/", title: "Duntshill Road", area: "Earlsfield", image: photos.heroKitchen },
  { href: "/project/loft-elsygne-road/", title: "Elsygne Road", area: "Wandsworth", image: photos.elsyneLoft1 },
  { href: "/project/extensions-and-gardens/", title: "Rear extension", area: "Extensions", image: photos.extBifold },
  { href: "/project/staircases-and-joinery/", title: "Oak staircase", area: "Joinery", image: photos.stairOak },
  { href: "/project/brisbane/", title: "Brisbane Avenue", area: "Wimbledon", image: photos.brisbane1 },
  { href: "/project/sugden-road/", title: "Sugden Road", area: "Clapham", image: photos.sugden1 },
  { href: "/project/arundel-road/", title: "Arundel Avenue", area: "Ewell", image: photos.arundel1 },
  { href: "/project/loft-richmond-park-road/", title: "Richmond Park", area: "TW10", image: photos.richmond1 },
  { href: "/project/bathrooms/", title: "Roll-top bath", area: "Bathrooms", image: photos.bathBlue },
  { href: "/project/earlsfield-interiors/", title: "Earlsfield interior", area: "Earlsfield", image: photos.intLiving },
];

export function projectsForArea(slug: string): { items: Project[]; nearby: boolean } {
  const own = projects.filter((project) => project.areaSlug === slug);
  if (own.length) return { items: own, nearby: false };

  const area = areas.find((item) => item.slug === slug);
  const seen = new Set<string>();
  const nearby: Project[] = [];
  for (const neighbour of area?.neighbours ?? []) {
    for (const project of projects) {
      if (project.study || project.areaSlug !== neighbour || seen.has(project.slug)) continue;
      if (project.images.every((image) => image.low)) continue;
      seen.add(project.slug);
      nearby.push(project);
    }
  }
  if (nearby.length) return { items: nearby.slice(0, 6), nearby: true };

  const fallback = projects.filter((project) => project.rich);
  return { items: fallback, nearby: true };
}

export function heroForArea(slug: string): { image: Photo; caption: string; nearby: boolean } | null {
  const own = projects.filter((project) => project.areaSlug === slug);
  for (const project of own) {
    const image = project.images.find((item) => !item.low);
    if (image) return { image, caption: project.title, nearby: false };
  }
  const { items } = projectsForArea(slug);
  for (const project of items) {
    const image = project.images.find((item) => !item.low);
    if (image) {
      return {
        image,
        caption: `${project.title}, ${areaName(project.areaSlug)}`,
        nearby: true,
      };
    }
  }
  return null;
}

export const loftFaqs = [
  {
    question: "Who designs the loft, and who builds it?",
    answer:
      "One team. Encompass draws the loft and builds it, with one point of contact from the survey to handover. Drawings, planning or permitted development, the structural engineer, building control and the build all sit with us. Loft conversions trade as Encompass Lofts.",
  },
  {
    question: "What do the prices cover?",
    answer:
      "The figures are guide prices for the loft types shown, before anyone has surveyed the house. A fixed quote follows a survey. Semi-detached adds 3%, detached adds 6%, and a top-floor flat adds 10%. An en-suite and a planning application are optional extras on the estimator.",
  },
  {
    question: "Do I need planning permission?",
    answer:
      "Some lofts are permitted development and some need a full application. If you are not sure, we check. A top-floor flat is subject to freeholder consent.",
  },
  {
    question: "How long does the build take?",
    answer:
      "As a guide: about 4 weeks for a Velux or rooflight conversion, 4–6 weeks for a dormer, 5–7 weeks for an L-shaped dormer, 5–6 weeks for hip-to-gable, and 6–8 weeks for a mansard. The survey confirms the programme for your house.",
  },
  {
    question: "Where do you work?",
    answer:
      "From the studio at 338 Garratt Lane, Earlsfield, London SW18 4EL. The area pages list the neighbourhoods, across South West London and into Surrey.",
  },
  {
    question: "How do we start?",
    answer:
      "Use the estimator, call 020 8871 3323, or email jason@encompasslondon.com. After an estimate, a director calls within one working day to arrange a free survey.",
  },
];
