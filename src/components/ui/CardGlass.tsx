import React from 'react';

interface CardGlassProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const CardGlass: React.FC<CardGlassProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-obsidian-card/90 backdrop-blur-xl border border-obsidian-border rounded-lg p-6
        transition-all duration-300 ease-out shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        ${hoverable ? 'hover:border-indigo/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(79,70,229,0.1)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Subtle top reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-t-lg" />

      {children}
    </div>
  );
};
