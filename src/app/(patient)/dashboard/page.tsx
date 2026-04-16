'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import TempCircle from '@/components/ui/TempCircle'
import Button from '@/components/ui/Button'
import BottomNav from '@/components/layout/BottomNav'
import AlertBox from '@/components/features/AlertBox'

export default function DashboardPage() {
  const router = useRouter()
  const [temperature, setTemperature] = useState(36.5)
  const [loading, setLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('/api/temp')
        const data = await response.json()
        setTemperature(data.temperature)
        setLastUpdate(new Date())

        if (data.temperature > 37.5) {
          router.push('/alert')
        }
      } catch (error) {
        console.error('Failed to fetch temperature:', error)
      }
    }

    fetchTemperature()
    const interval = setInterval(fetchTemperature, 2000)

    return () => clearInterval(interval)
  }, [router])

  const handleSimulateDanger = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/temp', { method: 'POST' })
      const data = await response.json()
      setTemperature(data.temperature)
      setLastUpdate(new Date())
      setTimeout(() => {
        router.push('/alert')
      }, 500)
    } catch (error) {
      console.error('Failed to simulate danger:', error)
    }
    setLoading(false)
  }

  const patientName = typeof window !== 'undefined' ? localStorage.getItem('patientName') || 'Patient' : 'Patient'

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cream via-neutral-50 to-glass-mint pb-32">
      <div className="max-w-md mx-auto px-4 pt-6">
        {/* Header with greeting */}
        <div className="mb-8 animate-fade-in">
          <p className="text-sm font-bold text-medical-light uppercase tracking-wider mb-1">
            Welcome back
          </p>
          <h1 className="text-5xl font-bold text-medical-dark mb-2">Hi, {patientName}!</h1>
          <p className="text-lg text-medical-light">Monitor your foot temperature</p>
        </div>

        {/* Temperature Circle */}
        <div className="my-8 animate-slide-up">
          <TempCircle temperature={temperature} />
        </div>

        {/* Last Update Info */}
        {lastUpdate && (
          <div className="glass-card rounded-3xl p-4 text-center mb-6 animate-fade-in backdrop-blur-md">
            <p className="text-sm text-medical-light">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </p>
          </div>
        )}

        {/* Status Alert */}
        {temperature > 37.5 && (
          <div className="mb-6 animate-slide-down">
            <AlertBox
              type="danger"
              message="Temperature is above normal. Please contact your healthcare provider immediately."
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4 mb-6">
          <Button
            onClick={handleSimulateDanger}
            variant="danger"
            size="lg"
            loading={loading}
            className="w-full"
            ariaLabel="Simulate temperature danger for testing"
          >
            {loading ? 'Simulating...' : 'Test Alert (39°C)'}
          </Button>

          <Button
            onClick={() => router.push('/history')}
            variant="secondary"
            size="lg"
            className="w-full"
            ariaLabel="View your temperature history"
          >
            View History
          </Button>
        </div>

        {/* Temperature Guidelines Card */}
        <div className="glass-card rounded-3xl p-6 animate-fade-in backdrop-blur-md">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">Temperature Guidelines</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-medical-green">Normal Temperature</p>
                <p className="text-sm text-medical-light">32-35°C (foot temperature)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠</span>
              <div>
                <p className="font-bold text-medical-red">Abnormal Temperature</p>
                <p className="text-sm text-medical-light">&gt; 37.5°C - seek medical attention</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-medical-light/70 mt-4 pt-4 border-t border-white/20">
            Readings update automatically every 2 seconds. Consistent monitoring helps detect complications early.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
