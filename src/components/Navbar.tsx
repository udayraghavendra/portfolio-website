'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { personalInfo } from '@/data/portfolioData';
import { 
  Sun, 
  Moon, 
  FileText, 
  Menu, 
  X, 
  Terminal, 
  Activity, 
  Cpu, 
  BookOpen, 
  Briefcase, 
  Layers,
  Send
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar = ({ onOpenResume }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'RAG Pipeline', href: '#rag-architecture', icon: Cpu },
    { name: 'Telemetry ML', href: '#telemetry-iot', icon: Activity },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Research', href: '#publications', icon: BookOpen },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0a0b10]/90 light:bg-white/90 backdrop-blur-md border-b-[2.5px] border-[#272c42] light:border-slate-900 py-3 shadow-lg'
          : 'bg-[#0a0b10]/60 light:bg-slate-50/80 backdrop-blur-sm border-b-[2px] border-[#272c42]/50 light:border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-white light:text-slate-900"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-black border-2 border-cyan-300 shadow-[2px_2px_0px_0px_#00d2ff]">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wide flex items-center gap-1.5">
                UDAY RAGHAVENDRA
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] text-cyan-400 light:text-blue-600 font-semibold uppercase tracking-wider">
                Data Scientist &bull; Maritime AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 light:text-slate-700 hover:text-white light:hover:text-black rounded-md hover:bg-[#181a28] light:hover:bg-slate-200/80 transition-all duration-150 border border-transparent hover:border-[#2f3552] light:hover:border-slate-400"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400 light:text-blue-600" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Color Theme"
              className="p-2 rounded-lg border-2 border-[#2f3552] light:border-slate-800 bg-[#141724] light:bg-white text-yellow-400 light:text-slate-800 hover:border-yellow-400 light:hover:border-blue-600 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.6)] light:shadow-[2px_2px_0px_0px_#0f172a] transition-all btn-tactile"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg border-2 border-cyan-400 bg-cyan-500/10 hover:bg-cyan-400 hover:text-black text-cyan-300 light:text-blue-900 light:bg-cyan-100 light:border-blue-600 shadow-[3px_3px_0px_0px_#00d2ff] light:shadow-[3px_3px_0px_0px_#2563eb] transition-all btn-tactile"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Color Theme"
              className="p-2 rounded-lg border-2 border-[#2f3552] light:border-slate-800 bg-[#141724] light:bg-white text-yellow-400 light:text-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border-2 border-[#2f3552] light:border-slate-800 bg-[#141724] light:bg-white text-white light:text-slate-900"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f18] light:bg-white border-b-4 border-cyan-400 light:border-blue-600 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-200 light:text-slate-800 rounded-lg hover:bg-[#1a1d2e] light:hover:bg-slate-100 border border-[#2b3048] light:border-slate-200"
              >
                <Icon className="w-4 h-4 text-cyan-400 light:text-blue-600" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg border-2 border-cyan-400 bg-cyan-400 text-black shadow-[3px_3px_0px_0px_#000]"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
