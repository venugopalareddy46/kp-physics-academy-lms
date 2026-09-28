# Production deployment

## 1. SQLite

Create a SQLite database and set `SQLITE_PATH`.

Run:

```bash
npm install
npm run db:migrate
```

## 2. Cloudflare R2

Create a private bucket named `kp-lms-media`. Create an R2 API token with object read/write permissions for that bucket. Set the R2 environment variables in `.env`.

Recommended media hostname: `media.venugopalareddy.in`.

## 3. Domain

In Cloudflare DNS, create the required DNS records for the web host and API host. The exact target depends on your chosen hosting provider. Do not guess the target; copy the target supplied by the provider.

Recommended hostnames:

- `venugopalareddy.in`
- `www.venugopalareddy.in`
- `api.venugopalareddy.in`
- `app.venugopalareddy.in`
- `media.venugopalareddy.in`

## 4. Environment

Copy `.env.example` to `.env` and fill in secrets. Never commit `.env`.

## 5. Build

```bash
npm run build
npm start
```

## 6. FlutterFlow

Set the REST API base URL to `https://api.venugopalareddy.in` after the API is deployed and TLS is active.
