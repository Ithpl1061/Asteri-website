const API_BASE = import.meta.env.VITE_API_URL ?? "";
// On the server (route loaders during SSR) call the API directly on the private network.
// In the browser, calls go through Nginx at /api.
const SERVER_API_BASE =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.API_INTERNAL_URL ?? "http://127.0.0.1:5000";

export const apiUrl = (path: string) =>
  `${typeof window === "undefined" ? SERVER_API_BASE : API_BASE}${path}`;

export async function checkedJson<T = any>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`API request failed: ${res.status}`);
  return res.json();
}

// For route loaders: a failed API call returns the fallback instead of failing the whole page.
// The page then renders as it did before, with empty sections, and the error is logged.
export async function loadApi<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(apiUrl(path));
    return await checkedJson<T>(res);
  } catch (error) {
    console.error(`Could not load ${path}`, error);
    return fallback;
  }
}
