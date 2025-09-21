const { PrismaClient } = require('../src/lib/cms/lib/prisma-client');
const fs = require('fs');
const path = require('path');

const db = new PrismaClient();

async function createMediaFromHeroImages() {
  try {
    console.log('🗑️ Clearing existing media files...');
    
    // Delete all existing media
    const deleteResult = await db.media.deleteMany({});
    console.log(`✅ Deleted ${deleteResult.count} existing media files`);
    
    console.log('📁 Reading hero images...');
    
    const heroImagesPath = path.join(__dirname, '../public/images/hero');
    const imageFiles = fs.readdirSync(heroImagesPath).filter(file => 
      file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    );
    
    console.log(`Found ${imageFiles.length} hero images:`, imageFiles);
    
    for (const imageFile of imageFiles) {
      const imagePath = path.join(heroImagesPath, imageFile);
      const imageBuffer = fs.readFileSync(imagePath);
      const base64Data = imageBuffer.toString('base64');
      
      // Determine MIME type
      const ext = path.extname(imageFile).toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === '.png') mimeType = 'image/png';
      if (ext === '.gif') mimeType = 'image/gif';
      if (ext === '.webp') mimeType = 'image/webp';
      
      // Create data URL
      const dataUrl = `data:${mimeType};base64,${base64Data}`;
      
      // Generate clean filename and alt text
      const cleanName = imageFile.replace(/\.[^/.]+$/, ''); // Remove extension
      const altText = cleanName
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); // Title case
      
      // Create media record
      const mediaFile = await db.media.create({
        data: {
          filename: `cms_${Date.now()}_${cleanName}`,
          originalName: imageFile,
          url: dataUrl,
          altText: altText,
          size: imageBuffer.length,
          mimeType: mimeType,
          width: null, // We'll set default dimensions since we can't easily get them server-side
          height: null
        }
      });
      
      console.log(`✅ Created media file: ${altText} (${Math.round(imageBuffer.length / 1024)}KB)`);
    }
    
    // Also create a few additional placeholder images for variety
    const additionalImages = [
      {
        filename: 'series-1-collection.svg',
        originalName: 'Series 1 Collection.svg',
        altText: 'Series 1 Collection',
        mimeType: 'image/svg+xml'
      },
      {
        filename: '300-series-placeholder.svg',
        originalName: '300 Series Placeholder.svg',
        altText: '300 Series',
        mimeType: 'image/svg+xml'
      }
    ];
    
    for (const placeholder of additionalImages) {
      const svgContent = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
    <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
  </linearGradient>
</defs>
<rect width="800" height="600" fill="url(#bg)"/>
<g transform="translate(200, 200)">
  <rect x="0" y="100" width="400" height="120" rx="20" fill="#9ca3af"/>
  <circle cx="100" cy="260" r="40" fill="#6b7280"/>
  <circle cx="300" cy="260" r="40" fill="#6b7280"/>
  <rect x="50" y="120" width="300" height="80" rx="10" fill="#d1d5db"/>
  <rect x="80" y="140" width="80" height="40" rx="5" fill="#f9fafb"/>
  <rect x="240" y="140" width="80" height="40" rx="5" fill="#f9fafb"/>
</g>
<text x="400" y="400" text-anchor="middle" fill="#6b7280" font-family="sans-serif" font-size="24" font-weight="500">${placeholder.altText}</text>
</svg>`;
      
      const base64 = Buffer.from(svgContent).toString('base64');
      const dataUrl = `data:image/svg+xml;base64,${base64}`;
      
      await db.media.create({
        data: {
          filename: placeholder.filename,
          originalName: placeholder.originalName,
          url: dataUrl,
          altText: placeholder.altText,
          size: svgContent.length,
          mimeType: placeholder.mimeType,
          width: 800,
          height: 600
        }
      });
      
      console.log(`✅ Created placeholder: ${placeholder.altText}`);
    }
    
    console.log('🎉 All media files created successfully!');
    
    // Show final count
    const totalMedia = await db.media.count();
    console.log(`📊 Total media files in database: ${totalMedia}`);
    
    await db.$disconnect();
  } catch (error) {
    console.error('❌ Error:', error.message);
    await db.$disconnect();
    process.exit(1);
  }
}

createMediaFromHeroImages();
