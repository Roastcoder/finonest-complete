# 🔐 Production Environment Variables

## Backend (.env)
```env
DATABASE_URL="postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest"
JWT_SECRET="finonest-jwt-secret-key-2024-production-secure-32chars"
JWT_REFRESH_SECRET="finonest-refresh-secret-key-2024-production-secure-32chars"
FRONTEND_URL="https://finonest.org"
PORT=3001
NODE_ENV="production"
```

## Frontend (.env)
```env
NEXT_PUBLIC_API_URL="https://api.finonest.org"
```

## Coolify Environment Variables

### Backend Service
```
DATABASE_URL=postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest
JWT_SECRET=finonest-jwt-secret-key-2024-production-secure-32chars
JWT_REFRESH_SECRET=finonest-refresh-secret-key-2024-production-secure-32chars
FRONTEND_URL=https://finonest.org
PORT=3001
NODE_ENV=production
```

### Frontend Service
```
NEXT_PUBLIC_API_URL=https://api.finonest.org
```

## Database Connection Test
```bash
# Test connection
psql "postgres://finonest_user:XYuwp7tK7ZFEPNbHNa0xmm9M3Xtt3s5DnCmXYFX4mDLBu1vnbRS2WeqJ9PYgM218@jk4sg48g48ogk4008g8o8404:5432/finonest"
```