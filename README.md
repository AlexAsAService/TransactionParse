# TransactionParse

A simple Express-based API that uses Google Gemini to parse natural language transaction descriptions into structured JSON.

## Features

- **Natural Language Parsing**: Convert descriptions like "Spent 25 dollars on groceries at Whole Foods" into structured JSON.
- **Structured Output**: Returns a consistent schema: `{ "item": string, "amount": number, "category": string }`.
- **TypeScript & ESM**: Modern development environment with TypeScript and ECMAScript Modules.
- **Fast Builds**: Uses `esbuild` for lightning-fast bundling.
- **Configurable**: Easily switch models and tweak parsing instructions via environment variables and external prompt files.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [pnpm](https://pnpm.io/) (used for package management)
- A Google AI Studio API Key

## Setup

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Configuration**:
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_API_KEY=your_google_api_key_here
   MODEL_NAME=gemini-flash-lite-latest
   PORT=3000
   ```

## Usage

### Development Mode
Runs the application with `esbuild` watching for source changes and `nodemon` restarting the server.
```bash
pnpm dev
```

### Production Build
Build the project into the `dist/` directory.
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

## API Endpoints

### `GET /health`
Returns the status of the API.
- **Response**: `200 OK`
- **Body**: `{ "status": "ok" }`

### `POST /parseTransaction`
Parses a natural language transaction description.
- **Request Body**:
  ```json
  {
    "description": "Spent 5 dollars on coffee at Starbucks"
  }
  ```
- **Response Body**:
  ```json
  {
    "item": "coffee",
    "amount": 5,
    "category": "Starbucks"
  }
  ```

## Configuration Files

- **`transaction-parser-system-prompt.md`**: Contains the system instructions for Gemini. You can modify this file to change how transactions are interpreted (e.g., adding more fields or changing categories).
- **`esbuild.config.js`**: Bundling configuration.
- **`tsconfig.json`**: TypeScript compiler settings.
