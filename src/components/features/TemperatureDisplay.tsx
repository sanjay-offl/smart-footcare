'use client'

import React from 'react'

interface TemperatureDisplayProps {
  temperature: number
}

export default function TemperatureDisplay({ temperature }: TemperatureDisplayProps) {
  const isNormal = temperature <= 37.5
  const statusColor = isNormal ? 'text-medical-green' : 'text-medical-red'
  const statusText = isNormal ? '✓ Normal' : '⚠ Abnormal'

  return (
    <div className="glass-card rounded-3xl p-8 animate-fade-in text-center backdrop-blur-lg">
      <p className="text-base font-semibold text-medical-light uppercase tracking-wider mb-3">
        Current Temperature
      </p>
      <div className="text-6xl font-bold text-medical-dark mb-2 tabular-nums transition-all duration-700">
        {temperature.toFixed(1)}°C
      </div>
      <p className={`text-lg font-bold ${statusColor} uppercase tracking-wider transition-colors duration-300`}>
        {statusText}
      </p>
    </div>
  )
}
