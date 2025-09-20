# JuniorCars Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Development Servers
```bash
npm run dev
```

### 3. Configure Strapi Admin (First Time Only)

#### Access Admin Panel
- Go to: http://localhost:1337/admin
- Login with:
  - **Email**: gurender.bedi@outlook.com
  - **Password**: Pa55word

#### Configure API Permissions (IMPORTANT!)
1. In Strapi admin, go to **Settings** → **Users & Permissions** → **Roles**
2. Click on **Public** role
3. Enable the following permissions:

**Page**
- [x] find
- [x] findOne

**Car-series-collection** (Note: this is the API name)
- [x] find
- [x] findOne

**Navigation**
- [x] find
- [x] findOne

**Upload**
- [x] find
- [x] findOne

4. Click **Save**

> ⚠️ **Critical**: Without these permissions, the frontend cannot fetch data from Strapi!

### 4. Create Sample Content (Optional)

#### Option A: Manual Content Creation
1. Go to **Content Manager** in Strapi admin
2. Create entries for:
   - **Car Series**: Series 1, 300, 356, Landrover
   - **Pages**: About, Contact
   - **Navigation**: Main menu structure

#### Option B: Run Seed Script
```bash
cd backend
npm run strapi script scripts/seed-data.js
```

### 5. Test Everything

#### Test Frontend
- **Website**: http://localhost:3000 (now using port 3000!)
- ✅ Hero images should load correctly
- ✅ Carousel images should display
- ✅ Navigation should work

#### Test Backend API (after setting permissions)
- **Pages API**: http://localhost:1337/api/pages
- **Car Series API**: http://localhost:1337/api/car-series-collection
- **Admin Panel**: http://localhost:1337/admin

#### Quick API Test
```bash
# Test if permissions are working
curl http://localhost:1337/api/pages

# Should return JSON data, not a 403 error
```

## 🎯 You're Ready!

Your JuniorCars application is now fully configured and ready for development!

## 📝 Next Steps for Developers

1. **Add Real Images**: Replace sample images in `frontend/public/images/`
2. **Customize Content**: Edit content through Strapi admin panel
3. **Modify Styling**: Update Tailwind classes in React components
4. **Add Features**: Extend functionality as needed

## 🆘 Need Help?

Check the main README.md for detailed documentation and troubleshooting.
