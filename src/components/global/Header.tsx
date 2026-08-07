import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-obsidian-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Identifier */}
        <div
          onClick={() => handleTabSelect('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo vector icon */}
          <div className="w-10 h-10 rounded border border-obsidian-border bg-obsidian-card flex items-center justify-center p-1 group-hover:border-indigo transition-all duration-300">
            <img src="/vectors/logo.svg" alt="Insight Forge Logo" className="w-full h-full" />
          </div>
          <div>
            <span className="text-base font-bold font-sans tracking-wide text-white group-hover:text-indigo-bright transition-colors duration-200">
              Insight Forge
            </span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded bg-obsidian-border text-[9px] font-mono uppercase text-brass">
              Boutique Advisory
            </span>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-1.5 bg-obsidian-card border border-obsidian-border px-3 py-1.5 rounded-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabSelect(item.id)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-indigo text-white shadow-[0_2px_10px_rgba(79,70,229,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-obsidian-surface'}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Primary Call to Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleTabSelect('contact')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded bg-brass/10 border border-brass/40 text-brass hover:bg-brass hover:text-obsidian transition-all duration-300 text-xs font-semibold uppercase tracking-wider font-mono shadow-[0_0_15px_rgba(197,168,128,0.1)]"
          >
            Schedule Assessment
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded border border-obsidian-border bg-obsidian-card text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-obsidian border-b border-obsidian-border shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 z-40 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabSelect(item.id)}
                  className={`
                    w-full py-3 px-4 rounded text-left font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-indigo/20 border-l-4 border-indigo text-white font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-obsidian-surface border-l-4 border-transparent'}
                  `}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleTabSelect('contact')}
              className="mt-2 w-full py-3 rounded bg-brass text-obsidian font-bold text-sm uppercase tracking-wider font-mono text-center flex items-center justify-center gap-2"
            >
              Schedule Assessment
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
