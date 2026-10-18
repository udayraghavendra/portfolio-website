'use client';

import React from 'react';
import { educationData } from '@/data/portfolioData';
import { BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-14 sm:py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education &amp; Academic Credentials
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Formal graduate education in Artificial Intelligence &amp; Data Science complemented by undergraduate mechanical engineering fundamentals.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="p-4 sm:p-6 md:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/50">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-3 sm:mt-4 leading-snug">
                  {edu.degree}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {edu.institution}
                </div>

                {/* Coursework */}
                <div className="mt-4 sm:mt-5">
                  <div className="text-[11px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    Key Coursework &amp; Topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs bg-zinc-100 text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
