'use client';

import { 
  Clock, Shield, Globe, TrendingUp, Award, Database, 
  HelpCircle, CheckCircle, XCircle, ArrowRight, Activity, Percent 
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';

// 8 core benefits
const websiteBenefits = [
  {
    icon: <Clock className="w-8 h-8 text-[#2A8C9E]" />,
    title: "24/7 Global Storefront",
    desc: "Your business never closes. An optimized website captures high-quality leads, addresses FAQs, and processes transactions even when your physical offices are closed."
  },
  {
    icon: <Shield className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Instant Corporate Credibility",
    desc: "Modern consumers research providers online first. A custom, premium web design establishes immediate trust and separates your business from low-grade Facebook-only pages."
  },
  {
    icon: <Globe className="w-8 h-8 text-[#E8B84B]" />,
    title: "Reach a Tenfold Audience",
    desc: "Ditch local radius limitations. Showcase your deliverables, software, or food supplies directly to central operations, overseas purchasers, and massive enterprise operators."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#2A8C9E]" />,
    title: "Sub-Second Conversion Funnel",
    desc: "Nurture organic visitors. Provide transparent pricing sheets, download brochures, or book instant technical proposals without complex human intervention."
  },
  {
    icon: <Database className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Customer Engagement Logs",
    desc: "Integrate newsletters, interactive product calculators, or service booking forms to capture and retain customer details for repeat marketing cycles."
  },
  {
    icon: <Award className="w-8 h-8 text-[#E8B84B]" />,
    title: "Showcase Your Complete Work",
    desc: "Provide gorgeous visual portfolios, checkable customer testimonials, and detailed video case studies to prove your absolute technical competence before sales calls."
  },
  {
    icon: <Activity className="w-8 h-8 text-[#2A8C9E]" />,
    title: "Competitive Supremacy",
    desc: "If your top competitors have a fast digital platform and yours is sluggish or nonexistent, they will capture the market share. Take back the supreme advantage."
  },
  {
    icon: <Percent className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Data-Driven Marketing",
    desc: "Trace customer sources, user click events, and overall sales conversions. Improve operational focus using real analytics instead of blind baseline assumptions."
  }
];

export default function WhyWebsite() {
  return (
    <div className="relative animate-fade-in">
      {/* Header */}
      <PageHeader
        title="Why You Need a Website"
        description="Your website is your primary business asset. Learn how a custom, premium web application drives leads and scales sales."
        currentTabName="Why Website?"
      />

      {/* Intro section */}
      <section className="py-24 bg-[#050D18]" id="why-website-intro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-black uppercase tracking-widest text-[#2A8C9E]">The Digital Mandate</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in-up">
            Are You Risking Client Trust Without a Modern Platform?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            A corporate website is not a simple brochure; it is your ultimate automated transaction node, lead capture channel, and trust asset. In today&apos;s landscape, lacking a high-performance web presence is equivalent to locking your storefront doors.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-[#0b1523]" id="why-website-benefits-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl p-6 shadow-2xl border border-white/5 hover:border-[#2A8C9E]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-slate-100 text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table section */}
      <section className="py-24 bg-[#050D18]" id="why-website-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">The Direct Impact</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in-up">
              With a Website vs. Without
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Compare the operational realities of relying purely on physical sales versus deploying a high-speed, dynamic web application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="comparison-card-deck">
            {/* WITHOUT */}
            <div className="bg-[#111f32]/40 rounded-3xl p-8 border border-white/5 space-y-6">
              <div className="flex items-center space-x-3 text-red-400">
                <XCircle className="w-8 h-8 shrink-0" />
                <h3 className="font-display font-extrabold text-lg text-slate-200">Without a Professional Website</h3>
              </div>
              
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Clients get skeptical during research, often selecting competitors with polished sites instead.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Your operating reach is locked entirely to physical directories, cold calls, and local radius.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Support staff spend hours answering repetitive queries on phone or messaging threads manually.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Zero user click metrics, making strategic marketing decisions equivalent to simple guesswork.</span>
                </li>
              </ul>
            </div>

            {/* WITH */}
            <div className="bg-[#0b1523] text-white rounded-3xl p-8 border border-[#2A8C9E]/20 space-y-6 relative overflow-hidden shadow-2xl">
              {/* Highlight flash */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A8C9E]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center space-x-3 text-[#3AA6B5]">
                <CheckCircle className="w-8 h-8 shrink-0" />
                <h3 className="font-display font-extrabold text-lg text-white">With a Hasanah Designed Portal</h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] shrink-0 mt-1.5" />
                  <span>Instant executive authority, prompting high-tier buyers to submit RFPs with high trust.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] shrink-0 mt-1.5" />
                  <span>Uncensored geographic scaling, exposing services to national operators and global targets.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] shrink-0 mt-1.5" />
                  <span>Automatic workflow pipelines (schedulers, calculators, intake forms) reducing admin tasks.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B] shrink-0 mt-1.5" />
                  <span>Integrated analytics tracking paths and actions to optimize advertisement spend exactly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Statistics Section */}
      <section className="py-20 bg-[#0b1523]/80 border-t border-white/5" id="why-website-stats">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display font-extrabold text-xl text-slate-100 text-center mb-12">
            Verifiable Global Consumer Market Insights
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-[#111f32]/65 p-6 rounded-2xl border border-white/5 shadow-2xl space-y-2">
              <p className="font-display font-black text-4xl text-[#2A8C9E]">84%</p>
              <p className="text-xs font-bold text-slate-300">Audit Credibility</p>
              <p className="text-[10px] text-slate-400 leading-relaxed font-normal">of modern consumers believe having an explicit website makes your business more credible than just a social page.</p>
            </div>

            <div className="bg-[#111f32]/65 p-6 rounded-2xl border border-white/5 shadow-2xl space-y-2">
              <p className="font-display font-black text-4xl text-[#3AA6B5]">73%</p>
              <p className="text-xs font-bold text-slate-300">Digital Trust Research</p>
              <p className="text-[10px] text-slate-400 leading-relaxed font-normal">of purchasers state they investigate a contractor&apos;s case studies online before calling a representative.</p>
            </div>

            <div className="bg-[#111f32]/65 p-6 rounded-2xl border border-white/5 shadow-2xl space-y-2">
              <p className="font-display font-black text-4xl text-[#E8B84B]">sub-3s</p>
              <p className="text-xs font-bold text-slate-300">Drop-Off Threshold</p>
              <p className="text-[10px] text-slate-400 leading-relaxed font-normal">The threshold after which 50%+ of web visitors abandon a slow-loading template. Speed is your absolute edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customized CTA Banner */}
      <CTABanner
        title="Let's Build Your Website Today"
        subtitle="Ditch fragile, sluggish templates. Let our senior engineering team design and deploy a high-performance digital asset built to scale sales."
      />
    </div>
  );
}
