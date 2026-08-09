import React, { useState } from 'react';
import { Shield, Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'industries', name: 'Industries' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'process', name: 'Process' },
    { id: 'insights', name: 'Insights' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-border-custom bg-bg-surface group-hover:border-brand-primary transition-all duration-300">
            <Shield className="w-5 h-5 text-brand-primary group-hover:text-accent-gold transition-all duration-300" />
            <div className="absolute -inset-0.5 bg-brand-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-wide text-text-primary text-lg animate-pulse-slow">INSIGHT FORGE</span>
            <span className="font-mono text-[9px] text-accent-gold tracking-wider uppercase font-semibold">Data Consulting & System Architecture</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 rounded-md font-display text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                currentPage === item.id
                  ? 'text-accent-gold bg-bg-surface/60 border border-border-custom/50'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface/20'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA in Header */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs text-accent-gold border border-accent-gold/30 hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Schedule Audit</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-bg-surface border-b border-border-custom py-6 px-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3 px-4 rounded-lg font-display text-sm transition-all duration-200 cursor-pointer ${
                  currentPage === item.id
                    ? 'text-accent-gold bg-bg-dark/80 border border-border-custom/80'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-dark/30'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('contact');
                setMobileMenuOpen(false);
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-mono text-xs text-accent-gold border border-accent-gold/30 hover:bg-accent-gold/10 transition-all duration-200 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Schedule Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
