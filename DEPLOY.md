# Deploying DayTrip to Render

This guide walks you through deploying this Rails app to [Render](https://render.com) on the **free / starter tier**, with PostgreSQL, Redis (for Sidekiq), and a web + worker process.

No CLI required—you’ll use the Render Dashboard and connect your Git repo.

---

## Prerequisites

- A [Render](https://render.com) account (free)
- Your DayTrip code in a **GitHub** or **GitLab** repo (Render deploys from Git)
- Ruby 3.3.5 and Bundler (only if you want to run commands locally first)

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

Render will create the services but prompt for a few values (marked **sync: false** in the Blueprint):

| Variable           | Where to get it | Where to set it |
|--------------------|-----------------|------------------|
| `RAILS_MASTER_KEY` | From your app: `cat config/master.key` (or create with `bin/rails credentials:edit`) | Environment tab for **day-trip-web** and **day-trip-worker** |
| `SECRET_KEY_BASE`  | Generate: `bin/rails secret` | Same: set the **same** value on both web and worker |
| `HOST`             | Your Render URL, e.g. `day-trip-web-xxxx.onrender.com` | Same (use the URL Render gives the web service) |

Set these in **Dashboard → your Web Service → Environment**, and **Dashboard → your Worker → Environment**. Use the **same** `SECRET_KEY_BASE` and `RAILS_MASTER_KEY` on both.

### 4. Deploy

After saving the env vars, Render will redeploy (or trigger a deploy). The first deploy may take a few minutes (install gems, precompile assets, run DB setup).

### 5. Run migrations

If the DB is new, run migrations once:

1. **Dashboard → day-trip-web → Shell** (or use **Manual Deploy** with a pre-deploy command).
2. Or add a one-off **Background Worker** with start command: `bin/rails db:prepare`, run once, then delete.

Alternatively, you can add a **preDeployCommand** in `render.yaml` for the web service:

```yaml
preDeployCommand: "bin/rails db:prepare"
```

Then every web deploy will run migrations before starting.

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
   - `HOST` = your web service URL, e.g. `day-trip-web-xxxx.onrender.com`
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

## Free tier notes

| Resource    | Free tier behavior |
|------------|---------------------|
| **Web**    | Spins down after ~15 min of no traffic; cold start on next request (30–60 s). |
| **Worker** | Free tier available; runs continuously for the free allowance. |
| **Postgres** | Free DB has a **90-day** limit; then you must upgrade or export data. |
| **Redis**  | Free 25 MB; enough for Sidekiq and light caching. |

To avoid the 90-day Postgres limit, use a **Starter** Postgres plan or migrate the DB before the limit.

---

## Optional: Run migrations on every deploy

In `render.yaml`, add to the **web** service:

```yaml
preDeployCommand: "bin/rails db:prepare"
```

Or in the Dashboard: **Web Service → Settings → Build & Deploy → Pre-Deploy Command** = `bin/rails db:prepare`.

---

## Useful Render links

- **Logs:** Dashboard → your service → **Logs**.
- **Env vars:** Dashboard → your service → **Environment**.
- **Shell:** Dashboard → your service → **Shell** (for one-off commands).
- **Docs:** [Deploy Rails with Sidekiq](https://render.com/docs/deploy-rails-sidekiq), [Rails 6/7](https://render.com/docs/deploy-rails-6-7).

---

## Troubleshooting

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
