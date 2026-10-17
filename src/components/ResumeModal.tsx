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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {personalInfo.name} &mdash; Resume
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Official PDF &bull; Data Scientist &amp; ML Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/auday_resume.pdf"
              download="Adabala_Uday_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/auday_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>New Tab</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
          <iframe
            src="/auday_resume.pdf#toolbar=0&navpanes=0"
            className="w-full h-full border-none"
            title="Adabala Uday Resume"
          />
        </div>

        {/* Footer Bar */}
        <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Covers Volteo Maritime, Securden Technologies &amp; SASTRA University</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/auday_resume.pdf"
              download="Adabala_Uday_Resume.pdf"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Click here to save offline
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
