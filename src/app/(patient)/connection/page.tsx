'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ConnectionPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cream via-neutral-50 to-glass-mint flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-medical-green/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-glass-blue/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

      <div className="glass-card rounded-3xl p-8 w-full max-w-md text-center backdrop-blur-xl animate-slide-up">
        {/* Loading Spinner */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-100 fill-medical-green"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-medical-dark mb-3">Connecting...</h1>

        {/* Status Text */}
        <div className="space-y-2 mb-8">
          <p className="text-lg font-semibold text-medical-green">Syncing with Device</p>
          <p className="text-sm text-medical-light">Establishing secure connection...</p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-3 h-3 bg-medical-green rounded-full animate-pulse-glow"></div>
          <div
            className="w-3 h-3 bg-medical-green rounded-full animate-pulse-glow"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-3 h-3 bg-medical-green rounded-full animate-pulse-glow"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>

        {/* Info text */}
        <p className="text-xs text-medical-light/70">Auto-redirecting in 2 seconds...</p>
      </div>
    </div>
  )
}
