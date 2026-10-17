'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  MapPin, 
  Check, 
  Send, 
  Linkedin, 
  Github, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0b12] light:bg-slate-50 border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 border-b-2 border-[#202538] light:border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-emerald-400 bg-emerald-950/40 text-emerald-300 light:bg-emerald-100 light:text-emerald-900 light:border-emerald-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#10b981]">
            <Send className="w-3.5 h-3.5" />
            <span>LET&apos;S COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
            Interested in discussing production RAG architectures, real-time IoT anomaly models, or high-impact Data Science roles? Transmit a message directly below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Professional Channels & Availability */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status & Location Card */}
            <div className="p-6 rounded-2xl bg-[#121524] light:bg-white border-3 border-cyan-400 shadow-[4px_4px_0px_0px_#00d2ff] light:shadow-[4px_4px_0px_0px_#0284c7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border-2 border-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Availability &amp; Location</div>
                  <div className="text-sm font-bold text-white light:text-slate-900">
                    Open to Remote &amp; Global Opportunities
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#232942] light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Based in {personalInfo.location}</span>
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>

            {/* Social / Professional Profiles Card */}
            <div className="p-6 rounded-2xl bg-[#121524] light:bg-white border-3 border-purple-400 shadow-[4px_4px_0px_0px_#a855f7] light:shadow-[4px_4px_0px_0px_#7c3aed] space-y-4">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Professional Networks &amp; Research:
              </div>

              <div className="space-y-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0c0e1a] light:bg-slate-50 border-2 border-[#2b3354] light:border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs font-mono font-bold text-white light:text-slate-900">LinkedIn Profile</div>
                      <div className="text-[11px] text-slate-400">Connect for professional discussions</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-blue-400 font-bold">&rarr;</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0c0e1a] light:bg-slate-50 border-2 border-[#2b3354] light:border-slate-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-mono font-bold text-white light:text-slate-900">GitHub Profile</div>
                      <div className="text-[11px] text-slate-400">Repositories &amp; open-source code</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 font-bold">&rarr;</span>
                </a>

                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0c0e1a] light:bg-slate-50 border-2 border-[#2b3354] light:border-slate-200 hover:border-cyan-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-mono font-bold text-white light:text-slate-900">Medium Publications</div>
                      <div className="text-[11px] text-slate-400">Technical maritime AI articles</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-400 font-bold">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Privacy Guarantee Note */}
            <div className="p-4 rounded-xl bg-[#0e111d] light:bg-slate-100 border-2 border-[#22273c] light:border-slate-300 flex items-center gap-2.5 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct messages submitted through this portal are delivered securely.</span>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#121524] light:bg-white border-3 border-amber-400 shadow-[6px_6px_0px_0px_#f59e0b] light:shadow-[6px_6px_0px_0px_#d97706]">
              
              <div className="pb-4 border-b-2 border-[#232942] light:border-slate-200 mb-6">
                <h3 className="text-xl font-black text-white light:text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600 font-mono mt-1">
                  Leave your details and project inquiries to start a conversation.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border-2 border-emerald-400 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-400 text-black mx-auto flex items-center justify-center font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-300">Message Transmitted!</h4>
                  <p className="text-xs font-mono text-slate-300">
                    Thank you for reaching out. I will respond to your inquiry promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-[#0b0e1a] light:bg-slate-50 text-white light:text-slate-900 px-4 py-2.5 rounded-lg border-2 border-[#2c3454] light:border-slate-300 text-xs font-mono focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#0b0e1a] light:bg-slate-50 text-white light:text-slate-900 px-4 py-2.5 rounded-lg border-2 border-[#2c3454] light:border-slate-300 text-xs font-mono focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. RAG Architecture / AI Engineering Opportunity"
                      className="w-full bg-[#0b0e1a] light:bg-slate-50 text-white light:text-slate-900 px-4 py-2.5 rounded-lg border-2 border-[#2c3454] light:border-slate-300 text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or role specifications here..."
                      className="w-full bg-[#0b0e1a] light:bg-slate-50 text-white light:text-slate-900 px-4 py-2.5 rounded-lg border-2 border-[#2c3454] light:border-slate-300 text-xs font-mono focus:outline-none focus:border-amber-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg border-2 border-amber-400 bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_#78350f] hover:bg-amber-300 transition-all btn-tactile flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
