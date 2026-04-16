'use client'

import React, { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: ReactNode
  ariaLabel?: string
}

export default function Button({
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  ariaLabel,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm min-h-[40px]',
    md: 'px-6 py-3.5 text-base min-h-[50px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]',
  }

  const variantClasses = {
    primary:
      'glass-button glass-button-primary',
    secondary:
      'glass-button glass-button-secondary',
    danger:
      'glass-button glass-button-danger',
  }

  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      className={`${variantClasses[variant]} ${sizeClasses[size]} inline-flex items-center justify-center gap-2 rounded-3xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {icon && !loading && icon}
      {children}
    </button>
  )
}
