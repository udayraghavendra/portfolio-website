'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo, keyStats } from '@/data/portfolioData';
import { 
  FileText, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  BookOpen, 
  MapPin,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const words = [
    'Data Engineer',
    'Data Scientist',
    'AI / ML Engineer',
    'RAG & LLM Specialist',
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = word.substring(0, currentText.length + 1);
        setCurrentText(nextText);
        if (nextText === word) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        const nextText = word.substring(0, currentText.length - 1);
        setCurrentText(nextText);
        if (nextText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 110);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">

      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-transparent dark:from-indigo-950/20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Greeting */}
            <div className="flex items-center gap-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Hi There!{' '}
                <span className="inline-block animate-wave origin-[70%_70%] select-none">
                  👋
                </span>
              </h2>
            </div>

            {/* Name Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
                I&apos;M{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-extrabold uppercase tracking-tight">
                  {personalInfo.shortName}
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="h-12 flex items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center">
                <span>{currentText}</span>
                <span className="animate-pulse text-indigo-600 dark:text-indigo-400 ml-1 font-mono font-light text-3xl sm:text-4xl">
                  |
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {personalInfo.subheadline}
            </p>

            {/* Bio */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Status + Location */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume (PDF)</span>
              </button>

              <a
                href="/auday_resume.pdf"
                download="Adabala_Uday_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 shadow-sm dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 dark:text-zinc-200 dark:border-zinc-700/60 dark:shadow-none transition-colors"
              >
                <Download className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Download PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-auto">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:text-zinc-400 dark:hover:text-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-600 dark:shadow-none transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:text-zinc-400 dark:hover:text-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-600 dark:shadow-none transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Medium"
                  className="p-2.5 rounded-lg text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white hover:border-zinc-300 shadow-sm dark:text-zinc-400 dark:hover:text-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-600 dark:shadow-none transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 dark:border-zinc-800/80 dark:bg-zinc-900 dark:shadow-2xl dark:shadow-black/40">
              <Image
                src="/hero-illustration.jpg"
                alt="Developer at desk illustration"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Key Stats Cards */}
        <div id="about" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800/60">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm dark:bg-zinc-900/60 dark:border-zinc-800/60 dark:hover:border-zinc-700 dark:shadow-none transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">
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
