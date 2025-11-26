import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-serif tracking-wide transition-all duration-300 rounded-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-vintage-800 text-vintage-100 hover:bg-vintage-700 shadow-md border border-transparent hover:shadow-lg",
    secondary: "bg-vintage-300 text-vintage-900 hover:bg-vintage-200 shadow-sm border border-vintage-400",
    outline: "bg-transparent text-vintage-800 border border-vintage-800 hover:bg-vintage-800 hover:text-vintage-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
