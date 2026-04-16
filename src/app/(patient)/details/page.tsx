'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import AlertBox from '@/components/features/AlertBox'

export default function DetailsPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter your full name')
      return
    }

    if (!age) {
      setError('Please enter your age')
      return
    }

    const ageNum = parseInt(age, 10)
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 120) {
      setError('Please enter a valid age (18-120)')
      return
    }

    setLoading(true)
    localStorage.setItem('patientName', name)
    localStorage.setItem('patientAge', age)

    setTimeout(() => {
      router.push('/connection')
    }, 300)
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cream via-neutral-50 to-glass-mint flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-3">Your Information</h1>
          <p className="text-lg text-medical-light">Help us personalize your care</p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-3xl p-8 mb-6 backdrop-blur-xl animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Alert */}
            {error && (
              <AlertBox
                type="danger"
                message={error}
              />
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-base font-bold text-medical-dark mb-3">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                aria-label="Full name"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
                required
              />
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="age" className="block text-base font-bold text-medical-dark mb-3">
                Age
              </label>
              <input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                aria-label="Age"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
                min="18"
                max="120"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              className="w-full"
              ariaLabel="Continue to device connection"
            >
              {loading ? 'Continuing...' : 'Continue'}
            </Button>
          </form>
        </div>

        {/* Info Section */}
        <div className="glass-card rounded-3xl p-6 backdrop-blur-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold text-medical-dark mb-4">Why We Need This</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">📋</span>
              <span className="text-medical-light">Personalizes your health monitoring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">📊</span>
              <span className="text-medical-light">Age-appropriate health guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🔒</span>
              <span className="text-medical-light">Your data is secure & confidential</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
