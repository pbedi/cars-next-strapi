# Custom CMS Setup Guide

## 🚀 Quick Start

### Option 1: Use Local Development Database (Recommended for testing)

1. **Start local Prisma database**:
   ```bash
   cd cms
   npx prisma dev
   ```

2. **Generate Prisma client**:
   ```bash
   npm run db:generate
   ```

3. **Push database schema**:
   ```bash
   npm run db:push
   ```

### Option 2: Use Supabase (Free Production Database)

1. **Create Supabase account**: Go to [supabase.com](https://supabase.com)

2. **Create new project**: 
   - Project name: `juniorcars-cms`
   - Database password: (save this securely)
   - Region: Choose closest to your users

3. **Get database URL**:
   - Go to Settings > Database
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your database password

4. **Update environment variables**:
   ```bash
   # In cms/.env.cms
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   ```

5. **Run database migration**:
   ```bash
   cd cms
   npm run db:push
   ```

## 🔧 Development Workflow

### Database Management

```bash
# Generate Prisma client after schema changes
npm run db:generate

# Push schema changes to database
npm run db:push

# Create and run migrations (for production)
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio

# Seed database with sample data
npm run db:seed
```

### Environment Variables

Create `cms/.env.cms` with:

```env
# Database
DATABASE_URL="your-database-url-here"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this"

# Supabase (optional - for file storage)
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# Cloudinary (for image optimization)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## 📊 Database Schema

Our custom CMS includes these tables:

- **users**: Admin authentication
- **pages**: Website pages (replaces Strapi pages)
- **car_series**: Car collections (replaces Strapi car series)
- **navigation_items**: Menu management
- **media**: Image and file management
- **content_blocks**: Flexible page building blocks

## 🔄 Migration from Strapi

When ready to migrate:

1. **Export Strapi data**:
   ```bash
   # In backend folder
   npm run strapi export
   ```

2. **Run migration script** (to be created):
   ```bash
   cd cms
   npm run migrate-from-strapi
   ```

3. **Update frontend API endpoints**:
   - Change from `http://localhost:1337/api/`
   - To custom CMS endpoints

## 🛡️ Safety Features

- **Parallel Development**: Strapi continues running
- **Easy Rollback**: Switch back by changing API endpoints
- **Data Preservation**: All original data remains intact
- **Gradual Migration**: Move content types one by one

## 📱 Mobile Optimization

The custom CMS is built mobile-first:

- **Responsive Admin**: Works on all devices
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Fast Loading**: Optimized for mobile networks
- **Touch-Friendly**: Mobile-optimized interface

## 💰 Cost Comparison

### Current Strapi Setup
- Hosting: $29-99/month
- Database: $10-50/month
- Storage: $5-20/month
- **Total**: $44-169/month

### Custom CMS (Free Tier)
- Netlify hosting: $0
- Supabase database: $0
- Cloudinary images: $0
- **Total**: $0/month

## 🎯 Next Steps

1. Choose database option (local or Supabase)
2. Set up environment variables
3. Run database setup commands
4. Start building admin interface
5. Create API routes
6. Test with sample data

## 🆘 Troubleshooting

### Common Issues

1. **Database connection failed**:
   - Check DATABASE_URL in .env.cms
   - Ensure database is running
   - Verify credentials

2. **Prisma client not found**:
   - Run `npm run db:generate`
   - Check output path in schema.prisma

3. **Migration failed**:
   - Check database permissions
   - Ensure schema is valid
   - Try `npm run db:push` instead

### Getting Help

- Check the main README.md
- Review Prisma documentation
- Check Supabase documentation
- Create GitHub issue for project-specific problems

This setup gives you a professional CMS at zero cost while keeping your original Strapi as a safety net!
