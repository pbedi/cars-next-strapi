# 🚀 JuniorCars CMS - Production Setup Guide

## Phase 4: Migration & Deployment

### Step 1: Supabase Database Setup

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up with GitHub or email (free)

2. **Create New Project**
   - Project name: `juniorcars-cms`
   - Generate strong database password (save it!)
   - Choose region closest to you
   - Click "Create new project"

3. **Get Connection String**
   - Go to Settings → Database
   - Copy the "URI" connection string
   - Format: `postgresql://postgres:[PASSWORD]@[REF].supabase.co:5432/postgres`

### Step 2: Update Environment Variables

1. **Update `.env` file:**
   ```bash
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres"
   ```

2. **For production deployment, update `.env.production`**

### Step 3: Run Database Migration

```bash
# Generate Prisma client for PostgreSQL
npx prisma generate --schema=src/lib/cms/prisma/schema.prisma

# Push schema to Supabase
npx prisma db push --schema=src/lib/cms/prisma/schema.prisma

# Run migration script to seed data
node scripts/migrate-to-production.js
```

### Step 4: Test Your CMS

```bash
# Start development server
npm run dev

# Test admin login
# URL: http://localhost:3000/admin/login
# Email: admin@juniorcars.com
# Password: admin123
```

### Step 5: Production Deployment

#### Option A: Netlify (Recommended)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

#### Option B: Vercel
1. Connect GitHub repository
2. Framework preset: Next.js
3. Add environment variables in Vercel dashboard

### 🎯 What You'll Have After Phase 4

✅ **Production PostgreSQL Database** (Supabase)
✅ **Working Admin Interface** (all features)
✅ **Complete API Layer** (all endpoints)
✅ **Content Management** (pages, cars, navigation)
✅ **Media Library** (file uploads)
✅ **SEO Tools** (optimization)
✅ **Zero Monthly Costs** (free tiers)

### 🔧 Troubleshooting

**Database Connection Issues:**
- Verify connection string format
- Check Supabase project is active
- Ensure password is correct

**Migration Errors:**
- Run `npx prisma db push` first
- Check database permissions
- Verify schema syntax

**Deployment Issues:**
- Check environment variables
- Verify build commands
- Review deployment logs

### 📞 Support

If you encounter any issues:
1. Check the error logs
2. Verify environment variables
3. Test database connection
4. Review Prisma schema

Your custom CMS will be production-ready with enterprise-grade features!
