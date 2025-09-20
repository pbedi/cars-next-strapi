'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { getStrapiMediaUrl } from '@/lib/strapi';
import { HeroContent } from '@/types/strapi';

interface HeroProps {
  content?: HeroContent;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  hasVideo?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function Hero({
  content,
  title,
  subtitle,
  description,
  imageUrl,
  videoUrl,
  hasVideo = false,
  ctaText,
  ctaLink,
  className = '',
}: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Extract data from Strapi content if provided
  const heroTitle = content?.attributes.title || title || '';
  const heroSubtitle = content?.attributes.subtitle || subtitle || '';
  const heroDescription = content?.attributes.description || description || '';
  const heroImageUrl = content?.attributes.image?.data 
    ? getStrapiMediaUrl(content.attributes.image.data.attributes.url)
    : imageUrl || '';
  const heroVideoUrl = content?.attributes.video?.data
    ? getStrapiMediaUrl(content.attributes.video.data.attributes.url)
    : videoUrl || '';
  const heroHasVideo = content?.attributes.hasVideo ?? hasVideo;
  const heroCtaText = content?.attributes.ctaText || ctaText || '';
  const heroCtaLink = content?.attributes.ctaLink || ctaLink || '';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.muted = isMuted;
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, [isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoClick = () => {
    if (heroHasVideo) {
      togglePlay();
    }
  };

  return (
    <section className={`relative h-screen w-full overflow-hidden ${className}`}>
      {/* Background Media */}
      <div className="absolute inset-0">
        {heroHasVideo && heroVideoUrl ? (
          <div 
            className="relative w-full h-full cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              poster={heroImageUrl}
            >
              <source src={heroVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 right-4 flex space-x-2"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
            </motion.div>
          </div>
        ) : heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt={heroTitle}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {heroSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-4"
              >
                {heroSubtitle}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {heroTitle}
            </motion.h1>

            {heroDescription && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              >
                {heroDescription}
              </motion.p>
            )}

            {heroCtaText && heroCtaLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <a
                  href={heroCtaLink}
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  {heroCtaText}
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
