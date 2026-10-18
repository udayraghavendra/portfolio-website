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
  Heart
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar = ({ onOpenResume }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [likes, setLikes] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    }
  };

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
          ? 'bg-[#0b0416]/90 light:bg-white/90 backdrop-blur-md border-b border-[#29254c]/60 light:border-zinc-200 shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand like "Sb." in screenshot -> "Uk." */}
          <a
            href="#"
            className="flex items-center gap-1.5 group"
          >
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#c770f0] transition-transform group-hover:scale-105">
              Uk.
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-300 light:text-zinc-700 hover:text-[#c770f0] light:hover:text-[#8720c7] transition-colors relative group"
                >
                  <Icon className="w-4 h-4 text-[#c770f0] light:text-[#8720c7] opacity-80 group-hover:opacity-100" />
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c770f0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              );
            })}

            {/* Resume Nav Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-300 light:text-zinc-700 hover:text-[#c770f0] light:hover:text-[#8720c7] transition-colors relative group"
            >
              <FileText className="w-4 h-4 text-[#c770f0] light:text-[#8720c7] opacity-80 group-hover:opacity-100" />
              <span>Resume</span>
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c770f0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </button>
          </nav>

          {/* Right Action Icons: Theme Toggle + Like Pill */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-zinc-400 hover:text-[#c770f0] hover:bg-[#1a1738]/60 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Like Badge like in reference screenshot */}
            <button
              onClick={handleLike}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                liked 
                  ? 'bg-[#623686]/60 border-[#c770f0] text-white' 
                  : 'bg-[#181534]/70 hover:bg-[#623686]/40 border-[#3d3368] text-purple-300'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-[#c770f0] text-[#c770f0]' : 'text-[#c770f0]'}`} />
              <span>{likes}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-[#c770f0] hover:bg-[#1a1738]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#29254c] bg-[#0b0416]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-200 hover:text-[#c770f0] rounded-lg hover:bg-[#181534]"
              >
                <Icon className="w-4 h-4 text-[#c770f0]" />
                <span>{link.name}</span>
              </a>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-200 hover:text-[#c770f0] rounded-lg hover:bg-[#181534]"
          >
            <FileText className="w-4 h-4 text-[#c770f0]" />
            <span>Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
