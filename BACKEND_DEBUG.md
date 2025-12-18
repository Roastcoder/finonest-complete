# 🔍 Backend Debug Guide

## Check These in Coolify

### 1. Container Status
- Go to backend service in Coolify
- Check if container is **Running** (green) or **Exited** (red)

### 2. Environment Variables Required
```
DATABASE_URL=postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest
JWT_SECRET=finonest-jwt-secret-key-2024-production-secure-32chars
JWT_REFRESH_SECRET=finonest-refresh-secret-key-2024-production-secure-32chars
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

### 3. Check Container Logs
Look for these errors:
- `Error: Cannot find module`
- `ECONNREFUSED` (database connection)
- `Port 3001 is already in use`
- `Prisma schema not found`

### 4. Test Database Connection
```bash
# In Coolify, connect to backend container
docker exec -it [container-name] sh

# Test database
node -e "console.log(process.env.DATABASE_URL)"
```

### 5. Manual Container Test
```bash
# Run container manually
docker run -it --rm \
  -e DATABASE_URL="postgres://..." \
  -e JWT_SECRET="..." \
  -p 3001:3001 \
  [image-name]
```

## Common Issues

### Issue: Container Exits Immediately
**Fix**: Missing environment variables or database connection failed

### Issue: Port Not Accessible
**Fix**: Check if PORT=3001 is set and container exposes 3001

### Issue: Prisma Error
**Fix**: Database connection string incorrect or database not accessible