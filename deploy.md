# Coolify Deployment Guide

## Prerequisites
- Coolify instance running
- Domain names configured
- SSL certificates enabled

## Backend Deployment

1. **Create New Resource**
   - Type: Docker Compose
   - Repository: Your backend repo
   - Branch: main

2. **Environment Variables**
```env
DATABASE_URL=postgresql://user:pass@db:5432/finonest
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
FRONTEND_URL=https://finonest.com
PORT=3001
NODE_ENV=production
```

3. **Docker Compose (backend)**
```yaml
version: '3.8'
services:
  backend:
    build: .
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
      - JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}
      - FRONTEND_URL=${FRONTEND_URL}
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: finonest
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

4. **Domain Configuration**
   - Domain: `api.finonest.com`
   - Port: 3001
   - Enable SSL

## Frontend Deployment

1. **Create New Resource**
   - Type: Docker
   - Repository: Your frontend repo

2. **Environment Variables**
```env
NEXT_PUBLIC_API_URL=https://api.finonest.com
```

3. **Domain Configuration**
   - Domain: `finonest.com`
   - Port: 3000
   - Enable SSL

## Database Migration

After deployment, run migrations:
```bash
# Connect to backend container
docker exec -it backend-container bash
npx prisma migrate deploy
npm run prisma:seed
```

## Health Checks

Backend health endpoint: `https://api.finonest.com/api/health`
Frontend: `https://finonest.com`

## Security Checklist

- [x] HTTPS enabled
- [x] Environment variables secured
- [x] Database credentials rotated
- [x] CORS configured
- [x] Rate limiting enabled
- [x] JWT secrets strong
- [x] HttpOnly cookies