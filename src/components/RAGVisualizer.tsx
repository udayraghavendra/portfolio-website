'use client';

import React, { useState } from 'react';
import { ragPipelineStages } from '@/data/portfolioData';
import { 
  Cpu, 
  Layers, 
  Search, 
  Sliders, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Database,
  BarChart3,
  Sparkles,
  GitCompare,
  Terminal,
  Activity
} from 'lucide-react';

export const RAGVisualizer = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'evaluation'>('pipeline');
  const [selectedModel, setSelectedModel] = useState<'latest' | 'gemma' | 'v1'>('latest');

  const activeStage = ragPipelineStages.find((s) => s.id === activeStageId) || ragPipelineStages[0];

  // Colors mapping with thick border & shadow styles
  const stageAccents: Record<string, { border: string; shadow: string; bg: string; text: string }> = {
    cyan: {
      border: 'border-cyan-400',
      shadow: 'shadow-[4px_4px_0px_0px_#00d2ff]',
      bg: 'bg-cyan-500/10 light:bg-cyan-50',
      text: 'text-cyan-400 light:text-blue-700',
    },
    blue: {
      border: 'border-blue-500',
      shadow: 'shadow-[4px_4px_0px_0px_#3b82f6]',
      bg: 'bg-blue-500/10 light:bg-blue-50',
      text: 'text-blue-400 light:text-blue-700',
    },
    emerald: {
      border: 'border-emerald-400',
      shadow: 'shadow-[4px_4px_0px_0px_#10b981]',
      bg: 'bg-emerald-500/10 light:bg-emerald-50',
      text: 'text-emerald-400 light:text-emerald-700',
    },
    amber: {
      border: 'border-amber-400',
      shadow: 'shadow-[4px_4px_0px_0px_#f59e0b]',
      bg: 'bg-amber-500/10 light:bg-amber-50',
      text: 'text-amber-400 light:text-amber-700',
    },
    purple: {
      border: 'border-purple-400',
      shadow: 'shadow-[4px_4px_0px_0px_#a855f7]',
      bg: 'bg-purple-500/10 light:bg-purple-50',
      text: 'text-purple-400 light:text-purple-700',
    },
    rose: {
      border: 'border-rose-400',
      shadow: 'shadow-[4px_4px_0px_0px_#f43f5e]',
      bg: 'bg-rose-500/10 light:bg-rose-50',
      text: 'text-rose-400 light:text-rose-700',
    },
  };

  const modelBenchmarkData = {
    latest: {
      name: 'Latest Model (Fine-tuned NIM API)',
      faithfulness: 96.4,
      contextRelevancy: 94.8,
      answerRelevancy: 95.2,
      latency: 420,
      driftRegression: '0.8%',
      confidenceGatePass: '97.6%',
      verdict: 'Recommended Production Model: Highest faithfulness and zero safety drift.',
    },
    gemma: {
      name: 'Gemma 3B (Local quantized fallback)',
      faithfulness: 88.2,
      contextRelevancy: 86.5,
      answerRelevancy: 87.1,
      latency: 280,
      driftRegression: '3.4%',
      confidenceGatePass: '89.2%',
      verdict: 'Ultra-low latency edge model for on-vessel offline inference.',
    },
    v1: {
      name: 'V1 Baseline (Initial Architecture)',
      faithfulness: 79.5,
      contextRelevancy: 74.0,
      answerRelevancy: 81.3,
      latency: 890,
      driftRegression: '8.2%',
      confidenceGatePass: '76.1%',
      verdict: 'Legacy baseline before hierarchical chunking and cross-encoder re-ranking.',
    },
  };

  return (
    <section id="rag-architecture" className="py-20 bg-[#08090e] light:bg-slate-50 border-t-3 border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Section Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#202538] light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-cyan-400 bg-cyan-950/40 text-cyan-300 light:bg-cyan-100 light:text-blue-900 light:border-blue-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#00d2ff]">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION RAG SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
              Enterprise Document Intelligence Engine
            </h2>
            <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
              Deep dive into the 6-stage RAG architecture and 5-layer model evaluation framework architected for Volteo Maritime&apos;s technical operational corpus.
            </p>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center p-1.5 rounded-lg border-2 border-[#2f3654] light:border-slate-400 bg-[#121524] light:bg-white shadow-[3px_3px_0px_0px_#000] light:shadow-[3px_3px_0px_0px_#94a3b8]">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-bold transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-cyan-400 text-black border-2 border-cyan-300 shadow-[2px_2px_0px_0px_#0284c7]'
                  : 'text-slate-400 hover:text-white light:hover:text-black'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Pipeline Flow (6 Stages)</span>
            </button>
            <button
              onClick={() => setActiveTab('evaluation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-bold transition-all ${
                activeTab === 'evaluation'
                  ? 'bg-purple-500 text-white border-2 border-purple-400 shadow-[2px_2px_0px_0px_#7c3aed]'
                  : 'text-slate-400 hover:text-white light:hover:text-black'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>43-Query Evaluation Matrix</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Pipeline Flow */}
        {activeTab === 'pipeline' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Select Architecture Stage:</span>
                <span className="text-cyan-400">Step {activeStageId} of 6</span>
              </div>

              {ragPipelineStages.map((stage) => {
                const isActive = stage.id === activeStageId;
                const accent = stageAccents[stage.accent];

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left p-4 rounded-xl border-3 transition-all flex items-start gap-3.5 ${
                      isActive
                        ? `${accent.border} ${accent.bg} ${accent.shadow} -translate-y-0.5`
                        : 'border-[#23283e] light:border-slate-200 bg-[#10121d] light:bg-white hover:border-[#384166] light:hover:border-slate-400'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-black flex items-center justify-center shrink-0 border-2 ${
                        isActive
                          ? 'bg-black text-white border-white light:bg-slate-900 light:text-white'
                          : 'bg-[#181c2e] text-slate-400 border-[#2f3654] light:bg-slate-100 light:text-slate-600'
                      }`}
                    >
                      {stage.id}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-bold truncate ${isActive ? 'text-white light:text-slate-900' : 'text-slate-300 light:text-slate-700'}`}>
                          {stage.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-cyan-400/60 bg-cyan-950/60 text-cyan-300 light:bg-cyan-100 light:text-blue-900">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 light:text-slate-500 font-medium truncate mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Inspector */}
            <div className="lg:col-span-7">
              <div className={`p-6 sm:p-8 rounded-2xl bg-[#121524] light:bg-white border-3 ${stageAccents[activeStage.accent].border} ${stageAccents[activeStage.accent].shadow}`}>
                
                {/* Stage Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-[#242a42] light:border-slate-200">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Stage 0{activeStage.id} Implementation
                    </span>
                    <h3 className="text-2xl font-black text-white light:text-slate-900 mt-1">
                      {activeStage.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border-2 ${stageAccents[activeStage.accent].border} ${stageAccents[activeStage.accent].text}`}>
                    {activeStage.subtitle}
                  </span>
                </div>

                {/* Tech Stack Badges */}
                <div className="py-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                  {activeStage.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[#1a1f33] light:bg-slate-100 text-slate-200 light:text-slate-800 border border-[#313959] light:border-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-sm text-slate-300 light:text-slate-700 leading-relaxed py-2">
                  {activeStage.description}
                </div>

                {/* Architectural Details */}
                <div className="my-4 space-y-2.5 bg-[#0a0d16] light:bg-slate-50 p-4 rounded-xl border-2 border-[#22283e] light:border-slate-200">
                  <div className="text-xs font-mono font-bold text-cyan-400 light:text-blue-700 flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    Key Architectural Nuances
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 light:text-slate-600">
                    {activeStage.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benchmark Metric Badge */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#171b2e] to-[#121626] light:from-slate-100 light:to-white border-2 border-[#333b5c] light:border-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border-2 border-emerald-400">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Impact Metric</div>
                      <div className="text-sm font-bold text-white light:text-slate-900">{activeStage.metrics}</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-cyan-400">
                    <span>Volteo Maritime</span>
                  </div>
                </div>

                {/* Next / Previous Stepper */}
                <div className="pt-6 flex items-center justify-between border-t-2 border-[#242a42] light:border-slate-200 mt-6">
                  <button
                    disabled={activeStageId === 1}
                    onClick={() => setActiveStageId((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 text-xs font-mono font-bold rounded-lg border-2 border-[#2f3757] text-slate-300 disabled:opacity-40 hover:bg-[#1a1f33] disabled:hover:bg-transparent"
                  >
                    &larr; Prev Stage
                  </button>
                  <span className="font-mono text-xs text-slate-500">
                    Step {activeStageId} of {ragPipelineStages.length}
                  </span>
                  <button
                    disabled={activeStageId === ragPipelineStages.length}
                    onClick={() => setActiveStageId((prev) => Math.min(ragPipelineStages.length, prev + 1))}
                    className="px-4 py-2 text-xs font-mono font-bold rounded-lg border-2 border-cyan-400 bg-cyan-400 text-black hover:bg-cyan-300 disabled:opacity-40 shadow-[2px_2px_0px_0px_#0284c7]"
                  >
                    Next Stage &rarr;
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: 43-Query Evaluation Matrix */}
        {activeTab === 'evaluation' && (
          <div className="mt-10 space-y-8">
            {/* Context Box */}
            <div className="p-6 rounded-2xl bg-[#121524] light:bg-white border-3 border-purple-400 shadow-[4px_4px_0px_0px_#a855f7] light:shadow-[4px_4px_0px_0px_#7c3aed]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b-2 border-[#292f4c] light:border-slate-200">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wide">
                    5-Layer Structured Evaluation Framework
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white light:text-slate-900 mt-1">
                    43-Question Benchmark across 3 Model Generations
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {(['latest', 'gemma', 'v1'] as const).map((mKey) => (
                    <button
                      key={mKey}
                      onClick={() => setSelectedModel(mKey)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-2 transition-all ${
                        selectedModel === mKey
                          ? 'border-purple-400 bg-purple-500 text-white shadow-[2px_2px_0px_0px_#000]'
                          : 'border-[#2f3757] light:border-slate-300 text-slate-400 hover:text-white light:hover:text-black bg-[#161a2d] light:bg-slate-100'
                      }`}
                    >
                      {mKey === 'latest' ? 'Latest (NIM)' : mKey === 'gemma' ? 'Gemma 3B' : 'V1 Baseline'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Model Performance Card */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-extrabold text-white light:text-slate-900 flex items-center gap-2">
                    <GitCompare className="w-5 h-5 text-purple-400" />
                    <span>{modelBenchmarkData[selectedModel].name}</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    Query Drift: <strong className="text-emerald-400">{modelBenchmarkData[selectedModel].driftRegression}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Metric 1 */}
                  <div className="p-4 rounded-xl bg-[#0b0e18] light:bg-slate-50 border-2 border-[#252c47] light:border-slate-200">
                    <div className="text-xs font-mono text-slate-400 uppercase">NLI Faithfulness</div>
                    <div className="text-2xl font-black font-mono text-cyan-400 light:text-blue-600 mt-1">
                      {modelBenchmarkData[selectedModel].faithfulness}%
                    </div>
                    <div className="w-full bg-[#1e243b] light:bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-cyan-400 h-full rounded-full"
                        style={{ width: `${modelBenchmarkData[selectedModel].faithfulness}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-xl bg-[#0b0e18] light:bg-slate-50 border-2 border-[#252c47] light:border-slate-200">
                    <div className="text-xs font-mono text-slate-400 uppercase">Context Relevancy</div>
                    <div className="text-2xl font-black font-mono text-emerald-400 light:text-emerald-600 mt-1">
                      {modelBenchmarkData[selectedModel].contextRelevancy}%
                    </div>
                    <div className="w-full bg-[#1e243b] light:bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-emerald-400 h-full rounded-full"
                        style={{ width: `${modelBenchmarkData[selectedModel].contextRelevancy}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-4 rounded-xl bg-[#0b0e18] light:bg-slate-50 border-2 border-[#252c47] light:border-slate-200">
                    <div className="text-xs font-mono text-slate-400 uppercase">Confidence Gate Pass</div>
                    <div className="text-2xl font-black font-mono text-purple-400 light:text-purple-600 mt-1">
                      {modelBenchmarkData[selectedModel].confidenceGatePass}
                    </div>
                    <div className="w-full bg-[#1e243b] light:bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-purple-400 h-full rounded-full"
                        style={{ width: modelBenchmarkData[selectedModel].confidenceGatePass }}
                      ></div>
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-4 rounded-xl bg-[#0b0e18] light:bg-slate-50 border-2 border-[#252c47] light:border-slate-200">
                    <div className="text-xs font-mono text-slate-400 uppercase">Average Latency</div>
                    <div className="text-2xl font-black font-mono text-amber-400 light:text-amber-600 mt-1">
                      {modelBenchmarkData[selectedModel].latency} ms
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-2">
                      End-to-end token response time
                    </div>
                  </div>
                </div>

                {/* Model Verdict */}
                <div className="mt-4 p-3.5 rounded-lg bg-[#191d31] light:bg-slate-100 border border-purple-500/40 text-xs font-mono text-slate-300 light:text-slate-700 flex items-center gap-2">
                  <span className="text-purple-400 font-bold">&gt; Evaluation Note:</span>
                  <span>{modelBenchmarkData[selectedModel].verdict}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
