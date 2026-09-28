# KP Physics Academy LMS

Production-oriented LMS foundation for FlutterFlow + Next.js + SQLite + Cloudflare R2 + Razorpay.

## Stack
- FlutterFlow: mobile/web UI and API client
- Next.js: backend/API and admin web foundation
- SQLite: SQL database, no Supabase and no PostgreSQL
- Cloudflare R2: private videos, PDFs and assets
- Razorpay: payments
- JWT/session cookies: authentication
- Exact brand colors: #E8C020 #80C0A8 #F0A020 #F08028
- Domain: venugopalareddy.in

## Local setup

1. Copy `.env.example` to `.env`.
2. Set `JWT_SECRET` and keep `SQLITE_PATH=./data/kp-physics.sqlite`.
3. Install dependencies:

```bash
npm install
```

4. Create the SQLite schema and seed courses:

```bash
npm run db:migrate
```

5. Create an administrator:

```bash
npm run create-admin -- admin@venugopalareddy.in "StrongPasswordHere" "KP Admin"
```

6. Start:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production

Keep SQLite on persistent storage. Do not put the database file on an ephemeral deployment filesystem. For a single-server deployment, mount a persistent disk/volume at `data/`. If you later need multiple API instances, migrate the SQL layer to a network-capable database.

Cloudflare R2 remains the media store; only object keys are stored in SQLite.

## FlutterFlow

Use `https://api.venugopalareddy.in` as the production API base URL. Login returns a bearer token. Send `Authorization: Bearer <token>` on protected API calls.

## Admin CMS

After starting the app and logging in as an admin, open **Admin → Courses → Manage** for a course.

The Content CMS supports:
- Subjects: add, edit, delete, search
- Chapters: add, edit, delete, search
- Lessons: add, edit, delete, search
- Lesson media: upload, replace and delete videos, PDFs and thumbnails through Cloudflare R2
- Tests: add, edit, delete, search
- Assignments: add, edit, delete, search
- Confirmation prompts, success/error messages, back navigation and logout

The existing course CRUD remains available from `/admin/courses`.
