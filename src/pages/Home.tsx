import React, { useState } from 'react';
import { Terminal, Shield, Zap, RefreshCw, Layers, Database, Activity, Cpu } from 'lucide-react';
import { DashboardDemo } from '../components/sandbox/DashboardDemo';
import { CardGlass } from '../components/ui/CardGlass';
import { BadgeTech } from '../components/ui/BadgeTech';
import { AuditModal } from '../components/ui/AuditModal';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Audit Modal */}
      <AuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-bg-dark to-bg-dark">
        {/* Subtle grid mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          {/* Hero left content copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-surface border border-border-custom shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold font-semibold">Boutique Technology Consulting & System Architecture</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-accent-gold">
                Data Analytics, Software Development, and Business Intelligence Solutions.
              </span>
            </h1>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              We design and build end-to-end data analysis dashboards, custom web development, web design, and software building, with end-to-end automations. We engineer high-performance software systems for your core operational bottlenecks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <button
                onClick={() => setIsAuditOpen(true)}
                className="px-6 py-3.5 rounded-lg font-display text-sm font-medium bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_15px_rgba(79,70,229,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>Schedule a Tech & Systems Audit</span>
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className="px-6 py-3.5 rounded-lg font-display text-sm font-medium bg-bg-surface text-text-primary border border-border-custom hover:border-accent-gold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OUR SERVICES</span>
              </button>
            </div>

            {/* High-fidelity Integration Matrix block to balance the height */}
            <div className="w-full mt-6 pt-6 border-t border-border-custom/50">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary block mb-3">Enterprise Software & Data Ecosystem Integration</span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Database className="w-4 h-4 text-brand-primary mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">Snowflake</span>
                </div>
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Activity className="w-4 h-4 text-accent-gold mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">Power BI</span>
                </div>
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Cpu className="w-4 h-4 text-green-500 mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">Python</span>
                </div>
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Layers className="w-4 h-4 text-brand-secondary mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">PostgreSQL</span>
                </div>
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Shield className="w-4 h-4 text-indigo-400 mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">AWS Cloud</span>
                </div>
                <div className="bg-bg-surface/50 border border-border-custom/60 rounded px-3 py-2 text-center flex flex-col items-center justify-center">
                  <Terminal className="w-4 h-4 text-teal-400 mb-1" />
                  <span className="font-mono text-[9px] text-text-primary">React & TS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero right simulated live graph dashboard widget */}
          <div className="lg:col-span-5 w-full">
            <DashboardDemo />
          </div>
        </div>
      </section>

      {/* 2. Trust signal ribbons */}
      <section className="bg-bg-surface/50 border-y border-border-custom py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 md:gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-accent-gold" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">SOC-2 Type II</span>
              <span className="font-mono text-[9px] text-text-secondary uppercase">Ready Architectures</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-brand-primary" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">100% OWNERSHIP</span>
              <span className="font-mono text-[9px] text-text-secondary uppercase">Complete Source Code Transfer</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-green-500 animate-spin-slow" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">PARTNER LED</span>
              <span className="font-mono text-[9px] text-text-secondary uppercase">Direct ex-Enterprise Leads Only</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-brand-secondary" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">TYPE-SAFE SPEC</span>
              <span className="font-mono text-[9px] text-text-secondary uppercase">TypeScript, Next.js & React</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars overviews */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">Capabilities</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            We solve operational bottlenecks through precision technology.
          </h2>
          <p className="text-text-secondary text-sm">
            We bypass unneeded agency bloat. Our partners design, execute, and deliver fully production-ready architectures directly to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardGlass className="flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-bg-dark border border-border-custom flex items-center justify-center mb-6 group-hover:border-brand-primary transition-colors duration-300">
                <Terminal className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3">Web, Software & Product Engineering</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                We design and build bespoke high-fidelity web platforms, corporate websites, SaaS applications, and robust custom software. Our principal leads write type-safe React, Next.js, and TypeScript code to deploy scalable, cloud-native solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <BadgeTech>Next.js</BadgeTech>
              <BadgeTech>TypeScript</BadgeTech>
              <BadgeTech>AWS Cloud</BadgeTech>
            </div>
          </CardGlass>

          <CardGlass className="flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-bg-dark border border-border-custom flex items-center justify-center mb-6 group-hover:border-brand-primary transition-colors duration-300">
                <Zap className="w-5 h-5 text-accent-gold" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3">AI Automation & Tech Consulting</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Replace manual, repetitive business workflows with custom serverless AI integrations, rate-limited API webhooks, and secure CRM-ERP synchronizations that execute flawlessly 24/7.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <BadgeTech>Python</BadgeTech>
              <BadgeTech>API Handlers</BadgeTech>
              <BadgeTech>Workflow Webhooks</BadgeTech>
            </div>
          </CardGlass>

          <CardGlass className="flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-bg-dark border border-border-custom flex items-center justify-center mb-6 group-hover:border-brand-primary transition-colors duration-300">
                <Layers className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3">Data Analytics & BI</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                We engineer optimized relational database schemas and transactional ETL/data pipelines, delivering sub-second direct-query rendering inside premium Power BI, Tableau, and custom web dashboards.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <BadgeTech>Power BI</BadgeTech>
              <BadgeTech>Snowflake</BadgeTech>
              <BadgeTech>SQL Tuning</BadgeTech>
            </div>
          </CardGlass>
        </div>
      </section>

      {/* 4. Deep-dive Telemetry Intro */}
      <section className="py-24 bg-bg-surface/20 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="font-mono text-xs text-brand-primary uppercase tracking-widest font-semibold">Active Demonstration</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
              Watch our telemetry and querying engines in action.
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              We do not ask clients to trust empty sales copy. Trigger our simulated direct-query telemetry sandbox above or deep-dive into our active client project architectures in our Portfolio.
            </p>
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="font-mono text-xs text-accent-gold border-b border-accent-gold hover:text-text-primary hover:border-text-primary transition-colors pb-1 cursor-pointer"
            >
              Explore all projects &rarr;
            </button>
          </div>
          <div className="lg:col-span-7 w-full bg-bg-surface border border-border-custom rounded-xl p-8 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest">Platform Telemetry Spec</span>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center pb-2 border-b border-border-custom/30 text-xs">
                <span className="text-text-secondary font-mono">Query Execution Engine</span>
                <span className="text-text-primary font-mono font-semibold">Snowflake Warehouse (M-Size)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-custom/30 text-xs">
                <span className="text-text-secondary font-mono">Aggregation Interval</span>
                <span className="text-text-primary font-mono font-semibold">Real-time (Direct-Query)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-custom/30 text-xs">
                <span className="text-text-secondary font-mono">Security Compliance</span>
                <span className="text-text-primary font-mono font-semibold">TLS 1.3 / AES-256 Encrypted</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-secondary font-mono">Data Validation Framework</span>
                <span className="text-text-primary font-mono font-semibold">Python Great Expectations Suite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Unified CTA Block */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-bg-surface to-bg-dark border border-border-custom rounded-2xl p-8 sm:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />

          <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold">Architectural Handoff</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary max-w-2xl">
            Ready to solve your organization's technical bottleneck?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
            Book a 30-minute Partner-Led Architecture Audit. We will review your web platforms, custom software setups, automated workflows, and data pipelines directly.
          </p>
          <button
            onClick={() => setIsAuditOpen(true)}
            className="px-8 py-4 rounded-lg font-display text-sm font-semibold bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.25)] hover:scale-[1.02] cursor-pointer animate-pulse-slow"
          >
            Schedule Your Architecture Audit
          </button>
        </div>
      </section>
    </div>
  );
};
