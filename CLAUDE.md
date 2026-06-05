# CLAUDE.md — RMW LLC Consulting

## Project Summary

RMW LLC Consulting is the professional consulting website for Ryan M. Waite — a Systems Architect and Software Engineer with 10+ years of experience. It is a single-page Next.js 14 (App Router) application styled with Tailwind CSS, deployed as a Docker container on a k3s homelab cluster at `rmwllc-consulting.com`. The site has one API route (`POST /api/contact`) that sends HTML email via SMTP (Mailpit in-cluster). There is no database. See `PROJECT.md` for the full spec.

## Quick Start

```bash
# Full stack (recommended — includes Mailpit for email testing)
cp .env.example .env.local
docker compose up --build
# App: http://localhost:3000  |  Mailpit: http://localhost:8025

# Hot-reload dev server (no Docker)
npm install
npm run dev
```

## Architecture Rules

- **Component Layer Supremacy**: All HTML generation and escaping logic lives in `src/lib/mailer.ts`. The API route (`src/app/api/contact/route.ts`) is a thin adapter: parse → call lib → return response. No HTML construction in the route handler.
- **Server Components by default**: Only `Nav` and `Contact` are `'use client'`. All other components are Server Components.
- **No new routes**: This is a single-page app. Do not add pages or API routes beyond what exists.
- **Tailwind only**: No CSS-in-JS, no styled-components, no CSS modules. Styling is 100% Tailwind utility classes.
- **No database**: Contact submissions go to email only. Never add a DB.

## Key Commands

```bash
npm run dev          # Local dev server with hot reload
npm run build        # Next.js production build (standalone mode)
npm run start        # Start built production server
npm run test:unit    # Vitest unit tests
npm run lint         # ESLint

./scripts/test-docker-build.sh                      # Test Dockerfile (tests skipped)
SKIP_UNIT_TESTS=false ./scripts/test-docker-build.sh  # Docker build + tests
./scripts/run-unit-tests.sh                         # Unit tests without Docker
```

## File Conventions

| What | Where |
|------|-------|
| Business logic / email templates | `src/lib/mailer.ts` |
| API route | `src/app/api/contact/route.ts` |
| UI components | `src/components/*.tsx` |
| App layout and pages | `src/app/` |
| Unit tests | `tests/unit/*.test.ts` |
| Kubernetes manifests | `k8s/*.yaml` |
| CI/CD pipeline | `Jenkinsfile` |
| Bootstrap scripts | `scripts/` |

## DO NOT

- Do not add business logic or HTML string construction to `src/app/api/contact/route.ts`
- Do not add `'use client'` to components that don't need browser APIs or state
- Do not hardcode secrets, email addresses beyond the defaults, or env-specific values
- Do not add new npm dependencies without explicit instruction
- Do not create new architectural patterns not defined in `PROJECT.md`
- Do not modify component content (names, dates, certifications) — it reflects real resume facts
- Do not change `replicas: 1` in `k8s/deployment.yaml` — the cluster has one worker node
- Do not add a Fluent Bit sidecar or `opensearch-credentials` references to the deployment unless asked
- Do not use `any` type — TypeScript strict mode is enforced

## Environment Notes

- **Local**: `SMTP_HOST=mailpit` (docker-compose) or `localhost` (external Mailpit). No SMTP auth needed — Mailpit accepts all.
- **Cluster**: `SMTP_HOST=email-mailpit.email-mailpit.svc.cluster.local`. `SMTP_USER`/`SMTP_PASSWORD` injected from `rmw-llc-consulting-secret` (created by Jenkins from `kv/common-app-deploy-secrets` in Vault).
- **No per-app Vault path**: Unlike the standard pattern, this app has no `kv/rmw-llc-consulting` Vault path. All secrets come from `kv/common-app-deploy-secrets`. This exception is intentional and documented in `PROJECT.md` Section 5.4.
- **Font**: Inter is loaded via `next/font/google` (downloaded at build time, not at runtime — works inside Docker).
- **Next.js output**: `standalone` mode. The Docker runtime stage copies `.next/standalone`, `.next/static`, and `public/` — all three are required.
