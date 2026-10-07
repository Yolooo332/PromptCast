<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app-shell">
    <RouterView />
  </div>
</template>

<style>
:root {
  --color-bg: #0a0a0f;
  --color-surface: #14141f;
  --color-surface-elevated: #1c1c2e;
  --color-primary: #7c5cff;
  --color-primary-hover: #9179ff;
  --color-primary-glow: rgba(124, 92, 255, 0.3);
  --color-accent: #34d399;
  --color-text: #e8e6f0;
  --color-text-muted: #8b89a0;
  --color-border: rgba(124, 92, 255, 0.15);
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --shadow-glow: 0 0 40px rgba(124, 92, 255, 0.15);
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

#app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
