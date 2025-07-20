# Stage 1: Build the Vite app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source and build
COPY . .
RUN npm run build

# Stage 2: Serve using Apache
FROM httpd:2.4-alpine

# Copy built files to Apache's root directory
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Optional: Custom Apache config (e.g., for SPA routes)
# COPY ./apache.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["httpd-foreground"]
