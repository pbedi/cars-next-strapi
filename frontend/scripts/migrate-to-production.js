const { PrismaClient } = require('../src/lib/cms/lib/prisma-client')
const bcrypt = require('bcryptjs')

async function migrateToProduction() {
  const prisma = new PrismaClient()

  try {
    console.log('🚀 Starting production database migration...')

    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@juniorcars.com' }
    })

    if (!existingAdmin) {
      console.log('👤 Creating admin user...')

      // Create admin user
      const hashedPassword = await bcrypt.hash('admin123', 12)
      const adminUser = await prisma.user.create({
        data: {
          email: 'admin@juniorcars.com',
          passwordHash: hashedPassword,
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin',
        }
      })
      console.log('✅ Admin user created:', adminUser.email)
    } else {
      console.log('👤 Admin user already exists')
    }

    // Create sample page if none exist
    const pageCount = await prisma.page.count()
    if (pageCount === 0) {
      console.log('📄 Creating sample page...')

      const samplePage = await prisma.page.create({
        data: {
          title: 'Welcome to JuniorCars CMS',
          slug: 'welcome',
          content: `<h1>Welcome to Your Custom CMS!</h1><p>Congratulations! Your JuniorCars CMS is now running on a production PostgreSQL database.</p><h2>What's Next?</h2><ul><li>✅ Database: PostgreSQL (Supabase)</li><li>✅ Authentication: Working</li><li>✅ Admin Interface: Ready</li><li>✅ API Endpoints: Functional</li><li>✅ Content Management: Active</li></ul><p>You can now start creating your content and managing your car series!</p>`,
          seoData: {
            metaTitle: 'Welcome to JuniorCars CMS',
            metaDescription: 'Your custom CMS is ready for content management with full PostgreSQL support.'
          },
          published: true,
        }
      })
      console.log('✅ Sample page created:', samplePage.title)
    }

    // Create sample car series if none exist
    const carSeriesCount = await prisma.carSeries.count()
    if (carSeriesCount === 0) {
      console.log('🚗 Creating sample car series...')

      const sampleCarSeries = await prisma.carSeries.create({
        data: {
          name: 'Executive Collection',
          slug: 'executive-collection',
          description: 'Premium luxury vehicles for the discerning driver.',
          specifications: {
            engine: 'V8 Turbo',
            power: '500hp',
            acceleration: '0-60mph in 4.2s',
            topSpeed: '180mph',
            fuelEconomy: '25mpg combined',
            features: [
              'Premium leather interior',
              'Advanced driver assistance',
              'Panoramic sunroof',
              'Premium sound system',
              'Wireless charging'
            ]
          },
          price: 85000,
          heroData: {
            title: 'Executive Collection',
            subtitle: 'Where luxury meets performance',
            backgroundImage: '/images/cars/executive/hero.jpg',
            ctaText: 'Explore Collection',
            ctaUrl: '/cars/executive-collection'
          },
          carouselData: {
            items: [
              {
                image: '/images/cars/executive/exterior-1.jpg',
                title: 'Elegant Exterior',
                description: 'Sophisticated design meets aerodynamic efficiency'
              },
              {
                image: '/images/cars/executive/interior-1.jpg',
                title: 'Luxurious Interior',
                description: 'Premium materials and cutting-edge technology'
              }
            ]
          },
          published: true,
        }
      })
      console.log('✅ Sample car series created:', sampleCarSeries.name)
    }

    // Create sample navigation if none exist
    const navCount = await prisma.navigationItem.count()
    if (navCount === 0) {
      console.log('🧭 Creating sample navigation...')

      const navItems = [
        {
          label: 'Home',
          url: '/',
          orderIndex: 1,
          isActive: true,
        },
        {
          label: 'Cars',
          url: '/cars',
          orderIndex: 2,
          isActive: true,
        },
        {
          label: 'About',
          url: '/about',
          orderIndex: 3,
          isActive: true,
        },
        {
          label: 'Contact',
          url: '/contact',
          orderIndex: 4,
          isActive: true,
        }
      ]

      for (const item of navItems) {
        await prisma.navigationItem.create({ data: item })
      }
      console.log('✅ Sample navigation created')
    }

    console.log('🎉 Production database migration completed successfully!')
    console.log('')
    console.log('📊 Database Summary:')
    console.log(`   Users: ${await prisma.user.count()}`)
    console.log(`   Pages: ${await prisma.page.count()}`)
    console.log(`   Car Series: ${await prisma.carSeries.count()}`)
    console.log(`   Navigation Items: ${await prisma.navigationItem.count()}`)
    console.log(`   Content Blocks: ${await prisma.contentBlock.count()}`)
    console.log(`   Media Files: ${await prisma.media.count()}`)
    console.log('')
    console.log('🚀 Your CMS is ready for production!')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateToProduction()
    .then(() => {
      console.log('✅ Migration script completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Migration script failed:', error)
      process.exit(1)
    })
}

module.exports = { migrateToProduction }
