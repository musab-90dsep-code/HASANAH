'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'EN' | 'BN';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const dictionary: Record<string, Record<string, string>> = {
  EN: {
    // Navigation & Common Buttons
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.whyWebsite': 'Why a Website?',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.contactBtn': 'Contact Us',
    'nav.getConsultation': 'Get a Free Consultation',
    'nav.solutions': 'Solutions',
    
    // Hero Section
    'hero.badge': 'Empowering Businesses Digitally',
    'hero.tagline': 'Bespoke Software &',
    'hero.taglineGradient': 'Digital Solutions',
    'hero.title': 'Bespoke Software & Digital Solutions',
    'hero.sub': 'We craft premium custom software, enterprise systems, and high-performance websites that elevate your brand and drive sustainable business growth.',
    'hero.ctaConsult': 'Start Your Project',
    'hero.ctaWork': 'View Our Work',
    'hero.experience': 'Years of Experience',
    'hero.team': 'Experts Team',
    'hero.projects': 'Completed Projects',

    // About section / Page Title
    'about.title': 'About Hasanah Tech Solutions',
    'about.sub': 'We are a next-generation technology partner dedicated to building bespoke digital experiences with structural elegance and peak operational performance.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To empower businesses global through premium software products, automation tools, and strategic technological design.',
    'about.mission': 'Our Mission',
    'about.missionText': 'Building scalable, highly secure web systems that automate repetitive engineering, optimize workflows, and bring ideas to reality.',
    
    // Services
    'services.title': 'Our Core Expertise',
    'services.sub': 'Bespoke design, engineered to perform.',
    
    // Footer Details
    'footer.description': 'Empowering enterprises and startups worldwide with premium digital products and expert software solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe to our tech digest.',
    'footer.subscribeBtn': 'Subscribe',
    'footer.copyright': 'All rights reserved.',
    'footer.emailPlaceholder': 'Your active email address',
    'footer.successMsg': 'Thank you! You are now subscribed to our newsletter.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<Language>('EN');

  const handleSetLanguage = () => {
    // No-op - English only
  };

  const t = (key: string): string => {
    return dictionary['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
