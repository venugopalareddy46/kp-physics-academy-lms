# KP Physics Academy — SQLite Setup Checklist

## Local
- [ ] Node.js installed
- [ ] `npm install`
- [ ] `.env` created from `.env.example`
- [ ] `SQLITE_PATH=./data/kp-physics.sqlite`
- [ ] `npm run db:migrate`
- [ ] `npm run create-admin -- admin@venugopalareddy.in "StrongPasswordHere" "KP Admin"`
- [ ] `npm run dev`
- [ ] Test `/login`, `/register`, `/courses`, `/admin`

## Cloudflare R2
- [ ] Create R2 bucket `kp-lms-media`
- [ ] Create R2 access credentials
- [ ] Set R2 environment variables
- [ ] Configure `media.venugopalareddy.in` if using a custom R2 domain
- [ ] Keep private paid media private

## Razorpay
- [ ] Create Razorpay account
- [ ] Add test keys first
- [ ] Set `RAZORPAY_KEY_ID`
- [ ] Set `RAZORPAY_KEY_SECRET`
- [ ] Test order + signature verification
- [ ] Switch to live keys only after testing

## Domain / Cloudflare
- [ ] Add `venugopalareddy.in` to Cloudflare
- [ ] Configure DNS
- [ ] `api.venugopalareddy.in` → backend host
- [ ] `app.venugopalareddy.in` → FlutterFlow/custom web host as appropriate
- [ ] `media.venugopalareddy.in` → R2 custom domain if desired
- [ ] Enable HTTPS

## FlutterFlow
- [ ] Configure API base URL
- [ ] Configure login API
- [ ] Store returned bearer token securely
- [ ] Add Authorization header to protected calls
- [ ] Connect course/subject/chapter/lesson APIs
- [ ] Connect progress API
- [ ] Connect Razorpay flow
- [ ] Connect live class links

## Backup
- [ ] Back up `data/kp-physics.sqlite` regularly
- [ ] Back up `.env` securely outside the repository (never commit secrets)

## CMS verification

1. Start the app with `npm run dev`.
2. Login with your admin account.
3. Open `/admin/courses` and click **Manage** on a course.
4. Add a subject and chapter.
5. Add a lesson and upload a video/PDF if R2 credentials are configured.
6. Edit and delete each content type and confirm the changes persist after refresh.
7. Add/edit/delete a test and assignment.
8. Use the search box to filter content.
9. Verify **Back** and **Log out**.
