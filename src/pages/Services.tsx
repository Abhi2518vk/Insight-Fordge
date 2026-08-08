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
      icon: <Layers className="w-5 h-5" />,
      tag: 'Data Architecture',
      desc: 'We engineer secure transactional ETL pipelines and scalable SQL database schemas to render real-time, direct-query executive KPI dashboards with zero reporting delay.',
      details: [
        'Business Dashboard Development: Interactive Power BI & Tableau dashboards, Executive KPI systems, Role-based user reports & self-service views',
        'Sales & Financial Analytics: Product/regional performance metrics, Sales, revenue & profit analysis, Monthly, quarterly & yearly statistical trends',
        'Customer & Inventory Analytics: Customer segmentation & purchase patterns, Retention/repeat-purchase reports, Stock level monitoring & fast/slow-moving inventory tracking',
        'Data Preparation & Automation: Automated recurring reports, Excel data cleaning & validation, Power Query workflow transformations',
        'SQL Database & Reporting: Database design & query optimization, Excel-to-SQL migration support, Data extraction, reporting & performance tuning',
        'Business Reporting: Weekly & monthly management reporting systems, Operational performance reviews, Clear KPI definitions & structural reporting templates'
      ],
      stack: ['Power BI', 'Tableau', 'SQL', 'Snowflake', 'BigQuery', 'PostgreSQL', 'Excel']
    },
    {
      id: 'dev',
      title: 'Software & Digital Product Engineering',
      icon: <Terminal className="w-5 h-5" />,
      tag: 'Flagship Engineering',
      desc: 'We design and write type-safe Next.js, React, and TypeScript systems, deploying performant B2B portals, admin dashboards, and custom software architectures designed specifically for data-heavy platforms.',
      details: [
        'Custom Web Applications (Next.js & React)',
        'B2B Customer Portals & Admin Dashboards',
        'SaaS MVP Development & Scalable Codebases',
        'TypeScript/Node.js API Infrastructure',
        'Containerized Microservices (Docker & S3)',
        'Automated Playwright End-to-End Tests',
        'Complete Source Git Repository Ownership'
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 'ai',
      title: 'AI & Business Automation',
      icon: <Zap className="w-5 h-5" />,
      tag: 'Workflow Automation',
      desc: 'Connect CRM, ERP, and internal metrics using custom webhook APIs and scheduled serverless Cron jobs, automating manual data validation checks entirely.',
      details: [
        'AI Workflow Automation & Agent Node Mapping',
        'Intelligent Reporting & PDF Aggregators',
        'CRM & ERP API Integrations',
        'Custom Webhooks & System Sync Pools',
        'AI Chatbots & Semantic Vector Indexes',
        'No-Code/Low-Code Integration Architecture',
        'Automated Invoice & Email Flow'
      ],
      stack: ['Python', 'Pandas', 'NumPy', 'AWS Lambda', 'REST APIs', 'Webhooks', 'Azure']
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {pillars.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePillar(p.id as any)}
            className={`p-6 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
              activePillar === p.id
                ? 'bg-bg-surface border-brand-primary text-text-primary shadow-[0_4px_20px_rgba(79,70,229,0.15)]'
                : 'bg-bg-surface/40 border-border-custom text-text-secondary hover:text-text-primary hover:bg-bg-surface/80'
            }`}
          >
            <div className={`p-2 rounded-lg border w-fit ${activePillar === p.id ? 'border-brand-primary/50 text-accent-gold bg-bg-dark' : 'border-border-custom text-text-secondary bg-bg-dark/30'}`}>
              {p.icon}
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent-gold block mb-1">{p.tag}</span>
              <h3 className="font-display font-medium text-xs sm:text-sm tracking-tight">{p.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* 3. Selected capability deep dive panel */}
      <CardGlass className="p-8 sm:p-12 border-brand-primary/20 animate-forge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Panel Left - Summary & tech stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-medium">Selected Capability</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">{currentPillar.title}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{currentPillar.desc}</p>

            <div className="pt-6 border-t border-border-custom">
              <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest block mb-3">Technologies We Use:</span>
              <div className="flex flex-wrap gap-2">
                {currentPillar.stack.map((tech, idx) => (
                  <BadgeTech key={idx}>{tech}</BadgeTech>
                ))}
              </div>
            </div>
          </div>

          {/* Panel Right - Deliverables Checklist */}
          <div className="lg:col-span-7 bg-bg-dark/60 border border-border-custom rounded-xl p-6 sm:p-8">
            <h4 className="font-display font-medium text-sm text-text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border-custom/50">Core Deliverables Checklists</h4>
            <ul className="flex flex-col gap-5">
              {currentPillar.details.map((item, idx) => {
                const parts = item.split(': ');
                const title = parts[0];
                const bullets = parts[1] ? parts[1].split(', ') : [];
                return (
                  <li key={idx} className="flex items-start gap-3 border-b border-border-custom/20 pb-4 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-text-primary text-sm font-semibold tracking-wide">{title}</span>
                      {bullets.length > 0 && (
                        <ul className="list-disc pl-5 text-xs text-text-secondary flex flex-col gap-0.5">
                          {bullets.map((bullet, bidx) => (
                            <li key={bidx} className="hover:text-text-primary transition-colors">{bullet}</li>
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
