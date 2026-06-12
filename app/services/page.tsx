'use client';

import { 
  Globe, Smartphone, Cpu, Cloud, Layout, Briefcase, CheckCircle, 
  Search, Palette, Settings, ShieldCheck, Rocket, HeartHandshake, ArrowRight 
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';

// Detailed alternating services data
const servicesDetail = [
  {
    icon: <Globe className="w-12 h-12 text-[#2A8C9E]" />,
    title: "Web Application Development",
    desc: "We construct state-of-the-art web architectures explicitly built using Next.js, React, and Node.js. Our products focus on sub-second loading speeds, impeccable SEO layout frameworks, and responsive compatibility.",
    features: [
      "Custom multi-page & Single-Page Application (SPA) setups",
      "Jamstack & Server-Side Rendering (SSR) for blazing performance",
      "Direct API integrations & third-party SaaS bindings",
      "Optimized Google Core Web Vitals audit structures"
    ],
    image: "https://picsum.photos/seed/webservice/600/400"
  },
  {
    icon: <Smartphone className="w-12 h-12 text-[#3AA6B5]" />,
    title: "Mobile App Development",
    desc: "Reach clients directly on their personal devices. We author multi-platform compatible mobile systems using Flutter and React Native. This guarantees a native-grade look and feel while optimizing developmental budgets.",
    features: [
      "Multi-platform IOS & Android code consolidation",
      "Local storage architectures for complete offline-first access",
      "Push notification systems & hardware API integrations",
      "App Store & Google Play submission management"
    ],
    image: "https://picsum.photos/seed/mobileservice/600/400"
  },
  {
    icon: <Cpu className="w-12 h-12 text-[#E8B84B]" />,
    title: "AI & Machine Learning Solutions",
    desc: "Cut administrative burn and automate user pipelines with advanced machine learning bindings. From training custom LLM adapters to setting up intelligent RAG document agents, we integrate intelligence cleanly.",
    features: [
      "Intelligent text summarizing, parsing, and data extractions",
      "Generative conversational agents & multi-channel CRM bots",
      "Custom neural models & semantic vector searches",
      "Clean server-side API proxy wrapper architectures"
    ],
    image: "https://picsum.photos/seed/aiservice/600/400"
  },
  {
    icon: <Cloud className="w-12 h-12 text-[#2D3748]" />,
    title: "Cloud Services & Robust DevOps",
    desc: "Migrate legacy databases or scale dynamic consumer APIs without downtime. We build scalable containerized cloud nodes on Google Cloud and AWS, safeguarded by automatic failovers and DDoS walls.",
    features: [
      "Zero-downtime serverless container deployments (Docker/K8s)",
      "Automated CI/CD validation & delivery pipelines",
      "Cloud SQL & Firebase Firestore high-availability designs",
      "Rigorous monitoring, billing limits, and container metrics"
    ],
    image: "https://picsum.photos/seed/cloudservice/600/400"
  },
  {
    icon: <Layout className="w-12 h-12 text-[#2A8C9E]" />,
    title: "Premium UI/UX Product Design",
    desc: "A product's visual weight is its silent conversion driver. We author high-fidelity interactive wireframes and state controllers based purely on psychological consumer maps, leading users to final checkout.",
    features: [
      "Deep user-persona development and workflow charts",
      "High-fidelity interactive Figma wireframes and digital specs",
      "Custom component styling systems & component kits",
      "Iterative validation trials & responsive interface audits"
    ],
    image: "https://picsum.photos/seed/uideservice/600/400"
  },
  {
    icon: <Briefcase className="w-12 h-12 text-[#3AA6B5]" />,
    title: "Custom ERP & Operational Systems",
    desc: "Ditch repetitive spreadsheets and fragmented dashboards. We build complete, unified operations databases tracking stock, invoice generations, customer queries, and team scheduling inside a single node.",
    features: [
      "Multi-user roles with precise security permissions",
      "Dynamic data grids with CSV exports and charting tools",
      "Automated payment, invoice, and PDF generation engines",
      "Real-time action logging & historic telemetry tracking"
    ],
    image: "https://picsum.photos/seed/erpservice/600/400"
  }
];

// Timeline process steps
const processTimeline = [
  {
    step: "01",
    title: "Discovery Workshop",
    desc: "We analyze team dynamics, detail product goals, and author a strict system roadmap specification document.",
    icon: <Search className="w-6 h-6 text-[#2A8C9E]" />
  },
  {
    step: "02",
    title: "Figma UI/UX Sprints",
    desc: "We map the exact pixel grids, components, button sizes, and wireframes for complete, transparent sign-off.",
    icon: <Palette className="w-6 h-6 text-[#3AA6B5]" />
  },
  {
    step: "03",
    title: "Clean Engineering",
    desc: "Our coders build optimized codebanks, writing test cases and mapping cloud schemas cleanly.",
    icon: <Settings className="w-6 h-6 text-[#E8B84B]" />
  },
  {
    step: "04",
    title: "Rigorous Safety Audit",
    desc: "We run security penetration validation, load testing, and browser usability checks prior to master branch launch.",
    icon: <ShieldCheck className="w-6 h-6 text-[#2D3748]" />
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "We handle DNS setup, cloud container clustering, SSL certificates, and official public app store listings.",
    icon: <Rocket className="w-6 h-6 text-[#2A8C9E]" />
  },
  {
    step: "06",
    title: "Ongoing SLA Support",
    desc: "We commit 24/7 server monitoring, dependency updates, and feature scaling parameters to protect operations.",
    icon: <HeartHandshake className="w-6 h-6 text-[#3AA6B5]" />
  }
];

export default function Services() {
  return (
    <div className="relative">
      {/* Header */}
      <PageHeader
        title="Our Services & Capabilities"
        description="Meticulously crafted cloud architectures and beautiful responsive applications mapped directly to your commercial strategy."
        currentTabName="Services"
      />

      {/* Alternating detailed service blocks */}
      <section className="py-24 bg-[#050D18]" id="services-details-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {servicesDetail.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image side */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-950">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D18]/80 to-transparent" />
                  </div>
                  {/* Backdrop shapes */}
                  <div className={`absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                    isEven ? '-top-10 -left-10 bg-[#2A8C9E]' : '-bottom-10 -right-10 bg-[#E8B84B]'
                  }`} />
                </div>

                {/* Content side */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#2A8C9E]">
                      {service.icon}
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white hover:text-[#3AA6B5] transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {service.desc}
                  </p>

                  {/* Feature lists */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-5 h-5 text-[#3AA6B5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "Our Process" Timeline */}
      <section className="py-24 bg-[#0b1523] border-t border-white/5 relative" id="#our-process-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">Reliable Roadmap</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in-up">
              Our Engineered Custom Process
            </h2>
            <p className="text-sm text-slate-450 leading-relaxed">
              We govern software delivery with rigorous structure. This 6-step lifecycle ensures aligned targets and zero deployment friction.
            </p>
          </div>

          {/* Timeline cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processTimeline.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl p-8 border border-white/5 shadow-2xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Floating step text */}
                <span className="absolute top-6 right-8 font-display font-black text-4xl text-white/5 select-none group-hover:text-[#3AA6B5]/20 transition-colors">
                  {item.step}
                </span>

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2A8C9E]">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-slate-200 text-lg leading-snug group-hover:text-[#3AA6B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-[10px] uppercase tracking-wider font-bold text-slate-550">
                  <span>Milestone Stage {idx+1}</span>
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
