'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import AlertBox from '@/components/features/AlertBox'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('patientEmail', email)
      router.push('/details')
    }, 500)
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cream via-neutral-50 to-glass-mint flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-7xl mb-6 drop-shadow-lg">🦶</div>
          <h1 className="text-5xl font-bold text-medical-dark mb-2">Welcome Back</h1>
          <p className="text-lg text-medical-light">Sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-3xl p-8 mb-6 backdrop-blur-xl animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Alert */}
            {error && (
              <AlertBox
                type="danger"
                message={error}
              />
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-base font-bold text-medical-dark mb-3">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-base font-bold text-medical-dark mb-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                aria-label="Password"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
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
              ariaLabel="Sign in to your account"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-sm text-medical-light/60">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Info Text */}
          <p className="text-center text-sm text-medical-light">
            For demonstration: use any email and password
          </p>
        </div>

        {/* Footer Info */}
        <div className="glass-card rounded-3xl p-4 text-center backdrop-blur-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs text-medical-light">
            ✓ Healthcare-grade monitoring system
          </p>
        </div>
      </div>
    </div>
  )
}
