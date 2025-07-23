'use client';

import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({ children, onClick, disabled = false, className = '' }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white transition-colors duration-200
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
        ${className}`}
    >
      {children}
    </button>
  );
}
