#!/usr/bin/env tsx

// Simple API test script
// Run with: npx tsx scripts/test-api.ts

import { db } from '../lib/db'

async function testDatabase() {
  console.log('🧪 Testing database connection...')
  
  try {
    // Test creating a user
    console.log('Creating test user...')
    const user = await db.user.create({
      data: {
        email: 'admin@juniorcars.com',
        passwordHash: 'hashed_password_here', // In real app, use bcrypt
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
      },
    })
    console.log('✅ User created:', user.email)

    // Test creating a page
    console.log('Creating test page...')
    const page = await db.page.create({
      data: {
        title: 'Test Page',
        slug: 'test-page',
        content: { text: 'This is a test page' },
        heroData: {
          title: 'Welcome to JuniorCars',
          subtitle: 'Premium Car Collection',
          description: 'Discover our amazing collection of cars',
        },
        published: true,
      },
    })
    console.log('✅ Page created:', page.title)

    // Test creating a car series
    console.log('Creating test car series...')
    const carSeries = await db.carSeries.create({
      data: {
        name: 'Series 1',
        slug: 'series-1',
        description: 'Our flagship car series',
        price: 25000,
        specifications: {
          engine: 'V6 Turbo',
          power: '300hp',
          acceleration: '0-60 in 5.2s',
        },
        published: true,
      },
    })
    console.log('✅ Car series created:', carSeries.name)

    // Test creating navigation items
    console.log('Creating test navigation...')
    const navItem = await db.navigationItem.create({
      data: {
        label: 'Home',
        url: '/',
        orderIndex: 1,
      },
    })
    console.log('✅ Navigation item created:', navItem.label)

    // Test querying data
    console.log('Querying all data...')
    const allPages = await db.page.findMany()
    const allCarSeries = await db.carSeries.findMany()
    const allNavItems = await db.navigationItem.findMany()
    
    console.log(`📊 Database contains:`)
    console.log(`   - ${allPages.length} pages`)
    console.log(`   - ${allCarSeries.length} car series`)
    console.log(`   - ${allNavItems.length} navigation items`)

    console.log('🎉 All tests passed! Database is working correctly.')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    await db.$disconnect()
  }
}

// Run the test
testDatabase()
