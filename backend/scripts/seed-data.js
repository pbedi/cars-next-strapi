/**
 * Seed script to populate initial content
 *
 * To run this script:
 * 1. Stop the Strapi server (Ctrl+C)
 * 2. Run: cd backend && npx strapi console
 * 3. Copy and paste the content of this file (starting from line 10)
 * 4. Restart the server: npm run dev:backend
 */

const sampleCarSeries = [
  {
    name: 'Series 1',
    slug: 'series-1',
    description: 'Classic elegance redefined with timeless design and modern performance.',
    hero: {
      title: 'Series 1 Collection',
      subtitle: 'Classic Elegance Redefined',
      backgroundImage: '/images/hero/hero-car-1.jpg',
    },
    carousel: {
      title: 'Series 1 Gallery',
      images: [
        '/images/gallery/series1.jpg',
        '/images/cars/series-1/car-1.jpg',
        '/images/cars/series-1/car-2.jpg',
        '/images/cars/series-1/car-3.jpg',
      ]
    },
    specifications: '## Specifications\n\n- Engine: Classic V8\n- Power: 300HP\n- Top Speed: 180mph\n- 0-60mph: 4.2 seconds',
    price: 85000,
    availability: 'available',
    publishedAt: new Date(),
  },
  {
    name: '300 Series',
    slug: '300',
    description: 'Power meets sophistication in our premium 300 series collection.',
    hero: {
      title: '300 Series Collection',
      subtitle: 'Power Meets Sophistication',
      backgroundImage: '/images/hero/hero-car-2.jpg',
    },
    carousel: {
      title: '300 Series Gallery',
      images: [
        '/images/gallery/300.jpg',
        '/images/cars/300/car-1.jpg',
        '/images/cars/300/car-2.jpg',
        '/images/cars/300/car-3.jpg',
      ]
    },
    specifications: '## Specifications\n\n- Engine: Twin Turbo V8\n- Power: 450HP\n- Top Speed: 200mph\n- 0-60mph: 3.8 seconds',
    price: 125000,
    availability: 'available',
    publishedAt: new Date(),
  },
  {
    name: '356 Heritage',
    slug: '356',
    description: 'Timeless automotive art that represents the pinnacle of design excellence.',
    hero: {
      title: '356 Heritage Collection',
      subtitle: 'Timeless Automotive Art',
      backgroundImage: '/images/hero/hero-car.jpg',
    },
    carousel: {
      title: '356 Heritage Gallery',
      images: [
        '/images/gallery/spyder.jpg',
        '/images/cars/356/car-1.jpg',
        '/images/cars/356/car-2.jpg',
        '/images/cars/356/car-3.jpg',
      ]
    },
    specifications: '## Specifications\n\n- Engine: Flat-6\n- Power: 280HP\n- Top Speed: 165mph\n- 0-60mph: 4.8 seconds',
    price: 95000,
    availability: 'available',
    publishedAt: new Date(),
  },
  {
    name: 'Landrover',
    slug: 'landrover',
    description: 'Built for adventure, designed for excellence. The ultimate off-road experience.',
    hero: {
      title: 'Landrover Collection',
      subtitle: 'Adventure Awaits',
      backgroundImage: '/images/hero/hero-car-1.jpg',
    },
    carousel: {
      title: 'Landrover Gallery',
      images: [
        '/images/gallery/landjunior.jpg',
        '/images/cars/land-junior/car-1.jpg',
        '/images/cars/land-junior/car-2.jpg',
        '/images/cars/land-junior/car-3.jpg',
      ]
    },
    specifications: '## Specifications\n\n- Engine: V8 Diesel\n- Power: 350HP\n- Top Speed: 130mph\n- 0-60mph: 6.2 seconds',
    price: 75000,
    availability: 'available',
    publishedAt: new Date(),
  },
];

const samplePages = [
  {
    title: 'About JuniorCars',
    slug: 'about',
    description: 'Learn about our passion for premium automotive excellence.',
    hero: {
      title: 'About JuniorCars',
      subtitle: 'Passion for Automotive Excellence',
      backgroundImage: '/images/hero/hero-car.jpg',
    },
    content: '## Our Story\n\nJuniorCars represents the pinnacle of automotive excellence...',
    publishedAt: new Date(),
  },
  {
    title: 'Contact Us',
    slug: 'contact',
    description: 'Get in touch with our team of automotive experts.',
    hero: {
      title: 'Contact Us',
      subtitle: 'Get In Touch',
      backgroundImage: '/images/hero/hero-car-2.jpg',
    },
    content: '## Contact Information\n\nReady to discuss your automotive needs?...',
    publishedAt: new Date(),
  },
];

module.exports = async ({ strapi }) => {
  console.log('🌱 Starting data seeding...');

  try {
    // Seed Car Series
    for (const carData of sampleCarSeries) {
      const existing = await strapi.entityService.findMany('api::car-series.car-series', {
        filters: { slug: carData.slug }
      });

      if (!existing || existing.length === 0) {
        await strapi.entityService.create('api::car-series.car-series', {
          data: carData
        });
        console.log(`✅ Created car series: ${carData.name}`);
      }
    }

    // Seed Pages
    for (const pageData of samplePages) {
      const existing = await strapi.entityService.findMany('api::page.page', {
        filters: { slug: pageData.slug }
      });

      if (!existing || existing.length === 0) {
        await strapi.entityService.create('api::page.page', {
          data: pageData
        });
        console.log(`✅ Created page: ${pageData.title}`);
      }
    }

    console.log('🎉 Data seeding completed successfully!');

  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};
