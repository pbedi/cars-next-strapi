import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JuniorCars - Premium Car Collection',
  description: 'Discover our premium collection of cars, wall art, and automotive excellence.',
  keywords: 'cars, automotive, wall art, Series 1, 300, 356, Landrover',
  authors: [{ name: 'JuniorCars' }],
  creator: 'JuniorCars',
  publisher: 'JuniorCars',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'JuniorCars - Premium Car Collection',
    description: 'Discover our premium collection of cars, wall art, and automotive excellence.',
    url: '/',
    siteName: 'JuniorCars',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JuniorCars',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JuniorCars - Premium Car Collection',
    description: 'Discover our premium collection of cars, wall art, and automotive excellence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
