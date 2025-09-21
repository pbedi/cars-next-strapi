#!/usr/bin/env node

/**
 * Populate CMS with existing frontend content
 * This script migrates the hardcoded content from the frontend pages into our custom CMS
 */

const { PrismaClient } = require('../src/lib/cms/lib/prisma-client');

const db = new PrismaClient();

// Sample media files (using placeholder images for now)
const mediaFiles = [
  {
    filename: 'hero-car-main',
    originalName: 'hero-car.jpg',
    url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01NzUgMzUwSDYyNVY0MDBINzc1VjM1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTU1MCA0MDBINTc1VjQyNUg1NTBWNDAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNjI1IDQwMEg2NTBWNDI1SDYyNVY0MDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik01NzUgNDI1SDYyNVY0NTBINTc1VjQyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTU1MCA0NTBINTc1VjQ3NUg1NTBWNDUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNjI1IDQ1MEg2NTBWNDc1SDYyNVY0NTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iNTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+SnVuaW9yQ2FycyBIZXJvPC90ZXh0Pgo8L3N2Zz4K',
    altText: 'JuniorCars Hero Image',
    size: 150000,
    mimeType: 'image/svg+xml',
    width: 1200,
    height: 800
  },
  {
    filename: 'series1-gallery-1',
    originalName: 'series1.jpg',
    url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNzUgMjUwSDQyNVYzMDBIMzc1VjI1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzMDBIMzc1VjMyNUgzNTBWMzAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDMwMEg0NTBWMzI1SDQyNVYzMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNzUgMzI1SDQyNVYzNTBIMzc1VjMyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzNTBIMzc1VjM3NUgzNTBWMzUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDM1MEg0NTBWMzc1SDQyNVYzNTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+U2VyaWVzIDEgQ29sbGVjdGlvbjwvdGV4dD4KPC9zdmc+Cg==',
    altText: 'Series 1 Collection',
    size: 120000,
    mimeType: 'image/svg+xml',
    width: 800,
    height: 600
  },
  {
    filename: '300-gallery-1',
    originalName: '300.jpg',
    url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNzUgMjUwSDQyNVYzMDBIMzc1VjI1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzMDBIMzc1VjMyNUgzNTBWMzAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDMwMEg0NTBWMzI1SDQyNVYzMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNzUgMzI1SDQyNVYzNTBIMzc1VjMyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzNTBIMzc1VjM3NUgzNTBWMzUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDM1MEg0NTBWMzc1SDQyNVYzNTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+MzAwIFNlcmllczwvdGV4dD4KPC9zdmc+Cg==',
    altText: '300 Series',
    size: 110000,
    mimeType: 'image/svg+xml',
    width: 800,
    height: 600
  },
  {
    filename: '356-gallery-1',
    originalName: 'spyder.jpg',
    url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNzUgMjUwSDQyNVYzMDBIMzc1VjI1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzMDBIMzc1VjMyNUgzNTBWMzAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDMwMEg0NTBWMzI1SDQyNVYzMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNzUgMzI1SDQyNVYzNTBIMzc1VjMyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzNTBIMzc1VjM3NUgzNTBWMzUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDM1MEg0NTBWMzc1SDQyNVYzNTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+MzU2IEhlcml0YWdlPC90ZXh0Pgo8L3N2Zz4K',
    altText: '356 Heritage',
    size: 115000,
    mimeType: 'image/svg+xml',
    width: 800,
    height: 600
  },
  {
    filename: 'landrover-gallery-1',
    originalName: 'landjunior.jpg',
    url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNzUgMjUwSDQyNVYzMDBIMzc1VjI1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzMDBIMzc1VjMyNUgzNTBWMzAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDMwMEg0NTBWMzI1SDQyNVYzMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0zNzUgMzI1SDQyNVYzNTBIMzc1VjMyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTM1MCAzNTBIMzc1VjM3NUgzNTBWMzUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDI1IDM1MEg0NTBWMzc1SDQyNVYzNTBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+TGFuZHJvdmVyIEFkdmVudHVyZTwvdGV4dD4KPC9zdmc+Cg==',
    altText: 'Landrover Adventure',
    size: 125000,
    mimeType: 'image/svg+xml',
    width: 800,
    height: 600
  }
];

