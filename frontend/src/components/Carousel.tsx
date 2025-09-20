'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getStrapiMediaUrl } from '@/lib/strapi';
import { CarouselContent, CarouselImage } from '@/types/strapi';

interface CarouselProps {
  content?: CarouselContent;
  images?: Array<{
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  title?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function Carousel({
  content,
  images = [],
  title,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Extract data from Strapi content if provided
  const carouselTitle = content?.attributes.title || title || '';
  const carouselImages = content?.attributes.images?.data?.map((item: CarouselImage) => ({
    id: item.id.toString(),
    src: getStrapiMediaUrl(item.attributes.image.data.attributes.url),
    alt: item.attributes.image.data.attributes.alternativeText || item.attributes.title || '',
    title: item.attributes.title,
    description: item.attributes.description,
  })) || images;

  const totalImages = carouselImages.length;

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && totalImages > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, totalImages, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (totalImages === 0) {
    return (
      <div className={`w-full bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <section className={`w-full ${className}`}>
      {carouselTitle && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {carouselTitle}
          </h2>
        </div>
      )}

      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Carousel Container */}
        <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentIndex].src}
                alt={carouselImages[currentIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={currentIndex === 0}
              />

              {/* Image Overlay with Title/Description */}
              {(carouselImages[currentIndex].title || carouselImages[currentIndex].description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white">
                    {carouselImages[currentIndex].title && (
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {carouselImages[currentIndex].title}
                      </h3>
                    )}
                    {carouselImages[currentIndex].description && (
                      <p className="text-sm md:text-base text-gray-200">
                        {carouselImages[currentIndex].description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {showArrows && totalImages > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {showDots && totalImages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnail Navigation (Mobile) */}
        <div className="mt-4 md:hidden">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {carouselImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-primary-600 scale-105'
                    : 'border-gray-300'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
