# Deploying DayTrip to Render

This guide walks you through deploying this Rails app to [Render](https://render.com) on the **free / starter tier**, with PostgreSQL, Redis (for Sidekiq), and a web + worker process.

No CLI required—you’ll use the Render Dashboard and connect your Git repo.

---

## Prerequisites

- A [Render](https://render.com) account (free)
- Your DayTrip code in a **GitHub** or **GitLab** repo (Render deploys from Git)
- Ruby 3.3.5 and Bundler (only if you want to run commands locally first)

---

## Where to get RAILS_MASTER_KEY and SECRET_KEY_BASE

Run these in your project root (on your machine) and paste the output into Render’s Environment.

### RAILS_MASTER_KEY

Rails uses this to decrypt `config/credentials.yml.enc`. It lives in a file that is **not** in Git (for security).

**If you already have the file:**

```bash
cat config/master.key
```

Copy the single line of output (no spaces or newlines). That’s your `RAILS_MASTER_KEY`.

**If the file doesn’t exist** (e.g. new app or new machine):

```bash
bin/rails credentials:edit
```

That creates `config/master.key` and opens the credentials file. Save and close the editor. Then run `cat config/master.key` and copy that value. Use that same value on Render for both **day-trip-web** and **day-trip-worker**.

### SECRET_KEY_BASE

Rails uses this for signing cookies and sessions. It isn’t stored in the repo; you generate it once and set it in production.

**Generate a new one:**

```bash
bin/rails secret
```

Copy the long string it prints. Set that **exact** value as `SECRET_KEY_BASE` in Render for **both** the web service and the worker (same value on both).

---

## Option A: One-click Blueprint (recommended)

The repo includes a **Blueprint** (`render.yaml`) that defines the web app, worker, Postgres, and Redis.

### 1. Push your code to GitHub/GitLab

Make sure `render.yaml` is in the **root** of the repo and committed.

### 2. Create a Blueprint on Render

1. Go to [dashboard.render.com](https://dashboard.render.com).
2. Click **New** → **Blueprint**.
3. Connect your GitHub/GitLab account if you haven’t already.
4. Select the **repository** that contains DayTrip.
5. Render will detect `render.yaml`. Click **Apply**.

### 3. Set required secrets

Render will create the services but prompt for two values (marked **sync: false** in the Blueprint):

| Variable           | Where to get it | Where to set it |
|--------------------|-----------------|------------------|
| `RAILS_MASTER_KEY` | From your app: `cat config/master.key` (or create with `bin/rails credentials:edit`) | Environment tab for **day-trip-web** and **day-trip-worker** |
| `SECRET_KEY_BASE`  | Generate: `bin/rails secret` | Same: set the **same** value on both web and worker |

`HOST` is already set to **daytrip.live** in the Blueprint (for mailer links and cookies). After you add your custom domain in Render (see below), the app will be served at daytrip.live.

Set the two secrets in **Dashboard → your Web Service → Environment**, and **Dashboard → your Worker → Environment**. Use the **same** `SECRET_KEY_BASE` and `RAILS_MASTER_KEY` on both.

**Use Environment Variables, not Secret Files.** Add `RAILS_MASTER_KEY` and `SECRET_KEY_BASE` as **environment variables** in the Environment tab (paste the value into the value field). Do not use the “Secret Files” feature for these—Rails reads them from `ENV`.

### 4. Deploy

After saving the env vars, Render will redeploy (or trigger a deploy). The first deploy may take a few minutes (install gems, precompile assets, run DB setup).

### 5. Run migrations

Free tier doesn’t support a pre-deploy command, so run migrations once after the first deploy:

1. **Dashboard → day-trip-web → Shell** (tab next to Logs).
2. Run: `bin/rails db:prepare`
3. Exit the shell.

Run the same command after any new migrations in the future (or upgrade to a paid plan to use a pre-deploy command).

---

## Option B: Manual setup (no Blueprint)

If you prefer to create each piece in the Dashboard:

### 1. Create a PostgreSQL database

1. **New** → **PostgreSQL**.
2. Name: `day-trip-db`.
3. Plan: **Free** (or Starter for a persistent DB; free has a 90-day limit).
4. Create. Note the **Internal Database URL** (or use the env var Render adds when you connect the service).

### 2. Create a Redis (Key Value) instance

1. **New** → **Key Value** (Redis).
2. Name: `day-trip-redis`.
3. Plan: **Free** (25 MB).
4. Create. Note the **Internal Redis URL** (e.g. `redis://red-xxx:6379`).

### 3. Create the Web Service

1. **New** → **Web Service**.
2. Connect the repo and select the branch.
3. **Runtime:** Ruby.
4. **Build Command:** `bundle install && bundle exec rails assets:precompile`
5. **Start Command:** `bundle exec puma -C config/puma.rb -p ${PORT:-3000}`
6. Add **Environment Variables:**
   - `RAILS_ENV` = `production`
   - `RAILS_MASTER_KEY` = (from `config/master.key`)
   - `SECRET_KEY_BASE` = (`bin/rails secret`)
   - `DATABASE_URL` = (from Postgres service: **Connect** → **Internal URL**)
   - `REDIS_URL` = (from Redis: **Connect** → **Internal URL**)
   - `HOST` = `daytrip.live` (your custom domain)
7. Create Web Service.

### 4. Create the Background Worker

1. **New** → **Background Worker**.
2. Same repo and branch.
3. **Build Command:** `bundle install`
4. **Start Command:** `bundle exec sidekiq`
5. Add the **same** env vars as the web service (same `DATABASE_URL`, `REDIS_URL`, `RAILS_MASTER_KEY`, `SECRET_KEY_BASE`, etc.).
6. Create Worker.

### 5. Run migrations

From the web service **Shell** (or a one-off job):  
`bin/rails db:prepare`

---

## Custom domain: daytrip.live

To serve the app at **daytrip.live** (and optionally **www.daytrip.live**):

### 1. Add the domain in Render

1. Open **Dashboard** → **day-trip-web** → **Settings**.
2. Under **Custom Domains**, click **Add Custom Domain**.
3. Enter **daytrip.live** and add it.
4. Optionally add **www.daytrip.live** the same way.
5. Render will show the DNS records you need (usually a **CNAME** for the apex or www).

### 2. Point DNS at Render

At your domain registrar (where you bought daytrip.live):

- **For daytrip.live (apex):**  
  Render often provides an **A** record (e.g. to a Render IP) or uses CNAME flattening. Follow the exact hostname Render shows (e.g. `day-trip-web-xxxx.onrender.com`).
- **For www.daytrip.live:**  
  Add a **CNAME** record:  
  - Name: `www`  
  - Value: the hostname Render gives (e.g. `day-trip-web-xxxx.onrender.com`).

Save the DNS changes. SSL is issued automatically by Render once DNS is correct (can take a few minutes).

`HOST` is already set to **daytrip.live** in the Blueprint, so links in emails and the app will use your domain.

---

## Free tier notes

| Resource    | Free tier behavior |
|------------|---------------------|
| **Web**    | Spins down after ~15 min of no traffic; cold start on next request (30–60 s). |
| **Worker** | Free tier available; runs continuously for the free allowance. |
| **Postgres** | Free DB has a **90-day** limit; then you must upgrade or export data. |
| **Redis**  | Free 25 MB; enough for Sidekiq and light caching. |

To avoid the 90-day Postgres limit, use a **Starter** Postgres plan or migrate the DB before the limit.

---

## Optional: Run migrations on every deploy (paid plans only)

On **Starter** (or higher), you can run migrations automatically: **Web Service → Settings → Build & Deploy → Pre-Deploy Command** = `bin/rails db:prepare`. Free tier does not support pre-deploy commands.

---

## Useful Render links

- **Logs:** Dashboard → your service → **Logs**.
- **Env vars:** Dashboard → your service → **Environment**.
- **Shell:** Dashboard → your service → **Shell** (for one-off commands).
- **Docs:** [Deploy Rails with Sidekiq](https://render.com/docs/deploy-rails-sidekiq), [Rails 6/7](https://render.com/docs/deploy-rails-6-7).

---

## Troubleshooting

- **“Deploy failed” – find the real error**  
  In Render: open the **failed deploy** → **Logs** (or **Build logs**). The last 30–50 lines usually show the failing command and error (e.g. `bundle install`, `assets:precompile`, or the **start** command). Copy that error when asking for help or searching.

- **Build fails on assets**  
  Ensure **Build Command** includes:  
  `bundle install && bundle exec rails assets:precompile`

- **502 or “Application failed to start”**  
  Check **Logs**. Ensure **Start Command** is exactly:  
  `bundle exec puma -C config/puma.rb -p ${PORT:-3000}`  
  Render sets `PORT`; your Puma config already uses `ENV['PORT']`.

- **DB connection errors**  
  Use the **Internal Database URL** from the Postgres service (not the external URL) so it works over Render’s private network.

- **Jobs/mailers not running**  
  Ensure the **worker** service exists, uses the same `REDIS_URL` and `DATABASE_URL`, and that **Start Command** is `bundle exec sidekiq`.

- **Same secret on web and worker**  
  `SECRET_KEY_BASE` and `RAILS_MASTER_KEY` must be **identical** on both the web and worker service so sessions and credentials work.
