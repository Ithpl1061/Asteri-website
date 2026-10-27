-- Image files were converted to WebP (same names, new extension). Update the stored paths to match.
-- Only the extension changes. Rollback: rollback/rollback-webp-image-paths.sql
UPDATE "industry_details" SET "image_url" = regexp_replace("image_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "image_url" ~* '\.(png|jpe?g)$';
UPDATE "partner_ecosystem_details" SET "logo_url" = regexp_replace("logo_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "logo_url" ~* '\.(png|jpe?g)$';
UPDATE "partners" SET "logo_url" = regexp_replace("logo_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "logo_url" ~* '\.(png|jpe?g)$';
UPDATE "team_members" SET "image_url" = regexp_replace("image_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "image_url" ~* '\.(png|jpe?g)$';
UPDATE "blog_posts" SET "image_url" = regexp_replace("image_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "image_url" ~* '\.(png|jpe?g)$';
UPDATE "products" SET "logo_url" = regexp_replace("logo_url", '\.(png|jpe?g)$', '.webp', 'i') WHERE "logo_url" ~* '\.(png|jpe?g)$';
