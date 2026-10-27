// Types are derived from the response schemas in ./schemas, so validation and types cannot drift apart.
import type { z } from "zod";
import type {
  blogPostSchema,
  caseStudySchema,
  industryDetailSchema,
  industrySchema,
  partnerEcosystemSchema,
  partnerSchema,
  partnershipPrincipleSchema,
  productEnablerSchema,
  productSchema,
  serviceSchema,
  solutionOutcomeSchema,
  teamMemberSchema,
} from "./schemas";

export type Service = z.infer<typeof serviceSchema>;
export type Industry = z.infer<typeof industrySchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type IndustryDetail = z.infer<typeof industryDetailSchema>;
export type PartnershipPrinciple = z.infer<typeof partnershipPrincipleSchema>;
export type PartnerEcosystem = z.infer<typeof partnerEcosystemSchema>;
export type Partner = z.infer<typeof partnerSchema>;
export type SolutionOutcome = z.infer<typeof solutionOutcomeSchema>;
export type Product = z.infer<typeof productSchema>;
export type ProductEnabler = z.infer<typeof productEnablerSchema>;
