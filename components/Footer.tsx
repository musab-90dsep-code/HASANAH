'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import HasanahLogo from './HasanahLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer id="global-footer" className="bg-[#1B3A5C] text-gray-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative vector background meshes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#2A8C9E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#E8B84B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-2 group" id="footer-logo">
              <HasanahLogo className="w-10 h-10 shrink-0" iconOnly={true} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-white">
                  Hasanah<span className="text-[#3AA6B5]"> Tech</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                  {t('nav.solutions')}
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="flex space-x-3 pt-2" id="footer-social-icons">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <Github className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
                { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: <Facebook className="w-4 h-4" />, href: 'https://www.facebook.com/share/18vQKwqA6c/', label: 'Facebook' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#2A8C9E] hover:to-[#3AA6B5] transition-all duration-300 text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-white text-base font-bold tracking-tight border-l-2 border-[#3AA6B5] pl-2.5">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm" id="footer-quick-links">
              {[
                { key: 'nav.home', href: '/' },
                { key: 'nav.about', href: '/about' },
                { key: 'nav.services', href: '/services' },
                { key: 'nav.portfolio', href: '/portfolio' },
                { key: 'nav.whyWebsite', href: '/why-website' },
                { key: 'nav.reviews', href: '/reviews' },
                { key: 'nav.contact', href: '/contact' },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block text-gray-400"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-white text-base font-bold tracking-tight border-l-2 border-[#3AA6B5] pl-2.5">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2 text-sm" id="footer-services-links">
              {[
                { name: 'Web Application Development', href: '/services' },
                { name: 'Mobile App Development', href: '/services' },
                { name: 'AI & Machine Learning Solutions', href: '/services' },
                { name: 'Cloud & DevOps Solutions', href: '/services' },
                { name: 'Premium UI/UX Product Design', href: '/services' },
                { name: 'Custom ERP & Workflow Portals', href: '/services' },
              ].map((srv, idx) => (
                <li key={idx}>
                  <Link
                    href={srv.href}
                    className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block text-gray-400"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info & Newsletter */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-white text-base font-bold tracking-tight border-l-2 border-[#3AA6B5] pl-2.5">
              {t('footer.newsletter')}
            </h3>
            
            <ul className="space-y-3 text-sm text-gray-400" id="footer-contact-details">
               <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-[#3AA6B5] shrink-0 mt-0.5" />
                <span>40/D, Dilu Road, New Eskaton, Dhaka</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#3AA6B5] shrink-0" />
                <a href="tel:01670555719" className="hover:text-white transition-colors">01670555719</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#3AA6B5] shrink-0" />
                <a href="mailto:musabbinsharf321@gmail.com" className="hover:text-white transition-colors">musabbinsharf321@gmail.com</a>
              </li>
            </ul>

            {/* Newsletter Subscription Form */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">{t('footer.subscribe')}</p>
              
              <form onSubmit={handleSubscribe} className="relative flex" id="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2A8C9E]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 w-8 h-8 rounded-full bg-[#2A8C9E] hover:bg-gradient-to-r hover:from-[#E8B84B] hover:to-[#F0C674] items-center justify-center flex text-white hover:text-[#1B3A5C] transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {isSubscribed && (
                <div className="flex items-center space-x-1.5 mt-2 text-xs text-[#E8B84B]" id="newsletter-success-msg">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('footer.successMsg')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500" id="footer-copyright-row">
          <p>© {new Date().getFullYear()} Hasanah Tech Solutions. {t('footer.copyright')} Registered Company No. 202601052140.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <span className="text-[#3AA6B5]">Innovate | Empower | Transform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
