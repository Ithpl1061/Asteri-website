import { z } from "zod";
import { timestamps } from "./common.js";

// Home-page services and industries, and the Services/Industries/Case study pages.
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

export const caseStudySchema = z.object({
  id: z.number(),
  industryName: z.string(),
  situationText: z.string(),
  approachList: z.array(z.string()),
  outcomeText: z.string(),
  imageUrl: z.string().nullable(),
  ...timestamps,
});
