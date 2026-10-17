'use client';

import React from 'react';
import { publicationsData } from '@/data/portfolioData';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

export const Publications = () => {
  return (
    <section id="publications" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Research &amp; Publications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Published Research &amp; Technical Writing
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Academic contributions and technical publications documenting computer vision methodologies and real-time maritime AI architectures.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationsData.map((pub) => {
            const isIEEE = pub.type === 'Journal / IEEE';

            return (
              <div
                key={pub.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Type Badge & Publisher */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800/60 text-xs">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-medium border ${
                        isIEEE
                          ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/60'
                          : 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60'
                      }`}
                    >
                      {pub.type}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                      {pub.publisher} &bull; {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4 leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Authors:</span>{' '}
                    {pub.authors.join(', ')}
                  </p>

                  {/* Abstract */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/60">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
