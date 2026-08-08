import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { Database, Shield, Zap, Terminal, Activity, Layers, Server } from 'lucide-react';

export const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Logistics');

  const industries = [
    {
      name: 'Logistics',
      icon: <Layers className="w-4 h-4 text-brand-primary" />,
      bottleneck: 'High latency in fleet routing algorithms and real-time dispatch updates.',
      solution: 'Custom PostGIS geospatial indexes built inside PostgreSQL database clusters, integrated with in-memory Redis caches to deliver sub-10ms route calculations.',
      stack: ['PostgreSQL', 'Redis', 'PostGIS', 'AWS ECS']
    },
    {
      name: 'SaaS',
      icon: <Terminal className="w-4 h-4 text-accent-gold" />,
      bottleneck: 'Slow multi-tenant data isolations and unoptimized API rate-limiting crashes.',
      solution: 'Type-safe Next.js middleware checking vector indexes, coupled with decoupled database-per-tenant architecture layers to preserve maximum security.',
      stack: ['Next.js', 'TypeScript', 'Postgres', 'Docker']
    },
    {
      name: 'Manufacturing',
      icon: <Zap className="w-4 h-4 text-green-500" />,
      bottleneck: 'Fragmented warehouse telemetry and manual daily parts inventory reports.',
      solution: 'Continuous Python ingestion scripts running serverless Cron checks, pulling asset telemetry directly into Power BI direct-query reports.',
      stack: ['Python', 'Pandas', 'Power BI', 'AWS Lambda']
    },
    {
      name: 'Retail & E-Commerce',
      icon: <Activity className="w-4 h-4 text-brand-secondary" />,
      bottleneck: 'Lagging sales telemetry and desynced ERP inventory logs.',
      solution: 'High-speed automated ETL pipelines syncing Shopify store databases with central Snowflake data warehouses every 15 minutes.',
      stack: ['ETL Sync', 'Snowflake', 'Shopify APIs', 'SQL']
    },
    {
      name: 'Healthcare',
      icon: <Shield className="w-4 h-4 text-brand-primary" />,
      bottleneck: 'HIPAA compliance audit gaps and insecure customer document intake flows.',
      solution: 'End-to-end encrypted React document portals hosted on secure AWS S3, passing complete SOC-2 security protocols out of the box.',
      stack: ['React', 'AWS S3', 'SOC-2 Secure', 'Node.js']
    },
    {
      name: 'Finance & Advisory',
      icon: <Server className="w-4 h-4 text-accent-gold" />,
      bottleneck: 'Timeout crashes when executing complex multi-quarter forecasting models.',
      solution: 'Refactored raw recursive SQL queries and implemented Pandas/NumPy array vectorizations, reducing calculation execution times from 4 minutes to 800ms.',
      stack: ['SQL Tuning', 'Python', 'Pandas', 'BigQuery']
    }
  ];

  const currentInd = industries.find(ind => ind.name === selectedIndustry) || industries[0];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">Verticals Served</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Specialized Domain Infrastructure. startups to Enterprises.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          Every vertical has unique data models and latency requirements. We do not apply generic templates. Select your industry sector below to investigate our tailored architectural solutions.
        </p>
      </div>

      {/* 2. Horizontal Industry selector tags */}
      <div className="flex flex-wrap gap-3 mb-12">
        {industries.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndustry(ind.name)}
            className={`px-5 py-3 rounded-lg border font-display text-sm tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
              selectedIndustry === ind.name
                ? 'bg-brand-primary text-text-primary border-brand-primary shadow-[0_4px_12px_rgba(79,70,229,0.15)]'
                : 'bg-bg-surface border-border-custom text-text-secondary hover:text-text-primary hover:bg-bg-surface/80'
            }`}
          >
            {ind.icon}
            <span>{ind.name}</span>
          </button>
        ))}
      </div>

      {/* 3. Detail Solution mapping block */}
      <CardGlass className="p-8 sm:p-12 border-brand-primary/20 animate-forge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Summary */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-dark border border-border-custom text-accent-gold font-mono text-[10px] uppercase tracking-wider w-fit">
              <Database className="w-3.5 h-3.5" />
              <span>Target Solution Model: {currentInd.name}</span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest font-semibold">The Operational Bottleneck</span>
              <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed">
                "{currentInd.bottleneck}"
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-border-custom">
              <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold">Our Engineered Solution</span>
              <p className="text-text-secondary text-sm leading-relaxed">
                {currentInd.solution}
              </p>
            </div>
          </div>

          {/* Right Visual Schema Container */}
          <div className="lg:col-span-5 bg-bg-dark border border-border-custom rounded-xl p-8 relative overflow-hidden">
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest block mb-4">Database Schema stack</span>
            <div className="flex flex-col gap-3 mb-6">
              {currentInd.stack.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-bg-surface border border-border-custom/80 font-mono text-xs text-text-primary">
                  <span>{item}</span>
                  <span className="text-[10px] text-brand-primary uppercase">Active spec</span>
                </div>
              ))}
            </div>
            <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-brand-primary/10 blur-2xl pointer-events-none" />
          </div>
        </div>
      </CardGlass>

      {/* Other industries mention */}
      <div className="mt-12 text-center text-xs text-text-secondary font-mono">
        Also engineering tailored solutions for: <span className="text-text-primary">Automotive</span> • <span className="text-text-primary">SaaS & Platforms</span> • <span className="text-text-primary">Construction</span> • <span className="text-text-primary">Hospitality</span> • <span className="text-text-primary">Education</span>
      </div>
    </div>
  );
};
