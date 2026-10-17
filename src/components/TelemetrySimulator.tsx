'use client';

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Gauge, 
  RefreshCw, 
  Sliders, 
  Radio, 
  Database, 
  ArrowUpRight,
  TrendingDown,
  Layers,
  BarChart2
} from 'lucide-react';

export const TelemetrySimulator = () => {
  const [tankPressure, setTankPressure] = useState<number>(104.5);
  const [cargoTemp, setCargoTemp] = useState<number>(-161.2);
  const [bogRate, setBogRate] = useState<number>(0.13);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [selectedVessel, setSelectedVessel] = useState<string>('LNG Pioneer (Tank #2)');
  const [anomalyThreshold, setAnomalyThreshold] = useState<number>(0.65);

  // Compute anomaly score based on deviation from nominal
  const pressureDeviation = Math.max(0, (tankPressure - 106.0) / 4.0);
  const tempDeviation = Math.max(0, (cargoTemp - (-160.0)) / 2.0);
  const calculatedAnomalyScore = Math.min(1.0, Number((pressureDeviation * 0.7 + tempDeviation * 0.3 + (bogRate > 0.2 ? 0.3 : 0)).toFixed(2)));
  const isAnomaly = calculatedAnomalyScore >= anomalyThreshold;

  // Auto tick simulation if enabled
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      // Natural sensor jitter
      setTankPressure((p) => {
        const jitter = (Math.random() - 0.48) * 0.4;
        return Number(Math.max(102.0, Math.min(110.0, p + jitter)).toFixed(2));
      });
      setCargoTemp((t) => {
        const jitter = (Math.random() - 0.49) * 0.1;
        return Number(Math.max(-162.5, Math.min(-158.0, t + jitter)).toFixed(2));
      });
      setBogRate((r) => {
        const jitter = (Math.random() - 0.48) * 0.01;
        return Number(Math.max(0.08, Math.min(0.35, r + jitter)).toFixed(3));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const triggerPressureSpike = () => {
    setTankPressure(108.8);
    setCargoTemp(-159.2);
    setBogRate(0.285);
  };

  const resetNominal = () => {
    setTankPressure(104.2);
    setCargoTemp(-161.4);
    setBogRate(0.125);
  };

  return (
    <section id="telemetry-iot" className="py-20 bg-[#0a0b12] light:bg-white border-b-3 border-[#22273d] light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b-2 border-[#202538] light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-emerald-400 bg-emerald-950/40 text-emerald-300 light:bg-emerald-100 light:text-emerald-900 light:border-emerald-600 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#10b981]">
              <Activity className="w-3.5 h-3.5" />
              <span>MARITIME IOT &amp; ANOMALY DETECTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 mt-3 tracking-tight">
              Real-Time LNG Telemetry &amp; BOG Simulator
            </h2>
            <p className="text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-2">
              Interactive demonstration of the real-time sensor ingestion, Boil-Off Gas (BOG) predictive tracking, and time-series anomaly detection developed at Volteo Maritime.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl border-3 border-emerald-400 bg-emerald-500/10 text-emerald-400 shadow-[3px_3px_0px_0px_#10b981] light:bg-emerald-50 light:text-emerald-800">
              <div className="text-[10px] font-mono uppercase font-bold text-slate-400 light:text-slate-600">Manual Effort Reduction</div>
              <div className="text-xl font-black font-mono">~40% Less Monitoring</div>
            </div>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls & Telemetry Readouts */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Toolbar */}
            <div className="p-4 rounded-xl bg-[#121524] light:bg-slate-50 border-3 border-[#282f4b] light:border-slate-300 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 light:text-slate-700">
                <span className="text-emerald-400 font-bold">Vessel Stream:</span>
                <select
                  value={selectedVessel}
                  onChange={(e) => setSelectedVessel(e.target.value)}
                  className="bg-[#0b0e1a] light:bg-white text-white light:text-slate-900 border-2 border-[#333d61] light:border-slate-400 rounded-lg px-2.5 py-1 text-xs font-mono font-semibold"
                >
                  <option value="LNG Pioneer (Tank #2)">LNG Pioneer (Tank #2)</option>
                  <option value="Arctic Voyager (Cargo Tank #1)">Arctic Voyager (Cargo Tank #1)</option>
                  <option value="Equatorial Carrier (Tank #4)">Equatorial Carrier (Tank #4)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 text-xs font-mono font-bold transition-all ${
                    isSimulating
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-900'
                      : 'border-slate-600 bg-slate-800 text-slate-400'
                  }`}
                >
                  <Radio className={`w-3.5 h-3.5 ${isSimulating ? 'animate-pulse text-emerald-400' : ''}`} />
                  <span>{isSimulating ? 'Live Ingestion ON' : 'Paused'}</span>
                </button>

                <button
                  onClick={resetNominal}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-[#353d61] bg-[#161a2c] text-xs font-mono text-slate-300 hover:text-white"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Nominal</span>
                </button>
              </div>
            </div>

            {/* Sensor Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Card 1: Tank Pressure */}
              <div className={`p-5 rounded-xl border-3 transition-all ${
                tankPressure > 107.0 
                  ? 'border-rose-500 bg-rose-950/20 shadow-[4px_4px_0px_0px_#f43f5e]' 
                  : 'border-cyan-400 bg-[#121524] light:bg-white shadow-[4px_4px_0px_0px_#00d2ff]'
              }`}>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-500 uppercase">
                  <span>Tank Pressure</span>
                  <span className="text-[10px] bg-cyan-950 light:bg-cyan-100 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    Target: &lt;106.0 kPa
                  </span>
                </div>
                <div className="text-3xl font-black font-mono mt-2 text-white light:text-slate-900">
                  {tankPressure} <span className="text-sm font-normal text-slate-400">kPa</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1 font-mono">
                  {tankPressure > 107.0 ? (
                    <span className="text-rose-400 font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Exceeds Safe Envelope
                    </span>
                  ) : (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Within Safe Range
                    </span>
                  )}
                </div>
              </div>

              {/* Card 2: Cargo Temperature */}
              <div className="p-5 rounded-xl border-3 border-emerald-400 bg-[#121524] light:bg-white shadow-[4px_4px_0px_0px_#10b981]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-500 uppercase">
                  <span>Cargo Temp</span>
                  <span className="text-[10px] bg-emerald-950 light:bg-emerald-100 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    Cryogenic
                  </span>
                </div>
                <div className="text-3xl font-black font-mono mt-2 text-white light:text-slate-900">
                  {cargoTemp} <span className="text-sm font-normal text-slate-400">°C</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>LNG Boiling Threshold: -161°C</span>
                </div>
              </div>

              {/* Card 3: BOG Rate */}
              <div className="p-5 rounded-xl border-3 border-amber-400 bg-[#121524] light:bg-white shadow-[4px_4px_0px_0px_#f59e0b]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-500 uppercase">
                  <span>BOG Rate (ML Model)</span>
                  <span className="text-[10px] bg-amber-950 light:bg-amber-100 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                    Predictive
                  </span>
                </div>
                <div className="text-3xl font-black font-mono mt-2 text-white light:text-slate-900">
                  {bogRate} <span className="text-sm font-normal text-slate-400">%/day</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-1">
                  <span className="text-amber-400">BOG Compressor:</span>
                  <span>{bogRate > 0.2 ? 'High Rate Active' : 'Eco-Cruise Mode'}</span>
                </div>
              </div>

            </div>

            {/* Test Simulation Triggers */}
            <div className="p-5 rounded-xl bg-[#121524] light:bg-white border-2 border-[#2b3354] light:border-slate-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Telemetry Disturbance Injection:
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Test ML Model Anomaly Responsiveness
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={triggerPressureSpike}
                  className="px-4 py-2 rounded-lg border-2 border-rose-500 bg-rose-500/20 text-rose-300 text-xs font-mono font-bold hover:bg-rose-500 hover:text-white transition-all shadow-[2px_2px_0px_0px_#f43f5e]"
                >
                  ⚡ Inject Pressure Spike (&gt;108 kPa)
                </button>
                <button
                  onClick={() => {
                    setCargoTemp(-158.4);
                    setBogRate(0.31);
                  }}
                  className="px-4 py-2 rounded-lg border-2 border-amber-500 bg-amber-500/20 text-amber-300 text-xs font-mono font-bold hover:bg-amber-500 hover:text-white transition-all shadow-[2px_2px_0px_0px_#f59e0b]"
                >
                  🌡️ Inject Thermal Leakage (-158°C)
                </button>
                <button
                  onClick={resetNominal}
                  className="px-4 py-2 rounded-lg border-2 border-emerald-500 bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold hover:bg-emerald-500 hover:text-white transition-all shadow-[2px_2px_0px_0px_#10b981]"
                >
                  ✅ Return to Equilibrium
                </button>
              </div>
            </div>

            {/* Pipeline Architecture Footprint */}
            <div className="p-5 rounded-xl bg-[#090b14] light:bg-slate-50 border-2 border-[#22273c] light:border-slate-300 space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-400 light:text-blue-700 flex items-center gap-1.5 uppercase">
                <Layers className="w-3.5 h-3.5" />
                Underlying Ingestion &amp; Visualization Stack
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-[#131626] light:bg-white border border-[#2b3354] light:border-slate-200">
                  <div className="text-slate-400 text-[10px]">1. STORAGE</div>
                  <div className="font-bold text-white light:text-slate-900 mt-0.5">CouchDB + GCS</div>
                </div>
                <div className="p-2.5 rounded bg-[#131626] light:bg-white border border-[#2b3354] light:border-slate-200">
                  <div className="text-slate-400 text-[10px]">2. API SERVICE</div>
                  <div className="font-bold text-white light:text-slate-900 mt-0.5">FastAPI Stream</div>
                </div>
                <div className="p-2.5 rounded bg-[#131626] light:bg-white border border-[#2b3354] light:border-slate-200">
                  <div className="text-slate-400 text-[10px]">3. ML INFERENCE</div>
                  <div className="font-bold text-white light:text-slate-900 mt-0.5">Time Series Isolation</div>
                </div>
                <div className="p-2.5 rounded bg-[#131626] light:bg-white border border-[#2b3354] light:border-slate-200">
                  <div className="text-slate-400 text-[10px]">4. BI DASHBOARD</div>
                  <div className="font-bold text-white light:text-slate-900 mt-0.5">Power BI Embedded</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Anomaly Detection Engine Status */}
          <div className="lg:col-span-4">
            <div className={`p-6 rounded-2xl bg-[#121524] light:bg-white border-3 ${
              isAnomaly
                ? 'border-rose-500 shadow-[6px_6px_0px_0px_#f43f5e]'
                : 'border-emerald-400 shadow-[6px_6px_0px_0px_#10b981]'
            }`}>
              
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#252b45] light:border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Anomaly Detection Engine
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                  isAnomaly 
                    ? 'border-rose-500 bg-rose-950/60 text-rose-300' 
                    : 'border-emerald-500 bg-emerald-950/60 text-emerald-300'
                }`}>
                  {isAnomaly ? 'CRITICAL ALERT' : 'STATUS NOMINAL'}
                </span>
              </div>

              {/* Anomaly Gauge */}
              <div className="py-6 text-center">
                <div className="text-xs font-mono text-slate-400 uppercase">Anomaly Confidence Score</div>
                <div className={`text-5xl font-black font-mono my-2 ${
                  isAnomaly ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {(calculatedAnomalyScore * 100).toFixed(0)}%
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Active Threshold: {(anomalyThreshold * 100).toFixed(0)}%
                </div>

                <div className="w-full bg-[#1e2338] light:bg-slate-200 h-3 rounded-full mt-4 overflow-hidden border border-[#2e3657]">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isAnomaly ? 'bg-rose-500' : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, calculatedAnomalyScore * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Anomaly Action Diagnostic */}
              <div className={`p-4 rounded-xl border-2 text-xs font-mono space-y-2 ${
                isAnomaly
                  ? 'border-rose-500/50 bg-rose-950/30 text-rose-200'
                  : 'border-emerald-500/50 bg-emerald-950/30 text-emerald-200'
              }`}>
                <div className="font-bold flex items-center gap-1.5">
                  {isAnomaly ? (
                    <>
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Automated Alert Dispatched</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero Deviation Detected</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300 light:text-slate-700">
                  {isAnomaly
                    ? 'Statistical drift model flagged anomalous pressure buildup rate (+1.4 kPa/hr). Dispatched notification to offshore chief engineer console via FastAPI event hook.'
                    : 'Real-time telemetry stream matches baseline predictive curves. Telemetry validated and indexed into CouchDB.'}
                </p>
              </div>

              {/* Sensitivity Slider */}
              <div className="mt-6 pt-4 border-t-2 border-[#252b45] light:border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Detection Sensitivity:</span>
                  <span className="text-cyan-400 font-bold">{(anomalyThreshold * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="0.9"
                  step="0.05"
                  value={anomalyThreshold}
                  onChange={(e) => setAnomalyThreshold(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
