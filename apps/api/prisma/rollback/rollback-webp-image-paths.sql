-- Reverses migrations/20261027090000_webp_image_paths. Only safe if the original PNG/JPG files still exist.
-- WARNING: this also changes any .webp path that existed before the migration (for example 3.webp, 4.webp, 5.webp). Check those rows first.
UPDATE "industry_details" SET "image_url" = regexp_replace("image_url", '\.webp$', '.png') WHERE "image_url" LIKE '%.webp';
UPDATE "partner_ecosystem_details" SET "logo_url" = regexp_replace("logo_url", '\.webp$', '.png') WHERE "logo_url" LIKE '%.webp';
UPDATE "partners" SET "logo_url" = regexp_replace("logo_url", '\.webp$', '.png') WHERE "logo_url" LIKE '%.webp';
UPDATE "team_members" SET "image_url" = regexp_replace("image_url", '\.webp$', '.png') WHERE "image_url" LIKE '%.webp';
UPDATE "blog_posts" SET "image_url" = regexp_replace("image_url", '\.webp$', '.png') WHERE "image_url" LIKE '%.webp';
UPDATE "products" SET "logo_url" = regexp_replace("logo_url", '\.webp$', '.png') WHERE "logo_url" LIKE '%.webp';
