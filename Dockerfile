# Build stage
FROM node:18-alpine3.17 AS build
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN npm run build && rm -rf node_modules

# Production stage
FROM nginx:1.25-alpine
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
