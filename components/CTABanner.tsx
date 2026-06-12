'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, HelpCircle, Rocket } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnLink?: string;
}

export default function CTABanner({
  title = "Ready to Transform Your Business?",
  subtitle = "Contact our expert engineering team today to build a secure, high-octane solution customized exactly for your scale and goals.",
  btnText = "Get a Free Proposal",
  btnLink = "/contact"
}: CTABannerProps) {
  return (
    <section id="custom-cta-banner" className="py-20 relative overflow-hidden bg-gradient-to-r from-[#1B3A5C] via-[#16416B] to-[#2A8C9E] text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,184,75,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#3AA6B5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#E8B84B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#F0C674]">
            <Rocket className="w-3.5 h-3.5" />
            <span>Launch Your Idea Into Reality</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            {title}
          </h2>

          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href={btnLink}
              id="cta-primary-action-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-display text-base font-bold text-[#1B3A5C] bg-gradient-to-r from-[#E8B84B] to-[#F0C674] hover:from-white hover:to-white hover:text-[#1B3A5C] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#E8B84B]/20"
            >
              <span>{btnText}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              href="/services"
              id="cta-secondary-action-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-display text-base font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-[#3AA6B5]" />
              <span>Explore Services</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
