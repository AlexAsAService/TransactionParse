# transaction-parse

## 1.1.0

### Minor Changes

- 62fa02a: Implement structured transaction parsing and production-ready infrastructure:
  - **Structured Parsing**: Added `POST /parseTransaction` endpoint using Google Gemini to extract transaction details into JSON.
  - **Docker Support**: Added a multi-stage `Dockerfile` based on `alpine:3.23.2` for optimized production images.
  - **CI/CD**: Added GitHub Actions workflows for automated linting, building, container testing, and automatic versioning via Changesets.
  - **Code Quality**: Set up ESLint and Prettier with automated scripts.
  - **Documentation**: Updated README with full setup and API instructions.

### Patch Changes

- fde298f: Automate versioning and releases using GitHub Actions:
  - **Changesets Integration**: Configured `changesets/action` to manage version bumps via automated Pull Requests.
  - **GitHub Releases**: Enabled automatic creation of GitHub Releases with changelog notes upon merging version PRs.
  - **Secure Authentication**: Implemented Personal Access Token (PAT) authentication for automated git operations.
  - **Conditional Containerization**: Optimized the release workflow to build and push Docker images from verified build artifacts only when a new version is published.
