'use client';

import { useState } from 'react';
import { Shield, Sparkles, Zap, HeartHandshake, Eye, Award, MessageSquare, Code, Users } from 'lucide-react';
import { motion } from 'motion/react';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/CTABanner';

// 6 detailed "Why Choose Us" cards
const detailedReasons = [
  {
    icon: <Shield className="w-8 h-8 text-[#2A8C9E]" />,
    title: "Sovereign Trust & Clean IP",
    desc: "100% Malaysian owned, with rigorous intellectual property compliance and escrow-checked codebase transfers."
  },
  {
    icon: <Award className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Senior Developers Only",
    desc: "Your architecture is authored and monitored by senior consultants with deep cloud capabilities, not junior contractors."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#E8B84B]" />,
    title: "Autoscaling Performance",
    desc: "We build stateless engines which can handle massive concurrent surges during peak operation or heavy campaigns."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#2D3748]" />,
    title: "Clarity Over Complexity",
    desc: "No developer waffle, no scope creep. Our milestone schedules outline exactly what is being shipped and when."
  },
  {
    icon: <Eye className="w-8 h-8 text-[#2A8C9E]" />,
    title: "Live Sprints & Visibility",
    desc: "Witness your database or user interfaces evolve in real-time through secure staging servers updated weekly."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Rigorous Safety Checkups",
    desc: "Code undergoes strict OWASP vulnerability checklists and security audits prior to final master branch deployment."
  }
];

// Team members profile grid
const team = [
  {
    photo: "/images/image.png",
    name: "Musab bin Sharif",
    role: "Founder, Next.js & Django Developer",
    bio: "Founder and Software Engineer of Hasanah Tech Solutions, specializing in Next.js & Django development. Passionate about helping businesses streamline operations, increase productivity, and accelerate growth with modern technology.",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    photo: "/images/obaidullah.png",
    name: "Obaidullah",
    role: "MERN Stack Developer",
    bio: "MERN Stack Developer at Hasanah Tech Solutions, specializing in React, Node.js, Express, and MongoDB to build high-performance web systems and dynamic user interfaces.",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    photo: "https://picsum.photos/seed/designer/400/400",
    name: "Fatimah Hasan",
    role: "Head of Product & UI/UX",
    bio: "Aesthetic virtuoso focusing on frictionless checkout experiences, micro-interactions, and premium brand pairings.",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    photo: "https://picsum.photos/seed/ai_lead/400/400",
    name: "Adrian Tan",
    role: "Director of Intelligent Automation",
    bio: "Specialist in machine learning pipelining, bespoke vector embeddings, and generative system controls.",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Page Header */}
      <PageHeader
        title="Who We Are"
        description="Pioneering premium software engineering platforms since 2018. We combine bulletproof architectures with beautiful styling."
        currentTabName="About Us"
      />

      {/* Origin Story / Mission Segment */}
      <section className="py-24 bg-[#050D18]" id="about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story block left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">The Hasanah Philosophy</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in-up">
                  Designed to Elevate Business Operations Worldwide
                </h2>
              </div>
              
              <p className="text-base text-slate-300 leading-relaxed">
                Hasanah Tech Solutions was founded with a clear, singular vision: to eliminate the friction typical of custom software development. We realized that while many companies can write standard lines of code, very few could align engineering with exact deadline commitments and long-term customer scalability.
              </p>

              <div className="border-l-4 border-[#3AA6B5] pl-4 italic text-sm text-slate-400 py-2">
                &ldquo;Our technology represents more than functional inputs and outputs; it is a catalyst designed to preserve capital, accelerate labor efficiency, and instill absolute operational confidence.&rdquo;
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether deploying customized enterprise portals, automated consumer widgets, or high-performance artificial intelligence layers, our core philosophy remains steady: **Innovate** relentlessly, **Empower** operators, and **Transform** baseline capability.
              </p>

              {/* Core numbers row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <div>
                  <p className="font-display font-black text-3xl text-[#2A8C9E]">100%</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Malaysian Ownership</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl text-[#3AA6B5]">99.7%</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">SLA Uptime Ratio</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl text-[#E8B84B]">94%</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Client Retention</p>
                </div>
              </div>
            </div>

            {/* Visual story showcase right */}
            <div className="lg:col-span-6 relative">
              <div className="absolute top-4 left-4 inset-0 bg-white/5 rounded-3xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-950 aspect-[4/3]">
                <img
                  src="https://picsum.photos/seed/designstory/800/600"
                  alt="Our software developers designing advanced app layouts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float values box */}
              <div className="absolute -bottom-8 left-8 right-8 bg-[#0b1523] text-white p-6 rounded-2xl shadow-xl flex items-center justify-between border border-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2A8C9E] flex items-center justify-center text-white shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold">1 Million+</h4>
                    <p className="text-[10px] text-slate-300">Production Code lines</p>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8B84B] flex items-center justify-center text-[#1B3A5C] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold">50+ Enterprises</h4>
                    <p className="text-[10px] text-slate-300">Supported Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Detailed Grid */}
      <section className="py-24 bg-[#0b1523] border-y border-white/5 relative" id="why-choose-us-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">The Hasanah Integrity</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Why Leading Founders Partner With Us
            </h2>
            <p className="text-sm text-slate-450 leading-relaxed">
              We stand against black-box pricing structure and low-speed, fragile integrations. This is our concrete commitment to pure, secure, and verifiable software craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedReasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl p-8 border border-white/5 hover:border-[#2A8C9E]/30 shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#2A8C9E]/10 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="font-display font-extrabold text-slate-200 text-lg mb-2 group-hover:text-[#3AA6B5] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Our Team Segment */}
      <section className="py-24 bg-[#050D18]" id="our-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">The Innovation Brains</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Meet Our Senior Architects
            </h2>
            <p className="text-sm text-slate-455 leading-relaxed">
              A high-precision team uniting localized business values with world-class engineering discipline to build systems that scale indefinitely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group flex flex-col"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Photo with hover reveal banner overlay */}
                <div className="relative aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={member.photo}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Hover action elements overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#050D18]/95 via-[#050D18]/60 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="flex space-x-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3AA6B5] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3AA6B5] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content info card */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-slate-200 text-base group-hover:text-[#3AA6B5] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#2A8C9E] uppercase tracking-wide mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#3AA6B5] mt-4 block">
                    Verified Consultant
                  </span>
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
