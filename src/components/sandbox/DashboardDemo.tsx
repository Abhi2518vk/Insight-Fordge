import React, { useState, useEffect } from 'react';
import { Activity, Server, Cpu, RefreshCw } from 'lucide-react';

export const DashboardDemo: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'latency' | 'query' | 'load'>('latency');
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Pre-populate data points
  useEffect(() => {
    generateData();
  }, [selectedMetric]);

  const generateData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      let points: number[] = [];
      const base = selectedMetric === 'latency' ? 35 : selectedMetric === 'query' ? 120 : 60;
      const variance = selectedMetric === 'latency' ? 10 : selectedMetric === 'query' ? 30 : 15;

      for (let i = 0; i < 20; i++) {
        points.push(Math.round(base + (Math.random() - 0.5) * variance));
      }
      setDataPoints(points);
      setIsRefreshing(false);
    }, 400);
  };

  const getMetricDetails = () => {
    switch (selectedMetric) {
      case 'latency':
        return { label: 'API Response Latency', unit: 'ms', current: dataPoints[dataPoints.length - 1] || 42, icon: <Activity className="w-5 h-5 text-brand-primary" /> };
      case 'query':
        return { label: 'Complex SQL Execution Time', unit: 'ms', current: dataPoints[dataPoints.length - 1] || 118, icon: <Server className="w-5 h-5 text-accent-gold" /> };
      case 'load':
        return { label: 'CPU Cluster Load', unit: '%', current: dataPoints[dataPoints.length - 1] || 56, icon: <Cpu className="w-5 h-5 text-green-500" /> };
    }
  };

  const details = getMetricDetails();

  return (
    <div className="bg-bg-surface border border-border-custom rounded-xl p-6 shadow-2xl relative overflow-hidden animate-forge">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border-custom">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-bg-dark border border-border-custom rounded-lg">
            {details.icon}
          </div>
          <div>
            <h4 className="font-display font-medium text-text-primary text-sm uppercase tracking-wider">LIVE TELEMETRY WORKSPACE</h4>
            <span className="text-[11px] font-mono text-text-secondary">SYSTEM CONSOLE STATE: <span className="text-green-500 font-semibold animate-pulse">● SECURE & ACTIVE</span></span>
          </div>
        </div>

        {/* Refresh button */}
        <button
          onClick={generateData}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs text-text-secondary hover:text-text-primary hover:bg-bg-dark border border-border-custom transition-all duration-300 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Sync telemetry</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {(['latency', 'query', 'load'] as const).map((metric) => (
          <button
            key={metric}
            onClick={() => setSelectedMetric(metric)}
            className={`py-3 px-2 rounded-lg border text-center transition-all duration-300 cursor-pointer flex flex-col gap-1 ${
              selectedMetric === metric
                ? 'bg-bg-dark border-brand-primary/50 text-accent-gold shadow-[0_4px_12px_rgba(79,70,229,0.1)]'
                : 'bg-bg-surface border-border-custom text-text-secondary hover:text-text-primary hover:bg-bg-dark/40'
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider">{metric}</span>
            <span className="font-display font-semibold text-lg">
              {metric === 'latency' ? '42ms' : metric === 'query' ? '118ms' : '56%'}
            </span>
          </button>
        ))}
      </div>

      {/* Metric details */}
      <div className="bg-bg-dark/80 rounded-lg p-4 border border-border-custom mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary font-display font-medium">{details.label}</span>
          <span className="font-mono text-xs text-accent-gold uppercase tracking-widest">Active Probe</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-mono font-bold text-text-primary tracking-tight">
            {isRefreshing ? '---' : details.current}
          </span>
          <span className="text-sm font-mono text-text-secondary">{details.unit}</span>
        </div>
      </div>

      {/* Animated SVG Sparkline Graph */}
      <div className="h-44 flex items-end justify-between gap-1 px-1 relative">
        {/* Graph background mesh line lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
          <div className="border-t border-text-primary w-full h-px" />
          <div className="border-t border-text-primary w-full h-px" />
          <div className="border-t border-text-primary w-full h-px" />
          <div className="border-t border-text-primary w-full h-px" />
        </div>

        {/* Dynamic plotting rendering */}
        <svg className="w-full h-full absolute inset-0 text-brand-primary" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points={dataPoints.map((val, idx) => {
              const x = (idx / (dataPoints.length - 1)) * 100;
              const maxVal = Math.max(...dataPoints, 1);
              const minVal = Math.min(...dataPoints, 0);
              const range = maxVal - minVal || 1;
              const y = 90 - ((val - minVal) / range) * 80; // keep offset bound buffer padding inside graph
              return `${x},${y}`;
            }).join(' ')}
            className="transition-all duration-500 animate-line-draw"
          />
        </svg>

        <span className="absolute bottom-2 right-3 font-mono text-[9px] text-text-secondary bg-bg-dark/95 border border-border-custom/50 px-2 py-0.5 rounded uppercase tracking-wider">
          Telemetry stream: realtime
        </span>
      </div>
    </div>
  );
};
