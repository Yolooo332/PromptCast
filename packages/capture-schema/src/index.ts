/**
 * TypeScript types for the Capture Bundle v1 manifest.
 * Source of truth: specs/capture-bundle.schema.json
 */

/** The recording/capture mode */
export type CaptureMode =
  | 'region-recording'
  | 'window-recording'
  | 'display-recording'
  | 'screenshot'

/** Well-known artifact roles in a Capture Bundle */
export type ArtifactRole =
  | 'recording'
  | 'audio'
  | 'transcript'
  | 'timeline'
  | 'keyframe'

/**
 * The manifest.json at the root of every Capture Bundle.
 * Conforms to specs/capture-bundle.schema.json v1.
 */
export interface CaptureManifest {
  /** Schema version — always 1 for this interface */
  schemaVersion: 1
  /** Unique identifier for this capture */
  id: string
  /** ISO 8601 creation timestamp */
  createdAt: string
  /** How the capture was taken */
  mode: CaptureMode
  /** Duration in milliseconds (omitted for screenshots) */
  durationMs?: number
  /** User-provided instruction / prompt text */
  instruction?: string
  /** Map of artifact role → relative file path within the bundle */
  artifacts: Record<string, string>
}

/**
 * A timeline event within a Capture Bundle.
 * The timeline tracks what happened during the recording.
 */
export interface TimelineEvent {
  /** Milliseconds from recording start */
  timestampMs: number
  /** Event type */
  type: 'keyframe' | 'click' | 'window-change' | 'narration' | 'scene-change'
  /** Optional descriptive data */
  data?: Record<string, unknown>
}

/** Full timeline for a capture */
export interface CaptureTimeline {
  events: TimelineEvent[]
}
