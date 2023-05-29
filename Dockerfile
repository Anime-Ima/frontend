# ---- Base Node ----
FROM node:16-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS dependencies
COPY package*.json ./
RUN npm ci

# ---- Test ----
# if you have tests, you can run them using this stage
# FROM dependencies AS test
# COPY . .
# RUN npm run test

# ---- Build ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- Release ----
FROM base AS release
# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install production dependencies.
RUN npm ci --only=production

# Copy built app from the build stage
COPY --from=build /app/dist ./dist

# Change to non-root user
USER node

# Gracefully shutdown
STOPSIGNAL SIGTERM

# Start the app
CMD [ "node", "dist/server.js" ]
