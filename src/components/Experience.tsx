'use client';

import React, { useState } from 'react';
import { experienceData } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Building2,
  Sparkles
} from 'lucide-react';

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<string>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const borderStyles: Record<string, { border: string; shadow: string; pill: string }> = {
    cyan: {
      border: 'border-cyan-400',
      shadow: 'shadow-[5px_5px_0px_0px_#00d2ff] light:shadow-[5px_5px_0px_0px_#0284c7]',
      pill: 'border-cyan-400 text-cyan-300 bg-cyan-950/60 light:bg-cyan-100 light:text-blue-900 light:border-blue-500',
    },
    purple: {
      border: 'border-purple-400',
      shadow: 'shadow-[5px_5px_0px_0px_#a855f7] light:shadow-[5px_5px_0px_0px_#7c3aed]',
      pill: 'border-purple-400 text-purple-300 bg-purple-950/60 light:bg-purple-100 light:text-purple-900 light:border-purple-500',
    },
    rose: {
      border: 'border-rose-400',
      shadow: 'shadow-[5px_5px_0px_0px_#f43f5e] light:shadow-[5px_5px_0px_0px_#e11d48]',
      pill: 'border-rose-400 text-rose-300 bg-rose-950/60 light:bg-rose-100 light:text-rose-900 light:border-rose-500',
    },
  };

  return (
    <section id="experience" className="py-20 bg-[#0a0b12] light:bg-slate-50 border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 border-b-2 border-[#202538] light:border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-cyan-400 bg-cyan-950/40 text-cyan-300 light:bg-cyan-100 light:text-blue-900 light:border-blue-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#00d2ff]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
            Work Experience &amp; Engineering Roles
          </h2>
          <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
            Nearly 3 years of industry engineering across applied AI/ML pipelines, production RAG systems, and enterprise cybersecurity validation.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="mt-12 space-y-8">
          {experienceData.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const style = borderStyles[exp.accentColor] || borderStyles.cyan;

            return (
              <div
                key={exp.id}
                className={`rounded-2xl bg-[#121524] light:bg-white border-3 ${style.border} ${style.shadow} transition-all duration-200 overflow-hidden`}
              >
                {/* Header Bar */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#161a2c] light:hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-black text-white light:text-slate-900 tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-slate-400 font-medium">@</span>
                      <span className="text-lg sm:text-xl font-bold text-cyan-300 light:text-blue-700">
                        {exp.company}
                      </span>

                      {exp.highlightBadge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border-2 ${style.pill}`}>
                          {exp.highlightBadge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 light:text-slate-500 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400 light:text-blue-600" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" />
                        {exp.type}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-rose-400 light:text-rose-600" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto">
                    <button
                      aria-label="Toggle details"
                      className="p-2 rounded-lg border-2 border-[#333b5c] light:border-slate-300 text-slate-300 light:text-slate-700 hover:text-white"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Card Summary Line */}
                <div className="px-6 pb-4 text-sm text-slate-300 light:text-slate-700 font-medium">
                  {exp.summary}
                </div>

                {/* Collapsible Detailed Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t-2 border-[#22273e] light:border-slate-200 space-y-6">
                    {/* Bullets List */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Key Accomplishments &amp; Technical Milestones:
                      </div>
                      <ul className="space-y-3 text-sm text-slate-300 light:text-slate-700">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used with Thicker Border Badges */}
                    <div className="pt-2">
                      <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                        Technologies &amp; Architecture:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#1a1f33] light:bg-slate-100 text-slate-200 light:text-slate-800 border-2 border-[#313959] light:border-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
