'use client';

import Link from 'next/link';
import { Home, ChevronRight, Share2, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbLink?: { name: string; href: string };
  currentTabName: string;
}

export default function PageHeader({ title, description, breadcrumbLink, currentTabName }: PageHeaderProps) {
  return (
    <div id="page-header" className="relative bg-[#0b1523] border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white">
      {/* Visual background flourishes */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-[#2A8C9E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-96 h-96 bg-[#E8B84B]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Ambient background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            {/* Breadcrumb Trail */}
            <nav className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold tracking-wide text-gray-400 capitalize bg-white/5 py-1.5 px-3 rounded-full w-fit mx-auto md:mx-0">
              <Link href="/" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Home className="w-3 h-3 text-[#3AA6B5]" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              {breadcrumbLink && (
                <>
                  <Link href={breadcrumbLink.href} className="hover:text-white transition-colors">
                    {breadcrumbLink.name}
                  </Link>
                  <ChevronRight className="w-3 h-3 text-white/40" />
                </>
              )}
              <span className="text-white font-bold">{currentTabName}</span>
            </nav>

            {/* Header Titles */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          </div>

          {/* Interactive highlight elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex flex-col items-center justify-center p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl relative w-48 shrink-0 text-center space-y-2 group"
          >
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#E8B84B] to-[#F0C674] items-center justify-center flex shadow-md text-[#1B3A5C]">
              <Award className="w-4 h-4 animate-spin-slow" />
            </div>
            
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#3AA6B5]">ISO Certified 9001</p>
            <p className="font-display font-bold text-lg text-white">Trust, Excellence & Safety</p>
            <div className="flex items-center space-x-1.5 text-xs text-gray-400">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Solutions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
