# Phase 1 — Development Environment Record

**Project:** School Vision  
**Status:** Local starter environment and GitHub/Vercel account access verified; awaiting owner review  
**Project folder:** `C:\Users\emman\Desktop\school-vision`  
**Verification date:** 2026-11-17

## 1. What the tools do

- **Node.js** runs JavaScript/TypeScript tools and the local development server.
- **npm** is Node’s default package manager. It is installed, but this project uses **pnpm** so dependency installation and its lockfile stay consistent.
- **pnpm** downloads and links the libraries named by the project. `pnpm-lock.yaml` records exact versions so later installs can reproduce the same setup.
- **Git** keeps a local history of project files. GitHub hosts a remote copy. A local repository can exist before any commit is pushed.
- **MySQL Server** is the database service that stores application records. **MySQL Workbench** is a graphical client for connecting to and managing MySQL Server; Workbench is not itself a database server.
- **VS Code** is the editor used to inspect and edit this repository.
- **Next.js** runs this web starter locally and will later provide the server-side web layer. Its default page is framework scaffolding only.

## 2. Installed versions and checks

| Tool | Detected version/state | Result |
|---|---|---|
| Node.js | 22.20.0 | Meets Next.js documented minimum (20.9) |
| npm | 10.9.3 | Available; not used for this project installation |
| pnpm | 11.13.0 | Used to install project dependencies |
| Git | 2.51.0.windows.2 | Available; local repository initialized below |
| Visual Studio Code | 1.128.0, x64 | Installed |
| MySQL Server | 8.0.46; `MySQL80` service running | Listens on TCP port 3307; no School Vision database created |
| MySQL Workbench | 8.0.47 | Installed |
| GitHub account connection | `emmanuelhodges25` | Authenticated through the connected GitHub service |
| GitHub `SchoolVision` repository | Public; default branch `main`; account has admin/push permissions | Repository exists and is empty; configured locally as `origin` |
| Vercel account connection | Authenticated as `emmanuelhodges25` | Access verified; the account currently has no Vercel projects, and none was created |
| Git command-line credential helper | Git Credential Manager and GitHub CLI not found on PATH | Local command-line push authentication still needs setup |

The MySQL listener answered on port 3307, but an unauthenticated ping was rejected as user `ODBC`. This confirms the server is reachable and enforcing authentication; it does not verify a valid database login. No password is stored in this document or chat. A database is intentionally not created in Phase 1.

The previous U-PORT checkout has a separate `main` branch and 13 local commits. It was left untouched. This clean project has a separate Git repository.

## 3. Project scaffold and packages

The official Next.js app generator created a starter with TypeScript, ESLint, Tailwind CSS, App Router, and a `src/` directory. Installed direct package versions:

| Package | Version |
|---|---:|
| Next.js | 16.4.6 |
| React / React DOM | 19.3.0 |
| Tailwind CSS | 4.3.3 |
| TypeScript | 5.9.3 |
| ESLint | 9.39.5 |

pnpm reported ESLint 9.39.5 as deprecated; review it before the next implementation checkpoint. Installation resolved 427 packages and completed successfully after unusually slow registry downloads.

Key files:

- `src/app/` — default Next.js starter routes and page shell; no school workflows.
- `public/` — default framework starter assets.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` — package scripts, exact dependency lock, and pnpm configuration.
- `.gitignore` — excludes dependencies, build outputs, and real environment files; explicitly allows `.env.example`.
- `.env.example` — blank placeholders for future server configuration; no credentials.
- `AGENTS.md` — Next.js-generated instruction to consult the installed Next.js documentation before future code changes.
- `docs/phase-0-technical-specification.md` — planning baseline copied into this clean project.
- `docs/phase-1-environment.md` — this setup and verification record.

No Prisma, Zod, authentication, storage, monitoring, or test libraries were added. Those choices remain for their approved phases.

## 4. Git and remote repository

- Local Git repository: initialized on branch `main`.
- Remote name: `origin`.
- Remote URL: `https://github.com/emmanuelhodges25/SchoolVision.git`.
- GitHub API reports that the authenticated account can push to this repository.
- No commit or push has been made. The connected GitHub service confirms admin/push access, but local command-line Git has no detected Git Credential Manager or GitHub CLI. Configure a secure local sign-in method before pushing from the terminal. Never paste a personal access token into a command, file, or chat.
- Vercel account access is verified. No Vercel project or hosting configuration was created and no deployment was made.

## 5. Commands and what they mean

Run these from `C:\Users\emman\Desktop\school-vision` in the VS Code PowerShell terminal:

| Command | Purpose | Expected check |
|---|---|---|
| `node --version` | Shows Node.js runtime version | `v22.20.0` |
| `pnpm --version` | Shows package manager version | `11.13.0` |
| `pnpm exec next --version` | Confirms installed Next.js executable | `Next.js v16.4.6` |
| `pnpm exec tsc --version` | Confirms TypeScript compiler | `Version 5.9.3` |
| `pnpm dev` | Starts local development server | Reports `http://localhost:3000`; stop with `Ctrl+C` |
| `git status --short` | Lists changed/untracked files, not their contents | Project files appear until an initial commit is approved |
| `git remote -v` | Displays fetch/push repository URLs | `origin` points at the SchoolVision repository above |

`pnpm dev` was started and the local page returned HTTP 200. The server was stopped. This verifies only that the framework runs; it does not test or claim any School Vision feature.

To make a private local environment file later, run `Copy-Item .env.example .env.local`, then edit `.env.local` locally. Values remain blank until services are selected. `.env.local` is ignored by Git; `.env.example` is safe to commit because it contains no credentials.

## 6. Phase 1 completion checks

- [x] Versions inspected for Node.js, npm, pnpm, Git, VS Code, MySQL Server, and MySQL Workbench.
- [x] New clean project directory created without altering the U-PORT checkout.
- [x] Minimal Next.js starter dependencies installed and locked.
- [x] `.gitignore` and secret-free `.env.example` created.
- [x] Local Git repository initialized with branch `main` and the owner-provided GitHub remote.
- [x] GitHub account and repository permissions verified through the connected GitHub service.
- [x] Vercel account authentication verified; no project created.
- [x] Local server starts and responds with HTTP 200.
- [ ] Secure local Git credential helper configured before the first command-line push.
- [ ] Owner reviews and approves the Phase 1 environment before Phase 2.

No database, sample institution, fabricated student record, or domain-specific application feature was created. No commit was pushed. Phase 2 must wait for owner review and explicit approval.
