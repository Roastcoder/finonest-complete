# 🚀 Coolify Deployment Steps - Finonest

## 1️⃣ Create Backend Service

### Service Configuration
```
Type: Application
Source: Git Repository
Repository: https://github.com/Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Base Directory: backend
Dockerfile Location: Dockerfile
Port: 3001
```

### Environment Variables
```
DATABASE_URL=postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest
JWT_SECRET=finonest-jwt-secret-key-2024-production-secure-32chars
JWT_REFRESH_SECRET=finonest-refresh-secret-key-2024-production-secure-32chars
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

### Domain Configuration
```
Domain: api.finonest.org
Port: 3001
SSL: Enabled
```

---

## 2️⃣ Create Frontend Service

### Service Configuration
```
Type: Application
Source: Git Repository
Repository: https://github.com/Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Base Directory: /
Dockerfile Location: Dockerfile
Port: 3000
```

### Environment Variables
```
NEXT_PUBLIC_API_URL=https://api.finonest.org
```

### Domain Configuration
```
Domain: finonest.org
Port: 3000
SSL: Enabled
```

---

## 3️⃣ Post-Deployment Setup

### Run Database Migrations
```bash
# Connect to backend container
docker exec -it [backend-container-name] bash

# Run migrations
npx prisma migrate deploy

# Seed database
npm run prisma:seed
```

### Verify Deployment
- Backend: https://api.finonest.org/api/auth/login
- Frontend: https://finonest.org
- Admin: admin@finonest.com / admin123

---

## 🔧 Common Issues & Fixes

### Issue: Build Fails
**Fix**: Check Base Directory is `backend` for backend, `/` for frontend

### Issue: Container Exits
**Fix**: Verify PORT environment variable matches exposed port

### Issue: Database Connection
**Fix**: Use internal database hostname in DATABASE_URL

### Issue: SSL Certificate
**Fix**: Wait 5-10 minutes for Let's Encrypt provisioning