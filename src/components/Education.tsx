'use client';

import React from 'react';
import { educationData } from '@/data/portfolioData';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education &amp; Academic Credentials
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Formal graduate education in Artificial Intelligence &amp; Data Science complemented by undergraduate mechanical engineering fundamentals.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4 leading-snug">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {edu.institution}
                </div>

                {/* Coursework */}
                <div className="mt-5">
                  <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    Key Coursework &amp; Topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs bg-zinc-100 text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/50"
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
