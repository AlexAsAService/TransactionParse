---
"transaction-parse": minor
---

Implement structured transaction parsing and production-ready infrastructure:

- **Structured Parsing**: Added `POST /parseTransaction` endpoint using Google Gemini to extract transaction details into JSON.
- **Docker Support**: Added a multi-stage `Dockerfile` based on `alpine:3.23.2` for optimized production images.
- **CI/CD**: Added GitHub Actions workflows for automated linting, building, container testing, and automatic versioning via Changesets.
- **Code Quality**: Set up ESLint and Prettier with automated scripts.
- **Documentation**: Updated README with full setup and API instructions.
