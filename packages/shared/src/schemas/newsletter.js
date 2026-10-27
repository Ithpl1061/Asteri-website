import { z } from "zod";

// Public newsletter signup input. `website` is the same honeypot field as the contact form.
export const newsletterSchema = z.object({
  email: z.string().trim().email().max(254),
  website: z.string().nullish(),
  captchaToken: z.string().nullish(),
});
