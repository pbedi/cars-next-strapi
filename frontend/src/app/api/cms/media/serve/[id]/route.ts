import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/cms/lib/prisma-client';

const db = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const media = await db.media.findUnique({
      where: { id: params.id }
    });

    if (!media) {
      return new NextResponse('Media not found', { status: 404 });
    }

    // Extract the base64 data from the data URL
    const [header, base64Data] = media.url.split(',');
    
    if (!base64Data) {
      return new NextResponse('Invalid media data', { status: 400 });
    }

    // Convert base64 to buffer
    const buffer = Buffer.from(base64Data, 'base64');

    // Return the image with proper headers
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': media.mimeType || 'application/octet-stream',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving media:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
