'use client';

import { ReactNode } from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Layout from './Layout';
import { HeroContent, CarouselContent } from '@/types/strapi';

interface PageTemplateProps {
  title?: string;
  heroContent?: HeroContent;
  carouselContent?: CarouselContent;
  children?: ReactNode;
  className?: string;
  // Fallback props when Strapi content is not available
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroImageUrl?: string;
  heroVideoUrl?: string;
  heroHasVideo?: boolean;
  carouselTitle?: string;
  carouselImages?: Array<{
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
}

export default function PageTemplate({
  title,
  heroContent,
  carouselContent,
  children,
  className = '',
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImageUrl,
  heroVideoUrl,
  heroHasVideo,
  carouselTitle,
  carouselImages,
}: PageTemplateProps) {
  return (
    <Layout className={className}>
      {/* Hero Section */}
      <Hero
        content={heroContent}
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        imageUrl={heroImageUrl}
        videoUrl={heroVideoUrl}
        hasVideo={heroHasVideo}
      />

      {/* Additional Content */}
      {children && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </section>
      )}

      {/* Carousel Section */}
      {(carouselContent || carouselImages) && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Carousel
              content={carouselContent}
              title={carouselTitle}
              images={carouselImages}
            />
          </div>
        </section>
      )}
    </Layout>
  );
}
