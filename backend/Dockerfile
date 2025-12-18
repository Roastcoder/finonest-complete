FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build NestJS application
RUN npm run build

# Verify build output exists
RUN test -f dist/main.js || (echo "Build failed: dist/main.js not found" && exit 1)

EXPOSE 3001

CMD ["npm", "run", "start:prod"]