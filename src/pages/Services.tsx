import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { BadgeTech } from '../components/ui/BadgeTech';
import { CheckCircle2, Terminal, Zap, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'bi' | 'dev' | 'ai'>('bi');

  const pillars = [
    {
      id: 'bi',
      title: 'Business Intelligence & Data Analytics',
      icon: <Layers className="w-10 h-10 text-brand-primary" />,
      tag: 'DATA ARCHITECTURE & SCHEMAS',
      desc: 'We engineer ultra-secure transactional ETL pipelines, high-performance dimensional data warehouses, and custom schema relational layouts (PostgreSQL, Snowflake, MySQL) designed to serve real-time executive dashboard visualizations with zero aggregation delay.',
      details: [
        'Business Dashboard Engineering: Multi-tier interactive Power BI & Tableau dashboards, executive KPI portals, row-level secure dashboards, and self-service reporting portals.',
        'Sales & Financial Analysis: Highly-granular localized performance metrics, forecasting algorithms, automated monthly/quarterly trends, and operational margin reporting.',
        'Customer & Operational Analytics: Deep retention tracking models, cohort analysis pipelines, real-time logistics auditing, and stock-velocity indicators.',
        'Schema Optimization & SQL Tuning: Complete relational database normalization, custom SQL view indices, data migrations, and query latency auditing.'
      ],
      stack: ['Power BI', 'Tableau', 'SQL Tuning', 'Snowflake', 'BigQuery', 'PostgreSQL', 'Excel Automation']
    },
    {
      id: 'dev',
      title: 'Software & Digital Product Engineering',
      icon: <Terminal className="w-10 h-10 text-brand-secondary" />,
      tag: 'FLAGSHIP DIGITAL ENGINEERING',
      desc: 'Our premier engineering division. We architect and code clean, type-safe custom web portals, enterprise-grade admin interfaces, and performance-optimized SaaS applications leveraging Next.js, React, and robust containerized microservice layouts.',
      details: [
        'Custom Web Applications: Performance-first frameworks using modern React & Next.js architectures with complete responsiveness.',
        'B2B Portals & Admin Suites: Client-facing document centers, custom transactional modules, and role-restricted dashboard consoles.',
        'Scalable API Infrastructure: Extremely fast backend routing modules constructed on Node.js/TypeScript with full OpenAPI standard schema compliance.',
        'Containerization & Cloud Ops: Reliable multi-region container deployments (Docker, AWS ECS) with zero-downtime CI/CD pipelines.'
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Infrastructure']
    },
    {
      id: 'ai',
      title: 'AI & Business Automation',
      icon: <Zap className="w-10 h-10 text-accent-gold" />,
      tag: 'PROCESS AUTOMATION & INTEGRATION',
      desc: 'We bypass manual data validation overhead entirely. By integrating CRM, ERP, and localized system metrics with scheduled serverless Python loops and webhooks, we keep operations executing smoothly and automatically 24/7.',
      details: [
        'Intelligent Webhooks & API Integration: Secure real-time synchronization pipelines linking Shopify, HubSpot, SAP, or proprietary database networks.',
        'Serverless Automation Workflows: Highly efficient Cron tasks running Python automated validations, secure PDF generators, and invoice processors.',
        'Semantic Search & Agentic Logic: Vector embeddings models, customized operational assistant interfaces, and automated notification engines.'
      ],
      stack: ['Python Automation', 'Pandas & NumPy', 'AWS Lambda', 'REST API Architectures', 'Webhooks Hub', 'Azure Cloud']
    }
  ];

  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold">Capabilities</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Three Core Service Pillars. End-To-End System Execution.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          We engineer systems that convert complex operations into decisive action. Click each pillar below to investigate detailed technical checklists, deliverables, and tech stack configurations.
        </p>
      </div>

      {/* 2. Interactive selector tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pillars.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePillar(p.id as any)}
            className={`p-10 md:p-12 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-6 transform hover:scale-[1.02] relative overflow-hidden ${
              activePillar === p.id
                ? 'bg-bg-surface border-brand-primary text-text-primary shadow-[0_6px_35px_rgba(79,70,229,0.3)] ring-1 ring-brand-primary/30'
                : 'bg-bg-surface/30 border-border-custom text-text-secondary hover:text-text-primary hover:bg-bg-surface/80 hover:border-border-custom/80'
            }`}
          >
            {activePillar === p.id && (
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
            )}
            <div className={`p-4 rounded-xl border w-fit ${activePillar === p.id ? 'border-brand-primary/50 text-accent-gold bg-bg-dark/80' : 'border-border-custom text-text-secondary bg-bg-dark/30'}`}>
              {p.icon}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent-gold font-bold block">{p.tag}</span>
              <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl tracking-tight mt-1 leading-snug">{p.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* 3. Selected capability deep dive panel */}
      <CardGlass className="p-8 sm:p-14 border-brand-primary/30 animate-forge shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          {/* Panel Left - Summary & tech stack */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-bold">Selected Capability</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">{currentPillar.title}</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{currentPillar.desc}</p>

            <div className="pt-8 border-t border-border-custom/50">
              <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest block mb-4 font-bold">Technologies We Deploy:</span>
              <div className="flex flex-wrap gap-2.5">
                {currentPillar.stack.map((tech, idx) => (
                  <BadgeTech key={idx}>{tech}</BadgeTech>
                ))}
              </div>
            </div>
          </div>

          {/* Panel Right - Deliverables Checklist */}
          <div className="lg:col-span-7 bg-bg-dark/80 border border-border-custom/80 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <h4 className="font-display font-bold text-sm text-text-primary uppercase tracking-wider mb-8 pb-3 border-b border-border-custom/50 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-primary" />
              <span>Core Architectural Milestones</span>
            </h4>
            <ul className="flex flex-col gap-6">
              {currentPillar.details.map((item, idx) => {
                const parts = item.split(': ');
                const title = parts[0];
                const bullets = parts[1] ? parts[1].split(', ') : [];
                return (
                  <li key={idx} className="flex items-start gap-4 border-b border-border-custom/10 pb-5 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-2">
                      <span className="text-text-primary text-base font-bold tracking-wide">{title}</span>
                      {bullets.length > 0 && (
                        <ul className="list-disc pl-5 text-xs sm:text-sm text-text-secondary flex flex-col gap-1.5 mt-1">
                          {bullets.map((bullet, bidx) => (
                            <li key={bidx} className="hover:text-text-primary transition-colors leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </CardGlass>
    </div>
  );
};
