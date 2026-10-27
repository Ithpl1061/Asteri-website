import { z } from "zod";
import { timestamps } from "./common.js";

export const blogPostSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  title: z.string(),
  content: z.string(),
  imageUrl: z.string(),
  isFeatured: z.boolean(),
  isAccent: z.boolean(),
  category: z.object({ id: z.number(), name: z.string() }),
  ...timestamps,
});
