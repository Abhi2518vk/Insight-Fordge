import React from 'react';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyle = "px-6 py-3 rounded-lg font-display text-sm tracking-wide font-medium transition-all duration-300 transform cursor-pointer flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-brand-primary text-text-primary border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary hover:scale-[1.02] shadow-[0_0_15px_rgba(79,70,229,0.15)] hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]",
    secondary: "bg-bg-surface text-text-primary border border-border-custom hover:bg-bg-dark hover:border-accent-gold hover:scale-[1.02]",
    outline: "bg-transparent text-accent-gold border border-accent-gold/40 hover:border-accent-gold hover:bg-accent-gold/10 hover:scale-[1.02]"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
