'use client'

import React from 'react'

type AlertType = 'warning' | 'danger' | 'info' | 'success'

interface AlertBoxProps {
  message: string
  type?: AlertType
  onClose?: () => void
}

export default function AlertBox({
  message,
  type = 'info',
  onClose,
}: AlertBoxProps) {
  const typeConfig = {
    warning: {
      bgClass: 'bg-amber-100/20 backdrop-blur-md border-amber-200/30',
      textClass: 'text-amber-900',
      icon: '⚠️',
    },
    danger: {
      bgClass: 'bg-red-100/20 backdrop-blur-md border-red-200/30',
      textClass: 'text-red-900',
      icon: '🚨',
    },
    info: {
      bgClass: 'bg-blue-100/20 backdrop-blur-md border-blue-200/30',
      textClass: 'text-blue-900',
      icon: 'ℹ️',
    },
    success: {
      bgClass: 'bg-green-100/20 backdrop-blur-md border-green-200/30',
      textClass: 'text-green-900',
      icon: '✓',
    },
  }

  const config = typeConfig[type]

  return (
    <div
      className={`glass-card rounded-3xl ${config.bgClass} border p-4 flex items-center gap-3 animate-slide-up`}
      role="alert"
    >
      <span className="text-2xl flex-shrink-0">{config.icon}</span>
      <p className={`font-semibold ${config.textClass} flex-1`}>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-lg opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  )
}
