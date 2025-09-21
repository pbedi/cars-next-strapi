# Database Setup Guide

## Option 1: Free Supabase Database (Recommended)

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up with GitHub or email

### Step 2: Create New Project
1. Click "New Project"
2. Choose your organization
3. Fill in project details:
   - **Name**: `juniorcars-cms`
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your location
4. Click "Create new project"
5. Wait 2-3 minutes for setup to complete

### Step 3: Get Database Connection String
1. In your Supabase dashboard, go to **Settings** > **Database**
2. Scroll down to "Connection string"
3. Copy the **URI** connection string
4. It looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### Step 4: Update Environment Variables
1. Open `cms/.env`
2. Replace the DATABASE_URL with your Supabase URL:
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```
3. Replace `[YOUR-PASSWORD]` with your actual database password

### Step 5: Push Database Schema
```bash
cd cms
npm run db:push
```

## Option 2: Local Development Database

If you prefer to use a local database for development:

### Step 1: Start Local Prisma Database
```bash
# From the cms folder
npx prisma dev
```

### Step 2: Push Schema
```bash
npm run db:push
```

## Verification

After setup, verify your database connection:

```bash
# Open Prisma Studio to view your database
npm run db:studio
```

This will open a web interface at `http://localhost:5555` where you can see your database tables.

## Next Steps

Once your database is set up:
1. ✅ Database tables created
2. ⏳ Set up authentication
3. ⏳ Create API routes
4. ⏳ Build admin interface

## Troubleshooting

### Connection Issues
- **Supabase**: Check your connection string and password
- **Local**: Make sure `npx prisma dev` is running

### Schema Issues
- Run `npm run db:generate` after any schema changes
- Use `npm run db:push` to sync schema with database

### Environment Variables
- Make sure `.env` file exists in the `cms/` folder
- Check that DATABASE_URL is correctly formatted

## Free Tier Limits

**Supabase Free Tier:**
- 500MB database storage
- 2 CPU hours per month
- 5GB bandwidth
- Perfect for development and small projects

This is more than enough for your CMS needs!
