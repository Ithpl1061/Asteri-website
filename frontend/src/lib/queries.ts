import { queryOptions, type QueryClient } from "@tanstack/react-query";
import type { z } from "zod";
import { fetchApi } from "@/lib/api";

// One query per API endpoint. Route loaders fill the cache with ensureQueryData on the server, so
// the content is in the first HTML. A failed request falls back to the empty value and is logged.
export function apiQuery<S extends z.ZodTypeAny>(path: string, schema: S) {
  return queryOptions({
    queryKey: ["api", path],
    queryFn: () => fetchApi(path, schema),
    retry: 1,
  });
}

export async function ensureApi<S extends z.ZodTypeAny>(
  queryClient: QueryClient,
  path: string,
  schema: S,
  fallback: z.infer<S>,
): Promise<z.infer<S>> {
  try {
    return await queryClient.ensureQueryData(apiQuery(path, schema));
  } catch (error) {
    console.error(`Could not load ${path}`, error);
    return fallback;
  }
}
