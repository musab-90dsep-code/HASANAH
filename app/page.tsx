'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Cpu, Smartphone, Globe, Cloud, Layout, Briefcase, 
  Award, ShieldCheck, CheckCircle2, Star, Sparkles, Clock, Headset, Zap,
  Linkedin, Github
} from 'lucide-react';
import { motion } from 'motion/react';
import CTABanner from '@/components/CTABanner';
import StatCounter from '@/components/StatCounter';
import { useLanguage } from '@/context/LanguageContext';

// Services list
const previewServices = [
  {
    icon: <Globe className="w-8 h-8 text-[#2A8C9E]" />,
    title: "Web Development",
    desc: "Bespoke Next.js & React multi-page architecture engineered for blistering speed and organic visibility."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Mobile App Development",
    desc: "Robust IOS and Android mobile builds engineered using Flutter / React Native with local-first databases."
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#E8B84B]" />,
    title: "AI & Automation Solutions",
    desc: "Smart LLM orchestration, customized agents, and automated data pipelines designed to cut overheads."
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#2D3748]" />,
    title: "Cloud & DevOps",
    desc: "Autoscaling cloud setups on Google Cloud, Dockerized microservices, and continuous delivery pipelines."
  },
  {
    icon: <Layout className="w-8 h-8 text-[#2A8C9E]" />,
    title: "UI/UX Product Design",
    desc: "Figma wireframes, dynamic interactive state models, and customer journeys built with intense detail."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#3AA6B5]" />,
    title: "Custom ERP Solutions",
    desc: "Tailor-made portals, client databases, automated billing, and supply chain managers built for operations."
  }
];

// Why choose us highlight pillars
const pillars = [
  { icon: <ShieldCheck className="w-6 h-6 text-[#2A8C9E]" />, title: "Expert Tech", text: "Senior engineers and solution architects." },
  { icon: <Clock className="w-6 h-6 text-[#3AA6B5]" />, title: "On-Time Dispatch", text: "Rigorous milestone tracking and sync sprints." },
  { icon: <CheckCircle2 className="w-6 h-6 text-[#E8B84B]" />, title: "Clear Pricing", text: "Zero scope bloating, granular fixed budgets." },
  { icon: <Headset className="w-6 h-6 text-[#2D3748]" />, title: "Dedicated Support", text: "24/7 technical fallback and SLAs." }
];

// Statistics definitions
const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "140+", label: "Projects Delivered" },
  { value: "25+", label: "Expert Developers" },
  { value: "99%", label: "Happy Clients" }
];

// Suggested core projects
const featuredProjects = [
  {
    image: "https://picsum.photos/seed/tech/600/400",
    title: "Al-Barakah ERP Portal",
    category: "ERP & Workflow",
    desc: "A custom stock optimization, billing pipeline, and employee schedule manager for a food manufacturing company.",
    tags: ["React", "PostgreSQL", "Tailwind"]
  },
  {
    image: "https://picsum.photos/seed/smart/600/400",
    title: "Nusa Ride Mobile App",
    category: "Mobile Application",
    desc: "Advanced localized micro-transit ride-hailing and e-wallet application optimized for density zones in SEA.",
    tags: ["Flutter", "NodeJs", "Firebase"]
  },
  {
    image: "https://picsum.photos/seed/automated/600/400",
    title: "Hasanah intelligent CRM",
    category: "AI Integration",
    desc: "Generative AI conversational support agent with ticket auto-routing integrated for global e-commerce portals.",
    tags: ["Next.js", "Gemini API", "Supabase"]
  }
];

// Testimonials preview
const testimonials = [
  {
    avatar: "https://picsum.photos/seed/person1/100/100",
    name: "Dato' Ahmad Ibrahim",
    role: "Managing Director, Al-Barakah Foods",
    rating: 5,
    quote: "Hasanah Tech Solutions single-handedly saved our warehouse transition process. Their custom ERP is fast, highly intuitive, and saved us thousands in waste costs."
  },
  {
    avatar: "https://picsum.photos/seed/person2/100/100",
    name: "Sarah Lim",
    role: "Chief Product Officer, Nusa Ride",
    rating: 5,
    quote: "Unmatched communication and technical mastery. The mobile app launched ahead of schedule, passing rigorous penetration checks seamlessly. Highly recommended!"
  }
];

