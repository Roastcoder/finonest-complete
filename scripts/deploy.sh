#!/bin/bash

# Finonest Deployment Script for Coolify

echo "🚀 Starting Finonest deployment..."

# Check if required environment variables are set
if [ -z "$DB_PASSWORD" ] || [ -z "$JWT_SECRET" ] || [ -z "$JWT_REFRESH_SECRET" ]; then
    echo "❌ Missing required environment variables"
    echo "Please set: DB_PASSWORD, JWT_SECRET, JWT_REFRESH_SECRET"
    exit 1
fi

# Build and start services
echo "📦 Building services..."
docker-compose up -d --build

# Wait for database to be ready
echo "⏳ Waiting for database..."
sleep 30

# Run database migrations
echo "🗄️ Running database migrations..."
docker-compose exec backend npx prisma migrate deploy

# Seed database
echo "🌱 Seeding database..."
docker-compose exec backend npm run prisma:seed

echo "✅ Deployment complete!"
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:3001"
echo "📊 Admin: admin@finonest.com / admin123"