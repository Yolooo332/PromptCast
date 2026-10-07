# Current State
Updated 2026-10-07.
Phase 0: architecture/bootstrap.

Accepted: open source; Tauri 2/Rust/Vue; local-first; provider-neutral Capture Bundle; provider/agent adapters; Gemini native-video first experiment; transcript+keyframes fallback; official APIs/local models/integrations only; repository Markdown/YAML is the second brain.

Current milestone: `record region -> save -> bundle -> context -> provider adapter -> response`.
- `M0-001` (Bootstrap pnpm/Turborepo/Tauri 2/Vue 3 workspace): **Completed**. Workspace configured with pnpm 10.12.1, Turborepo 2, Tauri 2 (`@tauri-apps/cli` + `src-tauri` with IPC test command), Vue 3 + TypeScript + Pinia frontend, Vitest tests passing, packages (`@sdp/shared`, `@sdp/capture-schema`) typechecking cleanly.
- Next up: `M0-002` (Implement platform capture interface).
See `tasks/current.yaml`. Update this file whenever reality changes.

