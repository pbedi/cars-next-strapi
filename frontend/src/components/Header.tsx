'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Cars',
    href: '/cars',
    children: [
      { title: 'Series 1', href: '/cars/series-1' },
      { title: '300', href: '/cars/300' },
      { title: '356', href: '/cars/356' },
      { title: 'Landrover', href: '/cars/landrover' },
    ],
  },
  { title: 'Wall Art', href: '/wall-art' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900" onClick={closeMenu}>
            JuniorCars
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            >
              <nav className="p-6">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors flex-1"
                          onClick={closeMenu}
                        >
                          {item.title}
                        </Link>
                        {item.children && (
                          <button
                            onClick={() => toggleSubmenu(item.title)}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                            aria-label={`Toggle ${item.title} submenu`}
                          >
                            <ChevronDown
                              className={`h-4 w-4 text-gray-600 transition-transform ${
                                activeSubmenu === item.title ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Submenu */}
                      <AnimatePresence>
                        {item.children && activeSubmenu === item.title && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 ml-4 space-y-2 border-l-2 border-gray-200 pl-4 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <Link
                                  href={child.href}
                                  className="block text-gray-600 hover:text-primary-600 transition-colors py-1"
                                  onClick={closeMenu}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
