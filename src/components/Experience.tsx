'use client';

import React from 'react';
import { experienceData } from '@/data/portfolioData';
import { 
  Calendar, 
  MapPin, 
} from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Work Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Experience &amp; Engineering Roles
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Nearly 3 years of industry engineering across Python data ETL pipelines, applied AI/ML architectures, production RAG systems, and uncovering unknown analytical insights from operational data.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 sm:space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all shadow-sm"
            >
              {/* Header: Role, Company, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-400 font-normal text-sm sm:text-base">at</span>
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </span>

                    {exp.highlightBadge && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                        {exp.highlightBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.summary}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 shrink-0 font-medium pt-1 md:pt-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/60">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/60">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Pills */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-1">
                  Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