// Pages content from the frontend
const pagesData = [
  {
    title: 'Home',
    slug: 'home',
    heroData: {
      title: 'JuniorCars',
      subtitle: 'Premium Automotive Collection',
      description: 'Discover our curated collection of classic and modern vehicles, featuring the finest in automotive excellence.',
      imageUrl: '/images/hero/hero-car.jpg',
      hasVideo: false
    },
    carouselData: {
      title: 'Featured Collection',
      images: [
        { title: 'Series 1 Collection', description: 'Discover our premium Series 1 automotive collection' },
        { title: '300 Series', description: 'Experience the power and elegance of the 300 series' },
        { title: '356 Heritage', description: 'Timeless design meets modern performance' },
        { title: 'Landrover Adventure', description: 'Built for adventure, designed for excellence' }
      ]
    },
    content: {
      sections: [
        {
          type: 'text',
          title: 'Welcome to JuniorCars',
          content: 'We specialize in premium automotive collections, featuring carefully selected vehicles from the Series 1, 300, 356, and Landrover collections. Each vehicle in our collection represents the pinnacle of automotive craftsmanship and design.'
        },
        {
          type: 'features',
          items: [
            { icon: 'S1', title: 'Series 1', description: 'Classic elegance redefined' },
            { icon: '300', title: '300 Series', description: 'Power meets sophistication' },
            { icon: '356', title: '356 Heritage', description: 'Timeless automotive art' },
            { icon: 'LR', title: 'Landrover', description: 'Adventure awaits' }
          ]
        }
      ]
    },
    seoData: {
      metaTitle: 'JuniorCars - Premium Automotive Collection',
      metaDescription: 'Discover our curated collection of classic and modern vehicles, featuring the finest in automotive excellence from Series 1, 300, 356, and Landrover collections.',
      keywords: ['junior cars', 'automotive collection', 'classic cars', 'series 1', '300 series', '356', 'landrover']
    },
    published: true
  },
  {
    title: 'Our Car Collection',
    slug: 'cars',
    heroData: {
      title: 'Our Car Collection',
      subtitle: 'Premium Automotive Excellence',
      description: 'Explore our carefully curated collection of classic and modern vehicles',
      imageUrl: '/images/cars-hero.jpg'
    },
    content: {
      sections: [
        {
          type: 'text',
          title: 'Choose Your Series',
          content: 'Each series represents a unique blend of heritage, performance, and craftsmanship. Discover the collection that speaks to your automotive passion.'
        }
      ]
    },
    seoData: {
      metaTitle: 'Car Collection - JuniorCars Premium Automotive',
      metaDescription: 'Explore our carefully curated collection of classic and modern vehicles including Series 1, 300, 356, and Landrover collections.',
      keywords: ['car collection', 'automotive', 'classic cars', 'premium vehicles']
    },
    published: true
  }
];

