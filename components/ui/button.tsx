'use client';

import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        // base
        'py-3 px-4 rounded-lg font-bold text-white shadow transition-colors duration-200',
        // colors (cat仕様)
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-[#007bff] hover:bg-[#0069d9] active:bg-[#005dc1]',
        // focus ring
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff]',
        className,
      ].join(' ')}
      style={{ fontSize: '1.1rem' }}
    >
      {children}
    </button>
  );
}
