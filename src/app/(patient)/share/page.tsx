'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/ui/Button'
import BottomNav from '@/components/layout/BottomNav'
import AlertBox from '@/components/features/AlertBox'

interface SharedContact {
  id: string
  email: string
  type: 'doctor' | 'family'
  sharedAt: string
}

export default function SharePage() {
  const [doctorEmail, setDoctorEmail] = useState('')
  const [familyEmail, setFamilyEmail] = useState('')
  const [sharedContacts, setSharedContacts] = useState<SharedContact[]>([
    {
      id: '1',
      email: 'dr.smith@hospital.com',
      type: 'doctor',
      sharedAt: '2024-03-15',
    },
  ])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleShare = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!doctorEmail && !familyEmail) {
      setError('Please enter at least one email address')
      return
    }

    if (doctorEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(doctorEmail)) {
      setError('Please enter a valid doctor email')
      return
    }

    if (familyEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(familyEmail)) {
      setError('Please enter a valid family email')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const newContacts: SharedContact[] = []

      if (doctorEmail) {
        newContacts.push({
          id: Date.now().toString(),
          email: doctorEmail,
          type: 'doctor',
          sharedAt: new Date().toISOString().split('T')[0],
        })
        setDoctorEmail('')
      }

      if (familyEmail) {
        newContacts.push({
          id: (Date.now() + 1).toString(),
          email: familyEmail,
          type: 'family',
          sharedAt: new Date().toISOString().split('T')[0],
        })
        setFamilyEmail('')
      }

      setSharedContacts([...newContacts, ...sharedContacts])
      setSuccess('Data shared successfully!')
      setLoading(false)

      setTimeout(() => setSuccess(''), 3000)
    }, 500)
  }

  const handleRevoke = (id: string) => {
    setSharedContacts(sharedContacts.filter((contact) => contact.id !== id))
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cream via-neutral-50 to-glass-mint pb-32">
      <div className="max-w-md mx-auto px-4 pt-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-2">Share Data</h1>
          <p className="text-lg text-medical-light">Grant access to doctors & family</p>
        </div>

        {/* Share Form Card */}
        <div className="glass-card rounded-3xl p-8 mb-6 backdrop-blur-xl animate-slide-up">
          <form onSubmit={handleShare} className="space-y-6">
            {/* Error Alert */}
            {error && (
              <AlertBox type="danger" message={error} />
            )}

            {/* Success Alert */}
            {success && (
              <AlertBox type="success" message={success} />
            )}

            {/* Doctor Email */}
            <div>
              <label htmlFor="doctor-email" className="block text-base font-bold text-medical-dark mb-3">
                Doctor's Email
              </label>
              <input
                id="doctor-email"
                type="email"
                value={doctorEmail}
                onChange={(e) => setDoctorEmail(e.target.value)}
                placeholder="doctor@hospital.com"
                aria-label="Doctor email address"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
              />
            </div>

            {/* Family Email */}
            <div>
              <label htmlFor="family-email" className="block text-base font-bold text-medical-dark mb-3">
                Family Member's Email
              </label>
              <input
                id="family-email"
                type="email"
                value={familyEmail}
                onChange={(e) => setFamilyEmail(e.target.value)}
                placeholder="family@email.com"
                aria-label="Family member email address"
                className="w-full bg-white/50 border border-white/30 rounded-3xl px-6 py-4 text-lg text-medical-dark placeholder-medical-light/50 transition-all focus:bg-white/70 focus:ring-2 focus:ring-medical-green/20 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              className="w-full"
              ariaLabel="Share your health data"
            >
              {loading ? 'Sharing...' : '📤 Share Data'}
            </Button>
          </form>
        </div>

        {/* Active Shares */}
        {sharedContacts.length > 0 && (
          <div className="glass-card rounded-3xl p-6 mb-6 backdrop-blur-md animate-fade-in">
            <h3 className="text-2xl font-bold text-medical-dark mb-4">Active Shares</h3>
            <div className="space-y-3">
              {sharedContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-3 bg-white/30 rounded-2xl border border-white/20 hover:bg-white/40 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-medical-dark break-all">
                      {contact.email}
                    </p>
                    <p className="text-xs text-medical-light/70">
                      {contact.type === 'doctor' ? '👨‍⚕️ Doctor' : '👥 Family'} • {contact.sharedAt}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRevoke(contact.id)}
                    className="ml-3 px-3 py-1 text-xs font-bold text-medical-red hover:bg-red-100/30 rounded-lg transition-colors"
                    aria-label={`Revoke access for ${contact.email}`}
                  >
                    Revoke
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Privacy & Security Info */}
        <div className="glass-card rounded-3xl p-6 backdrop-blur-md animate-fade-in">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">Privacy & Security</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🔒</div>
              <div>
                <p className="font-bold text-medical-dark text-sm">End-to-End Encrypted</p>
                <p className="text-xs text-medical-light">Your data is encrypted and secure</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">👤</div>
              <div>
                <p className="font-bold text-medical-dark text-sm">Limited Access</p>
                <p className="text-xs text-medical-light">Recipients can only view shared data</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <p className="font-bold text-medical-dark text-sm">Revoke Anytime</p>
                <p className="text-xs text-medical-light">You can revoke access immediately</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">📋</div>
              <div>
                <p className="font-bold text-medical-dark text-sm">Activity Logged</p>
                <p className="text-xs text-medical-light">All sharing is logged for your records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
