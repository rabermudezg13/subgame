# Kelly Education Substitute Teacher Challenge

Responsive live A/B quiz for orientation sessions, built with React, Vite, Firebase Authentication, Cloud Firestore, and Firebase Hosting.

## Local development

```bash
npm install
npm run dev
```

## Firebase setup still required in Console

1. Authentication → click **Get started**, then Sign-in method: enable **Anonymous** and **Email/Password**.
2. Authentication → Users: create at least one administrator email/password account.
3. Firestore Database: create the database (production mode, choose the nearest region).
4. Deploy rules, indexes, and hosting with `npm run build && firebase deploy`.

Admin route: `/admin`. Participant links are generated per session. The TV route is `/leaderboard?session=SESSION_ID`.
