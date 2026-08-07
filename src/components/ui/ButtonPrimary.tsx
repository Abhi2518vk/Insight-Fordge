import React from 'react';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'indigo' | 'brass' | 'dark';
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  variant = 'indigo',
  icon,
  children,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 scale-100 hover:scale-102 active:scale-98 overflow-hidden group";

  const variants = {
    indigo: "bg-obsidian border border-indigo/40 text-white hover:bg-indigo hover:border-indigo shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]",
    brass: "bg-brass/10 border border-brass/50 text-brass-light hover:bg-brass hover:text-obsidian hover:border-brass shadow-[0_0_15px_rgba(197,168,128,0.1)] hover:shadow-[0_0_25px_rgba(197,168,128,0.35)]",
    dark: "bg-obsidian border border-obsidian-border text-gray-400 hover:text-white hover:bg-obsidian-surface hover:border-gray-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
      {/* Dynamic hover gloss light effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  );
};
