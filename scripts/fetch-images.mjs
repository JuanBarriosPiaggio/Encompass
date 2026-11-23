import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const media = fs.readFileSync(path.join(root, "lib", "media.ts"), "utf8");
const calls = [...media.matchAll(/photo\("([^"]+)", "([^"]+)", "([^"]+)"/g)];

function folder(id) {
  if (id.startsWith("loft") || id === "hero-loft" || id === "hero-lantern") return "lofts";
  if (id.startsWith("ext") || id === "hero-house") return "extensions";
  if (id.startsWith("kit") || id === "hero-kitchen" || id.startsWith("duntshill")) return "kitchens";
  if (id.startsWith("bath")) return "bathrooms";
  if (id.startsWith("int")) return "interiors";
  if (id.startsWith("stair")) return "staircases";
  return "projects";
}

function slugify(alt, id) {
  const base = alt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
  return `${base || id}.jpg`;
}

const jobs = calls.map((match) => {
  const [, id, file, alt] = match;
  const dir = folder(id);
  const name = slugify(alt, id);
  return {
    id,
    file,
    url: `https://st.hzcdn.com/simgs/${file}/home-design.jpg`,
    dest: path.join(root, "public", "images", dir, name),
    web: `/images/${dir}/${name}`,
  };
});

const seen = new Map();
for (const job of jobs) {
  if (seen.has(job.dest)) {
    job.dest = job.dest.replace(/\.jpg$/, `-${job.id}.jpg`);
    job.web = job.web.replace(/\.jpg$/, `-${job.id}.jpg`);
  }
  seen.set(job.dest, job.id);
}

async function download(job) {
  fs.mkdirSync(path.dirname(job.dest), { recursive: true });
  if (fs.existsSync(job.dest) && fs.statSync(job.dest).size > 1000) return "cached";
  const response = await fetch(job.url, { redirect: "follow" });
  if (!response.ok) throw new Error(`${response.status} ${job.url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1000) throw new Error(`tiny file ${job.url}`);
  fs.writeFileSync(job.dest, bytes);
  return "saved";
}

const queue = [...jobs];
const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const job = queue.shift();
    const status = await download(job);
    console.log(status, job.web);
  }
});
await Promise.all(workers);

const lines = jobs.map((job) => `  "${job.id}": "${job.web}",`).join("\n");
fs.writeFileSync(
  path.join(root, "lib", "image-files.ts"),
  `export const imageFiles: Record<string, string> = {\n${lines}\n};\n`,
);
console.log(`wrote ${jobs.length} image paths`);
