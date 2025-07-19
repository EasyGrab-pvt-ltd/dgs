# Stage 1: Build React App
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code and env example
COPY . .
COPY .env.example .env

# Build the production React app
RUN npm run build

# Stage 2: Serve with Apache
FROM httpd:2.4-alpine

# Suppress ServerName warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy custom apache config (with mod_rewrite and SPA fallback)
COPY apache.conf /usr/local/apache2/conf/httpd.conf

# Copy built React app to Apache's document root
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Expose port 80 to be accessible from host
EXPOSE 80

# Optional: Healthcheck for container (checks if Apache responds)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

# Start Apache in foreground (default CMD from httpd image is fine)
