/** Shared constants and types for Show, Don't Prompt */

export const APP_NAME = "Show, Don't Prompt" as const
export const APP_VERSION = '0.0.1' as const

export type Platform = 'macos' | 'windows' | 'linux'

export interface AppConfig {
  version: string
  platform: Platform
}

/** Result wrapper for operations that can fail */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E }

/** Create a successful result */
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value }
}

/** Create a failed result */
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error }
}
