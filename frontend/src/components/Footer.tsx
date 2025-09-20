'use client';

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';

// TikTok Icon Component (since it's not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface FooterProps {
  className?: string;
}

const menuLinks = [
  { title: 'Cars', href: '/cars' },
  { title: 'Wall Art', href: '/wall-art' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms & Conditions', href: '/terms' },
];

const socialLinks = [
  {
    title: 'Instagram',
    href: 'https://instagram.com/juniorcars',
    icon: Instagram,
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com/@juniorcars',
    icon: Youtube,
  },
  {
    title: 'TikTok',
    href: 'https://tiktok.com/@juniorcars',
    icon: TikTokIcon,
  },
];

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden space-y-8">
          {/* Column 1: Copyright and Legal Links */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              © {currentYear} JuniorCars. All rights reserved.
            </p>
            <div className="flex flex-col space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Main Menu Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-3">
              {menuLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label={`Follow us on ${social.title}`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3 Columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Column 1: Copyright and Legal Links */}
          <div>
            <p className="text-gray-400 text-sm mb-4">
              © {currentYear} JuniorCars. All rights reserved.
            </p>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Main Menu Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-3">
              {menuLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label={`Follow us on ${social.title}`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              JuniorCars
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
