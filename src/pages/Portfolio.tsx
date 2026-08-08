import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { DashboardDemo } from '../components/sandbox/DashboardDemo';
import { LayoutGrid, CheckCircle2, Terminal } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'studies'>('sandbox');

  const cases = [
    {
      title: 'DriveRigt: Frictionless Car Rental Product Design & Analytics Engine',
      client: 'Digital Product Concept / Prototype',
      stat: 'Simulated Drop-off Reduced by 45%',
      situation: 'Traditional car rental platforms experience massive drop-off rates exceeding 60% during checkout due to slow database queries, complex vehicle filtering, and obscure insurance configuration screens.',
      transformation: 'Engineered a high-fidelity product prototype utilizing Next.js, React, and Figma wireframing. Authored a thorough Product Requirement Document (PRD) detailing vehicle database schemas, real-time availability APIs, and secure payment flows, and paired it with a simulated analytics dashboard tracing user conversion funnels.',
      results: [
        'Designed a high-conversion 3-step rental checkout flow optimized for mobile and web screens.',
        'Created a complete relational database schema for fleets, bookings, and customer profiles.',
        'Constructed comprehensive UI/UX interactive wireframes mapping spatial maps and booking filters.'
      ]
    },
    {
      title: 'WhatsApp Custom Scheduler & Enterprise Product Teardown',
      client: 'Messaging Optimization & Automation Blueprint',
      stat: '100% Automated Message Delivery Flows',
      situation: 'E-commerce and SaaS platforms suffer high operational overhead when manually scheduling and delivering targeted notifications, lacking scheduled CRM automation, webhook failure handling, and custom user delivery windows.',
      transformation: 'Conducted an exhaustive product teardown of WhatsApp messaging mechanics. Designed and engineered an automated scheduling middleware blueprint using the WhatsApp Business API, scheduled serverless Python Cron triggers, and a comprehensive PRD specifying retry backoffs, API rate-limits, and delivery status webhooks.',
      results: [
        'Formulated custom-built Cron schedules automating user-selected messaging delivery windows.',
        'Designed intuitive Figma wireframes for the Admin Scheduler console and notification delivery matrices.',
        'Structured PRD outlining JSON payload formats, rate-limit thresholds, and MySQL queue schema states.'
      ]
    },
    {
      title: 'Student Peer Dashboard & Cohort Analytics Portal',
      client: 'Academic Cohort BI Solution',
      stat: '0s Dashboard Query Latency',
      situation: 'Academic team leads and educators lacked consolidated real-time tracking of student peer evaluations, team milestones, and historical grade analytics, causing delayed intervention and siloed performance reviews.',
      transformation: 'Engineered a centralized Business Intelligence portal utilizing MySQL, star-schema data modeling, and Power BI dashboards. Consolidated unstructured, disparate Excel spreadsheets into a single normalized relational database, writing optimized SQL views to serve real-time grade charts and interactive peer evaluation heatmaps.',
      results: [
        'Re-engineered fragmented spreadsheet data into a clean, query-optimized star-schema database.',
        'Created high-impact Power BI visuals showcasing evaluation distributions and engagement metrics.',
        'Established sub-second visual query loading speeds for instant performance and milestone auditing.'
      ]
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
