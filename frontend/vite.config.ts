import { request as httpRequest } from "node:http";
import { defineConfig, type Plugin } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const API_TARGET = "http://localhost:5000";

// Dev only: forward /api/* to the backend. This is a plugin, not server.proxy, because the TanStack
// Start dev middleware answers unknown paths with its own 404 page before Vite's proxy runs.
function apiDevProxy(target: string): Plugin {
  return {
    name: "asteri-api-dev-proxy",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api/")) return next();
        const url = new URL(req.url, target);
        const upstream = httpRequest(
          url,
          { method: req.method, headers: { ...req.headers, host: url.host } },
          (upstreamRes) => {
            res.writeHead(upstreamRes.statusCode ?? 502, upstreamRes.headers);
            upstreamRes.pipe(res);
          },
        );
        upstream.on("error", () => {
          res.writeHead(502, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: "API unavailable" }));
        });
        req.pipe(upstream);
      });
    },
  };
}

// Plain TanStack Start setup. The server entry is src/server.ts (branded SSR error page).
// Nitro builds the Node server that PM2 runs from .output/server/index.mjs.
export default defineConfig({
  plugins: [
    apiDevProxy(API_TARGET),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: "node-server",
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 8080,
  },
});
