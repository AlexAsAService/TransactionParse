---
"transaction-parse": patch
---

Automate versioning and releases using GitHub Actions:

- **Changesets Integration**: Configured `changesets/action` to manage version bumps via automated Pull Requests.
- **GitHub Releases**: Enabled automatic creation of GitHub Releases with changelog notes upon merging version PRs.
- **Secure Authentication**: Implemented Personal Access Token (PAT) authentication for automated git operations.
- **Conditional Containerization**: Optimized the release workflow to build and push Docker images from verified build artifacts only when a new version is published.
