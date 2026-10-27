// Runs before `npm run dev`. If an old copy of this backend is still holding the port,
// stop it, so the new one can start at once. Only node processes running index.js or nodemon are stopped.
import { execSync } from "node:child_process";

const port = process.argv[2] || process.env.PORT || "5000";
const isWindows = process.platform === "win32";

function listeningPids() {
  try {
    if (isWindows) {
      const out = execSync(`netstat -ano -p tcp`, { encoding: "utf8" });
      return [...new Set(out.split("\n").filter((l) => l.includes(`:${port} `) && /LISTENING/.test(l)).map((l) => l.trim().split(/\s+/).pop()))];
    }
    return execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, { encoding: "utf8" }).split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

function commandLine(pid) {
  try {
    if (isWindows) {
      return execSync(`powershell -NoProfile -Command "(Get-CimInstance Win32_Process -Filter 'ProcessId=${pid}').CommandLine"`, { encoding: "utf8" }).trim();
    }
    return execSync(`ps -o args= -p ${pid}`, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function stop(pid) {
  if (isWindows) execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore" });
  else process.kill(Number(pid), "SIGTERM");
}

for (const pid of listeningPids()) {
  const cmd = commandLine(pid);
  if (/index\.js|nodemon/.test(cmd)) {
    stop(pid);
    console.log(`[free-port] stopped old backend process ${pid} that held port ${port}.`);
  } else {
    console.log(`[free-port] port ${port} is used by process ${pid} (${cmd || "unknown"}); not stopping it.`);
  }
}
