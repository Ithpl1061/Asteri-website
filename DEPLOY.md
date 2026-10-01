# Asteri Deployment Guide for Hostinger VPS (Ubuntu)

This guide covers deploying the Asteri frontend (TanStack Start/Nitro) and backend (Express/Prisma/PostgreSQL) to a fresh Ubuntu VPS on Hostinger.

## 1. Initial Setup

Connect to your VPS as root (replace `<VPS_IP>` with your server's IP address):
```bash
ssh root@<VPS_IP>
```

Update packages and create a new non-root user for security (e.g., `asteriadmin`):
```bash
apt update && apt upgrade -y
adduser asteriadmin
usermod -aG sudo asteriadmin
```

Copy your SSH key to the new user and switch to it:
*(Note: The `rsync` command below is only needed if the root user already uses SSH keys. If you logged in with a password, skip the rsync line and just run `su - asteriadmin`).*
```bash
rsync --archive --chown=asteriadmin:asteriadmin ~/.ssh /home/asteriadmin
su - asteriadmin
```

Set up the UFW Firewall:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo ufw status
```

## 2. Install Dependencies

**Install Node.js 22.x (LTS) via NodeSource:**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v # Verify it outputs v22.x.x
```

**Install PM2, Nginx, Certbot, and Git:**
```bash
sudo npm install -g pm2
sudo apt install -y nginx certbot python3-certbot-nginx git
```

**Install PostgreSQL 18.x (or latest via official repo):**
Your local database is running PostgreSQL 18.x. We will use the official PostgreSQL repository.
```bash
sudo apt install -y curl ca-certificates
sudo install -d /usr/share/postgresql-common/pgdg
sudo curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc
sudo sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
sudo apt update
sudo apt -y install postgresql
psql --version
```

## 3. Database Setup

Create the database and a dedicated user. Ensure you replace `CHANGE_ME_STRONG_PASSWORD` with a secure password.

```bash
sudo -u postgres psql
```
Inside the `psql` prompt:
```sql
CREATE DATABASE asteri;
CREATE USER asteri_user WITH ENCRYPTED PASSWORD 'CHANGE_ME_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE asteri TO asteri_user;
ALTER DATABASE asteri OWNER TO asteri_user;
\q
```
*(By default, PostgreSQL on Ubuntu is configured to only allow local socket connections, which is secure for our setup).*

## 4. Migrate Data from Windows to VPS

Because there are no seed scripts, the safest way to clone your local database exactly (including manual pgAdmin entries) is via a custom-format dump.

**On your local Windows machine:**
Export the database in custom format (`-Fc`). Open Command Prompt or PowerShell:
*(Note: If `pg_dump` is not recognized, you can find it in `C:\Program Files\PostgreSQL\18\bin`. Also, verify the exact database name in pgAdmin, as it is case-sensitive).*
```powershell
pg_dump -U postgres -h localhost -p 5432 -Fc -d Asteri -f asteri_dump.custom
```
*(Upload `asteri_dump.custom` to your VPS via SFTP/WinSCP, placing it in `/home/asteriadmin/`)*

**On your VPS:**
Restore the dump into the new database, ignoring the original ownership and privileges from your local machine, and assign them to the new user.
```bash
# Copy the dump to /tmp first
sudo cp /home/asteriadmin/asteri_dump.custom /tmp/
sudo chmod 644 /tmp/asteri_dump.custom

# Restore data
sudo -u postgres pg_restore -d asteri --no-owner --no-privileges --role=asteri_user /tmp/asteri_dump.custom

# Ensure asteri_user owns the tables and sequences
sudo -u postgres psql -d asteri -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO asteri_user;"
sudo -u postgres psql -d asteri -c "GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO asteri_user;"

# Verify table ownership (should show asteri_user)
sudo -u postgres psql -d asteri -c "\dt"
```

## 5. Get the Code

Clone your repository (or upload it via SFTP if it's private and you haven't set up SSH keys for Git):
*(Note: If cloning a private GitHub repository, generate a fine-grained personal access token with read-only access for this repo only. Use it as your password when prompted).*
```bash
git clone <YOUR_REPO_URL> ~/asteri-web
cd ~/asteri-web
```

## 6. Setup Backend

Install dependencies, set up the environment, and verify the database:
```bash
cd ~/asteri-web/backend
npm ci
cp .env.production.example .env
```
Edit `.env` (`nano .env`) and update `CORS_ORIGIN` to your real domain and `DATABASE_URL` with your strong password.
*(Warning: The DB password should ideally contain letters and numbers only. If it contains special characters, they must be URL-encoded because it goes inside the DATABASE_URL connection string).*

Generate Prisma Client and verify the database status:
```bash
npx prisma generate
npx prisma migrate status
```
*Note: Because we restored a full dump, the `_prisma_migrations` table was included. Prisma should report `Database schema is up to date!`*

## 7. Setup Frontend

Install dependencies and build.
**CRITICAL:** Ensure `VITE_API_URL` is empty during the build so that the frontend defaults to relative `/api` paths.
```bash
cd ~/asteri-web/frontend
npm ci
VITE_API_URL= npm run build
```
Verify there are no hardcoded localhost strings in the final output:
```bash
grep -rn "localhost:5000" .output/ && echo "FOUND localhost - do not deploy" || echo "Clean"
```

## 8. Start Apps with PM2

Go to the root of the project to start both apps via the ecosystem configuration:
```bash
cd ~/asteri-web
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```
Run the command that `pm2 startup` outputs to ensure PM2 starts automatically on server reboot.

## 9. Setup Nginx

Copy the provided Nginx configuration, update your domain, and test it:
```bash
sudo cp deploy/nginx-asteri.conf /etc/nginx/sites-available/asteri
```
Edit the file (`sudo nano /etc/nginx/sites-available/asteri`) and replace `yourdomain.com www.yourdomain.com` with your actual domain names.
```bash
sudo ln -s /etc/nginx/sites-available/asteri /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 10. DNS Configuration (Hostinger hPanel)

1. Log into Hostinger and open your domain's DNS Zone Editor.
2. Ensure you have an **A Record** for `@` pointing to your `<VPS_IP>`.
3. Ensure you have an **A Record** (or CNAME) for `www` pointing to your `<VPS_IP>`.
4. Wait for DNS propagation (can take a few minutes to hours).

*(Important: Before proceeding with SSL in Step 11, make sure that ports 80 and 443 are also open in Hostinger's own VPS firewall interface in hPanel, if you have it enabled).*

## 11. SSL with Certbot

Once your domain correctly points to the VPS, generate an SSL certificate:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Test the auto-renewal process:
```bash
sudo certbot renew --dry-run
```

## 12. Verification Checklist

Visit `https://yourdomain.com` and manually verify:
- [ ] The homepage loads correctly.
- [ ] Perform a **Hard Refresh** (Ctrl+F5 or Cmd+Shift+R).
- [ ] Check every single route (`/about`, `/services`, `/blog`, `/contact`, etc.) directly via the URL bar to ensure SSR works.
- [ ] Verify that database content (blog posts, services, dynamic data) is visible.
- [ ] Test the contact/newsletter forms to ensure the backend receives data.
- [ ] Open the Browser Console (F12) and ensure there are no CORS or 500 errors.
- [ ] Confirm GSAP animations behave exactly as they do locally.

## 13. Automated Daily Backups

To allow `pg_dump` to run in a cron job without prompting for a password, create a `.pgpass` file:
```bash
echo "localhost:5432:asteri:asteri_user:CHANGE_ME_STRONG_PASSWORD" > ~/.pgpass
chmod 600 ~/.pgpass
```

Set up a daily cron job to back up the database and keep the last 7 days.
*(Note: Be sure to download these backup files off the server regularly, or enable Hostinger VPS snapshots for full server safety).*

```bash
mkdir -p ~/backups
nano ~/backup_db.sh
```
Add the following script:
```bash
#!/bin/bash
DIR="/home/asteriadmin/backups"
FILE="$DIR/asteri_db_$(date +\%Y\%m\%d).custom"
pg_dump -U asteri_user -h localhost -p 5432 -Fc -d asteri -f $FILE
# Delete files older than 7 days
find $DIR -name "asteri_db_*.custom" -type f -mtime +7 -exec rm {} \;
```
Make it executable and add it to cron:
```bash
chmod +x ~/backup_db.sh
crontab -e
```
Add this line to run it daily at 3 AM:
```text
0 3 * * * /home/asteriadmin/backup_db.sh
```

## 14. How to Update the Site Later

When you push new code to GitHub and want to update the VPS:
```bash
cd ~/asteri-web
git pull origin master

# If backend changed:
cd backend
npm ci
npx prisma generate
npx prisma migrate deploy # Only if you have new migrations

# If frontend changed:
cd ../frontend
npm ci
VITE_API_URL= npm run build

# Restart apps
pm2 restart asteri-frontend asteri-backend
```

## 15. Troubleshooting

**Checking PM2 Logs (App Crashes, Console Errors):**
```bash
pm2 logs               # View all logs live
pm2 logs asteri-backend --lines 100
```

**Checking Nginx Logs (502 Bad Gateway Errors):**
```bash
sudo tail -f /var/log/nginx/error.log
```

**Common "502 Bad Gateway" Fixes:**
- Ensure both apps are `online` in `pm2 status`.
- Check if the port matches (Backend must be `5000`, Frontend must be `3000`).
- Ensure `.env` is correctly configured in the `backend` folder.

## 16. Optional: Log Management

To prevent PM2 logs from filling up your disk over time, install the `pm2-logrotate` module:
```bash
pm2 install pm2-logrotate
```
