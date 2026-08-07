import React from 'react';

interface BadgeTechProps {
  children: string;
  variant?: 'gold' | 'indigo' | 'slate';
}

export const BadgeTech: React.FC<BadgeTechProps> = ({
  children,
  variant = 'gold',
}) => {
  const styles = {
    gold: "bg-brass/5 text-brass border-brass/20 hover:bg-brass/10",
    indigo: "bg-indigo/5 text-indigo-bright border-indigo/20 hover:bg-indigo/10",
    slate: "bg-obsidian-surface text-gray-400 border-obsidian-border hover:text-white"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border transition-colors duration-200 ${styles[variant]}`}>
      {children}
    </span>
  );
};
