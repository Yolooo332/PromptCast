# Show, Don't Prompt - Desktop Application

Tauri 2 + Vue 3 desktop client for **Show, Don't Prompt**.

## Structure

- `src/` — Vue 3 + TypeScript + Pinia frontend
  - `views/` — Application screens (HomeView, Composer, Result)
  - `stores/` — State stores
  - `router/` — Vue Router configuration
  - `assets/` — Vanilla CSS design system tokens and utilities
- `src-tauri/` — Rust Tauri 2 backend
  - `src/lib.rs` — Tauri app builder, plugin registration, IPC handlers
  - `src/main.rs` — Binary entry point
  - `tauri.conf.json` — Window configuration, permissions, security

## Development

```bash
# Run web frontend in dev mode
pnpm dev

# Run Tauri desktop app with hot-reloading
pnpm --filter @sdp/desktop tauri:dev

# Type checking
pnpm typecheck

# Run unit tests
pnpm test
```
