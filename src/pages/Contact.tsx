import React, { useState, useEffect } from 'react';
import { CardGlass } from '../components/ui/CardGlass';
import { Shield, MessageSquare, Phone, Mail, Terminal, Calendar, ArrowRight } from 'lucide-react';

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
    let newValue: string | boolean = value;
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

  // Prepares the WhatsApp pre-filled link with the user's filled form details
  const getWhatsAppBackupUrl = () => {
    const selectedPillars = [];
    if (formData.bi) selectedPillars.push('BI & Analytics');
    if (formData.ai) selectedPillars.push('AI & Automation');
    if (formData.dev) selectedPillars.push('Software Engineering');

    const text = `Hello Insight Forge,
I have just submitted a project inquiry:
Name: ${formData.name || 'N/A'}
Company: ${formData.company || 'N/A'}
Email: ${formData.email || 'N/A'}
Pillars: ${selectedPillars.join(', ') || 'None selected'}
Bottleneck: ${formData.bottleneck || 'N/A'}`;

    return `https://wa.me/918891525552?text=${encodeURIComponent(text)}`;
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
          Submit your inquiry to receive custom technical recommendations. All submitted information is automatically protected under our NDA protocol and reviewed directly by our partners.
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
            <a href="mailto:site.insightforge@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group">
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-brand-primary group-hover:text-accent-gold transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Secure Email</span>
                <span className="text-sm font-semibold text-text-primary">site.insightforge@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918891525552" className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group">
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-brand-primary group-hover:text-accent-gold transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Secure Partner Line</span>
                <span className="text-sm font-semibold text-text-primary">+91 8891 525 552</span>
              </div>
            </a>

            <a
              href="https://wa.me/918891525552?text=Hello%20Insight%20Forge%2C%20I%20would%20like%20to%20schedule%20a%20product%2Farchitecture%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group min-h-[60px]"
            >
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-[#25D366] group-hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.99C16.554 1.874 14.077.842 11.44.842c-5.441 0-9.864 4.422-9.867 9.867-.001 1.748.469 3.453 1.36 4.985l-1.01 3.692 3.784-.993zm11.233-5.94c-.31-.154-1.83-.901-2.11-.1.01-.278-.125-.412-.228-.562l-.744-1.09c-.113-.165-.2-.31-.05-.53.11-.16.49-.57.74-.88.11-.14.2-.31.1-.53-.1-.22-.92-2.22-1.26-3.04-.33-.8-.67-.69-.92-.7-.24-.01-.52-.01-.8.01-.28.01-.73.11-1.12.53-.38.42-1.47 1.44-1.47 3.5s1.5 4.07 1.7 4.35c.21.28 2.95 4.5 7.15 6.31 1 .43 1.78.69 2.39.88 1.01.32 1.93.28 2.66.17.81-.12 2.49-1.02 2.84-2 1.01-1.01.31-1.92.23-2.08-.07-.16-.27-.24-.58-.4z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-semibold text-brand-primary">Direct WhatsApp Secure</span>
                <span className="text-sm font-semibold text-text-primary">+91 8891 525 552</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/insightforgesite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border-custom bg-bg-surface/50 hover:border-brand-primary transition-colors cursor-pointer group min-h-[60px]"
            >
              <div className="p-3 rounded-lg bg-bg-dark border border-border-custom text-[#0A66C2] group-hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest font-semibold text-brand-primary">Official LinkedIn Network</span>
                <span className="text-sm font-semibold text-text-primary">linkedin.com/in/insightforgesite</span>
              </div>
            </a>
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
              <h3 className="font-display font-semibold text-xl text-text-primary">Inquiry Securely Logged & Transmitted</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                Your specifications have been securely parsed and encrypted in our partner pipeline. ABHILASH R and ANAND R have been assigned as your lead auditors.
              </p>

              {/* WhatsApp direct pass link block */}
              <div className="w-full bg-bg-dark border border-border-custom rounded-xl p-6 mb-4 text-left flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary font-semibold">Instant Escalation Backup</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Want an instant partner response? Use our WhatsApp dispatcher to send your form contents directly to our lead engineers in one click.
                </p>
                <a
                  href={getWhatsAppBackupUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Send Inquiries via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {showCalendly ? (
                <div className="w-full bg-bg-dark border border-border-custom rounded-xl p-4 sm:p-8 animate-fade-in text-left">
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
