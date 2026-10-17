'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer = ({ onOpenResume }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070a] light:bg-slate-100 border-t-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-white light:text-slate-900">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 light:text-slate-500 font-mono">
              Data Scientist &bull; Production RAG Systems &bull; Maritime IoT
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <button
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors"
            >
              Resume PDF
            </button>
            <span>&bull;</span>
            <a
              href="https://medium.com/@rag3kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Medium
            </a>
            <span>&bull;</span>
            <a
              href="https://ieeexplore.ieee.org/document/9776898"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              IEEE Xplore
            </a>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white light:hover:text-black p-1.5 rounded border border-[#2b3354] light:border-slate-300"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#1c2136] light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Adabala Uday Raghavendra Kumar. All rights reserved.
          </div>
          <div>
            Modern Thicker Color Architecture &bull; Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
