'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HasanahLogo from './HasanahLogo';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.portfolio', href: '/portfolio' },
  { key: 'nav.whyWebsite', href: '/why-website' },
  { key: 'nav.reviews', href: '/reviews' },
  { key: 'nav.contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const t = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050d18]/90 border-b border-white/5 backdrop-blur-md shadow-lg py-4 text-white'
            : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 group shrink-0" id="nav-logo-link">
              <HasanahLogo className="w-10 h-10 shrink-0" iconOnly={true} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-white">
                  Hasanah<span className="text-[#3AA6B5]"> Tech</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-300">
                  {t('nav.solutions')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" id="nav-menu-desktop">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:text-[#3AA6B5] ${
                      isActive ? 'text-[#3AA6B5] font-semibold' : 'text-gray-300'
                    }`}
                  >
                    <span>{t(link.key)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBg"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Interactive Section */}
            <div className="hidden lg:flex items-center space-x-4 animate-fade-in" id="nav-right-actions">
              {/* Consultation Button */}
              <Link
                href="/contact"
                id="navbar-cta-btn"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-[#2A8C9E] to-[#3AA6B5] hover:from-[#E8B84B] hover:to-[#F0C674] transition-all duration-500 transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-[#2A8C9E]/10"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t('nav.contactBtn')}</span>
              </Link>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex items-center lg:hidden space-x-3" id="nav-mobile-actions">
              <button
                id="mobile-hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg focus:outline-none text-white hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Toggle Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#050D18] flex flex-col justify-between p-6 pt-24 text-white"
            id="mobile-nav-overlay"
          >
            {/* Top background accent details */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#2A8C9E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#E8B84B]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Menu Links */}
            <div className="flex flex-col space-y-5 my-auto pl-4">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.key}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-display text-2xl font-bold tracking-tight py-1 hover:text-[#3AA6B5] transition-colors ${
                        isActive ? 'text-[#3AA6B5] border-l-4 border-[#3AA6B5] pl-3' : 'pl-0'
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Area inside Drawer */}
            <div className="border-t border-white/10 pt-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Hasanah Tech Solutions</span>
                <span>Innovate | Empower | Transform</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full font-display text-base font-bold text-white bg-gradient-to-r from-[#2A8C9E] to-[#3AA6B5] hover:scale-102 transition-transform duration-300"
              >
                {t('nav.getConsultation')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
