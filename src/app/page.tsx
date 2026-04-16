'use client'

import Link from 'next/link'

export default function SplashScreen() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-cream via-neutral-50 to-glass-mint flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-medical-green/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-glass-blue/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-md">
        {/* Main Icon */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="text-9xl drop-shadow-lg">🦶</div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-medical-dark mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Smart FootCare
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-medical-dark/80 mb-4 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Diabetic Foot Monitoring
        </p>
        
        <p className="text-lg text-medical-light mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Real-time temperature monitoring with instant alerts
        </p>

        {/* Description Card */}
        <div className="glass-card rounded-3xl p-6 mb-12 backdrop-blur-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-base text-medical-dark">
            Monitor your foot temperature in real-time for diabetic care management and early detection of complications.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/login">
          <button
            className="glass-button-primary button-lg w-full min-h-[56px] rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-xl active:scale-[0.98] animate-slide-up transition-all" 
            aria-label="Get started with Smart FootCare"
            style={{ animationDelay: '0.5s' }}
          >
            Get Started
            <span className="ml-2">→</span>
          </button>
        </Link>

        {/* Footer text */}
        <p className="text-sm text-medical-light mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          For diabetic patients • Healthcare grade monitoring system
        </p>
      </div>
    </div>
  )
}
