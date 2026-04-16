'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function AlertPage() {
  const router = useRouter()

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cream via-red-50/20 to-red-100/30 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Animated danger blobs */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-medical-red/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-medical-red/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative z-10 text-center max-w-md">
        {/* Pulsing Alert Icon */}
        <div className="text-8xl mb-6 inline-block animate-pulse-glow">
          🚨
        </div>

        {/* Alert Title */}
        <h1 className="text-6xl font-bold text-medical-dark mb-6 leading-tight animate-slide-down">
          Alert!
        </h1>

        {/* Alert Message Card */}
        <div className="glass-card rounded-3xl p-8 mb-8 backdrop-blur-xl animate-slide-up border-medical-red/20">
          <p className="text-2xl font-bold text-medical-dark mb-4">
            Abnormal foot temperature detected!
          </p>
          <p className="text-lg text-medical-light">
            Your foot temperature is abnormally high. Immediate attention is required.
          </p>
        </div>

        {/* Action Status Card */}
        <div className="glass-card rounded-3xl p-4 mb-8 backdrop-blur-lg border-medical-red/10">
          <p className="text-medical-dark font-semibold">
            ⚠ Action Required:
          </p>
          <p className="text-medical-light text-sm mt-2">
            Please contact your healthcare provider or visit the nearest medical facility immediately.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => router.push('/dashboard')}
            variant="primary"
            size="lg"
            className="w-full"
            ariaLabel="Return to dashboard"
          >
            Back to Dashboard
          </Button>

          <Button
            onClick={() => {
              alert('Emergency contact system activated - call 911 or your local emergency number')
            }}
            variant="danger"
            size="lg"
            className="w-full"
            ariaLabel="Contact emergency services"
          >
            📞 Emergency Services
          </Button>
        </div>

        {/* Emergency Info */}
        <div className="mt-12 glass-card rounded-3xl p-4 backdrop-blur-lg text-center">
          <p className="text-sm font-semibold text-medical-red">
            For life-threatening emergencies, call 911 immediately
          </p>
        </div>
      </div>
    </div>
  )
}
