-- Restores the generated slugs (name-id). Only use if the products table still has the clean slugs.
UPDATE "products" SET "slug" = "slug" || '-' || "id" WHERE "slug" IN ('salesforce', 'zoho', '1dox-ai', 'manageengine', 'plsql');
