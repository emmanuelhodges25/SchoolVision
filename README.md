# School Vision

**Intelligent School Management System** for participating schools in Liberia.

## Current status

Phase 1 local environment setup and GitHub/Vercel account verification are complete. This repository contains only the standard Next.js starter scaffold and planning documents. It is not an operational school management system. It has no database connection and no institutional records. Configure a secure local Git credential helper before the first command-line push.

## Technology foundation

- Next.js App Router with React and TypeScript
- Tailwind CSS for styling
- pnpm for package management
- MySQL is the approved database technology, but no School Vision database has been created or connected

## Run the local starter

Prerequisites: Node.js 20.9 or newer and pnpm. From this folder, run:

```powershell
pnpm dev
```

Open `http://localhost:3000`. Stop the local server with `Ctrl+C` in the terminal where it is running.

## Environment variables

`.env.example` lists placeholder variable names only. Copy it to `.env.local` when a provider has been selected, then put real secrets only in `.env.local`. Never commit `.env.local` or share its contents.

## Documentation

- [Phase 0 technical specification](docs/phase-0-technical-specification.md)
- [Phase 1 environment record](docs/phase-1-environment.md)

## Product constraints

- Do not add fabricated institutional records.
- Do not create or connect a database until its approved phase.
- Do not add a timetable module.
- Keep institution data isolated and all privileged operations server-side.
- Do not describe a starter page or preview deployment as a functioning school system.

