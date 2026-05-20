import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary-1 text-white hover:bg-primary-3 shadow-lg hover:shadow-primary-1/50',
    secondary: 'bg-secondary-1 text-white hover:bg-secondary-2 shadow-lg hover:shadow-secondary-1/50',
    outline: 'border-2 border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-white',
    white: 'bg-white text-primary-1 hover:bg-gray-100 shadow-md',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
