'use client'

import React from 'react'

interface TempCircleProps {
  temperature: number
}

export default function TempCircle({ temperature }: TempCircleProps) {
  const isNormal = temperature <= 37.5
  const percentage = Math.min(((temperature - 35) / 4) * 100, 100)

  const ringColor = isNormal
    ? 'from-medical-green via-emerald-400 to-emerald-600'
    : 'from-medical-red via-red-400 to-red-600'

  const glowColor = isNormal
    ? 'shadow-medical-green/20'
    : 'shadow-medical-red/50'

  const statusText = isNormal ? 'Normal' : 'Abnormal'
  const statusColor = isNormal
    ? 'text-medical-green'
    : 'text-medical-red'

  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-fade-in">
      {/* Glass Container */}
      <div className={`relative w-80 h-80 rounded-full glass-card flex items-center justify-center shadow-2xl ${glowColor} ${isNormal ? '' : 'animate-pulse-glow'}`}>
        {/* Gradient Ring Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
        >
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />

          {/* Progress circle with gradient */}
          <defs>
            <linearGradient
              id="tempGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              {isNormal ? (
                <>
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </>
              )}
            </linearGradient>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#tempGradient)"
            strokeWidth="8"
            strokeDasharray={`${(percentage / 100) * 565.48} 565.48`}
            strokeLinecap="round"
            className="transition-all duration-700 origin-center -rotate-90"
            transform="rotate(-90 100 100)"
          />
        </svg>

        {/* Center Content */}
        <div className="relative z-10 text-center">
          <div className="text-7xl font-bold text-medical-dark tabular-nums mb-2">
            {temperature.toFixed(1)}
            <span className="text-3xl ml-1">°</span>
          </div>
          <div className={`text-lg font-bold uppercase tracking-wider ${statusColor}`}>
            {statusText}
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full ${isNormal ? 'border-medical-green/20' : 'border-medical-red/20'}`}>
        <span className="text-xl">
          {isNormal ? '✓' : '⚠'}
        </span>
        <span className={`font-semibold ${statusColor}`}>
          {isNormal ? 'Temperature Normal' : 'Temperature Abnormal'}
        </span>
      </div>

      {/* Info Text */}
      <p className="text-base text-medical-light text-center max-w-sm">
        {isNormal
          ? 'Your foot temperature is within normal range'
          : 'Please contact your healthcare provider immediately'}
      </p>
    </div>
  )
}
