import React from 'react';

interface MaterialButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'active';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export function MaterialButton({
  children,
  variant = 'default',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon
}: MaterialButtonProps) {
  const baseStyles = `
    h-12 /* 48px height */
    min-w-[100px]
    px-4 /* 16px horizontal padding */
    rounded
    font-medium
    tracking-[0.5px]
    uppercase
    text-sm /* 14px */
    text-center
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
    flex
    items-center
    justify-center
    gap-2
  `;

  const variantStyles = {
    default: `
      bg-white
      border
      border-[#E0E0E0]
      text-[#333333]
      hover:bg-[#F5F5F5]
      focus:ring-gray-500
    `,
    active: `
      bg-[#2196F3]
      text-white
      border-none
      hover:bg-[#1976D2]
      focus:ring-blue-500
    `
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}