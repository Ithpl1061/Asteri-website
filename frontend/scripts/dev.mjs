// Starts the backend API (if not already running on :5000) and then Vite.
import { spawn } from "node:child_process";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const backendDir = path.resolve(root, "..", "backend");
const isWin = process.platform === "win32";
const children = [];

const portInUse = (port) =>
  new Promise((resolve) => {
    const s = net.connect({ port, host: "127.0.0.1" });
    s.once("connect", () => (s.destroy(), resolve(true)));
    s.once("error", () => resolve(false));
  });

if (await portInUse(5000)) {
  console.log("[dev] Backend already running on :5000, reusing it.");
} else {
  console.log("[dev] Starting backend on :5000...");
  children.push(spawn("npm run dev", { cwd: backendDir, stdio: "inherit", shell: true }));
}

children.push(spawn("npx vite dev", { cwd: root, stdio: "inherit", shell: true }));

const stop = () => {
  for (const c of children) {
    if (isWin) spawn("taskkill", ["/pid", String(c.pid), "/T", "/F"], { stdio: "ignore" });
    else c.kill();
  }
};
process.on("SIGINT", () => (stop(), process.exit()));
process.on("exit", stop);
children[children.length - 1].on("exit", (code) => process.exit(code ?? 0));
