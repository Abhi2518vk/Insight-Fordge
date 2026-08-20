import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  setCurrentPage: (page: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ setCurrentPage }) => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-2xl bg-bg-surface border border-border-custom flex items-center justify-center font-mono text-2xl text-accent-gold mb-6 shadow-2xl">
        404
      </div>
      <span className="font-mono text-xs text-accent-gold uppercase tracking-widest font-semibold mb-2">Route Unmapped</span>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary max-w-xl mb-4">
        404 — System Endpoint Not Found
      </h1>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md mb-8">
        The requested URL endpoint or system route does not exist in our active architecture matrix.
      </p>
      <button
        onClick={() => setCurrentPage('home')}
        className="px-6 py-3.5 rounded-lg font-display text-sm font-medium bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.25)]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to System Core (Home)</span>
      </button>
    </div>
  );
};
