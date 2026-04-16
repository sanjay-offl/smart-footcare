'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import BottomNav from '@/components/layout/BottomNav'
import TemperatureDisplay from '@/components/features/TemperatureDisplay'

export default function MonitorPage() {
  const [temperature, setTemperature] = useState(36.5)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    const fetchInitialTemp = async () => {
      try {
        const response = await fetch('/api/temp')
        const data = await response.json()
        setTemperature(data.temperature)
      } catch (error) {
        console.error('Failed to fetch temperature:', error)
      }
    }

    fetchInitialTemp()
  }, [])

  const handleFetchTemp = async () => {
    setRefreshing(true)
    try {
      const response = await fetch('/api/temp')
      const data = await response.json()
      setTemperature(data.temperature)
    } catch (error) {
      console.error('Failed to fetch temperature:', error)
    }
    setRefreshing(false)
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cream via-neutral-50 to-glass-mint pb-32">
      <div className="max-w-md mx-auto px-4 pt-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-2">Advanced Monitor</h1>
          <p className="text-lg text-medical-light">Detailed monitoring controls</p>
        </div>

        {/* Temperature Display */}
        <div className="mb-8 animate-slide-up">
          <TemperatureDisplay temperature={temperature} />
        </div>

        {/* Status Card */}
        <div className="glass-card rounded-3xl p-6 mb-6 backdrop-blur-md animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">Current Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-medical-green/10 to-emerald-500/10 rounded-3xl border border-medical-green/20">
                <span className="text-base font-semibold text-medical-dark">Temperature</span>
                <span className="text-3xl font-bold text-medical-green tabular-nums">
                  {temperature.toFixed(1)}°
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-medical-light/5 rounded-3xl border border-medical-light/10">
                <span className="text-base font-semibold text-medical-dark">Status</span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold ${
                    temperature <= 37.5
                      ? 'bg-medical-green/20 text-medical-green border border-medical-green/30'
                      : 'bg-medical-red/20 text-medical-red border border-medical-red/30'
                  }`}
                >
                  {temperature <= 37.5 ? '✓ Normal' : '⚠ Abnormal'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-6 animate-slide-up">
          <Button
            onClick={handleFetchTemp}
            variant="primary"
            size="lg"
            loading={refreshing}
            className="w-full"
            ariaLabel="Refresh temperature reading"
          >
            {refreshing ? 'Refreshing...' : '🔄 Refresh Reading'}
          </Button>
        </div>

        {/* Guidelines Card */}
        <div className="glass-card rounded-3xl p-6 backdrop-blur-md animate-fade-in">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">Monitoring Tips</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">📊</div>
              <div>
                <p className="font-bold text-medical-dark">Regular Checks</p>
                <p className="text-sm text-medical-light">Monitor daily, especially after activity</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🌡️</div>
              <div>
                <p className="font-bold text-medical-dark">Normal Range</p>
                <p className="text-sm text-medical-light">32-35°C is typical for foot temperature</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">⚠️</div>
              <div>
                <p className="font-bold text-medical-dark">Alert Threshold</p>
                <p className="text-sm text-medical-light">Above 37.5°C requires immediate attention</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">💪</div>
              <div>
                <p className="font-bold text-medical-dark">Foot Care</p>
                <p className="text-sm text-medical-light">Keep feet clean, dry, and protected</p>
              </div>
            </div>
          </div>

          {/* Alert Info */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="bg-amber-100/20 border border-amber-200/30 rounded-2xl p-3">
              <p className="text-sm text-amber-900/80">
                💡 Tip: Temperature readings are most accurate when taken after 10-15 minutes of rest
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
