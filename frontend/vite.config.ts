// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
const lovableConfig = defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
  },
});

export default async (env: any) => {
  const config = await lovableConfig(env);
  
  // Remove the vite-tsconfig-paths plugin to suppress the Vite 8+ warning
  // since Vite now supports this natively via resolve.tsconfigPaths
  const removePlugin = (plugin: any): any => {
    if (Array.isArray(plugin)) return plugin.map(removePlugin).filter(Boolean);
    if (plugin && plugin.name === "vite-tsconfig-paths") return null;
    return plugin;
  };

  if (config.plugins) {
    config.plugins = removePlugin(config.plugins);
  }

  return config;
};
