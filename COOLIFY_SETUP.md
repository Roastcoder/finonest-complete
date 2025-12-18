# 🎯 Coolify VPS Setup for Finonest

## 🖥️ VPS Requirements
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 50GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Domains**: Point A records to VPS IP

---

## 📋 Step-by-Step Deployment

### 1️⃣ Install Coolify on VPS
```bash
# SSH into your VPS
ssh root@your-vps-ip

# Install Coolify
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# Access Coolify
# Visit: http://your-vps-ip:8000
```

### 2️⃣ Initial Coolify Setup
```bash
# Create admin account
# Configure server settings
# Add your domains in DNS settings
```

### 3️⃣ Create Database Service
```
Resources → New Resource → Database
Type: PostgreSQL 15
Name: finonest-db
Database: finonest
Username: finonest_user
Password: [generate strong password - save it!]
```

### 4️⃣ Deploy Backend API
```
Resources → New Resource → Application
Git Repository: https://github.com/Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Root Directory: /backend
```

**Backend Environment Variables:**
```env
DATABASE_URL=postgresql://finonest_user:YOUR_DB_PASSWORD@finonest-db:5432/finonest
JWT_SECRET=your-jwt-secret-min-32-chars-here
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars-here
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

**Backend Domain:**
```
Domain: api.finonest.org
Port: 3001
SSL: Auto (Let's Encrypt)
```

### 5️⃣ Run Database Setup
```bash
# After backend deployment, connect to container
docker exec -it [backend-container-name] bash

# Run migrations
npx prisma migrate deploy

# Seed initial data
npm run prisma:seed
```

### 6️⃣ Deploy Frontend
```
Resources → New Resource → Application
Git Repository: https://github.com/Roastcoder/finonest-complete
Branch: master
Build Pack: Dockerfile
Root Directory: / (root)
```

**Frontend Environment Variables:**
```env
NEXT_PUBLIC_API_URL=https://api.finonest.org
```

**Frontend Domain:**
```
Domain: finonest.org
Port: 3000
SSL: Auto (Let's Encrypt)
```

---

## 🔧 Configuration Details

### DNS Configuration
```
# Point these to your VPS IP:
A    finonest.org        → YOUR_VPS_IP
A    api.finonest.org    → YOUR_VPS_IP
```

### Coolify Service Order
1. **Database** (finonest-db) - Deploy first
2. **Backend** (finonest-backend) - Deploy second
3. **Frontend** (finonest-frontend) - Deploy last

### Container Names in Coolify
```
Database: finonest-db
Backend: finonest-backend-[random]
Frontend: finonest-frontend-[random]
```

---

## ✅ Verification Steps

### 1. Check Services
```bash
# In Coolify dashboard, verify all services are "Running"
# Green status for all three services
```

### 2. Test Backend API
```bash
curl https://api.finonest.org/api/auth/login
# Should return: {"message":"email must be an email","error":"Bad Request","statusCode":400}
```

### 3. Test Frontend
```bash
# Visit: https://finonest.org
# Should load the homepage
```

### 4. Test Admin Login
```
URL: https://finonest.org/login
Email: admin@finonest.com
Password: admin123
```

---

## 🚨 Troubleshooting

### Backend Won't Start
```bash
# Check logs in Coolify
# Common issues:
- DATABASE_URL incorrect
- JWT secrets too short
- Port 3001 not exposed
```

### Frontend Build Fails
```bash
# Check build logs
# Common issues:
- NEXT_PUBLIC_API_URL missing
- Node.js version mismatch
```

### Database Connection Issues
```bash
# Verify database is running
# Check DATABASE_URL format
# Ensure backend can reach database container
```

### SSL Certificate Issues
```bash
# Wait 5-10 minutes for Let's Encrypt
# Check domain DNS propagation
# Verify A records point to VPS IP
```

---

## 📊 Monitoring & Maintenance

### Resource Usage
```
Database: ~512MB RAM
Backend: ~256MB RAM  
Frontend: ~128MB RAM
Total: ~1GB RAM minimum
```

### Backup Strategy
```bash
# Database backups in Coolify
# Code backups via GitHub
# Environment variables backup
```

### Updates
```bash
# Push to GitHub master branch
# Coolify auto-deploys on git push
# Or manually trigger in dashboard
```

---

## 🔐 Security Checklist

- [x] Strong database password (16+ chars)
- [x] JWT secrets (32+ chars)
- [x] HTTPS enabled (Let's Encrypt)
- [x] Environment variables secured
- [x] Default admin password changed
- [x] Firewall configured (ports 80, 443, 22)

---

## 📞 Quick Reference

**Services:**
- Frontend: https://finonest.org
- Backend: https://api.finonest.org
- Admin Panel: https://finonest.org/dashboard/admin

**Default Admin:**
- Email: admin@finonest.com
- Password: admin123 (change immediately!)

**GitHub Repo:**
- https://github.com/Roastcoder/finonest-complete