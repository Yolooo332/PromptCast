# Provider Adapter Contract
Adapters declare capabilities and implement config validation, request preparation, cancellation/execution and normalized result mapping. Provider SDK objects never escape the adapter boundary. Secrets are secure-store references, never serialized into Capture Bundles.
