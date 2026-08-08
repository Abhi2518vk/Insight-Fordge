import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { Database, Terminal, FileCode, CheckCircle2, Eye, Shield } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Discovery & Telemetry Audit',
      icon: <Eye className="w-5 h-5 text-brand-primary" />,
      tag: 'Audit & Inspect',
      desc: 'We map current server latency rates, run query diagnostic logs, and locate data execution friction points directly inside your active schemas.',
      deliverable: 'System Latency Diagnostic Report & Database Performance Indexes'
    },
    {
      num: 2,
      title: 'Schema & Architecture Design',
      icon: <Database className="w-5 h-5 text-accent-gold" />,
      tag: 'Normalize & Map',
      desc: 'We construct structural database maps and normalized schemas, identifying precise data pipeline relationships and API endpoint states.',
      deliverable: 'Complete Schema Design Scripts & Architectural Relationship Maps'
    },
    {
      num: 3,
      title: 'Agile Coding Sprints',
      icon: <Terminal className="w-5 h-5 text-green-500" />,
      tag: 'Type-Safe Execution',
      desc: 'We write performant TypeScript, React/Next.js, and raw recursive SQL queries, delivering responsive modules to client repositories every two weeks.',
      deliverable: 'Git Repository Access with 100% Client Code Ownership & Comments'
    },
    {
      num: 4,
      title: 'QA & End-To-End Playwright Tests',
      icon: <FileCode className="w-5 h-5 text-brand-secondary" />,
      tag: 'Strict Audit',
      desc: 'Our code features strict testing limits. We run comprehensive unit and Playwright integration tests to prevent accidental database timeouts.',
      deliverable: 'Automated E2E Playwright Test Suite & Latency Load Logs'
    },
    {
      num: 5,
      title: 'Zero-Downtime Deployment',
      icon: <Shield className="w-5 h-5 text-brand-primary" />,
      tag: 'Secure Launch',
      desc: 'We orchestrate secure, containerized deployments inside AWS and Docker environments, passing comprehensive SOC-2 protocols safely.',
      deliverable: 'Production AWS Cloud Architecture Configuration Files'
    },
    {
      num: 6,
      title: 'Active Operations & Logging',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-gold" />,
      tag: 'Telemetry Guard',
      desc: 'Our relationship doesn’t end at deployment. We track performance using automated telemetry dashboards, securing system stability.',
      deliverable: '24/7 Server Diagnostic Dashboard & Ongoing Partner Advisory Support'
    }
  ];

  const currentStep = steps.find(s => s.num === activeStep) || steps[0];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">The System</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Our Process: The 6-Stage System Engineering Forge.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          We do not write code without clear specs. Our structural system lifecycle guarantees transparent handoffs, clean codebases, and predictable operational growth paths.
        </p>
      </div>

      {/* 2. Interactive Step selectors */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12">
        {steps.map((s) => (
          <button
            key={s.num}
            onClick={() => setActiveStep(s.num)}
            className={`p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center gap-2 ${
              activeStep === s.num
                ? 'bg-bg-surface border-brand-primary text-text-primary shadow-[0_4px_15px_rgba(79,70,229,0.1)]'
                : 'bg-bg-surface/30 border-border-custom text-text-secondary hover:text-text-primary'
            }`}
          >
            <span className={`font-mono text-[9px] uppercase tracking-wider ${activeStep === s.num ? 'text-accent-gold' : 'text-text-secondary'}`}>Phase 0{s.num}</span>
            <div className={`p-2 rounded-full border ${activeStep === s.num ? 'border-brand-primary text-brand-primary bg-bg-dark' : 'border-border-custom bg-bg-dark/20 text-text-secondary'}`}>
              {s.icon}
            </div>
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
