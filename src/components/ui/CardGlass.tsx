import React from 'react';

interface CardGlassProps {
  children: React.ReactNode;
  className?: string;
}

export const CardGlass: React.FC<CardGlassProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-bg-surface/80 backdrop-blur-md border border-border-custom hover:border-brand-primary/30 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </div>
  );
};
