# Provider Adapters
Hide provider differences in video/image/audio/file support, limits, streaming, auth and upload behind adapters.
Operations: capabilities, validateConfiguration, prepare, execute/cancel.
Initial: Gemini native-video experiment; generic transcript+selected-keyframes path; OpenAI-compatible only where semantics genuinely match.
Every adapter needs mocked contract tests and explicit unsupported-feature errors.
