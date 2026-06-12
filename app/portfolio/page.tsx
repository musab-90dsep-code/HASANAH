'use client';

import { useState } from 'react';
import { Projector, ArrowRight, ExternalLink, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';

// Project portfolio items
const portfolioItems = [
  {
    title: "Al-Barakah Logistics Hub",
    category: "ERP",
    desc: "A custom stock optimization, billing pipeline, and employee schedule manager for a logistics and food manufacturing group. Eliminated scheduling overheads by 43%.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    image: "https://picsum.photos/seed/deliveryhub1/600/400",
    client: "Al-Barakah Logistics"
  },
  {
    title: "Nusa Ride Ride-Hailing",
    category: "Mobile App",
    desc: "Advanced localized micro-transit ride-hailing and e-wallet application optimized for high density municipal zones in SEA. Handled over 100k successful transits",
    tech: ["Flutter", "Node.js", "Firebase", "Redis"],
    image: "https://picsum.photos/seed/deliveryhub2/600/400",
    client: "Nusa Cargo Bhd"
  },
  {
    title: "Hasanah Intelligent CRM",
    category: "AI",
    desc: "Generative AI conversational support agent with ticket auto-routing integrated for global e-commerce portals. Cut customer support wait times to sub-5 seconds.",
    tech: ["React", "Gemini API", "Supabase", "TypeScript"],
    image: "https://picsum.photos/seed/deliveryhub3/600/400",
    client: "Global Retailers Co."
  },
  {
    title: "Verve-Pay Checkout Widget",
    category: "E-commerce",
    desc: "A headless, secure payment merchant gateway capable of processing instant split settlements and multi-currency exchange reconciliations.",
    tech: ["Next.js", "Express", "Stripe API", "PostgreSQL"],
    image: "https://picsum.photos/seed/deliveryhub4/600/400",
    client: "Verve Trading Group"
  },
  {
    title: "Eko-Bursa Agri-Exchange",
    category: "Web App",
    desc: "A localized real-time bidding portal for agricultural supply chains, matching local organic farmers with bulk central wholesalers instantly.",
    tech: ["React", "Django CSS", "Celery", "PostgreSQL"],
    image: "https://picsum.photos/seed/deliveryhub5/600/400",
    client: "Selangor Farmers Corp."
  },
  {
    title: "Darussalam Waqf Registry",
    category: "Web App",
    desc: "A secure digital registry tracking waqf endowment funds, automated contribution allocations, and charity receipt generation portals.",
    tech: ["Next.js", "Tailwind", "Supabase", "PostgreSql"],
    image: "https://picsum.photos/seed/deliveryhub6/600/400",
    client: "Darussalam Foundation"
  },
  {
    title: "Serene Breath Analytics",
    category: "Mobile App",
    desc: "Interactive health monitoring and custom meditation timing application containing real-time heart rate charting with offline syncs.",
    tech: ["React Native", "SQLite", "Victory Charts", "Tailwind"],
    image: "https://picsum.photos/seed/deliveryhub7/600/400",
    client: "Serene Mindfulness Inc."
  },
  {
    title: "Gemilang Smart Inventory",
    category: "ERP",
    desc: "Automated warehouse scan integration system using lightweight OCR algorithms to instantly map pallet codes to live SQL databases.",
    tech: ["Flutter", "SQLite", "FastAPI", "PostgreSQL"],
    image: "https://picsum.photos/seed/deliveryhub8/600/400",
    client: "Gemilang Distribution Ltd"
  }
];

const categories = ["All", "Web App", "Mobile App", "ERP", "E-commerce", "AI"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects dynamically
  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => {
        if (selectedCategory === "Web App") return item.category === "Web App";
        if (selectedCategory === "Mobile App") return item.category === "Mobile App";
        if (selectedCategory === "ERP") return item.category === "ERP";
        if (selectedCategory === "E-commerce") return item.category === "E-commerce";
        if (selectedCategory === "AI") return item.category === "AI";
        return true;
      });

  return (
    <div className="relative">
      {/* Header */}
      <PageHeader
        title="Delivered Projects"
        description="Explore our portfolio of scalable web services, mobile solutions, custom ERP modules, and automated AI models."
        currentTabName="Portfolio"
      />

      {/* Category selector strip */}
      <section className="py-12 bg-[#050D18] border-b border-white/5" id="portfolio-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" id="portfolio-filters-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2A8C9E] text-white shadow-md shadow-[#2A8C9E]/10'
                    : 'bg-[#111f32]/80 text-slate-350 hover:bg-[#111f32] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main projects grid */}
      <section className="py-20 bg-[#0b1523]" id="portfolio-items-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-[#111f32]/60 rounded-3xl border border-white/5 max-w-xl mx-auto space-y-4">
              <Projector className="w-12 h-12 text-slate-500 mx-auto animate-pulse" />
              <h3 className="font-display font-bold text-lg text-white">No projects found</h3>
              <p className="text-xs text-slate-400">Check back soon, we are compiling more case briefs in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay tags */}
                    <div className="absolute top-4 left-4 flex space-x-1.5">
                      <span className="bg-[#050D18]/95 backdrop-blur-sm shadow-sm py-1 px-3 rounded-full text-[9px] font-bold uppercase text-white tracking-wide border border-white/5">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-[#0b1523]/90 backdrop-blur-md text-slate-200 border border-white/5 font-semibold text-[10px] py-1 px-3 rounded-md">
                      Client: {project.client}
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-slate-100 text-lg hover:text-[#3AA6B5] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal">
                        {project.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="bg-white/5 text-slate-300 rounded-md px-2 py-0.5 text-[9px] font-bold tracking-wide border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-[#2A8C9E] group-hover:text-[#3AA6B5] inline-flex items-center space-x-1 transition-all cursor-pointer">
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 hover:text-[#2A8C9E] transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer banner */}
      <CTABanner />
    </div>
  );
}
