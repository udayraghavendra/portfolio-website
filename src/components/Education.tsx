'use client';

import React from 'react';
import { educationData } from '@/data/portfolioData';
import { GraduationCap, BookOpen, Award, Sparkles } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#08090e] light:bg-white border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 border-b-2 border-[#202538] light:border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-indigo-400 bg-indigo-950/40 text-indigo-300 light:bg-indigo-100 light:text-indigo-900 light:border-indigo-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#6366f1]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
            Degrees &amp; Formal Education
          </h2>
          <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
            Rigorous graduate coursework in AI &amp; Data Science complemented by undergraduate mechanical engineering fundamentals.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => {
            const isMTech = edu.degree.startsWith('M.Tech');

            return (
              <div
                key={edu.degree}
                className={`p-7 rounded-2xl bg-[#121524] light:bg-slate-50 border-3 ${
                  isMTech
                    ? 'border-indigo-400 shadow-[5px_5px_0px_0px_#6366f1] light:shadow-[5px_5px_0px_0px_#4f46e5]'
                    : 'border-blue-400 shadow-[5px_5px_0px_0px_#3b82f6] light:shadow-[5px_5px_0px_0px_#2563eb]'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-[#242b45] light:border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border-2 border-indigo-400/80 bg-indigo-950/60 text-indigo-300 light:bg-indigo-100 light:text-indigo-900">
                      {edu.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white light:text-slate-900 mt-4 leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-bold text-cyan-400 light:text-blue-700 mt-1">
                    {edu.institution}
                  </div>

                  {/* Coursework */}
                  <div className="mt-6">
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      Key Coursework &amp; Specialization:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1a1f33] light:bg-white text-slate-300 light:text-slate-700 border border-[#2f385c] light:border-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Synthesis Note for MTech / BTech */}
                <div className="mt-8 pt-4 border-t-2 border-[#242b45] light:border-slate-200 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    {isMTech
                      ? 'Core focus: Statistical learning, time series forecasting, & modern NLP.'
                      : 'Physical grounding: Thermodynamics & fluid mechanics for maritime BOG analysis.'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cross-Disciplinary Advantage Highlight */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-950/30 via-indigo-950/30 to-purple-950/30 border-2 border-indigo-500/40 text-slate-300 light:text-slate-800 text-xs sm:text-sm font-mono leading-relaxed flex items-start gap-3">
          <Award className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white light:text-black">The Mechanical Engineering + AI Fusion:</strong> Uday&apos;s dual background in mechanical engineering thermodynamics combined with an M.Tech in AI &amp; Data Science provides him with a rare domain advantage when formulating mathematical Boil-Off Gas (BOG) predictive equations and physical vessel sensor validation models.
          </div>
        </div>

      </div>
    </section>
  );
};
