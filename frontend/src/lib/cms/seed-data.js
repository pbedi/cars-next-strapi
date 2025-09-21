#!/usr/bin/env node

// Quick data seeding script for testing
const { PrismaClient } = require('./lib/prisma-client');

const prisma = new PrismaClient();

async function seedData() {
  console.log('🌱 Seeding test data...');

  try {
    // Create admin user (or find existing)
    let user = await prisma.user.findUnique({
      where: { email: 'admin@juniorcars.com' }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'admin@juniorcars.com',
          passwordHash: 'admin123', // In production, use bcrypt
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin',
        },
      });
      console.log('✅ Created admin user:', user.email);
    } else {
      console.log('✅ Admin user already exists:', user.email);
    }

    // Create test page
    const page = await prisma.page.create({
      data: {
        title: 'Welcome to JuniorCars',
        slug: 'home',
        content: {
          text: 'Welcome to our premium car collection',
          sections: ['hero', 'featured-cars', 'about']
        },
        heroData: {
          title: 'Premium Car Collection',
          subtitle: 'Discover Excellence',
          description: 'Explore our curated selection of premium vehicles',
          backgroundImage: '/images/hero-bg.jpg'
        },
        seoData: {
          title: 'JuniorCars - Premium Car Collection',
          description: 'Discover our amazing collection of premium cars',
          keywords: 'cars, premium, luxury, automotive'
        },
        published: true,
      },
    });
    console.log('✅ Created test page:', page.title);

    // Create test car series
    const carSeries = await prisma.carSeries.create({
      data: {
        name: 'Executive Series',
        slug: 'executive-series',
        description: 'Our premium executive car collection',
        price: 45000,
        specifications: {
          engine: 'V6 Turbo',
          power: '350hp',
          acceleration: '0-60 in 4.8s',
          topSpeed: '155mph',
          fuelEconomy: '28mpg combined'
        },
        heroData: {
          title: 'Executive Series',
          subtitle: 'Premium Performance',
          description: 'Experience luxury and performance combined',
          backgroundImage: '/images/exec-hero.jpg'
        },
        carouselData: {
          images: ['/images/exec-1.jpg', '/images/exec-2.jpg', '/images/exec-3.jpg'],
          features: ['Leather Interior', 'Premium Sound', 'Navigation', 'Sunroof']
        },
        published: true,
      },
    });
    console.log('✅ Created test car series:', carSeries.name);

    // Create navigation items
    const navItems = await Promise.all([
      prisma.navigationItem.create({
        data: {
          label: 'Home',
          url: '/',
          orderIndex: 1,
        },
      }),
      prisma.navigationItem.create({
        data: {
          label: 'Cars',
          url: '/cars',
          orderIndex: 2,
        },
      }),
      prisma.navigationItem.create({
        data: {
          label: 'About',
          url: '/about',
          orderIndex: 3,
        },
      }),
      prisma.navigationItem.create({
        data: {
          label: 'Contact',
          url: '/contact',
          orderIndex: 4,
        },
      }),
    ]);
    console.log('✅ Created navigation items:', navItems.length);

    console.log('🎉 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
