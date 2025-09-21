#!/usr/bin/env node

// Simple API endpoint testing script for JuniorCars CMS
// Run with: node test-cms-api.js

const BASE_URL = 'http://localhost:3000';

async function testEndpoint(method, url, data = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);
    const result = await response.json();
    
    console.log(`${response.ok ? '✅' : '❌'} ${method} ${url} - Status: ${response.status}`);
    if (!response.ok) {
      console.log(`   Error: ${result.error || 'Unknown error'}`);
    } else {
      console.log(`   Success: ${result.message || 'OK'}`);
      if (result.data && Array.isArray(result.data)) {
        console.log(`   Data: ${result.data.length} items`);
      } else if (result.data) {
        console.log(`   Data: ${result.data.title || result.data.name || 'Item'}`);
      }
    }
    return result;
  } catch (error) {
    console.log(`❌ ${method} ${url} - Error: ${error.message}`);
    return null;
  }
}

async function runTests() {
  console.log('🧪 Testing JuniorCars Custom CMS API\n');
  console.log('📡 Base URL:', BASE_URL);
  console.log('⏰ Starting tests...\n');

  // Test 1: Authentication
  console.log('🔐 Testing Authentication...');
  const loginResult = await testEndpoint('POST', '/api/cms/auth/login', {
    email: 'admin@juniorcars.com',
    password: 'admin123'
  });

  if (loginResult && loginResult.success) {
    console.log(`   👤 Logged in as: ${loginResult.data.firstName} ${loginResult.data.lastName}`);
  }
  console.log('');

  // Test 2: Pages API
  console.log('📄 Testing Pages API...');
  
  // Get all pages
  await testEndpoint('GET', '/api/cms/pages');
  
  // Test 3: Car Series API
  console.log('\n🚗 Testing Car Series API...');
  
  // Get all car series
  await testEndpoint('GET', '/api/cms/car-series');
  
  // Test 4: Error handling
  console.log('\n⚠️ Testing Error Handling...');
  await testEndpoint('GET', '/api/cms/pages/invalid-id');
  
  console.log('\n🎉 API Testing Complete!');
  console.log('\n📊 Summary:');
  console.log('- Authentication API tested');
  console.log('- Pages API tested');
  console.log('- Car Series API tested');
  console.log('- Error handling tested');
  console.log('\n🚀 Check the results above to see if everything is working!');
}

// Run the tests
runTests().catch(console.error);
