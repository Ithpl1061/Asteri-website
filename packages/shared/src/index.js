// Single entry point for the shared zod schemas. Used by the backend (validation) and the
// frontend (API response checks). Requires Node 22.12 or later for the backend.
export * from "./schemas/common.js";
export * from "./schemas/service.js";
export * from "./schemas/company.js";
export * from "./schemas/blog.js";
export * from "./schemas/contact.js";
export * from "./schemas/newsletter.js";
