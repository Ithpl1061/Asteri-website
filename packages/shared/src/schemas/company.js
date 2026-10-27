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

export const solutionOutcomeSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  ...timestamps,
});
