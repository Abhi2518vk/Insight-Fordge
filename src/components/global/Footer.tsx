import React from 'react';
import { Mail, Phone, MessageSquare, Linkedin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-obsidian-border pt-16 pb-12 relative overflow-hidden">
      {/* Dynamic ambient accent lights */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand identity block */}
        <div>
          <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => handleTabSelect('home')}>
            <div className="w-8 h-8 rounded border border-obsidian-border bg-obsidian-card p-1">
              <img src="/vectors/logo.svg" alt="Insight Forge Logo" className="w-full h-full" />
            </div>
            <span className="font-bold text-white tracking-wide">Insight Forge</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-6">
            An elite technology consulting and software engineering boutique. We design and build enterprise-grade data platforms, custom web applications, and AI automated systems.
          </p>
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border text-[9px] font-mono text-brass uppercase">
              SOC2 Compliant Ready
            </span>
            <span className="px-2.5 py-1 rounded bg-obsidian-surface border border-obsidian-border text-[9px] font-mono text-indigo-bright uppercase">
              AWS Certified Partners
            </span>
          </div>
        </div>

        {/* Corporate Sitemap Nav directory */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono mb-4">Sitemap</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleTabSelect('home')} className="text-gray-400 hover:text-white transition-colors duration-150">
                Home (Overview)
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('about')} className="text-gray-400 hover:text-white transition-colors duration-150">
                About (Our Team)
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('services')} className="text-gray-400 hover:text-white transition-colors duration-150">
                Services Catalog
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('industries')} className="text-gray-400 hover:text-white transition-colors duration-150">
                Industries We Serve
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('portfolio')} className="text-gray-400 hover:text-white transition-colors duration-150">
                Case Studies & Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('process')} className="text-gray-400 hover:text-white transition-colors duration-150">
                The Forge Process
              </button>
            </li>
            <li>
              <button onClick={() => handleTabSelect('insights')} className="text-gray-400 hover:text-white transition-colors duration-150">
                Insights Blog
              </button>
            </li>
          </ul>
        </div>

        {/* Target verticals and sectors directory */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono mb-4">Focus Sectors</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>• Manufacturing & Industry 4.0</li>
            <li>• Retail & Digital Commerce</li>
            <li>• Enterprise SaaS Solutions</li>
            <li>• Logistics, Fleet & Supply Chain</li>
            <li>• Healthcare & Biotech Portals</li>
            <li>• Finance & Real-Time Ledgers</li>
            <li>• Automotive Diagnostics Telemetry</li>
          </ul>
        </div>

        {/* Contact channels & details block */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono mb-4">Secure Contact Channels</h4>
          <ul className="space-y-3 text-xs">
            <li>
              <a href="mailto:secure@insightforge.site" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-indigo-bright" />
                <span>secure@insightforge.site</span>
              </a>
            </li>
            <li>
              <a href="tel:+18005553282" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brass" />
                <span>+1 (800) 555-DATA</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/18005553282" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>WhatsApp Secure Chat</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/insightforge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 text-indigo-bright" />
                <span>LinkedIn Corporate Page</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copy legal details strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-obsidian-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>
          © {new Date().getFullYear()} Insight Forge Inc. All corporate IP rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-gray-300">Terms of Engagement</a>
          <a href="#security" className="hover:text-gray-300">Security standards</a>
        </div>
      </div>
    </footer>
  );
};
