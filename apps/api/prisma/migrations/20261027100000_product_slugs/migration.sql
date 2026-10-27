-- The M11 migration gave products generated slugs such as "salesforce-1". Set the clean slug the page uses.
-- Matched by name, so it works whatever the row ids are. Rollback: prisma/rollback/rollback-product-slugs.sql
UPDATE "products" SET "slug" = CASE "name"
  WHEN 'Salesforce' THEN 'salesforce'
  WHEN 'Zoho' THEN 'zoho'
  WHEN '1dox.ai' THEN '1dox-ai'
  WHEN 'ManageEngine' THEN 'manageengine'
  WHEN 'PL/SQL' THEN 'plsql'
END
WHERE "name" IN ('Salesforce', 'Zoho', '1dox.ai', 'ManageEngine', 'PL/SQL')
  AND "slug" NOT IN ('salesforce', 'zoho', '1dox-ai', 'manageengine', 'plsql');
