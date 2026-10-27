#!/usr/bin/env bash
# Deploys the current master on the VPS. Run on the server from the repo folder:
#   bash deploy/deploy.sh
# Order matters: back up the database, migrate, then rebuild and restart. Restarting before the
# migration finishes makes the site show empty content.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKUP_DIR="${BACKUP_DIR:-$HOME/asteri-backups}"
cd "$REPO_DIR"

echo "==> Checking the working tree"
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "Tracked files on the server have local changes. Resolve them before deploying." >&2
  git status --short --untracked-files=no >&2
  exit 1
fi

echo "==> Pulling master (fast-forward only)"
git pull --ff-only origin master

echo "==> Backing up the database"
mkdir -p "$BACKUP_DIR"
DATABASE_URL="$(grep '^DATABASE_URL=' apps/api/.env | head -1 | cut -d= -f2- | tr -d '"')"
BACKUP_FILE="$BACKUP_DIR/asteri-$(date +%Y%m%d-%H%M%S).dump"
pg_dump -Fc -f "$BACKUP_FILE" "$DATABASE_URL"
pg_restore --list "$BACKUP_FILE" > /dev/null   # fails here if the backup is unreadable
echo "Backup written and verified: $BACKUP_FILE"

echo "==> Installing dependencies (all workspaces)"
npm ci

echo "==> Migrating and generating the Prisma client"
(cd apps/api && npx prisma migrate deploy && npx prisma generate)

echo "==> Building the frontend"
(cd apps/web && VITE_API_URL= npm run build)

echo "==> Restarting the apps"
pm2 start ecosystem.config.cjs --update-env || pm2 restart ecosystem.config.cjs --update-env
pm2 save

echo "==> Done. Check: curl -s http://127.0.0.1:5000/api/health"
