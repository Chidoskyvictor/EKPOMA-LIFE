# Ekpoma Life

Browser-based 3D life-simulation game set in Ekpoma, centered on Ambrose Alli University (AAU).

Product source of truth: `README_Ekpoma_Life_Corrected.md`.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — oxlint
- `npm run test` — game-rule tests
- `npm run format` — Prettier

## Environment

Copy `.env.example` to `frontend/.env.local` and add Supabase keys when you are ready. The app runs without them using a local session.

## Stack

React, TypeScript, Vite, Three.js, React Three Fiber, Drei, Tailwind, React Router, Lucide, Supabase client.
