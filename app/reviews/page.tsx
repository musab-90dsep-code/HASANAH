'use client';

import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ThumbsUp, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';

// Testimonials data
const reviewsList = [
  {
    photo: "https://picsum.photos/seed/client1/100/100",
    name: "Dato' Ahmad Ibrahim",
    role: "Managing Director",
    company: "Al-Barakah Foods",
    rating: 5,
    project: "Custom ERP & Workflow System",
    review: "Hasanah Tech Solutions single-handedly saved our warehouse transition process. Their custom ERP is exceptionally fast, highly intuitive, and saves us thousands of ringgit in monthly waste lists. The milestone delivery was ahead of the scheduled sprint."
  },
  {
    photo: "https://picsum.photos/seed/client2/100/100",
    name: "Sarah Lim",
    role: "Chief Product Officer",
    company: "Nusa Ride Mobile Bhd",
    rating: 5,
    project: "iOS & Android Flutter App",
    review: "Unmatched communication and technical mastery. The mobile app launched ahead of schedule, passing rigorous penetration checks seamlessly. The offline database synchronization works like a dream under unstable connections."
  },
  {
    photo: "https://picsum.photos/seed/client3/100/100",
    name: "Mohd Ridzuan",
    role: "Director of Digital",
    company: "Darussalam Waqf Foundation",
    rating: 5,
    project: "Cloud Waqf Hub & Web Portal",
    review: "Highly secure and highly detailed engineers. They structured our backend Waqf tracking database with absolute precision. We've seen a massive surge in donorship trust due to the simple checkout flows and secure client receipts."
  },
  {
    photo: "https://picsum.photos/seed/client4/100/100",
    name: "Jennifer Kong",
    role: "Vice President",
    company: "Verve-Pay Singapore",
    rating: 5,
    project: "Headless E-commerce Checkout",
    review: "Absolute craftsmen. Implemented a complex API-first checkout ledger with automated billing. Their senior engineers handled critical microservices with zero issues. Post-launch technical support SLA is spectacular."
  },
  {
    photo: "https://picsum.photos/seed/client5/100/100",
    name: "Yassir Al-Harith",
    role: "Operations Manager",
    company: "Gulf Logistics Kuala Lumpur",
    rating: 5,
    project: "Stock Logistics Integration",
    review: "A remarkable development team. The stock scan OCR system solved our key stock mismatches in weeks. Clear, fixed-pricing parameters from day one. Zero scope bloating."
  },
  {
    photo: "https://picsum.photos/seed/client6/100/100",
    name: "Dr. Farah Azman",
    role: "Chief Executive Officer",
    company: "Aura-Med Diagnostic Center",
    rating: 5,
    project: "Med-Tech Scheduling Database",
    review: "Highly professional developers. They designed a HIPAA-friendly diagnostic scheduling module that works perfectly. Dynamic booking queues transformed our front-line patient workflow completely."
  }
];

export default function Reviews() {
  const [likesCount, setLikesCount] = useState<Record<number, boolean>>({});

  const toggleLike = (idx: number) => {
    setLikesCount(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="relative">
      {/* Header */}
      <PageHeader
        title="What Our Clients Say"
        description="Authentic reviews from directors, operational heads, and regional tech founders who built their digital platforms with us."
        currentTabName="Reviews"
      />

      {/* Aggregate Rating Summary Dashboard */}
      <section className="py-16 bg-[#050D18]" id="reviews-aggregate-summary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1523] text-white rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Box 1: Core Average */}
              <div className="md:col-span-4 text-center md:text-left space-y-4 md:border-r md:border-white/5 md:pr-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2A8C9E] block">Verified Customer Rating</span>
                <p className="font-display font-black text-6xl md:text-7xl">
                  4.93<span className="text-sm text-slate-500">/5</span>
                </p>
                <div className="flex justify-center md:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F0C674] text-[#F0C674]" />
                  ))}
                </div>
                <p className="text-xs text-slate-400">Based on 142 total commercial delivery audits audited on-site.</p>
              </div>

              {/* Box 2: Bar Breakdown */}
              <div className="md:col-span-5 space-y-3">
                {[
                  { star: "5 Stars", pct: "93%", count: 132 },
                  { star: "4 Stars", pct: "7%", count: 10 },
                  { star: "3 Stars", pct: "0%", count: 0 },
                  { star: "2 Stars", pct: "0%", count: 0 },
                  { star: "1 Star", pct: "0%", count: 0 }
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center text-xs text-slate-350">
                    <span className="w-14 text-left font-semibold">{row.star}</span>
                    <div className="flex-1 mx-3 bg-[#111f32] h-2.5 rounded-full overflow-hidden border border-white/5">
                      <div className="bg-[#3AA6B5] h-full rounded-full" style={{ width: row.pct }} />
                    </div>
                    <span className="w-8 text-right font-bold text-slate-200">{row.pct}</span>
                  </div>
                ))}
              </div>

              {/* Box 3: Trust Metrics Badge */}
              <div className="md:col-span-3 text-center md:pl-6 space-y-4">
                <div className="inline-flex w-14 h-14 rounded-full bg-[#2A8C9E]/10 border border-[#2A8C9E]/20 items-center justify-center text-[#3AA6B5] mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#2A8C9E]">100% Verified Delivery</h4>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-[200px] mx-auto">All review audits trace back to active, deployed client links on Google Cloud environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Cards List */}
      <section className="py-20 bg-[#0b1523]" id="reviews-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsList.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-3xl p-8 border border-white/5 shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars list */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E8B84B] text-[#E8B84B]" />
                      ))}
                    </div>
                    <span className="bg-[#050D18]/90 text-slate-350 border border-white/5 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
                      {review.project}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                {/* Profile info cards */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={review.photo}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover shadow-inner border border-white/5"
                    />
                    <div>
                      <h4 className="font-display font-extrabold text-slate-200 text-xs sm:text-sm">{review.name}</h4>
                      <p className="text-[10px] text-slate-400">{review.role}, <span className="font-bold text-[#2A8C9E]">{review.company}</span></p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleLike(idx)}
                    className={`p-2.5 rounded-full transition-all duration-300 border border-white/5 cursor-pointer ${
                      likesCount[idx]
                        ? 'bg-[#2A8C9E]/15 text-[#2A8C9E] border-[#2A8C9E]/30 shadow-md shadow-[#2A8C9E]/5'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                    aria-label="Helpful"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <CTABanner />
    </div>
  );
}
