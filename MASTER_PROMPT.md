# 🚀 MASTER PROMPT – FINONEST  
## (Full Stack • Backend • Database • Coolify Deployment)

---

## 🎯 ROLE

You are a **Fintech CTO, Senior Backend Architect, Database Designer, DevOps Engineer, and Security Expert** with experience building **production-grade loan & credit platforms** and deploying them on **Coolify**.

---

## 🧠 PROJECT CONTEXT

I am building a fintech platform named **Finonest – Smart Loans & Credit Solutions**.

### Core Offerings
- Personal Loans  
- Home Loans  
- Business Loans  
- Credit / Card Services  
- Eligibility Checker  
- Role-based Dashboards  

The system must be **secure, scalable, modular, and production-ready**.

---

## 🏗️ REQUIRED ARCHITECTURE

### Frontend
- Next.js 16 (App Router)
- TypeScript 5
- React 19
- Tailwind CSS 4
- Framer Motion
- Radix UI
- React Hook Form + Zod
- Role-based routing & middleware

### Backend
- Node.js 18+
- NestJS (preferred)
- Prisma ORM
- JWT Authentication (Access + Refresh tokens)
- RBAC (Role-Based Access Control)
- REST APIs

### Database
- PostgreSQL (Primary)
- Redis (optional – OTP, cache, sessions)

### Deployment
- Coolify (self-hosted)
- Dockerized frontend & backend
- Domains:
  - `finonest.com` → Frontend
  - `api.finonest.com` → Backend

---

## 👥 USER ROLES

```
ADMIN
MANAGER
EMPLOYEE
CUSTOMER
```

Each role must have:
- API Guards (backend)
- Route protection (frontend)
- Permission-based access

---

## 📦 BACKEND REQUIREMENTS

### Backend Folder Structure

```
backend/
├── src/
│   ├── auth/
│   ├── users/
│   ├── roles/
│   ├── products/
│   ├── loans/
│   ├── eligibility/
│   ├── dashboard/
│   ├── common/
│   │   ├── guards/
│   │   ├── decorators/
│   │   └── middleware/
│   ├── prisma/
│   └── main.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── Dockerfile
├── .env.example
└── package.json
```

### Mandatory APIs

#### Authentication
```
POST /auth/signup
POST /auth/login
POST /auth/refresh
POST /auth/logout
```

#### Users
```
GET /users/me
GET /users (ADMIN only)
```

#### Products
```
GET /products
POST /products (ADMIN)
```

#### Eligibility
```
POST /eligibility/check
```

#### Loans
```
POST /loans/apply
GET /loans/my
GET /loans/all (ADMIN / MANAGER)
```

---

## 🧬 DATABASE DESIGN (PostgreSQL)

### Core Tables
```
users
roles
loan_products
loan_applications
eligibility_checks
documents
activity_logs
```

### Prisma Schema (Example)

```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  role      Role
  createdAt DateTime @default(now())
}

enum Role {
  ADMIN
  MANAGER
  EMPLOYEE
  CUSTOMER
}

model LoanProduct {
  id          String @id @default(uuid())
  name        String
  interest    Float
  maxAmount  Int
  createdAt  DateTime @default(now())
}

model LoanApplication {
  id        String   @id @default(uuid())
  userId    String
  amount    Int
  status    String
  createdAt DateTime @default(now())
}
```

---

## 🌐 FRONTEND REQUIREMENTS

### Frontend Folder Structure
```
app/
├── (auth)/
│   ├── login/
│   └── signup/
├── dashboard/
│   ├── admin/
│   ├── manager/
│   ├── employee/
│   └── customer/
├── products/
├── eligibility/
├── blog/
├── contact/
├── layout.tsx
└── page.tsx
```

### Frontend API Layer
Create a reusable API utility using environment-based URLs and cookies for JWT handling.

---

## 🔐 AUTHENTICATION FLOW

1. User logs in
2. Backend returns JWT in HttpOnly Cookie
3. Frontend middleware validates session
4. Role-based access enforced
5. Refresh token flow implemented

---

## 🚢 COOLIFY DEPLOYMENT REQUIREMENTS

### Backend
- Dockerfile with production build
- Expose port 3001
- Environment variables:
```
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
```

### Frontend
- Dockerized Next.js build
- Expose port 3000
- Environment variable:
```
NEXT_PUBLIC_API_URL=https://api.finonest.com
```

### Domain & SSL
- Configure domains in Coolify
- Enable Let's Encrypt SSL
- Force HTTPS

---

## ✅ PRODUCTION CHECKLIST

### Security
- HttpOnly cookies
- CORS restrictions
- Rate limiting
- Zod validation
- Password hashing (bcrypt)

### Performance
- API caching
- DB indexing
- Image optimization

### Monitoring
- Coolify logs
- Health checks
- Error alerts

---

## 🎯 DELIVERABLES

Generate complete, production-ready code for:

1. **Backend (NestJS + Prisma)**
   - Complete folder structure
   - All modules with controllers, services, DTOs
   - Authentication & RBAC implementation
   - Dockerfile

2. **Database Schema**
   - Complete Prisma schema
   - Migrations
   - Seed data

3. **Frontend Integration**
   - API layer
   - Auth middleware
   - Role-based routing

4. **Coolify Configuration**
   - Docker setup
   - Environment variables
   - Deployment scripts

Make it **enterprise-grade, secure, and scalable** for fintech production use.