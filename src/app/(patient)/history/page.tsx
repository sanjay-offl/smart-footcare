'use client'

import { useState, useEffect } from 'react'
import HistoryTable from '@/components/features/HistoryTable'
import BottomNav from '@/components/layout/BottomNav'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

interface HistoryEntry {
  id: string
  temperature: number
  timestamp: string
  status: string
}

export default function HistoryPage() {
  const router = useRouter()
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [filter, setFilter] = useState<'all' | 'normal' | 'abnormal'>('all')

  useEffect(() => {
    const mockHistory: HistoryEntry[] = [
      { id: '1', temperature: 36.5, timestamp: '10:30 AM', status: 'Normal' },
      { id: '2', temperature: 36.8, timestamp: '10:32 AM', status: 'Normal' },
      { id: '3', temperature: 37.2, timestamp: '10:34 AM', status: 'Normal' },
      { id: '4', temperature: 37.1, timestamp: '10:36 AM', status: 'Normal' },
      { id: '5', temperature: 36.9, timestamp: '10:38 AM', status: 'Normal' },
      { id: '6', temperature: 37.4, timestamp: '10:40 AM', status: 'Normal' },
      { id: '7', temperature: 37.0, timestamp: '10:42 AM', status: 'Normal' },
      { id: '8', temperature: 36.6, timestamp: '10:44 AM', status: 'Normal' },
    ]
    setHistory(mockHistory)
  }, [])

  const filteredHistory = history.filter((entry) => {
    if (filter === 'normal') return entry.temperature <= 37.5
    if (filter === 'abnormal') return entry.temperature > 37.5
    return true
  })

  const stats = {
    total: history.length,
    avgTemp: (history.reduce((sum, e) => sum + e.temperature, 0) / history.length).toFixed(1),
    maxTemp: Math.max(...history.map((e) => e.temperature)).toFixed(1),
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cream via-neutral-50 to-glass-mint pb-32">
      <div className="max-w-2xl mx-auto px-4 pt-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-2">Temperature History</h1>
          <p className="text-lg text-medical-light">View your readings and trends</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-slide-up">
          <div className="glass-card rounded-3xl p-4 text-center backdrop-blur-md">
            <p className="text-xs font-bold text-medical-light uppercase tracking-wider mb-2">Total</p>
            <p className="text-3xl font-bold text-medical-green">{stats.total}</p>
          </div>
          <div className="glass-card rounded-3xl p-4 text-center backdrop-blur-md">
            <p className="text-xs font-bold text-medical-light uppercase tracking-wider mb-2">Average</p>
            <p className="text-3xl font-bold text-medical-green">{stats.avgTemp}°</p>
          </div>
          <div className="glass-card rounded-3xl p-4 text-center backdrop-blur-md">
            <p className="text-xs font-bold text-medical-light uppercase tracking-wider mb-2">Max</p>
            <p className="text-3xl font-bold text-medical-red">{stats.maxTemp}°</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6 animate-fade-in">
          {(['all', 'normal', 'abnormal'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-3xl font-bold transition-all text-sm ${
                filter === f
                  ? f === 'normal'
                    ? 'bg-gradient-to-br from-medical-green to-emerald-600 text-white'
                    : f === 'abnormal'
                    ? 'bg-gradient-to-br from-medical-red to-red-600 text-white'
                    : 'bg-gradient-to-br from-glass-blue to-blue-500 text-white'
                  : 'glass-white text-medical-dark hover:bg-white/40'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* History Table */}
        {filteredHistory.length > 0 ? (
          <div className="mb-6 animate-slide-up">
            <HistoryTable data={filteredHistory} />
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-8 text-center mb-6 backdrop-blur-md animate-fade-in">
            <p className="text-lg text-medical-light">
              No {filter !== 'all' ? filter : ''} readings available yet.
            </p>
          </div>
        )}

        {/* Info Card */}
        <div className="glass-card rounded-3xl p-6 mb-6 backdrop-blur-md animate-fade-in">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">Temperature Ranges</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-medical-green">32-35°C: Healthy Range</p>
                <p className="text-sm text-medical-light">Normal foot temperature</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠</span>
              <div>
                <p className="font-bold text-amber-600">35-37.5°C: Mild Elevation</p>
                <p className="text-sm text-medical-light">Monitor closely</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚨</span>
              <div>
                <p className="font-bold text-medical-red">&gt;37.5°C: Abnormal</p>
                <p className="text-sm text-medical-light">Contact your healthcare provider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => router.push('/dashboard')}
          variant="secondary"
          size="lg"
          className="w-full animate-slide-up"
          ariaLabel="Return to dashboard"
        >
          Back to Dashboard
        </Button>
      </div>

      <BottomNav />
    </div>
  )
}
