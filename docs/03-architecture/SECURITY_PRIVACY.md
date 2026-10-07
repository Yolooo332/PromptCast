# Security & Privacy
Capture local by default. Upload only on user-triggered action. Secrets in OS secure storage. Never log/commit secrets. Never scrape/reuse consumer web-session credentials. Subscription integrations only via official permitted mechanisms. Show destination before sending. Keep send metadata for transparency. Delete local media+metadata together. No typed-key content capture by default.

Threats: sensitive capture, malicious imports/recipes, compromised keys, upload cost, path traversal, command injection, log leakage.
Defenses: schema/path validation, log redaction, execution allowlists, size limits, cancellation, safe imports, dependency scanning.
