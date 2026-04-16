'use client'

import React from 'react'

interface HistoryEntry {
  id: string
  temperature: number
  timestamp: string
  status: string
}

interface HistoryTableProps {
  data: HistoryEntry[]
}

export default function HistoryTable({ data }: HistoryTableProps) {
  if (data.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center animate-fade-in">
        <p className="text-lg text-medical-light">No temperature history available yet.</p>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-3xl overflow-hidden animate-fade-in">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-medical-green/20 to-emerald-600/20 backdrop-blur-md border-b border-white/20">
              <th className="px-6 py-4 text-left text-sm font-bold text-medical-dark">Time</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-medical-dark">Temperature</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-medical-dark">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, idx) => (
              <tr
                key={entry.id}
                className={`border-b border-white/10 transition-colors hover:bg-white/20 ${
                  idx % 2 === 0
                    ? 'bg-white/5 backdrop-blur-sm'
                    : 'bg-transparent'
                }`}
              >
                <td className="px-6 py-4 text-lg font-semibold text-medical-dark">
                  {entry.timestamp}
                </td>
                <td className="px-6 py-4 text-lg font-bold text-medical-dark tabular-nums">
                  {entry.temperature.toFixed(1)}°C
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-sm border ${
                    entry.temperature <= 37.5
                      ? 'bg-medical-green/20 text-medical-green border-medical-green/30'
                      : 'bg-medical-red/20 text-medical-red border-medical-red/30'
                  }`}>
                    <span>{entry.temperature <= 37.5 ? '✓' : '⚠'}</span>
                    {entry.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
