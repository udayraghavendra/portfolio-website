'use client';

import React from 'react';
import { experienceData } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  ArrowUpRight
} from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Experience &amp; Engineering Roles
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Nearly 3 years of industry engineering across applied AI/ML pipelines, production RAG systems, and enterprise cybersecurity validation.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all shadow-sm"
            >
              {/* Header: Role, Company, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-zinc-100 dark:border-zinc-800/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-400 font-normal">at</span>
                    <span className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </span>

                    {exp.highlightBadge && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60">
                        {exp.highlightBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {exp.summary}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-zinc-500 dark:text-zinc-400 shrink-0 font-medium">
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
              <div className="mt-5 space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Pills */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-1">
                  Technologies:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
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
