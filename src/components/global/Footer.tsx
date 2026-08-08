import React from 'react';
import { Shield, GitBranch, MessageSquare, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-bg-dark border-t border-border-custom pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About summary */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-custom bg-bg-surface group-hover:border-brand-primary transition-all duration-300">
                <Shield className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold tracking-wide text-text-primary text-base">INSIGHT FORGE</span>
                <span className="font-mono text-[9px] text-accent-gold tracking-widest uppercase">System Engineers</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Elite four-partner technology consulting company engineering BI solutions, AI automation, and custom full-stack enterprise web platforms.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-text-primary text-sm tracking-wider uppercase">Capabilities</h4>
            <div className="flex flex-col gap-2">
              <button onClick={() => setCurrentPage('services')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Business Intelligence</button>
              <button onClick={() => setCurrentPage('services')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">AI Workflow Automation</button>
              <button onClick={() => setCurrentPage('services')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Product Engineering</button>
              <button onClick={() => setCurrentPage('services')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Product Strategy</button>
            </div>
          </div>

          {/* Core Verticals */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-text-primary text-sm tracking-wider uppercase">Resources</h4>
            <div className="flex flex-col gap-2">
              <button onClick={() => setCurrentPage('industries')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Industries Served</button>
              <button onClick={() => setCurrentPage('portfolio')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Interactive Sandboxes</button>
              <button onClick={() => setCurrentPage('process')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">The Engineering System</button>
              <button onClick={() => setCurrentPage('insights')} className="text-left text-text-secondary hover:text-accent-gold text-sm transition-colors cursor-pointer">Technical Deep-Dives</button>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-text-primary text-sm tracking-wider uppercase">Secure Channels</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:partner@insightforge.site" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>partner@insightforge.site</span>
              </a>
              <a href="tel:+18005553282" className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+1 (800) 555-DATA</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MessageSquare className="w-4 h-4 text-brand-primary" />
                <span>Secure WhatsApp Enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and compliance footer */}
        <div className="border-t border-border-custom/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-secondary font-mono">
            &copy; {new Date().getFullYear()} INSIGHT FORGE LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
              <GitBranch className="w-4 h-4 text-accent-gold" />
              <span>SOC-2 Type II Compliant Architecture</span>
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-surface hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-200 flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
