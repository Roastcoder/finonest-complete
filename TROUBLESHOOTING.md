# 🔧 Coolify Troubleshooting Guide

## ❌ Common Deployment Failures

### 1. Build Fails - "No such file or directory"
**Root Cause**: Wrong Base Directory
**Fix**: 
- Backend: Set Base Directory to `backend`
- Frontend: Set Base Directory to `/` or leave empty

### 2. Container Exits Immediately
**Root Cause**: Port mismatch or missing environment variables
**Fix**:
- Verify PORT env var matches exposed port
- Check all required env vars are set

### 3. Database Connection Error
**Root Cause**: Using external database URL
**Fix**: Use internal Coolify hostname in DATABASE_URL

### 4. Branch Not Found
**Root Cause**: Repository uses `master` not `main`
**Fix**: Set Branch to `master` in Coolify

### 5. Dockerfile Not Found
**Root Cause**: Wrong Dockerfile path
**Fix**:
- Backend: `Dockerfile` (relative to backend folder)
- Frontend: `Dockerfile` (relative to root)

---

## 🔍 Debug Commands

### Check Container Logs
```bash
docker logs [container-name]
```

### Connect to Container
```bash
docker exec -it [container-name] bash
```

### Test Database Connection
```bash
psql "postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest"
```

### Check Environment Variables
```bash
env | grep -E "(DATABASE|JWT|PORT)"
```

---

## ✅ Verification Checklist

- [ ] Repository branch is `master`
- [ ] Base Directory correct (`backend` vs `/`)
- [ ] Dockerfile path correct
- [ ] All environment variables set
- [ ] Port configuration matches
- [ ] Database accessible
- [ ] SSL certificates active
- [ ] Health checks passing