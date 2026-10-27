import { z } from "zod";

// Every API row carries these two fields.
export const timestamps = { createdAt: z.string(), updatedAt: z.string() };
