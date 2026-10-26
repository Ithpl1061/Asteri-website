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

// For route loaders: the response is checked against a zod schema. A failed request or a response
// that does not match returns the fallback instead of failing the whole page; the problem is logged.
export async function loadApi<S extends z.ZodTypeAny>(
  path: string,
  schema: S,
  fallback: z.infer<S>,
): Promise<z.infer<S>> {
  try {
    const res = await fetch(apiUrl(path));
    const parsed = schema.safeParse(await checkedJson<unknown>(res));
    if (!parsed.success) {
      console.error(`Unexpected response from ${path}`, parsed.error.flatten());
      return fallback;
    }
    return parsed.data;
  } catch (error) {
    console.error(`Could not load ${path}`, error);
    return fallback;
  }
}
