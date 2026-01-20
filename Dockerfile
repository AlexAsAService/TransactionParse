# Stage 1: Modules
FROM alpine:3.23.2 AS modules
RUN apk add --no-cache nodejs npm
RUN npm install -g pnpm@10.13.1

WORKDIR /app

# Copy lockfile and package.json to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Stage 2: Final
FROM alpine:3.23.2
RUN apk add --no-cache nodejs

WORKDIR /app

# Copy production dependencies from the modules stage
COPY --from=modules /app/node_modules ./node_modules

# Copy the built code from the dist directory
COPY dist ./dist

# Copy the system prompt file required by the application
COPY transaction-parser-system-prompt.md ./

# Expose the API port (default 3000)
EXPOSE 3000

# Run the application
ENTRYPOINT ["node", "dist/index.js"]
