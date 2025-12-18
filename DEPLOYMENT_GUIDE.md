# 🚀 Finonest Coolify Deployment Guide

## Prerequisites
- VPS with Coolify installed
- Domain names: `finonest.org` & `api.finonest.org`
- GitHub repository: `https://github.com/Roastcoder/finonest-complete`

---

## 🗄️ Database Setup (First)

### 1. Create PostgreSQL Database
```bash
# In Coolify Dashboard
Resources → New Resource → Database → PostgreSQL
Name: finonest-db
Database: finonest
Username: finonest_user
Password: [generate strong password]
```

### 2. Note Database Connection
```
Internal URL: postgresql://finonest_user:password@finonest-db:5432/finonest
```

---

## 🔧 Backend Deployment

### 1. Create Backend Service
```bash
# Coolify Dashboard
Resources → New Resource → Application
Source: GitHub
Repository: Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Dockerfile Location: ./backend/Dockerfile
```

### 2. Backend Environment Variables
```env
DATABASE_URL=postgresql://finonest_user:YOUR_DB_PASSWORD@finonest-db:5432/finonest
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_REFRESH_SECRET=your-super-secret-refresh-key-min-32-chars
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

### 3. Backend Domain Configuration
```
Domain: api.finonest.org
Port: 3001
SSL: Enable (Let's Encrypt)
```

### 4. Backend Build Commands
```bash
# Build Command (auto from Dockerfile)
npm install
npx prisma generate
npm run build

# Start Command
npm run start:prod
```

---

## 🌐 Frontend Deployment

### 1. Create Frontend Service
```bash
# Coolify Dashboard
Resources → New Resource → Application
Source: GitHub
Repository: Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Dockerfile Location: ./Dockerfile
```

### 2. Frontend Environment Variables
```env
NEXT_PUBLIC_API_URL=https://api.finonest.com
```

### 3. Frontend Domain Configuration
```
Domain: finonest.org
Port: 3000
SSL: Enable (Let's Encrypt)
```

---

## 🔄 Deployment Steps

### Step 1: Deploy Database
1. Create PostgreSQL service
2. Wait for database to be ready
3. Note connection details

### Step 2: Deploy Backend
1. Create backend application
2. Set environment variables
3. Configure domain `api.finonest.com`
4. Deploy and wait for build

### Step 3: Run Database Migrations
```bash
# Connect to backend container
docker exec -it [backend-container-id] bash

# Run migrations
npx prisma migrate deploy
npm run prisma:seed
```

### Step 4: Deploy Frontend
1. Create frontend application
2. Set environment variables
3. Configure domain `finonest.com`
4. Deploy

---

## 🔍 Verification

### Backend Health Check
```bash
curl https://api.finonest.org/api/auth/login
# Should return 400 (validation error - expected)
```

### Frontend Check
```bash
curl https://finonest.org
# Should return HTML content
```

### Test Login
```bash
# Default admin user (from seed)
Email: admin@finonest.com
Password: admin123
```

---

## 📁 Project Structure for Coolify

```
finonest-complete/
├── backend/                 # Backend service
│   ├── Dockerfile          # Backend container
│   ├── src/                # NestJS source
│   └── prisma/             # Database schema
├── Dockerfile              # Frontend container
├── app/                    # Next.js frontend
├── components/             # React components
└── lib/                    # Utilities
```

---

## 🔐 Security Checklist

- [x] HTTPS enabled for both domains
- [x] Environment variables secured
- [x] Database password strong
- [x] JWT secrets 32+ characters
- [x] CORS configured for frontend domain
- [x] HttpOnly cookies enabled

---

## 🚨 Troubleshooting

### Backend Issues
```bash
# Check logs
docker logs [backend-container-id]

# Database connection
docker exec -it [backend-container-id] npx prisma db pull
```

### Frontend Issues
```bash
# Check build logs in Coolify
# Verify NEXT_PUBLIC_API_URL is set correctly
```

### Domain Issues
```bash
# Check DNS records
nslookup finonest.org
nslookup api.finonest.org

# Verify SSL certificates
curl -I https://finonest.org
curl -I https://api.finonest.org
```

---

## 📊 Monitoring

### Health Endpoints
- Backend: `https://api.finonest.org/api/users/me`
- Frontend: `https://finonest.org`

### Database Monitoring
```bash
# Check database status in Coolify
# Monitor connection count and performance
```

---

## 🔄 Updates & Maintenance

### Code Updates
```bash
# Push to GitHub
git push origin master

# Coolify will auto-deploy on push
# Or manually trigger in dashboard
```

### Database Migrations
```bash
# For new migrations
docker exec -it [backend-container] npx prisma migrate deploy
```

---

## 📞 Support

- **Repository**: https://github.com/Roastcoder/finonest-complete
- **Backend API**: https://api.finonest.org
- **Frontend**: https://finonest.org

**Default Admin Access:**
- Email: `admin@finonest.com`
- Password: `admin123`