// Car series data from the frontend
const carSeriesData = [
  {
    name: 'Series 1',
    slug: 'series-1',
    description: 'Classic elegance redefined with modern performance',
    heroData: {
      title: 'Series 1 Collection',
      subtitle: 'Classic Elegance Redefined',
      description: 'Experience the timeless beauty and sophisticated engineering of our Series 1 collection',
      imageUrl: '/images/hero/hero-car-1.jpg'
    },
    carouselData: {
      title: 'Series 1 Gallery',
      images: [
        { title: 'Classic Elegance', description: 'The timeless design that started it all' },
        { title: 'Luxurious Interior', description: 'Handcrafted details and premium materials' },
        { title: 'Powerful Performance', description: 'Engineering excellence under the hood' },
        { title: 'Iconic Profile', description: 'A silhouette that defines automotive beauty' }
      ]
    },
    specifications: {
      engine: 'Classic V8',
      power: '250 HP',
      transmission: 'Manual 5-speed',
      acceleration: '0-60 mph in 6.5s',
      topSpeed: '140 mph',
      features: ['Handcrafted leather interior', 'Chrome detailing', 'Classic instrumentation', 'Premium sound system']
    },
    price: 85000,
    published: true
  },
  {
    name: '300 Series',
    slug: '300',
    description: 'Power meets sophistication in every detail',
    heroData: {
      title: '300 Series Collection',
      subtitle: 'Power Meets Sophistication',
      description: 'Experience the perfect balance of raw power and refined elegance in our 300 Series',
      imageUrl: '/images/hero/300-hero.jpg'
    },
    carouselData: {
      title: '300 Series Gallery',
      images: [
        { title: 'Aggressive Styling', description: 'Bold design that commands attention' },
        { title: 'Performance Interior', description: 'Sport-tuned cabin with premium finishes' },
        { title: 'Powerful Engine', description: 'High-performance powertrain engineering' },
        { title: 'Dynamic Profile', description: 'Aerodynamic excellence meets visual impact' }
      ]
    },
    specifications: {
      engine: 'Turbocharged V6',
      power: '350 HP',
      transmission: 'Automatic 8-speed',
      acceleration: '0-60 mph in 5.2s',
      topSpeed: '155 mph',
      features: ['Sport leather seats', 'Performance suspension', 'Digital cockpit', 'Premium audio system']
    },
    price: 95000,
    published: true
  },
  {
    name: '356 Heritage',
    slug: '356',
    description: 'Timeless automotive art and engineering excellence',
    heroData: {
      title: '356 Heritage Collection',
      subtitle: 'Timeless Automotive Art',
      description: 'Discover the legendary 356 Heritage, where classic design meets modern engineering',
      imageUrl: '/images/hero/356-hero.jpg'
    },
    carouselData: {
      title: '356 Heritage Gallery',
      images: [
        { title: 'Classic Lines', description: 'Iconic silhouette that defined an era' },
        { title: 'Vintage Interior', description: 'Authentic details with modern comfort' },
        { title: 'Heritage Engine', description: 'Time-tested performance and reliability' },
        { title: 'Collector\'s Dream', description: 'Investment-grade automotive artistry' }
      ]
    },
    specifications: {
      engine: 'Air-cooled Flat-4',
      power: '180 HP',
      transmission: 'Manual 4-speed',
      acceleration: '0-60 mph in 7.8s',
      topSpeed: '125 mph',
      features: ['Authentic gauges', 'Vintage leather', 'Chrome accents', 'Heritage certification']
    },
    price: 125000,
    published: true
  },
  {
    name: 'Landrover',
    slug: 'landrover',
    description: 'Built for adventure, designed for excellence',
    heroData: {
      title: 'Landrover Adventure Collection',
      subtitle: 'Built for Adventure',
      description: 'Conquer any terrain with our rugged yet refined Landrover collection',
      imageUrl: '/images/hero/landrover-hero.jpg'
    },
    carouselData: {
      title: 'Landrover Gallery',
      images: [
        { title: 'Rugged Capability', description: 'Unmatched off-road performance' },
        { title: 'Luxury Interior', description: 'Premium comfort in any environment' },
        { title: 'Advanced Systems', description: 'Cutting-edge technology for every adventure' },
        { title: 'Iconic Design', description: 'Distinctive styling that stands apart' }
      ]
    },
    specifications: {
      engine: 'Supercharged V8',
      power: '400 HP',
      transmission: 'Automatic 8-speed',
      acceleration: '0-60 mph in 5.8s',
      topSpeed: '130 mph',
      features: ['All-terrain capability', 'Luxury seating', 'Advanced traction control', 'Premium sound system']
    },
    price: 110000,
    published: true
  }
];

async function populateCMS() {
  try {
    console.log('🚀 Starting CMS population with existing content...\n');

    // 1. Create media files
    console.log('📸 Creating media files...');
    const createdMedia = [];
    for (const media of mediaFiles) {
      const created = await db.media.create({ data: media });
      createdMedia.push(created);
      console.log(`   ✅ Created: ${media.originalName}`);
    }

    // 2. Create pages
    console.log('\n📄 Creating pages...');
    for (const page of pagesData) {
      const created = await db.page.create({ data: page });
      console.log(`   ✅ Created page: ${page.title} (/${page.slug})`);
    }

    // 3. Create car series
    console.log('\n🚗 Creating car series...');
    for (const carSeries of carSeriesData) {
      const created = await db.carSeries.create({ data: carSeries });
      console.log(`   ✅ Created car series: ${carSeries.name} (/${carSeries.slug})`);
    }

    console.log('\n🎉 CMS population completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   • ${mediaFiles.length} media files created`);
    console.log(`   • ${pagesData.length} pages created`);
    console.log(`   • ${carSeriesData.length} car series created`);

    console.log('\n🔗 Available content:');
    console.log('   • Homepage: / (from CMS)');
    console.log('   • Cars page: /cars (from CMS)');
    console.log('   • Series 1: /cars/series-1 (from CMS)');
    console.log('   • Admin: /admin (manage content)');

  } catch (error) {
    console.error('❌ Error populating CMS:', error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

// Run the population
if (require.main === module) {
  populateCMS()
    .then(() => {
      console.log('\n✅ CMS population script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ CMS population script failed:', error);
      process.exit(1);
    });
}

module.exports = { populateCMS };
