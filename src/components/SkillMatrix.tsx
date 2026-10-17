'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { Layers, Search, CheckCircle2 } from 'lucide-react';

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

  const levelBadge = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60';
      case 'Proficient':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Skills, Frameworks &amp; Tooling
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
              Hands-on proficiencies across applied AI architectures, data engineering pipelines, machine learning algorithms, and quality verification.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Qdrant, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat.category
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            return (
              <div key={cat.category} className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {cat.category}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelBadge(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
