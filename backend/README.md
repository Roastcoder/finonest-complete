# Finonest Backend API

Production-ready NestJS backend for Finonest fintech platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Setup environment:
```bash
cp .env.example .env
# Update DATABASE_URL and JWT secrets
```

3. Setup database:
```bash
npx prisma migrate dev
npx prisma generate
npm run prisma:seed
```

4. Start development:
```bash
npm run start:dev
```

## API Endpoints

### Authentication
- POST `/api/auth/signup` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/refresh` - Refresh token
- POST `/api/auth/logout` - User logout

### Users
- GET `/api/users/me` - Get current user
- GET `/api/users` - Get all users (ADMIN only)

### Products
- GET `/api/products` - Get all loan products
- POST `/api/products` - Create product (ADMIN only)

### Loans
- POST `/api/loans/apply` - Apply for loan
- GET `/api/loans/my` - Get user's loans
- GET `/api/loans/all` - Get all loans (ADMIN/MANAGER)

### Eligibility
- POST `/api/eligibility/check` - Check loan eligibility

### Dashboard
- GET `/api/dashboard/stats` - Get dashboard statistics

## Deployment

Build and run with Docker:
```bash
docker build -t finonest-backend .
docker run -p 3001:3001 finonest-backend
```