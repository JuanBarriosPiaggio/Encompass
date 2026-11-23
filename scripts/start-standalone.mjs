import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const server = path.join(root, ".next", "standalone", "server.js");

// Railway sets HOSTNAME to the container id. Next binds only to that name,
// so the proxy cannot reach the process. Always listen on every interface.
const child = spawn(process.execPath, [server], {
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTNAME: "0.0.0.0",
    PORT: process.env.PORT || "3000",
  },
});

child.on("exit", (code) => process.exit(code ?? 0));
