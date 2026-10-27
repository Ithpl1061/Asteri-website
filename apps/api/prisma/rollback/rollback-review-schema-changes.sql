-- Reverses prisma/migrations/20261026130000_review_schema_changes.
-- Run only if the migration must be undone. Take a backup first.
-- Note: approach_list returns to text in compact JSON form (spacing may differ from the original).

DROP INDEX IF EXISTS "newsletter_subscribers_unsubscribe_token_key";
ALTER TABLE "newsletter_subscribers" DROP COLUMN IF EXISTS "unsubscribe_token", DROP COLUMN IF EXISTS "status";

ALTER TABLE "contact_messages" DROP COLUMN IF EXISTS "user_agent", DROP COLUMN IF EXISTS "ip",
  DROP COLUMN IF EXISTS "source", DROP COLUMN IF EXISTS "company", DROP COLUMN IF EXISTS "phone";

DROP INDEX IF EXISTS "products_slug_key";
ALTER TABLE "products" DROP COLUMN IF EXISTS "is_published", DROP COLUMN IF EXISTS "sort_order", DROP COLUMN IF EXISTS "slug";

DROP INDEX IF EXISTS "service_details_slug_key";
ALTER TABLE "service_details" DROP COLUMN IF EXISTS "is_published", DROP COLUMN IF EXISTS "sort_order", DROP COLUMN IF EXISTS "slug";

DROP INDEX IF EXISTS "industries_slug_key";
ALTER TABLE "industries" DROP COLUMN IF EXISTS "is_published", DROP COLUMN IF EXISTS "sort_order", DROP COLUMN IF EXISTS "slug";

DROP INDEX IF EXISTS "case_studies_slug_key";
ALTER TABLE "case_studies" ALTER COLUMN "approach_list" TYPE TEXT USING "approach_list"::text;
ALTER TABLE "case_studies" DROP COLUMN IF EXISTS "is_published", DROP COLUMN IF EXISTS "sort_order", DROP COLUMN IF EXISTS "slug";

DROP INDEX IF EXISTS "blog_posts_category_id_idx";
DROP INDEX IF EXISTS "blog_posts_slug_key";
ALTER TABLE "blog_posts" DROP COLUMN IF EXISTS "published_at", DROP COLUMN IF EXISTS "is_published",
  DROP COLUMN IF EXISTS "author", DROP COLUMN IF EXISTS "excerpt", DROP COLUMN IF EXISTS "slug";

DROP INDEX IF EXISTS "blog_categories_slug_key";
DROP INDEX IF EXISTS "blog_categories_name_key";
ALTER TABLE "blog_categories" DROP COLUMN IF EXISTS "updated_at", DROP COLUMN IF EXISTS "slug";
