import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Hasanah Tech Solutions | Innovate | Empower | Transform',
  description: 'Premium custom software development, high-performance web applications, enterprise ERP solutions, mobile app development, and bespoke AI & cloud automation integrations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth dark`}>
      <body suppressHydrationWarning className="font-sans bg-[#050D18] text-slate-150 antialiased font-medium">
        <LanguageProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
