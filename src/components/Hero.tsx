'use client';

import React from 'react';
import { personalInfo, keyStats } from '@/data/portfolioData';
import { 
  FileText, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  BookOpen, 
  MapPin, 
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability pill */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Headline & Pitch */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12]">
            {personalInfo.name}
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-300">
            {personalInfo.headline}
          </p>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed pt-2">
            {personalInfo.bio}
          </p>
        </div>

        {/* Primary Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume PDF</span>
          </button>

          <a
            href="/auday_resume.pdf"
            download="Adabala_Uday_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800/80 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          {/* Social Icon Links */}
          <div className="flex items-center gap-2 ml-auto pt-2 sm:pt-0">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Executive Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80"
            >
              <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
