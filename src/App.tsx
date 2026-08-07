import React, { useState } from 'react';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { DashboardDemo } from './components/sandbox/DashboardDemo';
import { WorkflowDemo } from './components/sandbox/WorkflowDemo';
import { ButtonPrimary } from './components/ui/ButtonPrimary';
import { CardGlass } from './components/ui/CardGlass';
import { BadgeTech } from './components/ui/BadgeTech';

// Premium icons from Lucide
import {
  BarChart3,
  Cpu,
  Code,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  User,
  Send
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Contact Form state variables
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBudget, setFormBudget] = useState('$10k - $25k');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Portfolio active category filter state
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'bi' | 'auto' | 'software'>('all');

  // Contact form handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formName) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormCompany('');
      setFormEmail('');
      setFormMessage('');
    }, 4000);
  };

  // Navigates and scrolls smoothly to top
  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian flex flex-col selection:bg-indigo selection:text-white relative">
      {/* Background ambient lighting matrices */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.07),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-0 w-80 h-80 bg-indigo/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[60%] right-0 w-80 h-80 bg-brass/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Core Dynamic Page Layout */}
      <main className="flex-grow z-10">

        {/* ======================================= */}
        {/* 1. HOME PAGE                            */}
        {/* ======================================= */}
        {activeTab === 'home' && (
          <div className="py-12 space-y-24">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-surface border border-obsidian-border mb-6">
                <ShieldCheck className="w-4 h-4 text-brass" />
                <span className="text-xs font-mono uppercase tracking-wider text-brass">Premium Tech Advisory & Custom Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Engineering <span className="text-gradient-indigo">Decision Intelligence</span> for the Modern Enterprise.
              </h1>

              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Insight Forge combines modern cloud infrastructure, advanced data analytics, AI automated pipelines, and custom product development to turn operations into decsive action.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                <ButtonPrimary variant="brass" onClick={() => navigateTo('contact')} icon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Architecture Review
                </ButtonPrimary>
                <ButtonPrimary variant="dark" onClick={() => navigateTo('services')}>
                  Explore Capabilities
                </ButtonPrimary>
              </div>

              {/* Core Hero preview graphic: Dynamic live dashboard demo previewed directly on Home */}
              <div className="max-w-4xl mx-auto border border-obsidian-border rounded-xl p-2 bg-obsidian-surface/60 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <div className="bg-obsidian border border-obsidian-border rounded-lg overflow-hidden">
                  <div className="bg-obsidian-surface px-4 py-2 flex items-center justify-between border-b border-obsidian-border">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">insight-forge-monitor-system.bin</span>
                    <span className="text-xs font-mono text-emerald-400">ONLINE</span>
                  </div>
                  <div className="p-4 sm:p-6 bg-obsidian text-left">
                    <DashboardDemo />
                  </div>
                </div>
              </div>
            </section>

            {/* Trust Badges Bar */}
            <section className="bg-obsidian-surface/40 border-y border-obsidian-border py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brass mb-1">ENTERPRISE-GRADE PROMISE</h4>
                  <p className="text-sm text-gray-400">High-fidelity engineering backed by direct principal experience.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-gray-500">
                  <div className="flex items-center gap-1.5 bg-obsidian px-3 py-1.5 rounded border border-obsidian-border">
                    <ShieldCheck className="w-4 h-4 text-indigo-bright" />
                    <span>SOC2 Ready Standards</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-obsidian px-3 py-1.5 rounded border border-obsidian-border">
                    <Zap className="w-4 h-4 text-brass" />
                    <span>99.9% Pipeline SLA</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-obsidian px-3 py-1.5 rounded border border-obsidian-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>AWS Certified Architects</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Capability Teaser */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-bright">OUR SERVICE PILLARS</h2>
                <h3 className="text-3xl font-bold text-white tracking-tight">Four pillars designed to solve complex business bottlenecks.</h3>
                <p className="text-sm text-gray-400">We do not just create dashboards; we engineer clean, scalable databases and automate workflows that empower team action.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <CardGlass onClick={() => navigateTo('services')}>
                  <BarChart3 className="w-8 h-8 text-indigo-bright mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">BI & Analytics</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    High-precision Power BI & Tableau dashboards, SQL optimization, data warehousing (Snowflake/Azure) and forecasting.
                  </p>
                  <span className="text-xs font-mono text-indigo hover:text-indigo-bright flex items-center gap-1">
                    Explore specifications <ArrowRight className="w-3 h-3" />
                  </span>
                </CardGlass>

                <CardGlass onClick={() => navigateTo('services')}>
                  <Cpu className="w-8 h-8 text-brass mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">AI & Automation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Intelligent process automation, AI workflow nodes, webhook integrations, custom chatbot agents, and low-code integrations.
                  </p>
                  <span className="text-xs font-mono text-brass hover:text-brass-light flex items-center gap-1">
                    Explore specifications <ArrowRight className="w-3 h-3" />
                  </span>
                </CardGlass>

                <CardGlass onClick={() => navigateTo('services')}>
                  <Code className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Product Engineering</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Enterprise web applications, Next.js and React platforms, secure custom CRM/ERP portals, and complete SaaS MVP buildouts.
                  </p>
                  <span className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                    Explore specifications <ArrowRight className="w-3 h-3" />
                  </span>
                </CardGlass>

                <CardGlass onClick={() => navigateTo('services')}>
                  <Lightbulb className="w-8 h-8 text-amber-500 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Product Strategy</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Technical discovery, feature prioritization, Solution Architecture blueprints, detailed PRD/BRD and roadmap consulting.
                  </p>
                  <span className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    Explore specifications <ArrowRight className="w-3 h-3" />
                  </span>
                </CardGlass>
              </div>
            </section>

            {/* Interactive Showcase Sandbox Container */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-indigo/5 rounded-full blur-2xl" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-obsidian-border pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Experience Automated Engineering</h3>
                    <p className="text-sm text-gray-400 max-w-xl">
                      Explore our Node-Graph Simulator below. This is an exact visual layout of how our AI Automation setups route enterprise records in real-time.
                    </p>
                  </div>
                  <ButtonPrimary variant="indigo" onClick={() => navigateTo('portfolio')}>
                    View Portfolio Sandboxes
                  </ButtonPrimary>
                </div>

                <WorkflowDemo />
              </div>
            </section>

            {/* Call to Action Module */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-indigo/10 to-brass/10 border border-indigo/20 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Solve Your Systems Bottlenecks?</h3>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8">
                  Book a confidential, 30-minute Architecture Review with our principal engineers. We will inspect your data pipelines and outline a scaling strategy for your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <ButtonPrimary variant="brass" onClick={() => navigateTo('contact')}>
                    Schedule Your Architecture Review
                  </ButtonPrimary>
                  <ButtonPrimary variant="dark" onClick={() => navigateTo('process')}>
                    Learn Our Delivery Process
                  </ButtonPrimary>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 2. ABOUT US PAGE                        */}
        {/* ======================================= */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-xs font-mono uppercase tracking-widest text-brass">ELITE BOUTIQUE ADVISORY</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Elite Technical Pedigree. No Buzzwords.</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We are a tight-knit, multi-disciplinary team of four senior technical directors. We do not delegate your critical infrastructure to junior offshore teams. The experts you meet are the builders who write your code.
              </p>
            </section>

            {/* Bios Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Alexander Vance",
                  role: "Principal Data Architect",
                  pedigree: "ex-Palantir, ex-Microsoft Data",
                  desc: "Specializes in high-scale Snowflake warehouses, direct-query Power BI models, and complex ETL pipelines.",
                  tags: ["PostgreSQL", "Snowflake", "SQL", "Tableau"]
                },
                {
                  name: "Elena Rostova",
                  role: "Lead Automation Engineer",
                  pedigree: "ex-Stripe API Integration Specialist",
                  desc: "Expert in building zero-maintenance serverless webhook pipelines, automated ledger systems, and custom LLM workflows.",
                  tags: ["Python", "API Webhooks", "Docker", "AWS Lambda"]
                },
                {
                  name: "Marcus Sterling",
                  role: "Senior Full-Stack Architect",
                  pedigree: "ex-Vercel Core Contributor",
                  desc: "Crafts high-performance, responsive React and Next.js platforms. Committed to type safety and clean architecture.",
                  tags: ["Next.js", "React", "TypeScript", "Node.js"]
                },
                {
                  name: "Clara Thorne",
                  role: "Director of Product Strategy",
                  pedigree: "ex-McKinsey Digital Consultant",
                  desc: "Bridges technical execution with strategic value. Writes production-ready PRDs, BRDs, and designs robust scaling roadmaps.",
                  tags: ["Solution Architecture", "PRD/BRD", "SaaS Scale"]
                }
              ].map((principal, i) => (
                <CardGlass key={i} className="flex flex-col justify-between h-full bg-obsidian-surface/60">
                  <div>
                    {/* Placeholder Editorial Headshot Illustration */}
                    <div className="w-full h-48 bg-gradient-to-br from-obsidian-muted to-obsidian border border-obsidian-border rounded mb-4 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1e25_1px,transparent_1px),linear-gradient(to_bottom,#1b1e25_1px,transparent_1px)] bg-[size:15px_15px]" />
                      <User className="w-16 h-16 text-gray-600 group-hover:text-indigo-bright transition-colors duration-300 z-10" />
                      <div className="absolute bottom-2 left-2 z-10">
                        <span className="text-[10px] font-mono bg-obsidian border border-obsidian-border text-brass px-2 py-0.5 rounded">
                          {principal.pedigree}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-0.5">{principal.name}</h4>
                    <p className="text-xs text-indigo-bright font-mono mb-3">{principal.role}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{principal.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto border-t border-obsidian-border pt-4">
                    {principal.tags.map((tag, j) => (
                      <BadgeTech key={j} variant="slate">{tag}</BadgeTech>
                    ))}
                  </div>
                </CardGlass>
              ))}
            </section>

            {/* Our Blueprint For Delivery promises */}
            <section className="bg-obsidian-surface/50 border border-obsidian-border rounded-xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="p-2 rounded bg-indigo/10 w-fit text-indigo-bright mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Full Source-Code Ownership</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We hand over clean, production-grade GitHub repositories on day one. No vendor lock-in, no hidden IP clauses. Your code is your asset.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-2 rounded bg-brass/10 w-fit text-brass mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Strict Quality Engineering</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every pipeline, database index, and React page we deliver is verified by automated E2E testing systems (Jest, Playwright) with 90%+ test coverage.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-2 rounded bg-emerald-500/10 w-fit text-emerald-400 mb-2">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Direct Principal Access</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We reject the standard agency structure where clients talk to account managers. You will have direct access to your principal architects 24/7/365.
                </p>
              </div>
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 3. SERVICES CATALOG PAGE                */}
        {/* ======================================= */}
        {activeTab === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-indigo-bright">EXPERT CAPABILITIES</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Comprehensive Technical Execution</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We design, configure, and maintain modern technology architectures. Explore our deep service directory across our 4 core pillars.
              </p>
            </section>

            {/* Core Services Detailed Accordion cards */}
            <section className="space-y-8">
              {/* Pillar 1: BI & Data Analytics */}
              <CardGlass hoverable={false} className="bg-obsidian-surface/40 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-obsidian-border pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded bg-indigo/10 text-indigo-bright">
                      <BarChart3 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">01. Business Intelligence & Data Analytics</h3>
                      <p className="text-xs text-gray-400">High-fidelity business intelligence reporting built to scale</p>
                    </div>
                  </div>
                  <ButtonPrimary variant="indigo" onClick={() => navigateTo('contact')}>
                    Request Data Assessment
                  </ButtonPrimary>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-brass mb-3 font-mono">Core Platforms</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Power BI Dashboard Development</li>
                      <li className="flex items-center gap-2">✔ Tableau Dashboard Design</li>
                      <li className="flex items-center gap-2">✔ Executive KPI Real-time Dashboards</li>
                      <li className="flex items-center gap-2">✔ SQL Database Custom Optimization</li>
                      <li className="flex items-center gap-2">✔ Dashboard Modernization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-brass mb-3 font-mono">Infrastructure & Integration</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Database Schema & Architecture Design</li>
                      <li className="flex items-center gap-2">✔ Data Warehousing (Snowflake, BigQuery)</li>
                      <li className="flex items-center gap-2">✔ High-Performance ETL & Data Pipelines</li>
                      <li className="flex items-center gap-2">✔ Legacy Excel VBA Automation</li>
                      <li className="flex items-center gap-2">✔ Automated Financial Reporting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-brass mb-3 font-mono">Advanced Analytics</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Predictive Demand Forecasting</li>
                      <li className="flex items-center gap-2">✔ Advanced Customer Analytics</li>
                      <li className="flex items-center gap-2">✔ Inventory Telemetry Models</li>
                      <li className="flex items-center gap-2">✔ Live Operational Analytics</li>
                      <li className="flex items-center gap-2">✔ Custom Analytics Integration</li>
                    </ul>
                  </div>
                </div>
              </CardGlass>

              {/* Pillar 2: AI & Business Automation */}
              <CardGlass hoverable={false} className="bg-obsidian-surface/40 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-obsidian-border pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded bg-brass/10 text-brass">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">02. AI & Business Process Automation</h3>
                      <p className="text-xs text-gray-400">Intelligent automations to streamline workflow bottlenecks</p>
                    </div>
                  </div>
                  <ButtonPrimary variant="brass" onClick={() => navigateTo('contact')}>
                    Request Automation Audit
                  </ButtonPrimary>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-indigo-bright mb-3 font-mono">Workflow Engineering</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ AI-driven Workflow Automations</li>
                      <li className="flex items-center gap-2">✔ Automated Core Business Operations</li>
                      <li className="flex items-center gap-2">✔ Intelligent Automated Reports</li>
                      <li className="flex items-center gap-2">✔ Process Digitization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-indigo-bright mb-3 font-mono">SaaS Integrations</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ CRM Automation (HubSpot, Salesforce)</li>
                      <li className="flex items-center gap-2">✔ ERP Automation & Syncing</li>
                      <li className="flex items-center gap-2">✔ Custom API Webhook Integrations</li>
                      <li className="flex items-center gap-2">✔ Internal Business Tools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-indigo-bright mb-3 font-mono">AI Implementations</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Custom AI Chatbots & Agents</li>
                      <li className="flex items-center gap-2">✔ No-Code & Low-Code Integrations</li>
                      <li className="flex items-center gap-2">✔ Automated Data Parsing Pipelines</li>
                      <li className="flex items-center gap-2">✔ Intelligent Decision Routers</li>
                    </ul>
                  </div>
                </div>
              </CardGlass>

              {/* Pillar 3: Software & Digital Product Engineering */}
              <CardGlass hoverable={false} className="bg-obsidian-surface/40 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-obsidian-border pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded bg-emerald-500/10 text-emerald-400">
                      <Code className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">03. Custom Software & Digital Product Engineering</h3>
                      <p className="text-xs text-gray-400">High-performance web applications built with modern engineering standards</p>
                    </div>
                  </div>
                  <ButtonPrimary variant="dark" onClick={() => navigateTo('contact')}>
                    Request MVP Consulting
                  </ButtonPrimary>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-emerald-400 mb-3 font-mono">Custom Web Apps</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Custom Enterprise Software</li>
                      <li className="flex items-center gap-2">✔ Corporate & Business Websites</li>
                      <li className="flex items-center gap-2">✔ Next.js & React Applications</li>
                      <li className="flex items-center gap-2">✔ Custom B2B Customer Portals</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-emerald-400 mb-3 font-mono">Admin & Backends</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ High-Scale Admin Dashboards</li>
                      <li className="flex items-center gap-2">✔ Custom B2B Databases & APIs</li>
                      <li className="flex items-center gap-2">✔ SaaS MVP Rapid Development</li>
                      <li className="flex items-center gap-2">✔ Enterprise Serverless Architecture</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-emerald-400 mb-3 font-mono">Infrastructure</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Cloud Deployments (AWS, Azure)</li>
                      <li className="flex items-center gap-2">✔ Automated CI/CD (GitHub Actions)</li>
                      <li className="flex items-center gap-2">✔ Type-Safe DB Migrations (Prisma)</li>
                      <li className="flex items-center gap-2">✔ 24/7 Telemetry & Maintenance Support</li>
                    </ul>
                  </div>
                </div>
              </CardGlass>

              {/* Pillar 4: Product Strategy & Technology Consulting */}
              <CardGlass hoverable={false} className="bg-obsidian-surface/40 p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-obsidian-border pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded bg-amber-500/10 text-amber-400">
                      <Lightbulb className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">04. Product Strategy & Technology Consulting</h3>
                      <p className="text-xs text-gray-400">Transforming technical ideas into concrete business roadmaps</p>
                    </div>
                  </div>
                  <ButtonPrimary variant="indigo" onClick={() => navigateTo('contact')}>
                    Request Tech Advisory
                  </ButtonPrimary>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-amber-400 mb-3 font-mono">Product Planning</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Technical Discovery & Audits</li>
                      <li className="flex items-center gap-2">✔ Detailed Product Requirements (PRD)</li>
                      <li className="flex items-center gap-2">✔ Business Requirements (BRD)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-amber-400 mb-3 font-mono">Architecture</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Solution Architecture Blueprinting</li>
                      <li className="flex items-center gap-2">✔ Feature Prioritization Frameworks</li>
                      <li className="flex items-center gap-2">✔ Technology Stack Advisories</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase text-amber-400 mb-3 font-mono">Transformation</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">✔ Digital Transformation Advisory</li>
                      <li className="flex items-center gap-2">✔ Agile Execution Roadmapping</li>
                      <li className="flex items-center gap-2">✔ Cloud Migration Consultations</li>
                    </ul>
                  </div>
                </div>
              </CardGlass>
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 4. INDUSTRIES WE SERVE PAGE             */}
        {/* ======================================= */}
        {activeTab === 'industries' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-brass">GLOBAL VERTICALS</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Targeted Technical Solutions</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We integrate with your industry’s specialized tools and data structures. Explore our sector capabilities.
              </p>
            </section>

            {/* Grid of 11 Industries */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Manufacturing & Industry 4.0",
                  desc: "IoT sensor telemetry ingestion pipelines, predictive machine maintenance schedules, real-time inventory tracking, and custom SQL databases.",
                  kpi: "OEE Monitoring"
                },
                {
                  title: "Retail & Omnichannel E-Commerce",
                  desc: "Shopify Custom API synchronizations, automated stock dispatch alerts, customer cohort retention trackers, and multi-currency reporting.",
                  kpi: "LTV Optimization"
                },
                {
                  title: "Enterprise SaaS Platforms",
                  desc: "Next.js multi-tenant SaaS structures, custom subscription billing webhooks, real-time user action tracking, and database scale consulting.",
                  kpi: "Churn Telemetry"
                },
                {
                  title: "Logistics, Fleet & Supply Chain",
                  desc: "Real-time fleet route visualization, cargo telemetry logs, automated warehouse dispatch systems, and predictive demand modeling.",
                  kpi: "Latency Reductions"
                },
                {
                  title: "Healthcare & Biotech Portals",
                  desc: "Highly secure HIPAA-compliant doctor-patient communication interfaces, custom data encryption configurations, and laboratory log trackers.",
                  kpi: "Data Security"
                },
                {
                  title: "Finance & Quantitative Reports",
                  desc: "Secured ledger databases, automated financial reconciliation systems, and high-precision direct-query executive dashboards.",
                  kpi: "Zero-error Ledgers"
                },
                {
                  title: "Automotive & Telemetry Logs",
                  desc: "Connected vehicle diagnostics logs, custom SQL fleet dashboards, and high-frequency real-time event parsers.",
                  kpi: "Real-time Ingestion"
                },
                {
                  title: "Education & Student Portals",
                  desc: "Learning Management System (LMS) custom integrations, secure grading ledgers, and interactive administrative dashboards.",
                  kpi: "Cohort Tracking"
                },
                {
                  title: "Construction & Project Control",
                  desc: "Custom inventory tracking, onsite telemetry tools, and automated Gantt roadmap dashboards.",
                  kpi: "Asset Management"
                }
              ].map((ind, i) => (
                <CardGlass key={i} className="bg-obsidian-surface/60 border-obsidian-border/80 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-base font-bold text-white pr-4">{ind.title}</h4>
                      <span className="text-[10px] font-mono bg-indigo/10 border border-indigo/20 text-indigo-bright px-2 py-0.5 rounded">
                        {ind.kpi}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-obsidian-border/50 flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>STATUS: READY</span>
                    <span className="text-brass">EXPLORE BLUEPRINT →</span>
                  </div>
                </CardGlass>
              ))}
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 5. PORTFOLIO & CASE STUDIES PAGE        */}
        {/* ======================================= */}
        {activeTab === 'portfolio' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-indigo-bright">TECHNICAL DEPLOYMENTS</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Real-World Proof of Concept</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We believe in visual evidence. Below are initial premium sandbox demonstrations of our core technology stack, simulating live client deliverables.
              </p>
            </section>

            {/* Filter buttons */}
            <section className="flex justify-center gap-2 font-mono">
              {[
                { id: 'all', label: 'All Frameworks' },
                { id: 'bi', label: 'BI & Dashboards' },
                { id: 'auto', label: 'AI & Automations' },
                { id: 'software', label: 'SaaS & Custom App' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setPortfolioFilter(btn.id as any)}
                  className={`
                    px-4 py-1.5 rounded text-xs transition-all duration-200 border
                    ${portfolioFilter === btn.id
                      ? 'bg-indigo border-indigo text-white shadow-[0_2px_15px_rgba(79,70,229,0.3)]'
                      : 'bg-obsidian-card border-obsidian-border text-gray-400 hover:text-white hover:border-gray-600'}
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </section>

            {/* Simulated Case Studies Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1: BI Dashboard */}
              {(portfolioFilter === 'all' || portfolioFilter === 'bi') && (
                <CardGlass hoverable={false} className="bg-obsidian-surface/60 space-y-6">
                  <div className="flex justify-between items-start border-b border-obsidian-border pb-4">
                    <div>
                      <span className="text-[10px] font-mono text-brass uppercase">Business Intelligence Case Study</span>
                      <h4 className="text-lg font-bold text-white mt-1">Enterprise Real-time Revenue Matrix</h4>
                    </div>
                    <span className="text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded">
                      -94% Latency Drop
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong>Situation:</strong> An international manufacturer had reporting latency exceeding 22 hours, leading to significant inventory misallocations.
                    <br />
                    <strong>Transformation:</strong> We created an optimized Snowflake direct-query data pipeline connected directly to a high-density Power BI cockpit.
                  </p>

                  <div className="p-1.5 border border-obsidian-border rounded bg-obsidian">
                    <DashboardDemo />
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-obsidian-border/50">
                    <BadgeTech>Power BI</BadgeTech>
                    <BadgeTech>Snowflake</BadgeTech>
                    <BadgeTech>SQL Query Optimization</BadgeTech>
                    <BadgeTech>AWS ETL Pipelines</BadgeTech>
                  </div>
                </CardGlass>
              )}

              {/* Item 2: AI Automation */}
              {(portfolioFilter === 'all' || portfolioFilter === 'auto') && (
                <CardGlass hoverable={false} className="bg-obsidian-surface/60 space-y-6">
                  <div className="flex justify-between items-start border-b border-obsidian-border pb-4">
                    <div>
                      <span className="text-[10px] font-mono text-indigo-bright uppercase">AI Automation Case Study</span>
                      <h4 className="text-lg font-bold text-white mt-1">Multi-Stage Event Hook enrichment</h4>
                    </div>
                    <span className="text-xs font-mono bg-indigo/10 border border-indigo/20 text-indigo-bright px-2.5 py-1 rounded">
                      SOC2 Compliant Setup
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong>Situation:</strong> SaaS platform was processing payments without automated enrichment or Slack triggers, causing account managers to lose vital onboarding context.
                    <br />
                    <strong>Transformation:</strong> We built automated serverless webhook pipelines that parse Stripe webhook payloads, run LLM enrichment algorithms, and dispatch logs.
                  </p>

                  <div className="p-1.5 border border-obsidian-border rounded bg-obsidian">
                    <WorkflowDemo />
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-obsidian-border/50">
                    <BadgeTech>Python</BadgeTech>
                    <BadgeTech>Webhook API</BadgeTech>
                    <BadgeTech>OpenAI API</BadgeTech>
                    <BadgeTech>Serverless AWS Lambda</BadgeTech>
                  </div>
                </CardGlass>
              )}
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 6. PROCESS PAGE                         */}
        {/* ======================================= */}
        {activeTab === 'process' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-brass">THE FORGE METHODOLOGY</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Turn Complex Problems into Code</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our rigorous, 6-stage development process guarantees predictable delivery and exceptional code quality.
              </p>
            </section>

            {/* Timeline */}
            <section className="relative max-w-4xl mx-auto space-y-12">
              {/* Center line decoration */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-obsidian-border" />

              {[
                {
                  step: "01",
                  title: "Discovery & Strategy Assessment",
                  desc: "We perform a thorough 2-week review of your current databases, tech systems, and code structures. We draft detailed Business Requirement Documents (BRD) to ensure perfect alignment.",
                  time: "Week 1 - 2"
                },
                {
                  step: "02",
                  title: "System Architecture & Layout Design",
                  desc: "We design optimized SQL database schemas, define secure API endpoints, and map out responsive UI wireframes. Everything is fully reviewed with you before writing a line of code.",
                  time: "Week 3"
                },
                {
                  step: "03",
                  title: "Agile Coding & Direct Integration",
                  desc: "We build your product in rapid, bi-weekly sprints. We provide you with real-time access to a private GitHub repository so you can monitor progress and maintain full control.",
                  time: "Weeks 4 - 8"
                },
                {
                  step: "04",
                  title: "Quality Assurance & Automated Testing",
                  desc: "We write automated unit and End-to-End (E2E) tests. We run rigorous performance audits to verify that page rendering is fast and database queries take sub-milliseconds.",
                  time: "Week 9"
                },
                {
                  step: "05",
                  title: "Production Deployment",
                  desc: "We configure a highly secure, zero-downtime deployment pipeline on AWS or Azure. We hand over all access keys, API configurations, and deployment logs.",
                  time: "Week 10"
                },
                {
                  step: "06",
                  title: "Ongoing Support & Monitoring",
                  desc: "We set up live server monitoring (telemetry) to track system performance. We provide monthly software updates, database maintenance, and security patches.",
                  time: "Ongoing"
                }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start">
                  {/* Step bubble */}
                  <div className="absolute left-1 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian border-2 border-indigo flex items-center justify-center z-10">
                    <span className="text-xs font-mono font-bold text-indigo-bright">{item.step}</span>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 md:text-right ${i % 2 === 0 ? 'md:order-1' : 'md:order-3 invisible md:block pointer-events-none'}`}>
                    <span className="text-[10px] font-mono text-brass uppercase block mb-1">{item.time}</span>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Spacer column */}
                  <div className="hidden md:block w-[10%] md:order-2" />

                  {/* Right Column (Desktop) */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${i % 2 !== 0 ? 'md:order-3' : 'md:order-1 invisible md:block pointer-events-none'}`}>
                    <span className="text-[10px] font-mono text-brass uppercase block mb-1">{item.time}</span>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 7. INSIGHTS JOURNAL (BLOG) PAGE         */}
        {/* ======================================= */}
        {activeTab === 'insights' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-indigo-bright">TECHNICAL JOURNAL</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Elite Engineering Commentary</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Read our in-depth technical guides, detailed benchmarks, and architectural strategies, written directly by our principal engineers.
              </p>
            </section>

            {/* Articles directory list */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "How to Resolve PostgreSQL Performance Bottlenecks at Scale",
                  author: "Alexander Vance",
                  role: "Principal Data Architect",
                  read: "12 min read",
                  date: "OCT 14, 2024",
                  desc: "Learn our step-by-step methodology for diagnosing sluggish SQL database queries, configure table partitions, and design highly performant direct-query indexes."
                },
                {
                  title: "Building Secure, Type-Safe Web APIs using Next.js & Prisma",
                  author: "Marcus Sterling",
                  role: "Senior Full-Stack Architect",
                  read: "9 min read",
                  date: "SEP 28, 2024",
                  desc: "A detailed guide on configuring zero-maintenance, type-safe database schemas with Prisma ORM, implementing validation layers, and achieving optimal rendering performance."
                },
                {
                  title: "Replacing Manual ERP Data Extractions with Serverless Pipelines",
                  author: "Elena Rostova",
                  role: "Lead Automation Engineer",
                  read: "8 min read",
                  date: "SEP 05, 2024",
                  desc: "Learn how we designed a zero-downtime serverless database pipeline that automatically extracts SAP ledger tables, parses JSON schemas, and updates dashboards."
                }
              ].map((art, i) => (
                <CardGlass key={i} className="flex flex-col justify-between h-full bg-obsidian-surface/60">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 mb-4">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.read}</span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-3 hover:text-indigo-bright transition-colors duration-200">
                      {art.title}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {art.desc}
                    </p>
                  </div>

                  <div className="border-t border-obsidian-border pt-4 mt-auto flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-obsidian border border-obsidian-border flex items-center justify-center">
                      <User className="w-4 h-4 text-brass" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-white">{art.author}</h5>
                      <span className="text-[9px] font-mono text-indigo-bright">{art.role}</span>
                    </div>
                  </div>
                </CardGlass>
              ))}
            </section>
          </div>
        )}


        {/* ======================================= */}
        {/* 8. CONTACT PAGE                         */}
        {/* ======================================= */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            <section className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-xs font-mono uppercase tracking-widest text-brass">SECURE CHANNEL</h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Build Something Premium</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect directly with our senior developers. We sign Non-Disclosure Agreements (NDAs) automatically upon inquiry submission to protect your intellectual property.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Left Column Information */}
              <div className="space-y-8 bg-obsidian-surface/30 p-8 rounded-lg border border-obsidian-border">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Direct Connection Channels</h3>
                  <p className="text-xs text-gray-400">Prefer direct messages? Reach out through our secure support endpoints.</p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-gray-500 block mb-1">SECURE CORPORATE EMAIL</span>
                    <a href="mailto:secure@insightforge.site" className="text-white hover:text-indigo-bright transition-colors">
                      secure@insightforge.site
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-500 block mb-1">TELEPHONE HOTLINE</span>
                    <a href="tel:+18005553282" className="text-white hover:text-brass transition-colors">
                      +1 (800) 555-DATA
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-500 block mb-1">SECURE WHATSAPP BUSINESS CHAT</span>
                    <a href="https://wa.me/18005553282" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      Chat with Principal Lead
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-obsidian-card/80 border border-obsidian-border rounded text-xs text-gray-400 leading-relaxed">
                  🛡️ <strong>GDPR & NDA Assurance:</strong> Insight Forge ensures that all communications are heavily encrypted. All proprietary schemas, source codes, and business goals are kept fully private.
                </div>
              </div>

              {/* Right Column Contact Form */}
              <CardGlass hoverable={false} className="bg-obsidian-surface/60">
                {formSubmitted ? (
                  <div className="h-full flex flex-col justify-center items-center text-center p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-indigo/20 border border-indigo flex items-center justify-center text-indigo-bright animate-bounce mb-2">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Inquiry Received Successfully</h4>
                    <p className="text-xs text-gray-400 max-w-xs">
                      We have auto-logged your project payload. A principal data or software architect will contact you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1.5">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-obsidian border border-obsidian-border rounded px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1.5">Company / Org</label>
                        <input
                          type="text"
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                          placeholder="Acme Corp"
                          className="w-full bg-obsidian border border-obsidian-border rounded px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1.5">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-obsidian border border-obsidian-border rounded px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1.5">Estimated Project Budget</label>
                      <select
                        value={formBudget}
                        onChange={(e) => setFormBudget(e.target.value)}
                        className="w-full bg-obsidian border border-obsidian-border rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo cursor-pointer"
                      >
                        <option>$10k - $25k</option>
                        <option>$25k - $50k</option>
                        <option>$50k - $100k</option>
                        <option>$100k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1.5">Detailed Project Goals / Bottlenecks</label>
                      <textarea
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Please describe your databases, current stack, or the processes you are looking to automate..."
                        className="w-full bg-obsidian border border-obsidian-border rounded px-3 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-brass text-obsidian hover:bg-brass-light transition-all duration-300 text-xs font-bold font-mono uppercase tracking-widest shadow-[0_4px_20px_rgba(197,168,128,0.2)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Secure Request
                    </button>
                  </form>
                )}
              </CardGlass>
            </section>
          </div>
        )}

      </main>

      {/* Global Bottom Navigation Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
