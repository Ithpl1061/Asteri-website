// Types for the shared zod schemas. Keep in step with schemas/*.js.
import type { ZodType } from "zod";

export type Timestamps = { createdAt: string; updatedAt: string };

export type Service = Timestamps & { id: number; sequenceNumber: string; title: string };
export type Industry = Timestamps & { id: number; iconName: string; titleLine1: string; titleLine2: string };
export type IndustryDetail = Timestamps & {
  id: number; industryId: number; name: string; challengesDescription: string;
  solutionsDescription: string; impactDescription: string; imageUrl: string;
};
export type CaseStudy = Timestamps & {
  id: number; industryName: string; situationText: string; approachList: string[];
  outcomeText: string; imageUrl: string | null;
};
export type TeamMember = Timestamps & {
  id: number; name: string; role: string; experience: string; imageUrl: string; linkedinUrl: string;
};
export type Partner = Timestamps & { id: number; name: string; logoUrl: string };
export type PartnershipPrinciple = Timestamps & { id: number; title: string; description: string };
export type PartnerEcosystem = Timestamps & {
  id: number; partnerName: string; subtitle: string; description: string; logoUrl: string;
};
export type SolutionOutcome = Timestamps & { id: number; title: string; description: string };
export type BlogPost = Timestamps & {
  id: number; categoryId: number; title: string; content: string; imageUrl: string;
  isFeatured: boolean; isAccent: boolean; category: { id: number; name: string };
};

export declare const timestamps: Record<"createdAt" | "updatedAt", ZodType<string>>;
export declare const serviceSchema: ZodType<Service>;
export declare const industrySchema: ZodType<Industry>;
export declare const industryDetailSchema: ZodType<IndustryDetail>;
export declare const caseStudySchema: ZodType<CaseStudy>;
export declare const teamMemberSchema: ZodType<TeamMember>;
export declare const partnerSchema: ZodType<Partner>;
export declare const partnershipPrincipleSchema: ZodType<PartnershipPrinciple>;
export declare const partnerEcosystemSchema: ZodType<PartnerEcosystem>;
export declare const solutionOutcomeSchema: ZodType<SolutionOutcome>;
export declare const blogPostSchema: ZodType<BlogPost>;
export declare const contactSchema: ZodType<{ name: string; email: string; message: string; website?: string | null; captchaToken?: string | null }>;
export declare const newsletterSchema: ZodType<{ email: string; website?: string | null; captchaToken?: string | null }>;
