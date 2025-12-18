# Finonest – Smart Loans & Credit Solutions

A modern financial services platform providing fast, transparent loan and credit solutions.

## Overview

Finonest is a comprehensive fintech web application offering personal loans, home loans, business loans, and credit services with instant eligibility checks and 24-hour approvals.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Charts:** Recharts
- **Package Manager:** PNPM

## Features

- 🚀 Fast loan approvals (15 minutes - 24 hours)
- 🏠 Home loans starting at 8.25% p.a.
- 💼 Business loans up to 50L
- 📱 Fully responsive design
- 🎨 Modern UI with animations
- 🔐 Secure authentication system
- 📊 Role-based dashboards (Admin, Manager, Employee, Customer)
- 💬 Chat support widget
- 📝 Blog and resources
- ✅ Eligibility checker

## Getting Started

### Prerequisites

- Node.js 18+ 
- PNPM

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # User dashboards
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page
│   ├── eligibility/       # Eligibility checker
│   └── products/          # Products page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Key Pages

- `/` - Homepage with hero, products, testimonials
- `/about` - Company information
- `/products` - Loan products catalog
- `/eligibility` - Loan eligibility checker
- `/blog` - Financial resources and articles
- `/contact` - Contact form
- `/dashboard/*` - Role-based user dashboards
- `/login` & `/signup` - Authentication

## Deployment

Built for deployment on Vercel with automatic optimizations.

## License

Private - All rights reserved
