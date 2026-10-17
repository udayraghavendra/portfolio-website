'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { Layers, Search, CheckCircle2, Globe2, Terminal } from 'lucide-react';

export const SkillMatrix = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories.map((cat) => {
    if (activeCategory !== 'all' && cat.category !== activeCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0 && searchQuery !== '') return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  const categoryColorStyles: Record<string, { border: string; text: string; bg: string; shadow: string }> = {
    cyan: {
      border: 'border-cyan-400',
      text: 'text-cyan-400 light:text-blue-700',
      bg: 'bg-cyan-500/10 light:bg-cyan-50',
      shadow: 'shadow-[4px_4px_0px_0px_#00d2ff]',
    },
    emerald: {
      border: 'border-emerald-400',
      text: 'text-emerald-400 light:text-emerald-700',
      bg: 'bg-emerald-500/10 light:bg-emerald-50',
      shadow: 'shadow-[4px_4px_0px_0px_#10b981]',
    },
    amber: {
      border: 'border-amber-400',
      text: 'text-amber-400 light:text-amber-700',
      bg: 'bg-amber-500/10 light:bg-amber-50',
      shadow: 'shadow-[4px_4px_0px_0px_#f59e0b]',
    },
    purple: {
      border: 'border-purple-400',
      text: 'text-purple-400 light:text-purple-700',
      bg: 'bg-purple-500/10 light:bg-purple-50',
      shadow: 'shadow-[4px_4px_0px_0px_#a855f7]',
    },
    rose: {
      border: 'border-rose-400',
      text: 'text-rose-400 light:text-rose-700',
      bg: 'bg-rose-500/10 light:bg-rose-50',
      shadow: 'shadow-[4px_4px_0px_0px_#f43f5e]',
    },
    blue: {
      border: 'border-blue-400',
      text: 'text-blue-400 light:text-blue-700',
      bg: 'bg-blue-500/10 light:bg-blue-50',
      shadow: 'shadow-[4px_4px_0px_0px_#3b82f6]',
    },
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0b12] light:bg-slate-50 border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b-2 border-[#202538] light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-cyan-400 bg-cyan-950/40 text-cyan-300 light:bg-cyan-100 light:text-blue-900 light:border-blue-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#00d2ff]">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
              Skills, Frameworks &amp; Tooling
            </h2>
            <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
              Comprehensive toolkit spanning cutting-edge RAG &amp; LLM architectures, real-time IoT data pipelines, and enterprise validation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Qdrant, Spark, NIM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121524] light:bg-white text-white light:text-slate-900 pl-10 pr-4 py-2.5 rounded-xl border-2 border-[#2e3759] light:border-slate-300 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold border-2 transition-all ${
              activeCategory === 'all'
                ? 'border-cyan-400 bg-cyan-400 text-black shadow-[3px_3px_0px_0px_#0284c7]'
                : 'border-[#293150] light:border-slate-300 bg-[#121524] light:bg-white text-slate-400 hover:text-white light:hover:text-black'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold border-2 transition-all ${
                activeCategory === cat.category
                  ? 'border-cyan-400 bg-cyan-400 text-black shadow-[3px_3px_0px_0px_#0284c7]'
                  : 'border-[#293150] light:border-slate-300 bg-[#121524] light:bg-white text-slate-400 hover:text-white light:hover:text-black'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Programming Languages Ribbon */}
        <div className="mt-6 p-4 rounded-xl bg-[#121524] light:bg-white border-2 border-[#2b3352] light:border-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white light:text-slate-900">Languages:</span>
            <span>Python (Expert) &bull; R &bull; SQL &bull; C &bull; C++</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white light:text-slate-900">Spoken Languages:</span>
            <span>English &bull; Telugu &bull; Hindi &bull; Tamil (spoken)</span>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            const style = categoryColorStyles[cat.color] || categoryColorStyles.cyan;

            return (
              <div
                key={cat.category}
                className={`p-6 rounded-2xl bg-[#121524] light:bg-white border-3 ${style.border} ${style.shadow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-[#232942] light:border-slate-200">
                    <h3 className="text-base font-extrabold text-white light:text-slate-900 tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 light:text-slate-600 mt-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-[#0b0e1a] light:bg-slate-50 border border-[#232940] light:border-slate-200 flex items-start justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-mono font-bold text-slate-200 light:text-slate-900 truncate">
                            {skill.name}
                          </div>
                          {skill.description && (
                            <div className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5 truncate">
                              {skill.description}
                            </div>
                          )}
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 border ${
                            skill.level === 'Advanced'
                              ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 light:bg-emerald-100 light:text-emerald-800'
                              : 'border-cyan-500/60 bg-cyan-950/40 text-cyan-300 light:bg-cyan-100 light:text-blue-800'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
