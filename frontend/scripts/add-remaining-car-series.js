#!/usr/bin/env node

/**
 * Add remaining car series to CMS
 */

const { PrismaClient } = require('../src/lib/cms/lib/prisma-client');

const db = new PrismaClient();

// Remaining car series data (excluding Series 1 which already exists)
const remainingCarSeries = [
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

async function addRemainingCarSeries() {
  try {
    console.log('🚗 Adding remaining car series to CMS...\n');

    for (const carSeries of remainingCarSeries) {
      // Check if it already exists
      const existing = await db.carSeries.findUnique({
        where: { slug: carSeries.slug }
      });

      if (existing) {
        console.log(`   ⚠️  ${carSeries.name} already exists, skipping...`);
        continue;
      }

      const created = await db.carSeries.create({ data: carSeries });
      console.log(`   ✅ Created car series: ${carSeries.name} (/${carSeries.slug})`);
    }

    console.log('\n🎉 Car series addition completed!');
    
    // Show summary
    const allCarSeries = await db.carSeries.findMany({
      select: { name: true, slug: true, published: true }
    });
    
    console.log('\n📊 All car series in CMS:');
    allCarSeries.forEach(series => {
      console.log(`   • ${series.name} (/${series.slug}) - ${series.published ? 'Published' : 'Draft'}`);
    });

  } catch (error) {
    console.error('❌ Error adding car series:', error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

// Run the script
if (require.main === module) {
  addRemainingCarSeries()
    .then(() => {
      console.log('\n✅ Car series addition script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Car series addition script failed:', error);
      process.exit(1);
    });
}

module.exports = { addRemainingCarSeries };
