import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { DashboardDemo } from '../components/sandbox/DashboardDemo';
import { LayoutGrid, CheckCircle2, Terminal } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'studies'>('sandbox');

  const cases = [
    {
      title: 'Real-time Dispatch Routing & Spatial DB Optimization',
      client: 'Global Logistics Operator ($50M Rev)',
      stat: '78% Reductions in ETL Latency',
      situation: 'Manual warehouse part allocations and crash timeouts inside legacy routing systems was causing $14,000 in daily operational leakage.',
      transformation: 'Refactored raw spatial PostGIS indexing inside PostgreSQL cluster nodes. Engineered multi-stage automated Python ETL schedules syncing with active fleet telemetry maps.',
      results: ['Latency compressed from 22 hours to sub-10ms ranges', 'Complete visual dispatch dashboard synced with zero gateway delays', 'Full client ownership handover with type-safe Next.js microservices']
    },
    {
      title: 'Automated Financial Forecasting & Snowflake Data Pipelines',
      client: 'B2B FinTech Platform',
      stat: 'calculation speed reduced from 4m to 800ms',
      situation: 'Finance models were crashing due to unoptimized database calculations, lagging quarters behind accurate reports.',
      transformation: 'Refactored unoptimized ORM database layers into raw parameterized SQL queries inside AWS Lambda cron pipelines, syncing raw indicators with Snowflake.',
      results: ['Transactional reports refreshed automatically in real-time', 'CPU server queue loads decreased by over 60%', 'Zero data pipeline timeout errors logged over 90 days']
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">Our Work</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Active Sandbox Demos & Case Study Blueprints.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          Explore our real-time interactive sandbox environments or audit our high-density case studies following the STAR method. No generic marketing, only real structural execution.
        </p>
      </div>

      {/* 2. Selector Tabs */}
      <div className="flex border-b border-border-custom mb-12">
        <button
          onClick={() => setActiveTab('sandbox')}
          className={`px-6 py-4 font-display text-sm tracking-wide font-medium border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'sandbox'
              ? 'border-brand-primary text-accent-gold bg-bg-surface/30'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Interactive Sandboxes</span>
        </button>
        <button
          onClick={() => setActiveTab('studies')}
          className={`px-6 py-4 font-display text-sm tracking-wide font-medium border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'studies'
              ? 'border-brand-primary text-accent-gold bg-bg-surface/30'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Technical Case Studies (STAR)</span>
        </button>
      </div>

      {/* 3. Render Sandbox content */}
      {activeTab === 'sandbox' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg text-text-primary uppercase tracking-tight">SIMULATOR 01: REAL-TIME BI METRIC PANEL</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Interact with our live telemetry workspace. Select metrics and watch custom SVG sparkline graphs plot live transactional activity with zero browser rendering lag.
            </p>
            <DashboardDemo />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg text-text-primary uppercase tracking-tight">SIMULATOR 02: HIGH-COMPRESSION SCHEMAS</h3>
            <p className="text-text-secondary text-sm leading-relaxed text-balance">
              Review how our normalized data warehouse schemas reduce total memory footprint. We design our tables with custom compression strategies, bringing storage costs down and enabling faster queries.
            </p>
            <div className="bg-bg-surface border border-border-custom rounded-xl p-8 flex flex-col gap-6">
              <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest">Active Data Compressors</span>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-2 border-b border-border-custom/30 text-xs">
                  <span className="text-text-secondary font-mono">Telemetry Partition Strategy</span>
                  <span className="text-text-primary font-mono font-semibold">Weekly Range Partitioning</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border-custom/30 text-xs">
                  <span className="text-text-secondary font-mono">Row Compression Method</span>
                  <span className="text-text-primary font-mono font-semibold">ZSTD (High Compression)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary font-mono">Query Execution Thread Limit</span>
                  <span className="text-text-primary font-mono font-semibold">Adaptive Execution Nodes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          {cases.map((cs, idx) => (
            <CardGlass key={idx} className="p-8 sm:p-12 border-brand-primary/20 animate-forge">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 pb-4 border-b border-border-custom">
                <div>
                  <span className="font-mono text-xs text-accent-gold uppercase tracking-widest block mb-1">{cs.client}</span>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-text-primary leading-tight">{cs.title}</h3>
                </div>
                <div className="bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-lg font-mono text-xs text-brand-primary font-semibold uppercase tracking-wider">
                  {cs.stat}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left content STAR details */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest block mb-2">1. The Operational Situation & Challenge</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.situation}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest block mb-2">2. Our Engineering & Transformation Architecture</span>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.transformation}</p>
                  </div>
                </div>

                {/* Right content quantified results checklist */}
                <div className="lg:col-span-5 bg-bg-dark border border-border-custom/80 rounded-xl p-6 sm:p-8">
                  <h4 className="font-display font-medium text-xs text-text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border-custom">3. Quantified Business Results</h4>
                  <ul className="flex flex-col gap-4">
                    {cs.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-primary text-xs sm:text-sm font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardGlass>
          ))}
        </div>
      )}
    </div>
  );
};
