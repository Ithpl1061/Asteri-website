import { z } from "zod";

// Response shapes from the API (backend/prisma/schema.prisma). A response that does not match
// is logged and the page falls back to empty content, instead of rendering bad data.

const timestamps = { createdAt: z.string(), updatedAt: z.string() };

export const serviceSchema = z.object({
  id: z.number(),
  sequenceNumber: z.string(),
  title: z.string(),
  ...timestamps,
});

export const industrySchema = z.object({
  id: z.number(),
  iconName: z.string(),
  titleLine1: z.string(),
  titleLine2: z.string(),
  ...timestamps,
});

export const teamMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  experience: z.string(),
  imageUrl: z.string(),
  linkedinUrl: z.string(),
  ...timestamps,
});

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

export const caseStudySchema = z.object({
  id: z.number(),
  industryName: z.string(),
  situationText: z.string(),
  approachList: z.array(z.string()),
  outcomeText: z.string(),
  imageUrl: z.string().nullable(),
  ...timestamps,
});

export const industryDetailSchema = z.object({
  id: z.number(),
  industryId: z.number(),
  name: z.string(),
  challengesDescription: z.string(),
  solutionsDescription: z.string(),
  impactDescription: z.string(),
  imageUrl: z.string(),
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

export const partnerSchema = z.object({
  id: z.number(),
  name: z.string(),
  logoUrl: z.string(),
  ...timestamps,
});

export const solutionOutcomeSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  ...timestamps,
});

// Public form inputs (used by the backend). `website` is a honeypot: real visitors never fill it in.
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  website: z.string().optional(),
  captchaToken: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(254),
  website: z.string().optional(),
  captchaToken: z.string().optional(),
});
