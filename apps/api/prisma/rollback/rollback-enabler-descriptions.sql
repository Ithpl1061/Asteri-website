-- Reverses migrations/20261027110000_enabler_descriptions
ALTER TABLE "product_enablers" DROP COLUMN IF EXISTS "description";
