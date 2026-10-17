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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog with Thick Border and Brutalist Shadow */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0d0f18] light:bg-white rounded-2xl border-3 border-cyan-400 light:border-blue-600 shadow-[8px_8px_0px_0px_#00d2ff] light:shadow-[8px_8px_0px_0px_#2563eb] flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b-2 border-[#242b42] light:border-slate-200 bg-[#121524] light:bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-400 text-black flex items-center justify-center font-bold border-2 border-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white light:text-slate-900 tracking-tight">
                {personalInfo.name} &mdash; Official Resume
              </h3>
              <p className="text-xs font-mono text-cyan-400 light:text-blue-700">
                Verified PDF &bull; Data Scientist &amp; ML Practitioner
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/auday_resume.pdf"
              download="Adabala_Uday_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 border-emerald-400 bg-emerald-400 text-black text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#059669] btn-tactile"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border-2 border-[#333b5c] light:border-slate-300 text-slate-400 hover:text-white light:hover:text-black hover:border-rose-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer or Fallback */}
        <div className="flex-1 bg-[#161824] relative overflow-hidden">
          <iframe
            src="/auday_resume.pdf#toolbar=0&navpanes=0"
            className="w-full h-full border-none"
            title="Adabala Uday Resume"
          />
        </div>

        {/* Footer Bar */}
        <div className="p-3.5 bg-[#10121d] light:bg-slate-100 border-t-2 border-[#242b42] light:border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Includes Volteo Maritime RAG, Telemetry ML &amp; Securden PAM Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/auday_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
