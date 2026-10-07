<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const app = useAppStore()
</script>

<template>
  <main class="home">
    <div class="hero">
      <!-- Animated background orbs -->
      <div class="orb orb-1" aria-hidden="true"></div>
      <div class="orb orb-2" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="logo-mark" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="20" stroke="url(#grad)" stroke-width="2.5" opacity="0.4" />
            <circle cx="28" cy="28" r="10" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="8" y1="8" x2="48" y2="48">
                <stop stop-color="#7c5cff" />
                <stop offset="1" stop-color="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 class="title">Show, Don't Prompt</h1>
        <p class="tagline">Record → Show → Send → Useful Answer</p>

        <div class="flow-steps">
          <div class="step">
            <span class="step-icon">🎯</span>
            <span class="step-label">Select Region</span>
          </div>
          <span class="step-arrow" aria-hidden="true">→</span>
          <div class="step">
            <span class="step-icon">⏺</span>
            <span class="step-label">Record</span>
          </div>
          <span class="step-arrow" aria-hidden="true">→</span>
          <div class="step">
            <span class="step-icon">🚀</span>
            <span class="step-label">Send to AI</span>
          </div>
        </div>

        <div v-if="app.isReady" class="status-badge" id="status-badge">
          <span class="dot"></span>
          <span>Ready</span>
          <span class="version">v{{ app.version }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Floating ambient orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.orb-1 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(124, 92, 255, 0.15), transparent 70%);
  top: -80px;
  right: -60px;
  animation: floatOrb 8s ease-in-out infinite;
}

.orb-2 {
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.1), transparent 70%);
  bottom: -40px;
  left: -40px;
  animation: floatOrb 10s ease-in-out infinite reverse;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.hero-content {
  position: relative;
  text-align: center;
  animation: fadeInUp 0.7s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-mark {
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 0 30px var(--color-primary-glow));
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { filter: drop-shadow(0 0 30px var(--color-primary-glow)); }
  50% { filter: drop-shadow(0 0 50px rgba(124, 92, 255, 0.5)); }
}

.title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--color-primary), #a78bfa, #c4b5fd);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.tagline {
  color: var(--color-text-muted);
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 400;
}

/* Flow steps */
.flow-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  animation: fadeInUp 0.7s ease-out 0.15s both;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.step-icon {
  font-size: 1.25rem;
}

.step-label {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.step-arrow {
  color: var(--color-primary);
  font-size: 0.9rem;
  opacity: 0.6;
  margin-bottom: 1rem;
}

/* Status badge */
.status-badge {
  margin-top: 1.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  background: var(--color-surface);
  border: 1px solid rgba(52, 211, 153, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  animation: fadeInUp 0.7s ease-out 0.3s both;
  transition: border-color var(--transition-normal);
}

.status-badge:hover {
  border-color: rgba(52, 211, 153, 0.4);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(52, 211, 153, 0.5); }
  50% { opacity: 0.5; box-shadow: 0 0 4px rgba(52, 211, 153, 0.3); }
}

.version {
  color: var(--color-text-muted);
  opacity: 0.5;
  font-size: 0.7rem;
  margin-left: 0.25rem;
}
</style>