// Tech stack strip
const logosRef = [
  "Next.js", "React", "Firebase", "PostgreSQL", "Google Cloud", "Django", "Tailwind CSS", "TypeScript"
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video and fallback image */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-85"
            poster="https://picsum.photos/seed/workspace/1920/1080?blur=10"
          >
            <source src="/videos/vedio.mp4" />
          </video>
          {/* Overlay to darken video for strong readability of white headings */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C]/90 via-[#1B3A5C]/70 to-transparent" />
        </div>

        {/* Hero content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-6">
            {/* Animated Badge */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-[#2A8C9E]/30 backdrop-blur-md border border-[#3AA6B5]/35 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F0C674] shadow-sm uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Software Engineering</span>
              </motion.div>
            )}

            {mounted && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Website, ERP &<br />
                <span className="bg-gradient-to-r from-[#3AA6B5] via-[#2A8C9E] to-[#F0C674] bg-clip-text text-transparent font-black">
                  Custom Software Development Company
                </span>
              </motion.h1>
            )}

            {mounted && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal"
              >
                Helping businesses streamline operations, increase productivity, and accelerate growth with modern technology.
              </motion.p>
            )}

            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  id="hero-primary-btn"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-display text-base font-bold text-white bg-gradient-to-r from-[#2A8C9E] to-[#3AA6B5] hover:from-[#E8B84B] hover:to-[#F0C674] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#2A8C9E]/10 hover:shadow-[#E8B84B]/20"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href="/portfolio"
                  id="hero-secondary-btn"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-display text-base font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  View Our Portfolio
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Floating Trust Badge */}
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, right: -100 }}
            animate={{ opacity: 1, right: 24 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 right-6 z-10 hidden sm:flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-xs text-white"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E8B84B] to-[#F0C674] flex items-center justify-center text-[#1E3A5C] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#E8B84B]">99.7% Success SLA</p>
              <p className="text-[10px] text-gray-300">Certified Milestone Delivery Guaranteed</p>
            </div>
          </motion.div>
        )}
      </section>

      {/* 2. ABOUT US PREVIEW */}
      <section id="about-preview" className="py-24 bg-[#050D18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Grid left - Visual illustrations */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                <img
                  src="/images/about.png"
                  alt="Senior development team in modern workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D18] via-transparent to-transparent opacity-65" />
                <div className="absolute bottom-6 left-6 text-white text-sm font-semibold tracking-wide flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E8B84B]" />
                  <span>Hasanah HQ Innovation hub</span>
                </div>
              </div>
              {/* Overlap visual card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-tr from-[#0b1523] to-[#2A8C9E] p-6 rounded-2xl shadow-xl text-white max-w-[220px] border border-white/5 hidden sm:block">
                <h4 className="font-display font-black text-3xl text-[#E8B84B]">100%</h4>
                <p className="text-xs font-semibold text-gray-200 mt-1">Malaysian Ownership & Global Quality Standard</p>
              </div>
            </div>

            {/* Grid right - Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">Who we are</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white animate-fade-in-up">
                  We Engineer Solutions That Empower Societies
                </h2>
              </div>
              
              <p className="text-base text-slate-300 leading-relaxed">
                Hasanah Tech Solutions is a world-class technology consulting firm. We design high-performance applications built to withstand enterprise loads. Our fundamental goal is executing software delivery exactly on time and keeping pricing entirely clear.
              </p>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                By bridging human-centric design with powerful cloud architectures, we give local enterprises and global operations the absolute edge to transform workflows, automate billing, and build lifetime digital infrastructure.
              </p>

              <div>
                <Link
                  href="/about"
                  id="about-read-story-link"
                  className="inline-flex items-center space-x-1.5 text-[#2A8C9E] font-bold hover:text-[#E8B84B] transition-colors group text-sm"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Pillars inline row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                {pillars.map((p, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <h4 className="font-display font-extrabold text-xs text-white">{p.title}</h4>
                    <p className="text-[10px] text-gray-400 font-semibold leading-snug">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. OUR TEAM */}
      <section className="py-24 bg-[#050D18] border-t border-white/5" id="our-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">The Innovation Brains</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Meet Our Senior Architects
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
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
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3AA6B5] flex items-center justify-center text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
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

      {/* 3. OUR SERVICES PREVIEW */}
      <section id="services-preview" className="py-24 bg-[#0b1523] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white animate-fade-in-up">
              Enterprise Engine Capabilities
            </h2>
            <p className="text-sm text-slate-400">
              Meticulously crafted software engineered to solve operational friction, boost client growth, and secure transaction systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="home-services-grid">
            {previewServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl p-8 shadow-2xl border border-white/5 hover:border-[#2A8C9E]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#2A8C9E]/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-slate-200 group-hover:text-[#3AA6B5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/5">
                  <span className="text-xs font-bold text-[#2A8C9E] group-hover:text-[#E8B84B] inline-flex items-center space-x-1 transition-colors">
                    <span>Learn Capabilities</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              href="/services"
              id="services-all-btn"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-display text-sm font-bold text-white bg-gradient-to-r from-[#2A8C9E] to-[#3AA6B5] hover:from-[#E8B84B] hover:to-[#F0C674] transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#2A8C9E]/10"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US / STATS BAND */}
      <section id="stats-band" className="bg-[#050D18] border-b border-white/5 text-white py-16 relative overflow-hidden">
        {/* Background flares */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#E8B84B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#3AA6B5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" id="home-stats-row">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#3AA6B5] via-[#2A8C9E] to-[#F0C674] bg-clip-text text-transparent">
                  <StatCounter value={stat.value} />
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS PREVIEW */}
      <section id="portfolio-preview" className="py-24 bg-[#050D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">Our Work</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white animate-fade-in-up">
                Built For Maximum Scale
              </h2>
              <p className="text-sm text-slate-400">
                A showcase of production-grade client deployment achievements across heavy supply industries, consumer fintech, and artificial intelligence wrappers.
              </p>
            </div>
            
            <Link
              href="/portfolio"
              id="portfolio-all-btn"
              className="px-6 py-3 rounded-full font-display text-xs font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 shrink-0 inline-flex items-center space-x-1.5 transition-colors self-start md:self-auto"
            >
              <span>See Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="home-projects-grid">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#111f32]/60 hover:bg-[#111f32] rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-sm shadow-sm py-1 px-3 rounded-full text-[10px] font-bold uppercase text-[#3AA6B5] tracking-wide border border-white/5">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-slate-200 text-lg hover:text-[#3AA6B5] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/5 text-slate-300 rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-[#2A8C9E] group-hover:text-[#E8B84B] inline-flex items-center space-x-1.5 transition-all">
                      <span>View Project Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY YOU NEED A WEBSITE - TEASER */}
      <section id="why-website-teaser" className="py-20 relative bg-gradient-to-br from-[#1B3A5C] via-[#102B47] to-[#2D3748] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(42,140,158,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Header copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-bold uppercase text-[#E8B84B]">
                <Zap className="w-3.5 h-3.5" />
                <span>The Digital Premium Advantage</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Not Sure Why Your Business Truly Needs a Website?
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                In today&apos;s hyper-dense economy, a landing page is no longer enough. Your website is your primary asset for continuous branding, workflow automation, and trust establishment. Build an asset that sells while you sleep.
              </p>
              <div>
                <Link
                  href="/why-website"
                  id="why-website-teaser-btn"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-display text-sm font-bold text-[#1B3A5C] bg-[#E8B84B] hover:bg-white hover:text-[#1B3A5C] transition-all duration-300"
                >
                  <span>See How Websites Boost Revenue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Benefit inline elements right */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "24/7 Global Presence", desc: "Your storefront acts as an automated lead capture system round-the-clock." },
                { title: "Build Premium Trust", desc: "Custom domains and high-fidelity product portfolios eliminate brand doubt." },
                { title: "Reach 10x Audience", desc: "Leverage advanced SEO architecture to beat competitors instantly." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#2A8C9E]/30 items-center justify-center flex text-[#3AA6B5] font-extrabold text-base">
                    0{idx+1}
                  </div>
                  <h4 className="font-display font-bold text-sm text-white leading-tight">{benefit.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS PREVIEW */}
      <section id="testimonials-preview" className="py-24 bg-[#050D18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2A8C9E]">Direct Feedback</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white animate-fade-in-up">
              What Our Clients Say
            </h2>
            <p className="text-sm text-slate-400">
              Honest testimonials from directors, operation heads, and local founders who trusted our engineering processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" id="home-testimonials-grid">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-[#111f32]/60 hover:bg-[#111f32] border border-white/5 rounded-2xl p-8 relative flex flex-col justify-between shadow-2xl transition-all duration-300 group">
                <span className="absolute top-6 right-8 text-[#2A8C9E]/15 font-serif text-[120px] leading-none select-none pointer-events-none">“</span>
                
                <div className="space-y-4 relative z-10 bg-transparent">
                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-white/5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover shadow-inner"
                  />
                  <div>
                    <h4 className="font-display font-bold text-slate-200 text-sm">{test.name}</h4>
                    <p className="text-xs text-slate-400">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/reviews"
              id="testimonials-all-links"
              className="inline-flex items-center space-x-1.5 text-[#2A8C9E] font-bold hover:text-[#E8B84B] transition-colors group text-sm"
            >
              <span>Read More Reviews From Local Founders</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PARTNERS/TECH STACK STRIP */}
      <section id="tech-strip" className="py-12 bg-[#0b1523] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2A8C9E]/50 mb-8 font-mono">
            Trusted with Complex Ecosystem Integration
          </p>
          
          <div className="relative w-full overflow-hidden">
            {/* Fade overlays for smooth scrolling edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#0b1523] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#0b1523] to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee gap-12 sm:gap-16 whitespace-nowrap hover:[animation-play-state:paused]">
              {/* First loop */}
              {logosRef.map((logo, idx) => (
                <span
                  key={`logo-1-${idx}`}
                  className="font-display font-semibold text-sm sm:text-base text-slate-500 hover:text-[#3AA6B5] hover:scale-105 cursor-default select-none duration-300 transition-all uppercase tracking-wider inline-block"
                >
                  {logo}
                </span>
              ))}
              {/* Duplicate loop for seamless infinite scroll */}
              {logosRef.map((logo, idx) => (
                <span
                  key={`logo-2-${idx}`}
                  className="font-display font-semibold text-sm sm:text-base text-slate-500 hover:text-[#3AA6B5] hover:scale-105 cursor-default select-none duration-300 transition-all uppercase tracking-wider inline-block"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BANNER */}
      <CTABanner />
    </div>
  );
}
