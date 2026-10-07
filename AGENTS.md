# Canonical AI Entry Point
Project: **Show, Don't Prompt**

Read in order before non-trivial work:
1. `docs/00-start-here/PROJECT_CONTEXT.md`
2. `docs/00-start-here/CURRENT_STATE.md`
3. `docs/01-vision/PRODUCT_VISION.md`
4. `docs/02-product/PRODUCT_SPEC.md`
5. `docs/03-architecture/SYSTEM_ARCHITECTURE.md`
6. `docs/03-architecture/CAPTURE_BUNDLE.md`
7. `docs/03-architecture/SECURITY_PRIVACY.md`
8. `tasks/current.yaml`
9. Relevant ADR/spec only.

Product: local-first desktop capture that records/screenshots what a user sees, optionally records narration, then sends a structured visual context bundle to a chosen AI model or coding agent.

Non-negotiable:
- Never scrape/reuse consumer ChatGPT/Claude/Gemini cookies/session tokens.
- Subscription integration only through official permitted mechanisms.
- BYOK APIs/local models/documented integrations first-class.
- Secrets in OS secure storage, never plaintext/repo.
- Captures local until deliberately sent.
- Provider behavior behind adapters.
- Capture Bundle provider-neutral.
- UI does not own native/provider business logic.

Architecture invariant:
`Capture -> Capture Bundle -> Context Engine -> AI Router -> Provider/Agent Adapter -> Result/Handoff`

After meaningful work: test; update affected docs; update CURRENT_STATE and tasks/current.yaml; ADR only for durable decisions; devlog milestones.
