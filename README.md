# JuniorCars - Full Stack Application

A modern automotive website built with a full-stack Next.js application, featuring a custom-built CMS.

## 🏗️ Project Structure

```
carsnextstrapi/
├── frontend/          # Next.js application (Port 3000)
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Strapi CMS (Port 1337) - PRESERVED as fallback
│   ├── src/          # Strapi source
│   ├── config/       # Strapi configuration
│   └── package.json  # Backend dependencies
├── cms/              # NEW: Custom CMS (Budget-friendly replacement)
│   ├── prisma/       # Database schema and migrations
│   ├── lib/          # Database client and utilities
│   ├── types/        # TypeScript definitions
│   ├── api/          # API route handlers
│   └── README.md     # Custom CMS documentation
└── package.json      # Root package.json for scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 8+

### One-Command Setup
```bash
npm run setup
npm run dev
```

### Manual Setup
```bash
# Install all dependencies
npm run install:all

# Start both applications
npm run dev
```

### First-Time Configuration
1. **Access Strapi Admin**: http://localhost:1337/admin
2. **Login**: gurender.bedi@outlook.com / Pa55word
3. **Configure Permissions**: See [setup.md](./setup.md) for detailed steps
4. **Access Frontend**: http://localhost:3001

> 📖 **Detailed Setup Guide**: See [setup.md](./setup.md) for step-by-step instructions

### Production Build
```bash
npm run build
npm run start
```

## 📱 Features

### Frontend (Next.js)
- **Mobile-First Design**: Responsive across all devices
- **Modern Components**: Hero, Carousel, Mobile Menu
- **Car Collections**: Series 1, 300, 356, Landrover
- **SEO Optimized**: Meta tags, Open Graph
- **TypeScript**: Full type safety

### Backend Options

#### Current: Strapi CMS (Preserved)
- **Headless CMS**: Content management
- **REST API**: Dynamic content delivery
- **Media Management**: Images and videos
- **Admin Panel**: Easy content editing

#### NEW: Custom CMS (Budget-Friendly)
- **Zero Cost**: Built with free tier services
- **Mobile-First**: Optimized for mobile performance
- **Custom Admin**: Tailored admin interface
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Type-Safe**: Full TypeScript integration
- **Easy Fallback**: Switch back to Strapi anytime

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend |
| `npm run dev:frontend` | Start only Next.js frontend |
| `npm run dev:backend` | Start only Strapi backend |
| `npm run build` | Build both applications |
| `npm run install:all` | Install all dependencies |
| `npm run clean` | Clean all build files and node_modules |
| `npm run setup` | Complete setup with dependencies |
| `npm run seed` | Populate sample content in Strapi |

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend Admin**: http://localhost:1337/admin
- **Backend API**: http://localhost:1337/api

## 🔐 Admin Access

### Strapi Admin Panel
- **URL**: http://localhost:1337/admin
- **Email**: gurender.bedi@outlook.com
- **Password**: Pa55word

### First Time Setup
1. Access the admin panel at http://localhost:1337/admin
2. Login with the credentials above
3. Navigate to **Settings > Users & Permissions > Roles > Public**
4. Enable permissions for content types to make them accessible via API

## 🖼️ Image Organization

The project includes a well-organized image structure:

```
frontend/public/images/
├── cars/                    # Car-specific images by model
│   ├── series-1/           # Series 1 car images
│   ├── 300/                # 300 series images
│   ├── 356/                # 356 heritage images
│   ├── land-junior/        # Landrover images
│   └── ...                 # Other car models
├── gallery/                # Carousel gallery images
├── hero/                   # Hero section backgrounds
├── logo/                   # Brand logos and favicons
├── wall-art/              # Wall art images
└── icons/                 # App icons and favicons
```

## ⚙️ Environment Variables

### Frontend (.env.local)
```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXT_PUBLIC_SITE_NAME=JuniorCars
# Social media and contact info
```

### Backend (.env)
```bash
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=sqlite
ADMIN_EMAIL=gurender.bedi@outlook.com
ADMIN_PASSWORD=Pa55word
# Auto-generated secrets and keys
```

## 🏗️ Content Types (Strapi)

### Pages
- **Purpose**: Website pages with hero and carousel
- **Fields**: title, slug, description, hero, carousel, content, SEO
- **API**: `/api/pages`

### Car Series
- **Purpose**: Car collections (Series 1, 300, 356, Landrover)
- **Fields**: name, slug, description, hero, carousel, specifications, price
- **API**: `/api/car-series-collection`

### Navigation
- **Purpose**: Main menu and footer navigation
- **Fields**: mainMenu, footerMenu, socialLinks
- **API**: `/api/navigation`

## 🔧 Development Workflow

### Adding New Content
1. **Via Strapi Admin**:
   - Login to http://localhost:1337/admin
   - Navigate to Content Manager
   - Create/edit content using the visual interface

2. **Via API**:
   - Use REST API endpoints
   - Authenticate with API tokens for write operations

### Adding New Images
1. Place images in appropriate `frontend/public/images/` subdirectory
2. Reference them in Strapi content or directly in components
3. Use Next.js Image component for optimization

### Styling Changes
- Edit Tailwind classes in components
- Modify `frontend/tailwind.config.ts` for theme changes
- Global styles in `frontend/src/app/globals.css`

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Railway/Heroku)
```bash
cd backend
npm run build
# Deploy to Railway or Heroku
```

### Environment Variables for Production
- Update all URLs to production domains
- Generate new secrets for production
- Configure database for production (PostgreSQL recommended)

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 in use**: Frontend will automatically use 3001
2. **Strapi admin not accessible**: Check if backend is running on port 1337
3. **Images not loading**: Verify image paths in `public/images/`
4. **API 403 errors**: Configure permissions in Strapi admin panel
5. **CORS errors**: Check CORS configuration in `backend/config/middlewares.ts`

### Reset Everything
```bash
npm run clean
npm run install:all
npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test on both frontend and backend
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
