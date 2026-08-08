import React from 'react';

interface BadgeTechProps {
  children: React.ReactNode;
  className?: string;
}

export const BadgeTech: React.FC<BadgeTechProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-accent-gold/10 text-accent-gold border border-accent-gold/20 ${className}`}>
      {children}
    </span>
  );
};
