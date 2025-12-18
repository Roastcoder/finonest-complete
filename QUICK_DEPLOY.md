# ⚡ Quick Deploy - Finonest on Coolify

## 🎯 Domain Configuration: finonest.org

### DNS Setup
```
A    finonest.org      → YOUR_VPS_IP
A    api.finonest.org  → YOUR_VPS_IP
```

---

## 🚀 3-Step Deployment

### Step 1: Database
```
Coolify → Resources → Database → PostgreSQL
Name: finonest-db
Database: finonest
User: finonest_user
Password: [save this!]
```

### Step 2: Backend API
```
Coolify → Application → GitHub
Repo: Roastcoder/finonest-complete
Root: /backend
Domain: api.finonest.org
Port: 3001
```

**Environment Variables:**
```env
DATABASE_URL=postgresql://finonest_user:PASSWORD@finonest-db:5432/finonest
JWT_SECRET=your-32-char-secret-here
JWT_REFRESH_SECRET=your-32-char-refresh-secret-here
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

### Step 3: Frontend
```
Coolify → Application → GitHub
Repo: Roastcoder/finonest-complete
Root: /
Domain: finonest.org
Port: 3000
```

**Environment Variables:**
```env
NEXT_PUBLIC_API_URL=https://api.finonest.org
```

---

## 🔧 Post-Deploy Setup

### Run Migrations
```bash
# Connect to backend container in Coolify
npx prisma migrate deploy
npm run prisma:seed
```

### Test Access
- **Frontend**: https://finonest.org
- **API**: https://api.finonest.org/api/auth/login
- **Admin**: admin@finonest.com / admin123

---

## ✅ Verification
- [ ] Database running
- [ ] Backend API responding
- [ ] Frontend loading
- [ ] Admin login working
- [ ] SSL certificates active