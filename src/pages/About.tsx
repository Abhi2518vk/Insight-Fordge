import React from 'react';
import { Terminal, Users, Cpu, FileCode } from 'lucide-react';
import { CardGlass } from '../components/ui/CardGlass';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const partners = [
    {
      name: 'ABHILASH R',
      role: 'Lead AI & Automation Engineer',
      pedigree: 'AI Architect & Workflow Automation Specialist',
      desc: 'Experienced senior engineer specializing in designing scalable serverless AI workflows, intelligent OCR document processors, complex API integrations, and robust webhooks connecting enterprise CRM/ERP networks. Previously drove process optimization and data intelligence pipelines as a Product Analyst at Amazon.',
      specialty: 'Intelligent Automations',
      avatar: 'AR'
    },
    {
      name: 'RAHUL R',
      role: 'Data Scientist',
      pedigree: 'Advanced Statistical Modeling & Analytics Lead',
      desc: 'A dedicated data analyst and mathematical modeling expert who spent years building predictive analytics platforms. Leverages advanced statistical modeling, Pandas/NumPy forecasting, and retention clustering. Formerly held key analytics roles at Elivate Labs, Knovista Technologies, and Labmentix.',
      specialty: 'Predictive & Data Models',
      avatar: 'RR'
    },
    {
      name: 'ANANDH R',
      role: 'Data Architect',
      pedigree: 'Enterprise Schema & Database Optimization Engineer',
      desc: 'A structural database engineer who designs massive star-schema layouts and low-latency data warehouses. Highly skilled in building complex ETL transactional loops, database partitioning, and sub-second direct-query rendering on Power BI and Tableau. Developed core analytical structures at Elivate Labs and Knovista Technologies.',
      specialty: 'Schema & BI Engineering',
      avatar: 'AN'
    },
    {
      name: 'ANANDHU SURESH',
      role: 'Lead Growth & Product Marketing',
      pedigree: 'Product Strategist & Acquisition Architect',
      desc: 'An acquisition specialist who maps user journeys, identifies structural market gaps, and leads full-funnel conversion rate optimization (CRO) strategies. Directs comprehensive competitor analysis, customer behavior audits, and product growth advisory to transform analytics insights into real acquisition performance.',
      specialty: 'Data-Driven Acquisition',
      avatar: 'AS'
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header description */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold">The Partnership</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Senior Architectural Leadership. No Delegation to Juniors.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          At Insight Forge, we do not run a traditional bloated agency or an offshore subcontractor pool. We are a specialized partnership of four senior engineering and product growth leaders who personally write, review, and deploy your critical database pipelines and applications.
        </p>
      </div>

      {/* 2. Partner portraits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {partners.map((partner, idx) => (
          <CardGlass key={idx} className="flex flex-col gap-6 p-8 items-start justify-between group hover:border-brand-primary/40 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(79,70,229,0.1)]">
            <div>
              {/* Editorial Circle Placeholder Avatar */}
              <div className="w-16 h-16 rounded-xl bg-bg-dark border border-border-custom flex items-center justify-center font-mono text-xl text-brand-primary group-hover:text-accent-gold font-bold shadow-inner mb-4 transition-colors duration-300">
                {partner.avatar}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-gold transition-colors duration-300">{partner.name}</h3>
                <p className="font-mono text-xs text-brand-secondary tracking-wide uppercase font-semibold">{partner.role}</p>
                <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed mt-3">{partner.desc}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 mt-6 text-[10px] text-text-primary font-mono bg-bg-dark px-2.5 py-1.5 rounded border border-border-custom/50 w-fit">
              <Terminal className="w-3.5 h-3.5 text-brand-primary" />
              <span>CORE ARCHITECTURE: {partner.specialty}</span>
            </div>
          </CardGlass>
        ))}
      </div>

      {/* 3. Pedigree timeline / facts */}
      <section className="bg-bg-surface/30 border border-border-custom rounded-2xl p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold text-text-primary mb-8">Our Standards of Execution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <Users className="w-6 h-6 text-brand-primary flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-text-primary text-sm uppercase tracking-wider mb-2">Zero Handoffs</h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                You work directly with principal leaders. This avoids lost requirements, misaligned specs, and endless project managers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Cpu className="w-6 h-6 text-accent-gold flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-text-primary text-sm uppercase tracking-wider mb-2">Production-Ready Code</h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                We write clean, type-safe Next.js, React, and SQL queries out of the box, avoiding unoptimized logic and fragile connections.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <FileCode className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-text-primary text-sm uppercase tracking-wider mb-2">Total IP Handoff</h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                You own 100% of the repository, database scripts, and AWS/Docker configurations. No custom proprietary vendor locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <div className="mt-16 text-center">
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-6 py-3 rounded-lg font-display text-sm font-medium bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 cursor-pointer"
        >
          Book 30-Min Partner Consultation
        </button>
      </div>
    </div>
  );
};
