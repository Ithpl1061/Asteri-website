-- Product enablers get the description text that the products page showed. Filled by icon name.
-- Rollback: prisma/rollback/rollback-enabler-descriptions.sql
ALTER TABLE "product_enablers" ADD COLUMN "description" TEXT NOT NULL DEFAULT '';
UPDATE "product_enablers" SET "description" = CASE "icon_name"
  WHEN 'Settings' THEN 'Automate routine work and unify processes so your teams spend time on what matters.'
  WHEN 'Timer' THEN 'Real-time data and dashboards turn information into action in minutes, not days.'
  WHEN 'ShieldCheck' THEN 'Role-based access, audit trails and compliance built into every workflow.'
  WHEN 'HeartHandshake' THEN 'One shared workspace keeps teams, partners and customers on the same page.'
  ELSE '' END;
