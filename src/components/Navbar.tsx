'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { personalInfo } from '@/data/portfolioData';
import { 
  Home,
  User,
  Briefcase, 
  Layers,
  BookOpen, 
  FileText, 
  Sun, 
  Moon, 
  Menu, 
  X,
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
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Publications', href: '#publications', icon: BookOpen },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f1117]/90 light:bg-white/90 backdrop-blur-md border-b border-zinc-800/60 light:border-zinc-200 shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-transform group-hover:scale-[1.02]">
              <span className="text-indigo-400">Uday</span> Raghavendra
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-400 light:text-zinc-600 hover:text-zinc-100 light:hover:text-zinc-900 transition-colors relative group"
                >
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              );
            })}

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-400 light:text-zinc-600 hover:text-zinc-100 transition-colors relative group"
            >
              <FileText className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              <span>Resume</span>
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800/60 bg-[#0f1117]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/60"
              >
                <Icon className="w-4 h-4 text-zinc-500" />
                <span>{link.name}</span>
              </a>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/60"
          >
            <FileText className="w-4 h-4 text-zinc-500" />
            <span>Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
