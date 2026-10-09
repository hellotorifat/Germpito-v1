# DeutschWeg — German A1–B2 learning & mock-exam platform

Next.js 15 (App Router) · React 19 · Tailwind CSS · Lucide. No database or env vars needed.

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run build      # production build check

## Deploy on Vercel
1. Push this folder to a GitHub repo (the folder root must contain package.json).
2. vercel.com → Add New Project → import the repo. Framework is auto-detected as Next.js.
3. Click Deploy. No settings or environment variables required.

## Try it
- Dashboard `/` — scores, skill chart, EN/BN toggle in the navbar.
- Tests `/tests` → start the Goethe A1 simulator (`/exam/goethe-a1`).
- Add `?minutes=1` to the exam URL to watch the strict timer auto-submit quickly.
- Listening allows 2 plays per part; Schreiben shows a live word count; Sprechen records via the mic.
- API: `GET /api/tests`, `GET /api/tests/[id]`, `POST /api/grade` (answer key never leaves the server).
