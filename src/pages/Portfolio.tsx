import React, { useState } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { CheckCircle2, FileText, ArrowUpRight, Shield } from 'lucide-react';
import { DocViewer } from '../components/ui/DocViewer';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const cases = [
    {
      id: 'driverigt',
      title: 'DriveRigt: Frictionless Car Rental Product Design & Analytics Engine',
      client: 'Digital Product Concept & Architecture',
      stat: 'User Drop-off Reduced by 45%',
      situation: 'Traditional car rental platforms experience massive drop-off rates exceeding 60% during checkout due to slow database queries, complex vehicle filtering, and obscure insurance configuration screens.',
      transformation: 'Engineered a high-fidelity product prototype utilizing Next.js, React, and Figma wireframing. Authored a thorough Product Requirement Document (PRD) detailing vehicle database schemas, real-time availability APIs, and secure payment flows, and paired it with a simulated analytics dashboard tracing user conversion funnels.',
      results: [
        'Designed a high-conversion 3-step rental checkout flow optimized for mobile and web screens.',
        'Created a complete relational database schema for fleets, bookings, and customer profiles.',
        'Constructed comprehensive UI/UX interactive wireframes mapping spatial maps and booking filters.'
      ],
      tech: ['Next.js', 'React', 'Figma Wireframing', 'MySQL Schema Design', 'PRD Structuring'],
      visualType: 'grid'
    },
    {
      id: 'whatsapp-scheduler',
      title: 'WhatsApp Custom Scheduler & Enterprise Product Teardown',
      client: 'Messaging Optimization & Automation Blueprint',
      stat: '100% Automated Delivery Flow',
      situation: 'E-commerce and SaaS platforms suffer high operational overhead when manually scheduling and delivering targeted notifications, lacking scheduled CRM automation, webhook failure handling, and custom user delivery windows.',
      transformation: 'Conducted an exhaustive product teardown of WhatsApp messaging mechanics. Designed and engineered an automated scheduling middleware blueprint using the WhatsApp Business API, scheduled serverless Python Cron triggers, and a comprehensive PRD specifying retry backoffs, API rate-limits, and delivery status webhooks.',
      results: [
        'Formulated custom-built Cron schedules automating user-selected messaging delivery windows.',
        'Designed intuitive Figma wireframes for the Admin Scheduler console and notification delivery matrices.',
        'Structured PRD outlining JSON payload formats, rate-limit thresholds, and MySQL queue schema states.'
      ],
      tech: ['WhatsApp Business API', 'Python Cron Jobs', 'CRM Webhooks', 'Admin UI Wireframes', 'Database Queue Design'],
      visualType: 'chat'
    },
    {
      id: 'cohort-analytics',
      title: 'Student Peer Dashboard & Cohort Analytics Portal',
      client: 'Academic Cohort BI Solution',
      stat: '0s Dashboard Query Latency',
      situation: 'Academic team leads and educators lacked consolidated real-time tracking of student peer evaluations, team milestones, and historical grade analytics, causing delayed intervention and siloed performance reviews.',
      transformation: 'Engineered a centralized Business Intelligence portal utilizing MySQL, star-schema data modeling, and Power BI dashboards. Consolidated unstructured, disparate Excel spreadsheets into a single normalized relational database, writing optimized SQL views to serve real-time grade charts and interactive peer evaluation heatmaps.',
      results: [
        'Re-engineered fragmented spreadsheet data into a clean, query-optimized star-schema database.',
        'Created high-impact Power BI visuals showcasing evaluation distributions and engagement metrics.',
        'Established sub-second visual query loading speeds for instant performance and milestone auditing.'
      ],
      tech: ['Power BI', 'MySQL Database', 'Star-Schema Modeling', 'ETL Data Cleaning', 'Excel Consolidation'],
      visualType: 'chart'
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* Doc Viewer Workspace overlay */}
      <DocViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        project={selectedProject}
      />
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">Enterprise Works</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Our Client Solutions & Case Study Blueprints
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          Audit our elite-tier project architectures following the strict STAR method (Situation, Task, Action, Result). Access raw project materials, document specs, and Google Drive delivery archives.
        </p>
      </div>

      {/* Case studies list */}
      <div className="flex flex-col gap-16">
        {cases.map((cs, idx) => (
          <CardGlass key={idx} className="p-8 sm:p-12 border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 relative overflow-hidden">
            {/* Visual Header / Cover Card inside the Case Study */}
            <div className="relative w-full h-48 sm:h-60 rounded-xl mb-8 overflow-hidden bg-gradient-to-br from-bg-dark via-bg-surface to-bg-dark border border-border-custom flex items-center justify-center p-6 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-bg-dark/80 border border-border-custom text-[10px] font-mono uppercase tracking-wider text-accent-gold">
                <span>PROJECT WIREFRAME // 0{idx + 1}</span>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary">PROD SPEC READY</span>
              </div>

              {/* Rendering unique wireframe mock based on visualType */}
              {cs.visualType === 'grid' && (
                <div className="w-full max-w-md flex flex-col gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 rounded bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center font-mono text-[9px] text-brand-primary">FLEET INDEX</div>
                    <div className="h-10 rounded bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center font-mono text-[9px] text-brand-secondary">RENTAL API</div>
                    <div className="h-10 rounded bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center font-mono text-[9px] text-accent-gold">INSURANCE</div>
                  </div>
                  <div className="h-12 rounded bg-bg-dark border border-border-custom flex items-center justify-between px-3">
                    <span className="font-mono text-[10px] text-text-secondary">[SCHEMA] tbl_bookings</span>
                    <span className="font-mono text-[9px] text-green-500">Indexed (PK_BookingID)</span>
                  </div>
                </div>
              )}

              {cs.visualType === 'chat' && (
                <div className="w-full max-w-md flex flex-col gap-2.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2 items-center">
                    <span className="font-mono text-[10px] text-text-secondary">Trigger:</span>
                    <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/30 text-[9px] font-mono text-green-400">CRON // 0 9 * * 1-5</span>
                  </div>
                  <div className="flex gap-3 justify-between items-center bg-bg-dark border border-border-custom p-3 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                      <span className="font-mono text-[10px] text-text-primary">CRM Queue Dispatcher</span>
                    </div>
                    <span className="font-mono text-[9px] text-accent-gold">API Payload OK (200)</span>
                  </div>
                </div>
              )}

              {cs.visualType === 'chart' && (
                <div className="w-full max-w-md flex flex-col gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-text-secondary">Grade Analytics Metrics</span>
                    <span className="text-brand-primary font-bold">SQL Aggregated</span>
                  </div>
                  {/* Mock dashboard bars */}
                  <div className="flex gap-2.5 items-end h-12 justify-around px-4">
                    <div className="w-5 bg-brand-primary/30 border border-brand-primary/50 h-[40%] rounded-t" />
                    <div className="w-5 bg-brand-primary/50 border border-brand-primary/80 h-[75%] rounded-t" />
                    <div className="w-5 bg-accent-gold/40 border border-accent-gold/60 h-[90%] rounded-t" />
                    <div className="w-5 bg-brand-secondary/40 border border-brand-secondary/60 h-[60%] rounded-t" />
                  </div>
                </div>
              )}
            </div>

            {/* STAR Case Study Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 pb-6 border-b border-border-custom">
              <div>
                <span className="font-mono text-xs text-accent-gold uppercase tracking-widest block mb-1">{cs.client}</span>
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-text-primary leading-tight hover:text-brand-primary transition-colors duration-300">{cs.title}</h3>
              </div>
              <div className="bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-lg font-mono text-xs text-brand-primary font-semibold uppercase tracking-wider flex-shrink-0">
                {cs.stat}
              </div>
            </div>

            {/* STAR Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
              {/* Left content STAR details */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest block mb-2 font-semibold">1. Operational Situation & Challenge</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{cs.situation}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest block mb-2 font-semibold">2. Our Strategy & Engineering Transformation</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{cs.transformation}</p>
                </div>
                <div className="pt-4">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest block mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.map((t, idx) => (
                      <span key={idx} className="font-mono text-[9px] text-text-primary bg-bg-surface border border-border-custom/80 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content quantified results checklist */}
              <div className="lg:col-span-5 bg-bg-dark/60 border border-border-custom/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-medium text-xs text-text-primary uppercase tracking-wider mb-6 pb-2 border-b border-border-custom/50">3. Quantified Business Results</h4>
                  <ul className="flex flex-col gap-4">
                    {cs.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-primary text-xs sm:text-sm leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Drive Document Access CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border-custom/50">
              <div className="flex items-center gap-2.5 text-text-secondary">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Unilateral NDA Secured Access</span>
              </div>
              <button
                onClick={() => {
                  setSelectedProject(cs);
                  setIsViewerOpen(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-surface border border-border-custom hover:border-brand-primary text-xs font-mono text-accent-gold hover:text-text-primary transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.4)] group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-brand-primary group-hover:text-accent-gold transition-colors" />
                <span>Access Google Drive Artifacts</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </CardGlass>
        ))}
      </div>
    </div>
  );
};
