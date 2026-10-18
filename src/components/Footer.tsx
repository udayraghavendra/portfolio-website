'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer = ({ onOpenResume }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-[#252044] bg-white dark:bg-[#0b0416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <span className="text-[#c770f0] font-extrabold">Uk.</span>
              <span>{personalInfo.name}</span>
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {personalInfo.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <button
              onClick={onOpenResume}
              className="hover:text-[#c770f0] transition-colors"
            >
              Resume PDF
            </button>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c770f0] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c770f0] transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c770f0] transition-colors"
            >
              Medium
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a
              href="https://ieeexplore.ieee.org/document/9776898"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c770f0] transition-colors"
            >
              IEEE Xplore
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Adabala Uday Raghavendra Kumar. All rights reserved.
          </div>
          <div>
            Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
