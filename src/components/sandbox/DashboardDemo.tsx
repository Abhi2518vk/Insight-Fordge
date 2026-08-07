import React, { useState, useEffect } from 'react';
import { BarChart3, Database, TrendingUp, RefreshCw, Layers } from 'lucide-react';

export const DashboardDemo: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'latency' | 'revenue' | 'costs'>('revenue');
  const [loading, setLoading] = useState(false);
  const [chartFactor, setChartFactor] = useState(1);

  // Simulate dashboard refreshes
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChartFactor(0.9 + Math.random() * 0.2); // Random skew
    }, 800);
  };

  useEffect(() => {
    // Automatically trigger minor mock telemetry updates to simulate "live direct-query monitoring"
    const interval = setInterval(() => {
      setChartFactor(prev => prev * (0.98 + Math.random() * 0.04));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const metrics = {
    revenue: {
      title: "Real-time Corporate Revenue Stream",
      sub: "Enterprise direct direct-query pipeline to SAP / Snowflake",
      value: "$1,482,900",
      change: "+28.4% MoM",
      points: [40, 52, 68, 62, 85, 95, 120]
    },
    latency: {
      title: "Active Data Warehousing Pipeline Latency",
      sub: "Average database fetch queue response (lower is better)",
      value: "0.14 seconds",
      change: "-94.2% Optimization",
      points: [110, 85, 60, 42, 28, 14, 8]
    },
    costs: {
      title: "Automated Operational Compute Overheads",
      sub: "Savings from serverless autoscaling architecture",
      value: "$14,200",
      change: "-38.1% Cost Reductions",
      points: [90, 85, 75, 55, 42, 38, 32]
    }
  };

  const selected = metrics[activeMetric];

  // Draw smooth SVG path representation based on metric points
  const pointsToPath = (arr: number[]) => {
    const width = 500;
    const height = 150;
    const step = width / (arr.length - 1);
    const maxVal = Math.max(...arr);

    return arr.map((val, index) => {
      const x = index * step;
      // Scale based on dynamic chartFactor
      const adjustedVal = val * chartFactor;
      const y = height - (adjustedVal / maxVal) * (height - 20) - 10;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="bg-obsidian-surface border border-obsidian-border rounded-lg p-6 relative overflow-hidden group">
      {/* Absolute high-tech background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-obsidian-border pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Direct-Query Live Telemetry</span>
          </div>
          <h4 className="text-lg font-semibold text-white font-sans">{selected.title}</h4>
          <p className="text-xs text-gray-400">{selected.sub}</p>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-obsidian border border-obsidian-border hover:border-indigo/40 text-xs font-mono text-gray-300 hover:text-white transition-all duration-200"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Force ETL Sync
        </button>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {(['revenue', 'latency', 'costs'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setActiveMetric(m)}
            className={`
              p-3 rounded text-left border transition-all duration-200
              ${activeMetric === m
                ? 'bg-obsidian border-indigo/60 text-white shadow-[0_4px_20px_rgba(79,70,229,0.15)]'
                : 'bg-obsidian-card border-obsidian-border text-gray-400 hover:border-gray-700 hover:text-gray-300'}
            `}
          >
            <div className="text-xs text-gray-400 capitalize mb-1 flex items-center gap-1">
              {m === 'revenue' && <TrendingUp className="w-3.5 h-3.5 text-indigo-bright" />}
              {m === 'latency' && <Database className="w-3.5 h-3.5 text-brass" />}
              {m === 'costs' && <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />}
              {m}
            </div>
            <div className="text-sm font-semibold font-mono tracking-tight text-white">
              {metrics[m].value}
            </div>
            <div className="text-[10px] font-medium text-emerald-400 mt-0.5">
              {metrics[m].change}
            </div>
          </button>
        ))}
      </div>

      {/* SVG Canvas Area */}
      <div className="relative h-44 w-full bg-obsidian rounded border border-obsidian-border/50 overflow-hidden flex items-end">
        {loading && (
          <div className="absolute inset-0 bg-obsidian-card/80 backdrop-blur-sm z-10 flex flex-col justify-center items-center gap-2">
            <RefreshCw className="w-6 h-6 text-indigo animate-spin" />
            <span className="text-xs font-mono text-indigo-bright">Querying Snowflake Cluster...</span>
          </div>
        )}

        {/* Matrix grid backdrop lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14171d_1px,transparent_1px),linear-gradient(to_bottom,#14171d_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Dynamic SVG Sparkline */}
        <svg className="w-full h-full overflow-visible z-0" viewBox="0 0 500 150" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Shadow path beneath trendline */}
          <path
            d={`${pointsToPath(selected.points)} L 500 150 L 0 150 Z`}
            fill="url(#chartGlow)"
            className="transition-all duration-500 ease-in-out"
          />

          {/* Trendline path */}
          <path
            d={pointsToPath(selected.points)}
            fill="none"
            stroke={activeMetric === 'latency' ? '#C5A880' : activeMetric === 'costs' ? '#10B981' : '#4F46E5'}
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>

        {/* Floating live metrics dashboard details */}
        <div className="absolute bottom-3 left-3 flex items-center gap-4 bg-obsidian-card/90 border border-obsidian-border px-3 py-1.5 rounded text-[10px] font-mono text-gray-400 z-10">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-indigo-bright" />
            <span>Telemetry: Operational</span>
          </div>
          <div>•</div>
          <div>SQL Status: Optimized</div>
          <div>•</div>
          <div>API Load: {Math.round(40 + Math.random() * 20)} reqs/sec</div>
        </div>
      </div>
    </div>
  );
};
