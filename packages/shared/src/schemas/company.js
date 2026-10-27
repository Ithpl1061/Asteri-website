import { z } from "zod";
import { timestamps } from "./common.js";

// About (team), Partnership, and Solutions pages.
export const teamMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  experience: z.string(),
  imageUrl: z.string(),
  linkedinUrl: z.string(),
  ...timestamps,
});

export const partnerSchema = z.object({
  id: z.number(),
  name: z.string(),
  logoUrl: z.string(),
  ...timestamps,
});

export const partnershipPrincipleSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  ...timestamps,
});

export const partnerEcosystemSchema = z.object({
  id: z.number(),
  partnerName: z.string(),
  subtitle: z.string(),
  description: z.string(),
  logoUrl: z.string(),
  ...timestamps,
});

// Products page. Cards and slide labels are read from these rows (matched by slug).
export const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  logoUrl: z.string(),
  sortOrder: z.number(),
  isPublished: z.boolean(),
  ...timestamps,
});

export const productEnablerSchema = z.object({
  id: z.number(),
  title: z.string(),
  iconName: z.string(),
  description: z.string(),
  ...timestamps,
});

export const solutionOutcomeSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  ...timestamps,
});
