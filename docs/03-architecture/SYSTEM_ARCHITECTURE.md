# System Architecture
`Capture Surface -> Capture Engine -> Capture Bundle -> Context Engine -> AI Router -> Provider/Agent Adapter -> Result/Handoff`

Capture Engine owns selection/video/mic/timing/finalization and knows no AI.
Capture Bundle is stable/provider-neutral.
Context Engine creates transcript/keyframes/timeline/instruction/explicit extra context.
Router chooses adapters by capability.
Provider Adapter owns provider auth/upload/API/results.
Agent Adapter creates coding-agent handoffs.
UI owns intent/presentation only.

SQLite: metadata/history. Filesystem: media. OS secure storage: secrets. Platform-specific capture implementations stay explicit.
