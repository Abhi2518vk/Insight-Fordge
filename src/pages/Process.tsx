import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { Database, Terminal, FileCode, CheckCircle2, Eye, Shield } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'analytics' | 'dev'>('analytics');
  const [activeStepAnalytics, setActiveStepAnalytics] = useState<number>(1);
  const [activeStepDev, setActiveStepDev] = useState<number>(1);

  const analyticsSteps = [
    {
      num: 1,
      title: 'Data Ingestion & Cleaning',
      icon: <Eye className="w-5 h-5 text-brand-primary" />,
      tag: 'Clean & Validate',
      desc: 'We extract messy multi-source client datasets, write automated data cleaning validations in Excel, Power Query, or Python, and resolve integrity violations.',
      deliverable: 'Standardized Clean Datasets & Raw Ingestion Scripts'
    },
    {
      num: 2,
      title: 'Schema Transformation & ETL',
      icon: <Database className="w-5 h-5 text-accent-gold" />,
      tag: 'Dimensional modeling',
      desc: 'We construct highly-optimized relational database schemas, designing custom star-schemas (MySQL, PostgreSQL, Snowflake) to serve instant direct queries.',
      deliverable: 'Complete Star-Schema SQL Script & Relationship Map'
    },
    {
      num: 3,
      title: 'Metrics Engineering & Views',
      icon: <Terminal className="w-5 h-5 text-green-500" />,
      tag: 'Precision Calculation',
      desc: 'We calculate core transactional performance indicators, formulating SQL views, Python Pandas functions, and DAX/M expressions to index your exact metrics.',
      deliverable: 'Enterprise Metric Definitions Sheet & Optimized SQL Views'
    },
    {
      num: 4,
      title: 'Interactive Dashboard Design',
      icon: <FileCode className="w-5 h-5 text-brand-secondary" />,
      tag: 'Visual Presentation',
      desc: 'We map KPIs into high-impact Power BI & Tableau dashboards, incorporating conditional formats, role-based views, and real-time refresh triggers.',
      deliverable: 'Executive Dashboard (.PBIX / Tableau Link) with Sub-second Latency'
    },
    {
      num: 5,
      title: 'Data Validation & Handover',
      icon: <Shield className="w-5 h-5 text-brand-primary" />,
      tag: 'Compliance Check',
      desc: 'We run database constraints audits and verify visualization thresholds. Your team receives complete script ownership and live reports with zero platform lock-in.',
      deliverable: '100% Code Handover & Production Database Migration Guide'
    }
  ];

  const devSteps = [
    {
      num: 1,
      title: 'Product Discovery & Spec Writing',
      icon: <Eye className="w-5 h-5 text-brand-primary" />,
      tag: 'Define Scope',
      desc: 'We author comprehensive Product Requirement Documents (PRDs) and Business Requirement Documents (BRDs), mapping user personas, API flows, and features.',
      deliverable: 'Completed Product PRD, BRD, and Feature Prioritization Matrices'
    },
    {
      num: 2,
      title: 'Wireframing & UI/UX Design',
      icon: <Database className="w-5 h-5 text-accent-gold" />,
      tag: 'Figma Engineering',
      desc: 'We design high-fidelity interactive visual layouts and wireframes, structuring responsive desktop and mobile dashboards for ultimate conversion.',
      deliverable: 'Interactive Figma Workspace Link & Verified Typography Specs'
    },
    {
      num: 3,
      title: 'Agile Coding Sprints',
      icon: <Terminal className="w-5 h-5 text-green-500" />,
      tag: 'Type-Safe Execution',
      desc: 'We write performant TypeScript, Next.js, and React components, committing clean modules to your private code repositories in bi-weekly sprint loops.',
      deliverable: 'Git Repository Access with 100% Client Code Ownership & Comments'
    },
    {
      num: 4,
      title: 'End-To-End Playwright Auditing',
      icon: <FileCode className="w-5 h-5 text-brand-secondary" />,
      tag: 'Strict QA',
      desc: 'We deploy automated Playwright E2E integration test suites and unit checks, verifying latency and performance logs to protect your app states.',
      deliverable: 'Automated Playwright QA Test Suite & Deployment Telemetry Logs'
    },
    {
      num: 5,
      title: 'Zero-Downtime Deployment & Handover',
      icon: <Shield className="w-5 h-5 text-brand-primary" />,
      tag: 'Secure Launch',
      desc: 'We launch secure, containerized architectures on AWS, Docker, or edge runtimes, completing SOC-2 compliance checks and handing over complete IP rights.',
      deliverable: 'Production AWS/Docker Configs & 100% Source Code Transfer'
    }
  ];

  const currentSteps = activeTrack === 'analytics' ? analyticsSteps : devSteps;
  const currentStepNum = activeTrack === 'analytics' ? activeStepAnalytics : activeStepDev;
  const currentStep = currentSteps.find(s => s.num === currentStepNum) || currentSteps[0];
  const setStep = activeTrack === 'analytics' ? setActiveStepAnalytics : setActiveStepDev;

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-12 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">The System</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Double-Track Engineering Process.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          We organize our projects into two specialized, high-density tracks. Toggle between the Data Analytics pipeline and the Software/Web Development track to audit our exact milestones.
        </p>
      </div>

      {/* Track Toggle Buttons */}
      <div className="flex gap-4 mb-10 border-b border-border-custom pb-4">
        <button
          onClick={() => {
            setActiveTrack('analytics');
          }}
          className={`px-5 py-3 rounded-lg font-display text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer ${
            activeTrack === 'analytics'
              ? 'bg-brand-primary text-text-primary shadow-[0_0_15px_rgba(79,70,229,0.35)]'
              : 'bg-bg-surface border border-border-custom text-text-secondary hover:text-text-primary'
          }`}
        >
          Data Analytics Track
        </button>
        <button
          onClick={() => {
            setActiveTrack('dev');
          }}
          className={`px-5 py-3 rounded-lg font-display text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer ${
            activeTrack === 'dev'
              ? 'bg-brand-primary text-text-primary shadow-[0_0_15px_rgba(79,70,229,0.35)]'
              : 'bg-bg-surface border border-border-custom text-text-secondary hover:text-text-primary'
          }`}
        >
          Web & Software Engineering Track
        </button>
      </div>

      {/* 2. Interactive Step selectors */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
        {currentSteps.map((s) => (
          <button
            key={s.num}
            onClick={() => setStep(s.num)}
            className={`p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center gap-2 ${
              currentStepNum === s.num
                ? 'bg-bg-surface border-brand-primary text-text-primary shadow-[0_4px_15px_rgba(79,70,229,0.1)]'
                : 'bg-bg-surface/30 border-border-custom text-text-secondary hover:text-text-primary'
            }`}
          >
            <span className={`font-mono text-[9px] uppercase tracking-wider ${currentStepNum === s.num ? 'text-accent-gold' : 'text-text-secondary'}`}>Phase 0{s.num}</span>
            <div className={`p-2 rounded-full border ${currentStepNum === s.num ? 'border-brand-primary text-brand-primary bg-bg-dark' : 'border-border-custom bg-bg-dark/20 text-text-secondary'}`}>
              {s.icon}
            </div>
            <span className="font-display text-[10px] font-medium hidden sm:inline truncate max-w-full text-ellipsis">{s.title}</span>
          </button>
        ))}
      </div>

      {/* 3. Render Step Detail Panel */}
      <CardGlass className="p-8 sm:p-12 border-brand-primary/20 animate-forge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Summary */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-[10px] text-accent-gold uppercase tracking-wider bg-bg-dark border border-border-custom px-3 py-1 rounded w-fit">
              <span>Phase 0{currentStep.num}: {currentStep.tag}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">{currentStep.title}</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{currentStep.desc}</p>
          </div>

          {/* Right Core deliverable capsule */}
          <div className="lg:col-span-5 bg-bg-dark border border-border-custom rounded-xl p-6 sm:p-8 relative overflow-hidden">
            <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest block mb-4">Core Deliverable Handover</span>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-text-primary text-sm font-semibold">{currentStep.deliverable}</span>
                <span className="text-[10px] text-text-secondary font-mono mt-1 uppercase">100% Owned by Client</span>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-brand-primary/10 blur-2xl pointer-events-none" />
          </div>
        </div>
      </CardGlass>
    </div>
  );
};
