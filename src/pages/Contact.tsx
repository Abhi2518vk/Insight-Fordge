import React, { useState, useEffect } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { Shield, MessageSquare, Phone, Mail, Terminal, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    bottleneck: '',
    bi: false,
    ai: false,
    dev: false
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showCalendly, setShowCalendly] = useState<boolean>(false);

  // Restore input states from sessionStorage to prevent accidental browser refresh wipeouts
  useEffect(() => {
    const saved = sessionStorage.getItem('insight-forge-contact');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Session recover fail', e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let newValue: any = value;
    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    }
    const updated = { ...formData, [name]: newValue };
    setFormData(updated);
    sessionStorage.setItem('insight-forge-contact', JSON.stringify(updated));
  };

  const handleCheckboxChange = (field: 'bi' | 'ai' | 'dev') => {
    const updated = { ...formData, [field]: !formData[field] };
    setFormData(updated);
    sessionStorage.setItem('insight-forge-contact', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.removeItem('insight-forge-contact');
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      {/* 1. Header */}
      <div className="max-w-3xl mb-16 flex flex-col gap-4">
        <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold font-medium">Contact Portal</span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary leading-tight">
          Initiate Your Project Architecture Audit.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          Submit your query to receive custom database designs and pipeline models. All submission coordinates are automatically protected under our unilateral NDA protocol.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column - Pedigree channels */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-display font-medium text-text-primary uppercase tracking-wider text-xs">Direct Partner Channels</h4>
            <p className="text-text-secondary text-xs">Skip the sales queues and write directly to our principal leads.</p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="mailto:insightforge.site@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group">
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-brand-primary group-hover:text-accent-gold transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Secure Email</span>
                <span className="text-sm font-semibold text-text-primary">insightforge.site@gmail.com</span>
              </div>
            </a>

            <a href="tel:+18005553282" className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group">
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-brand-primary group-hover:text-accent-gold transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Secure Toll-Free Line</span>
                <span className="text-sm font-semibold text-text-primary">+91 7594 835 882</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50">
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-brand-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Direct WhatsApp Secure</span>
                <span className="text-sm font-semibold text-text-primary">Verified Partnership Channel</span>
              </div>
            </div>
          </div>

          {/* Secure alignment warning */}
          <div className="p-5 rounded-xl border border-brand-primary/20 bg-brand-primary/5 flex gap-4 items-start">
            <Shield className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-brand-primary uppercase tracking-widest font-semibold">Automatic NDA Protocol</span>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                All uploaded information, project briefs, and schematic database data are immediately legally protected under our automated unilateral Non-Disclosure Agreement (NDA).
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Lead Capture or Calendly Scheduler */}
        <div className="lg:col-span-7">
          {submitted ? (
            <CardGlass className="p-8 sm:p-12 border-brand-primary/30 text-center flex flex-col items-center gap-6 animate-forge">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-accent-gold mb-2">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary">Inquiry Securely Transmitted</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                Alexander Vance and Elena Rostova have been assigned as your principal leads. Tap below to reserve your direct 30-minute system audit slot using our calendar.
              </p>

              {showCalendly ? (
                <div className="w-full bg-bg-dark border border-border-custom rounded-xl p-4 sm:p-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-custom/50">
                    <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest">Calendly scheduling integration</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  {/* High fidelity mock Calendly component */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-bg-surface border border-border-custom hover:border-brand-primary cursor-pointer transition-colors">
                      <Calendar className="w-5 h-5 text-brand-primary" />
                      <span className="font-display font-semibold text-sm text-text-primary">Stage 1 Diagnostics</span>
                      <span className="text-[10px] text-text-secondary">30 Min Audit - Direct Partner</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-bg-surface border border-border-custom hover:border-brand-primary cursor-pointer transition-colors">
                      <Calendar className="w-5 h-5 text-accent-gold" />
                      <span className="font-display font-semibold text-sm text-text-primary">Schema Transformation</span>
                      <span className="text-[10px] text-text-secondary">45 Min Diagnostic - Direct Partner</span>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowCalendly(true)}
                  className="px-6 py-3 rounded-lg font-display text-sm font-semibold bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.25)] cursor-pointer"
                >
                  Unlock Calendly Scheduler
                </button>
              )}
            </CardGlass>
          ) : (
            <CardGlass className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-display"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Company / Org</label>
                    <input
                      type="text"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enterprise Corp"
                      className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-display"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Work Email Address</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="partner@enterprise.com"
                    className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-mono"
                  />
                </div>

                {/* Service checklist selection */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Pillars of Interest</label>
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange('bi')}
                      className={`px-4 py-2.5 rounded-lg border font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.bi ? 'bg-brand-primary/15 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      [ {formData.bi ? 'X' : ' '} ] Business Intelligence
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange('ai')}
                      className={`px-4 py-2.5 rounded-lg border font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.ai ? 'bg-brand-primary/15 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      [ {formData.ai ? 'X' : ' '} ] AI & Automation
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange('dev')}
                      className={`px-4 py-2.5 rounded-lg border font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        formData.dev ? 'bg-brand-primary/15 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      [ {formData.dev ? 'X' : ' '} ] Software Engineering
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Describe Your System Bottleneck</label>
                  <textarea
                    required
                    name="bottleneck"
                    value={formData.bottleneck}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Detail database schemas, processing latency, or custom dashboard timeouts..."
                    className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-display"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-display text-sm font-semibold bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:scale-[1.01] cursor-pointer"
                >
                  Submit Secure Project Inquiry
                </button>
              </form>
            </CardGlass>
          )}
        </div>
      </div>
    </div>
  );
};
