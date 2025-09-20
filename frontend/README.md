# JuniorCars - Next.js with Strapi CMS

A modern, mobile-first automotive website built with Next.js 14 and integrated with Strapi CMS for content management.

## Features

- **Mobile-First Design**: Responsive design that works seamlessly across mobile, tablet, and desktop
- **Mobile Menu**: Consistent hamburger menu experience across all device sizes
- **Strapi CMS Integration**: Dynamic content management for cars, images, and pages
- **Modern Components**:
  - Hero section with image and video support
  - Responsive carousel with 4 images
  - Mobile-optimized header with hamburger menu
  - 3-column footer with social media icons
- **Car Collection Pages**: Series 1, 300, 356, and Landrover collections
- **Wall Art Gallery**: Automotive art collection
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CMS**: Strapi (headless)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Strapi backend (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car_next_strapi
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cars/              # Car collection pages
│   ├── wall-art/          # Wall art page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Mobile-first header with hamburger menu
│   ├── Footer.tsx         # 3-column footer
│   ├── Hero.tsx           # Hero section with video support
│   ├── Carousel.tsx       # Image carousel component
│   ├── Layout.tsx         # Page layout wrapper
│   └── PageTemplate.tsx   # Reusable page template
├── lib/                   # Utilities and configurations
│   └── strapi.ts          # Strapi API client
└── types/                 # TypeScript type definitions
    └── strapi.ts          # Strapi content types
```

## Navigation Structure

- **Cars** (with submenu)
  - Series 1
  - 300
  - 356
  - Landrover
- **Wall Art**
- **About**
- **Contact**

## Components

### Header
- Mobile-first hamburger menu
- Smooth animations with Framer Motion
- Consistent experience across all screen sizes
- Submenu support for Cars section

### Hero
- Support for both images and videos
- Video controls (play/pause, mute/unmute)
- Responsive text overlay
- Scroll indicator animation

### Carousel
- 4-image carousel with navigation
- Auto-play functionality
- Touch/swipe support
- Thumbnail navigation on mobile
- Keyboard navigation support

### Footer
- 3-column layout (desktop)
- Stacked layout (mobile)
- Social media icons (Instagram, YouTube, TikTok)
- Copyright and legal links
- Main navigation links

## Strapi Integration

The website is designed to work with Strapi CMS for dynamic content management:

### Content Types Needed in Strapi:

1. **Pages**
   - Title, slug, description
   - Hero content (title, subtitle, description, image, video)
   - Carousel images
   - SEO metadata

2. **Car Series**
   - Name, slug, description
   - Hero content
   - Carousel images
   - Specifications

3. **Navigation**
   - Menu structure
   - Links and submenus

### API Endpoints:
- `/api/pages` - Page content
- `/api/car-series` - Car collection data
- `/api/navigation` - Menu structure

## Responsive Design

The website follows a mobile-first approach:

- **Mobile (320px+)**: Single column, stacked layout, hamburger menu
- **Tablet (768px+)**: Two-column layouts, expanded menu
- **Desktop (1024px+)**: Full three-column layouts, hover effects

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new page in `src/app/[page-name]/page.tsx`
2. Use the `PageTemplate` component for consistent layout
3. Add navigation links to `Header.tsx` and `Footer.tsx`

### Customizing Styles

The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`. Global styles are in `src/app/globals.css`.

## Deployment

The website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker**

Make sure to set up environment variables in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile, tablet, and desktop
5. Submit a pull request

## License

This project is licensed under the MIT License.
