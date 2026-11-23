import { photos, type Photo } from "@/lib/media";

export type LoftTypeId = "velux" | "dormer" | "l-shaped" | "hip-to-gable" | "mansard";
export type PropertyId = "terraced" | "semi" | "detached" | "flat";
export type PlanningChoice = "none" | "needed" | "unsure";

export type LoftType = {
  id: LoftTypeId;
  name: string;
  min: number;
  max: number;
  time: string;
  image: Photo;
};

export const loftTypes: LoftType[] = [
  {
    id: "velux",
    name: "Velux / rooflight",
    min: 32000,
    max: 48000,
    time: "about 4 weeks",
    image: photos.loftVelux,
  },
  {
    id: "dormer",
    name: "Dormer",
    min: 48000,
    max: 62000,
    time: "4–6 weeks",
    image: photos.loftDormerExt,
  },
  {
    id: "l-shaped",
    name: "L-shaped dormer",
    min: 60000,
    max: 85000,
    time: "5–7 weeks",
    image: photos.loftEaves,
  },
  {
    id: "hip-to-gable",
    name: "Hip-to-gable",
    min: 56000,
    max: 70000,
    time: "5–6 weeks",
    image: photos.heroHouse,
  },
  {
    id: "mansard",
    name: "Mansard",
    min: 55000,
    max: 75000,
    time: "6–8 weeks",
    image: photos.loftGlazing,
  },
];

export const propertyTypes: {
  id: PropertyId;
  label: string;
  factor: number;
  note?: string;
}[] = [
  { id: "terraced", label: "Terraced", factor: 1 },
  { id: "semi", label: "Semi-detached", factor: 1.03 },
  { id: "detached", label: "Detached", factor: 1.06 },
  {
    id: "flat",
    label: "Flat (top floor)",
    factor: 1.1,
    note: "Subject to freeholder consent.",
  },
];

export const extras = {
  ensuite: { min: 6000, max: 9000, label: "En-suite" },
  planning: { min: 2000, max: 3500, label: "Planning needed" },
} as const;

export function quoteRange(input: {
  type: LoftType | null;
  property: PropertyId | null;
  ensuite: boolean;
  planning: PlanningChoice;
}) {
  if (!input.type) return null;
  const factor = propertyTypes.find((item) => item.id === input.property)?.factor ?? 1;
  let min = input.type.min * factor;
  let max = input.type.max * factor;
  if (input.ensuite) {
    min += extras.ensuite.min;
    max += extras.ensuite.max;
  }
  if (input.planning === "needed") {
    min += extras.planning.min;
    max += extras.planning.max;
  }
  return {
    min: Math.round(min),
    max: Math.round(max),
    time: input.type.time,
  };
}
