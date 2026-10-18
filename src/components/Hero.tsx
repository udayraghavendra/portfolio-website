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
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  // Typewriter effect matching the Soumyajit Behera style in reference image
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
      
      {/* Background ambient cosmic purple glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#c770f0]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[#623686]/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Layout like reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Typewriter & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hi There! Greeting */}
            <div className="flex items-center gap-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white light:text-zinc-900">
                Hi There!{' '}
                <span className="inline-block animate-wave origin-[70%_70%] select-none">
                  👋
                </span>
              </h2>
            </div>

            {/* Main Name Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white light:text-zinc-900 leading-[1.15]">
                I&apos;M{' '}
                <span className="text-[#c770f0] font-extrabold uppercase tracking-tight">
                  {personalInfo.shortName}
                </span>
              </h1>
            </div>

            {/* Typewriter Effect Text */}
            <div className="h-12 flex items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c770f0] flex items-center">
                <span>{currentText}</span>
                <span className="animate-pulse text-[#c770f0] ml-1 font-mono font-light text-3xl sm:text-4xl">
                  |
                </span>
              </div>
            </div>

            {/* Focus Subtitle */}
            <p className="text-base sm:text-lg font-medium text-purple-200/90 light:text-purple-900 leading-relaxed max-w-2xl">
              {personalInfo.subheadline}
            </p>

            {/* Brief Bio Summary */}
            <p className="text-sm sm:text-base text-zinc-300 light:text-zinc-600 font-normal leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Availability Pill & Location */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#1a1330] text-purple-300 border border-[#4a2e7c]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c770f0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c770f0]"></span>
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#c770f0]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#623686] hover:bg-[#7928ca] text-white shadow-lg shadow-purple-950/50 hover:shadow-purple-900/60 transition-all"
              >
                <FileText className="w-4 h-4 text-purple-200" />
                <span>View Resume (PDF)</span>
              </button>

              <a
                href="/auday_resume.pdf"
                download="Adabala_Uday_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#161329] hover:bg-[#201c3d] text-zinc-200 border border-[#383159] transition-colors"
              >
                <Download className="w-4 h-4 text-purple-300" />
                <span>Download PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-[#1a1634] transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-300" />
                <span>Contact Me</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-auto">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-[#c770f0] border border-[#2d2850] bg-[#120f26] hover:border-[#623686] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-[#c770f0] border border-[#2d2850] bg-[#120f26] hover:border-[#623686] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Medium"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-[#c770f0] border border-[#2d2850] bg-[#120f26] hover:border-[#623686] transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Isometric Developer Illustration like in reference image */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Ambient purple backlight halo */}
            <div className="absolute inset-0 bg-[#c770f0]/20 blur-[90px] rounded-full pointer-events-none -z-10" />

            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl overflow-hidden border border-[#3b3260]/60 shadow-2xl shadow-purple-950/80 animate-float bg-[#120e26]">
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

        {/* Executive Highlights Cards */}
        <div id="about" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#252044]">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-[#141029]/80 border border-[#2c264e] hover:border-[#623686] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#c770f0] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-zinc-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
