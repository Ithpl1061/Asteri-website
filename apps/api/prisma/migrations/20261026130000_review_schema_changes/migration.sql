-- Review item M11: slugs, publishing fields, contact and newsletter fields, JSON approach points.
-- Additive except the approach_list type change (text holding JSON becomes jsonb).
-- slugify(x): lowercase, non-alphanumerics to '-', trim dashes. Ids are appended where a column
-- is not guaranteed unique, so every slug is unique.

-- blog_categories
ALTER TABLE "blog_categories" ADD COLUMN "slug" TEXT, ADD COLUMN "updated_at" TIMESTAMP(3);
UPDATE "blog_categories" SET
  "slug" = trim(both '-' from lower(regexp_replace("name", '[^a-zA-Z0-9]+', '-', 'g'))),
  "updated_at" = "created_at";
ALTER TABLE "blog_categories" ALTER COLUMN "slug" SET NOT NULL,
  ALTER COLUMN "updated_at" SET NOT NULL;
CREATE UNIQUE INDEX "blog_categories_name_key" ON "blog_categories"("name");
CREATE UNIQUE INDEX "blog_categories_slug_key" ON "blog_categories"("slug");

-- blog_posts
ALTER TABLE "blog_posts" ADD COLUMN "slug" TEXT, ADD COLUMN "excerpt" TEXT, ADD COLUMN "author" TEXT,
  ADD COLUMN "is_published" BOOLEAN NOT NULL DEFAULT true, ADD COLUMN "published_at" TIMESTAMP(3);
UPDATE "blog_posts" SET
  "slug" = trim(both '-' from lower(regexp_replace("title", '[^a-zA-Z0-9]+', '-', 'g'))) || '-' || "id",
  "published_at" = "created_at";
ALTER TABLE "blog_posts" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");
CREATE INDEX "blog_posts_category_id_idx" ON "blog_posts"("category_id");

-- case_studies
ALTER TABLE "case_studies" ADD COLUMN "slug" TEXT, ADD COLUMN "sort_order" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "is_published" BOOLEAN NOT NULL DEFAULT true;
UPDATE "case_studies" SET
  "slug" = trim(both '-' from lower(regexp_replace("industry_name", '[^a-zA-Z0-9]+', '-', 'g'))) || '-' || "id",
  "sort_order" = "id";
ALTER TABLE "case_studies" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "case_studies_slug_key" ON "case_studies"("slug");
ALTER TABLE "case_studies" ALTER COLUMN "approach_list" TYPE JSONB USING "approach_list"::jsonb;

-- industries
ALTER TABLE "industries" ADD COLUMN "slug" TEXT, ADD COLUMN "sort_order" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "is_published" BOOLEAN NOT NULL DEFAULT true;
UPDATE "industries" SET
  "slug" = trim(both '-' from lower(regexp_replace("title_line_1", '[^a-zA-Z0-9]+', '-', 'g'))) || '-' || "id",
  "sort_order" = "id";
ALTER TABLE "industries" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "industries_slug_key" ON "industries"("slug");

-- service_details
ALTER TABLE "service_details" ADD COLUMN "slug" TEXT, ADD COLUMN "sort_order" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "is_published" BOOLEAN NOT NULL DEFAULT true;
UPDATE "service_details" SET
  "slug" = trim(both '-' from lower(regexp_replace("title", '[^a-zA-Z0-9]+', '-', 'g'))) || '-' || "id",
  "sort_order" = "id";
ALTER TABLE "service_details" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "service_details_slug_key" ON "service_details"("slug");

-- products
ALTER TABLE "products" ADD COLUMN "slug" TEXT, ADD COLUMN "sort_order" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "is_published" BOOLEAN NOT NULL DEFAULT true;
UPDATE "products" SET
  "slug" = trim(both '-' from lower(regexp_replace("name", '[^a-zA-Z0-9]+', '-', 'g'))) || '-' || "id",
  "sort_order" = "id";
ALTER TABLE "products" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- contact_messages
ALTER TABLE "contact_messages" ADD COLUMN "phone" TEXT, ADD COLUMN "company" TEXT, ADD COLUMN "source" TEXT,
  ADD COLUMN "ip" TEXT, ADD COLUMN "user_agent" TEXT;

-- newsletter_subscribers
ALTER TABLE "newsletter_subscribers" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'subscribed',
  ADD COLUMN "unsubscribe_token" TEXT;
UPDATE "newsletter_subscribers" SET "unsubscribe_token" = md5(random()::text || "id"::text);
CREATE UNIQUE INDEX "newsletter_subscribers_unsubscribe_token_key" ON "newsletter_subscribers"("unsubscribe_token");
