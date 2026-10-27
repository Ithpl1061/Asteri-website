import { z } from "zod";

// Public contact form input. `website` is a honeypot: real visitors never fill it in.
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  website: z.string().nullish(),
  captchaToken: z.string().nullish(),
});
