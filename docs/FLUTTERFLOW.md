# FlutterFlow integration

Base URL: `https://api.venugopalareddy.in`

## Authentication

Use JSON requests for mobile:

`POST /api/auth/login`

```json
{"email":"student@example.com","password":"your-password"}
```

The response includes `token`. Save it in FlutterFlow App State and send `Authorization: Bearer <token>` on protected API calls.

`POST /api/auth/register` accepts:

```json
{"fullName":"Student Name","email":"student@example.com","password":"your-password"}
```

## Core calls

- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/subjects?courseId={id}`
- `GET /api/chapters?subjectId={id}`
- `GET /api/lessons?chapterId={id}`
- `GET /api/lessons/{id}`
- `GET /api/student/courses`
- `GET /api/student/dashboard`
- `POST /api/lessons/{id}/progress`
- `POST /api/media/sign`
- `POST /api/media/upload` (teacher/admin multipart upload)
- `POST /api/payments/order`
- `POST /api/payments/verify`

## Headers

For protected APIs:

`Authorization: Bearer <token>`

For JSON:

`Content-Type: application/json`

For upload:

`Content-Type: multipart/form-data`

## FlutterFlow page plan

Splash → Login/Register → Student Home → My Courses → Course Details → Subject → Chapter → Lesson Player → PDF Viewer → Tests → Results → Live Classes → Messages → Notifications → Profile.

Teacher: Dashboard → Courses → Students → Lessons → Upload Video/PDF → Assignments → Tests → Feedback.

Admin: Dashboard → Users → Courses → Subjects → Chapters → Lessons → Videos/PDFs → Payments → Reports → Settings.

## Design tokens

- Primary: `#E8C020`
- Secondary: `#80C0A8`
- Accent: `#F0A020`
- Dark accent: `#F08028`
- Ink: `#102525`
- Paper: `#FFFDF7`
