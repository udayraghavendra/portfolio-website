'use client';

import React from 'react';
import { publicationsData } from '@/data/portfolioData';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';

export const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-[#08090e] light:bg-white border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 border-b-2 border-[#202538] light:border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-amber-400 bg-amber-950/40 text-amber-300 light:bg-amber-100 light:text-amber-900 light:border-amber-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#f59e0b]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH &amp; PUBLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
            Peer-Reviewed Papers &amp; Industry Publications
          </h2>
          <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
            Documenting deep learning breakthroughs and practical ML architectures across maritime industrial IoT and precision computer vision.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publicationsData.map((pub, idx) => {
            const isIEEE = pub.type === 'Journal / IEEE';
            const accentBorder = isIEEE
              ? 'border-amber-400 shadow-[5px_5px_0px_0px_#f59e0b] light:shadow-[5px_5px_0px_0px_#d97706]'
              : 'border-cyan-400 shadow-[5px_5px_0px_0px_#00d2ff] light:shadow-[5px_5px_0px_0px_#0284c7]';

            return (
              <div
                key={pub.id}
                className={`p-7 rounded-2xl bg-[#121524] light:bg-slate-50 border-3 ${accentBorder} flex flex-col justify-between transition-all hover:-translate-y-1`}
              >
                <div>
                  {/* Type Badge & Year */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b-2 border-[#22273d] light:border-slate-200">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold border-2 ${
                        isIEEE
                          ? 'border-amber-400 bg-amber-950/50 text-amber-300 light:bg-amber-100 light:text-amber-900'
                          : 'border-cyan-400 bg-cyan-950/50 text-cyan-300 light:bg-cyan-100 light:text-blue-900'
                      }`}
                    >
                      {pub.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {pub.publisher} &bull; {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white light:text-slate-900 mt-4 leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <div className="text-xs font-mono text-cyan-400 light:text-blue-700 mt-2 font-semibold">
                    Authors: {pub.authors.join(', ')}
                  </div>

                  {/* Abstract */}
                  <p className="text-sm text-slate-300 light:text-slate-600 mt-4 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1a1f33] light:bg-white text-slate-300 light:text-slate-700 border border-[#313a5c] light:border-slate-300 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Link Button */}
                <div className="mt-8 pt-4 border-t-2 border-[#22273d] light:border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {isIEEE ? 'Official IEEE Indexing' : 'Published on Medium'}
                  </span>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold border-2 transition-all btn-tactile ${
                      isIEEE
                        ? 'border-amber-400 bg-amber-400 text-black shadow-[3px_3px_0px_0px_#78350f]'
                        : 'border-cyan-400 bg-cyan-400 text-black shadow-[3px_3px_0px_0px_#075985]'
                    }`}
                  >
                    <span>Read Publication</span>
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
