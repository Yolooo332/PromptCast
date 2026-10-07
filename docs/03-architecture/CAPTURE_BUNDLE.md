# Capture Bundle
Central interoperability contract.

capture_<id>/
- manifest.json
- recording.mp4
- audio.m4a
- transcript.json
- timeline.json
- keyframes/*.webp
- attachments/

Goals: provider-neutral, human-inspectable, versioned, portable, incrementally enrichable. Artifacts optional.
Contract: `specs/capture-bundle.schema.json`.
Timeline may contain clicks, keyframes, active-window changes, narration segments and scene changes. Never capture typed-key contents by default.
