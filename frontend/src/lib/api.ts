import type { z } from "zod";

const API_BASE = import.meta.env.VITE_API_URL ?? "";
// On the server (route loaders during SSR) call the API directly on the private network.
// In the browser, calls go through Nginx at /api.
const SERVER_API_BASE =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.API_INTERNAL_URL ?? "http://127.0.0.1:5000";

export const apiUrl = (path: string) =>
  `${typeof window === "undefined" ? SERVER_API_BASE : API_BASE}${path}`;

export async function checkedJson<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`API request failed: ${res.status}`);
  return (await res.json()) as T;
}

// Fetches one endpoint and checks the response against a zod schema. Throws on a failed request or
// a response that does not match, so TanStack Query does not cache bad data. Used by lib/queries.ts.
export async function fetchApi<S extends z.ZodTypeAny>(
  path: string,
  schema: S,
): Promise<z.infer<S>> {
  const res = await fetch(apiUrl(path));
  const parsed = schema.safeParse(await checkedJson<unknown>(res));
  if (!parsed.success) {
    throw new Error(`Unexpected response from ${path}: ${parsed.error.message}`);
  }
  return parsed.data;
}
