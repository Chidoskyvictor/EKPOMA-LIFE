# Backend

Ekpoma Life uses **Supabase** for auth and persistence in the initial release.

This folder stays documentation-only until a custom API is required.

## Planned responsibilities

- Auth (sign up, login, session)
- Player game-state persistence
- Visitor / online presence
- Community event records
- Innovation Hub feedback

## Setup

1. Create a Supabase project.
2. Copy `.env.example` to `frontend/.env.local`.
3. Fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Apply the schema in `docs/architecture/data-model.md` when persistence is wired.

Until those values exist, the frontend runs with a local session so development is not blocked.
