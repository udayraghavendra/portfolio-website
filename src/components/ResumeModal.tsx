'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-5xl h-[94vh] sm:h-[90vh] bg-white dark:bg-zinc-950 rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight truncate">
                {personalInfo.name} &mdash; Resume
              </h3>
              <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 truncate">
                Official PDF &bull; Data Scientist &amp; ML Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
            <a
              href={personalInfo.resumeUrl}
              download="Adabala_Uday_Resume.pdf"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Download</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Quick Action Banner */}
        <div className="sm:hidden px-3 py-2 bg-indigo-50 dark:bg-indigo-950/40 border-b border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between text-xs text-indigo-900 dark:text-indigo-200 shrink-0">
          <span>Viewing on mobile device?</span>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline flex items-center gap-1"
          >
            <span>Open Fullscreen</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full border-none"
            title="Adabala Uday Resume"
          />
        </div>

        {/* Footer Bar */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">Volteo Maritime &bull; Securden &bull; SASTRA</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Adabala_Uday_Resume.pdf"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Save PDF offline
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
