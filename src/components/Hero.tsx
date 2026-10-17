'use client';

import React from 'react';
import { personalInfo, keyStats } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Activity, 
  Download, 
  Linkedin, 
  Github, 
  BookOpen, 
  Mail,
  CheckCircle2,
  Database,
  Radio
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill with Thicker Border */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border-2 border-emerald-400 bg-emerald-500/10 light:bg-emerald-100/90 text-emerald-400 light:text-emerald-800 text-xs font-mono font-bold tracking-wide shadow-[3px_3px_0px_0px_#10b981]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline with Thick Accent Styling */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 light:from-blue-600 light:to-cyan-600">Adabala Uday</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-mono text-slate-300 light:text-slate-700">
                  Data Scientist &amp; ML Practitioner
                </span>
              </h1>
            </div>

            {/* Pitch / Summary */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 font-normal leading-relaxed max-w-2xl">
              Currently driving <strong className="text-cyan-300 light:text-blue-700 font-semibold">production RAG document intelligence</strong> and <strong className="text-emerald-300 light:text-emerald-700 font-semibold">real-time LNG vessel telemetry anomaly detection</strong> at <span className="underline decoration-cyan-400 decoration-2 font-semibold text-white light:text-slate-900">Volteo Maritime</span>. M.Tech AI &amp; Data Science graduate with nearly 3 years of hands-on data engineering, predictive modeling, and enterprise QA experience.
            </p>

            {/* Quick Tech Tag Stream with Thicker Borders */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md border-2 border-cyan-400/80 bg-cyan-950/40 text-cyan-300 light:bg-cyan-50 light:text-blue-900 light:border-blue-500 font-semibold">
                LangChain &amp; LlamaIndex
              </span>
              <span className="px-2.5 py-1 rounded-md border-2 border-emerald-400/80 bg-emerald-950/40 text-emerald-300 light:bg-emerald-50 light:text-emerald-900 light:border-emerald-500 font-semibold">
                QdrantDB (Hybrid HNSW+BM25)
              </span>
              <span className="px-2.5 py-1 rounded-md border-2 border-amber-400/80 bg-amber-950/40 text-amber-300 light:bg-amber-50 light:text-amber-900 light:border-amber-500 font-semibold">
                BOG Predictive Modelling
              </span>
              <span className="px-2.5 py-1 rounded-md border-2 border-purple-400/80 bg-purple-950/40 text-purple-300 light:bg-purple-50 light:text-purple-900 light:border-purple-500 font-semibold">
                NVIDIA NIM &amp; FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-md border-2 border-rose-400/80 bg-rose-950/40 text-rose-300 light:bg-rose-50 light:text-rose-900 light:border-rose-500 font-semibold">
                5-Layer RAG Evaluation
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#rag-architecture"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-cyan-400 text-black border-2 border-cyan-300 hover:bg-cyan-300 shadow-[4px_4px_0px_0px_#0284c7] btn-tactile"
              >
                <Cpu className="w-4 h-4" />
                <span>Explore RAG System</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#telemetry-iot"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-[#151928] light:bg-white text-emerald-400 light:text-emerald-800 border-2 border-emerald-400 shadow-[4px_4px_0px_0px_#10b981] btn-tactile"
              >
                <Activity className="w-4 h-4" />
                <span>Telemetry Simulator</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-[#141724] light:bg-slate-100 text-slate-200 light:text-slate-800 border-2 border-[#373e5c] light:border-slate-400 hover:border-slate-300 shadow-[4px_4px_0px_0px_#272c42] light:shadow-[4px_4px_0px_0px_#94a3b8] btn-tactile"
              >
                <Download className="w-4 h-4 text-cyan-400 light:text-blue-600" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Connect directly:</span>
              <a
                href="https://medium.com/@rag3kumar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Medium (@rag3kumar)</span>
              </a>
              <a
                href="https://ieeexplore.ieee.org/document/9776898"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <span className="font-bold underline">IEEE Xplore</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Badge / High-Contrast Terminal Box */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border-3 border-cyan-400 light:border-blue-600 bg-[#0f121d] light:bg-slate-900 text-white p-5 shadow-[6px_6px_0px_0px_#00d2ff] light:shadow-[6px_6px_0px_0px_#2563eb] space-y-4">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#262c45]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block border border-black/40"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block border border-black/40"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block border border-black/40"></span>
                  <span className="font-mono text-xs text-slate-400 ml-2">uday@volteo-maritime:~/rag-core</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/40">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>ACTIVE RUNTIME</span>
                </div>
              </div>

              {/* Code / Architecture Snippet */}
              <div className="font-mono text-xs space-y-2 text-slate-300">
                <p className="text-emerald-400"># Production RAG &amp; Telemetry Pipeline</p>
                <div className="space-y-1 bg-[#090b12] p-3 rounded-lg border border-[#232840]">
                  <p><span className="text-purple-400">role</span>: <span className="text-amber-300">&quot;Data Scientist&quot;</span></p>
                  <p><span className="text-purple-400">retrieval</span>: <span className="text-cyan-300">&quot;Hybrid (Dense HNSW + Sparse BM25)&quot;</span></p>
                  <p><span className="text-purple-400">fusion</span>: <span className="text-cyan-300">&quot;Reciprocal Rank Fusion (k=60)&quot;</span></p>
                  <p><span className="text-purple-400">verification</span>: <span className="text-rose-300">&quot;NLI Faithfulness &amp; Gating&quot;</span></p>
                  <p><span className="text-purple-400">iot_telemetry</span>: <span className="text-emerald-300">&quot;LNG Tank Pressure &amp; BOG Models&quot;</span></p>
                  <p><span className="text-purple-400">manual_effort_reduction</span>: <span className="text-emerald-300">&quot;~40%&quot;</span></p>
                </div>

                {/* System Diagnostics status indicators */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-[#161a2b] border border-cyan-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Qdrant HNSW Indexed</span>
                  </div>
                  <div className="p-2 rounded bg-[#161a2b] border border-emerald-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>FastAPI + NIM Connected</span>
                  </div>
                  <div className="p-2 rounded bg-[#161a2b] border border-amber-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>BOG Forecast Online</span>
                  </div>
                  <div className="p-2 rounded bg-[#161a2b] border border-purple-500/30 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Power BI Embedded Active</span>
                  </div>
                </div>
              </div>

              {/* Verified Author tag */}
              <div className="p-2.5 rounded bg-gradient-to-r from-blue-950/80 to-purple-950/80 border-2 border-blue-500/50 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Published Author:</span>
                <span className="text-cyan-300 font-bold">Volteo Maritime &amp; IEEE Xplore</span>
              </div>

            </div>
          </div>

        </div>

        {/* Key Stats Counter Section with Thick Borders */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat, idx) => {
            const borderColors = {
              cyan: 'border-cyan-400 shadow-[4px_4px_0px_0px_#00d2ff] light:shadow-[4px_4px_0px_0px_#0284c7]',
              emerald: 'border-emerald-400 shadow-[4px_4px_0px_0px_#10b981] light:shadow-[4px_4px_0px_0px_#059669]',
              purple: 'border-purple-400 shadow-[4px_4px_0px_0px_#a855f7] light:shadow-[4px_4px_0px_0px_#7c3aed]',
              amber: 'border-amber-400 shadow-[4px_4px_0px_0px_#f59e0b] light:shadow-[4px_4px_0px_0px_#d97706]',
            };
            const textColors = {
              cyan: 'text-cyan-400 light:text-blue-600',
              emerald: 'text-emerald-400 light:text-emerald-600',
              purple: 'text-purple-400 light:text-purple-600',
              amber: 'text-amber-400 light:text-amber-600',
            };

            return (
              <div
                key={stat.label}
                className={`p-5 rounded-xl bg-[#121420] light:bg-white border-3 ${borderColors[stat.accent as keyof typeof borderColors]} transition-all hover:-translate-y-1`}
              >
                <div className="text-xs font-mono font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className={`text-3xl font-black font-mono mt-1 ${textColors[stat.accent as keyof typeof textColors]}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 light:text-slate-600 font-medium mt-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
