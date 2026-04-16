'use client'

import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  interactive = false,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseClasses = `glass-card rounded-3xl transition-all duration-300 ${paddingClasses[padding]}`
  const interactiveClass = interactive ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''

  return (
    <div className={`${baseClasses} ${interactiveClass} ${className}`}>
      {children}
    </div>
  )
}
