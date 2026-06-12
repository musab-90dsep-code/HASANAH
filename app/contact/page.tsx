'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Linkedin, Github, Twitter, Facebook, Globe, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function Contact() {
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Clear alert after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Header */}
      <PageHeader
        title="Get In Touch"
        description="Have a question or a custom system spec? Reach our solution architects now to schedule a free technical consultation."
        currentTabName="Contact"
      />

      {/* Main split grid */}
      <section className="py-24 bg-[#050D18]" id="contact-split-pane">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Split Left - Stateful Contact Form */}
            <div className="lg:col-span-7 bg-[#0b1523] rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white animate-fade-in-up">
                  Submit Your Project Brief
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Provide your general requirements now. A senior software consultant will respond within 12 standard business hours with an initial estimation scope.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" id="consultation-contact-request-form">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-xs font-bold uppercase text-[#2A8C9E] tracking-wide">Your Full Name</label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      name="name"
                      placeholder="e.g. Mohd Daniel"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#111f32]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2A8C9E] focus:ring-1 focus:ring-[#2A8C9E]"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="text-xs font-bold uppercase text-[#2A8C9E] tracking-wide">Work Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      name="email"
                      placeholder="e.g. daniel@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#111f32]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2A8C9E] focus:ring-1 focus:ring-[#2A8C9E]"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone-input" className="text-xs font-bold uppercase text-[#2A8C9E] tracking-wide">Phone Number (Optional)</label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      placeholder="e.g. +60123456789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#111f32]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2A8C9E] focus:ring-1 focus:ring-[#2A8C9E]"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="subject-input" className="text-xs font-bold uppercase text-[#2A8C9E] tracking-wide">Interested Service</label>
                    <div className="relative">
                      <select
                        id="subject-input"
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#111f32]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-[#2A8C9E] focus:ring-1 focus:ring-[#2A8C9E] appearance-none"
                      >
                        <option value="" className="bg-[#0b1523] text-slate-400">-- Select Service --</option>
                        <option value="Web Developmenet" className="bg-[#0b1523] text-white">Web Application Architecture</option>
                        <option value="Mobile App Development" className="bg-[#0b1523] text-white">Mobile App Development</option>
                        <option value="AI Integration & Agents" className="bg-[#0b1523] text-white">AI Integration & Custom Agents</option>
                        <option value="Ops Custom ERP" className="bg-[#0b1523] text-white">Operations / Custom ERP Platform</option>
                        <option value="Figma UIUX" className="bg-[#0b1523] text-white">UI/UX Design Wireframing</option>
                        <option value="General Consultation" className="bg-[#0b1523] text-white">Other Software Technical Support</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#2A8C9E]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message input */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="text-xs font-bold uppercase text-[#2A8C9E] tracking-wide">Project Brief & Goals</label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    name="message"
                    placeholder="Tell us about your operations, tech stack, data size, and general budget outline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#111f32]/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2A8C9E] focus:ring-1 focus:ring-[#2A8C9E] resize-none"
                  />
                </div>

                {/* Success alert message container */}
                {submitSuccess && (
                  <div className="bg-[#2A8C9E]/10 border border-[#2A8C9E]/20 text-white p-4 rounded-xl flex items-center space-x-3 text-sm animate-fade-in" id="form-success-info">
                    <CheckCircle className="w-5 h-5 text-[#3AA6B5] shrink-0" />
                    <div>
                      <p className="font-bold text-[#2A8C9E]">Brief Submitted Successfully!</p>
                      <p className="text-xs text-slate-400 mt-0.5">We have locked your inquiry. A senior solution architect will follow up very shortly.</p>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-form-submit-btn"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-display text-base font-bold text-white bg-gradient-to-r from-[#2A8C9E] to-[#3AA6B5] hover:from-[#E8B84B] hover:to-[#F0C674] hover:text-[#1B3A5C] transition-all duration-300 transform hover:scale-101 disabled:opacity-50 pointer-events-auto"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{isSubmitting ? 'Submitting Brief...' : 'Send Technical Brief'}</span>
                </button>
              </form>
            </div>

            {/* Split Right - Office info cards + Visual Map Mock */}
            <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
              
              {/* Core numbers/emails container */}
              <div className="bg-[#0b1523] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <h3 className="font-display font-extrabold text-lg text-white border-l-3 border-[#3AA6B5] pl-3">
                  Inquiry Coordinates
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 text-[#2A8C9E] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-100">Corporate Headquarters</p>
                      <p className="text-xs text-slate-400 mt-1">Level 28, Menara Binjai, No 2 Jalan Binjai, 50450 Kuala Lumpur, Malaysia</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-[#3AA6B5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-100">Corporate Front-Desk</p>
                      <p className="text-xs text-slate-400 mt-1">
                        <a href="tel:+60321811888" className="hover:text-[#2A8C9E] transition-colors font-medium">+60 3-2181 1888</a> (Operating Desk)
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-[#2A8C9E] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-100">Direct Electronic Mails</p>
                      <p className="text-xs text-slate-400 mt-1">
                        General Support: <a href="mailto:info@hasanahtech.com" className="hover:text-[#2A8C9E] font-medium text-slate-300 transition-colors">info@hasanahtech.com</a><br />
                        Vendor Inquiries: <a href="mailto:partners@hasanahtech.com" className="hover:text-[#2A8C9E] font-medium text-slate-300 transition-colors">partners@hasanahtech.com</a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-3.5">
                    <Clock className="w-5 h-5 text-[#E8B84B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-100">Malaysian Standard Working Hours</p>
                      <p className="text-xs text-slate-400 mt-1">Monday – Friday: 09:00 AM – 06:00 PM (UTC+8)<br />Saturdays / Sundays: Rest Days / Critical SLAs Support Open</p>
                    </div>
                  </li>
                </ul>

                {/* Social icons row */}
                <div className="flex space-x-3 pt-4 border-t border-white/5">
                  {[
                    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
                    { icon: <Github className="w-4 h-4" />, href: 'https://github.com' },
                    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
                    { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:bg-[#2A8C9E] hover:text-white items-center justify-center flex text-slate-300 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map visual placeholder */}
              <div className="bg-[#111f32]/40 border border-white/5 rounded-3xl p-4 overflow-hidden shadow-inner relative flex flex-col items-center justify-center aspect-[5/3]">
                {/* Visual SVG schematic map of Kuala Lumpur blocks */}
                <svg viewBox="0 0 400 240" className="w-full h-full opacity-35 filter blur-[0.5px]">
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#314158" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="#314158" strokeWidth="1" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#314158" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="100" y1="0" x2="100" y2="240" stroke="#314158" strokeWidth="1" />
                  <line x1="260" y1="0" x2="260" y2="240" stroke="#314158" strokeWidth="1" />
                  
                  {/* Simulated roads */}
                  <path d="M 0,90 Q 200,105 400,90" fill="none" stroke="#1e293b" strokeWidth="12" />
                  <path d="M 120,0 Q 150,120 120,240" fill="none" stroke="#1e293b" strokeWidth="16" />
                  <path d="M 0,220 L 400,10" fill="none" stroke="#1e293b" strokeWidth="8" />

                  {/* KLCC Park and buildings landmarks */}
                  <rect x="200" y="20" width="80" height="60" rx="4" fill="#3AA6B5" opacity="0.3" />
                  <text x="210" y="55" className="font-display font-extrabold text-[10px] fill-slate-500 uppercase tracking-widest">KLCC Park</text>
                  
                  <rect x="20" y="140" width="60" height="40" rx="2" fill="#E8B84B" opacity="0.3" />
                  <text x="30" y="165" className="font-display font-extrabold text-[8px] fill-slate-500 uppercase tracking-widest">KL Tower</text>

                  {/* Pin Circle highlight location */}
                  <circle cx="150" cy="100" r="12" fill="#2A8C9E" opacity="0.2" className="animate-ping" />
                  <circle cx="150" cy="100" r="6" fill="#2A8C9E" />
                </svg>

                {/* Floating Map Info Overlay */}
                <div className="absolute bg-[#0b1523] text-white p-3 rounded-xl border border-white/10 shadow-lg text-center max-w-[180px]">
                  <p className="font-display font-bold text-xs text-[#E8B84B]">Hasanah Tech Solutions</p>
                  <p className="text-[9px] text-slate-300 mt-0.5">Menara Binjai, Level 28</p>
                  <a 
                    href="https://google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[9px] text-[#3AA6B5] hover:underline font-bold mt-1 block"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
