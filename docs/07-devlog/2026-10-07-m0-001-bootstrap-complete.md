# Milestone M0-001 Complete: Workspace Bootstrap — 2026-10-07

## Summary
Completed the foundational workspace bootstrap for "Show, Don't Prompt".

## Achievements
- Monorepo configured with Turborepo 2 and pnpm 10.12.1.
- Initialized Tauri 2 desktop app in `apps/desktop/src-tauri` with Rust 2024 edition, logging plugin, and IPC test handler `greet`.
- Scaffolding of Vue 3 + TypeScript + Pinia frontend in `apps/desktop/` with custom CSS token design system and dark theme.
- Workspace shared packages established:
  - `@sdp/shared`: Result types, utility helpers, core constants.
  - `@sdp/capture-schema`: TypeScript types reflecting the Capture Bundle JSON schema.
- Verification passes:
  - `pnpm typecheck`: All packages pass `vue-tsc` / `tsc` with zero errors.
  - `pnpm test`: Vitest suite runs and passes.
  - `pnpm build`: Vite builds production bundle successfully.
  - `cargo check`: Rust backend compiles cleanly against Tauri 2.12.1.
